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
      Image: `<img src="${charger.images.find((image) => image.size === "50")?.urlPng}" alt="Charger Image" />`,
      Vendor: charger.chargePointVendor,
      Model: charger.chargePointModel,
      "Global Meter": charger.globalMeter ? "Yes" : "No",
      "Meter Class": charger.meterClass,
      Connectors:
        `<ul class="list-none p-0 m-0">` +
        charger.connectors
          .map(
            (connector) =>
              `<li><span class="font-bold">ID: ${connector.connectorId}</span><br>Type: ${connector.connectorType}<br>Max Power: ${connector.maxPowerKw} kW<br>Current: ${connector.currentType}</li>`,
          )
          .join("") +
        `</ul>`,
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
