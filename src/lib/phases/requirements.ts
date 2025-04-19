
import { Phase } from './index';

export const requirementsPhase: Phase = {
  id: 'requirements',
  title: 'Project Requirements',
  description: 'Define the core requirements and objectives of your Angular application.',
  nextPhase: 'architecture',
  fields: [
    {
      id: 'projectName',
      label: 'Project Name',
      type: 'text',
      placeholder: 'My Angular App',
      validation: {
        required: true,
        minLength: 3,
        maxLength: 50,
      },
      helperText: 'Provide a descriptive name for your project'
    },
    {
      id: 'projectDescription',
      label: 'Project Description',
      type: 'textarea',
      placeholder: 'A web application that...',
      validation: {
        required: true,
        minLength: 20,
        maxLength: 500,
      },
      helperText: 'Describe the purpose and main features of your application'
    },
    {
      id: 'targetUsers',
      label: 'Target Users',
      type: 'textarea',
      placeholder: 'Who will be using this application?',
      validation: {
        required: true,
        minLength: 10,
      },
      helperText: 'Define your target audience and user personas'
    },
    {
      id: 'coreFeatures',
      label: 'Core Features',
      type: 'textarea',
      placeholder: 'List the main features and functionalities...',
      validation: {
        required: true,
        minLength: 15,
      },
      helperText: 'List the essential features for your MVP'
    },
    {
      id: 'projectScope',
      label: 'Project Scope',
      type: 'textarea',
      placeholder: 'What is in scope and out of scope...',
      validation: {
        required: true,
        minLength: 20,
      },
      helperText: 'Define what is included and excluded from the project'
    }
  ],
  required: ['projectName', 'projectDescription', 'targetUsers', 'coreFeatures', 'projectScope'],
};
