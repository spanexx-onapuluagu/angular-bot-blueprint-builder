
import { Phase } from './index';

export const architecturePhase: Phase = {
  id: 'architecture',
  title: 'Application Architecture',
  description: 'Define the architecture and technical foundation of your Angular application.',
  prevPhase: 'requirements',
  nextPhase: 'components',
  fields: [
    {
      id: 'architecturePattern',
      label: 'Architecture Pattern',
      type: 'select',
      options: [
        { value: 'modular', label: 'Modular Architecture' },
        { value: 'monolithic', label: 'Monolithic Architecture' },
        { value: 'microservices', label: 'Micro Frontend Architecture' },
        { value: 'layered', label: 'Layered Architecture' }
      ],
      helperText: 'Select the primary architecture pattern for your application',
      validation: {
        required: true
      }
    },
    {
      id: 'stateManagement',
      label: 'State Management',
      type: 'select',
      options: [
        { value: 'services', label: 'Angular Services' },
        { value: 'ngrx', label: 'NgRx (Redux)' },
        { value: 'ngxs', label: 'NGXS' },
        { value: 'rxjs', label: 'RxJS BehaviorSubject' },
        { value: 'akita', label: 'Akita' }
      ],
      helperText: 'Choose a state management approach for your application',
      validation: {
        required: true
      }
    },
    {
      id: 'cssFramework',
      label: 'CSS Framework',
      type: 'select',
      options: [
        { value: 'angular-material', label: 'Angular Material' },
        { value: 'bootstrap', label: 'Bootstrap' },
        { value: 'tailwind', label: 'Tailwind CSS' },
        { value: 'primeng', label: 'PrimeNG' },
        { value: 'custom', label: 'Custom CSS/SCSS' }
      ],
      helperText: 'Select the CSS framework or approach for styling',
      validation: {
        required: true
      }
    },
    {
      id: 'apiStrategy',
      label: 'API Integration Strategy',
      type: 'select',
      options: [
        { value: 'rest', label: 'REST API' },
        { value: 'graphql', label: 'GraphQL' },
        { value: 'grpc', label: 'gRPC' },
        { value: 'websockets', label: 'WebSockets' },
        { value: 'mixed', label: 'Mixed Approach' }
      ],
      helperText: 'How will your Angular application communicate with backend services?',
      validation: {
        required: true
      }
    },
    {
      id: 'authStrategy',
      label: 'Authentication Strategy',
      type: 'select',
      options: [
        { value: 'jwt', label: 'JWT Authentication' },
        { value: 'oauth', label: 'OAuth/OpenID Connect' },
        { value: 'session', label: 'Session-based Auth' },
        { value: 'firebase', label: 'Firebase Auth' },
        { value: 'auth0', label: 'Auth0' },
        { value: 'none', label: 'No Authentication' }
      ],
      helperText: 'Select your authentication approach',
      validation: {
        required: true
      }
    },
    {
      id: 'architectureNotes',
      label: 'Additional Architecture Notes',
      type: 'textarea',
      placeholder: 'Any other details about the application architecture...',
      helperText: 'Describe any additional architectural considerations'
    }
  ],
  required: ['architecturePattern', 'stateManagement', 'cssFramework', 'apiStrategy', 'authStrategy']
};
