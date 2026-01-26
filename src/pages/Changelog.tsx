import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import type {
  Changelog,
  ChangelogCategory,
  ChangelogEntry,
  Language,
  SectionType,
} from "../types/changelog";
import AlertDanger from "../components/ui/AlertDanger";
import Spinner from "../components/ui/Spinner";
import * as Select from "@radix-ui/react-select";

const languageOrder: Language[] = ["en", "de", "fr", "it"];

const languageLabels: Record<Language, string> = {
  en: "English",
  de: "Deutsch",
  fr: "Français",
  it: "Italiano",
};

const sectionOrder: SectionType[] = ["features", "bugfixes", "enhancements"];

const sectionIcons: Record<SectionType, string> = {
  features: "🚀",
  bugfixes: "🐛",
  enhancements: "✨",
};

const sectionLabels: Record<Language, Record<SectionType, string>> = {
  en: {
    features: "New Features",
    bugfixes: "Bug Fixes",
    enhancements: "Enhancements",
  },
  de: {
    features: "Neue Funktionen",
    bugfixes: "Fehlerbehebungen",
    enhancements: "Verbesserungen",
  },
  fr: {
    features: "Nouvelles fonctionnalités",
    bugfixes: "Correctifs",
    enhancements: "Améliorations",
  },
  it: {
    features: "Nuove funzionalità",
    bugfixes: "Correzioni",
    enhancements: "Miglioramenti",
  },
};

const originOptions = [
  { value: "all", label: "All" },
  { value: "portal", label: "Sintio Portal" },
  { value: "public", label: "Sintio Public App" },
  { value: "mobile", label: "Sintio Mobile App" },
  { value: "api", label: "Sintio Partner API" },
];

type OriginFilter = (typeof originOptions)[number]["value"];

type EntryTabsProps = {
  sections: ChangelogEntry["sections"];
};

const renderInlineMarkup = (text: string) => {
  const tokens = text.split(/(\*\*|\*)/g).filter(Boolean);
  let bold = false;
  let italic = false;

  return tokens.map((token, index) => {
    if (token === "**") {
      bold = !bold;
      return null;
    }
    if (token === "*") {
      italic = !italic;
      return null;
    }

    const content = token;
    if (bold) {
      return <strong key={`${content}-${index}`}>{content}</strong>;
    }
    if (italic) {
      return <em key={`${content}-${index}`}>{content}</em>;
    }
    return <span key={`${content}-${index}`}>{content}</span>;
  });
};

