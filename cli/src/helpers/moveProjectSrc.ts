import path from "path";
import fs from "fs-extra";

import { type InstallerOptions } from "~/installers/index.js";

type MoveProjectSrcProps = Required<
  Pick<InstallerOptions, "packages" | "projectDir" | "appRouter">
>;

export const moveProjectSrc = async ({
  projectDir,
  packages,
}: MoveProjectSrcProps) => {
  const srcDir = path.join(projectDir, "src");

  const usingTw = packages.tailwind.inUse;
  const usingDrizzle = packages.drizzle.inUse;

  if (usingDrizzle) {
    const drizzleConfigFile = path.join(projectDir, "drizzle.config.ts");
    fs.writeFileSync(
      drizzleConfigFile,
      fs
        .readFileSync(drizzleConfigFile, "utf8")
        .replace("./src/server/db/schema.ts", "./server/db/schema.ts")
    );
  }

  if (usingTw) {
    const tailwindConfigFile = path.join(projectDir, "tailwind.config.ts");
    fs.writeFileSync(
      tailwindConfigFile,
      fs
        .readFileSync(tailwindConfigFile, "utf8")
        .replace("./src/**/*.tsx", "./**/*.tsx")
    );
  }

  const tsconfigFile = path.join(projectDir, "tsconfig.json");
  const nextconfigFile = path.join(projectDir, "next.config.js");
  fs.writeFileSync(
    tsconfigFile,
    fs.readFileSync(tsconfigFile, "utf8").replace("./src/*", "./*")
  );
  fs.writeFileSync(
    nextconfigFile,
    fs.readFileSync(nextconfigFile, "utf8").replace("./src/env.js", "./env.js")
  );

  await fs.ensureDir(srcDir);

  await fs.copy(srcDir, projectDir);

  await fs.emptyDir(srcDir);
  await fs.rmdir(srcDir);
};
