"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, TrendingUp, Users } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full h-[90vh] min-h-[600px] flex flex-col justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-20">
        <img
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80"
          alt="University Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-8">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-block"
          >
            <span className="px-3 py-1 text-[10px] font-bold tracking-[0.2em] uppercase text-primary bg-primary/10 rounded-full backdrop-blur-md border border-primary/20">
              The Global Standard
            </span>
          </motion.div>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-8xl font-black tracking-tighter text-foreground mb-6"
            >
              Fund Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Future.</span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-muted-foreground/90 max-w-2xl mb-10 tracking-tight font-medium"
          >
            The ultimate discovery portal for global scholarships and step-by-step application resources designed for ambitious students.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <Button size="lg" className="h-14 px-8 text-base font-bold tracking-tight rounded-full shadow-xl shadow-primary/20">
              Explore Scholarships <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-base font-bold tracking-tight rounded-full bg-background/50 backdrop-blur-md border-border/50 hover:bg-background/80">
              Read the Guides
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Quick Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="absolute bottom-0 left-0 right-0 z-20 border-t border-border/20 bg-background/40 backdrop-blur-md supports-[backdrop-filter]:bg-background/20"
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap justify-center md:justify-start gap-12 md:gap-24">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-primary/10 rounded-xl"><Globe className="w-6 h-6 text-primary" /></div>
              <div>
                <p className="text-2xl font-bold tracking-tight text-foreground">10k+</p>
                <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-muted-foreground">Scholarships</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-blue-500/10 rounded-xl"><TrendingUp className="w-6 h-6 text-blue-500" /></div>
              <div>
                <p className="text-2xl font-bold tracking-tight text-foreground">$500M+</p>
                <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-muted-foreground">In Funding</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-emerald-500/10 rounded-xl"><Users className="w-6 h-6 text-emerald-500" /></div>
              <div>
                <p className="text-2xl font-bold tracking-tight text-foreground">Global</p>
                <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-muted-foreground">Access</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
