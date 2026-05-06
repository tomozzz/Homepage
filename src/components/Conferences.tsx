import { conferences } from "../data/conferences";
import type { ConferencePresentation, Locale } from "../types";
import { localize } from "../utils/localize";

import { ExternalLinkCard } from "./ExternalLinkCard";
import { SectionTitle } from "./SectionTitle";

type ConferencesProps = {
  locale: Locale;
};

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
  const sortedConferences = [...conferences].sort((left, right) =>
    right.sortDate.localeCompare(left.sortDate)
  );

  return (
    <section className="section-shell" id="presentations">
      <div className="section-inner">
        <SectionTitle
          description={
            locale === "ja"
              ? "学会発表は最新のものから順に掲載しています。"
              : "Entries are listed from newest to oldest."
          }
          eyebrow="Conference Presentations"
          title={locale === "ja" ? "学会発表" : "Conference presentations"}
        />

        {sortedConferences.length === 0 ? (
          <div className="section-card p-10 text-center">
            <p className="text-lg font-semibold text-slate-900">
              {locale === "ja"
                ? "学会発表データは今後追加予定です。"
                : "Conference presentation data will be added soon."}
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              {locale === "ja"
                ? "実データは "
                : "Add real presentation records to "}
              <code>src/data/conferences.ts</code>
              {locale === "ja" ? " に追加してください。" : "."}
            </p>
          </div>
        ) : (
          <div className="grid gap-5 lg:grid-cols-2">
            {sortedConferences.map((presentation) => (
              <ExternalLinkCard
                ariaLabel={`${localize(locale, presentation.title)}${presentation.url ? (locale === "ja" ? " を新しいタブで開く" : " in a new tab") : ""}`}
                className="space-y-4"
                href={presentation.url}
                key={`${presentation.title.en}-${presentation.sortDate}`}
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <h3 className="max-w-2xl text-xl font-semibold tracking-tight text-slate-950">
                    {localize(locale, presentation.title)}
                  </h3>
                  {presentation.presentationType ? (
                    <span className="rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-800">
                      {presentationTypeLabel(locale, presentation.presentationType)}
                    </span>
                  ) : null}
                </div>

                <div className="space-y-1 text-sm leading-7 text-slate-600">
                  <p>{renderAuthors(presentation, locale)}</p>
                  <p className="font-medium text-slate-700">
                    {localize(locale, presentation.conference)}
                  </p>
                  <p>
                    {localize(locale, presentation.dateLabel)}
                    {presentation.location
                      ? ` | ${localize(locale, presentation.location)}`
                      : ""}
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
        )}
      </div>
    </section>
  );
}
