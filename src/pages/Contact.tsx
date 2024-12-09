import useFetch from "../hooks/useFetch";
import type { TermsAndConditions } from "../types/terms";
import AlertDanger from "../components/ui/AlertDanger";
import Table from "../components/ui/Table";
import Spinner from "../components/ui/Spinner";

function Contact() {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const {
    data: termsAndConditions,
    isLoading,
    error,
  } = useFetch<TermsAndConditions[]>(
    `${baseUrl}/api/v2/terms-and-conditions.json`,
  );

  // Define headers for the manufacturer table with support contacts
  const headers = ["Date", "Default", "Languages"];

  // Prepare content for the manufacturer table
  const content =
    termsAndConditions?.map((term) => ({
      Date: <p>{term.date}</p>,
      Default: (
        <p>
          <a href={term.default.url} target="_blank" rel="noopener noreferrer">
            {term.default.name}
          </a>
        </p>
      ),
      Languages: (
        <>
          {term.languages?.map((languageLink) => (
            <p key={languageLink.lang}>
              <a
                href={languageLink.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {languageLink.name} ({languageLink.lang})
              </a>
            </p>
          ))}
        </>
      ),
    })) || [];

  return (
    <div className="prose mx-auto my-4 max-w-screen-xl rounded-lg border bg-white p-6">
      <h1>Contact</h1>
      <p>
        Sintio ensures that charging stations for electric vehicles in
        properties run smoothly – reliably, flexibly, throughout Switzerland.
        Our sintio.flow software not only takes care of the operation of the
        charging infrastructure, but also invoices the charging energy directly
        to the users and offers fast and competent support in the event of
        technical problems.
      </p>
      <p>
        Sintio AG
        <br />
        Kantonsstrasse 25
        <br />
        8807 Freienbach
        <br />
        Schweiz
      </p>
      <p>
        Phone: <a href="tel:+41555053018">+41 55 505 30 18</a>
        <br />
        Email: <a href="mailto:info@sintio.ch">info@sintio.ch</a>
      </p>
      <p>
        Visit our website:{" "}
        <a
          href="https://www.sintio.ch"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.sintio.ch
        </a>
        <br />
        Access our portal:{" "}
        <a
          href="https://www.sintio.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.sintio.app
        </a>
      </p>
      <p>
        Download our app:
        <br />
        <a
          href="https://play.google.com/store/apps/details?id=com.sintio.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Android App
        </a>
        <br />
        <a
          href="https://apps.apple.com/us/app/sintio/id6504793744?platform=iphone"
          target="_blank"
          rel="noopener noreferrer"
        >
          iPhone App
        </a>
      </p>
      <h2>Terms and Conditions</h2>
      {error && <AlertDanger message={error} />}
      {isLoading ? <Spinner /> : <Table headers={headers} content={content} />}
    </div>
  );
}

export default Contact;
