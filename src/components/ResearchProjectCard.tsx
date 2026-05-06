import type { Locale, ResearchProject } from "../types";
import { localize } from "../utils/localize";

type ResearchProjectCardProps = {
  project: ResearchProject;
  index: number;
  locale: Locale;
};

const stageStyles: Record<ResearchProject["stage"], string> = {
  Fundamental: "border-cyan-200 bg-cyan-50 text-cyan-800",
  Methodological: "border-sky-200 bg-sky-50 text-sky-800",
  Application: "border-teal-200 bg-teal-50 text-teal-800"
};

const stageLabels: Record<ResearchProject["stage"], { ja: string; en: string }> = {
  Fundamental: { ja: "Fundamental", en: "Fundamental" },
  Methodological: { ja: "Methodological", en: "Methodological" },
  Application: { ja: "Application", en: "Application" }
};

export function ResearchProjectCard({
  project,
  index,
  locale
}: ResearchProjectCardProps) {
  return (
    <article className="interactive-card interactive-card-active relative h-full overflow-hidden p-7 sm:p-8">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-400 via-sky-400 to-teal-400" />

      <div className="mb-6 flex items-start justify-between gap-3">
        <span
          className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${stageStyles[project.stage]}`}
        >
          {stageLabels[project.stage][locale]}
        </span>
        <span className="text-sm font-semibold text-slate-400">0{index + 1}</span>
      </div>

      <div className="space-y-5">
        <div className="space-y-3">
          <h3 className="font-display text-[1.7rem] font-bold tracking-tight text-slate-950 sm:text-[1.9rem]">
            {localize(locale, project.title)}
          </h3>
          {project.subtitle ? (
            <p className="text-base leading-7 text-cyan-700 sm:text-[1.02rem]">
              {localize(locale, project.subtitle)}
            </p>
          ) : null}
        </div>

        <p className="text-base leading-8 text-slate-600">
          {localize(locale, project.description)}
        </p>

        <div className="flex flex-wrap gap-2 pt-1">
          {project.keywords.map((keyword) => (
            <span className="muted-chip" key={keyword}>
              {keyword}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
