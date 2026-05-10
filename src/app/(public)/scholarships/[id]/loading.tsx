export default function Loading() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-background pb-32 animate-pulse">
      {/* Hero Skeleton */}
      <div className="w-full h-[60vh] min-h-[400px] bg-slate-200 dark:bg-slate-800/50 flex items-end pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="w-24 h-6 bg-slate-300 dark:bg-slate-700 rounded-full mb-4" />
            <div className="w-3/4 h-16 bg-slate-300 dark:bg-slate-700 rounded-2xl mb-4" />
            <div className="flex gap-4">
              <div className="w-32 h-6 bg-slate-300 dark:bg-slate-700 rounded-md" />
              <div className="w-32 h-6 bg-slate-300 dark:bg-slate-700 rounded-md" />
            </div>
          </div>
        </div>
      </div>

      {/* Two-Column Asymmetric Layout Skeleton */}
      <section className="container mx-auto px-4 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <div className="w-64 h-10 bg-slate-200 dark:bg-slate-800 rounded-xl mb-6" />
              <div className="space-y-4">
                <div className="w-full h-4 bg-slate-200 dark:bg-slate-800 rounded-md" />
                <div className="w-full h-4 bg-slate-200 dark:bg-slate-800 rounded-md" />
                <div className="w-5/6 h-4 bg-slate-200 dark:bg-slate-800 rounded-md" />
              </div>
            </div>
            <div className="bg-white dark:bg-card/40 rounded-3xl p-8 border border-border/50 h-64" />
            <div className="bg-white dark:bg-card/40 rounded-3xl p-8 border border-border/50 h-64" />
          </div>

          {/* Sticky Action Column */}
          <div className="lg:col-span-1">
            <div className="rounded-[2rem] bg-white/60 dark:bg-card/40 border border-border/50 p-8 h-96 shadow-xl" />
          </div>
        </div>
      </section>
    </div>
  );
}
