type ConfigKeyStep = {
  configKey: string;
  value: string | boolean;
  type: string;
};

type configKeyFeatures = {
  name: string;
  description: string;
  values: {
    enable: ConfigKeyStep[];
    disable: ConfigKeyStep[];
  };
};

type Connector = {
  connectorId: number;
  standard: string;
  format: string;
  powerType: string;
  voltage: number;
  amperage: number;
  maxElectricPower: number;
  imageUrlSvg: string;
};

type Image = {
  urlPng: string;
  urlWebp: string;
  size: string;
};

export type Charger = {
  id: string;
  manufacturerId: string;
  chargePointVendor: string;
  chargePointModel: string;
  globalMeter: boolean;
  meterClass: string;
  configKeyFeatures?: configKeyFeatures[];
  connectors: Connector[];
  images: Image[];
};
