import useFetch from "../hooks/useFetch";
import type { ConfigurationKey } from "../types/configurationKey";
import AlertDanger from "../components/ui/AlertDanger";
import Table from "../components/ui/Table";
import Spinner from "../components/ui/Spinner";

const ConfigurationKeys = () => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const {
    data: configurationKeys,
    isLoading,
    error,
  } = useFetch<ConfigurationKey[]>(
    `${baseUrl}/api/v2/ocpp16-configuration-keys.json`,
  );

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
  const content =
    configurationKeys?.map((key) => ({
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

  return (
    <div className="prose">
      <h1>OCPP 1.6 Configuration Keys</h1>
      {error && <AlertDanger message={error} />}
      {isLoading ? <Spinner /> : <Table headers={headers} content={content} />}
    </div>
  );
};

export default ConfigurationKeys;
