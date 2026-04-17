type ConnectorStandard = {
  value: string;
  icon: string;
};

const BASE_URL =
  "https://sintio-ag.github.io/sintio-supported-chargers/img/connectors";

export const CONNECTOR_STANDARD_OPTIONS: ConnectorStandard[] = [
  { value: "CHADEMO", icon: `${BASE_URL}/connector-aa-chademo.svg` },
  { value: "CHAOJI", icon: `${BASE_URL}/connector-unknown.svg` },
  { value: "DOMESTIC_A", icon: `${BASE_URL}/connector-unknown.svg` },
  { value: "DOMESTIC_B", icon: `${BASE_URL}/connector-unknown.svg` },
  { value: "DOMESTIC_C", icon: `${BASE_URL}/connector-unknown.svg` },
  { value: "DOMESTIC_D", icon: `${BASE_URL}/socket-type-d.svg` },
  { value: "DOMESTIC_E", icon: `${BASE_URL}/socket-type-e.svg` },
  { value: "DOMESTIC_F", icon: `${BASE_URL}/socket-type-f.svg` },
  { value: "DOMESTIC_G", icon: `${BASE_URL}/socket-type-g.svg` },
  { value: "DOMESTIC_H", icon: `${BASE_URL}/socket-type-h.svg` },
  { value: "DOMESTIC_I", icon: `${BASE_URL}/socket-type-i.svg` },
  { value: "DOMESTIC_J", icon: `${BASE_URL}/socket-type-j.svg` },
  { value: "DOMESTIC_K", icon: `${BASE_URL}/connector-unknown.svg` },
  { value: "DOMESTIC_L", icon: `${BASE_URL}/socket-type-l.svg` },
  { value: "DOMESTIC_M", icon: `${BASE_URL}/socket-type-m.svg` },
  { value: "DOMESTIC_N", icon: `${BASE_URL}/connector-unknown.svg` },
  { value: "DOMESTIC_O", icon: `${BASE_URL}/connector-unknown.svg` },
  { value: "GBT_AC", icon: `${BASE_URL}/connector-unknown.svg` },
  { value: "GBT_DC", icon: `${BASE_URL}/connector-unknown.svg` },
  { value: "IEC_60309_2_single_16" icon: `${BASE_URL}/connector-unknown.svg` },
  { value: "IEC_60309_2_three_16" icon: `${BASE_URL}/connector-unknown.svg` },,
  { value: "IEC_60309_2_three_32" icon: `${BASE_URL}/connector-unknown.svg` },,
  { value: "IEC_60309_2_three_64" icon: `${BASE_URL}/connector-unknown.svg` },
  { value: "IEC_62196_T1", icon: `${BASE_URL}/connector-type-1.svg` },
  {
    value: "IEC_62196_T1_COMBO",
    icon: `${BASE_URL}/connector-ff-ccs-combo-2.svg`,
  },
  { value: "IEC_62196_T2", icon: `${BASE_URL}/connector-type-2.svg` },
  {
    value: "IEC_62196_T2_COMBO",
    icon: `${BASE_URL}/connector-ee-ccs-combo-1.svg`,
  },
  { value: "IEC_62196_T3A", icon: `${BASE_URL}/connector-type-3.svg` },
  { value: "IEC_62196_T3C", icon: `${BASE_URL}/connector-type-3.svg` },
  { value: "NEMA_5_20" },
  { value: "NEMA_6_30" },
  { value: "NEMA_6_50" },
  { value: "NEMA_10_30" },
  { value: "NEMA_10_50" },
  { value: "NEMA_14_30" },
  { value: "NEMA_14_50" },
  { value: "PANTOGRAPH_BOTTOM_UP" },
  { value: "PANTOGRAPH_TOP_DOWN" },
  { value: "TESLA_R" },
  { value: "TESLA_S" },
];
