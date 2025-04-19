
import { supabase } from "@/integrations/supabase/client";

export async function createProject(name: string, description?: string) {
  const { data, error } = await supabase
    .from('projects')
    .insert([{ name, description }])
    .select()
    .single();
    
  if (error) throw error;
  return data;
}

export async function savePhase(projectId: string, phaseId: string, formData: any) {
  const { data, error } = await supabase
    .from('project_phases')
    .upsert([
      {
        project_id: projectId,
        phase_id: phaseId,
        form_data: formData
      }
    ])
    .select();
    
  if (error) throw error;
  return data;
}

export async function getProjectSuggestions() {
  const { data, error } = await supabase
    .from('project_phases')
    .select(`
      phase_id,
      form_data
    `)
    .limit(50);
    
  if (error) throw error;
  return data;
}
