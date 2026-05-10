import { getLatestScholarships } from "@/lib/firebase/firestore";
import { BentoGrid } from "@/components/ui/bento-grid";
import { Hero } from "@/components/home/Hero";
import { FloatingImage } from "@/components/ui/floating-image";

export const dynamic = "force-dynamic";

export default async function Home() {
  const latestScholarships = await getLatestScholarships(4);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-background pb-32">
      <Hero />
      
      {/* Z-Pattern Section 1: What is a Scholarship? */}
      <section className="container mx-auto px-4 py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="w-full lg:w-1/2 h-[400px] lg:h-[500px]">
            <FloatingImage 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1200" 
              alt="Students collaborating" 
            />
          </div>
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="inline-block px-3 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase">
              The Basics
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-foreground leading-tight">
              What is a <br className="hidden lg:block"/> Scholarship?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground/90 leading-relaxed tracking-tight font-medium">
              A scholarship is more than just financial aid—it's an investment in your potential. Unlike loans, scholarships are merit-based or need-based awards that you do not have to repay. They empower you to focus completely on your academic journey and professional growth.
            </p>
            <ul className="space-y-4 pt-4">
              {['Debt-free education', 'Global networking opportunities', 'Enhanced resume & prestige'].map((item, i) => (
                <li key={i} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  </div>
                  <span className="text-lg font-bold text-foreground tracking-tight">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Z-Pattern Section 2: Common Types */}
      <section className="container mx-auto px-4 py-24 lg:py-32 bg-white dark:bg-card/30 rounded-[3rem] shadow-sm border border-border/40">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24">
          <div className="w-full lg:w-1/2 h-[400px] lg:h-[500px]">
            <FloatingImage 
              src="https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&q=80&w=1200" 
              alt="Graduation ceremony" 
            />
          </div>
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="inline-block px-3 py-1 bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase">
              Opportunities
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-foreground leading-tight">
              Common Scholarship Types
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground/90 leading-relaxed tracking-tight font-medium">
              Whether you excel academically, possess unique talents, or require financial assistance, there is an opportunity designed specifically for your journey. Understand the landscape to target the right funding.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
              {[
                { title: 'Merit-Based', desc: 'Awarded for exceptional academic achievements.' },
                { title: 'Need-Based', desc: 'Designed to support students requiring financial aid.' },
                { title: 'Destination', desc: 'Funded by governments to attract global talent.' },
                { title: 'Program', desc: 'Tailored for specialized fields like STEM or Arts.' },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-3xl bg-slate-50 dark:bg-background border border-border/50 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-extrabold text-foreground mb-2 tracking-tight">{item.title}</h3>
                  <p className="text-sm font-medium text-muted-foreground/80 leading-relaxed tracking-tight">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Grid */}
      <section className="pt-32">
        <div className="container mx-auto px-4 text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-foreground">Latest Opportunities</h2>
          <p className="text-muted-foreground text-lg md:text-xl mt-4 max-w-2xl mx-auto font-medium tracking-tight">Discover the most recent funding opportunities added to our platform by leading institutions globally.</p>
        </div>
        <BentoGrid latest={latestScholarships} />
      </section>
    </div>
  );
}
