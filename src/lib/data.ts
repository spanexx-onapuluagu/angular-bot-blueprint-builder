
import { Phase } from './phases';
import { requirementsPhase } from './phases/requirements';
import { architecturePhase } from './phases/architecture';
import { componentsPhase } from './phases/components';
import { dataModelsPhase } from './phases/data-models';
import { routingPhase } from './phases/routing';
import { testingPhase } from './phases/testing';
import { deploymentPhase } from './phases/deployment';
import { timelinePhase } from './phases/timeline';

export { type Phase, type Field } from './phases';

export const phases: Phase[] = [
  requirementsPhase,
  architecturePhase,
  componentsPhase,
  dataModelsPhase,
  routingPhase,
  testingPhase,
  deploymentPhase,
  timelinePhase
];