const EntryTabs = ({ sections }: EntryTabsProps) => {
  const availableLanguages = languageOrder.filter((lang) => sections[lang]);
  const [activeLanguage, setActiveLanguage] = useState<Language>(
    availableLanguages[0] ?? "en",
  );

  useEffect(() => {
    if (!availableLanguages.includes(activeLanguage)) {
      setActiveLanguage(availableLanguages[0] ?? "en");
    }
  }, [sections, activeLanguage, availableLanguages]);

  const activeSections = sections[activeLanguage];

  return (
    <>
      <div className="mb-4 flex flex-wrap gap-2">
        {availableLanguages.map((lang) => (
          <button
            key={lang}
            type="button"
            onClick={() => setActiveLanguage(lang)}
            className={
              lang === activeLanguage
                ? "rounded-full border border-sintio-dark-blue bg-sintio-dark-blue px-3 py-1 text-sm text-white"
                : "rounded-full border border-gray-300 bg-white px-3 py-1 text-sm text-gray-700 hover:border-gray-400"
            }
          >
            {languageLabels[lang]}
          </button>
        ))}
      </div>
      {sectionOrder.map((section) => {
        const items = activeSections?.[section] ?? [];
        if (items.length === 0) return null;
        return (
          <div key={section}>
            <h3 className="flex items-center gap-2">
              <span aria-hidden="true">{sectionIcons[section]}</span>
              {sectionLabels[activeLanguage][section]}
            </h3>
            <ul>
              {items.map((item) => (
                <li key={item}>{renderInlineMarkup(item)}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </>
  );
};

const Changelog = () => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const {
    data: changelogs,
    isLoading,
    error,
  } = useFetch<Changelog>(`${baseUrl}/api/v2/changelog.json`);

  const location = useLocation();
  const navigate = useNavigate();
  const [selectedOrigin, setSelectedOrigin] = useState<OriginFilter>("all");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const origin = (params.get("origin") ?? "all") as OriginFilter;
    const isValid = originOptions.some((option) => option.value === origin);
    setSelectedOrigin(isValid ? origin : "all");
  }, [location.search]);

  const handleOriginChange = (value: string) => {
    const nextValue = value as OriginFilter;
    setSelectedOrigin(nextValue);
    const params = new URLSearchParams(location.search);
    if (nextValue && nextValue !== "all") {
      params.set("origin", nextValue);
    } else {
      params.delete("origin");
    }
    const query = params.toString();
    navigate(query ? `${location.pathname}?${query}` : location.pathname);
  };

  const filteredChangelogs =
    selectedOrigin && selectedOrigin !== "all"
      ? changelogs?.filter((entry) => entry.category === selectedOrigin)
      : changelogs;

  const categoryLabel = (category: ChangelogCategory) => {
    switch (category) {
      case "portal":
        return "Sintio Portal";
      case "public":
        return "Sintio Public";
      case "mobile":
        return "Sintio Mobile App";
      case "api":
        return "Sintio Partner API";
      default:
        return category;
    }
  };

  return (
    <div className="prose mx-auto my-4 max-w-screen-xl rounded-lg border bg-white p-6">
      <h1>Changelog</h1>
      <Select.Root value={selectedOrigin} onValueChange={handleOriginChange}>
        <div className="mb-4 w-72 max-w-full">
          <Select.Trigger className="inline-flex w-full items-center justify-between rounded-lg border bg-white px-3 py-2 text-sm text-gray-600 outline-none focus:ring-2 focus:ring-sintio-dark-blue focus:ring-offset-2">
            <Select.Value placeholder="Select Origin" />
            <Select.Icon />
          </Select.Trigger>
          <Select.Content className="mt-3 max-h-64 w-[var(--radix-select-trigger-width)] overflow-y-auto rounded-lg border bg-white text-sm shadow-lg">
            <Select.ScrollUpButton />
            <Select.Viewport>
              {originOptions.map((option) => (
                <Select.Item
                  key={option.value}
                  value={option.value}
                  className="cursor-pointer px-3 py-2 hover:bg-gray-100"
                >
                  <Select.ItemText>{option.label}</Select.ItemText>
                </Select.Item>
              ))}
            </Select.Viewport>
            <Select.ScrollDownButton />
          </Select.Content>
        </div>
      </Select.Root>
      {error && <AlertDanger message={error} />}
      {isLoading ? (
        <Spinner />
      ) : !filteredChangelogs || filteredChangelogs.length === 0 ? (
        <p>No updates published yet.</p>
      ) : (
        <div className="space-y-4">
          {filteredChangelogs.map((entry) => (
            <section
              key={`${entry.category}-${entry.date}-${entry.version ?? "na"}`}
              className="rounded-lg border border-gray-200 p-4"
            >
              <div className="flex flex-wrap items-start justify-between gap-2">
                <h2 className="mt-0">{categoryLabel(entry.category)}</h2>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="mt-1 font-semibold">
                    {new Date(entry.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  {entry.version && (
                    <span className="text-sintio-blue rounded-full border bg-sintio-yellow px-2 py-0.5 text-xs font-medium">
                      {entry.version}
                    </span>
                  )}
                </div>
              </div>
              <EntryTabs sections={entry.sections} />
            </section>
          ))}
        </div>
      )}
    </div>
  );
};

export default Changelog;
