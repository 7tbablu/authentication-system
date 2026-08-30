export default function Home() {
  return (
    <main className="flex min-h-full flex-1 items-center justify-center px-6 py-16">
      <div className="w-full max-w-3xl text-center">
        <div className="mb-6 flex justify-center">
          <div className="flex size-12 items-center justify-center rounded-xl bg-foreground text-background">
            <span className="text-xl font-bold">A</span>
          </div>
        </div>

        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          AuthForge
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-muted-foreground">
          Production-grade authentication infrastructure for modern Next.js
          applications.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 text-sm text-muted-foreground sm:flex-row">
          <span>Next.js 16</span>
          <span className="hidden sm:inline">•</span>
          <span>Better Auth</span>
          <span className="hidden sm:inline">•</span>
          <span>TypeScript</span>
        </div>
      </div>
    </main>
  );
}
