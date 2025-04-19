
import { Phase } from "@/lib/data";
import { FormValues } from "@/components/PlannerWizard";
import { toast } from "@/components/ui/sonner";

export function usePhaseValidation() {
  const validatePhase = (phase: Phase, formValues: FormValues): boolean => {
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

  return { validatePhase };
}
