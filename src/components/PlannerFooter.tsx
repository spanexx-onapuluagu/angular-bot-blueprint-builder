
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, FileCheck } from "lucide-react";

interface PlannerFooterProps {
  onPrevious: () => void;
  onNext: () => void;
  hasPrevious: boolean;
  hasNext: boolean;
  isLastPhase: boolean;
}

export function PlannerFooter({ 
  onPrevious, 
  onNext, 
  hasPrevious, 
  hasNext, 
  isLastPhase 
}: PlannerFooterProps) {
  return (
    <div className="flex justify-between mt-8">
      <Button
        variant="outline"
        onClick={onPrevious}
        disabled={!hasPrevious}
        className="flex items-center gap-2"
      >
        <ArrowLeft size={16} />
        Previous Phase
      </Button>
      
      <Button
        onClick={onNext}
        className="bg-indigo-600 hover:bg-indigo-700 text-white flex items-center gap-2"
      >
        {isLastPhase ? (
          <>
            Complete Blueprint
            <FileCheck size={16} />
          </>
        ) : (
          <>
            Next Phase
            <ArrowRight size={16} />
          </>
        )}
      </Button>
    </div>
  );
}
