// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import { index, mysqlTableCreator } from "drizzle-orm/mysql-core";

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
    createdAt: t
      .timestamp()
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: t.timestamp().onUpdateNow(),
  }),
  (example) => ({
    nameIndex: index("name_idx").on(example.name),
  })
);
