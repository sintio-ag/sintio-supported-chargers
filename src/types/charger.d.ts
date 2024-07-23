type Image = {
  urlPng: string;
  urlWebp: string;
  size: string;
};

type Connector = {
  connectorId: number;
  connectorType: string;
  maxPowerKw: number;
  currentType: string;
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
