import { UpgradePanel } from "~/app/upgrade-panel";
import { getT3VersionsGroupedByMajor } from "~/lib/utils";

export default async function Page() {
  const t3Versions = await getT3VersionsGroupedByMajor();

  return (
    <main className="from-background to-muted flex h-[calc(100vh-4rem)] flex-col items-center justify-center bg-gradient-to-b">
      <div className="container flex grow flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-center text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          Upgrade <span className="text-purple-400">T3</span> App
        </h1>
        <UpgradePanel versionOptions={t3Versions} />
      </div>
    </main>
  );
}
