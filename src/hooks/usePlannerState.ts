
import { useState, useEffect } from "react";
import { FormValues } from "@/components/PlannerWizard";
import { Phase } from "@/lib/data";
import { toast } from "@/components/ui/sonner";
import { savePhase } from "@/lib/supabase/projects";

export function usePlannerState(initialPhase: string) {
  const [currentPhaseId, setCurrentPhaseId] = useState<string>(initialPhase);
  const [formValues, setFormValues] = useState<FormValues>({});
  const [completedPhases, setCompletedPhases] = useState<string[]>([]);
  const [exportModalOpen, setExportModalOpen] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [projectId, setProjectId] = useState<string>("");

  // Load saved data from localStorage
  useEffect(() => {
    const savedState = localStorage.getItem('angularPlannerState');
    
    if (savedState) {
      try {
        const parsedState = JSON.parse(savedState);
        setCurrentPhaseId(parsedState.currentPhaseId || initialPhase);
        setFormValues(parsedState.formValues || {});
        setCompletedPhases(parsedState.completedPhases || []);
      } catch (e) {
        console.error("Error parsing saved state", e);
        setCurrentPhaseId(initialPhase);
      }
    } else {
      setCurrentPhaseId(initialPhase);
    }
    
    setIsInitialized(true);
  }, [initialPhase]);

  // Save state to localStorage
  useEffect(() => {
    if (!isInitialized) return;
    
    const stateToSave = {
      currentPhaseId,
      formValues,
      completedPhases
    };
    
    localStorage.setItem('angularPlannerState', JSON.stringify(stateToSave));
  }, [currentPhaseId, formValues, completedPhases, isInitialized]);

  return {
    currentPhaseId,
    setCurrentPhaseId,
    formValues,
    setFormValues,
    completedPhases,
    setCompletedPhases,
    exportModalOpen,
    setExportModalOpen,
    projectId,
    setProjectId,
    isInitialized
  };
}
