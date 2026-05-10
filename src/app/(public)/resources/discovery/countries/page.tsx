import { Globe } from "lucide-react";

export const metadata = { title: "Top Study Destinations", description: "Explore the best countries for international scholarships and study abroad opportunities." };

const countries = [
  { name: "United States", flag: "🇺🇸", programs: "Fulbright, AAUW", count: "40,000+", highlights: "World-class research universities, diverse campuses, strong alumni networks." },
  { name: "United Kingdom", flag: "🇬🇧", programs: "Chevening, Commonwealth", count: "32,000+", highlights: "Prestigious institutions, 1-year Master's programs, multicultural environment." },
  { name: "Germany", flag: "🇩🇪", programs: "DAAD, Heinrich Böll", count: "18,000+", highlights: "Often tuition-free for all nationalities, strong engineering and science programs." },
  { name: "Canada", flag: "🇨🇦", programs: "Vanier, IDRC", count: "12,000+", highlights: "Post-study work permits, bilingual options, welcoming immigration policies." },
  { name: "Australia", flag: "🇦🇺", programs: "Australia Awards, RTP", count: "15,000+", highlights: "High quality of life, strong research output, diverse academic programs." },
  { name: "Japan", flag: "🇯🇵", programs: "MEXT, JASSO", count: "10,000+", highlights: "Full government-funded scholarships, cutting-edge technology, unique culture." },
];

export default function CountriesPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-4xl font-extrabold tracking-tight mb-4">Top Study Destinations</h1>
        <p className="text-xl text-muted-foreground">Each country offers a unique academic and cultural experience. Find your best fit.</p>
      </div>

      <div className="space-y-4">
        {countries.map(country => (
          <div key={country.name} className="p-6 rounded-2xl border border-border/50 bg-card hover:border-primary/40 transition-all hover:shadow-sm group">
            <div className="flex flex-col md:flex-row md:items-center gap-4 justify-between">
              <div className="flex items-center gap-4">
                <span className="text-4xl">{country.flag}</span>
                <div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{country.name}</h3>
                  <p className="text-sm text-primary font-medium">{country.programs}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground border border-border/40 rounded-full px-4 py-1">
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">{country.count} international students</span>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{country.highlights}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
