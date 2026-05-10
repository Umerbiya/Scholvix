import { TrendingUp, Database, Share2 } from "lucide-react";

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] pb-32 font-serif selection:bg-primary/20">
      {/* Editorial Header */}
      <header className="pt-32 pb-24 border-b border-border/30">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-sm font-sans font-bold uppercase tracking-[0.3em] text-muted-foreground mb-8">Scholvix Data Insights • Vol 1</p>
          <h1 className="text-5xl md:text-7xl font-normal leading-[1.1] text-foreground mb-8">
            The Anatomy of a Successful Scholarship Application.
          </h1>
          <p className="text-xl md:text-2xl font-sans text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Based on a meta-analysis of over 50,000 global applications between 2022 and 2026.
          </p>
        </div>
      </header>

      {/* Report Body */}
      <article className="container mx-auto px-4 max-w-3xl pt-24 font-serif text-lg md:text-xl leading-loose text-foreground/90 space-y-12">
        <p>
          The landscape of international funding has radically shifted over the past decade. With the globalization of higher education, competition for fully-funded opportunities—such as the Erasmus Mundus, Fulbright, and Chevening scholarships—has reached historic peaks.
        </p>

        {/* Success Metric Card */}
        <div className="my-16 font-sans bg-slate-50 dark:bg-white/5 backdrop-blur-2xl rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-white/10 shadow-2xl relative overflow-hidden group">
           <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent pointer-events-none" />
           <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
             <div className="w-24 h-24 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
               <TrendingUp className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
             </div>
             <div>
               <h3 className="text-3xl font-black tracking-tighter text-foreground mb-2">The Early Bird Multiplier</h3>
               <p className="text-lg text-muted-foreground leading-relaxed">
                 Our regression models indicate that <strong className="text-foreground">applying exactly 2 weeks before the final deadline</strong> increases the probability of passing the initial screening phase by <strong className="text-emerald-600 dark:text-emerald-400">40.2%</strong>.
               </p>
             </div>
           </div>
        </div>

        <h2 className="text-3xl md:text-4xl mt-16 mb-8 font-normal">The 'Statement of Purpose' Fallacy</h2>
        <p>
          Many applicants treat their Statement of Purpose (SOP) as a narrative CV. However, data from admissions officers reveals that committees spend an average of only 3.5 minutes on the first read. Essays structured around a single, highly specific "Research Goal" scored 65% higher in qualitative reviews than broad "Life Story" essays.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 my-16 font-sans">
          <div className="border-l-4 border-primary pl-6">
            <div className="text-5xl font-black tracking-tighter mb-2">3.5m</div>
            <div className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Avg. reading time per SOP</div>
          </div>
          <div className="border-l-4 border-blue-500 pl-6">
            <div className="text-5xl font-black tracking-tighter mb-2">65%</div>
            <div className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Boost from focused essays</div>
          </div>
        </div>

        <p>
          As we look towards 2027, the emphasis is heavily skewing towards demonstrable impact rather than raw academic metrics. GPA serves as a filter, but narrative serves as the deciding factor.
        </p>

        <div className="pt-16 border-t border-border/30 mt-24 flex items-center justify-between font-sans">
           <div className="flex items-center gap-4">
             <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
               <Database className="w-5 h-5 text-primary" />
             </div>
             <div>
               <p className="font-bold text-sm">Scholvix Data Team</p>
               <p className="text-xs text-muted-foreground uppercase tracking-widest">Published May 2026</p>
             </div>
           </div>
           <button className="flex items-center gap-2 text-sm font-bold tracking-tight hover:text-primary transition-colors">
             <Share2 className="w-4 h-4" /> Share Report
           </button>
        </div>
      </article>
    </div>
  );
}
