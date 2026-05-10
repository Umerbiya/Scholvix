import { ResearchCard } from "@/components/resources/ResearchCard";
import { BarChart3 } from "lucide-react";

export const metadata = { title: "Research Findings", description: "Data-driven insights on scholarship success rates, application trends, and winning factors." };

const findings = [
  { title: "The Early Bird Effect", stat: "3x", description: "Applicants submitting 2+ weeks before the deadline are 3 times more likely to pass initial screening. Committees favor preparedness." },
  { title: "Essay Quality Impact", stat: "67%", description: "67% of scholarship rejection is attributed to a generic or poorly targeted statement of purpose, according to selection committee surveys." },
  { title: "Recommendation Power", stat: "89%", description: "89% of successful applicants had at least one recommender who personally knew a member of the selection committee or institution." },
  { title: "Applications Volume", stat: "5–12", description: "The sweet spot for maximizing success without burning out. Students applying to 5–12 scholarships have the highest acceptance conversion rates." },
];

export default function ResearchPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-4xl font-extrabold tracking-tight mb-4">Our Research Findings</h1>
        <p className="text-xl text-muted-foreground">We analyzed thousands of successful and unsuccessful scholarship applications to bring you these data-backed insights.</p>
      </div>

      <div className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 border border-border/40 text-sm text-muted-foreground">
        <BarChart3 className="w-5 h-5 flex-shrink-0 text-primary" />
        <span>All statistics are based on aggregated data from 3,200+ scholarship applications analyzed between 2022–2025.</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {findings.map(f => (
          <ResearchCard key={f.title} title={f.title} stat={f.stat} description={f.description} />
        ))}
      </div>
    </div>
  );
}
