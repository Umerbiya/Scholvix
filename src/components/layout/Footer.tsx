"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Camera, Briefcase, Globe, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-white dark:bg-[#0a0a0a] border-t border-border/40 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">

          {/* Brand & Newsletter Column (Span 4) */}
          <div className="lg:col-span-4 space-y-8">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Scholvix Logo"
                width={32}
                height={32}
                className="object-contain"
              />
              <span className="text-2xl font-black tracking-tighter text-foreground">Scholvix.</span>
            </Link>
            <p className="text-muted-foreground font-medium text-sm leading-relaxed max-w-sm">
              The world's most advanced platform for discovering, tracking, and securing fully-funded global scholarships.
            </p>

            <div className="bg-slate-50 dark:bg-card/40 backdrop-blur-xl border border-border/50 p-4 rounded-2xl shadow-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-foreground mb-3 flex items-center gap-2">
                Join the Elite Newsletter
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-background/50 border border-border/50 rounded-xl px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
                <Button className="rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all" onClick={() => console.log("Newsletter signed up!")}>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-foreground mb-6">Platform</h4>
            <ul className="space-y-4 text-sm text-muted-foreground font-medium">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/research" className="hover:text-primary transition-colors">Data Insights</Link></li>
              <li><Link href="/mission" className="hover:text-primary transition-colors">Our Mission</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-widest text-foreground mb-6">Discovery</h4>
            <ul className="space-y-4 text-sm text-muted-foreground font-medium">
              <li><Link href="/scholarships" className="hover:text-primary transition-colors">Browse Scholarships</Link></li>
              <li><Link href="/countries" className="hover:text-primary transition-colors">Study Destinations</Link></li>
              <li><Link href="/universities" className="hover:text-primary transition-colors">Elite Universities</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-widest text-foreground mb-6">Resources</h4>
            <ul className="space-y-4 text-sm text-muted-foreground font-medium">
              <li><Link href="/guides" className="hover:text-primary transition-colors">Prep Center</Link></li>
              <li><Link href="/guides" className="hover:text-primary transition-colors">Document Tracker</Link></li>
              <li><Link href="/guides" className="hover:text-primary transition-colors">Pro Tips</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-24 pt-8 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground font-medium">
            © {new Date().getFullYear()} Scholvix. All rights reserved.
            Scholvix®, a product of OMAR Technologies Pvt. Ltd.
          </div>

          <div className="flex items-center gap-6">
            <Link href="/legal/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium">Privacy Policy</Link>
            <Link href="/legal/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium">Terms of Service</Link>
          </div>

          <div className="flex items-center gap-4 text-muted-foreground">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><Globe className="w-5 h-5" /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><Briefcase className="w-5 h-5" /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><Camera className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
