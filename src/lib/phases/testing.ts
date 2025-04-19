
import { Phase } from './index';

export const testingPhase: Phase = {
  id: 'testing',
  title: 'Testing Strategy',
  description: 'Define the testing approach for your Angular application.',
  prevPhase: 'routing',
  nextPhase: 'deployment',
  fields: [
    {
      id: 'unitTestingStrategy',
      label: 'Unit Testing Strategy',
      type: 'textarea',
      placeholder: 'Describe your approach to unit testing',
      helperText: 'How will you test individual components, services, pipes, etc.?',
      validation: {
        required: true,
        minLength: 20
      }
    },
    {
      id: 'integrationTestingStrategy',
      label: 'Integration Testing Strategy',
      type: 'textarea',
      placeholder: 'Describe your approach to integration testing',
      helperText: 'How will you test interactions between components and services?',
      validation: {
        required: true,
        minLength: 20
      }
    },
    {
      id: 'e2eTestingStrategy',
      label: 'E2E Testing Strategy',
      type: 'textarea',
      placeholder: 'Describe your approach to end-to-end testing',
      helperText: 'How will you test complete user flows?',
      validation: {
        required: true,
        minLength: 20
      }
    },
    {
      id: 'testingTools',
      label: 'Testing Tools',
      type: 'textarea',
      placeholder: 'List the testing tools and frameworks you plan to use',
      helperText: 'For example: Jasmine, Jest, Karma, Protractor, Cypress, etc.',
      validation: {
        required: true,
        minLength: 10
      }
    },
    {
      id: 'testCoverage',
      label: 'Test Coverage Goals',
      type: 'textarea',
      placeholder: 'Define your test coverage goals',
      helperText: 'What level of test coverage are you aiming for?',
      validation: {
        required: true,
        minLength: 10
      }
    },
    {
      id: 'cicdIntegration',
      label: 'CI/CD Integration for Testing',
      type: 'textarea',
      placeholder: 'Describe how testing will be integrated into your CI/CD pipeline',
      helperText: 'How will tests be executed in your build and deployment process?',
      validation: {
        required: true,
        minLength: 10
      }
    }
  ],
  required: ['unitTestingStrategy', 'integrationTestingStrategy', 'e2eTestingStrategy', 'testingTools', 'testCoverage']
};
