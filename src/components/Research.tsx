import { ArrowDown, ArrowRight } from "lucide-react";

import { researchProjects } from "../data/researchProjects";
import { researchReferences } from "../data/researchReferences";
import type { Locale, LocalizedText, RouteKey } from "../types";
import { localize } from "../utils/localize";

import { MathFormula } from "./MathFormula";
import { ResearchProjectCard } from "./ResearchProjectCard";

type ResearchProps = {
  locale: Locale;
  onNavigate: (page: RouteKey, sectionId?: string) => void;
};

const speckleConcepts: Array<{
  number: string;
  title: LocalizedText;
  description: LocalizedText;
}> = [
  {
    number: "01",
    title: { ja: "散乱", en: "Scattering" },
    description: {
      ja: "レーザー光は組織内のさまざまな位置で散乱し、異なる長さの光路を通って検出器へ届きます。",
      en: "Laser light is scattered at many locations in tissue and reaches the detector through paths of different lengths."
    }
  },
  {
    number: "02",
    title: { ja: "干渉", en: "Interference" },
    description: {
      ja: "光の位相が揃えば明るく、逆位相なら暗くなり、ランダムな明暗の粒状模様が生まれます。",
      en: "Waves add to a bright spot when their phases align and cancel to a dark spot when they are out of phase."
    }
  },
  {
    number: "03",
    title: { ja: "時間変動", en: "Temporal fluctuation" },
    description: {
      ja: "赤血球などの散乱体が動くと光路長が変わり、スペックルパターンも時間とともに揺らぎます。",
      en: "Motion of scatterers such as red blood cells changes optical path lengths, so the speckle pattern fluctuates over time."
    }
  }
];

function CitationLink({ id, locale }: { id: number; locale: Locale }) {
  const reference = researchReferences.find((item) => item.id === id);

  if (!reference) {
    return null;
  }

  return (
    <a
      aria-label={
        locale === "ja"
          ? `参考文献${id}を新しいタブで開く`
          : `Open reference ${id} in a new tab`
      }
      className="ml-1 whitespace-nowrap align-super text-xs font-bold text-cyan-700 underline decoration-cyan-300 underline-offset-2 transition hover:text-cyan-950"
      href={reference.url}
      rel="noreferrer"
      target="_blank"
    >
      [{id}]
    </a>
  );
}

function CitationGroup({ ids, locale }: { ids: number[]; locale: Locale }) {
  return (
    <>
      {ids.map((id) => (
        <CitationLink id={id} key={id} locale={locale} />
      ))}
    </>
  );
}

