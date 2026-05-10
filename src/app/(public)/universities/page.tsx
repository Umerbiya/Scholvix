"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Building2, Award, GraduationCap, MapPin } from "lucide-react";

const REGIONS = [
  {
    name: "North America",
    universities: [
      { id: "mit", name: "Massachusetts Institute of Technology", rank: "QS #1", location: "Cambridge, USA", image: "https://images.unsplash.com/photo-1550136513-548af4445338?auto=format&fit=crop&q=80&w=800", blurb: "The undisputed global leader in engineering, technology, and applied sciences." },
      { id: "stanford", name: "Stanford University", rank: "QS #3", location: "Stanford, USA", image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800", blurb: "The heartbeat of Silicon Valley, producing more unicorn founders than any other institution." },
      { id: "toronto", name: "University of Toronto", rank: "QS #21", location: "Toronto, Canada", image: "https://images.unsplash.com/photo-1606240212371-bdc28ee45cd5?auto=format&fit=crop&q=80&w=800", blurb: "Canada's top research university with massive funding in AI and healthcare." }
    ]
  },
  {
    name: "Europe",
    universities: [
      { id: "oxford", name: "University of Oxford", rank: "QS #2", location: "Oxford, UK", image: "https://images.unsplash.com/photo-1521123845561-1406d86fb837?auto=format&fit=crop&q=80&w=800", blurb: "A millennium of academic excellence with the unique collegiate tutorial system." },
      { id: "eth", name: "ETH Zurich", rank: "QS #8", location: "Zurich, Switzerland", image: "https://images.unsplash.com/photo-1588653920364-7e86e580eec9?auto=format&fit=crop&q=80&w=800", blurb: "Continental Europe's finest tech university, where Einstein studied." },
      { id: "tum", name: "Technical University of Munich", rank: "QS #37", location: "Munich, Germany", image: "https://images.unsplash.com/photo-1599839619722-39751411ea63?auto=format&fit=crop&q=80&w=800", blurb: "Germany's leading technical university with strong industry ties to BMW and Siemens." }
    ]
  },
  {
    name: "Asia-Pacific",
    universities: [
      { id: "nus", name: "National University of Singapore", rank: "QS #8", location: "Singapore", image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800", blurb: "Asia's flagship university offering a global approach to education and research." },
      { id: "tsinghua", name: "Tsinghua University", rank: "QS #14", location: "Beijing, China", image: "https://images.unsplash.com/photo-1598440947619-2ce5769a5a10?auto=format&fit=crop&q=80&w=800", blurb: "China's premier institution, deeply embedded in the nation's technological and political advancement." },
      { id: "melbourne", name: "University of Melbourne", rank: "QS #33", location: "Melbourne, Australia", image: "https://images.unsplash.com/photo-1613896527026-f195d5c818ed?auto=format&fit=crop&q=80&w=800", blurb: "Australia's top-ranked university located in one of the world's most livable cities." }
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
};

export default function UniversitiesHubPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-background pb-32">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-full text-xs font-bold tracking-[0.2em] uppercase mb-6"
          >
            <Building2 className="w-4 h-4" /> Elite Institutions
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black tracking-tighter mb-6 text-foreground"
          >
            World-Class <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Academia</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-muted-foreground font-medium tracking-tight"
          >
            Discover the highest-ranking universities across the globe. Read our editorial insights on what makes studying at these institutions a transformative experience.
          </motion.p>
        </div>
      </section>

      {/* Regional Grid Sections */}
      <div className="container mx-auto px-4 space-y-24">
        {REGIONS.map((region, rIdx) => (
          <section key={region.name}>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex items-center gap-4 mb-10"
            >
              <h2 className="text-3xl font-black tracking-tighter text-foreground">{region.name}</h2>
              <div className="h-px bg-border flex-1 ml-4" />
            </motion.div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            >
              {region.universities.map((uni) => (
                <motion.div 
                  key={uni.id} 
                  variants={cardVariants}
                  className="group bg-white/60 dark:bg-card/40 backdrop-blur-xl border border-border/50 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image 
                      src={uni.image} 
                      alt={uni.name} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    
                    {/* Ranking Badge */}
                    <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg border border-white/20">
                      <Award className="w-3.5 h-3.5 text-yellow-500" />
                      <span className="text-xs font-bold tracking-widest uppercase text-foreground">{uni.rank}</span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-black text-white tracking-tight leading-tight">{uni.name}</h3>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
                      <MapPin className="w-3.5 h-3.5" /> {uni.location}
                    </div>
                    <div className="bg-secondary/50 rounded-2xl p-4 border border-border/40 mb-4 flex-1">
                      <p className="text-sm font-medium leading-relaxed tracking-tight text-foreground/90">
                        "{uni.blurb}"
                      </p>
                    </div>
                    <button className="w-full py-3 rounded-xl bg-background border border-border/50 text-sm font-bold tracking-tight hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors flex items-center justify-center gap-2">
                      <GraduationCap className="w-4 h-4" /> View Scholarships
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </section>
        ))}
      </div>
    </div>
  );
}
