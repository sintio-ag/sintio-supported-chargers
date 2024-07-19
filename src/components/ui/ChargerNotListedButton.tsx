const ChargerNotListedButton = () => {
  const subject = encodeURIComponent("Please list our charger");
  const body = encodeURIComponent(
    "Charge Point Vendor: Name it exactly how it does appear in OCPP BootNOtification\n" +
      "Charge Point Model: Name it exactly how it does appear in OCPP BootNOtification\n" +
      "Global Meter: Yes or No\n" +
      "Meter Class: A, B, or C\n" +
      "Connector 1 Type: CCS, CHAdeMO, Type 2, Type 1, Tesla\n" +
      "Connector 1 Current Type: DC or AC\n" +
      "Connector 1 Power: 11kW, 22kW, 50kW, 150kW, 350kW, 800V\n" +
      "Connector 2 Type: ...\n" +
      "Support URL:\n" +
      "Contact Email:\n" +
      "Contact Phone:\n",
  );

  return (
    <a
      href={`mailto:info@sintio.ch?subject=${subject}&body=${body}`}
      className="text-sintio-blue block rounded-lg bg-sintio-yellow px-4 py-3 text-center font-medium shadow hover:bg-sintio-light-blue-1 hover:text-white active:bg-sintio-light-blue-1 active:shadow-none md:inline"
    >
      Charger Not Listed?
    </a>
  );
};

export default ChargerNotListedButton;
