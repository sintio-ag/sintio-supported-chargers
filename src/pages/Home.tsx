import useFetch from "../hooks/useFetch";
import type { Charger } from "../types/charger";
import AlertDanger from "../components/ui/AlertDanger";
import Table from "../components/ui/Table";
import Spinner from "../components/ui/Spinner";
import ConnectorAaChademo from "../components/illustrations/connectors/ConnectorAaChademo";
import ConnectorEeCcsCombo from "../components/illustrations/connectors/ConnectorEeCcsCombo";
import ConnectorFfCcsCombo from "../components/illustrations/connectors/ConnectorFfCcsCombo";
import ConnectorType1 from "../components/illustrations/connectors/ConnectorType1";
import ConnectorType2 from "../components/illustrations/connectors/ConnectorType2";
import ConnectorType3 from "../components/illustrations/connectors/ConnectorType3";
import ConnectorTypeE from "../components/illustrations/connectors/ConnectorTypeE";

// Define the type for connector standards
type ConnectorStandard =
  | "IEC_62196_T2"
  | "IEC_62196_T2_COMBO"
  | "IEC_62196_T1"
  | "IEC_62196_T1_COMBO"
  | "CHADEMO"
  | "IEC_62196_T3C"
  | "DOMESTIC_E";

// Define the type for the connector illustrations object
const connectorIllustrations: Record<ConnectorStandard, JSX.Element> = {
  CHADEMO: <ConnectorAaChademo className="mr-2 inline-block h-6 w-6" />,
  IEC_62196_T1_COMBO: (
    <ConnectorEeCcsCombo className="mr-2 inline-block h-6 w-6" />
  ),
  IEC_62196_T2_COMBO: (
    <ConnectorFfCcsCombo className="mr-2 inline-block h-6 w-6" />
  ),
  IEC_62196_T1: <ConnectorType1 className="mr-2 inline-block h-6 w-6" />,
  IEC_62196_T2: <ConnectorType2 className="mr-2 inline-block h-6 w-6" />,
  IEC_62196_T3C: <ConnectorType3 className="mr-2 inline-block h-6 w-6" />,
  DOMESTIC_E: <ConnectorTypeE className="mr-2 inline-block h-4 w-4" />,
};

const Home = () => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const {
    data: chargers,
    isLoading,
    error,
  } = useFetch<Charger[]>(`${baseUrl}/api/v1/chargers.json`);

  // Define headers for the table
  const headers = [
    "Image",
    "Vendor",
    "Model",
    "Global Meter",
    "Meter Class",
    "Connectors",
  ];

  // Prepare content for the table
  const content =
    chargers?.map((charger) => ({
      Image: (
        <img
          src={charger.images.find((image) => image.size === "50")?.urlWebp}
          alt="Charger Image"
        />
      ),
      Vendor: charger.chargePointVendor,
      Model: Array.isArray(charger.chargePointModel)
        ? charger.chargePointModel.join(", ")
        : charger.chargePointModel, // Handle both array and string cases
      "Global Meter": charger.globalMeter ? "Yes" : "No",
      "Meter Class": charger.meterClass,
      Connectors: (
        <ul className="m-0 list-none p-0">
          {charger.connectors.map((connector) => {
            const illustration =
              connectorIllustrations[connector.standard as ConnectorStandard];
            return (
              <li key={connector.connectorId}>
                {illustration}
                <span className="font-bold">ID: {connector.connectorId}</span>
                <br />
                Standard: {connector.standard}
                <br />
                Max Power: {(connector.maxElectricPower / 1000).toFixed(2)} kW
                <br />
                Current: {connector.powerType}
              </li>
            );
          })}
        </ul>
      ),
    })) || [];

  return (
    <div className="prose">
      <h1>Supported Chargers</h1>
      {isLoading ? (
        <Spinner size="medium" />
      ) : error ? (
        <AlertDanger message={error} />
      ) : (
        <div>
          <Table headers={headers} content={content} />
        </div>
      )}
    </div>
  );
};

export default Home;
