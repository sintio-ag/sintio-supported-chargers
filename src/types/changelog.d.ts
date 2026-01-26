export type Language = "en" | "de" | "fr" | "it";

export type ChangelogCategory = "portal" | "public" | "mobile" | "api";

export type SectionType = "features" | "bugfixes" | "enhancements";

type LanguageSections = Record<SectionType, string[]>;

type Sections = {
  en: LanguageSections;
  de?: LanguageSections;
  fr?: LanguageSections;
  it?: LanguageSections;
};

export type ChangelogEntry = {
  version?: string;
  date: string; // ISO date format (YYYY-MM-DD)
  category: ChangelogCategory;
  sections: Sections;
};

export type Changelog = ChangelogEntry[];

// Helper type for category display names
export type CategoryDisplayNames = {
  [key in ChangelogCategory]: {
    [lang in Language]: string;
  };
};

// Metadata configuration
export type ChangelogMeta = {
  categories: CategoryDisplayNames;
  supportedLanguages: Language[];
};
