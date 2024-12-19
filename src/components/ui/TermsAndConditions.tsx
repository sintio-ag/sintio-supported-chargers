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
        <>
          <a
            href={term.default.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold"
          >
            {term.default.name}
          </a>
          {term.default.changelog && term.default.changelog.length > 0 && (
            <>
              <p>Changelog</p>
              <ul className="list-disc pb-5 pl-5">
                {term.default.changelog.map((change, index) => (
                  <li key={index}>{change}</li>
                ))}
              </ul>
            </>
          )}
        </>
      ),
      Languages: (
        <>
          {term.languages?.map((languageLink) => (
            <div key={languageLink.lang} style={{ display: "block" }}>
              <a
                href={languageLink.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold"
              >
                {languageLink.name} ({languageLink.lang.toUpperCase()})
              </a>
              {languageLink.changelog && languageLink.changelog.length > 0 && (
                <>
                  <p>Changelog</p>
                  <ul className="list-disc pb-5 pl-5">
                    {languageLink.changelog.map((change, index) => (
                      <li key={index}>{change}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
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
