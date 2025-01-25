import path from "path";
import fs from "fs-extra";

import { PKG_ROOT } from "~/consts.js";
import { type Installer } from "~/installers/index.js";
import { addPackageDependency } from "~/utils/addPackageDependency.js";
import { addPackageScript } from "~/utils/addPackageScript.js";

export const prismaInstaller: Installer = ({
  projectDir,
  packages,
  databaseProvider,
}) => {
  addPackageDependency({
    projectDir,
    dependencies: ["prisma"],
    devMode: true,
  });
  addPackageDependency({
    projectDir,
    dependencies: ["@prisma/client"],
    devMode: false,
  });
  if (databaseProvider === "planetscale")
    addPackageDependency({
      projectDir,
      dependencies: ["@prisma/adapter-planetscale", "@planetscale/database"],
      devMode: false,
    });

  const extrasDir = path.join(PKG_ROOT, "template/extras");

  const schemaSrc = path.join(
    extrasDir,
    "prisma/schema",
    `${packages?.nextAuth.inUse ? "with-auth" : "base"}${
      databaseProvider === "planetscale" ? "-planetscale" : ""
    }.prisma`
  );
  let schemaText = fs.readFileSync(schemaSrc, "utf-8");
  if (databaseProvider !== "sqlite") {
    schemaText = schemaText.replace(
      'provider = "sqlite"',
      `provider = "${
        {
          mysql: "mysql",
          postgres: "postgresql",
          planetscale: "mysql",
        }[databaseProvider]
      }"`
    );
    if (["mysql", "planetscale"].includes(databaseProvider)) {
      schemaText = schemaText.replace("// @db.Text", "@db.Text");
    }
  }
  const schemaDest = path.join(projectDir, "prisma/schema.prisma");
  fs.mkdirSync(path.dirname(schemaDest), { recursive: true });
  fs.writeFileSync(schemaDest, schemaText);

  const clientSrc = path.join(
    extrasDir,
    databaseProvider === "planetscale"
      ? "src/server/db/db-prisma-planetscale.ts"
      : "src/server/db/db-prisma.ts"
  );
  const clientDest = path.join(projectDir, "src/server/db.ts");

  addPackageScript({
    projectDir,
    scripts: {
      postinstall: "prisma generate",
      "db:push": "prisma db push",
      "db:studio": "prisma studio",
      "db:generate": "prisma migrate dev",
      "db:migrate": "prisma migrate deploy",
    },
  });

  fs.copySync(clientSrc, clientDest);
};
