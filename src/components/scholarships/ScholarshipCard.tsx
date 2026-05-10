import Image from "next/image";
import Link from "next/link";
import { Scholarship } from "@/lib/firebase/firestore";
import { MapPin, Building, GraduationCap } from "lucide-react";

export function ScholarshipCard({ item }: { item: Scholarship }) {
  // Determine placeholder image if missing
  const placeholderImage = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800";
  const imageUrl = item.imageUrl || placeholderImage;

  // Category Badge (just an example using eligibility tags, fallback to "Merit-Based" or similar)
  const categoryBadge = item.eligibilityTags?.[0] || "Merit-Based";

  return (
    <Link href={`/scholarships/${item.id}`} className="block outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-[2rem]">
      <div className="group relative flex flex-col md:flex-row gap-6 p-6 rounded-[2rem] border border-border/40 bg-card/40 backdrop-blur-sm hover:bg-card/60 transition-all duration-500 shadow-sm hover:shadow-xl hover:border-primary/30 overflow-hidden cursor-pointer">
      {/* Featured Image with Zoom */}
      <div className="relative w-full md:w-56 h-48 md:h-auto shrink-0 rounded-[1.5rem] overflow-hidden">
        <Image
          src={imageUrl}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Category Badge */}
        <div className="absolute top-3 left-3 px-3 py-1 bg-background/90 backdrop-blur-md rounded-full border border-border/50 text-[10px] font-bold uppercase tracking-widest text-foreground shadow-sm">
          {categoryBadge}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-center">
        <h3 className="text-2xl font-extrabold tracking-tight mb-3 group-hover:text-primary transition-colors">
          {item.title}
        </h3>
        
        <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-muted-foreground mb-4">
          <span className="flex items-center gap-1.5"><Building className="w-4 h-4 text-primary/70" /> {item.provider}</span>
          <span className="flex items-center gap-1.5"><GraduationCap className="w-4 h-4 text-primary/70" /> {item.university}</span>
          <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary/70" /> {item.country}</span>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {item.eligibilityTags?.slice(1, 4).map((tag) => (
            <span key={tag} className="px-3 py-1 rounded-lg bg-secondary/60 text-xs font-bold tracking-wide text-secondary-foreground border border-border/40">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Meta info (Amount, Deadline) */}
      <div className="flex flex-row md:flex-col items-center md:items-end justify-between border-t md:border-t-0 md:border-l border-border/40 pt-4 md:pt-0 md:pl-6 shrink-0 min-w-[140px]">
        <div className="text-left md:text-right w-full mb-4">
          <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Amount</p>
          <p className="text-xl font-black tracking-tight text-emerald-500">{item.amount}</p>
        </div>
        <div className="text-left md:text-right w-full">
          <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Deadline</p>
          <p className="text-sm font-bold tracking-tight">{new Date(item.deadline).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}</p>
        </div>
      </div>
      </div>
    </Link>
  );
}
