
export * from './requirements';
export * from './architecture';
export * from './components';
export * from './data-models';
export * from './routing';
export * from './testing';
export * from './deployment';
export * from './timeline';

export interface Phase {
  id: string;
  title: string;
  description: string;
  fields: Field[];
  required: string[];
  nextPhase?: string;
  prevPhase?: string;
}

export interface Field {
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
}
