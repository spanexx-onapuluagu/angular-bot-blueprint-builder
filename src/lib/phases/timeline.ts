
import { Phase } from './index';

export const timelinePhase: Phase = {
  id: 'timeline',
  title: 'Project Timeline',
  description: 'Define the timeline and milestones for your Angular application development.',
  prevPhase: 'deployment',
  fields: [
    {
      id: 'projectDuration',
      label: 'Estimated Project Duration',
      type: 'text',
      placeholder: 'For example: 3 months, 12 weeks, etc.',
      helperText: 'How long do you expect the project to take from start to finish?',
      validation: {
        required: true,
        minLength: 2
      }
    },
    {
      id: 'projectMilestones',
      label: 'Project Milestones',
      type: 'textarea',
      placeholder: 'List key project milestones with estimated completion dates',
      helperText: 'For example: Initial setup, Core features complete, MVP, etc.',
      validation: {
        required: true,
        minLength: 20
      }
    },
    {
      id: 'phaseBreakdown',
      label: 'Phase Breakdown',
      type: 'textarea',
      placeholder: 'Break down the project into phases with time estimates',
      helperText: 'For example: Setup phase (1 week), Core development (4 weeks), etc.',
      validation: {
        required: true,
        minLength: 20
      }
    },
    {
      id: 'resourceAllocation',
      label: 'Resource Allocation',
      type: 'textarea',
      placeholder: 'Describe the team structure and resource allocation',
      helperText: 'Who will work on what aspects of the project?',
      validation: {
        required: true,
        minLength: 20
      }
    },
    {
      id: 'deliverables',
      label: 'Key Deliverables',
      type: 'textarea',
      placeholder: 'List the key deliverables for the project',
      helperText: 'What will be delivered at each milestone?',
      validation: {
        required: true,
        minLength: 20
      }
    },
    {
      id: 'risks',
      label: 'Potential Risks & Mitigation',
      type: 'textarea',
      placeholder: 'Identify potential risks and how they will be mitigated',
      helperText: 'What could go wrong and how will you handle it?',
      validation: {
        required: true,
        minLength: 20
      }
    }
  ],
  required: ['projectDuration', 'projectMilestones', 'phaseBreakdown', 'resourceAllocation', 'deliverables', 'risks']
};
