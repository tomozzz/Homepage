import { awards } from "../data/awards";
import type { Locale } from "../types";
import { localize } from "../utils/localize";

import { ExternalLinkCard } from "./ExternalLinkCard";
import { SectionTitle } from "./SectionTitle";

type AwardsProps = {
  locale: Locale;
};

export function Awards({ locale }: AwardsProps) {
  const sortedAwards = [...awards].sort((left, right) =>
    right.year.localeCompare(left.year)
  );

  return (
    <section className="section-shell" id="awards">
      <div className="section-inner">
        <SectionTitle
          description={
            locale === "ja"
              ? "受賞歴はタイムライン形式で整理しています。クリックすると関連ページを開けます。"
              : "Awards are arranged as a compact timeline, with links to related pages when available."
          }
          eyebrow="Awards"
          title={locale === "ja" ? "受賞歴" : "Honors and recognitions"}
        />

        {sortedAwards.length === 0 ? (
          <div className="section-card p-10 text-center">
            <p className="card-title">
              {locale === "ja"
                ? "受賞歴データは今後追加予定です。"
                : "Award data will be added soon."}
            </p>
          </div>
        ) : (
          <ol className="relative ml-3 border-s border-cyan-100 pl-8">
            {sortedAwards.map((award) => (
              <li
                className="relative pb-8 last:pb-0"
                key={`${award.title.en}-${award.year}`}
              >
                <span className="absolute -left-[2.8rem] top-8 h-4 w-4 rounded-full border-4 border-white bg-cyan-500 shadow-sm" />
                <div className="mb-3 inline-flex rounded-lg border border-cyan-100 bg-cyan-50 px-4 py-1.5 text-sm font-semibold text-cyan-800">
                  {award.year}
                </div>
                <ExternalLinkCard
                  ariaLabel={`${localize(locale, award.title)}${award.url ? (locale === "ja" ? " を新しいタブで開く" : " in a new tab") : ""}`}
                  className="space-y-3"
                  href={award.url}
                >
                  <h3 className="card-title">
                    {localize(locale, award.title)}
                  </h3>
                  <p className="text-base font-medium leading-7 text-slate-700">
                    {localize(locale, award.organization)}
                  </p>
                  {award.description ? (
                    <p className="card-copy">
                      {localize(locale, award.description)}
                    </p>
                  ) : null}
                </ExternalLinkCard>
              </li>
            ))}
          </ol>
        )}
      </div>
    </section>
  );
}
