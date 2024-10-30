export type ConfigurationKey = {
  name: string;
  required: boolean;
  read: boolean;
  write: boolean;
  type: string;
  description: string;
  origin: string;
};
