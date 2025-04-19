
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
    title: 'Requirements Gathering',
    description: 'Define the core requirements for your Angular AI robot project.',
    nextPhase: 'architecture',
    fields: [
      {
        id: 'projectName',
        label: 'Project Name',
        type: 'text',
        placeholder: 'AI Robot Dashboard',
        validation: {
          required: true,
          minLength: 3,
          maxLength: 50,
        },
        helperText: 'Provide a descriptive name for your AI robot project'
      },
      {
        id: 'projectDescription',
        label: 'Project Description',
        type: 'textarea',
        placeholder: 'A dashboard for monitoring and controlling AI robots...',
        validation: {
          required: true,
          minLength: 20,
          maxLength: 500,
        },
        helperText: 'Describe the purpose and main features of your AI robot project'
      },
      {
        id: 'targetUsers',
        label: 'Target Users',
        type: 'textarea',
        placeholder: 'Robot operators, administrators, maintenance personnel...',
        validation: {
          required: true,
          minLength: 10,
        },
        helperText: 'Who will be using this AI robot application?'
      },
      {
        id: 'coreFeatures',
        label: 'Core Features',
        type: 'textarea',
        placeholder: 'Robot monitoring, control panel, diagnostic tools...',
        validation: {
          required: true,
          minLength: 15,
        },
        helperText: 'List the essential features for your MVP'
      },
      {
        id: 'projectDuration',
        label: 'Estimated Duration',
        type: 'select',
        options: [
          { value: '1-3months', label: '1-3 months' },
          { value: '3-6months', label: '3-6 months' },
          { value: '6-12months', label: '6-12 months' },
          { value: '12+months', label: 'Over 12 months' },
        ],
        validation: {
          required: true,
        },
        helperText: 'How long do you expect the project to take?'
      },
    ],
    required: ['projectName', 'projectDescription', 'targetUsers', 'coreFeatures', 'projectDuration'],
  },
  {
    id: 'architecture',
    title: 'Architecture Planning',
    description: 'Define the technical architecture for your Angular AI robot project.',
    prevPhase: 'requirements',
    nextPhase: 'components',
    fields: [
      {
        id: 'angularVersion',
        label: 'Angular Version',
        type: 'select',
        options: [
          { value: '16', label: 'Angular 16' },
          { value: '17', label: 'Angular 17' },
          { value: '18', label: 'Angular 18' },
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
          { value: 'akita', label: 'Akita' },
          { value: 'services', label: 'Services Only' },
          { value: 'signals', label: 'Signals (Angular 17+)' },
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
        id: 'apiIntegration',
        label: 'API Integration',
        type: 'select',
        options: [
          { value: 'rest', label: 'REST API' },
          { value: 'graphql', label: 'GraphQL' },
          { value: 'websocket', label: 'WebSocket' },
          { value: 'grpc', label: 'gRPC' },
          { value: 'mixed', label: 'Mixed Approach' },
        ],
        validation: {
          required: true,
        },
        helperText: 'How will your app communicate with robot backends?'
      },
      {
        id: 'authStrategy',
        label: 'Authentication Strategy',
        type: 'select',
        options: [
          { value: 'jwt', label: 'JWT' },
          { value: 'oauth', label: 'OAuth/OpenID Connect' },
          { value: 'firebase', label: 'Firebase Auth' },
          { value: 'custom', label: 'Custom Auth' },
        ],
        validation: {
          required: true,
        },
        helperText: 'Choose an authentication strategy'
      },
      {
        id: 'aiIntegration',
        label: 'AI Integration Points',
        type: 'textarea',
        placeholder: 'Robot vision processing, natural language commands, predictive maintenance...',
        validation: {
          required: true,
          minLength: 20,
        },
        helperText: 'Describe how AI will be integrated with the Angular app'
      },
    ],
    required: ['angularVersion', 'stateManagement', 'uiFramework', 'apiIntegration', 'authStrategy', 'aiIntegration'],
  },
  {
    id: 'components',
    title: 'Component Structure',
    description: 'Plan the component hierarchy and modules for your Angular AI robot project.',
    prevPhase: 'architecture',
    nextPhase: 'dataModels',
    fields: [
      {
        id: 'moduleStructure',
        label: 'Module Structure',
        type: 'textarea',
        placeholder: 'Core module, Shared module, Feature modules (Robot Control, Monitoring, etc.)...',
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
        placeholder: 'DashboardComponent, RobotListComponent, RobotDetailComponent...',
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
        placeholder: 'AlertComponent, LoadingIndicator, RobotStatusWidget...',
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
        placeholder: 'Feature modules to be lazy loaded: RobotControl, Diagnostics...',
        validation: {
          required: true,
          minLength: 20,
        },
        helperText: 'Which parts of the application will be lazy loaded?'
      },
      {
        id: 'componentCommunication',
        label: 'Component Communication',
        type: 'select',
        options: [
          { value: 'input-output', label: '@Input/@Output' },
          { value: 'services', label: 'Services' },
          { value: 'state-management', label: 'State Management' },
          { value: 'mixed', label: 'Mixed Approach' },
        ],
        validation: {
          required: true,
        },
        helperText: 'How will components communicate with each other?'
      },
    ],
    required: ['moduleStructure', 'componentHierarchy', 'sharedComponents', 'lazyLoading', 'componentCommunication'],
  },
  {
    id: 'dataModels',
    title: 'Data Models & Services',
    description: 'Define the data models and services for your Angular AI robot project.',
    prevPhase: 'components',
    nextPhase: 'routing',
    fields: [
      {
        id: 'dataModels',
        label: 'Data Models/Interfaces',
        type: 'textarea',
        placeholder: 'Robot, Sensor, Alert, User, etc. with properties...',
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
        placeholder: 'RobotService, AuthService, TelemetryService...',
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
        placeholder: 'LoggingService, ErrorHandlingService, NotificationService...',
        validation: {
          required: true,
          minLength: 20,
        },
        helperText: 'List utility services for common functionality'
      },
      {
        id: 'caching',
        label: 'Caching Strategy',
        type: 'textarea',
        placeholder: 'Robot configurations cached locally, telemetry stored in memory...',
        validation: {
          required: true,
          minLength: 20,
        },
        helperText: 'How will you handle data caching in the application?'
      },
      {
        id: 'errorHandling',
        label: 'Error Handling Strategy',
        type: 'textarea',
        placeholder: 'Global error interceptor, retry logic for robot commands...',
        validation: {
          required: true,
          minLength: 20,
        },
        helperText: 'Describe your approach to error handling'
      },
    ],
    required: ['dataModels', 'dataServices', 'utilityServices', 'caching', 'errorHandling'],
  },
  {
    id: 'routing',
    title: 'Routing & Navigation',
    description: 'Plan the routing structure for your Angular AI robot project.',
    prevPhase: 'dataModels',
    nextPhase: 'testing',
    fields: [
      {
        id: 'routeStructure',
        label: 'Route Structure',
        type: 'textarea',
        placeholder: '/dashboard, /robots, /robots/:id, /settings...',
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
        placeholder: 'AuthGuard, RoleGuard, UnsavedChangesGuard...',
        validation: {
          required: true,
          minLength: 20,
        },
        helperText: 'List the route guards you will implement'
      },
      {
        id: 'routeResolvers',
        label: 'Route Resolvers',
        type: 'textarea',
        placeholder: 'RobotResolver, UserProfileResolver...',
        validation: {
          required: true,
          minLength: 20,
        },
        helperText: 'List any route resolvers for pre-loading data'
      },
      {
        id: 'navigationStrategy',
        label: 'Navigation Strategy',
        type: 'textarea',
        placeholder: 'Sidebar navigation, breadcrumbs, tab-based interfaces...',
        validation: {
          required: true,
          minLength: 20,
        },
        helperText: 'Describe the navigation patterns for your application'
      },
    ],
    required: ['routeStructure', 'routeGuards', 'routeResolvers', 'navigationStrategy'],
  },
  {
    id: 'testing',
    title: 'Testing Strategy',
    description: 'Define your testing approach for your Angular AI robot project.',
    prevPhase: 'routing',
    nextPhase: 'deployment',
    fields: [
      {
        id: 'unitTesting',
        label: 'Unit Testing Approach',
        type: 'textarea',
        placeholder: 'Jasmine/Karma for services, pipes, components...',
        validation: {
          required: true,
          minLength: 30,
        },
        helperText: 'Describe your unit testing strategy'
      },
      {
        id: 'integrationTesting',
        label: 'Integration Testing',
        type: 'textarea',
        placeholder: 'Testing service interactions, component integration...',
        validation: {
          required: true,
          minLength: 30,
        },
        helperText: 'Describe your integration testing strategy'
      },
      {
        id: 'e2eTesting',
        label: 'E2E Testing',
        type: 'textarea',
        placeholder: 'Cypress/Protractor for critical user flows...',
        validation: {
          required: true,
          minLength: 20,
        },
        helperText: 'Describe your end-to-end testing approach'
      },
      {
        id: 'mockingStrategy',
        label: 'Mocking Strategy',
        type: 'textarea',
        placeholder: 'Mock services for robot API, WebSocket simulation...',
        validation: {
          required: true,
          minLength: 20,
        },
        helperText: 'How will you mock external dependencies in tests?'
      },
      {
        id: 'testCoverage',
        label: 'Test Coverage Goals',
        type: 'textarea',
        placeholder: '80% code coverage, 100% for critical robot control components...',
        validation: {
          required: true,
          minLength: 20,
        },
        helperText: 'Define your test coverage targets'
      },
    ],
    required: ['unitTesting', 'integrationTesting', 'e2eTesting', 'mockingStrategy', 'testCoverage'],
  },
  {
    id: 'deployment',
    title: 'Deployment Planning',
    description: 'Plan the deployment strategy for your Angular AI robot project.',
    prevPhase: 'testing',
    nextPhase: 'timeline',
    fields: [
      {
        id: 'buildStrategy',
        label: 'Build Configuration',
        type: 'textarea',
        placeholder: 'Production optimization, environment configs, bundle analysis...',
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
        placeholder: 'Cloud hosting, on-premise server, edge devices near robots...',
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
        placeholder: 'GitHub Actions, Jenkins, Azure DevOps...',
        validation: {
          required: true,
          minLength: 20,
        },
        helperText: 'Describe your continuous integration and deployment approach'
      },
      {
        id: 'monitoringStrategy',
        label: 'Monitoring Strategy',
        type: 'textarea',
        placeholder: 'Error tracking, performance monitoring, usage analytics...',
        validation: {
          required: true,
          minLength: 20,
        },
        helperText: 'How will you monitor the application in production?'
      },
      {
        id: 'securityMeasures',
        label: 'Security Measures',
        type: 'textarea',
        placeholder: 'Code scanning, dependency auditing, penetration testing...',
        validation: {
          required: true,
          minLength: 20,
        },
        helperText: 'What security measures will you implement?'
      },
    ],
    required: ['buildStrategy', 'deploymentTargets', 'cicdStrategy', 'monitoringStrategy', 'securityMeasures'],
  },
  {
    id: 'timeline',
    title: 'Project Timeline',
    description: 'Create a timeline for your Angular AI robot project.',
    prevPhase: 'deployment',
    fields: [
      {
        id: 'milestones',
        label: 'Project Milestones',
        type: 'textarea',
        placeholder: 'Project kickoff, Architecture approved, MVP release, Final release...',
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
        placeholder: 'Two-week sprints, initial focus on core robot communication...',
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
        placeholder: 'Frontend developers (2), Backend integration (1), DevOps (0.5)...',
        validation: {
          required: true,
          minLength: 20,
        },
        helperText: 'List the resources needed for your project'
      },
      {
        id: 'riskManagement',
        label: 'Risk Management',
        type: 'textarea',
        placeholder: 'Identified risks: Robot API changes, performance with multiple robots...',
        validation: {
          required: true,
          minLength: 30,
        },
        helperText: 'Identify potential risks and mitigation strategies'
      },
      {
        id: 'successCriteria',
        label: 'Success Criteria',
        type: 'textarea',
        placeholder: 'All robots successfully monitored, commands executed within 100ms...',
        validation: {
          required: true,
          minLength: 30,
        },
        helperText: 'Define how you will measure project success'
      },
    ],
    required: ['milestones', 'sprintPlanning', 'resourceAllocation', 'riskManagement', 'successCriteria'],
  },
];
