function ApiDocumentation() {
  return (
    <div className="prose">
      <h1>API Documentation</h1>
      <p>Below are the GET endpoints available.</p>
      <h2>Chargers</h2>
      <p>
        <code>GET</code>{" "}
        <a
          href="https://sintio-ag.github.io/sintio-supported-chargers/api/v1/chargers.json"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://sintio-ag.github.io/sintio-supported-chargers/api/v1/chargers.json
        </a>
      </p>
      <p>
        The charger object returned by the API contains the following fields:
      </p>
      <ul>
        <li>
          <strong>id</strong>: A unique identifier for the charger.
        </li>
        <li>
          <strong>manufacturerId</strong>: The identifier of the manufacturer.
          Use this to link to the manufacturer object.
        </li>
        <li>
          <strong>chargePointVendor</strong>: The name of the charger's vendor
          exactly as it appears in OCPP BootNotification.
        </li>
        <li>
          <strong>chargePointModel</strong>: The model of the charger exactly as
          it appears in OCPP BootNotification.
        </li>
        <li>
          <strong>globalMeter</strong>: Indicates if the charger has a global
          meter (true or false). A global meter is an electric meter that
          continuously measures energy usage. The end of one charging session
          marks the beginning of the next.
        </li>
        <li>
          <strong>meterClass</strong>: Meter classes A, B, and C for electric
          meters of EV chargers refer to the accuracy classes of these meters.
          These classes are defined by standards such as the IEC 62053-21 and
          the MID (Measuring Instruments Directive) in Europe. Class A meters
          have the lowest accuracy among the three classes, typically within
          ±2.5% of the true value for active energy. Class B meters offer medium
          accuracy, usually within ±1% of the true value for active energy.
          Class C meters have the highest accuracy, generally within ±0.5% of
          the true value for active energy.
        </li>
        <li>
          <strong>connectors</strong>: An array of objects describing the
          connectors available on the charger. Each connector object includes:
          <ul>
            <li>
              <strong>connectorId</strong>: A unique identifier for the
              connector. The first connector must have an ID of 1.
            </li>
            <li>
              <strong>connectorType</strong>: The type of the connector (e.g.,
              "Type2" ore "TypeE").
            </li>
            <li>
              <strong>maxPowerKw</strong>: The maximum power output of the
              connector in kilowatts. Typically 11, 22, or for example 150 kW.
            </li>
            <li>
              <strong>currentType</strong>: The type of current ("AC" or "DC").
            </li>
          </ul>
        </li>
        <li>
          <strong>images</strong>: An array of objects containing URLs to images
          of the charger. Each image object includes:
          <ul>
            <li>
              <strong>urlPng</strong>: The URL to the PNG image.
            </li>
            <li>
              <strong>urlWebp</strong>: The URL to the WebP image.
            </li>
            <li>
              <strong>size</strong>: The size of the image (e.g., "original",
              "500" for max size of 500px, "100" for max size of 100px, "50" for
              max size of 50px).
            </li>
          </ul>
        </li>
      </ul>
      <h2>Manufacturers</h2>
      <p>
        <code>GET</code>{" "}
        <a
          href="https://sintio-ag.github.io/sintio-supported-chargers/api/v1/manufacturers.json"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://sintio-ag.github.io/sintio-supported-chargers/api/v1/manufacturers.json
        </a>
      </p>
      <p>
        The manufacturer object returned by the API contains the following
        fields:
      </p>
      <ul>
        <li>
          <strong>id</strong>: A unique identifier for the manufacturer.
        </li>
        <li>
          <strong>name</strong>: The official name of the manufacturer.
        </li>
        <li>
          <strong>websiteUrl</strong>: The URL to the manufacturer's website.
        </li>
        <li>
          <strong>chargerManagementUrl</strong>: The URL to the manufacturer's
          charger management portal. Not every charger comes with an management
          portal.
        </li>
        <li>
          <strong>statusPageUrl</strong>: The URL to the manufacturer's status
          page. Not every manufacturer provides a status page.
        </li>
        <li>
          <strong>globalSupportUrl</strong>: The URL to the manufacturer's
          global support page.
        </li>
        <li>
          <strong>supportByCountry</strong>: An array of objects detailing
          support options by country. Each object includes:
          <ul>
            <li>
              <strong>country</strong>: The name of the country.
            </li>
            <li>
              <strong>countryCode</strong>: The country code according to the
              ISO 3166-1 alpha-2 standard. CH for Switzerland, DE for Germany,
              etc.
            </li>
            <li>
              <strong>supportCompanies</strong>: An array of objects detailing
              the support companies. Each company object includes:
              <ul>
                <li>
                  <strong>id</strong>: A unique identifier for the support
                  company.
                </li>
                <li>
                  <strong>company</strong>: The name of the support company.
                </li>
                <li>
                  <strong>websiteUrl</strong>: The URL to the support company's
                  website.
                </li>
                <li>
                  <strong>email</strong>: The support email address.
                </li>
                <li>
                  <strong>phone</strong>: The support phone number.
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default ApiDocumentation;
