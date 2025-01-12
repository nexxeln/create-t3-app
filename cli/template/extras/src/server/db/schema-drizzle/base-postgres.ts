// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import { index, pgTableCreator } from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `project1_${name}`);

export const posts = createTable(
  "post",
  (t) => ({
    id: t.integer().primaryKey().generatedByDefaultAsIdentity(),
    name: t.varchar({ length: 256 }),
    createdAt: t
      .timestamp({ withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: t.timestamp({ withTimezone: true }).$onUpdate(() => new Date()),
  }),
  (example) => [index("name_idx").on(example.name)]
);
