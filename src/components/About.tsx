import { researchProjects } from "../data/researchProjects";
import type { Locale } from "../types";
import { localize } from "../utils/localize";

type AboutProps = {
  locale: Locale;
};

const stageLabel = {
  Fundamental: {
    ja: "基礎評価",
    en: "Fundamental"
  },
  Methodological: {
    ja: "計測・可視化",
    en: "Methodological"
  },
  Application: {
    ja: "応用",
    en: "Application"
  }
} as const;

export function About({ locale }: AboutProps) {
  return (
    <section className="section-shell" id="about">
      <div className="section-inner">
        <div className="section-rule">
          <p className="section-kicker">
            Research Vision
          </p>
          <div className="mt-4 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-12">
            <h2 className="display-title">
              {locale === "ja"
                ? "からだの循環を、光で捉える。"
                : "Capturing the body's circulation with light."}
            </h2>
            <p className="body-copy max-w-3xl">
              {locale === "ja"
                ? "光学計測を通して血流分布、末梢循環、病態に伴う変化を段階的に捉え、基礎的な計測評価から可視化、応用的なモニタリングへ研究を展開しています。"
                : "The research captures blood flow distribution, peripheral circulation, and pathological change through optical measurement, progressing from foundational evaluation to visualization and application-oriented monitoring."}
            </p>
          </div>
        </div>

        <div className="mt-10 grid border-y border-slate-200 bg-white/55 lg:grid-cols-3 lg:divide-x lg:divide-slate-200">
          {researchProjects.map((project, index) => (
            <article
              className="group border-b border-slate-200 px-4 py-7 last:border-b-0 sm:px-6 lg:border-b-0 lg:px-7"
              key={project.title.en}
            >
              <div className="flex items-center justify-between gap-4">
                <span className="meta-label text-cyan-700">
                  {stageLabel[project.stage][locale]}
                </span>
                <span className="font-display text-3xl font-semibold text-slate-300 transition group-hover:text-cyan-500">
                  0{index + 1}
                </span>
              </div>
              <h3 className="card-title mt-5">
                {localize(locale, project.title)}
              </h3>
              <p className="card-copy mt-3">
                {localize(locale, project.subtitle ?? project.description)}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
