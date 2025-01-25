import fs from "fs";
import path from "path";

import { PKG_ROOT } from "~/consts.js";
import { type Installer } from "~/installers/index.js";
import { parseNameAndPath } from "~/utils/parseNameAndPath.js";

// Sanitizes a project name to ensure it adheres to Docker container naming conventions.
const sanitizeName = (name: string): string => {
  return name
    .replace(/[^a-zA-Z0-9_.-]/g, "_") // Replace invalid characters with underscores
    .toLowerCase(); // Convert to lowercase for consistency
};

export const dbContainerInstaller: Installer = ({
  projectDir,
  databaseProvider,
  projectName,
}) => {
  // for configuration with postgresql and mysql when project is created with '.' project name
  const [projectNameParsed] =
    projectName === "." ? parseNameAndPath(projectDir) : [projectName];

  // Sanitize the project name for Docker container usage
  const sanitizedProjectName = sanitizeName(projectNameParsed);

  const dockerFolder = path.join(
    PKG_ROOT,
    "template/extras/docker/",
    databaseProvider
  );

  const files = fs.readdirSync(dockerFolder);
  for (const file of files) {
    const scriptSrc = path.join(dockerFolder, file);
    const scriptDest = path.join(projectDir, file);
    const scriptText = fs.readFileSync(scriptSrc, "utf-8");
    fs.writeFileSync(
      scriptDest,
      scriptText.replaceAll("project1", sanitizedProjectName)
    );
    fs.chmodSync(scriptDest, "755");
  }
};
