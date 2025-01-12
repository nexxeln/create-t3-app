---
title: Drizzle
description: Usage of Drizzle
layout: ../../../layouts/docs.astro
lang: en
---

Drizzle is an ORM for TypeScript, that allows you to define your database schema and models in a `schema.ts` file. Using the drizzle client on the backend allows you to interact with your database while maintaining complete type safety.

Drizzle is three major components

- `drizzle-orm`: the ORM itself. Installed as a dependency.
- `drizzle-kit`: a CLI app used for managing migrations. Installed as a dependency.
- `drizzle-studio`: a GUI for managing you database. Installed as part of drizzle-kit.

## Drizzle Config

Located at `/drizzle.config.ts`. Here you can customize options like where your schema and migrations are located. Credentials provided here will be used by drizzle-kit for performing migrations. [Drizzle Documentation](https://orm.drizzle.team/docs/drizzle-config-file)

## Drizzle Client

Located at `src/server/db/index.ts`. The Drizzle Client is instantiated as a global variable and exported to be used in your API routes. We include the Drizzle Client in [Context](/en/usage/trpc#-serverapitrpcts) by default and recommend using this instead of importing it separately in each file. Credentials provided here will be used at runtime by drizzle-orm.

## Drizzle Schema

Located at `src/server/db/schema.ts`. This file is where you define your database schema and models. For those familiar with Prisma, the concepts remain the same but the syntax is different. The entire file is written in plain Typescript meaning it's a little more verbose. A major advantage however, is that schema types are applied immediately on save without the need to re-generate types after every change. [Drizzle Documentation](https://orm.drizzle.team/docs/sql-schema-declaration)

### With NextAuth.js

When you select NextAuth.js in combination with Drizzle, the schema file is generated and set up for you with the recommended values for the `User`, `Session`, `Account`, and `VerificationToken` models, as per the [NextAuth.js documentation](https://authjs.dev/getting-started/adapters/drizzle).

## Default Database

The default database is a local SQLite database, which is great for development and quickly spinning up a proof-of-concept. When you wish to move on to a production database it is as simple as updating the database connection string within environment variables and changing the drizzle driver to match. For detailed instructions see [vendors](#database-vendors).

## Commands

T3 app installs Drizzle with the following commands. They can be run with `pnpm run`.

- `db:generate` Generate new migrations based on the current schema.
- `db:migrate` Apply migrations to the database.
- `db:push` Apply current schema to the database without creating migrations. Typically used in early stages for rapid prototyping.
- `db:studio` View database in Drizzle studio.

## Migrations

Migrations data is stored in `/Drizzle`. Drizzle will modify these files automatically whenever changes are executed against the database. It is not recommended to modify these files manually. By default, a log of all successful migrations is also stored in a `__drizzle_migrations` table in the database (PostgreSQL only).

- A log of every migration applied to the database is stored in `_journal.json`.
- Individual migrations are stored as pure SQL files. These are numbered and given a jaunty name e.g. `0000_salty_the_spike.sql`
- Additionally, each migration gets its own snapshot file which represents the database state directly after that migration e.g. `0000_snapshot.json`

## Database Vendors

Drizzle comes with drivers for standard PostgreSQL, MySQL and SQLite connections. These will handle the majority of cases. It also comes bundled with a host of drivers for some of the most popular online database vendors. These may not be strictly necessary to create a connection but will allow you to utilize more advanced behaviours like http/websocket connections. Detailed instructions for all the major vendors can be found [here](https://orm.drizzle.team/docs/get-started).

## Useful Resources

| Resource                    | Link                                                |
| --------------------------- | --------------------------------------------------- |
| Drizzle Docs                | https://orm.drizzle.team/docs/overview              |
| Drizzle GitHub              | https://github.com/drizzle-team/drizzle-orm         |
| NextAuth.JS Drizzle Adapter | https://authjs.dev/getting-started/adapters/drizzle |
