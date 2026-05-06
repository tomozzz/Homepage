import { researchProjects } from "../data/researchProjects";
import type { Locale, RouteKey } from "../types";

import { ResearchFlow } from "./ResearchFlow";
import { ResearchProjectCard } from "./ResearchProjectCard";
import { SectionTitle } from "./SectionTitle";

const scosHighlights = {
  ja: [
    "SCOS は、生体組織からの散乱光がつくるスペックルパターンの時間変動を解析し、血流情報を推定する光学計測法です。",
    "カメラベースで構成できるため、広視野計測や時系列変化の可視化へ展開しやすい特徴があります。",
    "こうした特性を活かして、深さ評価、血流マッピング、末梢循環モニタリングへと研究を発展させています。"
  ],
  en: [
    "SCOS is an optical technique that estimates blood flow by analyzing temporal fluctuations in speckle patterns formed by scattered light from biological tissue.",
    "Because it can be implemented with a camera-based system, it naturally extends to wide-field measurement and visualization of time-varying flow signals.",
    "These characteristics support the progression of the work from foundational depth evaluation to blood flow mapping and peripheral circulation monitoring."
  ]
};

type ResearchProps = {
  locale: Locale;
  onNavigate: (page: RouteKey, sectionId?: string) => void;
};

export function Research({ locale, onNavigate }: ResearchProps) {
  return (
    <section className="section-shell pb-24 pt-32 sm:pt-36" id="research">
      <div className="section-inner">
        <SectionTitle
          description={
            locale === "ja"
              ? "スペックルコントラスト分光法(SCOS)の構築・基礎的な計測評価から始まり、血流可視化、応用的なモニタリングへと研究を展開しています。"
              : "Beginning with the implementation of SCOS and foundational measurement studies, the work extends toward blood flow visualization and application-oriented monitoring."
          }
          eyebrow="Research"
          title={
            locale === "ja"
              ? "からだの循環を、光で捉える。"
              : "Capturing the body's circulation with light."
          }
        />

        <div className="space-y-8">
          <div className="section-card overflow-hidden">
            <div className="p-8 sm:p-10">
              <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-700">
                    {locale === "ja" ? "SCOSとは？" : "What is SCOS?"}
                  </p>
                  <h3 className="mt-4 font-display text-3xl font-bold leading-[1.04] tracking-tight text-slate-950 sm:text-[2.7rem] lg:text-[2.9rem]">
                    Speckle Contrast Optical Spectroscopy (SCOS)
                  </h3>
                  <p className="mt-5 text-base leading-8 text-slate-700 sm:text-lg">
                    {locale === "ja"
                      ? "SCOS は Speckle Contrast Optical Spectroscopy の略で、レーザー光を照射した生体組織から得られるスペックルパターンの揺らぎを解析し、スペックルコントラストを算出することで血流情報を推定する光学計測法です。スペックルコントラストの値は血流速度の違いを反映するため、その変化を用いて血流速度に対応した指標を評価できます。カメラベースで構成できるため、広い領域を対象とした血流の可視化や、時系列変化の観察へ展開しやすい特徴があります。"
                      : "SCOS, or Speckle Contrast Optical Spectroscopy, is an optical technique that analyzes fluctuations in laser speckle patterns formed by scattered light from biological tissue and computes speckle contrast to estimate blood flow. Because speckle contrast reflects differences in flow speed, SCOS can be used to evaluate blood-flow-related indices associated with blood flow velocity. Implemented with a camera-based system, it is also well suited to visualizing blood flow over a wider field and tracking temporal flow dynamics."}
                  </p>
                </div>

                <div className="space-y-4 lg:pt-12">
                  {scosHighlights[locale].map((item) => (
                    <div
                      className="rounded-[1.4rem] border border-slate-100 bg-slate-50/80 px-5 py-4 text-sm leading-7 text-slate-700 sm:text-base"
                      key={item}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 border-t border-slate-100 pt-8">
                <div className="flex flex-wrap justify-center gap-4 sm:gap-5">
                  <div className="relative aspect-square w-[15rem] overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-950 shadow-soft sm:w-[16rem] lg:w-[17rem]">
                    <video
                      aria-label={
                        locale === "ja"
                          ? "血流変化に伴うスペックル動画の例"
                          : "Example speckle dynamics video"
                      }
                      autoPlay
                      className="absolute inset-0 h-full w-full origin-top scale-[1.02] object-cover object-top"
                      loop
                      muted
                      playsInline
                    >
                      <source
                        src={`${import.meta.env.BASE_URL}videos/speckle_BFI_fast.mp4`}
                        type="video/mp4"
                      />
                    </video>
                  </div>

                  <div className="relative aspect-square w-[15rem] overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-950 shadow-soft sm:w-[16rem] lg:w-[17rem]">
                    <video
                      aria-label={
                        locale === "ja"
                          ? "血流変化に伴うスペックル動画の例"
                          : "Example speckle dynamics video"
                      }
                      autoPlay
                      className="absolute inset-0 h-full w-full origin-top scale-[1.02] object-cover object-top"
                      loop
                      muted
                      playsInline
                    >
                      <source
                        src={`${import.meta.env.BASE_URL}videos/speckle_BFI_slow.mp4`}
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>

                <div className="mx-auto mt-5 max-w-3xl text-center">
                  <p className="text-sm font-semibold text-slate-700 sm:text-base">
                    {locale === "ja"
                      ? "図 前腕組織血流の計測例。"
                      : "Figure. Example of forearm tissue blood flow measurement."}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base">
                    {locale === "ja"
                      ? "スペックルコントラストが小さいほど、血流が速いことがわかります。"
                      : "Lower speckle contrast indicates faster blood flow."}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <ResearchFlow locale={locale} />

          <div className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-700">
                {locale === "ja" ? "研究プロジェクト" : "Research Projects"}
              </p>
              <h3 className="font-display text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:whitespace-nowrap">
                {locale === "ja"
                  ? "基礎から応用へ進む研究ストーリー"
                  : "A research storyline from fundamentals to applications"}
              </h3>
            </div>

            <div className="grid gap-6 xl:grid-cols-3">
              {researchProjects.map((project, index) => (
                <ResearchProjectCard
                  index={index}
                  key={project.title.en}
                  locale={locale}
                  project={project}
                />
              ))}
            </div>
          </div>

          <div className="section-card p-8 sm:p-10">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-lg font-semibold text-slate-950">
                  {locale === "ja"
                    ? "論文や学会発表はホーム画面にまとめています。"
                    : "Publications and presentation records remain on the main page."}
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base">
                  {locale === "ja"
                    ? "研究の流れを確認したあとに、論文、学会発表、連絡先へ移動できます。"
                    : "After reviewing the research storyline, you can jump back to publications, presentations, or contact."}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  className="inline-flex items-center justify-center rounded-full bg-cyan-600 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-cyan-700"
                  onClick={() => onNavigate("home", "publications")}
                  type="button"
                >
                  {locale === "ja" ? "論文を見る" : "View Publications"}
                </button>
                <button
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-cyan-300 hover:text-cyan-700"
                  onClick={() => onNavigate("home", "contact")}
                  type="button"
                >
                  {locale === "ja" ? "連絡先へ" : "Go to Contact"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
