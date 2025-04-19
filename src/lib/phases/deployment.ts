
import { Phase } from './index';

export const deploymentPhase: Phase = {
  id: 'deployment',
  title: 'Deployment & DevOps',
  description: 'Plan how your Angular application will be built, deployed, and maintained.',
  prevPhase: 'testing',
  nextPhase: 'timeline',
  fields: [
    {
      id: 'buildStrategy',
      label: 'Build Strategy',
      type: 'textarea',
      placeholder: 'Describe your approach to building the application',
      helperText: 'How will you configure your production builds? What optimizations will you apply?',
      validation: {
        required: true,
        minLength: 20
      }
    },
    {
      id: 'hostingEnvironment',
      label: 'Hosting Environment',
      type: 'textarea',
      placeholder: 'Describe where and how your application will be hosted',
      helperText: 'For example: AWS, Azure, Netlify, Vercel, Firebase, etc.',
      validation: {
        required: true,
        minLength: 10
      }
    },
    {
      id: 'cicdPipeline',
      label: 'CI/CD Pipeline',
      type: 'textarea',
      placeholder: 'Describe your continuous integration and deployment process',
      helperText: 'How will code changes be tested and deployed?',
      validation: {
        required: true,
        minLength: 20
      }
    },
    {
      id: 'environmentStrategy',
      label: 'Environment Strategy',
      type: 'textarea',
      placeholder: 'Describe your approach to different environments',
      helperText: 'How will you manage dev, staging, production environments?',
      validation: {
        required: true,
        minLength: 20
      }
    },
    {
      id: 'monitoringStrategy',
      label: 'Monitoring & Logging Strategy',
      type: 'textarea',
      placeholder: 'Describe how you will monitor and log your application',
      helperText: 'What tools and approaches will you use for monitoring and logging?',
      validation: {
        required: true,
        minLength: 20
      }
    },
    {
      id: 'securityConsiderations',
      label: 'Security Considerations',
      type: 'textarea',
      placeholder: 'Describe your approach to application security',
      helperText: 'How will you secure your application and prevent common vulnerabilities?',
      validation: {
        required: true,
        minLength: 20
      }
    }
  ],
  required: ['buildStrategy', 'hostingEnvironment', 'cicdPipeline', 'environmentStrategy', 'monitoringStrategy', 'securityConsiderations']
};
