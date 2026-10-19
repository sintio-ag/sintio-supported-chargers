type Logo = {
  urlPng: string;
  urlWebp: string;
  size: string;
};

export type PowerUtilityStatus = "ACTIVE" | "NO_TARIFFS_2027";

export type PowerUtilityVse = {
  vseId: number;
  identifier: string;
  name: string;
};

export type PowerUtility = {
  id: string;
  elcomId: number;
  vse: PowerUtilityVse[]; // empty when no VSE identifier is known
  name: string;
  nameAddition: string | null;
  uid: string | null;
  street: string | null;
  postalCode: string | null;
  city: string | null;
  website: string | null;
  status: PowerUtilityStatus;
  comment: string | null;
  logos: Logo[]; // empty when no logo is available
};
