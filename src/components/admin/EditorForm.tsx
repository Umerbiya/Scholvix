"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link2, Loader2, Save, Bold, Italic, List, Link as LinkIcon, Sparkles } from "lucide-react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase/config";
import { toast } from "sonner";
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import TiptapLink from '@tiptap/extension-link';
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type EditorMode = "Scholarship" | "Guide";

export function EditorForm() {
  const [mode, setMode] = useState<EditorMode>("Scholarship");
  const [loading, setLoading] = useState(false);

  // Shared Form State
  const [title, setTitle] = useState("");
  
  // Scholarship specific state
  const [provider, setProvider] = useState("");
  const [amount, setAmount] = useState("");
  const [deadline, setDeadline] = useState("");
  const [country, setCountry] = useState("USA");
  const [university, setUniversity] = useState("");
  const [tags, setTags] = useState(""); 
  const [imageUrl, setImageUrl] = useState("");
  const [url, setUrl] = useState(""); // The official application URL

  // Guide specific state
  const [category, setCategory] = useState("Step-by-Step");
  const [featuredImage, setFeaturedImage] = useState("");

  const editor = useEditor({
    extensions: [
      StarterKit,
      TiptapLink.configure({ openOnClick: false }),
    ],
    content: '<p>Start writing your content here...</p>',
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose-base dark:prose-invert focus:outline-none max-w-none min-h-[300px]',
      },
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const toastId = toast.loading("Publishing content to the portal...");

    try {
      if (mode === "Scholarship") {
        await addDoc(collection(db, "scholarships"), {
          title, provider, amount, deadline, country, university,
          imageUrl: imageUrl.trim() || null,
          url: url.trim() || null,
          eligibilityTags: tags.split(",").map(t => t.trim()).filter(t => t.length > 0),
          createdAt: new Date().toISOString(),
          description: editor?.getHTML() || ""
        });
      } else {
        await addDoc(collection(db, "guides"), {
          title, category, 
          content: editor?.getHTML() || "", 
          featuredImage: featuredImage.trim() || null,
          createdAt: new Date().toISOString()
        });
      }
      toast.success(`${mode} published successfully!`, { id: toastId });
      
      // Reset form
      setTitle(""); setProvider(""); setAmount(""); setDeadline(""); setUniversity(""); setTags(""); setImageUrl(""); setUrl("");
      setFeaturedImage("");
      editor?.commands.setContent('');
    } catch (error: any) {
      console.error(error);
      toast.error(`Failed to publish: ${error.message}`, { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  const setLink = () => {
    const previousUrl = editor?.getAttributes('link').href;
    const inputUrl = window.prompt('URL', previousUrl);
    if (inputUrl === null) return;
    if (inputUrl === '') {
      editor?.chain().focus().extendMarkRange('link').unsetLink().run();
      return;
    }
    editor?.chain().focus().extendMarkRange('link').setLink({ href: inputUrl }).run();
  };

  return (
    <div className="max-w-5xl rounded-[2.5rem] border border-border/50 bg-card/60 backdrop-blur-xl shadow-2xl p-8 sm:p-12 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Mode Selector */}
      <div className="flex gap-4 mb-10 relative z-10 p-2 bg-muted/30 rounded-2xl w-max border border-border/50">
        {(["Scholarship", "Guide"] as EditorMode[]).map((m) => (
          <button
            key={m}
            type="button"
            onClick={() => setMode(m)}
            className={cn(
              "px-6 py-3 rounded-xl font-bold text-sm tracking-wide transition-all duration-300",
              mode === m 
                ? "bg-background text-foreground shadow-md border border-border/50" 
                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
            )}
          >
            {m}s
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
        {/* Core Field */}
        <div className="space-y-3">
          <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-2">Main Title</label>
          <input 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            required 
            placeholder={`Enter ${mode.toLowerCase()} title...`}
            className="w-full rounded-2xl border border-input/50 bg-background/50 px-6 py-4 text-xl font-bold focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all placeholder:text-muted-foreground/40" 
          />
        </div>

        {mode === "Scholarship" ? (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-2">Provider / Sponsor</label>
              <input value={provider} onChange={e => setProvider(e.target.value)} required placeholder="e.g. Fulbright Commission" className="w-full rounded-xl border border-input/50 bg-background/50 px-5 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-2">Financial Amount</label>
              <input value={amount} onChange={e => setAmount(e.target.value)} required placeholder="e.g. Fully Funded" className="w-full rounded-xl border border-input/50 bg-background/50 px-5 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-2">Application Deadline</label>
              <input type="date" value={deadline} onChange={e => setDeadline(e.target.value)} required className="w-full rounded-xl border border-input/50 bg-background/50 px-5 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-2">Host Country</label>
              <input value={country} onChange={e => setCountry(e.target.value)} required placeholder="e.g. United Kingdom" className="w-full rounded-xl border border-input/50 bg-background/50 px-5 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-2">Host University</label>
              <input value={university} onChange={e => setUniversity(e.target.value)} required placeholder="e.g. Oxford University" className="w-full rounded-xl border border-input/50 bg-background/50 px-5 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-2">Eligibility Tags</label>
              <input value={tags} onChange={e => setTags(e.target.value)} placeholder="Master's, International, STEM..." className="w-full rounded-xl border border-input/50 bg-background/50 px-5 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-2">Official App URL</label>
              <div className="flex items-center relative">
                <Link2 className="w-4 h-4 text-muted-foreground absolute left-4" />
                <input value={url} onChange={e => setUrl(e.target.value)} placeholder="https://apply..." className="w-full rounded-xl border border-input/50 bg-background/50 pl-11 pr-5 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-2">Cover Image URL</label>
              <div className="flex items-center relative">
                <Link2 className="w-4 h-4 text-muted-foreground absolute left-4" />
                <input value={imageUrl} onChange={e => setImageUrl(e.target.value)} placeholder="https://images.unsplash.com/..." className="w-full rounded-xl border border-input/50 bg-background/50 pl-11 pr-5 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all" />
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-2">Guide Category</label>
              <select value={category} onChange={e => setCategory(e.target.value)} className="w-full rounded-xl border border-input/50 bg-background/50 px-5 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all appearance-none cursor-pointer">
                <option>Step-by-Step</option>
                <option>Tips</option>
                <option>Research</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-2">Featured Image URL</label>
              <div className="flex items-center relative">
                <Link2 className="w-4 h-4 text-muted-foreground absolute left-4" />
                <input value={featuredImage} onChange={e => setFeaturedImage(e.target.value)} required placeholder="https://images.unsplash.com/..." className="w-full rounded-xl border border-input/50 bg-background/50 pl-11 pr-5 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all" />
              </div>
            </div>
          </motion.div>
        )}

        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-2">Rich Content / Editorial</label>
          <div className="w-full rounded-2xl border border-input/50 bg-background/50 overflow-hidden shadow-inner">
            {/* Tiptap Toolbar */}
            <div className="flex flex-wrap items-center gap-1 p-3 border-b border-input/30 bg-muted/20">
              <Button type="button" variant="ghost" size="icon" onClick={() => editor?.chain().focus().toggleBold().run()} className={cn("rounded-lg hover:bg-secondary transition-colors", editor?.isActive('bold') && 'bg-secondary')}>
                <Bold className="w-4 h-4" />
              </Button>
              <Button type="button" variant="ghost" size="icon" onClick={() => editor?.chain().focus().toggleItalic().run()} className={cn("rounded-lg hover:bg-secondary transition-colors", editor?.isActive('italic') && 'bg-secondary')}>
                <Italic className="w-4 h-4" />
              </Button>
              <div className="w-px h-6 bg-border/50 mx-2" />
              <Button type="button" variant="ghost" size="icon" onClick={() => editor?.chain().focus().toggleBulletList().run()} className={cn("rounded-lg hover:bg-secondary transition-colors", editor?.isActive('bulletList') && 'bg-secondary')}>
                <List className="w-4 h-4" />
              </Button>
              <div className="w-px h-6 bg-border/50 mx-2" />
              <Button type="button" variant="ghost" size="icon" onClick={setLink} className={cn("rounded-lg hover:bg-secondary transition-colors", editor?.isActive('link') && 'bg-secondary')}>
                <LinkIcon className="w-4 h-4" />
              </Button>
            </div>
            {/* Tiptap Editor */}
            <div className="p-6">
              <EditorContent editor={editor} />
            </div>
          </div>
        </div>

        <div className="pt-8 flex justify-end">
          <Button 
            disabled={loading} 
            type="submit" 
            className="h-14 px-8 rounded-2xl text-lg font-bold tracking-tight shadow-lg shadow-primary/20 hover:shadow-primary/40 relative overflow-hidden group transition-all"
          >
            <span className="relative z-10 flex items-center gap-2">
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Sparkles className="w-5 h-5" />}
              Publish to Portal
            </span>
            <div className="absolute inset-0 bg-white/20 group-hover:translate-x-full transition-transform duration-500 -skew-x-12 -ml-8 w-32" />
          </Button>
        </div>
      </form>
    </div>
  );
}
