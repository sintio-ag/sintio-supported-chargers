import useFetch from "../hooks/useFetch";
import type { Manufacturer } from "../types/manufacturer";
import AlertDanger from "../components/ui/AlertDanger";
import Table from "../components/ui/Table";
import Spinner from "../components/ui/Spinner";

const Manufacturer = () => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const {
    data: manufacturers,
    isLoading,
    error,
  } = useFetch<Manufacturer[]>(`${baseUrl}/api/v2/manufacturers.json`);

  // Define headers for the manufacturer table with support contacts
  const headers = ["Name", "Website", "Global Support", "Support by Country"];

  // Prepare content for the manufacturer table
  const content =
    manufacturers?.map((manufacturer) => ({
      Name: manufacturer.name,
      Website: (
        <a
          href={manufacturer.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {manufacturer.websiteUrl}
        </a>
      ),
      "Global Support": (
        <div>
          {manufacturer.globalSupportUrl && (
            <a
              href={manufacturer.globalSupportUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Global Support
            </a>
          )}
          {manufacturer.chargerManagementUrl && (
            <>
              {manufacturer.globalSupportUrl && ", "}
              <a
                href={manufacturer.chargerManagementUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Charger Management Cloud
              </a>
            </>
          )}
          {manufacturer.statusPageUrl && (
            <>
              {(manufacturer.globalSupportUrl ||
                manufacturer.chargerManagementUrl) &&
                ", "}
              <a
                href={manufacturer.statusPageUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Status Page
              </a>
            </>
          )}
        </div>
      ),
      "Support by Country": (
        <ul className="m-0 list-none p-0">
          {manufacturer.supportByCountry?.map((support) => (
            <li key={support.countryCode}>
              <span className="font-bold">{support.country}:</span>
              <ul className="m-0 list-none p-0">
                {support.supportCompanies.map((company) => (
                  <li key={company.id}>
                    <span className="font-bold">{company.company}</span>
                    <br />
                    <a href={`mailto:${company.email}`}>{company.email}</a>
                    <br />
                    <a href={`tel:${company.phone}`}>{company.phone}</a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      ),
    })) || [];

  return (
    <div className="prose mx-auto my-4 max-w-screen-xl rounded-lg border bg-white p-6">
      <h1>Charger Manufacturers</h1>
      {error && <AlertDanger message={error} />}
      {isLoading ? <Spinner /> : <Table headers={headers} content={content} />}
    </div>
  );
};

export default Manufacturer;
