"use client";

import { useState, useEffect } from "react";
import { Check, Circle } from "lucide-react";
import { motion } from "framer-motion";

const DOCUMENTS = [
  { id: "sop", title: "Statement of Purpose (SOP)", desc: "Tailored to the specific university and program." },
  { id: "cv", title: "Academic Resume / CV", desc: "Highlighting research, work experience, and leadership." },
  { id: "lor1", title: "Letter of Recommendation 1", desc: "From a primary academic supervisor or professor." },
  { id: "lor2", title: "Letter of Recommendation 2", desc: "From a professional or secondary reference." },
  { id: "transcripts", title: "Official Transcripts", desc: "Translated into English if necessary and notarized." },
  { id: "passport", title: "Valid Passport", desc: "Must be valid for at least 6 months post-graduation." },
  { id: "test", title: "Standardized Test Scores", desc: "IELTS/TOEFL and GRE/GMAT score reports." }
];

export function DocumentChecklist() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("scholvix_docs");
    if (saved) {
      try {
        setChecked(JSON.parse(saved));
      } catch (e) {}
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("scholvix_docs", JSON.stringify(checked));
    }
  }, [checked, mounted]);

  const toggleCheck = (id: string) => {
    setChecked(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const completedCount = Object.values(checked).filter(Boolean).length;
  const progress = mounted ? (completedCount / DOCUMENTS.length) * 100 : 0;
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  if (!mounted) return <div className="min-h-[400px] animate-pulse bg-slate-100 dark:bg-slate-800 rounded-3xl" />;

  return (
    <div className="bg-white dark:bg-card/40 backdrop-blur-xl border border-border/50 rounded-[3rem] p-8 md:p-12 shadow-sm flex flex-col md:flex-row gap-12 items-center md:items-start">
      {/* Progress Ring */}
      <div className="relative flex flex-col items-center justify-center shrink-0">
        <svg className="w-48 h-48 transform -rotate-90 drop-shadow-md">
          <circle cx="96" cy="96" r="45" className="stroke-border fill-none" strokeWidth="8" />
          <motion.circle 
            cx="96" cy="96" r="45" 
            className="stroke-primary fill-none" 
            strokeWidth="8"
            strokeLinecap="round"
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{ strokeDasharray: circumference }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center pt-2">
          <span className="text-4xl font-black text-primary tracking-tighter">{Math.round(progress)}%</span>
          <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mt-1">Ready</span>
        </div>
      </div>

      {/* Checklist */}
      <div className="flex-1 w-full space-y-3">
        <h3 className="text-3xl font-black tracking-tighter text-foreground mb-6">Master Checklist</h3>
        {DOCUMENTS.map((doc) => {
          const isChecked = !!checked[doc.id];
          return (
            <div 
              key={doc.id}
              onClick={() => toggleCheck(doc.id)}
              className={`flex items-start gap-4 p-4 rounded-2xl border cursor-pointer transition-all duration-300 ${
                isChecked ? 'bg-primary/5 border-primary/30 shadow-inner' : 'bg-background hover:bg-muted/50 border-border/40 hover:shadow-md'
              }`}
            >
              <div className={`mt-1 w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                isChecked ? 'bg-primary text-primary-foreground' : 'border-2 border-muted-foreground text-transparent'
              }`}>
                {isChecked ? <Check className="w-4 h-4" /> : <Circle className="w-4 h-4 opacity-0" />}
              </div>
              <div>
                <p className={`font-bold transition-all duration-300 ${isChecked ? 'text-primary line-through opacity-70' : 'text-foreground tracking-tight'}`}>
                  {doc.title}
                </p>
                <p className={`text-sm mt-1 transition-all duration-300 ${isChecked ? 'text-muted-foreground/60' : 'text-muted-foreground font-medium'}`}>
                  {doc.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
