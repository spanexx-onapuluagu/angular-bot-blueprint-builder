
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

interface PlannerHeaderProps {
  completedPhases: number;
  totalPhases: number;
}

export function PlannerHeader({ completedPhases, totalPhases }: PlannerHeaderProps) {
  const progress = Math.round((completedPhases / totalPhases) * 100);
  
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 shadow-lg">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h1 className="text-3xl md:text-4xl font-bold">
              Angular Application Blueprint Builder
            </h1>
            <p className="mt-2 text-indigo-100">
              Build a comprehensive plan for your Angular application
            </p>
          </div>
          
          <Badge variant="outline" className="bg-white/20 text-white py-1 px-3 text-sm">
            {completedPhases} of {totalPhases} phases completed
          </Badge>
        </div>
        
        <div className="mt-6">
          <Progress value={progress} className="h-2 bg-white/20" />
          <div className="flex justify-between mt-2 text-xs text-indigo-100">
            <span>Planning Progress</span>
            <span>{progress}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
