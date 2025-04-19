import { useState, useEffect } from "react";
import { phases, Phase, Field } from "@/lib/data";
import { PlannerHeader } from "./PlannerHeader";
import { PhaseSelector } from "./PhaseSelector";
import { PhaseContent } from "./PhaseContent";
import { PlannerFooter } from "./PlannerFooter";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";
import { Card, CardContent } from "@/components/ui/card";
import { generateMarkdown } from "@/lib/markdown/generator";
import { getProjectSuggestions, savePhase } from "@/lib/supabase/projects";

export interface FormValues {
  [key: string]: string;
}

export function PlannerWizard() {
  const [currentPhaseId, setCurrentPhaseId] = useState<string>("");
  const [formValues, setFormValues] = useState<FormValues>({});
  const [completedPhases, setCompletedPhases] = useState<string[]>([]);
  const [exportModalOpen, setExportModalOpen] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [projectId, setProjectId] = useState<string>("");
  const [suggestions, setSuggestions] = useState<any[]>([]);

  // Load suggestions from Supabase
  useEffect(() => {
    getProjectSuggestions()
      .then(suggestions => setSuggestions(suggestions))
      .catch(error => console.error("Error loading suggestions:", error));
  }, []);

  // Load saved data from localStorage on component mount
  useEffect(() => {
    const savedState = localStorage.getItem('angularPlannerState');
    
    if (savedState) {
      try {
        const parsedState = JSON.parse(savedState);
        setCurrentPhaseId(parsedState.currentPhaseId || phases[0].id);
        setFormValues(parsedState.formValues || {});
        setCompletedPhases(parsedState.completedPhases || []);
      } catch (e) {
        console.error("Error parsing saved state", e);
        setCurrentPhaseId(phases[0].id);
      }
    } else {
      setCurrentPhaseId(phases[0].id);
    }
    
    setIsInitialized(true);
  }, []);

  // Save state to localStorage whenever it changes
  useEffect(() => {
    if (!isInitialized) return;
    
    const stateToSave = {
      currentPhaseId,
      formValues,
      completedPhases
    };
    
    localStorage.setItem('angularPlannerState', JSON.stringify(stateToSave));
  }, [currentPhaseId, formValues, completedPhases, isInitialized]);

  const currentPhase = phases.find((phase) => phase.id === currentPhaseId) || phases[0];

  const handleInputChange = (fieldId: string, value: string) => {
    setFormValues((prev) => ({
      ...prev,
      [fieldId]: value,
    }));

    // Save to Supabase if we have a project ID
    if (projectId) {
      savePhase(projectId, currentPhaseId, {
        ...formValues,
        [fieldId]: value
      }).catch(error => {
        console.error("Error saving phase:", error);
        toast.error("Failed to save changes");
      });
    }
  };

  const validatePhase = (phase: Phase): boolean => {
    let isValid = true;
    
    for (const fieldId of phase.required) {
      const field = phase.fields.find((f) => f.id === fieldId);
      const value = formValues[fieldId] || "";
      
      if (!field) continue;
      
      if (field.validation?.required && !value) {
        isValid = false;
        toast.error(`${field.label} is required`);
      } else if (field.validation?.minLength && value.length < field.validation.minLength) {
        isValid = false;
        toast.error(`${field.label} must be at least ${field.validation.minLength} characters`);
      } else if (field.validation?.maxLength && value.length > field.validation.maxLength) {
        isValid = false;
        toast.error(`${field.label} must be at most ${field.validation.maxLength} characters`);
      } else if (field.validation?.pattern && !new RegExp(field.validation.pattern).test(value)) {
        isValid = false;
        toast.error(`${field.label} format is invalid`);
      }
    }
    
    return isValid;
  };
  
  const handleNextPhase = () => {
    if (validatePhase(currentPhase)) {
      if (currentPhase.nextPhase) {
        setCompletedPhases((prev) => 
          prev.includes(currentPhaseId) ? prev : [...prev, currentPhaseId]
        );
        setCurrentPhaseId(currentPhase.nextPhase);
        window.scrollTo(0, 0);
      } else {
        // This is the last phase
        setCompletedPhases((prev) => 
          prev.includes(currentPhaseId) ? prev : [...prev, currentPhaseId]
        );
        toast.success("Project blueprint completed!");
        setExportModalOpen(true);
      }
    }
  };

  const handlePrevPhase = () => {
    if (currentPhase.prevPhase) {
      setCurrentPhaseId(currentPhase.prevPhase);
      window.scrollTo(0, 0);
    }
  };

  const handlePhaseClick = (phaseId: string) => {
    const targetPhase = phases.find(p => p.id === phaseId);
    if (!targetPhase) return;
    
    // Allow going back to any phase
    if (completedPhases.includes(currentPhaseId) || 
        completedPhases.some(p => p === phaseId) || 
        isAdjacentPhase(phaseId)) {
      setCurrentPhaseId(phaseId);
      window.scrollTo(0, 0);
    } else {
      toast.error("Please complete the current phase first");
    }
  };

  const isAdjacentPhase = (phaseId: string): boolean => {
    return currentPhase.nextPhase === phaseId || currentPhase.prevPhase === phaseId;
  };

  const generateReport = () => {
    return generateMarkdown(formValues);
  };

  const handleExport = () => {
    const report = generateReport();
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
    setExportModalOpen(false);
  };

  const handleCopyToClipboard = () => {
    const report = generateReport();
    navigator.clipboard.writeText(report)
      .then(() => {
        toast.success("Blueprint copied to clipboard!");
        setExportModalOpen(false);
      })
      .catch(() => {
        toast.error("Failed to copy to clipboard");
      });
  };

  // Add reset function to clear saved data
  const handleReset = () => {
    if (confirm("Are you sure you want to reset all your progress? This cannot be undone.")) {
      localStorage.removeItem('angularPlannerState');
      setCurrentPhaseId(phases[0].id);
      setFormValues({});
      setCompletedPhases([]);
      toast.info("All progress has been reset");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <PlannerHeader 
        completedPhases={completedPhases.length} 
        totalPhases={phases.length} 
      />
      
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/4">
            <PhaseSelector 
              phases={phases}
              currentPhaseId={currentPhaseId}
              completedPhases={completedPhases}
              onPhaseClick={handlePhaseClick}
            />
            
            <div className="mt-6">
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full text-red-500 hover:text-red-700 hover:bg-red-50"
                onClick={handleReset}
              >
                Reset Progress
              </Button>
            </div>
          </div>
          
          <div className="md:w-3/4">
            <PhaseContent 
              phase={currentPhase}
              formValues={formValues}
              onInputChange={handleInputChange}
            />
            
            <PlannerFooter 
              onPrevious={handlePrevPhase}
              onNext={handleNextPhase}
              hasPrevious={!!currentPhase.prevPhase}
              hasNext={!!currentPhase.nextPhase}
              isLastPhase={!currentPhase.nextPhase}
            />
          </div>
        </div>
      </div>

      {exportModalOpen && (
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
                <Button className="flex-1" variant="destructive" onClick={() => setExportModalOpen(false)}>
                  Close
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
