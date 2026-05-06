import { researchProjects } from "../data/researchProjects";
import type { Locale } from "../types";
import { localize } from "../utils/localize";

type AboutProps = {
  locale: Locale;
};

const stageLabel = {
  Fundamental: {
    ja: "Fundamental",
    en: "Fundamental"
  },
  Methodological: {
    ja: "Methodological",
    en: "Methodological"
  },
  Application: {
    ja: "Application",
    en: "Application"
  }
} as const;

export function About({ locale }: AboutProps) {
  return (
    <section className="section-shell" id="about">
      <div className="section-inner">
        <div className="max-w-5xl space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-700">
            Research Vision
          </p>
          <h2 className="font-display text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            {locale === "ja" ? "「光」で血流を診る。" : "Seeing blood flow with light."}
          </h2>
          <p className="max-w-4xl text-lg leading-9 text-slate-700">
            {locale === "ja" ? (
              <>
                <span className="block">
                  研究の軸は、光学計測を通して血流の深さ、分布、末梢循環の変化を段階的に捉えることです。
                </span>
                <span className="mt-2 block">
                  基礎的な計測評価から可視化、応用的なモニタリングへと研究を展開しています。
                </span>
              </>
            ) : (
              "The research vision is to capture blood flow depth, distribution, and peripheral circulatory changes through optical measurements, moving step by step from foundational evaluation to visualization and application-oriented monitoring."
            )}
          </p>
        </div>

        <div className="mt-10 grid gap-5 xl:grid-cols-3">
          {researchProjects.map((project) => (
            <div
              className="interactive-card interactive-card-active h-full p-7 sm:p-8"
              key={project.title.en}
            >
              <span className="chip">{stageLabel[project.stage][locale]}</span>
              <h3 className="mt-5 text-2xl font-semibold tracking-tight text-slate-950">
                {localize(locale, project.title)}
              </h3>
              <p className="mt-4 text-base leading-8 text-slate-700">
                {localize(locale, project.subtitle ?? project.description)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
