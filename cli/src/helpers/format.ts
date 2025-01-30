import chalk from "chalk";
import { execa } from "execa";
import ora from "ora";

import { type PackageManager } from "~/utils/getUserPkgManager.js";
import { logger } from "~/utils/logger.js";

// Runs format and lint command to ensure created repository is tidy upon creation
export const formatProject = async ({
  pkgManager,
  projectDir,
  eslint,
  biome,
}: {
  pkgManager: PackageManager;
  projectDir: string;
  eslint: boolean;
  biome: boolean;
}) => {
  logger.info(`Formatting project with ${eslint ? "eslint" : "biome"}...`);
  const spinner = ora("Running format command\n").start();

  if (eslint) {
    await execa(pkgManager, ["format:write"], {
      cwd: projectDir,
    });
  } else if (biome) {
    await execa(pkgManager, ["check:unsafe"], {
      cwd: projectDir,
    });
  }
  spinner.succeed(`${chalk.green("Successfully formatted project")}`);
};
