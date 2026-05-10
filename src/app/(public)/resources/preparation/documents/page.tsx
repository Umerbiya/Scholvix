import { DocumentChecklist } from "@/components/resources/DocumentChecklist";

export const metadata = { title: "Required Documents & Eligibility", description: "A comprehensive checklist of every document you need and how to assess your eligibility." };

const eligibilityFactors = [
  { factor: "Academic Performance", detail: "Most scholarships require a minimum GPA of 3.0–3.5 (or equivalent)." },
  { factor: "Nationality", detail: "Some awards are restricted to specific countries or regions." },
  { factor: "Field of Study", detail: "Engineering, medicine, and social sciences each have dedicated awards." },
  { factor: "Age Limit", detail: "Most require applicants to be under 35; PhD programs may extend to 40." },
  { factor: "English Proficiency", detail: "IELTS 6.5+ or TOEFL 80+ is the standard minimum for most institutions." },
  { factor: "Work Experience", detail: "Professional Master's and MBA scholarships often require 2+ years." },
];

export default function DocumentsPage() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-extrabold tracking-tight mb-4">Required Documents & Eligibility</h1>
        <p className="text-xl text-muted-foreground">Use the interactive checklist to track your document preparation and review the key eligibility factors below.</p>
      </div>

      <DocumentChecklist />

      <div>
        <h2 className="text-2xl font-bold mb-6">Eligibility Factors to Consider</h2>
        <div className="space-y-4">
          {eligibilityFactors.map(item => (
            <div key={item.factor} className="flex gap-4 p-5 rounded-2xl border border-border/50 bg-card hover:bg-card/80 transition-colors">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">{item.factor}</h3>
                <p className="text-sm text-muted-foreground">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
