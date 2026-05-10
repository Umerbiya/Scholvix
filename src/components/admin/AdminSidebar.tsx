"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, FileEdit, LogOut, Settings, Sparkles, UserCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase/config";

const navItems = [
  { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/editor", icon: FileEdit, label: "Content Editor" },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 bg-card/40 backdrop-blur-xl border-r border-border/40 flex flex-col relative z-20 shadow-2xl shadow-primary/5">
      {/* Brand Header */}
      <div className="h-24 flex items-center px-8 border-b border-border/40">
        <Link href="/dashboard" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-lg shadow-primary/20">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="text-2xl font-black tracking-tighter text-foreground">Scholvix<span className="text-primary">.</span></span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-8 space-y-2 overflow-y-auto">
        <div className="px-4 text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
          Management
        </div>
        {navItems.map((item) => {
          const isActive = pathname === item.href || pathname?.startsWith(`${item.href}/`);
          return (
            <Link 
              key={item.href} 
              href={item.href} 
              className={cn(
                "flex items-center gap-4 rounded-2xl px-4 py-3 text-sm font-semibold transition-all duration-300",
                isActive 
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/20" 
                  : "text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
              )}
            >
              <item.icon className="h-5 w-5" /> 
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Footer Profile */}
      <div className="p-4 border-t border-border/40">
        <div className="rounded-2xl bg-secondary/30 p-4 border border-border/50">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <UserCircle className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-foreground truncate">Admin User</p>
              <p className="text-xs font-medium text-muted-foreground truncate">admin@scholvix.com</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={() => signOut(auth)}
              className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-destructive/10 text-destructive hover:bg-destructive/20 hover:text-destructive px-3 py-2 text-xs font-bold transition-colors"
            >
              <LogOut className="h-3 w-3" /> Sign Out
            </button>
            <Link 
              href="/"
              className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-background border border-border/50 hover:bg-secondary text-foreground px-3 py-2 text-xs font-bold transition-colors"
            >
              Portal <Sparkles className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
}
