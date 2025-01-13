---
title: First Steps
description: Getting started with your new T3 App
layout: ../../../layouts/docs.astro
lang: en
---

You just scaffolded a new T3 App and are ready to go. Here is the bare minimum to get your app working.

## Database

If your app includes Prisma, make sure to run `npx prisma db push` from the root directory of your app. This command will sync your Prisma schema with your database and will generate the TypeScript types for the Prisma Client based on your schema. Note that you need to restart the TypeScript server after doing this so that it can detect the generated types.

## Authentication

If your app includes NextAuth.js, we get you started with the `DiscordProvider`. This is one of the simplest providers that NextAuth.js offers, but it still requires a bit of initial setup on your part.

Of course, if you prefer to use a different auth provider, you can also use one of the [many providers](https://next-auth.js.org/providers/) that NextAuth.js offers.

1. You will need a Discord account, so register one if you haven't already.
2. Navigate to https://discord.com/developers/applications and click "New Application" in the top right corner. Give your application a name and agree to the Terms of Service.
3. Once your application has been created, navigate to "Settings → OAuth2 → General".
4. Copy the "Client ID" and add it to your `.env` as `DISCORD_CLIENT_ID`.
5. Click "Reset Secret", copy the new secret, and add it to your `.env` as `DISCORD_CLIENT_SECRET`.
6. Click "Add Redirect" and type in `http://localhost:3000/api/auth/callback/discord`.
   - For production deployment, follow the previous steps to create another Discord Application, but this time replace `http://localhost:3000` with the URL that you are deploying to.
7. Save Changes.
8. Set the `NEXTAUTH_SECRET` in `.env`. In development any string will work, for production see the note in `.env` on generating a secure secret.

You should now be able to log in.

## Next Steps

- If your app includes tRPC, check out `src/pages/index.tsx` and `src/server/trpc/router/example.ts` to see how tRPC queries work.
- Have a look around the `create-t3-app` docs, as well as the docs of the packages that your app includes.
- Join our [Discord](https://t3.gg/discord) and give us a star on [GitHub](https://github.com/t3-oss/create-t3-app)! :)
