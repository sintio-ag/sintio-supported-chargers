import Table from "../components/ui/Table";
import AlertInfo from "../components/ui/AlertInfo";

function ApiDocumentation() {
  const powerTypeHeaders = ["Value", "Description"];
  const powerTypeContent = [
    {
      Value: "AC_1_PHASE",
      Description: "AC single phase.",
    },
    {
      Value: "AC_2_PHASE",
      Description:
        "AC two phases, only two of the three available phases connected.",
    },
    {
      Value: "AC_2_PHASE_SPLIT",
      Description: "AC two phases using split phase system.",
    },
    {
      Value: "AC_3_PHASE",
      Description: "AC three phases.",
    },
    {
      Value: "DC",
      Description: "Direct Current.",
    },
  ];

  const connectorFormatHeaders = ["Value", "Description"];
  const connectorFormatContent = [
    {
      Value: "SOCKET",
      Description:
        "The connector is a socket; the EV user needs to bring a fitting plug.",
    },
    {
      Value: "CABLE",
      Description:
        "The connector is an attached cable; the EV users car needs to have a fitting inlet.",
    },
  ];

  const connectorTypeHeaders = ["Value", "Description"];
  const connectorTypeContent = [
    { Value: "CHADEMO", Description: "The connector type is CHAdeMO, DC" },
    {
      Value: "CHAOJI",
      Description:
        "The ChaoJi connector. The new generation charging connector, harmonized between CHAdeMO and GB/T. DC.",
    },
    {
      Value: "DOMESTIC_A",
      Description: 'Standard/Domestic household, type "A", NEMA 1-15, 2 pins',
    },
    {
      Value: "DOMESTIC_B",
      Description: 'Standard/Domestic household, type "B", NEMA 5-15, 3 pins',
    },
    {
      Value: "DOMESTIC_C",
      Description: 'Standard/Domestic household, type "C", CEE 7/17, 2 pins',
    },
    {
      Value: "DOMESTIC_D",
      Description: 'Standard/Domestic household, type "D", 3 pin',
    },
    {
      Value: "DOMESTIC_E",
      Description: 'Standard/Domestic household, type "E", CEE 7/5 3 pins',
    },
    {
      Value: "DOMESTIC_F",
      Description:
        'Standard/Domestic household, type "F", CEE 7/4, Schuko, 3 pins',
    },
    {
      Value: "DOMESTIC_G",
      Description:
        'Standard/Domestic household, type "G", BS 1363, Commonwealth, 3 pins',
    },
    {
      Value: "DOMESTIC_H",
      Description: 'Standard/Domestic household, type "H", SI-32, 3 pins',
    },
    {
      Value: "DOMESTIC_I",
      Description: 'Standard/Domestic household, type "I", AS 3112, 3 pins',
    },
    {
      Value: "DOMESTIC_J",
      Description: 'Standard/Domestic household, type "J", SEV 1011, 3 pins',
    },
    {
      Value: "DOMESTIC_K",
      Description:
        'Standard/Domestic household, type "K", DS 60884-2-D1, 3 pins',
    },
    {
      Value: "DOMESTIC_L",
      Description:
        'Standard/Domestic household, type "L", CEI 23-16-VII, 3 pins',
    },
    {
      Value: "DOMESTIC_M",
      Description: 'Standard/Domestic household, type "M", BS 546, 3 pins',
    },
    {
      Value: "DOMESTIC_N",
      Description: 'Standard/Domestic household, type "N", NBR 14136, 3 pins',
    },
    {
      Value: "DOMESTIC_O",
      Description:
        'Standard/Domestic household, type "O", TIS 166-2549, 3 pins',
    },
    {
      Value: "GBT_AC",
      Description: "Guobiao GB/T 20234.2 AC socket/connector",
    },
    { Value: "GBT_DC", Description: "Guobiao GB/T 20234.3 DC connector" },
    {
      Value: "IEC_60309_2_single_16",
      Description:
        "IEC 60309-2 Industrial Connector single phase 16 amperes (usually blue)",
    },
    {
      Value: "IEC_60309_2_three_16",
      Description:
        "IEC 60309-2 Industrial Connector three phases 16 amperes (usually red)",
    },
    {
      Value: "IEC_60309_2_three_32",
      Description:
        "IEC 60309-2 Industrial Connector three phases 32 amperes (usually red)",
    },
    {
      Value: "IEC_60309_2_three_64",
      Description:
        "IEC 60309-2 Industrial Connector three phases 64 amperes (usually red)",
    },
    { Value: "IEC_62196_T1", Description: 'IEC 62196 Type 1 "SAE J1772"' },
    { Value: "IEC_62196_T1_COMBO", Description: "Combo Type 1 based, DC" },
    { Value: "IEC_62196_T2", Description: 'IEC 62196 Type 2 "Mennekes"' },
    { Value: "IEC_62196_T2_COMBO", Description: "Combo Type 2 based, DC" },
    { Value: "IEC_62196_T3A", Description: "IEC 62196 Type 3A" },
    { Value: "IEC_62196_T3C", Description: 'IEC 62196 Type 3C "Scame"' },
    { Value: "NEMA_5_20", Description: "NEMA 5-20, 3 pins" },
    { Value: "NEMA_6_30", Description: "NEMA 6-30, 3 pins" },
    { Value: "NEMA_6_50", Description: "NEMA 6-50, 3 pins" },
    { Value: "NEMA_10_30", Description: "NEMA 10-30, 3 pins" },
    { Value: "NEMA_10_50", Description: "NEMA 10-50, 3 pins" },
    { Value: "NEMA_14_30", Description: "NEMA 14-30, 3 pins, rating of 30 A" },
    { Value: "NEMA_14_50", Description: "NEMA 14-50, 3 pins, rating of 50 A" },
    {
      Value: "PANTOGRAPH_BOTTOM_UP",
      Description: "On-board Bottom-up-Pantograph typically for bus charging",
    },
    {
      Value: "PANTOGRAPH_TOP_DOWN",
      Description: "Off-board Top-down-Pantograph typically for bus charging",
    },
    {
      Value: "TESLA_R",
      Description: 'Tesla Connector "Roadster"-type (round, 4 pin)',
    },
    {
      Value: "TESLA_S",
      Description: 'Tesla Connector "Model-S"-type (oval, 5 pin)',
    },
  ];

  return (
    <div className="prose mx-auto my-4 max-w-screen-xl rounded-lg border bg-white p-6">
      <h1>API Documentation</h1>
      <AlertInfo message="This documentation is for the v2 API." />
      <h2>Chargers</h2>
      <p>
        <code>GET</code>{" "}
        <a
          href="https://sintio-ag.github.io/sintio-supported-chargers/api/v2/chargers.json"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://sintio-ag.github.io/sintio-supported-chargers/api/v2/chargers.json
        </a>
      </p>
      <p>
        The charger object returned by the API contains the following fields:
      </p>
      <ul>
        <li>
          <strong>id</strong> (string): A unique identifier for the charger.
        </li>
        <li>
          <strong>manufacturerId</strong> (string): The identifier of the
          manufacturer. Use this to link to the manufacturer object.
        </li>
        <li>
          <strong>chargePointVendor</strong> (string): The name of the charger's
          vendor exactly as it appears in OCPP BootNotification.
        </li>
        <li>
          <strong>chargePointModel</strong> (array of strings): The model of the
          charger exactly as it appears in OCPP BootNotification. Since some
          vendors have multiple models with the same specs, this field is an
          array (introduces with v2 API, before it was a string).
        </li>
        <li>
          <strong>globalMeter</strong> (boolean): Indicates if the charger has a
          global meter (true or false). A global meter is an electric meter that
          continuously measures energy usage. The end of one charging session
          marks the beginning of the next.
        </li>
        <li>
          <strong>meterClass</strong> (string): Meter classes for electric
          meters of EV chargers refer to the accuracy classes of these meters.
          IEC 62053-21 uses classes 0.5, 1, and 2 for accuracy specifications
          (±0.5%, ±1%, ±2%). MID: Uses classes A ±2% (similar to IEC Class 2), B
          ±1% (similar to IEC Class 1), and C ±0.5% (similar to IEC Class 0.5),
          which correspond to classes 2, 1, and 0.5 of the IEC standard,
          respectively. EN 50470 is the European standard used in conjunction
          with MID for electronic electricity meters, defining similar accuracy
          classes (A, B, and C) for regulatory and billing purposes.
        </li>
        <li>
          <strong>connectors</strong> (array of objects): An array of objects
          describing the connectors available on the charger, based on{" "}
          <a
            href="https://github.com/ocpi/ocpi/blob/master/mod_locations.asciidoc#mod_locations_connector_object"
            target="_blank"
            rel="noopener noreferrer"
          >
            OCPI connector object
          </a>
          . Each connector object includes:
          <ul>
            <li>
              <strong>connectorId</strong> (number): A unique identifier for the
              connector, that comes from OCPP (first connector starts with 1).
            </li>
            <li>
              <strong>standard</strong> (string): The standard of the connector.
              <Table
                headers={connectorTypeHeaders}
                content={connectorTypeContent}
              />
            </li>
            <li>
              <strong>format</strong> (string): The format of the connector,
              whether it is a socket or a plug.
              <Table
                headers={connectorFormatHeaders}
                content={connectorFormatContent}
              />
            </li>
            <li>
              <strong>powerType</strong> (string): The type of power.
              <Table headers={powerTypeHeaders} content={powerTypeContent} />
            </li>
            <li>
              <strong>voltage</strong> (number): The voltage in volts.
            </li>
            <li>
              <strong>amperage</strong> (number): The amperage in amperes.
            </li>
            <li>
              <strong>maxElectricPower</strong> (number): The maximum electric
              power in watts.
            </li>
            <li>
              <strong>imageUrlSvg</strong> (string): The URL of the SVG image
              that shows how the connector looks (introduces with v2 API). If
              the connector standard is unknown, a default image is provided for
              use.
              <br />
              <a
                href="https://sintio-ag.github.io/sintio-supported-chargers/img/connectors/connector-unknown.svg"
                target="_blank"
              >
                https://sintio-ag.github.io/sintio-supported-chargers/img/connectors/connector-unknown.svg
              </a>{" "}
              (947 B)
            </li>
          </ul>
        </li>
        <li>
          <strong>images</strong> (array of objects): An array of objects
          containing URLs to images of the charger. Each image object includes:
          <ul>
            <li>
              <strong>urlPng</strong> (string): The URL to the PNG image.
            </li>
            <li>
              <strong>urlWebp</strong> (string): The URL to the WebP image.
            </li>
            <li>
              <strong>size</strong> (string): The size of the image (e.g.,
              "original", "500" for max size of 500px, "100" for max size of
              100px, "50" for max size of 50px).
            </li>
          </ul>
        </li>
      </ul>
      <p>
        If a charger cannot be found in the endpoint, a default image is
        provided for use. This default image is available in both PNG and WebP
        formats.
      </p>
      <ul>
        <li>
          <a
            href="https://sintio-ag.github.io/sintio-supported-chargers/img/default/default-charger_50.png"
            target="_blank"
          >
            https://sintio-ag.github.io/sintio-supported-chargers/img/default/default-charger_50.png
          </a>{" "}
          (1.99 kB)
        </li>
        <li>
          <a
            href="https://sintio-ag.github.io/sintio-supported-chargers/img/default/default-charger_50.webp"
            target="_blank"
          >
            https://sintio-ag.github.io/sintio-supported-chargers/img/default/default-charger_50.webp
          </a>{" "}
          (824 B)
        </li>
        <li>
          <a
            href="https://sintio-ag.github.io/sintio-supported-chargers/img/default/default-charger_100.png"
            target="_blank"
          >
            https://sintio-ag.github.io/sintio-supported-chargers/img/default/default-charger_100.png
          </a>{" "}
          (3.65 kB)
        </li>
        <li>
          <a
            href="https://sintio-ag.github.io/sintio-supported-chargers/img/default/default-charger_100.webp"
            target="_blank"
          >
            https://sintio-ag.github.io/sintio-supported-chargers/img/default/default-charger_100.webp
          </a>{" "}
          (1.67 kB)
        </li>
        <li>
          <a
            href="https://sintio-ag.github.io/sintio-supported-chargers/img/default/default-charger_500.png"
            target="_blank"
          >
            https://sintio-ag.github.io/sintio-supported-chargers/img/default/default-charger_500.png
          </a>{" "}
          (38.78 kB)
        </li>
        <li>
          <a
            href="https://sintio-ag.github.io/sintio-supported-chargers/img/default/default-charger_500.webp"
            target="_blank"
          >
            https://sintio-ag.github.io/sintio-supported-chargers/img/default/default-charger_500.webp
          </a>{" "}
          (10.58 kB)
        </li>
        <li>
          <a
            href="https://sintio-ag.github.io/sintio-supported-chargers/img/default/default-charger_orig.png"
            target="_blank"
          >
            https://sintio-ag.github.io/sintio-supported-chargers/img/default/default-charger_orig.png
          </a>{" "}
          (247.51 kB)
        </li>
        <li>
          <a
            href="https://sintio-ag.github.io/sintio-supported-chargers/img/default/default-charger_orig.webp"
            target="_blank"
          >
            https://sintio-ag.github.io/sintio-supported-chargers/img/default/default-charger_orig.webp
          </a>{" "}
          (32.39 kB)
        </li>
      </ul>
      <h2>Manufacturers</h2>
      <p>
        <code>GET</code>{" "}
        <a
          href="https://sintio-ag.github.io/sintio-supported-chargers/api/v2/manufacturers.json"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://sintio-ag.github.io/sintio-supported-chargers/api/v2/manufacturers.json
        </a>
      </p>
      <p>
        The manufacturer object returned by the API contains the following
        fields:
      </p>
      <ul>
        <li>
          <strong>id</strong> (string): A unique identifier for the
          manufacturer.
        </li>
        <li>
          <strong>name</strong> (string): The official name of the manufacturer.
        </li>
        <li>
          <strong>websiteUrl</strong> (string): The URL to the manufacturer's
          website.
        </li>
        <li>
          <strong>chargerManagementUrl</strong> (string): The URL to the
          manufacturer's charger management portal. Not every charger comes with
          an management portal.
        </li>
        <li>
          <strong>statusPageUrl</strong> (string): The URL to the manufacturer's
          status page. Not every manufacturer provides a status page.
        </li>
        <li>
          <strong>globalSupportUrl</strong> (string): The URL to the
          manufacturer's global support page.
        </li>
        <li>
          <strong>supportByCountry</strong> (array of objects, optional): An
          array of objects detailing support options by country. Each object
          includes:
          <ul>
            <li>
              <strong>country</strong> (string): The name of the country.
            </li>
            <li>
              <strong>countryCode</strong> (string): The country code according
              to the ISO 3166-1 alpha-2 standard. CH for Switzerland, DE for
              Germany, etc.
            </li>
            <li>
              <strong>supportCompanies</strong> (array of objects): An array of
              objects detailing the support companies. Each company object
              includes:
              <ul>
                <li>
                  <strong>id</strong> (string): A unique identifier for the
                  support company.
                </li>
                <li>
                  <strong>company</strong> (string): The name of the support
                  company.
                </li>
                <li>
                  <strong>websiteUrl</strong> (string): The URL to the support
                  company's website.
                </li>
                <li>
                  <strong>email</strong> (string): The support email address.
                </li>
                <li>
                  <strong>phone</strong> (string): The support phone number.
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
      <h2>Configuration Keys</h2>
      <p>
        <code>GET</code>{" "}
        <a
          href="https://sintio-ag.github.io/sintio-supported-chargers/api/v2/ocpp16-configuration-keys.json"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://sintio-ag.github.io/sintio-supported-chargers/api/v2/ocpp16-configuration-keys.json
        </a>
      </p>
      <p>
        The OCPP 1.6 configuration key object returned by the API contains the
        following fields:
      </p>
      <ul>
        <li>
          <strong>name</strong> (string): The name of the OCPP 1.6 configuration
          key. It can be a standard or a custom key.
        </li>
        <li>
          <strong>requried</strong> (boolean): True if it is a OCPP 1.6 standard
          key that must be implemented by the charge point.
        </li>
        <li>
          <strong>read</strong> (boolean): Indicates if the key is readable.
        </li>
        <li>
          <strong>write</strong> (boolean): Indicates if the key is writable.
        </li>
        <li>
          <strong>type</strong> (string): The type of the configuration key.
          Standard types are <code>boolean</code>, <code>CSL</code> (Comma
          Separated List) and <code>integer</code>.
        </li>
        <li>
          <strong>defaultValue</strong> (string): The default value, recommended
          by Sintio for smooth operation.
        </li>
        <li>
          <strong>unit</strong> (string): The unit of the configuration key, if
          applicable.
        </li>
        <li>
          <strong>description</strong> (string): A description of the
          configuration key.
        </li>
        <li>
          <strong>origin</strong> (string): The origin of the configuration key.
          Is OCPP or if a custom key, the ID of the vendor.
        </li>
      </ul>
      <h2>Terms and Conditions Details</h2>
      <p>
        <code>GET</code>{" "}
        <a
          href="https://sintio-ag.github.io/sintio-supported-chargers/api/v2/terms-and-conditions.json"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://sintio-ag.github.io/sintio-supported-chargers/api/v2/terms-and-conditions.json
        </a>
      </p>
      <p>
        The terms and conditions are available in multiple languages. The
        default document/link is always present and serves as a placeholder if a
        requested language from the language array is not available. An entry of
        the terms and conditions array looks as follows:
      </p>
      <ul>
        <li>
          <strong>date</strong> (string): The date when the terms and conditions
          were published, in the format YYYY-MM-DD (
          <a
            href="https://en.wikipedia.org/wiki/ISO_8601"
            target="_blank"
            rel="noopener noreferrer"
          >
            ISO 8601
          </a>
          ). This is like the version number. The newer the date, the newer the
          document/link. The document/link with the latest date is the most
          recent one and the one to be used.
        </li>
        <li>
          <strong>default</strong> (object): The default terms and conditions
          document/link.
          <ul>
            <li>
              <strong>name</strong> (string): The name of the default
              document/link.
            </li>
            <li>
              <strong>url</strong> (string): The URL to the default
              document/link.
            </li>
            <li>
              <strong>changelog</strong> (array of strings, optional):A list of
              changes or updates made to the document/link compared to the
              previous version.
            </li>
          </ul>
        </li>
        <li>
          <strong>languages</strong> (array of objects, optional): The terms and
          conditions documents/links in different languages.
          <ul>
            <li>
              <strong>lang</strong> (string): The two-character language code
              (e.g., "de" for German, "fr" for French) as per{" "}
              <a
                href="https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes"
                target="_blank"
              >
                ISO 639-1
              </a>
              .
            </li>
            <li>
              <strong>name</strong> (string): The name of the document/link in
              the specified language.
            </li>
            <li>
              <strong>url</strong> (string): The URL to the document/link in the
              specified language.
            </li>
            <li>
              <strong>changelog</strong> (array of strings, optional):A list of
              changes or updates made to the document/link compared to the
              previous version.
            </li>
          </ul>
        </li>
      </ul>
      <h2>Privacy Policy Details</h2>
      <p>
        <code>GET</code>{" "}
        <a
          href="https://sintio-ag.github.io/sintio-supported-chargers/api/v2/privacy-policy.json"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://sintio-ag.github.io/sintio-supported-chargers/api/v2/privacy-policy.json
        </a>
      </p>
      <p>
        The privacy policy is available in multiple languages. The default
        document/link is always present and serves as a placeholder if a
        requested language from the language array is not available. Below are
        the links to the privacy policy in different languages:
      </p>
      <ul>
        <li>
          <strong>date</strong> (string): The date when the privacy policy was
          published, in the format YYYY-MM-DD (
          <a
            href="https://en.wikipedia.org/wiki/ISO_8601"
            target="_blank"
            rel="noopener noreferrer"
          >
            ISO 8601
          </a>
          ). This is like the version number. The newer the date, the newer the
          document/link. The document/link with the latest date is the most
          recent one and the one to be used.
        </li>
        <li>
          <strong>default</strong> (object): The default privacy policy
          document/link.
          <ul>
            <li>
              <strong>name</strong> (string): The name of the default
              document/link.
            </li>
            <li>
              <strong>url</strong> (string): The URL to the default
              document/link.
            </li>
            <li>
              <strong>changelog</strong> (array of strings, optional):A list of
              changes or updates made to the document/link compared to the
              previous version.
            </li>
          </ul>
        </li>
        <li>
          <strong>languages</strong> (array of objects, optional): The privacy
          policy documents/links in different languages.
          <ul>
            <li>
              <strong>lang</strong> (string): The two-character language code
              (e.g., "de" for German, "fr" for French) as per ISO 639-1.
            </li>
            <li>
              <strong>name</strong> (string): The name of the document/link in
              the specified language.
            </li>
            <li>
              <strong>url</strong> (string): The URL to the document/link in the
              specified language.
            </li>
            <li>
              <strong>changelog</strong> (array of strings, optional): A list of
              changes or updates made to the document/link compared to the
              previous version.
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default ApiDocumentation;
