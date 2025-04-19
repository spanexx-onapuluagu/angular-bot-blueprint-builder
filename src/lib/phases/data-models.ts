
import { Phase } from './index';

export const dataModelsPhase: Phase = {
  id: 'data-models',
  title: 'Data Models & Services',
  description: 'Define the core data models, services, and state management for your Angular application.',
  prevPhase: 'components',
  nextPhase: 'routing',
  fields: [
    {
      id: 'coreDataModels',
      label: 'Core Data Models/Interfaces',
      type: 'textarea',
      placeholder: 'Define the primary data models and interfaces',
      helperText: 'List the key TypeScript interfaces that represent your data. Include fields and types.',
      validation: {
        required: true,
        minLength: 20
      }
    },
    {
      id: 'dataServices',
      label: 'Data Services',
      type: 'textarea',
      placeholder: 'List the Angular services needed for data operations',
      helperText: 'Describe services that will handle data fetching, processing, and state management',
      validation: {
        required: true,
        minLength: 20
      }
    },
    {
      id: 'apiEndpoints',
      label: 'API Endpoints',
      type: 'textarea',
      placeholder: 'List the API endpoints your application will interact with',
      helperText: 'Include HTTP methods (GET, POST, etc.) and example paths',
      validation: {
        required: true,
        minLength: 10
      }
    },
    {
      id: 'dataFlowDescription',
      label: 'Data Flow Description',
      type: 'textarea',
      placeholder: 'Describe how data flows through your application',
      helperText: 'Explain how data moves between components, services, and the backend',
      validation: {
        required: true,
        minLength: 20
      }
    },
    {
      id: 'errorHandlingStrategy',
      label: 'Error Handling Strategy',
      type: 'textarea',
      placeholder: 'Describe your approach to error handling for data operations',
      helperText: 'How will you handle API errors, validation errors, etc.',
      validation: {
        required: true,
        minLength: 20
      }
    },
    {
      id: 'offlineStrategy',
      label: 'Offline Data Strategy',
      type: 'textarea',
      placeholder: 'Describe your approach to handling offline scenarios (if applicable)',
      helperText: 'Will your app work offline? How will data be synchronized?'
    }
  ],
  required: ['coreDataModels', 'dataServices', 'apiEndpoints', 'dataFlowDescription', 'errorHandlingStrategy']
};
