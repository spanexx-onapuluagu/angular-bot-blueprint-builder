
import { Phase } from './index';

export const componentsPhase: Phase = {
  id: 'components',
  title: 'UI Components',
  description: 'Plan the core UI components and pages for your Angular application.',
  prevPhase: 'architecture',
  nextPhase: 'data-models',
  fields: [
    {
      id: 'layoutStructure',
      label: 'Layout Structure',
      type: 'textarea',
      placeholder: 'Describe the main layout structure (header, footer, sidebar, etc.)',
      helperText: 'Outline the application\'s main layout components',
      validation: {
        required: true,
        minLength: 20
      }
    },
    {
      id: 'corePages',
      label: 'Core Pages/Views',
      type: 'textarea',
      placeholder: 'List the main pages or views in your application',
      helperText: 'For example: Home, Dashboard, Profile, Settings, etc.',
      validation: {
        required: true,
        minLength: 10
      }
    },
    {
      id: 'reusableComponents',
      label: 'Reusable Components',
      type: 'textarea',
      placeholder: 'List reusable components that will be shared across the application',
      helperText: 'For example: Button, Card, Modal, Form elements, etc.',
      validation: {
        required: true,
        minLength: 10
      }
    },
    {
      id: 'thirdPartyComponents',
      label: 'Third-Party Component Libraries',
      type: 'textarea',
      placeholder: 'List any third-party component libraries you plan to use',
      helperText: 'For example: ngx-charts, angular-calendar, etc.'
    },
    {
      id: 'accessibilityConsiderations',
      label: 'Accessibility Considerations',
      type: 'textarea',
      placeholder: 'Describe your approach to accessibility',
      helperText: 'How will you ensure your application is accessible to all users?'
    },
    {
      id: 'responsiveStrategy',
      label: 'Responsive Design Strategy',
      type: 'textarea',
      placeholder: 'Describe your approach to responsive design',
      helperText: 'How will your application adapt to different screen sizes and devices?',
      validation: {
        required: true,
        minLength: 20
      }
    }
  ],
  required: ['layoutStructure', 'corePages', 'reusableComponents', 'responsiveStrategy']
};
