
interface Section {
  title: string;
  content: string[];
}

export function generateMarkdown(formData: Record<string, any>): string {
  const sections: Section[] = [];
  let markdown = `# Angular Application Blueprint\n\n`;

  // Add project metadata
  markdown += `> Generated on: ${new Date().toLocaleDateString()}\n\n`;

  // Requirements Section
  if (formData.projectName) {
    markdown += `## 🎯 Project Overview\n\n`;
    markdown += `### Project: ${formData.projectName}\n\n`;
    markdown += `${formData.projectDescription || ''}\n\n`;
    
    markdown += `### 👥 Target Users\n\n`;
    markdown += `${formData.targetUsers || ''}\n\n`;
    
    markdown += `### ✨ Core Features\n\n`;
    markdown += `${formData.coreFeatures || ''}\n\n`;
    
    markdown += `### 📋 Project Scope\n\n`;
    markdown += `${formData.projectScope || ''}\n\n`;
  }

  // Technical Architecture Section
  if (formData.angularVersion || formData.stateManagement) {
    markdown += `## 🏗 Technical Architecture\n\n`;
    
    if (formData.angularVersion) {
      markdown += `- **Angular Version:** ${formData.angularVersion}\n`;
    }
    if (formData.stateManagement) {
      markdown += `- **State Management:** ${formData.stateManagement}\n`;
    }
    if (formData.uiFramework) {
      markdown += `- **UI Framework:** ${formData.uiFramework}\n`;
    }
    if (formData.backendType) {
      markdown += `- **Backend Integration:** ${formData.backendType}\n`;
    }
    markdown += `\n`;
  }

  // Components Section
  if (formData.moduleStructure || formData.componentHierarchy) {
    markdown += `## 🧩 Component Architecture\n\n`;
    
    if (formData.moduleStructure) {
      markdown += `### Module Structure\n\n\`\`\`\n${formData.moduleStructure}\n\`\`\`\n\n`;
    }
    if (formData.componentHierarchy) {
      markdown += `### Component Hierarchy\n\n\`\`\`\n${formData.componentHierarchy}\n\`\`\`\n\n`;
    }
  }

  // Data Models Section
  if (formData.dataModels || formData.dataServices) {
    markdown += `## 📊 Data Layer\n\n`;
    
    if (formData.dataModels) {
      markdown += `### Data Models\n\n\`\`\`typescript\n${formData.dataModels}\n\`\`\`\n\n`;
    }
    if (formData.dataServices) {
      markdown += `### Services\n\n\`\`\`typescript\n${formData.dataServices}\n\`\`\`\n\n`;
    }
  }

  // Testing Section
  if (formData.unitTesting || formData.e2eTesting) {
    markdown += `## 🧪 Testing Strategy\n\n`;
    
    if (formData.unitTesting) {
      markdown += `### Unit Testing\n\n${formData.unitTesting}\n\n`;
    }
    if (formData.e2eTesting) {
      markdown += `### E2E Testing\n\n${formData.e2eTesting}\n\n`;
    }
    if (formData.testCoverage) {
      markdown += `### Coverage Goals\n\n${formData.testCoverage}\n\n`;
    }
  }

  // Project Timeline
  if (formData.milestones || formData.sprintPlanning) {
    markdown += `## 📅 Project Timeline\n\n`;
    
    if (formData.milestones) {
      markdown += `### Milestones\n\n${formData.milestones}\n\n`;
    }
    if (formData.sprintPlanning) {
      markdown += `### Sprint Planning\n\n${formData.sprintPlanning}\n\n`;
    }
    if (formData.resourceAllocation) {
      markdown += `### Resource Allocation\n\n${formData.resourceAllocation}\n\n`;
    }
  }

  markdown += `\n---\n\n> This blueprint was generated using the Angular Application Blueprint Builder\n`;
  
  return markdown;
}
