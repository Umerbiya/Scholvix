"use client";

import { useState } from "react";
import { Filter } from "lucide-react";

export function QuickFilter() {
  const [country, setCountry] = useState("");
  const [degree, setDegree] = useState("");

  const countries = ["USA", "UK", "Canada", "Australia", "Germany"];
  const degrees = ["Undergraduate", "Master's", "PhD", "Post-doc"];

  return (
    <div className="w-full rounded-2xl border border-border/50 bg-card/60 backdrop-blur-md p-6 shadow-sm mb-8">
      <div className="flex items-center gap-2 mb-4">
        <Filter className="w-5 h-5 text-primary" />
        <h3 className="font-semibold text-lg">Quick Filter</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium text-muted-foreground mb-1 block">Country</label>
          <select 
            value={country} 
            onChange={(e) => setCountry(e.target.value)}
            className="w-full rounded-lg border border-input bg-background/50 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            <option value="">All Countries</option>
            {countries.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <div>
          <label className="text-sm font-medium text-muted-foreground mb-1 block">Degree Type</label>
          <select 
            value={degree} 
            onChange={(e) => setDegree(e.target.value)}
            className="w-full rounded-lg border border-input bg-background/50 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            <option value="">All Degrees</option>
            {degrees.map(d => <option key={d} value={d}>{d}</option>)}
          </select>
        </div>
      </div>
    </div>
  );
}
