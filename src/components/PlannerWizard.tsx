
import { phases, Phase } from "@/lib/data";
import { PlannerHeader } from "./PlannerHeader";
import { PhaseSelector } from "./PhaseSelector";
import { PhaseContent } from "./PhaseContent";
import { PlannerFooter } from "./PlannerFooter";
import { ExportModal } from "./ExportModal";
import { Button } from "@/components/ui/button";
import { usePlannerState } from "@/hooks/usePlannerState";
import { usePhaseValidation } from "@/hooks/usePhaseValidation";
import { toast } from "@/components/ui/sonner";

export interface FormValues {
  [key: string]: string;
}

export function PlannerWizard() {
  const {
    currentPhaseId,
    setCurrentPhaseId,
    formValues,
    setFormValues,
    completedPhases,
    setCompletedPhases,
    exportModalOpen,
    setExportModalOpen
  } = usePlannerState(phases[0].id);

  const { validatePhase } = usePhaseValidation();

  const currentPhase = phases.find((phase) => phase.id === currentPhaseId) || phases[0];

  const handleInputChange = (fieldId: string, value: string) => {
    setFormValues((prev) => ({
      ...prev,
      [fieldId]: value,
    }));
  };

  const handleNextPhase = () => {
    if (validatePhase(currentPhase, formValues)) {
      if (currentPhase.nextPhase) {
        setCompletedPhases((prev) => 
          prev.includes(currentPhaseId) ? prev : [...prev, currentPhaseId]
        );
        setCurrentPhaseId(currentPhase.nextPhase);
        window.scrollTo(0, 0);
      } else {
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

      <ExportModal 
        isOpen={exportModalOpen}
        onClose={() => setExportModalOpen(false)}
        formValues={formValues}
      />
    </div>
  );
}
