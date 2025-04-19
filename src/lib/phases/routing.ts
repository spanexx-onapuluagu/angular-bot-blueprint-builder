
import { Phase } from './index';

export const routingPhase: Phase = {
  id: 'routing',
  title: 'Routing & Navigation',
  description: 'Plan the routing structure and navigation flow for your Angular application.',
  prevPhase: 'data-models',
  nextPhase: 'testing',
  fields: [
    {
      id: 'routeStructure',
      label: 'Route Structure',
      type: 'textarea',
      placeholder: 'Define the main routes of your application',
      helperText: 'List all routes with their paths and corresponding components',
      validation: {
        required: true,
        minLength: 20
      }
    },
    {
      id: 'lazyLoadingStrategy',
      label: 'Lazy Loading Strategy',
      type: 'textarea',
      placeholder: 'Describe your approach to lazy loading modules',
      helperText: 'Which parts of your application will be lazy loaded?',
      validation: {
        required: true,
        minLength: 10
      }
    },
    {
      id: 'guards',
      label: 'Route Guards',
      type: 'textarea',
      placeholder: 'List the route guards your application will use',
      helperText: 'For example: AuthGuard, AdminGuard, UnsavedChangesGuard, etc.',
      validation: {
        required: true,
        minLength: 10
      }
    },
    {
      id: 'navigationFlow',
      label: 'Navigation Flow',
      type: 'textarea',
      placeholder: 'Describe the main user navigation flows',
      helperText: 'How will users typically navigate through your application?',
      validation: {
        required: true,
        minLength: 20
      }
    },
    {
      id: 'routeParams',
      label: 'Route Parameters & Query Parameters',
      type: 'textarea',
      placeholder: 'Describe any route parameters or query parameters',
      helperText: 'How will you use route parameters and query parameters?',
      validation: {
        required: true,
        minLength: 10
      }
    },
    {
      id: 'deepLinking',
      label: 'Deep Linking Strategy',
      type: 'textarea',
      placeholder: 'Describe your approach to deep linking (if applicable)',
      helperText: 'How will you handle deep links into your application?'
    }
  ],
  required: ['routeStructure', 'lazyLoadingStrategy', 'guards', 'navigationFlow', 'routeParams']
};
