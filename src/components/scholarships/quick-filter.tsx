"use client";

import { useState, useRef, useEffect } from "react";
import { Filter, ChevronDown, Check, Search } from "lucide-react";
import { cn } from "@/lib/utils";

export function QuickFilter() {
  const [country, setCountry] = useState("");
  const [degree, setDegree] = useState("");
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");
  
  const countryRef = useRef<HTMLDivElement>(null);

  const rawCountries = ["USA", "UK", "Canada", "Australia", "Germany", "France", "Japan", "South Korea", "Global/Anywhere"];
  
  const filteredCountries = rawCountries.filter(c => c.toLowerCase().includes(countrySearch.toLowerCase()));
  const degrees = ["Undergraduate", "Master's", "PhD", "Post-doc"];

  // Handle outside click for custom dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (countryRef.current && !countryRef.current.contains(event.target as Node)) {
        setIsCountryOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full rounded-2xl border border-border/50 bg-card/60 backdrop-blur-md p-6 shadow-sm mb-8">
      <div className="flex items-center gap-2 mb-4">
        <Filter className="w-5 h-5 text-[#7c3aed]" />
        <h3 className="font-semibold text-lg">Quick Filter</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Searchable Combobox for Country */}
        <div className="relative" ref={countryRef}>
          <label className="text-sm font-medium text-muted-foreground mb-1 block">Country / Region</label>
          <div 
            className={cn(
              "flex items-center justify-between w-full rounded-lg border border-input bg-background/50 px-3 py-2 text-sm cursor-pointer transition-all",
              isCountryOpen ? "ring-2 ring-[#7c3aed]/50 border-[#7c3aed]" : "hover:border-foreground/20"
            )}
            onClick={() => setIsCountryOpen(!isCountryOpen)}
          >
            <span className={country ? "text-foreground" : "text-muted-foreground"}>
              {country || "Search countries..."}
            </span>
            <ChevronDown className={cn("w-4 h-4 text-muted-foreground transition-transform duration-200", isCountryOpen && "rotate-180")} />
          </div>
          
          {isCountryOpen && (
            <div className="absolute z-50 w-full mt-1 bg-popover text-popover-foreground rounded-lg border border-border shadow-lg overflow-hidden animate-in fade-in-80 slide-in-from-top-1">
              <div className="flex items-center px-3 py-2 border-b border-border/50">
                <Search className="w-4 h-4 mr-2 text-muted-foreground shrink-0" />
                <input 
                  type="text" 
                  placeholder="Type a country..." 
                  value={countrySearch}
                  onChange={(e) => setCountrySearch(e.target.value)}
                  className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
              <div className="max-h-48 overflow-y-auto p-1 custom-scrollbar">
                <div 
                  className={cn(
                    "flex items-center justify-between px-2 py-1.5 text-sm rounded-md cursor-pointer hover:bg-muted transition-colors",
                    country === "" && "bg-[#7c3aed]/10 text-[#7c3aed] font-medium"
                  )}
                  onClick={() => {
                    setCountry("");
                    setIsCountryOpen(false);
                    setCountrySearch("");
                  }}
                >
                  All Countries
                  {country === "" && <Check className="w-4 h-4" />}
                </div>
                {filteredCountries.length > 0 ? filteredCountries.map(c => (
                  <div 
                    key={c}
                    className={cn(
                      "flex items-center justify-between px-2 py-1.5 text-sm rounded-md cursor-pointer hover:bg-muted transition-colors",
                      country === c && "bg-[#7c3aed]/10 text-[#7c3aed] font-medium"
                    )}
                    onClick={() => {
                      setCountry(c);
                      setIsCountryOpen(false);
                      setCountrySearch("");
                    }}
                  >
                    {c}
                    {country === c && <Check className="w-4 h-4" />}
                  </div>
                )) : (
                  <div className="px-2 py-3 text-sm text-center text-muted-foreground">
                    No country found.
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Standard Select for Degree */}
        <div>
          <label className="text-sm font-medium text-muted-foreground mb-1 block">Degree Type</label>
          <select 
            value={degree} 
            onChange={(e) => setDegree(e.target.value)}
            className="w-full rounded-lg border border-input bg-background/50 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#7c3aed]/50 hover:border-foreground/20 transition-all cursor-pointer"
          >
            <option value="">All Degrees</option>
            {degrees.map(d => <option key={d} value={d}>{d}</option>)}
          </select>
        </div>
        
      </div>
    </div>
  );
}
