"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const sidebarLinks = [
  {
    category: "Foundations",
    items: [
      { name: "What is a Scholarship", href: "/resources/foundations/intro" },
      { name: "Types of Scholarships", href: "/resources/foundations/types" },
    ]
  },
  {
    category: "Preparation",
    items: [
      { name: "Required Documents", href: "/resources/preparation/documents" },
      { name: "Step-by-Step Guide", href: "/resources/preparation/guide" },
    ]
  },
  {
    category: "Discovery",
    items: [
      { name: "Countries", href: "/resources/discovery/countries" },
      { name: "Top Universities", href: "/resources/discovery/universities" },
    ]
  },
  {
    category: "Insights",
    items: [
      { name: "Tips & Strategies", href: "/resources/insights/tips" },
      { name: "Research Findings", href: "/resources/insights/research" },
    ]
  }
];

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl flex flex-col md:flex-row gap-12">
      {/* Sticky Sidebar Navigation */}
      <aside className="w-full md:w-64 flex-shrink-0">
        <div className="sticky top-24 space-y-8">
          <h2 className="text-xl font-extrabold tracking-tight mb-4">Encyclopedia</h2>
          {sidebarLinks.map((section, idx) => (
            <div key={idx} className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground/70">
                {section.category}
              </h3>
              <ul className="space-y-1">
                {section.items.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={item.href}>
                      <Link 
                        href={item.href}
                        className={`block px-3 py-2 rounded-lg text-sm font-medium transition-all relative ${
                          isActive 
                            ? "text-primary" 
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                        }`}
                      >
                        {isActive && (
                          <motion.div
                            layoutId="active-nav-pill"
                            className="absolute inset-0 bg-primary/10 rounded-lg -z-10"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          />
                        )}
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 min-w-0 pb-24">
        {children}
      </main>
    </div>
  );
}
