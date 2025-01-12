import chalk from "chalk";
import { execa, type StdoutStderrOption } from "execa";
import ora, { type Ora } from "ora";

import {
  getUserPkgManager,
  type PackageManager,
} from "~/utils/getUserPkgManager.js";
import { logger } from "~/utils/logger.js";

const execWithSpinner = async (
  projectDir: string,
  pkgManager: PackageManager,
  options: {
    args?: string[];
    stdout?: StdoutStderrOption;
    onDataHandle?: (spinner: Ora) => (data: Buffer) => void;
  }
) => {
  const { onDataHandle, args = ["install"], stdout = "pipe" } = options;

  const spinner = ora(`Running ${pkgManager} install...`).start();
  const subprocess = execa(pkgManager, args, { cwd: projectDir, stdout });

  await new Promise<void>((res, rej) => {
    if (onDataHandle) {
      subprocess.stdout?.on("data", onDataHandle(spinner));
    }

    void subprocess.on("error", (e) => rej(e));
    void subprocess.on("close", () => res());
  });

  return spinner;
};

const runInstallCommand = async (
  pkgManager: PackageManager,
  projectDir: string
): Promise<Ora | null> => {
  switch (pkgManager) {
    // When using npm, inherit the stderr stream so that the progress bar is shown
    case "npm":
      await execa(pkgManager, ["install"], {
        cwd: projectDir,
        stderr: "inherit",
      });

      return null;
    // When using yarn or pnpm, use the stdout stream and ora spinner to show the progress
    case "pnpm":
      return execWithSpinner(projectDir, pkgManager, {
        onDataHandle: (spinner) => (data) => {
          const text = data.toString();

          if (text.includes("Progress")) {
            spinner.text = text.includes("|")
              ? (text.split(" | ")[1] ?? "")
              : text;
          }
        },
      });
    case "yarn":
      return execWithSpinner(projectDir, pkgManager, {
        onDataHandle: (spinner) => (data) => {
          spinner.text = data.toString();
        },
      });
    // When using bun, the stdout stream is ignored and the spinner is shown
    case "bun":
      return execWithSpinner(projectDir, pkgManager, { stdout: "ignore" });
  }
};

export const installDependencies = async ({
  projectDir,
}: {
  projectDir: string;
}) => {
  logger.info("Installing dependencies...");
  const pkgManager = getUserPkgManager();

  const installSpinner = await runInstallCommand(pkgManager, projectDir);

  // If the spinner was used to show the progress, use succeed method on it
  // If not, use the succeed on a new spinner
  (installSpinner ?? ora()).succeed(
    chalk.green("Successfully installed dependencies!\n")
  );
};
