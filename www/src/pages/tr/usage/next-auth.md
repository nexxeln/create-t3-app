---
title: NextAuth.js
description: Usage of NextAuth.js
layout: ../../../layouts/docs.astro
lang: en
---

When you want an authentication system in your Next.js application, NextAuth.js is an excellent solution to bring in the complexity of security without the hassle of having to build it yourself. It comes with an extensive list of providers to quickly add OAuth authentication and provides adapters for many databases and ORMs.

## Context Provider

In your app's entrypoint, you'll see that your application is wrapped in a [SessionProvider](https://next-auth.js.org/getting-started/client#sessionprovider):

```tsx:pages/_app.tsx
<SessionProvider session={session}>
  <Component {...pageProps} />
</SessionProvider>
```

This context provider allows your application to access the session data from anywhere in your application, without having to pass it down as props:

```tsx:pages/users/[id].tsx
import { useSession } from "next-auth/react";

const User = () => {
  const { data: session } = useSession();

  if (!session) {
    // Handle unauthenticated state, e.g. render a SignIn component
    return <SignIn />;
  }

  return <p>Welcome {session.user.name}!</p>;
};
```

## Inclusion of `user.id` on the Session

`create-t3-app` is configured to utilise the [session callback](https://next-auth.js.org/configuration/callbacks#session-callback) in the NextAuth.js config to include the user's ID within the `session` object.

```ts:pages/api/auth/[...nextauth].ts
callbacks: {
    session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
```

This is coupled with a type declaration file to make sure the `user.id` is typed when accessed on the `session` object. Read more about [`Module Augmentation`](https://next-auth.js.org/getting-started/typescript#module-augmentation) on NextAuth.js's docs.

```ts:types/next-auth.d.ts
import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user?: {
      id: string;
    } & DefaultSession["user"];
  }
}
```

The same pattern can be used to add any other data to the `session` object, such as a `role` field, but **should not be misused to store sensitive data** on the client.

## Usage with tRPC

When using NextAuth.js with tRPC, you can create reusable, protected procedures using [middleware](https://trpc.io/docs/v10/middlewares). This allows you to create procedures that can only be accessed by authenticated users. `create-t3-app` sets all of this up for you, allowing you to easily access the session object within authenticated procedures.

This is done in a two step process:

1. Grab the session from the request headers using the [`unstable_getServerSession`](https://next-auth.js.org/configuration/nextjs#unstable_getserversession) function. Don't worry, this function is safe to use - the name includes `unstable` only because the API implementation might change in the future. The advantage of using `unstable_getServerSession` instead of the regular `getSession` is that it's a server-side only function and doesn't trigger unnecessary fetch calls. `create-t3-app` creates a helper function that abstracts this peculiar API away.

```ts:server/common/get-server-auth-session.ts
export const getServerAuthSession = async (ctx: {
  req: GetServerSidePropsContext["req"];
  res: GetServerSidePropsContext["res"];
}) => {
  return await unstable_getServerSession(ctx.req, ctx.res, authOptions);
};
```

Using this helper function, we can grab the session and pass it through to the tRPC context:

```ts:server/trpc/context.ts
import { getServerAuthSession } from "../common/get-server-auth-session";

export const createContext = async (opts: CreateNextContextOptions) => {
  const { req, res } = opts;
  const session = await getServerAuthSession({ req, res });
  return await createContextInner({
    session,
  });
};
```

2. Create a tRPC middleware that checks if the user is authenticated. We then use the middleware in a `protectedProcedure`. Any caller to these procedures must be authenticated, or else an error will be thrown which can be appropriately handled by the client.

```ts:server/trpc/trpc.ts
const isAuthed = t.middleware(({ ctx, next }) => {
  if (!ctx.session || !ctx.session.user) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
  return next({
    ctx: {
      // infers the `session` as non-nullable
      session: { ...ctx.session, user: ctx.session.user },
    },
  });
});

export const protectedProcedure = t.procedure.use(isAuthed);
```

The session object is a light, minimal representation of the user and only contains a few fields. When using the `protectedProcedures`, you have access to the user's id which can be used to fetch more data from the database.

```ts:server/trpc/router/user.ts
const userRouter = router({
  me: protectedProcedure.query(async ({ ctx }) => {
    const user = await prisma.user.findUnique({
      where: {
        id: ctx.session.user.id,
      },
    });
    return user;
  }),
});
```

## Usage with Prisma

Getting NextAuth.js to work with Prisma requires a lot of [initial setup](https://next-auth.js.org/adapters/models/). `create-t3-app` handles all of this for you, and if you select both Prisma and NextAuth.js, you'll get a fully working authentication system with all the required models preconfigured. We ship your scaffolded app with a preconfigured Discord OAuth provider, which we chose because it is one of the easiest to get started with - just provide your tokens in the `.env` and you're good to go. However, you can easily add more providers by following the [NextAuth.js docs](https://next-auth.js.org/providers/). Note that certain providers require extra fields to be added to certain models. We recommend you read the documentation for the provider you would like to use to make sure you have all the required fields.

### Adding new fields to your models

When adding new fields to any of the `User`, `Account`, `Session`, or `VerificationToken` models (most likely you'd only need to modify the `User` model), you need to keep in mind that the [Prisma adapter](https://next-auth.js.org/adapters/prisma) automatically creates fields on these models when new users sign up and log in. Therefore, when adding new fields to these models, you must provide default values for them, since the adapter is not aware of these fields.

If for example, you'd like to add a `role` to the `User` model, you would need to provide a default value to the `role` field. This is done by adding a `@default` value to the `role` field in the `User` model:

```diff:prisma/schema.prisma
+ enum Role {
+   USER
+   ADMIN
+ }

  model User {
    ...
+   role Role @default(USER)
  }
```

## Usage with Next.js middleware

Usage of NextAuth.js with Next.js middleware [requires the use of the JWT session strategy](https://next-auth.js.org/configuration/nextjs#caveats) for authentication. This is because the middleware is only able to access the session cookie if it is a JWT. By default, `create-t3-app` is configured to use the **default** database strategy, in combination with Prisma as the database adapter.

## Setting up the default DiscordProvider

1. Head to [the Applications section in the Discord Developer Portal](https://discord.com/developers/applications), and click on "New Application"
2. In the settings menu, go to "OAuth2 => General"

- Copy the Client ID and paste it in `DISCORD_CLIENT_ID` in `.env`.
- Under Client Secret, click "Reset Secret" and copy that string to `DISCORD_CLIENT_SECRET` in `.env`. Be careful as you won't be able to see this secret again, and resetting it will cause the existing one to expire.
- Click "Add Redirect" and paste in `<app url>/api/auth/callback/discord` (example for local development: <code class="break-all">http://localhost:3000/api/auth/callback/discord</code>)
- Save your changes
- It is possible, but not recommended, to use the same Discord Application for both development and production. You could also consider [Mocking the Provider](https://github.com/trpc/trpc/blob/main/examples/next-prisma-websockets-starter/src/pages/api/auth/%5B...nextauth%5D.ts) during development.

## Useful Resources

| Resource                          | Link                                    |
| --------------------------------- | --------------------------------------- |
| NextAuth.js Docs                  | https://next-auth.js.org/               |
| NextAuth.js GitHub                | https://github.com/nextauthjs/next-auth |
| tRPC Kitchen Sink - with NextAuth | https://kitchen-sink.trpc.io/next-auth  |
