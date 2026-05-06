import type { Locale, LocalizedText } from "../types";
import { localize } from "../utils/localize";

const flowSteps: LocalizedText[] = [
  {
    ja: "測定可能深度の評価",
    en: "Evaluation of Measurable Depth"
  },
  {
    ja: "血流マッピング",
    en: "Blood Flow Mapping"
  },
  {
    ja: "末梢循環モニタリング",
    en: "Peripheral Circulation Monitoring"
  }
];

type ResearchFlowProps = {
  locale: Locale;
};

export function ResearchFlow({ locale }: ResearchFlowProps) {
  return (
    <div className="section-card p-7 sm:p-8">
      <div className="mb-7 space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-700">
          {locale === "ja" ? "研究の発展フロー" : "Research Development Flow"}
        </p>
        <h3 className="font-display text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          {locale === "ja"
            ? "基礎的な計測評価から応用的なモニタリングへ"
            : "From foundational evaluation to application-oriented monitoring"}
        </h3>
        <p className="max-w-4xl text-base leading-8 text-slate-600 sm:text-lg">
          {locale === "ja"
            ? "SCOS の構築と基礎理解を土台に、深さ評価、血流可視化、末梢循環モニタリングへと研究の重心を広げています。"
            : "Built on the implementation and foundational understanding of SCOS, the work expands toward depth evaluation, blood flow visualization, and peripheral circulation monitoring."}
        </p>
      </div>

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
        {flowSteps.map((step, index) => (
          <div className="contents" key={step.en}>
            <div className="group flex-1 rounded-[1.5rem] border border-cyan-100 bg-cyan-50/85 p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-soft">
              <div className="flex items-center gap-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-sm font-bold text-cyan-700 shadow-sm">
                  {index + 1}
                </span>
                <p className="text-lg font-semibold leading-7 text-slate-900">
                  {localize(locale, step)}
                </p>
              </div>
            </div>

            {index < flowSteps.length - 1 ? (
              <div
                aria-hidden="true"
                className="flex items-center justify-center text-2xl font-semibold text-cyan-500"
              >
                <span className="lg:hidden">↓</span>
                <span className="hidden lg:inline">→</span>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
