
export type Phase = {
  id: string;
  title: string;
  description: string;
  fields: Field[];
  required: string[];
  nextPhase?: string;
  prevPhase?: string;
};

export type Field = {
  id: string;
  label: string;
  type: 'text' | 'textarea' | 'select' | 'checkbox' | 'radio';
  placeholder?: string;
  options?: { value: string; label: string }[];
  helperText?: string;
  validation?: {
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: string;
    customValidator?: (value: string) => boolean;
  };
};

export const phases: Phase[] = [
  {
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
  },
  {
    id: 'architecture',
    title: 'Technical Architecture',
    description: 'Define the technical architecture for your Angular application.',
    prevPhase: 'requirements',
    nextPhase: 'components',
    fields: [
      {
        id: 'angularVersion',
        label: 'Angular Version',
        type: 'select',
        options: [
          { value: '17', label: 'Angular 17' },
          { value: '16', label: 'Angular 16' },
          { value: '15', label: 'Angular 15' },
        ],
        validation: {
          required: true,
        },
        helperText: 'Select the Angular version for your project'
      },
      {
        id: 'stateManagement',
        label: 'State Management',
        type: 'select',
        options: [
          { value: 'ngrx', label: 'NgRx' },
          { value: 'ngxs', label: 'NGXS' },
          { value: 'signals', label: 'Signals (Angular 16+)' },
          { value: 'services', label: 'Services Only' },
        ],
        validation: {
          required: true,
        },
        helperText: 'Choose your state management approach'
      },
      {
        id: 'uiFramework',
        label: 'UI Framework',
        type: 'select',
        options: [
          { value: 'material', label: 'Angular Material' },
          { value: 'bootstrap', label: 'ng-bootstrap' },
          { value: 'primeng', label: 'PrimeNG' },
          { value: 'tailwind', label: 'Tailwind CSS' },
          { value: 'custom', label: 'Custom UI' },
        ],
        validation: {
          required: true,
        },
        helperText: 'Select the UI framework for your project'
      },
      {
        id: 'backendType',
        label: 'Backend Integration',
        type: 'select',
        options: [
          { value: 'rest', label: 'REST API' },
          { value: 'graphql', label: 'GraphQL' },
          { value: 'firebase', label: 'Firebase' },
          { value: 'supabase', label: 'Supabase' },
          { value: 'mock', label: 'Mock Data' },
        ],
        validation: {
          required: true,
        },
        helperText: 'How will your app communicate with the backend?'
      },
    ],
    required: ['angularVersion', 'stateManagement', 'uiFramework', 'backendType'],
  },
  {
    id: 'components',
    title: 'Component Architecture',
    description: 'Plan the component hierarchy and modules for your Angular application.',
    prevPhase: 'architecture',
    nextPhase: 'dataModels',
    fields: [
      {
        id: 'moduleStructure',
        label: 'Module Structure',
        type: 'textarea',
        placeholder: 'Core module, Shared module, Feature modules...',
        validation: {
          required: true,
          minLength: 30,
        },
        helperText: 'Define the Angular module structure'
      },
      {
        id: 'componentHierarchy',
        label: 'Component Hierarchy',
        type: 'textarea',
        placeholder: 'List main components and their relationships...',
        validation: {
          required: true,
          minLength: 50,
        },
        helperText: 'List the main components and their relationships'
      },
      {
        id: 'sharedComponents',
        label: 'Shared Components',
        type: 'textarea',
        placeholder: 'Common UI components, utilities...',
        validation: {
          required: true,
          minLength: 20,
        },
        helperText: 'List reusable components across the application'
      },
      {
        id: 'lazyLoading',
        label: 'Lazy Loading Strategy',
        type: 'textarea',
        placeholder: 'Which modules will be lazy loaded...',
        validation: {
          required: true,
          minLength: 20,
        },
        helperText: 'Which parts of the application will be lazy loaded?'
      }
    ],
    required: ['moduleStructure', 'componentHierarchy', 'sharedComponents', 'lazyLoading'],
  },
  {
    id: 'dataModels',
    title: 'Data Models & Services',
    description: 'Define the data models and services for your Angular application.',
    prevPhase: 'components',
    nextPhase: 'routing',
    fields: [
      {
        id: 'dataModels',
        label: 'Data Models/Interfaces',
        type: 'textarea',
        placeholder: 'Define your TypeScript interfaces...',
        validation: {
          required: true,
          minLength: 50,
        },
        helperText: 'Define the TypeScript interfaces for your data models'
      },
      {
        id: 'dataServices',
        label: 'API Services',
        type: 'textarea',
        placeholder: 'List your services and their responsibilities...',
        validation: {
          required: true,
          minLength: 30,
        },
        helperText: 'List the services that will interact with APIs'
      },
      {
        id: 'utilityServices',
        label: 'Utility Services',
        type: 'textarea',
        placeholder: 'Common services like logging, error handling...',
        validation: {
          required: true,
          minLength: 20,
        },
        helperText: 'List utility services for common functionality'
      }
    ],
    required: ['dataModels', 'dataServices', 'utilityServices'],
  },
  {
    id: 'routing',
    title: 'Routing & Navigation',
    description: 'Plan the routing structure for your Angular application.',
    prevPhase: 'dataModels',
    nextPhase: 'testing',
    fields: [
      {
        id: 'routeStructure',
        label: 'Route Structure',
        type: 'textarea',
        placeholder: '/home, /features, /about...',
        validation: {
          required: true,
          minLength: 30,
        },
        helperText: 'Define the main routes of your application'
      },
      {
        id: 'routeGuards',
        label: 'Route Guards',
        type: 'textarea',
        placeholder: 'AuthGuard, RoleGuard...',
        validation: {
          required: true,
          minLength: 20,
        },
        helperText: 'List the route guards you will implement'
      },
      {
        id: 'navigationStrategy',
        label: 'Navigation Strategy',
        type: 'textarea',
        placeholder: 'Navigation patterns and UI components...',
        validation: {
          required: true,
          minLength: 20,
        },
        helperText: 'Describe the navigation patterns for your application'
      }
    ],
    required: ['routeStructure', 'routeGuards', 'navigationStrategy'],
  },
  {
    id: 'testing',
    title: 'Testing Strategy',
    description: 'Define your testing approach for your Angular application.',
    prevPhase: 'routing',
    nextPhase: 'deployment',
    fields: [
      {
        id: 'unitTesting',
        label: 'Unit Testing Approach',
        type: 'textarea',
        placeholder: 'Testing strategy for components and services...',
        validation: {
          required: true,
          minLength: 30,
        },
        helperText: 'Describe your unit testing strategy'
      },
      {
        id: 'e2eTesting',
        label: 'E2E Testing',
        type: 'textarea',
        placeholder: 'End-to-end testing plan...',
        validation: {
          required: true,
          minLength: 20,
        },
        helperText: 'Describe your end-to-end testing approach'
      },
      {
        id: 'testCoverage',
        label: 'Test Coverage Goals',
        type: 'textarea',
        placeholder: 'Coverage targets and critical areas...',
        validation: {
          required: true,
          minLength: 20,
        },
        helperText: 'Define your test coverage targets'
      }
    ],
    required: ['unitTesting', 'e2eTesting', 'testCoverage'],
  },
  {
    id: 'deployment',
    title: 'Deployment Strategy',
    description: 'Plan the deployment strategy for your Angular application.',
    prevPhase: 'testing',
    nextPhase: 'timeline',
    fields: [
      {
        id: 'buildStrategy',
        label: 'Build Configuration',
        type: 'textarea',
        placeholder: 'Production optimization, environment configs...',
        validation: {
          required: true,
          minLength: 30,
        },
        helperText: 'Describe your build configuration approach'
      },
      {
        id: 'deploymentTargets',
        label: 'Deployment Targets',
        type: 'textarea',
        placeholder: 'Where will the app be deployed...',
        validation: {
          required: true,
          minLength: 20,
        },
        helperText: 'Where will the application be deployed?'
      },
      {
        id: 'cicdStrategy',
        label: 'CI/CD Pipeline',
        type: 'textarea',
        placeholder: 'Continuous integration and deployment...',
        validation: {
          required: true,
          minLength: 20,
        },
        helperText: 'Describe your continuous integration and deployment approach'
      }
    ],
    required: ['buildStrategy', 'deploymentTargets', 'cicdStrategy'],
  },
  {
    id: 'timeline',
    title: 'Project Timeline',
    description: 'Create a timeline for your Angular application development.',
    prevPhase: 'deployment',
    fields: [
      {
        id: 'milestones',
        label: 'Project Milestones',
        type: 'textarea',
        placeholder: 'Key project milestones and deadlines...',
        validation: {
          required: true,
          minLength: 30,
        },
        helperText: 'List the major milestones for your project'
      },
      {
        id: 'sprintPlanning',
        label: 'Sprint Planning',
        type: 'textarea',
        placeholder: 'Sprint structure and focus areas...',
        validation: {
          required: true,
          minLength: 30,
        },
        helperText: 'Describe your sprint structure and focus areas'
      },
      {
        id: 'resourceAllocation',
        label: 'Resource Allocation',
        type: 'textarea',
        placeholder: 'Team members and their roles...',
        validation: {
          required: true,
          minLength: 20,
        },
        helperText: 'List the resources needed for your project'
      }
    ],
    required: ['milestones', 'sprintPlanning', 'resourceAllocation'],
  },
];
