import { useEffect, useState } from "react";

import type { Locale, NavSection, RouteKey } from "../types";
import { localize } from "../utils/localize";

type HeaderProps = {
  sections: NavSection[];
  activeSection: string;
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
  onNavigate: (page: RouteKey, sectionId?: string) => void;
};

export function Header({
  sections,
  activeSection,
  locale,
  onLocaleChange,
  onNavigate
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const closeMenuOnDesktop = () => {
      if (window.innerWidth >= 1280) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", closeMenuOnDesktop);
    return () => window.removeEventListener("resize", closeMenuOnDesktop);
  }, []);

  const renderNavButton = (section: NavSection) => {
    const isActive = activeSection === section.id;

    return (
      <button
        aria-current={isActive ? "location" : undefined}
        className={[
          "rounded-lg px-3 py-2 text-sm font-semibold transition duration-200",
          isActive
            ? "bg-cyan-100 text-cyan-800 shadow-sm"
            : "text-slate-600 hover:bg-white hover:text-slate-950"
        ].join(" ")}
        key={section.id}
        onClick={() => {
          onNavigate(section.page, section.id);
          setIsMenuOpen(false);
        }}
        type="button"
      >
        {localize(locale, section.label)}
      </button>
    );
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 rounded-2xl border border-white/80 bg-white/88 px-4 py-3 shadow-soft backdrop-blur-md sm:px-5">
        <button
          className="inline-flex items-center gap-3 rounded-lg text-sm font-semibold text-slate-900"
          onClick={() => onNavigate("home", "home")}
          type="button"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-cyan-100 text-cyan-700">
            TY
          </span>
          <span className="hidden whitespace-nowrap sm:inline">Research Portfolio</span>
        </button>

        <nav className="hidden items-center gap-0.5 xl:flex">
          {sections.map((section) => renderNavButton(section))}
        </nav>

        <div className="hidden items-center gap-2 xl:flex">
          <button
            aria-pressed={locale === "ja"}
            className={`rounded-lg px-3 py-2 text-sm font-semibold transition ${
              locale === "ja"
                ? "bg-slate-900 text-white"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
            onClick={() => onLocaleChange("ja")}
            type="button"
          >
            日本語
          </button>
          <button
            aria-pressed={locale === "en"}
            className={`rounded-lg px-3 py-2 text-sm font-semibold transition ${
              locale === "en"
                ? "bg-slate-900 text-white"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
            onClick={() => onLocaleChange("en")}
            type="button"
          >
            EN
          </button>
        </div>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:border-cyan-300 hover:text-cyan-700 xl:hidden"
          onClick={() => setIsMenuOpen((current) => !current)}
          type="button"
        >
          <span className="sr-only">Menu</span>
          <svg
            aria-hidden="true"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path d="M6 6L18 18M6 18L18 6" />
            ) : (
              <path d="M4 7H20M4 12H20M4 17H20" />
            )}
          </svg>
        </button>
      </div>

      {isMenuOpen ? (
        <div
          className="mx-auto mt-3 max-w-7xl rounded-2xl border border-white/80 bg-white/95 p-4 shadow-soft backdrop-blur-md xl:hidden"
          id="mobile-navigation"
        >
          <nav className="grid gap-2">{sections.map((section) => renderNavButton(section))}</nav>
          <div className="mt-4 flex gap-2 border-t border-slate-100 pt-4">
            <button
              aria-pressed={locale === "ja"}
              className={`flex-1 rounded-lg px-4 py-2 text-sm font-semibold transition ${
                locale === "ja"
                  ? "bg-slate-900 text-white"
                  : "bg-slate-100 text-slate-600"
              }`}
              onClick={() => onLocaleChange("ja")}
              type="button"
            >
              日本語
            </button>
            <button
              aria-pressed={locale === "en"}
              className={`flex-1 rounded-lg px-4 py-2 text-sm font-semibold transition ${
                locale === "en"
                  ? "bg-slate-900 text-white"
                  : "bg-slate-100 text-slate-600"
              }`}
              onClick={() => onLocaleChange("en")}
              type="button"
            >
              EN
            </button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
