import { relations, sql } from "drizzle-orm";
import { index, mysqlTableCreator, primaryKey } from "drizzle-orm/mysql-core";
import { type AdapterAccount } from "next-auth/adapters";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = mysqlTableCreator((name) => `project1_${name}`);

export const posts = createTable(
  "post",
  (t) => ({
    id: t.bigint({ mode: "number" }).primaryKey().autoincrement(),
    name: t.varchar({ length: 256 }),
    createdById: t
      .varchar("created_by", { length: 255 })
      .notNull()
      .references(() => users.id),
    createdAt: t
      .timestamp()
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: t.timestamp().onUpdateNow(),
  }),
  (example) => ({
    createdByIdIdx: index("created_by_idx").on(example.createdById),
    nameIndex: index("name_idx").on(example.name),
  })
);

export const users = createTable("user", (t) => ({
  id: t
    .varchar({ length: 255 })
    .notNull()
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: t.varchar({ length: 255 }),
  email: t.varchar({ length: 255 }).notNull(),
  emailVerified: t
    .timestamp({
      mode: "date",
      fsp: 3,
    })
    .default(sql`CURRENT_TIMESTAMP(3)`),
  image: t.varchar({ length: 255 }),
}));

export const usersRelations = relations(users, ({ many }) => ({
  accounts: many(accounts),
  sessions: many(sessions),
}));

export const accounts = createTable(
  "account",
  (t) => ({
    userId: t
      .varchar({ length: 255 })
      .notNull()
      .references(() => users.id),
    type: t.varchar({ length: 255 }).$type<AdapterAccount["type"]>().notNull(),
    provider: t.varchar({ length: 255 }).notNull(),
    providerAccountId: t.varchar({ length: 255 }).notNull(),
    refresh_token: t.text(),
    access_token: t.text(),
    expires_at: t.int(),
    token_type: t.varchar({ length: 255 }),
    scope: t.varchar({ length: 255 }),
    id_token: t.text(),
    session_state: t.varchar({ length: 255 }),
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
    sessionToken: t.varchar({ length: 255 }).notNull().primaryKey(),
    userId: t
      .varchar({ length: 255 })
      .notNull()
      .references(() => users.id),
    expires: t.timestamp({ mode: "date" }).notNull(),
  }),
  (session) => ({
    userIdIdx: index("session_user_id_idx").on(session.userId),
  })
);

export const sessionsRelations = relations(sessions, ({ one }) => ({
  user: one(users, { fields: [sessions.userId], references: [users.id] }),
}));

export const verificationTokens = createTable(
  "verification_token",
  (t) => ({
    identifier: t.varchar({ length: 255 }).notNull(),
    token: t.varchar({ length: 255 }).notNull(),
    expires: t.timestamp({ mode: "date" }).notNull(),
  }),
  (vt) => ({
    compoundKey: primaryKey({ columns: [vt.identifier, vt.token] }),
  })
);
