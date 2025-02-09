import gitdiffParser from "gitdiff-parser";
import { CheckIcon, ChevronRight, XIcon } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Button } from "~/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "~/components/ui/dialog";
import {
  cn,
  extractVersionsAndFeatures,
  getDiffFromGithub,
  getFeatureUrl,
  prettyFeatureNameMap,
  type Features,
} from "~/lib/utils";
import DownloadButton from "./download-button";
import { Files } from "./files";
import HowToApplyDiff from "./how-to-apply-diff.mdx";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const versionsAndFeatures = extractVersionsAndFeatures(params.slug);
  if (!versionsAndFeatures) notFound();
  const diff = await getDiffFromGithub(versionsAndFeatures).catch(notFound);
  const files = gitdiffParser.parse(diff ?? "");
  let totalAdditions = 0;
  let totalRemovals = 0;
  files.forEach((file) => {
    file.hunks?.forEach((hunk) => {
      hunk.changes.forEach((change) => {
        if (change.type === "insert") totalAdditions++;
        if (change.type === "delete") totalRemovals++;
      });
    });
  });

  const queryParams = new URLSearchParams({
    currentVersion: versionsAndFeatures.currentVersion,
    upgradeVersion: versionsAndFeatures.upgradeVersion,
    additions: String(totalAdditions),
    removals: String(totalRemovals),
  });

  return {
    openGraph: {
      images: [{ url: `/api/og?${queryParams}` }],
    },
    twitter: {
      card: "summary_large_image",
      images: [{ url: `/api/og?${queryParams}` }],
    },
  };
}

export default async function Page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: Record<string, string>;
}) {
  if (!params?.slug) notFound();
  const versionsAndFeatures = extractVersionsAndFeatures(params.slug);
  const viewType = searchParams.viewType === "unified" ? "unified" : "split";

  if (!versionsAndFeatures) notFound();
  const diff = await getDiffFromGithub(versionsAndFeatures).catch(notFound);

  return (
    <main className="container flex min-h-[calc(100vh-4rem)] min-w-[900px] flex-col py-8">
      <div className="mx-auto w-full max-w-4xl">
        <h1 className="mb-4 text-center text-4xl font-extrabold tracking-tight sm:text-5xl">
          Changes from {versionsAndFeatures?.currentVersion} to{" "}
          {versionsAndFeatures?.upgradeVersion}
        </h1>
        <div className="my-4 flex w-full items-center justify-center gap-4">
          <DownloadButton diff={diff} />

          <Dialog>
            <DialogTrigger asChild>
              <Button variant={"ghost"}>How to apply the patch?</Button>
            </DialogTrigger>
            <DialogContent className="w-max">
              <HowToApplyDiff />
            </DialogContent>
          </Dialog>
        </div>
        <ul className="my-4 grid grid-cols-1 justify-center gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {Object.entries(versionsAndFeatures.features).map(
            ([feature, enabled]) => (
              <li
                key={feature}
                className="col-span-1 flex h-14 rounded border shadow-sm transition-all hover:shadow-md"
              >
                <div
                  className={cn(
                    "flex w-16 shrink-0 items-center justify-center rounded-l text-sm font-medium",
                    enabled ? "bg-success" : "bg-destructive",
                  )}
                >
                  {enabled ? <CheckIcon /> : <XIcon />}
                </div>
                <a
                  href={getFeatureUrl(feature)}
                  target="_blank"
                  className="flex flex-1 items-center justify-between truncate rounded-r p-2 text-left"
                >
                  <div className="flex-1 truncate text-sm">
                    <span className="font-medium">
                      {prettyFeatureNameMap[feature as keyof Features]}
                    </span>
                  </div>

                  <Button variant="ghost" className="px-2">
                    <span className="sr-only">Open website</span>
                    <ChevronRight />
                  </Button>
                </a>
              </li>
            ),
          )}
        </ul>
      </div>

      <div className="w-full max-w-7xl">
        <div className="bg-muted text-muted-foreground inline-flex h-12 w-full items-center justify-center rounded p-1">
          <Link
            href={`/diff/${params.slug}?viewType=split`}
            className={cn(
              "ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center rounded-sm px-10 py-2 text-sm font-medium whitespace-nowrap transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
              viewType === "split" && "bg-background text-foreground shadow-sm",
            )}
          >
            Split
          </Link>
          <Link
            href={`/diff/${params.slug}?viewType=unified`}
            className={cn(
              "ring-offset-background focus-visible:ring-ring data-[state=active]:bg-background inline-flex items-center justify-center rounded-sm px-10 py-2 text-sm font-medium whitespace-nowrap transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
              viewType === "unified" &&
                "bg-background text-foreground shadow-sm",
            )}
          >
            Unified
          </Link>
          <span className="ml-4">or</span>
          <Link
            href={
              "https://github.com/t3-oss/create-t3-app/compare/" +
              encodeURIComponent(
                `create-t3-app@${versionsAndFeatures.currentVersion}...create-t3-app@${versionsAndFeatures.upgradeVersion}`,
              )
            }
            className={cn(
              "ring-offset-background hover:text-foreground focus-visible:ring-ring data-[state=active]:bg-background inline-flex items-center justify-center rounded-sm px-4 py-2 text-sm font-medium whitespace-nowrap transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
            )}
          >
            View on Github
          </Link>
        </div>
        <Files diffText={diff} viewType={viewType} />
      </div>
    </main>
  );
}
