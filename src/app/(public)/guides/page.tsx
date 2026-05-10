"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ApplicationTimeline } from "@/components/guides/ApplicationTimeline";
import { DocumentChecklist } from "@/components/guides/DocumentChecklist";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { ArrowRight, Compass } from "lucide-react";

export default function GuidesLandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-background pb-32">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full text-xs font-bold tracking-[0.2em] uppercase mb-6"
          >
            <Compass className="w-4 h-4" /> The Preparation Center
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black tracking-tighter mb-6 text-foreground"
          >
            Master the <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600">Application</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-muted-foreground font-medium tracking-tight"
          >
            We've turned complex bureaucratic guides into interactive, step-by-step tools. Map your roadmap and track your documents in real-time.
          </motion.p>
        </div>
      </section>

      {/* Interactive Tool 1: The Timeline */}
      <section className="container mx-auto px-4 py-24 border-t border-border/40">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 text-foreground">Application Roadmap</h2>
          <p className="text-muted-foreground font-medium tracking-tight text-lg max-w-2xl mx-auto">Your chronological guide to securing a fully-funded scholarship, mapped from day one to submission.</p>
        </div>
        <ApplicationTimeline />
      </section>

      {/* Interactive Tool 2: Document Checklist (Split Screen Aesthetic) */}
      <section className="container mx-auto px-4 py-24 border-t border-border/40">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
           <div className="space-y-8">
             <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-foreground leading-tight">
               Your Smart <br className="hidden lg:block"/> Document Tracker
             </h2>
             <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-medium tracking-tight">
               Forget messy spreadsheets. Use our intelligent tracker to ensure you never miss a critical document. Progress is saved directly to your browser session.
             </p>
             <MagneticButton size="lg" className="h-14 px-8 rounded-full font-bold tracking-tight shadow-xl shadow-emerald-500/20 bg-emerald-600 hover:bg-emerald-700 text-white border-0">
               <span className="flex items-center">Download Blank Templates <ArrowRight className="w-5 h-5 ml-2" /></span>
             </MagneticButton>
           </div>
           <div className="relative h-[400px] lg:h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border border-border/50">
              <Image 
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1200" 
                alt="Student preparing documents" 
                fill 
                className="object-cover"
              />
           </div>
         </div>

         <DocumentChecklist />
      </section>
    </div>
  );
}
