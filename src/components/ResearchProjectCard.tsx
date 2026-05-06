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
    <article className="interactive-card interactive-card-active relative h-full overflow-hidden p-7">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-400 via-sky-400 to-teal-400" />

      <div className="mb-5 flex items-start justify-between gap-3">
        <span
          className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${stageStyles[project.stage]}`}
        >
          {stageLabels[project.stage][locale]}
        </span>
        <span className="text-sm font-semibold text-slate-400">
          0{index + 1}
        </span>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
            {localize(locale, project.title)}
          </h3>
          {project.subtitle ? (
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-cyan-700">
              {localize(locale, project.subtitle)}
            </p>
          ) : null}
        </div>

        <p className="text-sm leading-8 text-slate-600 sm:text-base">
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