export function Research({ locale, onNavigate }: ResearchProps) {
  return (
    <section className="section-shell pb-24 pt-32 sm:pt-36" id="research">
      <div className="section-inner">
        <header className="section-rule mb-16 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-12">
          <div>
            <p className="section-kicker">Research</p>
            <h1 className="display-title mt-4 max-w-4xl">
              {locale === "ja" ? (
                <>
                  <span className="block sm:inline">からだの循環を、</span>
                  <span className="block sm:inline">光で捉える。</span>
                </>
              ) : (
                "Capturing the body's circulation with light."
              )}
            </h1>
          </div>
          <p className="body-copy max-w-3xl">
            {locale === "ja"
              ? "スペックルコントラスト分光法（SCOS）の構築と基礎的な計測評価から始まり、血流可視化、応用的なモニタリングへと研究を展開しています。"
              : "Beginning with the implementation of speckle contrast optical spectroscopy (SCOS) and foundational measurement studies, the work extends toward blood flow visualization and application-oriented monitoring."}
          </p>
        </header>

        <section aria-labelledby="speckle-title" className="panel-soft overflow-hidden">
          <div className="grid gap-10 px-5 py-10 sm:px-8 sm:py-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14 lg:px-10">
            <figure>
              <div className="overflow-hidden rounded-xl border border-slate-200 bg-white p-3 sm:p-5">
                <img
                  alt={
                    locale === "ja"
                      ? "コヒーレント光が散乱面で反射し、位相差によって明暗のスペックルを形成する模式図"
                      : "Diagram showing coherent light scattering from a surface and forming bright or dark speckles through phase differences"
                  }
                  className="h-auto w-full"
                  height="850"
                  src={`${import.meta.env.BASE_URL}images/speckle-interference-principle.png`}
                  width="1500"
                />
              </div>
              <figcaption className="mt-4 text-xs leading-6 text-slate-500 sm:text-sm">
                {locale === "ja"
                  ? "図　レーザースペックルの原理。散乱光の位相差によって、検出面に明暗の粒状模様が形成されます。"
                  : "Figure. Principle of laser speckle formation. Phase differences among scattered waves form a granular bright-and-dark pattern at the detector."}
                <br />
                <a
                  className="font-semibold text-cyan-700 underline decoration-cyan-300 underline-offset-4 hover:text-cyan-950"
                  href="https://doi.org/10.1145/2047196.2047261"
                  rel="noreferrer"
                  target="_blank"
                >
                  Source: Zizka, Olwal & Raskar, SpeckleSense (2011), Figure 3
                </a>
              </figcaption>
            </figure>

            <div>
              <p className="section-kicker">
                {locale === "ja" ? "Speckle basics" : "Speckle basics"}
              </p>
              <h2
                className="display-title mt-4"
                id="speckle-title"
              >
                {locale === "ja" ? "そもそも、スペックルとは？" : "What is a speckle pattern?"}
              </h2>
              <p className="mt-6 text-base leading-8 text-slate-700">
                {locale === "ja"
                  ? "レーザーのようなコヒーレント光を生体組織などの散乱体へ照射すると、さまざまな光路を通った光が検出面で重なり合います。その位相が揃う場所では明るく、打ち消し合う場所では暗くなり、砂粒のようなランダムな明暗模様が現れます。これがスペックルです。"
                  : "When coherent light such as a laser illuminates a scattering medium, waves that have traveled along many paths overlap at the detector. They reinforce one another at some pixels and cancel at others, creating a random granular intensity pattern called speckle."}
                <CitationGroup ids={[1, 2]} locale={locale} />
              </p>
              <p className="mt-5 text-base leading-8 text-slate-700">
                {locale === "ja"
                  ? "散乱体が静止していれば模様はほぼ保たれます。一方、赤血球が動くと光路長と位相が変わり、スペックルも時間的に揺らぎます。つまり、見かけ上はランダムな粒状模様の中に、組織内の動きに関する情報が含まれています。"
                  : "If the scatterers remain still, the pattern is largely preserved. Motion of red blood cells changes path lengths and phases, so the pattern fluctuates. The seemingly random image therefore contains information about motion inside tissue."}
                <CitationLink id={2} locale={locale} />
              </p>
            </div>
          </div>

          <ol className="grid border-t border-slate-200 lg:grid-cols-3">
            {speckleConcepts.map((concept) => (
              <li className="border-b border-slate-200 px-5 py-7 last:border-b-0 sm:px-8 lg:border-b-0 lg:px-8" key={concept.number}>
                <span className="font-display text-3xl font-semibold text-cyan-600">
                  {concept.number}
                </span>
                <h3 className="card-title mt-3">
                  {localize(locale, concept.title)}
                </h3>
                <p className="card-copy mt-3">
                  {localize(locale, concept.description)}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="contrast-title" className="py-16 sm:py-20">
          <div className="section-rule mb-10 grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-12">
            <div>
              <p className="section-kicker">
                {locale === "ja" ? "From speckle to flow" : "From speckle to flow"}
              </p>
              <h2
                className="display-title mt-3"
                id="contrast-title"
              >
                {locale === "ja" ? "揺らぎを、血流指標へ変換する" : "Turning fluctuation into a blood-flow index"}
              </h2>
            </div>
            <p className="body-copy max-w-3xl">
              {locale === "ja" ? (
                <>
                  カメラの露光中にスペックルが速く変化するほど、明暗は時間平均されてぼやけます。SCOSでは、そのぼやけを
                  <strong className="font-bold text-slate-800">コントラストK</strong>
                  として定量化し、散乱体の運動に対応する
                  <strong className="font-bold text-slate-800">血流指標（BFI）</strong>
                  へ変換します。
                </>
              ) : (
                <>
                  The faster speckle changes during a camera exposure, the more the bright-and-dark pattern is temporally averaged and blurred. SCOS quantifies that blur as
                  <strong className="font-bold text-slate-800"> contrast K</strong>
                  and converts it into a
                  <strong className="font-bold text-slate-800"> blood-flow index (BFI)</strong>
                  associated with scatterer motion.
                </>
              )}
              <CitationGroup ids={[2, 3]} locale={locale} />
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white/90">
            <div className="grid lg:grid-cols-2">
              <div className="border-b border-slate-200 px-6 py-10 sm:px-10 lg:border-b-0">
                <p className="text-sm font-bold uppercase text-cyan-700 sm:text-base">
                  {locale === "ja" ? "露光時間と相関時間" : "Exposure and correlation time"}
                </p>
                <MathFormula
                  ariaLabel="K squared of T equals two beta over T times the integral from zero to T of one minus tau over T times the magnitude of g one of tau squared d tau"
                  className="mt-7 overflow-x-auto text-lg text-slate-950 sm:text-2xl"
                  display
                  expression={String.raw`K^2(T) = \frac{2\beta}{T}\int_0^T \left(1 - \frac{\tau}{T}\right)\left|g_1(\tau)\right|^2\,d\tau`}
                />
                <p className="mt-7 text-base leading-8 text-slate-600">
                  {locale === "ja" ? (
                    <>
                      計測では
                      <MathFormula
                        ariaLabel="K equals the intensity standard deviation divided by the mean intensity"
                        className="mx-1 inline-block align-middle text-base text-slate-900"
                        expression={String.raw`K=\frac{\sigma_I}{\mu_I}`}
                      />
                      として求めます。電場自己相関関数
                      <MathFormula
                        ariaLabel="g one of tau"
                        className="mx-1 inline-block align-middle text-base text-slate-900"
                        expression={String.raw`g_1(\tau)`}
                      />
                      は相関拡散方程式の解であり、散乱体の平均平方変位
                      <MathFormula
                        ariaLabel="mean squared displacement equals six D B tau"
                        className="mx-1 inline-block align-middle text-base text-slate-900"
                        expression={String.raw`\left\langle\Delta r^2(\tau)\right\rangle=6D_B\tau`}
                      />
                      と
                      <MathFormula
                        ariaLabel="blood flow index equals alpha D B"
                        className="mx-1 inline-block align-middle text-base text-slate-900"
                        expression={String.raw`\mathrm{BFI}=\alpha D_B`}
                      />
                      を用いることで、組織内の動きとスペックルコントラストが結びつきます。
                    </>
                  ) : (
                    <>
                      Experimentally,
                      <MathFormula
                        ariaLabel="K equals the intensity standard deviation divided by the mean intensity"
                        className="mx-1 inline-block align-middle text-base text-slate-900"
                        expression={String.raw`K=\frac{\sigma_I}{\mu_I}`}
                      />
                      . The field autocorrelation
                      <MathFormula
                        ariaLabel="g one of tau"
                        className="mx-1 inline-block align-middle text-base text-slate-900"
                        expression={String.raw`g_1(\tau)`}
                      />
                      is obtained from the correlation diffusion equation. Using
                      <MathFormula
                        ariaLabel="mean squared displacement equals six D B tau"
                        className="mx-1 inline-block align-middle text-base text-slate-900"
                        expression={String.raw`\left\langle\Delta r^2(\tau)\right\rangle=6D_B\tau`}
                      />
                      and
                      <MathFormula
                        ariaLabel="blood flow index equals alpha D B"
                        className="mx-1 inline-block align-middle text-base text-slate-900"
                        expression={String.raw`\mathrm{BFI}=\alpha D_B`}
                      />
                      connects tissue dynamics to speckle contrast.
                    </>
                  )}
                  <CitationGroup ids={[3, 4]} locale={locale} />
                </p>
              </div>

              <div className="px-6 py-10 sm:px-10">
                <p className="text-sm font-bold uppercase text-cyan-700 sm:text-base">
                  {locale === "ja" ? "BFIの線形近似モデル" : "Linear approximation for BFI"}
                </p>
                <MathFormula
                  ariaLabel="Inverse K squared is approximately A times blood-flow index plus B under an assumed linear model"
                  className="mt-7 overflow-x-auto text-2xl text-slate-950 sm:text-3xl"
                  display
                  expression={String.raw`\frac{1}{K^2} \approx A \times \mathrm{BFI} + B`}
                />
                <p className="mt-7 text-base leading-8 text-slate-600">
                  {locale === "ja" ? (
                    <>
                      固定露光時間・同一光学条件のもとで、
                      <MathFormula
                        ariaLabel="inverse K squared"
                        className="mx-1 inline-block align-middle text-base text-slate-900"
                        expression={String.raw`1/K^2`}
                      />
                      とBFIの線形関係を仮定した近似式です。
                      <MathFormula
                        ariaLabel="A"
                        className="mx-1 inline-block align-middle text-base text-slate-900"
                        expression="A"
                      />
                      は計測条件に依存する感度係数、
                      <MathFormula
                        ariaLabel="B"
                        className="mx-1 inline-block align-middle text-base text-slate-900"
                        expression="B"
                      />
                      は切片を表します。
                    </>
                  ) : (
                    <>
                      This approximation assumes a linear relationship between
                      <MathFormula
                        ariaLabel="inverse K squared"
                        className="mx-1 inline-block align-middle text-base text-slate-900"
                        expression={String.raw`1/K^2`}
                      />
                      and BFI at a fixed exposure time under identical optical conditions.
                      <MathFormula
                        ariaLabel="A"
                        className="mx-1 inline-block align-middle text-base text-slate-900"
                        expression="A"
                      />
                      is the condition-dependent sensitivity and
                      <MathFormula
                        ariaLabel="B"
                        className="mx-1 inline-block align-middle text-base text-slate-900"
                        expression="B"
                      />
                      is the intercept.
                    </>
                  )}
                  <CitationLink id={3} locale={locale} />
                </p>
              </div>
            </div>

            <div className="grid border-t border-slate-200 bg-slate-50/60 lg:grid-cols-[1.08fr_0.92fr]">
              <figure className="flex h-full flex-col justify-center px-5 py-8 sm:px-8">
                <div className="grid grid-cols-2 gap-3 sm:gap-5">
                  <div className="aspect-square overflow-hidden rounded-xl border border-slate-200 bg-black shadow-soft">
                    <video
                      aria-label={locale === "ja" ? "速い血流条件のスペックル動画" : "Speckle video under a faster-flow condition"}
                      autoPlay
                      className="h-full w-full object-cover object-top"
                      loop
                      muted
                      playsInline
                    >
                      <source src={`${import.meta.env.BASE_URL}videos/speckle_BFI_fast.mp4`} type="video/mp4" />
                    </video>
                  </div>
                  <div className="aspect-square overflow-hidden rounded-xl border border-slate-200 bg-black shadow-soft">
                    <video
                      aria-label={locale === "ja" ? "遅い血流条件のスペックル動画" : "Speckle video under a slower-flow condition"}
                      autoPlay
                      className="h-full w-full object-cover object-top"
                      loop
                      muted
                      playsInline
                    >
                      <source src={`${import.meta.env.BASE_URL}videos/speckle_BFI_slow.mp4`} type="video/mp4" />
                    </video>
                  </div>
                </div>
                <figcaption className="mx-auto mt-5 max-w-2xl text-center text-xs leading-6 text-slate-500 sm:text-sm">
                  {locale === "ja"
                    ? "図　前腕組織血流の計測例。血流が速い条件では露光中の時間平均によって粒状模様がぼけ、スペックルコントラストが小さくなります。"
                    : "Figure. Example of forearm tissue blood flow measurement. Under faster flow, temporal averaging during exposure blurs the granular pattern and lowers speckle contrast."}
                </figcaption>
              </figure>

              <div className="flex h-full flex-col justify-center px-5 py-8 sm:px-8">
                <p className="section-kicker">{locale === "ja" ? "関係の模式図" : "Relationship guide"}</p>
                <h3 className="subsection-title mt-3">
                  {locale === "ja" ? "赤血球の運動・K・BFIの対応" : "Red blood cell motion, K, and BFI"}
                </h3>

                <div className="mt-6 space-y-4">
                  <div className="rounded-xl border border-cyan-200 bg-cyan-50/80 p-4 sm:p-5">
                    <p className="mb-5 text-sm font-bold text-cyan-800 sm:text-base">
                      {locale === "ja" ? "赤血球の運動が速いとき" : "Faster red blood cell motion"}
                    </p>
                    <div className="grid gap-2 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-center">
                      <div>
                        <p className="text-xs font-semibold text-slate-500 sm:text-sm">{locale === "ja" ? "赤血球の運動" : "RBC motion"}</p>
                        <p className="mt-1 font-bold text-slate-950">{locale === "ja" ? "速い" : "Faster"}</p>
                      </div>
                      <ArrowDown aria-hidden="true" className="h-4 w-4 text-cyan-600 sm:hidden" />
                      <ArrowRight aria-hidden="true" className="hidden h-4 w-4 text-cyan-600 sm:block" />
                      <div>
                        <p className="text-xs font-semibold text-slate-500 sm:text-sm">{locale === "ja" ? "コントラストK" : "Contrast K"}</p>
                        <p className="mt-1 font-bold text-slate-950">{locale === "ja" ? "低下" : "Decreases"}</p>
                      </div>
                      <ArrowDown aria-hidden="true" className="h-4 w-4 text-cyan-600 sm:hidden" />
                      <ArrowRight aria-hidden="true" className="hidden h-4 w-4 text-cyan-600 sm:block" />
                      <div>
                        <p className="text-xs font-semibold text-slate-500 sm:text-sm">BFI</p>
                        <p className="mt-1 font-bold text-cyan-900">{locale === "ja" ? "増加" : "Increases"}</p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5">
                    <p className="mb-5 text-sm font-bold text-slate-700 sm:text-base">
                      {locale === "ja" ? "赤血球の運動が遅いとき" : "Slower red blood cell motion"}
                    </p>
                    <div className="grid gap-2 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-center">
                      <div>
                        <p className="text-xs font-semibold text-slate-500 sm:text-sm">{locale === "ja" ? "赤血球の運動" : "RBC motion"}</p>
                        <p className="mt-1 font-bold text-slate-950">{locale === "ja" ? "遅い" : "Slower"}</p>
                      </div>
                      <ArrowDown aria-hidden="true" className="h-4 w-4 text-slate-400 sm:hidden" />
                      <ArrowRight aria-hidden="true" className="hidden h-4 w-4 text-slate-400 sm:block" />
                      <div>
                        <p className="text-xs font-semibold text-slate-500 sm:text-sm">{locale === "ja" ? "コントラストK" : "Contrast K"}</p>
                        <p className="mt-1 font-bold text-slate-950">{locale === "ja" ? "増加" : "Increases"}</p>
                      </div>
                      <ArrowDown aria-hidden="true" className="h-4 w-4 text-slate-400 sm:hidden" />
                      <ArrowRight aria-hidden="true" className="hidden h-4 w-4 text-slate-400 sm:block" />
                      <div>
                        <p className="text-xs font-semibold text-slate-500 sm:text-sm">BFI</p>
                        <p className="mt-1 font-bold text-slate-700">{locale === "ja" ? "低下" : "Decreases"}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="mt-5 text-xs leading-6 text-slate-500">
                  {locale === "ja"
                    ? "固定露光時間・同一光学条件における関係を模式的に示しています。"
                    : "Schematic relationship at a fixed exposure time under identical optical conditions."}
                  <CitationLink id={3} locale={locale} />
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 grid border-y border-slate-200 lg:grid-cols-2">
              <div className="py-5 lg:pr-8">
                <p className="text-base font-bold leading-7 text-slate-950">
                  {locale === "ja" ? "Kは速度そのものではない" : "K is not velocity itself"}
                </p>
                <p className="card-copy mt-2">
                  {locale === "ja" ? (
                    <>
                      <span className="block">コントラストは露光時間、光学系、検出深度、ノイズの影響も受けます。</span>
                      <span className="mt-1 block">そのため、モデルと補正条件を明示して血流指標として解釈します。</span>
                    </>
                  ) : (
                    <>
                      <span className="block">Contrast also depends on exposure, optics, sampling depth, and noise.</span>
                      <span className="mt-1 block">It is interpreted as a flow index under stated model and calibration conditions.</span>
                    </>
                  )}
                  <CitationGroup ids={[3, 6, 7]} locale={locale} />
                </p>
              </div>
              <div className="border-t border-slate-200 py-5 lg:border-t-0 lg:pl-8">
                <p className="text-base font-bold leading-7 text-slate-950">
                  {locale === "ja" ? "相対変化を追跡する" : "Tracking relative change"}
                </p>
                <p className="card-copy mt-2">
                  {locale === "ja"
                    ? "安静時を基準に正規化した相対BFIを用いることで、運動や循環変化に伴う時系列応答を連続的に評価できます。"
                    : "Relative BFI normalized to a baseline can continuously track temporal responses to exercise or circulatory change."}
                  <CitationGroup ids={[3, 4]} locale={locale} />
                </p>
              </div>
          </div>
        </section>

        <section aria-labelledby="scos-title" className="panel-soft overflow-hidden">
          <div className="grid gap-8 px-5 py-10 sm:px-8 sm:py-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:px-10">
            <div>
              <p className="text-base font-bold uppercase text-cyan-700 sm:text-lg">SCOS</p>
              <h2 className="display-title mt-4" id="scos-title">
                {locale === "ja" ? "スペックルを、深部血流計測へ" : "Extending speckle to deeper-tissue flow measurement"}
              </h2>
            </div>
            <div className="max-w-3xl space-y-5 text-base leading-8 text-slate-700">
              <p>
                {locale === "ja"
                  ? "SCOSは、近赤外レーザー光を組織へ照射し、離れた位置で戻ってきた拡散光をマルチモードファイバーとCMOSカメラで検出します。光源と検出器の間隔を設けることで、多重散乱を受けた光を選び、表面だけでなくより深い組織の血流変化へ感度を持たせます。"
                  : "SCOS illuminates tissue with near-infrared coherent light and detects diffusely returning light at a separated position using a multimode fiber and CMOS camera. Source-detector separation favors multiply scattered photons and increases sensitivity beyond the surface."}
                <CitationGroup ids={[4, 5]} locale={locale} />
              </p>
              <p>
                {locale === "ja"
                  ? "カメラ上の多数のスペックルモードを並列に取得できることがSCOSの特徴です。空間コントラストをフレームごとに計算するため、高い時間分解能、多点化、血流分布の可視化へ展開できます。"
                  : "A defining feature of SCOS is the parallel acquisition of many speckle modes on a camera. Frame-wise spatial contrast can support high temporal resolution, multiple detection channels, and visualization of flow distributions."}
                <CitationGroup ids={[4, 7]} locale={locale} />
              </p>
            </div>
          </div>

          <div className="grid border-t border-slate-200 lg:grid-cols-3">
            <div className="border-b border-slate-200 px-5 py-7 sm:px-8 lg:border-b-0">
              <p className="meta-label text-cyan-700">01 / Illuminate</p>
              <h3 className="card-title mt-3">
                {locale === "ja" ? "近赤外光を入射" : "Near-infrared illumination"}
              </h3>
              <p className="card-copy mt-3">
                {locale === "ja"
                  ? "長いコヒーレンス長を持つレーザー光を組織へ入射し、赤血球を含む散乱体との相互作用を生じさせます。"
                  : "Long-coherence laser light enters tissue and interacts with moving scatterers including red blood cells."}
              </p>
            </div>
            <div className="border-b border-slate-200 px-5 py-7 sm:px-8 lg:border-b-0">
              <p className="meta-label text-cyan-700">02 / Detect</p>
              <h3 className="card-title mt-3">
                {locale === "ja" ? "拡散光を並列検出" : "Parallel diffuse-light detection"}
              </h3>
              <p className="card-copy mt-3">
                {locale === "ja"
                  ? "マルチモードファイバーで集光した多数のスペックルをCMOSカメラへ結像し、同時に撮像します。"
                  : "A multimode fiber collects diffuse light, and many speckles are imaged simultaneously on a CMOS sensor."}
              </p>
            </div>
            <div className="px-5 py-7 sm:px-8">
              <p className="meta-label text-cyan-700">03 / Estimate</p>
              <h3 className="card-title mt-3">
                {locale === "ja" ? "コントラストからBFIへ" : "From contrast to BFI"}
              </h3>
              <p className="card-copy mt-3">
                {locale === "ja"
                  ? "ノイズ補正したKと露光モデルからBFIを算出し、組織血流の相対変化を時系列で追跡します。"
                  : "Noise-corrected K and an exposure model yield BFI for tracking relative tissue-flow changes over time."}
              </p>
            </div>
          </div>

        </section>

        <section aria-labelledby="research-projects-title" className="py-16 sm:py-20">
          <div className="section-rule mb-9 grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-12">
            <div>
              <p className="section-kicker">
                {locale === "ja" ? "研究プロジェクト" : "Research projects"}
              </p>
              <h2 className="display-title mt-3" id="research-projects-title">
                {locale === "ja" ? "3つの研究展開" : "Three directions of research"}
              </h2>
            </div>
            <p className="body-copy max-w-3xl">
              {locale === "ja"
                ? "測定可能深度の評価、血流分布の可視化、ショック時の末梢循環モニタリングを通して、SCOSを基礎評価から応用へ展開しています。"
                : "The work develops SCOS from foundational evaluation toward applications through measurable-depth studies, flow-distribution mapping, and peripheral monitoring during shock."}
            </p>
          </div>

          <div className="grid gap-7 lg:grid-cols-3">
            {researchProjects.map((project, index) => (
              <ResearchProjectCard index={index} key={project.title.en} locale={locale} project={project} />
            ))}
          </div>
        </section>

        <section aria-labelledby="references-title" className="border-t border-slate-300 py-14">
          <div className="mb-9 grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-12">
            <div>
              <p className="section-kicker">References</p>
              <h2 className="display-title mt-3" id="references-title">
                {locale === "ja" ? "参考文献" : "Selected references"}
              </h2>
            </div>
            <p className="card-copy max-w-3xl">
              {locale === "ja"
                ? "スペックルの基礎、露光モデル、SCOSの計測系と定量性に関する一次文献を掲載しています。各項目からDOIページへ移動できます。"
                : "Primary references on speckle fundamentals, exposure models, and the instrumentation and quantification of SCOS are listed below. Each entry links to its DOI page."}
            </p>
          </div>

          <ol className="grid gap-x-12 lg:grid-cols-2">
            {researchReferences.map((reference) => (
              <li className="border-t border-slate-200" key={reference.doi}>
                <a
                  aria-label={`${reference.title} (${locale === "ja" ? "新しいタブで開く" : "opens in a new tab"})`}
                  className="group grid gap-3 px-3 py-6 transition-colors hover:bg-white focus-visible:bg-white sm:grid-cols-[2.5rem_1fr] sm:px-4"
                  href={reference.url}
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="font-display text-xl font-semibold text-cyan-600">[{reference.id}]</span>
                  <span>
                    <span className="text-sm font-semibold text-slate-500">
                      {reference.authors} ({reference.year})
                    </span>
                    <span className="mt-1 block text-base font-bold leading-7 text-slate-900">{reference.title}</span>
                    <span className="mt-1 block text-sm leading-6 text-slate-500">{reference.journal}</span>
                    <span className="mt-2 inline-flex max-w-full items-center gap-2 text-sm font-bold text-cyan-700 underline decoration-cyan-300 underline-offset-4 group-hover:text-cyan-950">
                      DOI {reference.doi}<span aria-hidden="true">↗</span>
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </section>

        <div className="flex flex-col gap-5 border-t border-slate-300 py-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="card-title">
              {locale === "ja" ? "研究成果と発表記録もご覧いただけます。" : "Continue to publications and presentation records."}
            </p>
            <p className="card-copy mt-2">
              {locale === "ja"
                ? "論文、学会発表、共同研究に関する連絡先をホームにまとめています。"
                : "Publications, presentations, and contact details are collected on the home page."}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              className="rounded-full bg-cyan-700 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-cyan-800"
              onClick={() => onNavigate("home", "publications")}
              type="button"
            >
              {locale === "ja" ? "論文を見る" : "View publications"}
            </button>
            <button
              className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-800 transition hover:-translate-y-0.5 hover:border-cyan-400 hover:text-cyan-800"
              onClick={() => onNavigate("home", "contact")}
              type="button"
            >
              {locale === "ja" ? "連絡先へ" : "Go to contact"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
