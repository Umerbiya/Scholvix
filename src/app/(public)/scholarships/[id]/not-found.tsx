import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 bg-slate-50 dark:bg-background">
      <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center mb-8">
        <Search className="w-16 h-16 text-primary" />
      </div>
      <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 text-foreground">Scholarship Not Found</h1>
      <p className="text-xl text-muted-foreground max-w-lg mb-8 font-medium tracking-tight">
        The opportunity you are looking for has either expired, been removed, or the link is broken.
      </p>
      <Link href="/scholarships">
        <Button size="lg" className="h-14 px-8 text-base font-bold tracking-tight rounded-full shadow-lg hover:shadow-xl transition-all">
          Browse All Scholarships
        </Button>
      </Link>
    </div>
  );
}
