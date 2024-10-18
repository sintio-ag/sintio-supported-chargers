import useFetch from "../hooks/useFetch";
import type { Charger } from "../types/charger";
import AlertDanger from "../components/ui/AlertDanger";
import Table from "../components/ui/Table";
import Spinner from "../components/ui/Spinner";

const Home = () => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const {
    data: chargers,
    isLoading,
    error,
  } = useFetch<Charger[]>(`${baseUrl}/api/v2/chargers.json`);

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
            return (
              <li key={connector.connectorId}>
                <img
                  src={connector.imageUrlSvg}
                  alt={`${connector.standard} Connector`}
                  className="mr-2 inline-block h-4 w-4"
                />
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
