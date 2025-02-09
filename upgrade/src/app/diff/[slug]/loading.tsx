export default function Loading() {
  return (
    <div className="col-span-4 container space-y-4 py-8 lg:col-span-1">
      <div className="bg-muted mx-auto h-12 w-1/2 rounded" />
      <div className="flex w-full justify-center gap-8">
        <div className="bg-muted h-10 w-44 rounded" />
        <div className="bg-muted h-10 w-44 rounded" />
      </div>
      <div className="mx-auto flex w-max gap-6">
        <div className="bg-muted mx-auto h-14 w-[204px] rounded border" />
        <div className="bg-muted mx-auto h-14 w-[204px] rounded border" />
        <div className="bg-muted mx-auto h-14 w-[204px] rounded border" />
        <div className="bg-muted mx-auto h-14 w-[204px] rounded border" />
      </div>
      <div className="bg-muted h-12 w-full rounded" />
      <div
        className={
          "bg-muted relative h-[800px] overflow-hidden rounded border before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent"
        }
      />
    </div>
  );
}
