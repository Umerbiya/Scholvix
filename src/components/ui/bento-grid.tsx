"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, FileCheck, Globe, GraduationCap, Search } from "lucide-react";
import Link from "next/link";
import { Scholarship } from "@/lib/firebase/firestore";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export function BentoGrid({ latest }: { latest: Scholarship[] }) {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4 py-12"
    >
      {/* Tile 1: Latest Scholarships */}
      <motion.div variants={itemVariants} className="md:col-span-2 lg:col-span-2 row-span-2 rounded-3xl border border-border/50 bg-card/50 backdrop-blur-sm p-8 shadow-sm flex flex-col relative overflow-hidden group h-[500px] md:h-auto">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-primary/20 rounded-xl"><GraduationCap className="w-6 h-6 text-primary" /></div>
          <h2 className="text-2xl font-bold">Latest Scholarships</h2>
        </div>
        <div className="flex flex-col gap-3 flex-1 overflow-y-auto pr-2 custom-scrollbar">
          {latest.length > 0 ? latest.map((item) => (
            <Link 
              key={item.id} 
              href={`/scholarships/${item.id}`}
              className="p-4 rounded-2xl border border-border/40 bg-background/60 hover:bg-muted/50 transition-all hover:border-primary/30 group/item"
            >
              <h3 className="font-bold text-base line-clamp-1 group-hover/item:text-primary transition-colors">{item.title}</h3>
              <p className="text-xs text-muted-foreground mt-1 font-medium">{item.provider || item.university} • {item.country}</p>
              <div className="flex justify-between items-center mt-3 pt-3 border-t border-border/20">
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">{item.amount}</span>
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-tight">
                  {new Date(item.deadline).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                </span>
              </div>
            </Link>
          )) : (
            <p className="text-muted-foreground text-sm">No scholarships found. We are fetching the latest opportunities.</p>
          )}
        </div>
        <div className="mt-6">
          <Link 
            href="/scholarships" 
            className={cn(
              buttonVariants({ variant: "outline" }),
              "w-full rounded-xl gap-2 font-bold py-6 border-primary/20 hover:bg-primary/5 hover:border-primary/50 text-primary transition-all shadow-sm"
            )}
          >
            View all opportunities <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </motion.div>

      {/* Tile 2: Top Study Destinations */}
      <motion.div variants={itemVariants} className="md:col-span-1 lg:col-span-2 rounded-3xl border border-border/50 bg-card/50 backdrop-blur-sm p-8 shadow-sm flex flex-col justify-between group">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-blue-500/20 rounded-xl"><Globe className="w-6 h-6 text-blue-500" /></div>
            <h2 className="text-xl font-bold">Top Destinations</h2>
          </div>
          <p className="text-muted-foreground text-sm mb-6">Explore scholarships by country and find the perfect environment for your studies.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {["USA", "UK", "Canada", "Australia", "Germany"].map(country => (
            <span key={country} className="px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
              {country}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Tile 3: Essential Documents */}
      <motion.div variants={itemVariants} className="md:col-span-1 lg:col-span-1 rounded-3xl border border-border/50 bg-card/50 backdrop-blur-sm p-8 shadow-sm group hover:border-primary/50 transition-colors">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-emerald-500/20 rounded-xl"><FileCheck className="w-6 h-6 text-emerald-500" /></div>
          <h2 className="text-xl font-bold">Checklist</h2>
        </div>
        <ul className="space-y-3 text-sm text-muted-foreground">
          <li className="flex items-center gap-2">✓ Statement of Purpose</li>
          <li className="flex items-center gap-2">✓ Transcripts</li>
          <li className="flex items-center gap-2">✓ Recommendation Letters</li>
          <li className="flex items-center gap-2">✓ English Proficiency Test</li>
        </ul>
      </motion.div>

      {/* Tile 4: Research Findings */}
      <motion.div variants={itemVariants} className="md:col-span-2 lg:col-span-1 rounded-3xl border border-border/50 bg-card/50 backdrop-blur-sm p-8 shadow-sm group">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-purple-500/20 rounded-xl"><Search className="w-6 h-6 text-purple-500" /></div>
          <h2 className="text-xl font-bold">Research</h2>
        </div>
        <p className="text-sm text-muted-foreground mb-4">Our data shows that applying to 5+ scholarships increases your success rate by 40%.</p>
        <Link href="/guides" className="text-sm font-medium text-purple-500 hover:underline inline-flex items-center gap-1">
          Read full report <ArrowRight className="w-3 h-3" />
        </Link>
      </motion.div>
    </motion.div>
  );
}
