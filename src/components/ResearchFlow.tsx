import type { Locale, LocalizedText } from "../types";
import { localize } from "../utils/localize";

const flowSteps: LocalizedText[] = [
  {
    ja: "SCOS の原理",
    en: "SCOS Principle"
  },
  {
    ja: "深さ評価",
    en: "Depth Evaluation"
  },
  {
    ja: "血流マッピング",
    en: "Blood Flow Mapping"
  },
  {
    ja: "出血性ショックモニタリング",
    en: "Hemorrhagic Shock Monitoring"
  }
];

type ResearchFlowProps = {
  locale: Locale;
};

export function ResearchFlow({ locale }: ResearchFlowProps) {
  return (
    <div className="section-card p-6 sm:p-8">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-700">
            {locale === "ja" ? "研究の発展フロー" : "Research Development Flow"}
          </p>
          <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            {locale === "ja"
              ? "研究の流れは、SCOS の原理の整理から始まり、測定可能深度の評価、血流マッピング、出血性ショックモデルでのモニタリングへと展開しています。"
              : "The research storyline moves from explaining the SCOS principle to evaluating measurable depth, extending to blood flow mapping, and finally exploring monitoring applications in hemorrhagic shock models."}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
        {flowSteps.map((step, index) => (
          <div className="contents" key={step.en}>
            <div className="group flex-1 rounded-[1.5rem] border border-cyan-100 bg-cyan-50/80 p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-soft">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-bold text-cyan-700 shadow-sm">
                  {index + 1}
                </span>
                <p className="text-base font-semibold leading-7 text-slate-900">
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
