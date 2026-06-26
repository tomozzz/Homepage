import type { SVGProps } from "react";

import { aboutDetails, profile } from "../data/profile";
import type { Locale, RouteKey } from "../types";
import { localize } from "../utils/localize";

type HeroProps = {
  locale: Locale;
  onNavigate: (page: RouteKey, sectionId?: string) => void;
};

type IconProps = SVGProps<SVGSVGElement>;

function MailIcon(props: IconProps) {
  return (
    <svg fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" {...props}>
      <rect height="14" rx="3" width="18" x="3" y="5" />
      <path d="M5.5 7.5L12 12.5L18.5 7.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LinkedInIcon(props: IconProps) {
  return (
    <svg fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" {...props}>
      <rect height="18" rx="4" width="18" x="3" y="3" />
      <path d="M8 10V16" strokeLinecap="round" />
      <path d="M8 7.5H8.01" strokeLinecap="round" />
      <path d="M12 16V10" strokeLinecap="round" />
      <path
        d="M12 11.5C12.7 10.5 13.7 10 15 10C17 10 18 11.4 18 13.8V16"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ResearchMapIcon(props: IconProps) {
  return (
    <svg fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" {...props}>
      <circle cx="6" cy="7" r="2.5" />
      <circle cx="18" cy="8" r="2.5" />
      <circle cx="12" cy="17" r="2.5" />
      <path d="M8.2 8.2L10.5 14.3" strokeLinecap="round" />
      <path d="M15.8 9.2L13.5 14.3" strokeLinecap="round" />
      <path d="M8.5 7.8H15.5" strokeLinecap="round" />
    </svg>
  );
}

function CodeIcon(props: IconProps) {
  return (
    <svg fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" {...props}>
      <path d="M9 8L5 12L9 16" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 8L19 12L15 16" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 5L11 19" strokeLinecap="round" />
    </svg>
  );
}

function renderEducationLine(line: string) {
  const tsukubaProgram = "筑波大学大学院理工情報生命学術院システム情報工学研究群";

  if (!line.includes(tsukubaProgram)) {
    return line;
  }

  return (
    <>
      <span className="block">筑波大学大学院理工情報生命学術院</span>
      <span className="block">
        システム情報工学研究群
        {line.replace(tsukubaProgram, "")}
      </span>
    </>
  );
}

export function Hero({ locale, onNavigate }: HeroProps) {
  const secondaryName = locale === "ja" ? profile.name.en : profile.name.ja;
  const educationDetail = aboutDetails.find((detail) => detail.label.en === "Education");
  const educationLines = educationDetail
    ? localize(locale, educationDetail.value).split("\n").filter(Boolean)
    : [];

  const externalProfiles = [
    {
      label: "Email",
      href: `mailto:${profile.email}`,
      icon: MailIcon
    },
    {
      label: "LinkedIn",
      href: profile.linkedinUrl,
      icon: LinkedInIcon
    },
    {
      label: "researchmap",
      href: profile.researchmapUrl,
      icon: ResearchMapIcon
    },
    ...(profile.githubUrl
      ? [
          {
            label: "GitHub",
            href: profile.githubUrl,
            icon: CodeIcon
          }
        ]
      : [])
  ];

  const copy = {
    label: locale === "ja" ? "研究者プロフィール" : "Researcher profile",
    researchButton: locale === "ja" ? "研究内容を見る" : "View Research",
    publicationsButton: locale === "ja" ? "論文を見る" : "View Publications",
    contactButton: locale === "ja" ? "連絡先を見る" : "Contact",
    profileLabel: locale === "ja" ? "プロフィール" : "Profile",
    profileDescription:
      locale === "ja"
        ? "研究分野、学歴、外部プロフィールをまとめています。"
        : "Research field, academic background, and external profiles are summarized here.",
    fieldLabel: locale === "ja" ? "研究分野" : "Research field",
    educationLabel: locale === "ja" ? "学歴" : "Education",
    linksLabel: "External profiles"
  };

  return (
    <section className="section-shell pt-28 sm:pt-32" id="home">
      <div className="section-inner">
        <div className="grid items-start gap-12 xl:grid-cols-[0.88fr_1.12fr] xl:gap-16">
          <div className="space-y-8 xl:pt-4">
            <div className="space-y-6">
              <p className="section-kicker">
                {copy.label}
              </p>

              <div className="space-y-3">
                <h1 className="font-display text-5xl font-bold leading-[1.12] text-slate-950 sm:text-6xl xl:text-7xl">
                  {profile.name[locale]}
                </h1>
                <p className="text-sm font-semibold uppercase text-slate-500">
                  {secondaryName}
                </p>
              </div>

              <div className="space-y-2 border-l-2 border-cyan-200 pl-5 text-slate-600">
                <p className="text-xl font-semibold leading-8 text-slate-800 sm:text-2xl">
                  <span className="inline-block break-keep">
                    {profile.position[locale]}
                  </span>
                </p>
                <p className="text-base leading-8 sm:text-lg">{profile.affiliation[locale]}</p>
              </div>

              <p className="max-w-[42rem] text-base leading-8 text-slate-700 sm:text-lg sm:leading-9">
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

          <aside className="section-card overflow-hidden p-6 sm:p-8 xl:p-9">
            <div>
              <div className="grid gap-3 sm:grid-cols-[10rem_minmax(0,1fr)] sm:items-start sm:gap-8">
                <p className="section-kicker sm:pt-1">
                  {copy.profileLabel}
                </p>
                <p className="card-copy">
                  {copy.profileDescription}
                </p>
              </div>

              <dl className="mt-8 border-y border-slate-200">
                <div className="grid gap-3 border-b border-slate-200 py-6 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-8">
                  <dt className="meta-label">
                    {copy.fieldLabel}
                  </dt>
                  <dd className="card-copy min-w-0 text-slate-700 [word-break:auto-phrase]">
                    {profile.researchField[locale]}
                  </dd>
                </div>

                <div className="grid gap-3 border-b border-slate-200 py-6 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-8">
                  <dt className="meta-label">
                    {copy.educationLabel}
                  </dt>
                  <dd className="min-w-0">
                    <ul className="min-w-0 space-y-3 text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">
                    {educationLines.map((line) => (
                      <li className="flex min-w-0 items-start gap-3" key={line}>
                        <span
                          aria-hidden="true"
                          className="mt-[0.7rem] h-1.5 w-1.5 flex-none rounded-full bg-cyan-500"
                        />
                        <span className="min-w-0 [word-break:auto-phrase]">
                          {renderEducationLine(line)}
                        </span>
                      </li>
                    ))}
                    </ul>
                  </dd>
                </div>

                <div className="grid gap-4 py-6 sm:grid-cols-[10rem_minmax(0,1fr)] sm:items-center sm:gap-8">
                  <dt className="meta-label">
                    {copy.linksLabel}
                  </dt>
                  <dd className="grid grid-cols-4 gap-3">
                    {externalProfiles.map((item) => {
                      const Icon = item.icon;

                      return (
                        <a
                          aria-label={item.label}
                          className="inline-flex min-w-0 flex-col items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white px-2 py-3 text-cyan-800 transition hover:-translate-y-0.5 hover:border-cyan-300 hover:text-cyan-950"
                          href={item.href}
                          key={item.label}
                          rel={item.href.startsWith("mailto:") ? undefined : "noreferrer"}
                          target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                          title={item.label}
                        >
                          <Icon aria-hidden="true" className="h-5 w-5" />
                          <span className="truncate text-[0.68rem] font-semibold text-slate-500">
                            {item.label}
                          </span>
                        </a>
                      );
                    })}
                  </dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
