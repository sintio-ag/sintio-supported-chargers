import { useLocation, useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import type { ConfigurationKey } from "../types/configurationKey";
import AlertDanger from "../components/ui/AlertDanger";
import Table from "../components/ui/Table";
import Spinner from "../components/ui/Spinner";
import * as Select from "@radix-ui/react-select";

const ConfigurationKeys = () => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const {
    data: configurationKeys,
    isLoading,
    error,
  } = useFetch<ConfigurationKey[]>(
    `${baseUrl}/api/v2/ocpp16-configuration-keys.json`,
  );

  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const originFilter = queryParams.get("origin");

  // Define headers for the configuration keys table
  const headers = [
    "Configuration Key",
    "Required",
    "Accessibility",
    "Description",
    "Value",
    "Sintio Default Value",
    "Unit",
    "Origin",
  ];

  // Prepare content for the configuration keys table
  const filteredKeys =
    originFilter && originFilter !== "all"
      ? configurationKeys?.filter((key) => key.origin === originFilter)
      : configurationKeys;

  const content =
    filteredKeys?.map((key) => ({
      "Configuration Key": key.name,
      Required: key.required ? "Yes" : "No",
      Accessibility:
        key.read && key.write ? "Read/Write" : key.read ? "Read" : "Write",
      Description: key.description,
      Value: key.type,
      "Sintio Default Value": key.defaultValue,
      Unit: key.unit,
      Origin: key.origin,
    })) || [];

  // Options for the Select component
  const originOptions = [
    { value: "all", label: "All" },
    { value: "OCPP", label: "OCPP Standard" },
    { value: "easee", label: "Easee specific" },
    { value: "zaptec", label: "Zaptec specific" },
  ];

  // Handle change in the Select component
  const handleOriginChange = (value: string) => {
    if (value && value !== "all") {
      queryParams.set("origin", value);
    } else {
      queryParams.delete("origin");
    }
    navigate(`${location.pathname}?${queryParams.toString()}`);
  };

  return (
    <div className="prose" style={{ maxWidth: "none" }}>
      <h1>OCPP 1.6 Configuration Keys</h1>
      <Select.Root
        value={originFilter || "all"}
        onValueChange={handleOriginChange}
      >
        <div className="mb-4 w-72 max-w-full">
          <Select.Trigger className="inline-flex w-full items-center justify-between rounded-lg border bg-white px-3 py-2 text-sm text-gray-600 outline-none focus:ring-2 focus:ring-sintio-dark-blue focus:ring-offset-2">
            <Select.Value placeholder="Select Origin" />
            <Select.Icon />
          </Select.Trigger>
          <Select.Content className="mt-3 max-h-64 w-[var(--radix-select-trigger-width)] overflow-y-auto rounded-lg border bg-white text-sm shadow-lg">
            <Select.ScrollUpButton />
            <Select.Viewport>
              {originOptions.map((option) => (
                <Select.Item
                  key={option.value}
                  value={option.value}
                  className="cursor-pointer px-3 py-2 hover:bg-gray-100"
                >
                  <Select.ItemText>{option.label}</Select.ItemText>
                </Select.Item>
              ))}
            </Select.Viewport>
            <Select.ScrollDownButton />
          </Select.Content>
        </div>
      </Select.Root>
      {error && <AlertDanger message={error} />}
      {isLoading ? <Spinner /> : <Table headers={headers} content={content} />}
    </div>
  );
};

export default ConfigurationKeys;
