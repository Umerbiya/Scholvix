"use client";

import { TrendingUp, BarChart3, Lightbulb } from "lucide-react";

interface ResearchCardProps {
  title: string;
  stat: string;
  description: string;
}

export function ResearchCard({ title, stat, description }: ResearchCardProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-card to-card/50 p-8 shadow-sm group">
      {/* Decorative Background */}
      <div className="absolute -right-12 -top-12 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-colors duration-500" />
      <div className="absolute right-4 top-4 opacity-10">
        <BarChart3 className="w-24 h-24" />
      </div>

      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-6">
          <div className="p-2 bg-purple-500/10 rounded-lg">
            <Lightbulb className="w-5 h-5 text-purple-500" />
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-purple-500">Data Insight</span>
        </div>

        <div className="flex items-end gap-4 mb-4">
          <h4 className="text-5xl font-extrabold text-foreground">{stat}</h4>
          <div className="flex items-center text-emerald-500 font-semibold mb-1">
            <TrendingUp className="w-4 h-4 mr-1" />
            <span>Success Rate</span>
          </div>
        </div>

        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
