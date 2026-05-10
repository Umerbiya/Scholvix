"use client";

import { useState, useRef, useEffect } from "react";
import { Search, MapPin, GraduationCap, Building } from "lucide-react";
import Link from "next/link";

const MOCK_DATA = [
  { id: "uk", title: "United Kingdom", type: "Country", href: "/countries#uk", icon: MapPin },
  { id: "usa", title: "United States", type: "Country", href: "/countries#usa", icon: MapPin },
  { id: "can", title: "Canada", type: "Country", href: "/countries#canada", icon: MapPin },
  { id: "ger", title: "Germany", type: "Country", href: "/countries#germany", icon: MapPin },
  { id: "aus", title: "Australia", type: "Country", href: "/countries#australia", icon: MapPin },
  { id: "oxford", title: "University of Oxford", type: "University", href: "/universities", icon: GraduationCap },
  { id: "mit", title: "MIT", type: "University", href: "/universities", icon: GraduationCap },
  { id: "tum", title: "Technical University of Munich", type: "University", href: "/universities", icon: GraduationCap },
  { id: "snu", title: "Seoul National University", type: "University", href: "/universities", icon: GraduationCap },
  { id: "mcgill", title: "McGill University", type: "University", href: "/universities", icon: GraduationCap },
];

export function GlobalSearch() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const results = query
    ? MOCK_DATA.filter((item) => item.title.toLowerCase().includes(query.toLowerCase()) || item.type.toLowerCase().includes(query.toLowerCase()))
    : [];

  return (
    <div className="hidden md:flex relative items-center" ref={containerRef}>
      <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
      <input
        type="text"
        placeholder="Search destinations, universities..."
        className="h-10 w-72 rounded-full border border-border/50 bg-background/50 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all shadow-sm"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setIsOpen(true);
        }}
        onFocus={() => setIsOpen(true)}
      />
      
      {isOpen && query && (
        <div className="absolute top-full mt-2 w-full bg-background/90 backdrop-blur-xl border border-border/50 rounded-2xl shadow-2xl overflow-hidden z-50">
          <div className="max-h-80 overflow-y-auto p-2">
            {results.length > 0 ? (
              results.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer group"
                >
                  <div className="p-2 bg-secondary group-hover:bg-primary/20 rounded-lg text-muted-foreground group-hover:text-primary transition-colors">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">{item.title}</p>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium">{item.type}</p>
                  </div>
                </Link>
              ))
            ) : (
              <div className="p-4 text-center text-sm text-muted-foreground">
                No results found.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
