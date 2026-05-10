export const metadata = { title: "What is a Scholarship", description: "Learn the fundamentals of scholarships and how they differ from loans and grants." };

export default function IntroPage() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <h1>What is a Scholarship?</h1>
      <p className="lead text-xl text-muted-foreground">A scholarship is a form of financial aid awarded to students based on academic merit, financial need, or other specific criteria — with no obligation to repay.</p>

      <h2>Key Differences</h2>
      <div className="not-prose grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
        {[
          { title: "Scholarship", icon: "🎓", description: "Merit or need-based award. No repayment required.", color: "bg-primary/10 border-primary/20" },
          { title: "Grant", icon: "💰", description: "Government or institution-funded. Often need-based.", color: "bg-emerald-500/10 border-emerald-500/20" },
          { title: "Student Loan", icon: "🏦", description: "Borrowed money that must be repaid with interest.", color: "bg-red-500/10 border-red-500/20" },
        ].map(item => (
          <div key={item.title} className={`rounded-2xl border p-6 ${item.color}`}>
            <div className="text-3xl mb-3">{item.icon}</div>
            <h3 className="font-bold text-lg mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.description}</p>
          </div>
        ))}
      </div>

      <h2>Who Offers Scholarships?</h2>
      <ul>
        <li><strong>Universities:</strong> Merit awards for high-achieving applicants</li>
        <li><strong>Governments:</strong> National programs like Chevening, Fulbright, Erasmus+</li>
        <li><strong>Private Organizations:</strong> NGOs, corporations, and foundations</li>
        <li><strong>International Bodies:</strong> UN, World Bank, and regional institutions</li>
      </ul>
    </div>
  );
}
