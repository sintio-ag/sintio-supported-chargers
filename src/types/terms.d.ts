type DefaultLink = {
  name: string;
  url: string;
};

type LanguageLink = {
  lang: string;
  name: string;
  url: string;
};

export type TermsAndConditions = {
  date: string;
  default: DefaultLink;
  languages: LanguageLink[];
};
