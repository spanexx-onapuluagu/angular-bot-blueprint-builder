
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Phase } from "@/lib/data";
import { CheckCircle, Circle } from "lucide-react";

interface PhaseSelectorProps {
  phases: Phase[];
  currentPhaseId: string;
  completedPhases: string[];
  onPhaseClick: (phaseId: string) => void;
}

export function PhaseSelector({ 
  phases, 
  currentPhaseId, 
  completedPhases, 
  onPhaseClick 
}: PhaseSelectorProps) {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4 bg-indigo-50 border-b border-indigo-100 flex justify-between items-center">
        <h2 className="font-semibold text-indigo-900">Development Phases</h2>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => setExpanded(!expanded)}
          className="text-indigo-600 hover:text-indigo-800 hover:bg-indigo-100 h-8 px-2"
        >
          {expanded ? "Collapse" : "Expand"}
        </Button>
      </div>

      {expanded && (
        <div className="p-2">
          {phases.map((phase, index) => {
            const isCompleted = completedPhases.includes(phase.id);
            const isCurrent = phase.id === currentPhaseId;
            
            return (
              <Button
                key={phase.id}
                variant="ghost"
                className={cn(
                  "w-full justify-start mb-1 text-left font-normal py-3",
                  isCurrent && "bg-indigo-100 text-indigo-900",
                  isCompleted && !isCurrent && "text-indigo-900",
                  !isCompleted && !isCurrent && "text-gray-500"
                )}
                onClick={() => onPhaseClick(phase.id)}
              >
                <div className="flex items-center w-full">
                  <div className="mr-2 text-indigo-600">
                    {isCompleted ? (
                      <CheckCircle size={18} />
                    ) : (
                      <Circle size={18} />
                    )}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium">{index + 1}. {phase.title}</span>
                  </div>
                </div>
              </Button>
            );
          })}
        </div>
      )}
    </div>
  );
}
