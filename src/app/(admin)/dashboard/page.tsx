"use client";

import { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc, query, orderBy } from "firebase/firestore";
import { db } from "@/lib/firebase/config";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Trash2, Edit2, Loader2, FileText, GraduationCap, TrendingUp, MoreVertical } from "lucide-react";
import { motion } from "framer-motion";

export default function DashboardPage() {
  const [scholarships, setScholarships] = useState<any[]>([]);
  const [guides, setGuides] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const sSnap = await getDocs(query(collection(db, "scholarships"), orderBy("createdAt", "desc")));
      setScholarships(sSnap.docs.map(d => ({ id: d.id, ...d.data() })));

      const gSnap = await getDocs(query(collection(db, "guides"), orderBy("createdAt", "desc")));
      setGuides(gSnap.docs.map(d => ({ id: d.id, ...d.data() })));
    } catch (error) {
      console.error(error);
      toast.error("Failed to load dashboard data. Ensure Firebase is configured.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (collectionName: string, id: string) => {
    if (!window.confirm("Are you sure you want to delete this item? This action cannot be undone.")) return;
    
    const toastId = toast.loading("Deleting...");
    try {
      await deleteDoc(doc(db, collectionName, id));
      toast.success("Deleted successfully", { id: toastId });
      fetchData(); // Refresh
    } catch (error) {
      console.error(error);
      toast.error("Delete failed.", { id: toastId });
    }
  };

  if (loading) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  const allContent = [
    ...scholarships.map(s => ({ ...s, type: 'Scholarship' })),
    ...guides.map(g => ({ ...g, type: 'Guide' }))
  ].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-black tracking-tighter text-foreground">Welcome Back</h1>
        <p className="text-muted-foreground mt-1 font-medium">Here's what's happening with your platform today.</p>
      </div>
      
      {/* Bento Overview Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-4xl border border-border/50 bg-card/60 backdrop-blur-md p-6 shadow-sm relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-6 opacity-10">
            <GraduationCap className="w-24 h-24" />
          </div>
          <div className="relative z-10">
            <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">Total Scholarships</h3>
            <p className="text-5xl font-black text-foreground">{scholarships.length}</p>
            <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-emerald-500 bg-emerald-500/10 w-max px-3 py-1 rounded-full">
              <TrendingUp className="w-4 h-4" /> Active Now
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="rounded-4xl border border-border/50 bg-card/60 backdrop-blur-md p-6 shadow-sm relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-6 opacity-10">
            <FileText className="w-24 h-24" />
          </div>
          <div className="relative z-10">
            <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">Published Guides</h3>
            <p className="text-5xl font-black text-foreground">{guides.length}</p>
            <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-blue-500 bg-blue-500/10 w-max px-3 py-1 rounded-full">
              <TrendingUp className="w-4 h-4" /> Live
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-4xl border border-border/50 bg-primary text-primary-foreground p-6 shadow-lg shadow-primary/20 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-linear-to-br from-white/10 to-transparent" />
          <div className="relative z-10 h-full flex flex-col justify-between">
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary-foreground/80 mb-4">Total Content</h3>
            <p className="text-5xl font-black">{allContent.length}</p>
            <p className="mt-4 text-sm font-semibold text-primary-foreground/90">Platform Ecosystem</p>
          </div>
        </motion.div>
      </div>

      {/* Modern Data Table */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="rounded-4xl border border-border/50 bg-card/60 backdrop-blur-md shadow-sm overflow-hidden"
      >
        <div className="p-6 border-b border-border/40 flex justify-between items-center">
          <h2 className="text-xl font-bold tracking-tight">Content Repository</h2>
          <Button variant="outline" className="rounded-xl border-border/50">View All</Button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs uppercase bg-muted/30 text-muted-foreground font-bold tracking-widest">
              <tr>
                <th className="px-6 py-4 rounded-tl-xl">Title</th>
                <th className="px-6 py-4">Type</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Date Added</th>
                <th className="px-6 py-4 text-right rounded-tr-xl">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/30">
              {allContent.map((item) => (
                <tr key={item.id} className="hover:bg-muted/10 transition-colors">
                  <td className="px-6 py-5 font-bold text-foreground">
                    {item.title}
                  </td>
                  <td className="px-6 py-5">
                    {item.type === 'Scholarship' ? (
                      <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-500 text-xs font-bold tracking-wider uppercase border border-indigo-500/20">Scholarship</span>
                    ) : (
                      <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-500 text-xs font-bold tracking-wider uppercase border border-cyan-500/20">Guide</span>
                    )}
                  </td>
                  <td className="px-6 py-5">
                    <span className="flex items-center gap-2 text-emerald-500 font-semibold text-xs uppercase tracking-widest">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" /> Published
                    </span>
                  </td>
                  <td className="px-6 py-5 text-muted-foreground font-medium">
                    {new Date(item.createdAt).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}
                  </td>
                  <td className="px-6 py-5 text-right space-x-2 whitespace-nowrap">
                    <Button variant="ghost" size="icon" className="h-9 w-9 rounded-xl text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                      <Edit2 className="w-4 h-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-9 w-9 rounded-xl text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors" 
                      onClick={() => handleDelete(item.type === 'Scholarship' ? 'scholarships' : 'guides', item.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </td>
                </tr>
              ))}
              {allContent.length === 0 && (
                <tr>
                  <td colSpan={5} className="text-center py-12 text-muted-foreground font-medium">
                    No content found in the database.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
