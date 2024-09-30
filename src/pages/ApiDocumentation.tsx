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
          <strong>chargePointModel</strong> (string): The model of the charger
          exactly as it appears in OCPP BootNotification.
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
          <strong>connectors</strong> (array): An array of objects describing
          the connectors available on the charger, based on{" "}
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
              connector.
            </li>
            <li>
              <strong>standard</strong> (string): The standard of the connector
              (e.g. <code>IEC_62196_T2</code>).
            </li>
            <li>
              <strong>format</strong> (string): The format of the connector. Can
              be <code>CABLE</code> or <code>SOCKET</code>.
            </li>
            <li>
              <strong>powerType</strong> (string): The type of power. Can be{" "}
              <code>AC_1_PHASE</code>, <code>AC_3_PHASE</code> or{" "}
              <code>DC</code>.
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
          </ul>
        </li>
        <li>
          <strong>images</strong> (array): An array of objects containing URLs
          to images of the charger. Each image object includes:
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
          <strong>supportByCountry</strong> (array): An array of objects
          detailing support options by country. Each object includes:
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
              <strong>supportCompanies</strong> (array): An array of objects
              detailing the support companies. Each company object includes:
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
    </div>
  );
}

export default ApiDocumentation;
