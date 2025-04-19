
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Field, Phase } from "@/lib/data";
import { FormValues } from "./PlannerWizard";

interface PhaseContentProps {
  phase: Phase;
  formValues: FormValues;
  onInputChange: (fieldId: string, value: string) => void;
}

export function PhaseContent({ phase, formValues, onInputChange }: PhaseContentProps) {
  const renderField = (field: Field) => {
    const value = formValues[field.id] || "";
    
    switch (field.type) {
      case "text":
        return (
          <div className="space-y-2" key={field.id}>
            <Label htmlFor={field.id} className="text-sm font-medium">
              {field.label}
              {field.validation?.required && <span className="text-red-500 ml-1">*</span>}
            </Label>
            <Input
              id={field.id}
              placeholder={field.placeholder}
              value={value}
              onChange={(e) => onInputChange(field.id, e.target.value)}
              className="w-full"
            />
            {field.helperText && (
              <p className="text-xs text-gray-500">{field.helperText}</p>
            )}
          </div>
        );
        
      case "textarea":
        return (
          <div className="space-y-2" key={field.id}>
            <Label htmlFor={field.id} className="text-sm font-medium">
              {field.label}
              {field.validation?.required && <span className="text-red-500 ml-1">*</span>}
            </Label>
            <Textarea
              id={field.id}
              placeholder={field.placeholder}
              value={value}
              onChange={(e) => onInputChange(field.id, e.target.value)}
              className="min-h-24 w-full"
            />
            {field.helperText && (
              <p className="text-xs text-gray-500">{field.helperText}</p>
            )}
          </div>
        );
        
      case "select":
        return (
          <div className="space-y-2" key={field.id}>
            <Label htmlFor={field.id} className="text-sm font-medium">
              {field.label}
              {field.validation?.required && <span className="text-red-500 ml-1">*</span>}
            </Label>
            <Select 
              value={value} 
              onValueChange={(value) => onInputChange(field.id, value)}
            >
              <SelectTrigger id={field.id} className="w-full">
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent>
                {field.options?.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {field.helperText && (
              <p className="text-xs text-gray-500">{field.helperText}</p>
            )}
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <Card className="mb-6">
      <CardHeader className="pb-3">
        <CardTitle className="text-2xl font-bold text-indigo-800">{phase.title}</CardTitle>
        <CardDescription>{phase.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {phase.fields.map(renderField)}
        </div>
      </CardContent>
    </Card>
  );
}
