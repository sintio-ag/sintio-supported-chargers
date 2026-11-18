import { useMemo, useState } from "react";
import useFetch from "../hooks/useFetch";
import type { RoamingPartner } from "../types/roamingPartner";
import AlertDanger from "../components/ui/AlertDanger";
import Table from "../components/ui/Table";
import Spinner from "../components/ui/Spinner";
import {
  buildPartyIndex,
  findPartnerByParty,
  partyKey,
} from "../utils/roamingPartners";

const RoamingPartners = () => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const {
    data: roamingPartners,
    isLoading,
    error,
  } = useFetch<RoamingPartner[]>(`${baseUrl}/api/v2/roaming-partners.json`);

  const [search, setSearch] = useState("");

  const partyIndex = useMemo(
    () => buildPartyIndex(roamingPartners ?? []),
    [roamingPartners],
  );

  const headers = ["Logo", "Name", "Parties", "Roles", "Address", "Website"];

  const getLogoForPartner = (partner: RoamingPartner) =>
    partner.logos.find((entry) => entry.size === "100") || partner.logos[0];

  // A full party ID like "SE*ESP" or "SE-ESP" resolves to exactly one partner,
  // anything else is a free text search over name, legal name, city and parties
  const searchTerm = search.trim().toLowerCase();
  const partyMatch = searchTerm
    ? findPartnerByParty(partyIndex, searchTerm)
    : undefined;
  const filteredPartners = partyMatch
    ? [partyMatch]
    : searchTerm
      ? roamingPartners?.filter((partner) =>
          [
            partner.name,
            partner.legalName,
            partner.city,
            partner.country,
            ...partner.parties.map((party) =>
              partyKey(party.countryCode, party.partyId),
            ),
          ].some((value) => value?.toLowerCase().includes(searchTerm)),
        )
      : roamingPartners;

  const content =
    filteredPartners?.map((partner) => ({
      Logo: (() => {
        const logo = getLogoForPartner(partner);

        if (partner.logoUrlSvg) {
          return (
            <img
              src={partner.logoUrlSvg}
              alt={`${partner.name} logo`}
              className="h-auto max-h-[50px] w-auto max-w-[50px]"
              loading="lazy"
            />
          );
        }

        if (!logo) {
          return <span className="text-xs text-gray-400">No logo</span>;
        }

        return (
          <picture>
            <source srcSet={logo.urlWebp} type="image/webp" />
            <img
              src={logo.urlPng}
              alt={`${partner.name} logo`}
              className="h-auto max-h-[50px] w-auto max-w-[50px]"
              loading="lazy"
            />
          </picture>
        );
      })(),
      Name: (
        <>
          {partner.name}
          {partner.legalName && (
            <span className="block text-xs">{partner.legalName}</span>
          )}
        </>
      ),
      Parties: (
        <>
          {partner.parties.map((party) => (
            <code
              className="mb-1 block whitespace-nowrap last:mb-0"
              key={partyKey(party.countryCode, party.partyId)}
            >
              {partyKey(party.countryCode, party.partyId)}
            </code>
          ))}
        </>
      ),
      Roles: partner.roles
        .map((role) => (role === "EMSP" ? "eMSP" : role))
        .join(", "),
      Address: (
        <>
          {partner.street && <span className="block">{partner.street}</span>}
          <span className="block whitespace-nowrap">
            {[partner.postalCode, partner.city].filter(Boolean).join(" ")}
          </span>
          <span className="block text-xs">{partner.country}</span>
        </>
      ),
      Website: partner.website?.startsWith("http") ? (
        <a
          href={partner.website}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sintio-dark-blue underline"
        >
          {new URL(partner.website).hostname.replace(/^www\./, "")}
        </a>
      ) : (
        partner.website
      ),
    })) || [];

  return (
    <div className="max-w-screen-xxl prose mx-auto my-4 rounded-lg border bg-white p-6">
      <h1>Roaming Partners</h1>
      <p>
        Active OCPI roaming partners of Sintio. Drivers of these eMSPs can
        charge at Sintio charging stations. A partner can operate several OCPI
        parties, each identified by a country code and a party ID (e.g.{" "}
        <code>SE*ESP</code>).
      </p>
      <input
        type="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search name, city or party ID (e.g. SE*ESP)"
        className="my-4 w-96 max-w-full rounded-lg border bg-white px-3 py-2 text-sm text-gray-600 outline-none focus:ring-2 focus:ring-sintio-dark-blue focus:ring-offset-2"
      />
      {error && <AlertDanger message={error} />}
      {isLoading ? <Spinner /> : <Table headers={headers} content={content} />}
    </div>
  );
};

export default RoamingPartners;
