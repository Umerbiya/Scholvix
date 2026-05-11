"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, TrendingUp, Users } from "lucide-react";

export function Hero() {
  return (
    // Changed h-[90vh] to min-h-screen and adjusted padding to account for the stats bar
    <section className="relative w-full min-h-screen lg:h-[90vh] flex flex-col justify-center overflow-hidden pt-20 pb-32 md:pb-0">

      {/* Background Image - Changed z-index and added object-center */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80"
          alt="University Campus"
          className="w-full h-full object-cover object-center"
        />
        {/* Adjusted gradient for better contrast on mobile */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background md:bg-gradient-to-r md:from-background/95 md:via-background/80 md:to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              // Reduced mobile font size (text-4xl) so it doesn't push buttons down
              className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter text-foreground mb-6 leading-tight"
            >
              Fund Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Future.</span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            // Adjusted mobile text size
            className="text-lg md:text-2xl text-muted-foreground/90 max-w-2xl mb-8 md:mb-10 tracking-tight font-medium"
          >
            The ultimate discovery portal for global scholarships and step-by-step application resources designed for ambitious students.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            // Changed to flex-col on small screens so buttons don't clip
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" className="h-12 md:h-14 px-8 text-base font-bold tracking-tight rounded-full shadow-xl shadow-primary/20">
              Explore Scholarships <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="h-12 md:h-14 px-8 text-base font-bold tracking-tight rounded-full bg-background/50 backdrop-blur-md border-border/50 hover:bg-background/80">
              Read the Guides
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Quick Stats Bar - Added relative positioning on mobile to prevent overlap */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="absolute bottom-0 left-0 right-0 z-20 border-t border-border/20 bg-background/60 backdrop-blur-md"
      >
        <div className="container mx-auto px-4 py-4 md:py-6">
          {/* grid instead of flex-wrap for better mobile alignment */}
          <div className="grid grid-cols-2 md:flex md:flex-row justify-center md:justify-start gap-6 md:gap-24">
            <div className="flex items-center gap-3">
              <div className="p-2 md:p-3 bg-primary/10 rounded-xl"><Globe className="w-5 h-5 md:w-6 md:h-6 text-primary" /></div>
              <div>
                <p className="text-lg md:text-2xl font-bold tracking-tight text-foreground">10k+</p>
                <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.1em] text-muted-foreground">Scholarships</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 md:p-3 bg-blue-500/10 rounded-xl"><TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-blue-500" /></div>
              <div>
                <p className="text-lg md:text-2xl font-bold tracking-tight text-foreground">$500M+</p>
                <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.1em] text-muted-foreground">In Funding</p>
              </div>
            </div>
            <div className="flex items-center gap-3 col-span-2 md:col-span-1 justify-center md:justify-start">
              <div className="p-2 md:p-3 bg-emerald-500/10 rounded-xl"><Users className="w-5 h-5 md:w-6 md:h-6 text-emerald-500" /></div>
              <div>
                <p className="text-lg md:text-2xl font-bold tracking-tight text-foreground">Global</p>
                <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.1em] text-muted-foreground">Access</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}