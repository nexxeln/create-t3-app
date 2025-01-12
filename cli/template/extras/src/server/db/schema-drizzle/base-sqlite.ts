// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import { index, sqliteTableCreator } from "drizzle-orm/sqlite-core";

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
    createdAt: t
      .integer({ mode: "timestamp" })
      .default(sql`(unixepoch())`)
      .notNull(),
    updatedAt: t.integer({ mode: "timestamp" }).$onUpdate(() => new Date()),
  }),
  (example) => ({
    nameIndex: index("name_idx").on(example.name),
  })
);
