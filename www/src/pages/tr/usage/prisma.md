---
title: Prisma
description: Usage of Prisma
layout: ../../../layouts/docs.astro
lang: en
---

Prisma is an ORM for TypeScript, that allows you to define your database schema and models in a `schema.prisma` file, and then generate a type-safe client that can be used to interact with your database from your backend.

## Prisma Client

Located at `/server/db/client.ts`, the Prisma Client is instantiated as a global variable (as recommended as [best practice](https://www.prisma.io/docs/guides/database/troubleshooting-orm/help-articles/nextjs-prisma-client-dev-practices#problem) by the team at Prisma) and exported to be used in your API routes. We include the Prisma Client in [Context](/en/usage/trpc#-servertrpccontextts) by default and recommend using this instead of importing it separately in each file.

## Schema

You will find the Prisma schema file at `/prisma/schema.prisma`. This file is where you define your database schema and models, and is used when generating the Prisma Client.

### With NextAuth.js

When you select NextAuth.js in combination with Prisma, the schema file is generated and set up for you with the recommended values for the `User`, `Session`, `Account`, and `VerificationToken` models, as per the [NextAuth.js documentation](https://next-auth.js.org/adapters/prisma).

## Default Database

The default database is an SQLite database, which is great for development and quickly spinning up a proof-of-concept but is not recommended for production. You can change the database to use by changing the `provider` in the `datasource` block to either `postgresql` or `mysql`, and then updating the connection string within environment variables to point to your database.

## Seeding your Database

[Seeding your database](https://www.prisma.io/docs/guides/database/seed-database) is a great way to quickly populate your database with test data to help you get started. In order to setup seeding, you will need to create a `seed.ts` file in the `/prisma` directory, and then add a `seed` script to your `package.json` file. You'll also need some TypeScript runner that can execute the seed-script. We recommend [tsx](https://github.com/esbuild-kit/tsx), which is a very performant TypeScript runner that uses esbuild and doesn't require any ESM configuration, but `ts-node` or other runners will work as well.

```jsonc:package.json
{
  "scripts": {
    "db-seed": "NODE_ENV=development prisma db seed"
  },
  "prisma": {
    "seed": "tsx prisma/seed.ts"
  }
}
```

```ts:prisma/seed.ts
import { prisma } from "../src/server/db/client";

async function main() {
  const id = "cl9ebqhxk00003b600tymydho";
  await prisma.example.upsert({
    where: {
      id,
    },
    create: {
      id,
    },
    update: {},
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
```

Then, just run `pnpm db-seed` (or `npm`/`yarn`) to seed your database.

## Useful Resources

| Resource                     | Link                                                                                                                                              |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| Prisma Docs                  | https://www.prisma.io/docs/                                                                                                                       |
| Prisma GitHub                | https://github.com/prisma/prisma                                                                                                                  |
| NextAuth.JS Prisma Adapter   | https://next-auth.js.org/adapters/prisma                                                                                                          |
| Planetscale Connection Guide | https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project/relational-databases/connect-your-database-typescript-planetscale |
