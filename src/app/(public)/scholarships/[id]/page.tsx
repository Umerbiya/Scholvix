import { getScholarshipById } from "@/lib/firebase/firestore";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MapPin, Building, GraduationCap, CheckCircle2, Clock, DollarSign, ExternalLink } from "lucide-react";

export async function generateMetadata(
  props: { params: Promise<{ id: string }> }
): Promise<Metadata> {
  const params = await props.params;
  const scholarship = await getScholarshipById(params.id);
  
  if (!scholarship) {
    return {
      title: "Scholarship Not Found | Scholvix",
    };
  }

  const fallbackImage = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1200";
  
  return {
    title: `${scholarship.title} | Scholvix`,
    description: (scholarship.description || "").substring(0, 160) + "...",
    openGraph: {
      title: scholarship.title,
      description: (scholarship.description || "").substring(0, 160) + "...",
      images: [{ url: scholarship.imageUrl || fallbackImage }],
    },
  };
}

export default async function ScholarshipDetailPage(
  props: { params: Promise<{ id: string }> }
) {
  const params = await props.params;
  const scholarship = await getScholarshipById(params.id);

  if (!scholarship) {
    notFound();
  }

  const fallbackImage = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=2000";
  const heroImage = scholarship.imageUrl || fallbackImage;

  // Calculate urgency
  const deadlineDate = new Date(scholarship.deadline);
  const now = new Date();
  const daysRemaining = Math.ceil((deadlineDate.getTime() - now.getTime()) / (1000 * 3600 * 24));
  const isUrgent = daysRemaining <= 14 && daysRemaining > 0;
  
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-background pb-32">
      {/* Immersive Hero Header */}
      <section className="relative w-full h-[60vh] min-h-[400px] flex items-end pb-16">
        <div className="absolute inset-0 z-0">
          <Image src={heroImage} alt={scholarship.title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="flex flex-wrap gap-2 mb-4">
              {scholarship.eligibilityTags?.map(tag => (
                <span key={tag} className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-widest text-white border border-white/30">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4 leading-tight">
              {scholarship.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-white/90 font-medium text-lg">
              <span className="flex items-center gap-2"><Building className="w-5 h-5" /> {scholarship.provider}</span>
              <span className="flex items-center gap-2"><GraduationCap className="w-5 h-5" /> {scholarship.university}</span>
              <span className="flex items-center gap-2"><MapPin className="w-5 h-5" /> {scholarship.country}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Two-Column Asymmetric Layout */}
      <section className="container mx-auto px-4 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-12">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="text-3xl font-black tracking-tight mb-6">About the Scholarship</h2>
              <div dangerouslySetInnerHTML={{ __html: scholarship.description || "<p>No description provided.</p>" }} />
            </div>

            <div className="bg-white dark:bg-card/40 rounded-3xl p-8 border border-border/50 shadow-sm">
              <h3 className="text-2xl font-bold mb-6 tracking-tight flex items-center gap-2">
                Eligibility Requirements
              </h3>
              <ul className="space-y-4">
                {['Must hold an undergraduate degree with distinction.', 'Proficiency in English (IELTS 7.0 or equivalent).', 'Demonstrated leadership potential and commitment to home country.'].map((req, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-lg text-muted-foreground">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white dark:bg-card/40 rounded-3xl p-8 border border-border/50 shadow-sm">
              <h3 className="text-2xl font-bold mb-6 tracking-tight flex items-center gap-2">
                Required Documents
              </h3>
              <ul className="space-y-4">
                {['Statement of Purpose (1000 words max)', 'Two academic letters of reference', 'Official University Transcripts', 'Valid Passport Copy'].map((req, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" />
                    <span className="text-lg text-muted-foreground">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sticky Action Column */}
          <div className="lg:col-span-1 sticky top-24">
            <div className="rounded-[2rem] bg-white/60 dark:bg-card/40 backdrop-blur-xl border border-border/50 p-8 shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
              
              <div className="relative z-10">
                <div className="mb-8">
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2 flex items-center gap-2">
                    <DollarSign className="w-4 h-4" /> Award Value
                  </p>
                  <p className="text-4xl font-black tracking-tighter text-emerald-600 dark:text-emerald-400">
                    {scholarship.amount}
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">Fully funded including tuition, stipend, and travel.</p>
                </div>

                <div className="mb-8">
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2 flex items-center gap-2">
                    <Clock className="w-4 h-4" /> Application Deadline
                  </p>
                  <p className="text-2xl font-bold tracking-tight text-foreground">
                    {deadlineDate.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                  </p>
                  {isUrgent ? (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 mt-3 rounded-full bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 text-xs font-bold tracking-widest uppercase">
                      <Clock className="w-3 h-3" /> Ends in {daysRemaining} days
                    </div>
                  ) : daysRemaining < 0 ? (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 mt-3 rounded-full bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400 text-xs font-bold tracking-widest uppercase">
                      Closed
                    </div>
                  ) : (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 mt-3 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 text-xs font-bold tracking-widest uppercase">
                      Open for Applications
                    </div>
                  )}
                </div>

                <Button asChild size="lg" className="w-full h-14 text-lg font-bold tracking-tight rounded-full shadow-lg shadow-primary/30 relative overflow-hidden group hover:shadow-primary/50 transition-all">
                  <a href={scholarship.url || "#"} target="_blank" rel="noopener noreferrer">
                    <span className="relative z-10 flex items-center gap-2">
                      Apply Now <ExternalLink className="w-5 h-5" />
                    </span>
                    <div className="absolute inset-0 bg-white/20 group-hover:translate-x-full transition-transform duration-500 -skew-x-12 -ml-8 w-24" />
                  </a>
                </Button>
                
                <p className="text-xs text-center text-muted-foreground mt-4 font-medium">
                  You will be redirected to the official provider portal.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
