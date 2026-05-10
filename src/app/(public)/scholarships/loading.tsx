export default function ScholarshipsLoading() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl animate-pulse">
      <div className="h-12 bg-muted rounded-xl w-1/3 mb-4"></div>
      <div className="h-6 bg-muted rounded-xl w-1/2 mb-8"></div>
      
      <div className="w-full h-32 bg-muted rounded-2xl mb-8"></div>

      <div className="space-y-4">
        {[1, 2, 3, 4].map(i => (
          <div key={i} className="p-6 rounded-2xl border border-border/50 bg-card/40 flex flex-col md:flex-row justify-between gap-4">
            <div className="flex-1 space-y-4">
              <div className="h-6 bg-muted rounded w-2/3"></div>
              <div className="flex gap-4">
                <div className="h-4 bg-muted rounded w-24"></div>
                <div className="h-4 bg-muted rounded w-24"></div>
                <div className="h-4 bg-muted rounded w-24"></div>
              </div>
              <div className="flex gap-2">
                <div className="h-6 bg-muted rounded w-16"></div>
                <div className="h-6 bg-muted rounded w-16"></div>
              </div>
            </div>
            <div className="flex flex-col items-start md:items-end justify-between border-t md:border-t-0 md:border-l border-border/40 pt-4 md:pt-0 md:pl-6 min-w-[150px] space-y-4">
              <div className="h-8 bg-muted rounded w-24"></div>
              <div className="h-4 bg-muted rounded w-20"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
