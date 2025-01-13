---
title: Environment Variables
description: Getting started with create-t3-app
layout: ../../../layouts/docs.astro
lang: en
---

Create-T3-App uses [Zod](https://github.com/colinhacks/zod) for validating your environment variables at runtime _and_ buildtime by providing some additional files in the `env`-directory:

📁 src/env

┣ 📄 client.mjs

┣ 📄 schema.mjs

┣ 📄 server.mjs

The content of these files may seem scary at first glance, but don't worry, it's not as complicated as it looks. Let's take a look at them one by one, and walk through the process of adding additional environment variables.

_TLDR; If you want to add a new environment variable, you must add it to both your `.env` as well as define the validator in `env/schema.mjs`._

## schema.mjs

This is the file you will actually touch. It contains two schemas, one for server-side environment variables and one for client-side as well as a `clientEnv` object.

```ts:env/schema.mjs
export const serverSchema = z.object({
  // DATABASE_URL: z.string().url(),
});

export const clientSchema = z.object({
  // NEXT_PUBLIC_WS_KEY: z.string(),
});

export const clientEnv = {
  // NEXT_PUBLIC_WS_KEY: process.env.NEXT_PUBLIC_WS_KEY,
};
```

### Server Schema

Define your server-side environment variables schema here.

Make sure you do not prefix keys here with `NEXT_PUBLIC`. Validation will fail if you do to help you detect invalid configuration.

### Client Schema

Define your client-side environment variables schema here.

To expose them to the client you need to prefix them with `NEXT_PUBLIC`. Validation will fail if you don't to help you detect invalid configuration.

### clientEnv Object

Destruct the `process.env` here.

We need a JavaScript object that we can parse our Zod-schemas with and due to the way Next.js handles environment variables, you can't destruct `process.env` like a regular object, so we need to do it manually.

TypeScript will help you make sure that you have entered the keys in both `clientEnv` as well as `clientSchema`.

```ts
// ❌ This doesn't work, we need to destruct it manually
const schema = z.object({
  NEXT_PUBLIC_WS_KEY: z.string(),
});

const validated = schema.parse(process.env);
```

## server.mjs & client.mjs

This is where the validation happens and exports the validated objects. You shouldn't need to modify these files.

## Using Environment Variables

When you want to use your environment variables, you can import them from `env/client.mjs` or `env/server.mjs` depending on where you want to use them:

```ts:pages/api/hello.ts
import { env } from "../../env/server.mjs";

// `env` is fully typesafe and provides autocompletion
const dbUrl = env.DATABASE_URL;
```

## .env.example

Since the default `.env` file is not committed to version control, we have also included a `.env.example` file, in which you can optionally keep a copy of your `.env` file with any secrets removed. This is not required, but we recommend keeping the example up to date to make it as easy as possible for contributors to get started with their environment.

Some frameworks and build tools, like Next.js, suggest that you store secrets in a `.env.local` file and commit `.env` files to your project. This is not recommended, as it could make it easy to accidentally commit secrets to your project. Instead, we recommend that you store secrets in `.env`, keep your `.env` file in your `.gitignore` and only commit `.env.example` files to your project.

## Adding Environment Variables

To ensure your build never completes without the environment variables the project needs, you will need to add new environment variables in **two** locations:

📄 `.env`: Enter your environment variable like you would normally do in a `.env` file, i.e. `KEY=VALUE`

📄 `schema.mjs`: Add the appropriate validation logic for the environment variable by defining a Zod schema, e.g. `KEY: z.string()`

Optionally, you can also keep `.env.example` updated:

📄 `.env.example`: Enter your environment variable, but be sure to not include the value if it is secret, i.e. `KEY=VALUE` or `KEY=`

### Example

_I want to add my Twitter API Token as a server-side environment variable_

1. Add the environment variable to `.env`:

```
TWITTER_API_TOKEN=1234567890
```

2. Add the environment variable to `schema.mjs`:

```ts
export const serverSchema = z.object({
  // ...
  TWITTER_API_TOKEN: z.string(),
});
```

_**NOTE:** An empty string is still a string, so `z.string()` will accept an empty string as a valid value. If you want to make sure that the environment variable is not empty, you can use `z.string().min(1)`._

3. optional: Add the environment variable to `.env.example`, but don't include the token

```
TWITTER_API_TOKEN=
```
