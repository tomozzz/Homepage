import { researchProjects } from "../data/researchProjects";
import type { Locale, RouteKey } from "../types";

import { ResearchFlow } from "./ResearchFlow";
import { ResearchProjectCard } from "./ResearchProjectCard";
import { SectionTitle } from "./SectionTitle";

const speckleCopy = {
  ja: {
    eyebrow: "Speckle Imaging",
    title: "血流の速さによって変わるスペックルの見え方",
    body:
      "スペックルは、散乱光が干渉してできるランダムな明暗パターンです。血流が速いときにはスペックルパターンの変化がより速くなり、遅いときには変化が緩やかになります。ここでは、血流が速い場合と遅い場合のスペックル動画を並べて示しています。",
    fast: "Fast blood flow",
    slow: "Slow blood flow",
    note:
      "スペックルの時間変動を解析して血流指標へつなげる考え方が、SCOS の理解にもつながります。"
  },
  en: {
    eyebrow: "Speckle Imaging",
    title: "How speckle appearance changes with blood flow speed",
    body:
      "Speckles are random light-and-dark interference patterns formed by scattered light. When blood flow is faster, the speckle pattern changes more rapidly; when flow is slower, the pattern changes more gradually. The paired videos below illustrate fast- and slow-flow speckle behavior.",
    fast: "Fast blood flow",
    slow: "Slow blood flow",
    note:
      "This flow-sensitive temporal behavior is the basis for connecting speckle dynamics to blood flow indices in SCOS."
  }
};

const scosHighlights = {
  ja: [
    "SCOS は、散乱光が形成するスペックルパターンの揺らぎから血流情報を推定する光学計測手法です。",
    "カメラベースで構成できるため、広視野・高時間分解能・低コスト化の可能性があります。",
    "末梢微小循環や組織血流ダイナミクスの非侵襲モニタリングへの応用が期待されます。"
  ],
  en: [
    "SCOS is an optical technique for estimating blood flow by analyzing fluctuations in laser speckle patterns formed by scattered light from biological tissue.",
    "Because it can be implemented with a camera-based system, SCOS has potential advantages such as wide-field measurement, high temporal resolution, and lower system cost.",
    "These features make SCOS a promising approach for noninvasive monitoring of peripheral microcirculation and tissue blood flow dynamics."
  ]
};

type ResearchProps = {
  locale: Locale;
  onNavigate: (page: RouteKey, sectionId?: string) => void;
};

export function Research({ locale, onNavigate }: ResearchProps) {
  const speckle = speckleCopy[locale];

  return (
    <section className="section-shell pb-24 pt-32 sm:pt-36" id="research">
      <div className="section-inner">
        <SectionTitle
          description={
            locale === "ja"
              ? "スペックルイメージングを起点に、SCOS の基礎、深さ評価、血流マッピング、ショックモデルへの応用までを専用ページで整理しています。"
              : "This dedicated page follows the development from speckle imaging to SCOS fundamentals, depth evaluation, blood flow mapping, and application-oriented studies."
          }
          eyebrow="Research"
          title={
            locale === "ja"
              ? "スペックルイメージングから SCOS・応用研究へ"
              : "From speckle imaging to SCOS and application studies"
          }
        />

        <div className="space-y-8">
          <div className="section-card overflow-hidden">
            <div className="grid gap-0 lg:grid-cols-[1fr_1fr]">
              <div className="p-8 sm:p-10 lg:col-span-2">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-700">
                  {speckle.eyebrow}
                </p>
                <h3 className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-950">
                  {speckle.title}
                </h3>
                <p className="mt-5 max-w-4xl text-base leading-8 text-slate-700 sm:text-lg">
                  {speckle.body}
                </p>
              </div>

              <div className="border-t border-slate-100 p-6 sm:p-8 lg:border-r">
                <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-950 shadow-soft">
                  <video
                    aria-label={speckle.fast}
                    autoPlay
                    className="aspect-video w-full object-cover"
                    controls
                    loop
                    muted
                    playsInline
                  >
                    <source src={`${import.meta.env.BASE_URL}videos/speckle_BFI_fast.mp4`} type="video/mp4" />
                  </video>
                </div>
                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
                  {speckle.fast}
                </p>
              </div>

              <div className="border-t border-slate-100 p-6 sm:p-8">
                <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-950 shadow-soft">
                  <video
                    aria-label={speckle.slow}
                    autoPlay
                    className="aspect-video w-full object-cover"
                    controls
                    loop
                    muted
                    playsInline
                  >
                    <source src={`${import.meta.env.BASE_URL}videos/speckle_BFI_slow.mp4`} type="video/mp4" />
                  </video>
                </div>
                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
                  {speckle.slow}
                </p>
              </div>

              <div className="border-t border-slate-100 p-8 sm:p-10 lg:col-span-2">
                <p className="text-sm leading-7 text-slate-600 sm:text-base">
                  {speckle.note}
                </p>
              </div>
            </div>
          </div>

          <ResearchFlow locale={locale} />

          <div className="section-card overflow-hidden">
            <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="p-8 sm:p-10">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-700">
                  {locale === "ja" ? "SCOSとは？" : "What is SCOS?"}
                </p>
                <h3 className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-950">
                  Speckle Contrast Optical Spectroscopy
                </h3>
                <p className="mt-5 text-base leading-8 text-slate-700 sm:text-lg">
                  {locale === "ja"
                    ? "SCOS（Speckle Contrast Optical Spectroscopy）は、生体組織にレーザー光を照射した際に得られる散乱光スペックルの揺らぎを解析し、血流を推定する光学計測手法です。カメラベースで構成できるため、広視野計測、高時間分解能、低コスト化の可能性があり、末梢微小循環や組織血流ダイナミクスの非侵襲モニタリングへの応用が期待されます。"
                    : "SCOS, or Speckle Contrast Optical Spectroscopy, is an optical technique for estimating blood flow by analyzing the fluctuation of laser speckle patterns formed by scattered light from biological tissue. Because SCOS can be implemented with a camera-based system, it has potential advantages such as wide-field measurement, high temporal resolution, and lower system cost. These features make SCOS a promising approach for noninvasive monitoring of peripheral microcirculation and other tissue blood flow dynamics."}
                </p>
              </div>

              <div className="border-t border-slate-100 bg-slate-50/80 p-8 sm:p-10 lg:border-l lg:border-t-0">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                  {locale === "ja" ? "ポイント" : "Key points"}
                </p>
                <ul className="mt-5 grid gap-4">
                  {scosHighlights[locale].map((item) => (
                    <li
                      className="rounded-[1.5rem] border border-white/70 bg-white/80 px-5 py-4 text-sm leading-7 text-slate-700 shadow-sm"
                      key={item}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-700">
                  {locale === "ja" ? "研究プロジェクト" : "Research Projects"}
                </p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
                  {locale === "ja"
                    ? "基礎から応用へ進む研究ストーリー"
                    : "A stepwise path from foundation to application"}
                </h3>
              </div>
              <p className="max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:text-right">
                {locale === "ja"
                  ? "カードは、深さ評価、血流マッピング、ショックモデルへの応用という順で並び、基礎から応用への流れが追えるようにしています。"
                  : "The cards are arranged to follow the intended development from depth evaluation to blood flow mapping and then to shock-model applications."}
              </p>
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
                    ? "研究実績や発表一覧はホーム側にまとめています。"
                    : "Publications and presentation records remain on the main page."}
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base">
                  {locale === "ja"
                    ? "Research の流れを確認したあとに、論文・学会発表・連絡先へ戻れます。"
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
