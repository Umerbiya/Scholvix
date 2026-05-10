"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { FloatingImage } from "@/components/ui/floating-image";
import { Wallet, Landmark, ThumbsUp, ThumbsDown, Globe2 } from "lucide-react";

const DESTINATIONS = [
  { id: "uk", title: "United Kingdom", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=800", tuition: "$20k - $40k/yr", living: "$1,200/mo", visa: "2-Year Graduate Visa" },
  { id: "usa", title: "United States", image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=800", tuition: "$25k - $55k/yr", living: "$1,500/mo", visa: "OPT (1-3 Years)" },
  { id: "canada", title: "Canada", image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&q=80&w=800", tuition: "$15k - $30k/yr", living: "$1,000/mo", visa: "PGWP (Up to 3 Years)" },
  { id: "germany", title: "Germany", image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=800", tuition: "$0 - $3k/yr", living: "$950/mo", visa: "18-Month Job Seeker" },
  { id: "australia", title: "Australia", image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&q=80&w=800", tuition: "$22k - $45k/yr", living: "$1,400/mo", visa: "2-4 Year PSW" },
  { id: "sk", title: "South Korea", image: "https://images.unsplash.com/photo-1538681105587-85640961bf8b?auto=format&fit=crop&q=80&w=800", tuition: "$5k - $15k/yr", living: "$800/mo", visa: "D-10 Job Seeker Visa" }
];

const TOP_5 = [
  {
    country: "United Kingdom",
    desc: "Home to some of the world's oldest and most prestigious universities. Offers a rich cultural history and a fast-track to a global career.",
    pros: ["1-Year Master's Programs", "2-Year Post-Study Work Visa", "Global Prestige"],
    cons: ["High Living Costs (London)", "Highly Competitive Job Market"]
  },
  {
    country: "United States",
    desc: "The largest hub for international students, boasting unparalleled research facilities and the highest concentration of top-ranked universities globally.",
    pros: ["Ivy League Excellence", "Massive STEM Opportunities", "Diverse Culture"],
    cons: ["Very High Tuition Fees", "Complex Visa Process"]
  },
  {
    country: "Canada",
    desc: "Known for its welcoming immigration policies, high quality of life, and affordable world-class education compared to its southern neighbor.",
    pros: ["Clear Path to Permanent Residency", "Safe & Multicultural", "Work While Studying"],
    cons: ["Harsh Winters", "High Taxes"]
  },
  {
    country: "Germany",
    desc: "The powerhouse of Europe, offering virtually free education at public universities and a massive demand for skilled engineering and tech graduates.",
    pros: ["No/Low Tuition Fees", "Strong Tech Economy", "Travel Across Schengen Area"],
    cons: ["German Language Required for Jobs", "Bureaucratic Processes"]
  },
  {
    country: "Australia",
    desc: "A destination combining world-class education with an incredible lifestyle. Perfect for students seeking sunshine and strong graduate employment outcomes.",
    pros: ["Excellent Weather & Lifestyle", "High Minimum Wage", "Long Post-Study Work Visas"],
    cons: ["Expensive Tuition & Cost of Living", "Geographic Isolation"]
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
};

export default function CountriesHubPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-background pb-32">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full text-xs font-bold tracking-[0.2em] uppercase mb-6"
          >
            <Globe2 className="w-4 h-4" /> Study Destinations
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black tracking-tighter mb-6 text-foreground"
          >
            Find Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Perfect Country</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-muted-foreground font-medium tracking-tight"
          >
            Explore our magazine-style guide to the most popular study destinations globally. Compare tuition, living costs, and visa opportunities instantly.
          </motion.p>
        </div>
      </section>

      {/* Magazine-Style Grid */}
      {/* <section className="container mx-auto px-4 py-16">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {DESTINATIONS.map((dest) => (
            <motion.div key={dest.id} variants={itemVariants} className="group relative h-[450px] rounded-[2rem] overflow-hidden cursor-pointer">
              <Image 
                src={dest.image} 
                alt={dest.title} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-500 group-hover:-translate-y-32">
                <h2 className="text-3xl font-black text-white tracking-tighter">{dest.title}</h2>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8 pt-0 opacity-0 transform translate-y-8 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                <div className="space-y-3 border-t border-white/20 pt-4 mt-2">
                  <div className="flex items-center justify-between text-white/90">
                    <span className="text-xs font-bold uppercase tracking-widest flex items-center gap-2"><Landmark className="w-4 h-4" /> Tuition</span>
                    <span className="font-bold">{dest.tuition}</span>
                  </div>
                  <div className="flex items-center justify-between text-white/90">
                    <span className="text-xs font-bold uppercase tracking-widest flex items-center gap-2"><Wallet className="w-4 h-4" /> Living</span>
                    <span className="font-bold">{dest.living}</span>
                  </div>
                  <div className="flex items-center justify-between text-white/90">
                    <span className="text-xs font-bold uppercase tracking-widest flex items-center gap-2"><Globe2 className="w-4 h-4" /> Visa</span>
                    <span className="font-bold">{dest.visa}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section> */}

      {/* Top 5 Detailed Breakdown */}
      <section className="container mx-auto px-4 py-24">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-foreground mb-4">The Big Five</h2>
          <p className="text-xl text-muted-foreground font-medium tracking-tight max-w-2xl">A deep dive into the pros and cons of the world's most competitive international study markets.</p>
        </div>

        <div className="space-y-12">
          {TOP_5.map((item, index) => (
            <motion.div
              key={item.country}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-card/40 rounded-[2.5rem] p-8 md:p-12 border border-border/50 shadow-sm"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="md:w-1/3">
                  <div className="text-8xl font-black text-primary/10 mb-2 leading-none">0{index + 1}</div>
                  <h3 className="text-3xl font-black tracking-tighter text-foreground mb-4">{item.country}</h3>
                  <p className="text-muted-foreground font-medium leading-relaxed tracking-tight">{item.desc}</p>
                </div>

                <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                  {/* Pros */}
                  <div className="bg-emerald-50 dark:bg-emerald-950/20 rounded-2xl p-6 border border-emerald-100 dark:border-emerald-900/30">
                    <h4 className="text-sm font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-4 flex items-center gap-2">
                      <ThumbsUp className="w-4 h-4" /> The Good
                    </h4>
                    <ul className="space-y-3">
                      {item.pros.map(pro => (
                        <li key={pro} className="text-emerald-900 dark:text-emerald-100 font-medium text-sm flex items-start gap-2">
                          <span className="text-emerald-500">•</span> {pro}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Cons */}
                  <div className="bg-red-50 dark:bg-red-950/20 rounded-2xl p-6 border border-red-100 dark:border-red-900/30">
                    <h4 className="text-sm font-bold uppercase tracking-widest text-red-600 dark:text-red-400 mb-4 flex items-center gap-2">
                      <ThumbsDown className="w-4 h-4" /> The Trade-offs
                    </h4>
                    <ul className="space-y-3">
                      {item.cons.map(con => (
                        <li key={con} className="text-red-900 dark:text-red-100 font-medium text-sm flex items-start gap-2">
                          <span className="text-red-500">•</span> {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
