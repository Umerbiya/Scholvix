export const metadata = { title: "Tips & Strategies", description: "Expert tips and winning strategies to maximize your scholarship success rate." };

const tips = [
  { number: "01", title: "Apply to Multiple Scholarships", description: "Don't put all your eggs in one basket. Apply to at least 8–12 scholarships simultaneously. Your success rate compounds exponentially with each application.", color: "text-primary" },
  { number: "02", title: "Tailor Every Essay", description: "Never reuse a generic statement of purpose. Research the host institution's values and tailor each essay to reflect alignment with their specific mission.", color: "text-blue-500" },
  { number: "03", title: "Build Your Online Presence", description: "Many selection committees will Google your name. A professional LinkedIn profile with recommendations significantly strengthens your application profile.", color: "text-emerald-500" },
  { number: "04", title: "Network with Awardees", description: "Connect with past scholarship recipients on LinkedIn. Their insights into the selection process are invaluable and cannot be found in official materials.", color: "text-purple-500" },
  { number: "05", title: "Master the Interview", description: "If shortlisted, prepare 5-star answers to common questions: 'Why do you deserve this?', 'What is your 10-year plan?', and 'How will this benefit your home country?'", color: "text-amber-500" },
  { number: "06", title: "Start Immediately", description: "The biggest mistake applicants make is procrastinating. Start preparing your documents 6 months before any major deadline.", color: "text-red-500" },
];

export default function TipsPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-4xl font-extrabold tracking-tight mb-4">Tips & Strategies</h1>
        <p className="text-xl text-muted-foreground">Insights distilled from thousands of successful scholarship applications worldwide.</p>
      </div>

      <div className="space-y-6">
        {tips.map(tip => (
          <div key={tip.number} className="p-6 rounded-2xl border border-border/50 bg-card hover:bg-card/80 transition-colors group">
            <div className="flex items-start gap-5">
              <span className={`text-4xl font-extrabold opacity-30 group-hover:opacity-100 transition-opacity select-none ${tip.color}`}>{tip.number}</span>
              <div>
                <h3 className={`text-xl font-bold mb-2 ${tip.color}`}>{tip.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{tip.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
