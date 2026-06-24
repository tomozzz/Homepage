import type { Locale, ResearchProject } from "../types";
import { localize } from "../utils/localize";

type ResearchProjectCardProps = {
  project: ResearchProject;
  index: number;
  locale: Locale;
};

const stageLabels: Record<ResearchProject["stage"], { ja: string; en: string }> = {
  Fundamental: { ja: "基礎評価", en: "Fundamental" },
  Methodological: { ja: "計測・可視化", en: "Methodological" },
  Application: { ja: "応用", en: "Application" }
};

export function ResearchProjectCard({
  project,
  index,
  locale
}: ResearchProjectCardProps) {
  return (
    <article className="panel-soft group h-full p-6 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300 hover:bg-white hover:shadow-float sm:p-7">
      <div className="mb-6 flex items-center justify-between gap-4 border-b border-slate-200 pb-5">
        <span className="meta-label text-cyan-700">
          {stageLabels[project.stage][locale]}
        </span>
        <span className="font-display text-3xl font-semibold text-slate-300 transition-colors group-hover:text-cyan-500">
          0{index + 1}
        </span>
      </div>

      <h3 className="subsection-title">
        {localize(locale, project.title)}
      </h3>
      {project.subtitle ? (
        <p className="card-copy mt-4 font-semibold text-cyan-700">
          {localize(locale, project.subtitle)}
        </p>
      ) : null}

      <p className="card-copy mt-5">
        {localize(locale, project.description)}
      </p>

      <div className="mt-6 flex flex-wrap gap-2 border-t border-slate-200 pt-5">
        {project.keywords.map((keyword) => (
          <span className="muted-chip" key={keyword}>
            {keyword}
          </span>
        ))}
      </div>
    </article>
  );
}
