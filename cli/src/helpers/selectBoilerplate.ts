import path from "path";
import fs from "fs-extra";

import { PKG_ROOT } from "~/consts.js";
import { type InstallerOptions } from "~/installers/index.js";

type SelectBoilerplateProps = Required<
  Pick<InstallerOptions, "packages" | "projectDir">
>;
// This generates the _app.tsx file that is used to render the app
export const selectAppFile = ({
  projectDir,
  packages,
}: SelectBoilerplateProps) => {
  const appFileDir = path.join(PKG_ROOT, "template/extras/src/pages/_app");

  const usingTw = packages.tailwind.inUse;
  const usingTRPC = packages.trpc.inUse;
  const usingNextAuth = packages.nextAuth.inUse;

  let appFile = "base.tsx";
  if (usingTRPC && usingTw && usingNextAuth) {
    appFile = "with-auth-trpc-tw.tsx";
  } else if (usingTRPC && !usingTw && usingNextAuth) {
    appFile = "with-auth-trpc.tsx";
  } else if (usingTRPC && usingTw) {
    appFile = "with-trpc-tw.tsx";
  } else if (usingTRPC && !usingTw) {
    appFile = "with-trpc.tsx";
  } else if (!usingTRPC && usingTw) {
    appFile = "with-tw.tsx";
  } else if (usingNextAuth && usingTw) {
    appFile = "with-auth-tw.tsx";
  } else if (usingNextAuth && !usingTw) {
    appFile = "with-auth.tsx";
  }

  const appSrc = path.join(appFileDir, appFile);
  const appDest = path.join(projectDir, "src/pages/_app.tsx");
  fs.copySync(appSrc, appDest);
};

// Similar to _app, but for app router
export const selectLayoutFile = ({
  projectDir,
  packages,
}: SelectBoilerplateProps) => {
  const layoutFileDir = path.join(PKG_ROOT, "template/extras/src/app/layout");

  const usingTw = packages.tailwind.inUse;
  const usingTRPC = packages.trpc.inUse;
  let layoutFile = "base.tsx";
  if (usingTRPC && usingTw) {
    layoutFile = "with-trpc-tw.tsx";
  } else if (usingTRPC && !usingTw) {
    layoutFile = "with-trpc.tsx";
  } else if (!usingTRPC && usingTw) {
    layoutFile = "with-tw.tsx";
  }

  const appSrc = path.join(layoutFileDir, layoutFile);
  const appDest = path.join(projectDir, "src/app/layout.tsx");
  fs.copySync(appSrc, appDest);
};

// Adds the .well-known/t3app folder to the project
export const selectWellknown3AppFiles = ({
  projectDir,
}: SelectBoilerplateProps) => {
  const appSrc = path.join(
    PKG_ROOT,
    "template/extras/src/app/.well-known/t3app"
  );
  const appDest = path.join(projectDir, "src/app/.well-known/t3app");
  fs.copySync(appSrc, appDest);
};

// This selects the proper index.tsx to be used that showcases the chosen tech
export const selectIndexFile = ({
  projectDir,
  packages,
}: SelectBoilerplateProps) => {
  const indexFileDir = path.join(PKG_ROOT, "template/extras/src/pages/index");

  const usingTRPC = packages.trpc.inUse;
  const usingTw = packages.tailwind.inUse;
  const usingAuth = packages.nextAuth.inUse;

  let indexFile = "base.tsx";
  if (usingTRPC && usingTw && usingAuth) {
    indexFile = "with-auth-trpc-tw.tsx";
  } else if (usingTRPC && !usingTw && usingAuth) {
    indexFile = "with-auth-trpc.tsx";
  } else if (usingTRPC && usingTw) {
    indexFile = "with-trpc-tw.tsx";
  } else if (usingTRPC && !usingTw) {
    indexFile = "with-trpc.tsx";
  } else if (!usingTRPC && usingTw) {
    indexFile = "with-tw.tsx";
  }

  const indexSrc = path.join(indexFileDir, indexFile);
  const indexDest = path.join(projectDir, "src/pages/index.tsx");
  fs.copySync(indexSrc, indexDest);
};

// Similar to index, but for app router
export const selectPageFile = ({
  projectDir,
  packages,
}: SelectBoilerplateProps) => {
  const indexFileDir = path.join(PKG_ROOT, "template/extras/src/app/page");

  const usingTRPC = packages.trpc.inUse;
  const usingTw = packages.tailwind.inUse;
  const usingAuth = packages.nextAuth.inUse;

  let indexFile = "base.tsx";
  if (usingTRPC && usingTw && usingAuth) {
    indexFile = "with-auth-trpc-tw.tsx";
  } else if (usingTRPC && !usingTw && usingAuth) {
    indexFile = "with-auth-trpc.tsx";
  } else if (usingTRPC && usingTw) {
    indexFile = "with-trpc-tw.tsx";
  } else if (usingTRPC && !usingTw) {
    indexFile = "with-trpc.tsx";
  } else if (!usingTRPC && usingTw) {
    indexFile = "with-tw.tsx";
  }

  const indexSrc = path.join(indexFileDir, indexFile);
  const indexDest = path.join(projectDir, "src/app/page.tsx");
  fs.copySync(indexSrc, indexDest);
};
