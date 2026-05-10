export const metadata = { title: "Types of Scholarships", description: "Explore the different types of scholarships available worldwide, from merit-based to country-specific." };

const types = [
  { title: "Merit-Based", icon: "⭐", description: "Awarded for academic, athletic, or artistic excellence. GPA and standardized test scores are primary factors." },
  { title: "Need-Based", icon: "🤝", description: "Targeted at students from low-income backgrounds. Requires proof of financial hardship." },
  { title: "Country-Specific", icon: "🌍", description: "Funded by a national government for students from particular nations. e.g., Chevening (UK), DAAD (Germany)." },
  { title: "Field of Study", icon: "🔬", description: "Designed for students in specific disciplines — STEM, medicine, law, and social sciences." },
  { title: "Athletic", icon: "🏆", description: "For student athletes. Typically offered by universities in exchange for representing their sports teams." },
  { title: "Community Service", icon: "🌱", description: "Recognizes students with exceptional records of volunteerism and leadership in their communities." },
];

export default function TypesPage() {
  return (
    <div>
      <h1 className="text-4xl font-extrabold tracking-tight mb-4">Types of Scholarships</h1>
      <p className="text-xl text-muted-foreground mb-12">Understanding the category helps you target the right opportunity and write a stronger application.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {types.map(type => (
          <div key={type.title} className="rounded-2xl border border-border/50 bg-card p-6 hover:border-primary/40 transition-colors group">
            <div className="text-4xl mb-4">{type.icon}</div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{type.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{type.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
