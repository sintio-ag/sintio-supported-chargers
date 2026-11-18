import type { RoamingPartner } from "../types/roamingPartner";

// OCPI parties are only unique by country code + party id, e.g. "SE*ESP".
export const partyKey = (countryCode: string, partyId: string) =>
  `${countryCode.trim().toUpperCase()}*${partyId.trim().toUpperCase()}`;

// Accepts "SE*ESP", "SE-ESP", "SE ESP" or "SEESP" and returns the normalized key.
export const parsePartyKey = (value: string): string | null => {
  const match = value
    .trim()
    .toUpperCase()
    .match(/^([A-Z]{2})[*\- ]?([A-Z0-9]{3})$/);
  return match ? partyKey(match[1], match[2]) : null;
};

export const buildPartyIndex = (partners: RoamingPartner[]) => {
  const index = new Map<string, RoamingPartner>();
  for (const partner of partners) {
    for (const party of partner.parties) {
      index.set(partyKey(party.countryCode, party.partyId), partner);
    }
  }
  return index;
};

export const findPartnerByParty = (
  index: Map<string, RoamingPartner>,
  value: string,
): RoamingPartner | undefined => {
  const key = parsePartyKey(value);
  return key ? index.get(key) : undefined;
};
