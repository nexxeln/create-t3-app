import { relations, sql } from "drizzle-orm";
import { index, primaryKey, sqliteTableCreator } from "drizzle-orm/sqlite-core";
import { type AdapterAccount } from "next-auth/adapters";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = sqliteTableCreator((name) => `project1_${name}`);

export const posts = createTable(
  "post",
  (t) => ({
    id: t.integer({ mode: "number" }).primaryKey({ autoIncrement: true }),
    name: t.text({ length: 256 }),
    createdById: t
      .text("created_by", { length: 255 })
      .notNull()
      .references(() => users.id),
    createdAt: t
      .integer({ mode: "timestamp" })
      .default(sql`(unixepoch())`)
      .notNull(),
    updatedAt: t.integer({ mode: "timestamp" }).$onUpdate(() => new Date()),
  }),
  (example) => ({
    createdByIdIdx: index("created_by_idx").on(example.createdById),
    nameIndex: index("name_idx").on(example.name),
  })
);

export const users = createTable("user", (t) => ({
  id: t
    .text({ length: 255 })
    .notNull()
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: t.text({ length: 255 }),
  email: t.text({ length: 255 }).notNull(),
  emailVerified: t.integer({ mode: "timestamp" }).default(sql`(unixepoch())`),
  image: t.text({ length: 255 }),
}));

export const usersRelations = relations(users, ({ many }) => ({
  accounts: many(accounts),
}));

export const accounts = createTable(
  "account",
  (t) => ({
    userId: t
      .text({ length: 255 })
      .notNull()
      .references(() => users.id),
    type: t.text({ length: 255 }).$type<AdapterAccount["type"]>().notNull(),
    provider: t.text({ length: 255 }).notNull(),
    providerAccountId: t.text({ length: 255 }).notNull(),
    refresh_token: t.text(),
    access_token: t.text(),
    expires_at: t.integer(),
    token_type: t.text({ length: 255 }),
    scope: t.text({ length: 255 }),
    id_token: t.text(),
    session_state: t.text({ length: 255 }),
  }),
  (account) => ({
    compoundKey: primaryKey({
      columns: [account.provider, account.providerAccountId],
    }),
    userIdIdx: index("account_user_id_idx").on(account.userId),
  })
);

export const accountsRelations = relations(accounts, ({ one }) => ({
  user: one(users, { fields: [accounts.userId], references: [users.id] }),
}));

export const sessions = createTable(
  "session",
  (t) => ({
    sessionToken: t.text({ length: 255 }).notNull().primaryKey(),
    userId: t
      .text({ length: 255 })
      .notNull()
      .references(() => users.id),
    expires: t.integer({ mode: "timestamp" }).notNull(),
  }),
  (session) => ({
    userIdIdx: index("session_userId_idx").on(session.userId),
  })
);

export const sessionsRelations = relations(sessions, ({ one }) => ({
  user: one(users, { fields: [sessions.userId], references: [users.id] }),
}));

export const verificationTokens = createTable(
  "verification_token",
  (t) => ({
    identifier: t.text({ length: 255 }).notNull(),
    token: t.text({ length: 255 }).notNull(),
    expires: t.integer({ mode: "timestamp" }).notNull(),
  }),
  (vt) => ({
    compoundKey: primaryKey({ columns: [vt.identifier, vt.token] }),
  })
);
