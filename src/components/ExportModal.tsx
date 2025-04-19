
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FormValues } from "./PlannerWizard";
import { generateMarkdown } from "@/lib/markdown/generator";
import { toast } from "@/components/ui/sonner";

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  formValues: FormValues;
}

export function ExportModal({ isOpen, onClose, formValues }: ExportModalProps) {
  const handleExport = () => {
    const report = generateMarkdown(formValues);
    const blob = new Blob([report], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'angular-ai-robot-blueprint.md';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success("Blueprint exported successfully!");
    onClose();
  };

  const handleCopyToClipboard = () => {
    const report = generateMarkdown(formValues);
    navigator.clipboard.writeText(report)
      .then(() => {
        toast.success("Blueprint copied to clipboard!");
        onClose();
      })
      .catch(() => {
        toast.error("Failed to copy to clipboard");
      });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-lg">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-4">Export Blueprint</h2>
          <p className="mb-6">Congratulations on completing your Angular AI Robot Blueprint! You can now export your blueprint as a Markdown file or copy it to your clipboard.</p>
          
          <div className="flex flex-col md:flex-row gap-4">
            <Button className="flex-1" onClick={handleExport}>
              Download as Markdown
            </Button>
            <Button className="flex-1" variant="outline" onClick={handleCopyToClipboard}>
              Copy to Clipboard
            </Button>
            <Button className="flex-1" variant="destructive" onClick={onClose}>
              Close
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
