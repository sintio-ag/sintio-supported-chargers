export type ConfigurationKey = {
  name: string;
  required: boolean;
  read: boolean;
  write: boolean;
  type: string;
  defaultValue: string;
  unit: string;
  description: string;
  origin: string;
};
