"use client";

import { useState } from "react";
import { Check, FileText } from "lucide-react";
import { motion } from "framer-motion";

const defaultDocuments = [
  { id: "1", name: "Valid Passport", checked: false },
  { id: "2", name: "Academic Transcripts", checked: false },
  { id: "3", name: "Statement of Purpose", checked: false },
  { id: "4", name: "Letters of Recommendation (x2)", checked: false },
  { id: "5", name: "English Proficiency Score (IELTS/TOEFL)", checked: false },
  { id: "6", name: "Updated CV/Resume", checked: false },
];

export function DocumentChecklist() {
  const [docs, setDocs] = useState(defaultDocuments);

  const toggleCheck = (id: string) => {
    setDocs(docs.map(doc => doc.id === id ? { ...doc, checked: !doc.checked } : doc));
  };

  const progress = (docs.filter(d => d.checked).length / docs.length) * 100;

  return (
    <div className="rounded-2xl border border-border/50 bg-card p-6 shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-primary/10 rounded-lg">
          <FileText className="w-5 h-5 text-primary" />
        </div>
        <h3 className="text-lg font-bold">Essential Documents</h3>
      </div>

      <div className="mb-6">
        <div className="flex justify-between text-sm mb-2 text-muted-foreground">
          <span>Preparation Progress</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-primary"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ type: "spring", bounce: 0, duration: 0.8 }}
          />
        </div>
      </div>

      <ul className="space-y-3">
        {docs.map(doc => (
          <li 
            key={doc.id} 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => toggleCheck(doc.id)}
          >
            <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${doc.checked ? "bg-primary border-primary text-primary-foreground" : "border-muted-foreground/40 group-hover:border-primary/50"}`}>
              {doc.checked && <Check className="w-3.5 h-3.5" />}
            </div>
            <span className={`text-sm transition-colors ${doc.checked ? "text-muted-foreground line-through" : "text-foreground group-hover:text-primary"}`}>
              {doc.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
