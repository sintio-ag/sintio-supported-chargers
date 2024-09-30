type Image = {
  urlPng: string;
  urlWebp: string;
  size: string;
};

type Connector = {
  connectorId: number;
  standard: string;
  format: string;
  powerType: string;
  voltage: number;
  amperage: number;
  maxElectricPower: number;
};

export type Charger = {
  id: string;
  manufacturerId: string;
  chargePointVendor: string;
  chargePointModel: string;
  globalMeter: boolean;
  meterClass: string;
  connectors: Connector[];
  images: Image[];
};
