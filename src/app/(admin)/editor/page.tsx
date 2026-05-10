import { EditorForm } from "@/components/admin/EditorForm";

export default function EditorPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-black tracking-tighter mb-2">Content Studio</h1>
        <p className="text-muted-foreground font-medium">Craft and publish high-quality resources for students worldwide.</p>
      </div>
      
      <EditorForm />
    </div>
  );
}
