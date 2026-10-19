import { useState } from "react";
import useFetch from "../hooks/useFetch";
import type { PowerUtility } from "../types/powerUtility";
import AlertDanger from "../components/ui/AlertDanger";
import Table from "../components/ui/Table";
import Spinner from "../components/ui/Spinner";

const PowerUtilities = () => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const {
    data: powerUtilities,
    isLoading,
    error,
  } = useFetch<PowerUtility[]>(`${baseUrl}/api/v2/power-utilities.json`);

  const [search, setSearch] = useState("");

  // Define headers for the power utilities table
  const headers = [
    "ElCom",
    "VSE",
    "UID",
    "Address",
    "Website",
    "Status",
    "Comment",
  ];

  // Show the VSE identifier like the start of a metering point ID,
  // e.g. "101170 12345" as "CH10117012345"
  const formatVseIdentifier = (identifier: string) =>
    `CH${identifier.replace(/\s/g, "")}`;

  // Filter by name, city, postal code, UID or one of the identifiers
  const searchTerm = search.trim().toLowerCase();
  const filteredUtilities = searchTerm
    ? powerUtilities?.filter((utility) =>
        [
          utility.name,
          utility.city,
          utility.postalCode,
          utility.uid,
          String(utility.elcomId),
          ...utility.vse.flatMap((vse) => [
            vse.identifier,
            formatVseIdentifier(vse.identifier),
            vse.name,
          ]),
        ].some((value) => value?.toLowerCase().includes(searchTerm)),
      )
    : powerUtilities;

  // Prepare content for the power utilities table
  const content =
    filteredUtilities?.map((utility) => ({
      ElCom: (
        <>
          {utility.name}
          {utility.nameAddition && (
            <span className="block">{utility.nameAddition}</span>
          )}
          <span className="block whitespace-nowrap text-xs">
            {utility.elcomId}
          </span>
        </>
      ),
      // A utility can have several VSE entries, even with the same vseId
      VSE: (
        <>
          {utility.vse.map((vse, index) => (
            <span className="mb-1 block last:mb-0" key={index}>
              {vse.name}
              <span className="block whitespace-nowrap text-xs">
                {formatVseIdentifier(vse.identifier)}
              </span>
            </span>
          ))}
        </>
      ),
      UID: <span className="whitespace-nowrap">{utility.uid}</span>,
      Address: (
        <>
          {utility.street && <span className="block">{utility.street}</span>}
          <span className="block whitespace-nowrap">
            {[utility.postalCode, utility.city].filter(Boolean).join(" ")}
          </span>
        </>
      ),
      Website: utility.website?.startsWith("http") ? (
        <a
          href={utility.website}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sintio-dark-blue underline"
        >
          {new URL(utility.website).hostname.replace(/^www\./, "")}
        </a>
      ) : (
        utility.website
      ),
      // NO_TARIFFS_2027 is shown as active for the moment
      Status: "Active",
      Comment: utility.comment,
    })) || [];

  return (
    <div className="max-w-screen-xxl prose mx-auto my-4 rounded-lg border bg-white p-6">
      <h1>Power Utilities</h1>
      <p>
        Swiss power utilities (Energieversorgungsunternehmen) that supply
        electricity to end customers. Unlike a pure list of grid operators, this
        list only contains companies that sell electricity to end customers.
      </p>
      <input
        type="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search name, city, postal code, UID or identifier"
        className="my-4 w-96 max-w-full rounded-lg border bg-white px-3 py-2 text-sm text-gray-600 outline-none focus:ring-2 focus:ring-sintio-dark-blue focus:ring-offset-2"
      />
      {error && <AlertDanger message={error} />}
      {isLoading ? <Spinner /> : <Table headers={headers} content={content} />}
    </div>
  );
};

export default PowerUtilities;
