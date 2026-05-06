import { aboutDetails, profile } from "../data/profile";
import type { Locale, RouteKey } from "../types";
import { localize } from "../utils/localize";

type HeroProps = {
  locale: Locale;
  onNavigate: (page: RouteKey, sectionId?: string) => void;
};

export function Hero({ locale, onNavigate }: HeroProps) {
  const secondaryName = locale === "ja" ? profile.name.en : profile.name.ja;
  const educationDetail = aboutDetails.find((detail) => detail.label.en === "Education");
  const educationLines = educationDetail
    ? localize(locale, educationDetail.value).split("\n").filter(Boolean)
    : [];

  const copy = {
    eyebrow: locale === "ja" ? "ホーム" : "Home",
    label: locale === "ja" ? "研究者プロフィール" : "Researcher profile",
    researchButton: locale === "ja" ? "研究内容を見る" : "View Research",
    publicationsButton: locale === "ja" ? "論文を見る" : "View Publications",
    contactButton: locale === "ja" ? "連絡先を見る" : "Contact",
    profileLabel: locale === "ja" ? "プロフィール" : "Profile",
    fieldLabel: locale === "ja" ? "研究分野" : "Research field",
    educationLabel: locale === "ja" ? "学歴" : "Education",
    linksLabel: locale === "ja" ? "External profiles" : "External profiles"
  };

  return (
    <section className="section-shell pt-28 sm:pt-32" id="home">
      <div className="section-inner">
        <div className="grid items-start gap-10 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="space-y-8">
            <span className="eyebrow">{copy.eyebrow}</span>

            <div className="space-y-5">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700">
                {copy.label}
              </p>
              <div className="space-y-2">
                <h1 className="font-display text-5xl font-bold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
                  {profile.name[locale]}
                </h1>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
                  {secondaryName}
                </p>
              </div>
              <div className="space-y-2 text-slate-600">
                <p className="text-xl font-semibold text-slate-700 sm:text-2xl">
                  {profile.position[locale]}
                </p>
                <p className="text-lg leading-8">{profile.affiliation[locale]}</p>
              </div>
              <p className="max-w-2xl text-lg leading-9 text-slate-700">
                {profile.shortBio[locale]}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                className="inline-flex items-center justify-center rounded-full bg-cyan-600 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-cyan-700"
                onClick={() => onNavigate("research", "research")}
                type="button"
              >
                {copy.researchButton}
              </button>
              <button
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-cyan-300 hover:text-cyan-700"
                onClick={() => onNavigate("home", "publications")}
                type="button"
              >
                {copy.publicationsButton}
              </button>
              <button
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-cyan-300 hover:text-cyan-700"
                onClick={() => onNavigate("home", "contact")}
                type="button"
              >
                {copy.contactButton}
              </button>
            </div>
          </div>

          <div className="section-card p-6 sm:p-8">
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-700">
                  {copy.profileLabel}
                </p>
                <p className="max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                  {locale === "ja"
                    ? "研究分野、学歴、外部プロフィールをまとめています。"
                    : "Research field, academic background, and external profiles are summarized here."}
                </p>
              </div>

              <div className="grid gap-4">
                <div className="rounded-[1.5rem] border border-slate-100 bg-slate-50/80 px-5 py-4">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-slate-500">
                    {copy.fieldLabel}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-700">
                    {profile.researchField[locale]}
                  </p>
                </div>

                <div className="rounded-[1.5rem] border border-slate-100 bg-slate-50/80 px-5 py-4">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-slate-500">
                    {copy.educationLabel}
                  </p>
                  <ul className="mt-2 space-y-2 text-sm leading-7 text-slate-700">
                    {educationLines.map((line) => (
                      <li className="flex items-start gap-3" key={line}>
                        <span
                          aria-hidden="true"
                          className="mt-3 h-1.5 w-1.5 flex-none rounded-full bg-cyan-500"
                        />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-[1.5rem] border border-slate-100 bg-slate-50/80 px-5 py-4">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-slate-500">
                    {copy.linksLabel}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-3">
                    <a
                      className="inline-flex items-center justify-center rounded-full border border-cyan-200 bg-white px-4 py-2 text-sm font-semibold text-cyan-800 transition hover:-translate-y-0.5 hover:border-cyan-300 hover:text-cyan-900"
                      href={profile.linkedinUrl}
                      rel="noreferrer"
                      target="_blank"
                    >
                      LinkedIn
                    </a>
                    <a
                      className="inline-flex items-center justify-center rounded-full border border-cyan-200 bg-white px-4 py-2 text-sm font-semibold text-cyan-800 transition hover:-translate-y-0.5 hover:border-cyan-300 hover:text-cyan-900"
                      href={profile.researchmapUrl}
                      rel="noreferrer"
                      target="_blank"
                    >
                      researchmap
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
