import useFetch from "../../hooks/useFetch";
import type { TermsAndConditions } from "../../types/terms-and-privacy";
import AlertDanger from "./AlertDanger";
import Table from "./Table";
import Spinner from "./Spinner";

const TermsAndConditions: React.FC = () => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const {
    data: termsAndConditions,
    isLoading,
    error,
  } = useFetch<TermsAndConditions[]>(
    `${baseUrl}/api/v2/terms-and-conditions.json`,
  );

  // Define headers for the terms and conditions table
  const headers = ["Date", "Default", "Languages"];

  // Prepare content for the terms and conditions table
  const content =
    termsAndConditions?.map((term) => ({
      Date: term.date,
      Default: (
        <a href={term.default.url} target="_blank" rel="noopener noreferrer">
          {term.default.name}
        </a>
      ),
      Languages: (
        <>
          {term.languages?.map((languageLink) => (
            <span key={languageLink.lang} style={{ display: "block" }}>
              <a
                href={languageLink.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {languageLink.name} ({languageLink.lang.toUpperCase()})
              </a>
            </span>
          ))}
        </>
      ),
    })) || [];

  return (
    <>
      {error && <AlertDanger message={error} />}
      {isLoading ? <Spinner /> : <Table headers={headers} content={content} />}
    </>
  );
};

export default TermsAndConditions;