type DefaultLink = {
  name: string;
  url: string;
  changelog?: string[];
};

type LanguageLink = {
  lang: string;
  name: string;
  url: string;
  changelog?: string[];
};

export type TermsAndConditions = {
  date: string;
  default: DefaultLink;
  languages?: LanguageLink[];
};

export type PrivacyPolicy = {
  date: string;
  default: DefaultLink;
  languages?: LanguageLink[];
};
