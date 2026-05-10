"use client";

import { motion } from "framer-motion";
import { Search, PenTool, FileText, Send, Lightbulb } from "lucide-react";

const STEPS = [
  { id: 1, title: "Initial Research & Shortlisting", icon: Search, desc: "Identify 10-15 potential scholarships that align with your profile, study destination, and financial needs.", tip: "Create a master spreadsheet tracking deadlines and specific requirements." },
  { id: 2, title: "Standardized Testing", icon: PenTool, desc: "Book and prepare for necessary exams (IELTS, TOEFL, GRE, GMAT). Give yourself enough buffer time to retake if necessary.", tip: "Many European programs now waive the GRE if your GPA is exceptional." },
  { id: 3, title: "Document Preparation", icon: FileText, desc: "Draft your Statement of Purpose (SOP), update your CV, and secure strong Letters of Recommendation (LOR).", tip: "Give your recommenders at least 4 weeks' notice and a bulleted list of your achievements." },
  { id: 4, title: "Review & Submission", icon: Send, desc: "Triple-check all requirements, ensure formatting is perfect, and submit well before the final deadline.", tip: "Submitting 2 weeks early prevents last-minute server crash panic." },
];

export function ApplicationTimeline() {
  return (
    <div className="relative py-12 max-w-4xl mx-auto">
      {/* Central Line */}
      <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-1 bg-border/50 -translate-x-1/2 rounded-full" />
      
      <div className="space-y-24">
        {STEPS.map((step, index) => (
          <motion.div 
            key={step.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-200px" }}
            className={`relative flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
          >
            {/* Timeline Node Highlight Animation */}
            <motion.div 
              variants={{
                hidden: { scale: 0.8, backgroundColor: "var(--background)", borderColor: "var(--border)", color: "#94a3b8" },
                visible: { scale: 1, backgroundColor: "var(--primary)", borderColor: "#e2e8f0", color: "#ffffff", transition: { duration: 0.6 } }
              }}
              className="absolute left-[39px] md:left-1/2 w-16 h-16 rounded-full -translate-x-1/2 flex items-center justify-center z-10 shadow-xl border-4"
            >
               <step.icon className="w-6 h-6" />
            </motion.div>

            {/* Content Side */}
            <div className={`w-full pl-24 md:pl-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16 text-left md:text-right'}`}>
              <motion.div 
                variants={{
                  hidden: { opacity: 0.2, y: 40 },
                  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
                }}
                className="bg-white dark:bg-card/40 backdrop-blur-lg border border-border/50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className={`inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 ${index % 2 !== 0 ? 'md:ml-auto' : ''}`}>
                  <Lightbulb className="w-3 h-3" /> Pro Tip
                </div>
                <h3 className="text-2xl font-black tracking-tight text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground font-medium mb-6 leading-relaxed">{step.desc}</p>
                <div className="bg-secondary/50 rounded-xl p-4 border border-border/40 text-sm text-foreground/90 italic shadow-inner">
                  "{step.tip}"
                </div>
              </motion.div>
            </div>
            
            {/* Empty Space for layout */}
            <div className="hidden md:block md:w-1/2" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
