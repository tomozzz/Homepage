import { useState } from "react";

import { conferences } from "../data/conferences";
import type { ConferencePresentation, Locale } from "../types";
import { localize } from "../utils/localize";

import { ExternalLinkCard } from "./ExternalLinkCard";
import { SectionTitle } from "./SectionTitle";

type ConferencesProps = {
  locale: Locale;
};

const INITIAL_VISIBLE_COUNT = 4;

const presentationTypeLabel = (
  locale: Locale,
  type: ConferencePresentation["presentationType"]
) => {
  if (!type) {
    return "";
  }

  const labels = {
    Oral: { ja: "Oral", en: "Oral" },
    Poster: { ja: "Poster", en: "Poster" },
    Invited: { ja: "Invited", en: "Invited" },
    Other: { ja: "Other", en: "Other" }
  };

  return labels[type][locale];
};

const renderAuthors = (presentation: ConferencePresentation, locale: Locale) =>
  presentation.authors.map((author, index) => (
    <span key={`${presentation.title.en}-${author.en}-${index}`}>
      <span
        className={
          author.isSelf
            ? "underline decoration-2 decoration-cyan-500 underline-offset-4"
            : undefined
        }
      >
        {locale === "ja" ? author.ja : author.en}
      </span>
      {index < presentation.authors.length - 1 ? ", " : ""}
    </span>
  ));

export function Conferences({ locale }: ConferencesProps) {
  const [expanded, setExpanded] = useState(false);

  const sortedConferences = [...conferences].sort((left, right) =>
    right.sortDate.localeCompare(left.sortDate)
  );

  const hasMoreEntries = sortedConferences.length > INITIAL_VISIBLE_COUNT;
  const visibleConferences = expanded
    ? sortedConferences
    : sortedConferences.slice(0, INITIAL_VISIBLE_COUNT);

  return (
    <section className="section-shell" id="presentations">
      <div className="section-inner">
        <SectionTitle
          description={
            locale === "ja"
              ? "学会発表を最新のものから順に掲載しています。リンクがある場合は外部ページへ移動できます。"
              : "Entries are listed from newest to oldest. Follow the links when external pages are available."
          }
          eyebrow="Conference Presentations"
          title={locale === "ja" ? "学会発表" : "Conference presentations"}
        />

        {sortedConferences.length === 0 ? (
          <div className="section-card p-10 text-center">
            <p className="card-title">
              {locale === "ja"
                ? "学会発表データは準備中です。"
                : "Conference presentation data will be added soon."}
            </p>
            <p className="card-copy mt-3">
              {locale === "ja"
                ? "実在する学会発表を "
                : "Add real presentation records to "}
              <code>src/data/conferences.ts</code>
              {locale === "ja" ? " に追加してください。" : "."}
            </p>
          </div>
        ) : (
          <>
            <div className="grid gap-5 lg:grid-cols-2">
              {visibleConferences.map((presentation) => (
                <ExternalLinkCard
                  ariaLabel={`${localize(locale, presentation.title)}${
                    presentation.url
                      ? locale === "ja"
                        ? " を新しいタブで開く"
                        : " in a new tab"
                      : ""
                  }`}
                  className="space-y-4"
                  href={presentation.url}
                  key={`${presentation.title.en}-${presentation.sortDate}`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <h3 className="card-title max-w-2xl">
                      {localize(locale, presentation.title)}
                    </h3>
                    {presentation.presentationType ? (
                      <span className="rounded-lg border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-800">
                        {presentationTypeLabel(locale, presentation.presentationType)}
                      </span>
                    ) : null}
                  </div>

                  <div className="card-copy space-y-1">
                    <p>{renderAuthors(presentation, locale)}</p>
                    <p className="font-medium text-slate-700">
                      {localize(locale, presentation.conference)}
                    </p>
                    <p className="flex flex-wrap items-center gap-x-2">
                      <span>{localize(locale, presentation.dateLabel)}</span>
                      {presentation.location ? (
                        <>
                          <span aria-hidden="true" className="text-cyan-500">·</span>
                          <span>{localize(locale, presentation.location)}</span>
                        </>
                      ) : null}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {presentation.tags?.map((tag) => (
                      <span className="muted-chip" key={tag}>
                        {tag}
                      </span>
                    ))}
                    {!presentation.url ? (
                      <span className="muted-chip">
                        {locale === "ja" ? "リンク未設定" : "Link not set"}
                      </span>
                    ) : null}
                  </div>
                </ExternalLinkCard>
              ))}
            </div>

            {hasMoreEntries ? (
              <div className="mt-8 flex justify-center">
                <button
                  aria-expanded={expanded}
                  className="inline-flex items-center rounded-full border border-slate-200 bg-white/85 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300 hover:text-cyan-700 hover:shadow-soft focus-visible:border-cyan-300"
                  onClick={() => setExpanded((value) => !value)}
                  type="button"
                >
                  {expanded
                    ? locale === "ja"
                      ? "折りたたむ"
                      : "Show less"
                    : locale === "ja"
                      ? "さらに見る"
                      : "Show more"}
                </button>
              </div>
            ) : null}
          </>
        )}
      </div>
    </section>
  );
}
