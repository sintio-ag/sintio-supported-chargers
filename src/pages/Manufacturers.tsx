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
      Website: `<a href="${manufacturer.websiteUrl}" target="_blank">${manufacturer.websiteUrl}</a>`,
      "Global Support": [
        manufacturer.globalSupportUrl
          ? `<a href="${manufacturer.globalSupportUrl}" target="_blank">Global Support</a>`
          : "",
        manufacturer.chargerManagementUrl
          ? `<a href="${manufacturer.chargerManagementUrl}" target="_blank">Charger Management Cloud</a>`
          : "",
        manufacturer.statusPageUrl
          ? `<a href="${manufacturer.statusPageUrl}" target="_blank">Status Page</a>`
          : "",
      ]
        .filter(Boolean)
        .join(", "), // Combine non-empty strings and separate them with commas
      "Support by Country": manufacturer.supportByCountry
        .map(
          (support) =>
            `<span class="font-bold">${support.country}:</span>` +
            `<ul class="list-none p-0 m-0">` +
            support.supportCompanies
              .map(
                (company) =>
                  `<li><span class="font-bold">${company.company}</span><br /><a href="mailto:${company.email}">${company.email}</a><br /><a href="tel:${company.phone}">${company.phone}</a></li>`,
              )
              .join("") +
            `</ul>`,
        )
        .join("<br>"),
    })) || [];

  return (
    <div className="prose">
      <h1>Charger Manufacturers</h1>
      {error && <AlertDanger message={error} />}
      {isLoading ? <Spinner /> : <Table headers={headers} content={content} />}
    </div>
  );
};

export default Manufacturer;
