
interface Section {
  title: string;
  content: string[];
}

export function generateMarkdown(formData: Record<string, any>): string {
  let markdown = `# Angular Application Blueprint\n\n`;
  markdown += `> Generated on: ${new Date().toLocaleDateString()}\n\n`;

  // Project Overview Section
  if (formData.projectName) {
    markdown += `## 🎯 Project Overview\n\n`;
    markdown += `### Project Details\n\n`;
    markdown += `- **Project Name:** ${formData.projectName}\n`;
    markdown += `- **Description:** ${formData.projectDescription || ''}\n\n`;
    
    markdown += `### Target Users & Features\n\n`;
    markdown += `- **Target Users:** ${formData.targetUsers || ''}\n`;
    markdown += `- **Core Features:** ${formData.coreFeatures || ''}\n\n`;
    
    markdown += `### Project Scope\n\n${formData.projectScope || ''}\n\n`;
  }

  // Technical Architecture Section with AI Prompt
  if (formData.angularVersion || formData.stateManagement) {
    markdown += `## 🏗 Technical Architecture\n\n`;
    markdown += `### Architecture Details\n\n`;
    
    const techDetails = [
      formData.angularVersion && `- Angular Version: ${formData.angularVersion}`,
      formData.stateManagement && `- State Management: ${formData.stateManagement}`,
      formData.uiFramework && `- UI Framework: ${formData.uiFramework}`,
      formData.backendType && `- Backend Integration: ${formData.backendType}`
    ].filter(Boolean).join('\n');
    
    markdown += `${techDetails}\n\n`;
    
    markdown += `### 🤖 AI Architecture Prompt\n\n`;
    markdown += `Create an Angular application with the following technical requirements:\n`;
    markdown += `- Use Angular version ${formData.angularVersion}\n`;
    markdown += `- Implement ${formData.stateManagement} for state management\n`;
    markdown += `- Build the UI using ${formData.uiFramework}\n`;
    markdown += `- Integrate with ${formData.backendType} backend services\n\n`;
  }

  // Component Architecture with AI Prompt
  if (formData.moduleStructure || formData.componentHierarchy) {
    markdown += `## 🧩 Component Architecture\n\n`;
    
    if (formData.moduleStructure) {
      markdown += `### Module Structure\n\n\`\`\`\n${formData.moduleStructure}\n\`\`\`\n\n`;
    }
    if (formData.componentHierarchy) {
      markdown += `### Component Hierarchy\n\n\`\`\`\n${formData.componentHierarchy}\n\`\`\`\n\n`;
    }
    
    markdown += `### 🤖 AI Component Generation Prompt\n\n`;
    markdown += `Generate Angular components following this structure:\n`;
    markdown += `- Follow the module structure and component hierarchy shown above\n`;
    markdown += `- Implement smart and presentational components pattern\n`;
    markdown += `- Ensure components are reusable and follow Angular best practices\n\n`;
  }

  // Data Layer with AI Prompt
  if (formData.dataModels || formData.dataServices) {
    markdown += `## 📊 Data Layer\n\n`;
    
    if (formData.dataModels) {
      markdown += `### Data Models\n\n\`\`\`typescript\n${formData.dataModels}\n\`\`\`\n\n`;
    }
    if (formData.dataServices) {
      markdown += `### Services\n\n\`\`\`typescript\n${formData.dataServices}\n\`\`\`\n\n`;
    }
    
    markdown += `### 🤖 AI Data Layer Prompt\n\n`;
    markdown += `Generate the following data layer components:\n`;
    markdown += `- Create TypeScript interfaces for the data models shown above\n`;
    markdown += `- Implement Angular services with proper dependency injection\n`;
    markdown += `- Add error handling and loading states\n\n`;
  }

  // Testing Strategy with AI Prompt
  if (formData.unitTesting || formData.e2eTesting) {
    markdown += `## 🧪 Testing Strategy\n\n`;
    
    if (formData.unitTesting) {
      markdown += `### Unit Testing Approach\n\n${formData.unitTesting}\n\n`;
    }
    if (formData.e2eTesting) {
      markdown += `### E2E Testing\n\n${formData.e2eTesting}\n\n`;
    }
    if (formData.testCoverage) {
      markdown += `### Coverage Goals\n\n${formData.testCoverage}\n\n`;
    }
    
    markdown += `### 🤖 AI Testing Prompt\n\n`;
    markdown += `Generate test suites following these requirements:\n`;
    markdown += `- Create unit tests using Jasmine/Jest\n`;
    markdown += `- Implement E2E tests using Cypress/Protractor\n`;
    markdown += `- Aim for the specified test coverage goals\n\n`;
  }

  // Timeline and Resources with AI Prompt
  if (formData.milestones || formData.sprintPlanning) {
    markdown += `## 📅 Project Timeline\n\n`;
    
    if (formData.milestones) {
      markdown += `### Project Milestones\n\n${formData.milestones}\n\n`;
    }
    if (formData.sprintPlanning) {
      markdown += `### Sprint Planning\n\n${formData.sprintPlanning}\n\n`;
    }
    
    markdown += `### 🤖 AI Project Planning Prompt\n\n`;
    markdown += `Create a detailed project plan that includes:\n`;
    markdown += `- Sprint breakdown with specific tasks and deliverables\n`;
    markdown += `- Resource allocation and timeline estimates\n`;
    markdown += `- Risk mitigation strategies\n\n`;
  }

  markdown += `\n---\n\n> This blueprint was generated using the Angular Application Blueprint Builder\n`;
  
  return markdown;
}
