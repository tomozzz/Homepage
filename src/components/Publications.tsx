import { publications } from "../data/publications";
import type { Locale } from "../types";
import { localize } from "../utils/localize";

import { ExternalLinkCard } from "./ExternalLinkCard";
import { SectionTitle } from "./SectionTitle";

const resolvePublicationHref = (doi?: string, pubmedUrl?: string, url?: string) => {
  if (pubmedUrl) {
    return pubmedUrl;
  }

  if (doi) {
    return doi.startsWith("http") ? doi : `https://doi.org/${doi}`;
  }

  return url;
};

type PublicationsProps = {
  locale: Locale;
};

export function Publications({ locale }: PublicationsProps) {
  const sortedPublications = [...publications].sort((left, right) =>
    right.sortDate.localeCompare(left.sortDate)
  );

  return (
    <section className="section-shell" id="publications">
      <div className="section-inner">
        <SectionTitle
          description={
            locale === "ja"
              ? "論文・プロシーディングを最新のものから順に掲載しています。リンクがある場合は外部ページへ移動できます。"
              : "Publications and proceedings are listed from newest to oldest, with links to external pages when available."
          }
          eyebrow="Publications"
          title={
            locale === "ja"
              ? "論文・プロシーディング"
              : "Publications and proceedings"
          }
        />

        {sortedPublications.length === 0 ? (
          <div className="section-card p-10 text-center">
            <p className="text-lg font-semibold text-slate-900">
              {locale === "ja"
                ? "論文データは今後追加予定です。"
                : "Publication data will be added soon."}
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              {locale === "ja"
                ? "実データは "
                : "Add real publication records to "}
              <code>src/data/publications.ts</code>
              {locale === "ja" ? " に追加してください。" : "."}
            </p>
          </div>
        ) : (
          <div className="grid gap-5">
            {sortedPublications.map((publication) => {
              const href = resolvePublicationHref(
                publication.doi,
                publication.pubmedUrl,
                publication.url
              );

              return (
                <ExternalLinkCard
                  ariaLabel={`${publication.title}${href ? (locale === "ja" ? " を新しいタブで開く" : " in a new tab") : ""}`}
                  className="space-y-4"
                  href={href}
                  key={`${publication.title}-${publication.sortDate}`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold tracking-tight text-slate-950">
                        {publication.title}
                      </h3>
                      <p className="text-sm leading-7 text-slate-600">
                        {publication.authors}
                      </p>
                    </div>
                    <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600">
                      {publication.year}
                    </span>
                  </div>

                  <p className="text-sm font-medium text-slate-700">
                    {publication.venue}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {publication.type ? (
                      <span className="chip">{localize(locale, publication.type)}</span>
                    ) : null}
                    {publication.pubmedUrl ? <span className="chip">PubMed</span> : null}
                    {publication.doi ? <span className="chip">DOI</span> : null}
                    {publication.tags?.map((tag) => (
                      <span className="muted-chip" key={tag}>
                        {tag}
                      </span>
                    ))}
                    {!href ? (
                      <span className="muted-chip">
                        {locale === "ja" ? "リンク未設定" : "Link not set"}
                      </span>
                    ) : null}
                  </div>
                </ExternalLinkCard>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
