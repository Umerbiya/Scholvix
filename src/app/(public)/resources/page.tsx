import { DocumentChecklist } from "@/components/resources/DocumentChecklist";
import { ResearchCard } from "@/components/resources/ResearchCard";

export const metadata = {
  title: "Scholarship Encyclopedia",
  description: "Comprehensive guides, checklists, and data-driven insights for securing your scholarship."
};

export default function ResourcesPage() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-extrabold tracking-tight mb-4">The Scholarship Encyclopedia</h1>
        <p className="text-xl text-muted-foreground">
          Welcome to the knowledge hub. Navigate through our extensive guides using the sidebar, or explore the interactive tools below to jumpstart your preparation.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-6">Your Preparation Tracker</h2>
          <DocumentChecklist />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-6">Our Latest Findings</h2>
          <ResearchCard 
            title="The Impact of Early Applications" 
            stat="3x"
            description="Applicants who submit their documents at least 2 weeks before the deadline are 3 times more likely to pass the initial screening."
          />
        </div>
      </div>
    </div>
  );
}
