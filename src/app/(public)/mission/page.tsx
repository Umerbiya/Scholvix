"use client";

import { motion } from "framer-motion";
import { Target, Flag, Zap } from "lucide-react";
import Image from "next/image";

export default function MissionPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] pb-32">
      {/* Editorial Header */}
      <section className="relative w-full pt-32 pb-16 flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-bold uppercase tracking-widest text-primary mb-6">Our Mission</p>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-foreground leading-[1.1]">
              Leveling the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500">Playing Field.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Massive Image Break */}
      <section className="container mx-auto px-4 mb-24">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full h-[60vh] min-h-[400px] rounded-[3rem] overflow-hidden"
        >
          <Image 
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2000" 
            alt="Students collaborating" 
            fill 
            className="object-cover"
            priority
          />
        </motion.div>
      </section>

      {/* The Manifesto */}
      <section className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto space-y-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-xl dark:prose-invert font-serif"
          >
            <p className="lead text-2xl font-medium text-foreground leading-relaxed">
              Talent is distributed equally across the globe, but opportunity is not. We are on a mission to change that equation permanently.
            </p>
            
            <p>
              Every year, billions of dollars in scholarship funding go unawarded simply because the students who need it most don't know how to find it, or get completely overwhelmed by the application process. At the same time, a cottage industry of "consultants" charge exorbitant fees to gatekeep this public information.
            </p>
            
            <div className="bg-primary/5 dark:bg-primary/10 border-l-4 border-primary p-6 my-12 rounded-r-2xl">
              <p className="m-0 font-sans font-bold text-lg text-foreground">
                This platform is our answer. 100% free. 100% focused on student success. No hidden agendas.
              </p>
            </div>

            <p>
              By combining cutting-edge design, comprehensive data, and interactive preparation tools, we aim to transform the terrifying bureaucracy of international applications into a clear, step-by-step journey that anyone can conquer.
            </p>
          </motion.div>

          {/* Key Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-border/50">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <Target className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold tracking-tight">Radical Transparency</h3>
              <p className="text-muted-foreground font-sans">We believe in making every requirement, deadline, and financial detail completely transparent so you never waste time applying to the wrong programs.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-4"
            >
              <Zap className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold tracking-tight">Actionable Intelligence</h3>
              <p className="text-muted-foreground font-sans">We don't just list scholarships. We provide the tools, checklists, and guides you need to actually win them.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
