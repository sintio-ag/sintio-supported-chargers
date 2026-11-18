type Logo = {
  urlPng: string;
  urlWebp: string;
  size: string;
};

export type OcpiRole =
  "CPO" | "EMSP" | "HUB" | "NSP" | "SCSP" | "NAP" | "OTHER";

export type RoamingPartnerStatus = "ACTIVE";

export type RoamingPartnerParty = {
  countryCode: string; // ISO 3166-1 alpha-2, e.g. "SE"
  partyId: string; // 3 characters, e.g. "ESP"
  role: OcpiRole;
  name: string | null;
};

export type RoamingPartner = {
  id: string;
  name: string;
  legalName: string | null;
  street: string | null;
  postalCode: string | null;
  city: string | null;
  country: string; // ISO 3166-1 alpha-2 of the legal entity, may differ from party country codes
  vatId: string | null;
  website: string | null;
  roles: OcpiRole[];
  status: RoamingPartnerStatus;
  parties: RoamingPartnerParty[]; // unique by countryCode + partyId
  logos: Logo[]; // empty when no logo is available
  logoUrlSvg: string | null; // null when the original is only a pixel graphic
};
