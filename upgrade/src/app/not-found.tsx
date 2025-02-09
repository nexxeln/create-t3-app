export default function Error404() {
  return (
    <main className="from-background to-muted flex h-[calc(100vh-4rem)] flex-col items-center justify-center bg-gradient-to-b">
      <div className="container flex grow flex-col items-center justify-center gap-8 px-4 py-16">
        <h1 className="text-center text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          Upgrade <span className="text-purple-400">T3</span> App
        </h1>
        <div className="max-w-md space-y-2 text-center">
          <p className="text-2xl font-extrabold tracking-tight sm:text-[2rem]">
            404 - Page Not Found
          </p>
          <p>
            Sorry about that. This diff seems to be missing. Come back later or
            try a different version.
          </p>
        </div>

        <p className="text-center text-2xl font-extrabold tracking-tight hover:underline sm:text-[2rem]">
          <a href="/">Go Home</a>
        </p>
      </div>
    </main>
  );
}
