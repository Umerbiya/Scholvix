import { GraduationCap, Star } from "lucide-react";

export const metadata = { title: "Top Universities", description: "Explore the world's leading universities that offer substantial international scholarship programs." };

const universities = [
  { name: "MIT", country: "USA", ranking: 1, scholarships: "MIT Fellowship, Knight-Hennessy" },
  { name: "University of Oxford", country: "UK", ranking: 2, scholarships: "Clarendon, Rhodes, Weidenfeld" },
  { name: "ETH Zurich", country: "Switzerland", ranking: 7, scholarships: "Excellence Scholarship & Opportunity" },
  { name: "University of Melbourne", country: "Australia", ranking: 13, scholarships: "Graduate Research, Melbourne International" },
  { name: "TU Munich", country: "Germany", ranking: 30, scholarships: "TUM Global Incentive, DAAD-partnered" },
  { name: "National University of Singapore", country: "Singapore", ranking: 8, scholarships: "NUS Research, SINGA" },
];

export default function UniversitiesPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-4xl font-extrabold tracking-tight mb-4">Top Universities</h1>
        <p className="text-xl text-muted-foreground">World-leading institutions with strong international scholarship programs and graduate funding.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {universities.map((uni) => (
          <div key={uni.name} className="p-6 rounded-2xl border border-border/50 bg-card hover:border-primary/40 transition-all group">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-primary/10 rounded-xl">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div className="flex items-center gap-1 text-amber-500">
                <Star className="w-4 h-4 fill-amber-500" />
                <span className="text-sm font-bold">#{uni.ranking}</span>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">{uni.name}</h3>
            <p className="text-sm text-muted-foreground mb-4">{uni.country}</p>
            <div className="border-t border-border/40 pt-4">
              <p className="text-xs font-medium text-muted-foreground/70 uppercase tracking-wider mb-1">Key Scholarships</p>
              <p className="text-sm font-medium">{uni.scholarships}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
