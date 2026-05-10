export const metadata = { title: "Step-by-Step Application Guide", description: "Follow our proven 8-step framework to find and win your scholarship." };

const steps = [
  { step: "01", title: "Self-Assessment", description: "Honestly evaluate your GPA, field of study, financial situation, and goals to identify which scholarship category fits you best." },
  { step: "02", title: "Research Thoroughly", description: "Use our Scholarships browser to identify 10–15 potential opportunities. Note each deadline in a calendar." },
  { step: "03", title: "Check Eligibility", description: "Read every requirement meticulously. Apply only to scholarships where you meet 80%+ of the stated criteria." },
  { step: "04", title: "Prepare Your Documents", description: "Gather transcripts, certificates, and passport. Request recommendation letters at least 4 weeks before the deadline." },
  { step: "05", title: "Write Your Statement of Purpose", description: "Craft a compelling 600–900 word essay addressing your background, goals, and why you specifically deserve this award." },
  { step: "06", title: "Review & Proofread", description: "Have at least two people review your application. Use Grammarly or a similar tool to eliminate all grammatical errors." },
  { step: "07", title: "Submit Early", description: "Submit at least 1 week before the deadline. This demonstrates seriousness and gives you time to address any technical issues." },
  { step: "08", title: "Follow Up", description: "If you don't hear back within 4 weeks of the expected decision date, send a polite follow-up email to the scholarship office." },
];

export default function GuidePage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-4xl font-extrabold tracking-tight mb-4">Step-by-Step Application Guide</h1>
        <p className="text-xl text-muted-foreground">Follow this proven 8-step framework to give your scholarship application the best chance of success.</p>
      </div>

      <div className="space-y-6">
        {steps.map((item, idx) => (
          <div key={item.step} className="flex gap-6 group">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full border-2 border-primary/30 group-hover:border-primary bg-primary/5 group-hover:bg-primary/10 flex items-center justify-center font-bold text-primary transition-all">
                {item.step}
              </div>
              {idx < steps.length - 1 && <div className="w-px flex-1 bg-border/50 mt-2" />}
            </div>
            <div className="pb-8 flex-1">
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
