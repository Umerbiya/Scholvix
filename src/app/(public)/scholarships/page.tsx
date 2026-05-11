import { getLatestScholarships } from "@/lib/firebase/firestore";
import { QuickFilter } from "@/components/scholarships/quick-filter";
import { MapPin, Building, GraduationCap } from "lucide-react";
import { ScholarshipCard } from "@/components/scholarships/ScholarshipCard";

export const metadata = {
  title: "Browse Scholarships",
  description: "Filter through thousands of fully-funded global scholarships to find the perfect opportunity for your degree.",
};

export const dynamic = "force-dynamic";

export default async function ScholarshipsPage() {
  const scholarships = await getLatestScholarships(10);

  return (
    <div className="container mx-auto px-4 pt-32 pb-16 max-w-7xl">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">Browse Scholarships</h1>
      <p className="text-muted-foreground text-lg mb-8">
        Filter through thousands of opportunities to find the perfect fit.
      </p>

      <QuickFilter />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {scholarships.length > 0 ? scholarships.map((item) => (
          <ScholarshipCard key={item.id} item={item} />
        )) : (
          <div className="text-center py-24 text-muted-foreground border border-dashed border-border/50 rounded-2xl">
            No scholarships available at the moment. Please configure your Firestore database.
          </div>
        )}
      </div>
    </div>
  );
}
