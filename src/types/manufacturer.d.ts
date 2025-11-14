type SupportCompany = {
  id: string;
  company: string;
  websiteUrl: string;
  email: string;
  phone: string;
};

type SupportByCountry = {
  country: string;
  countryCode: string;
  supportCompanies: SupportCompany[];
};

type Logo = {
  urlPng: string;
  urlWebp: string;
  size: string;
};

export type Manufacturer = {
  id: string;
  name: string;
  websiteUrl: string;
  chargerManagementUrl: string | null;
  statusPageUrl: string | null;
  globalSupportUrl: string | null;
  supportByCountry?: SupportByCountry[];
  logos: Logo[];
};
