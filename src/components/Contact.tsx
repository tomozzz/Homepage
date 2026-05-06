import type { SVGProps } from "react";

import { profile } from "../data/profile";
import type { Locale } from "../types";

import { ExternalLinkCard } from "./ExternalLinkCard";
import { SectionTitle } from "./SectionTitle";

type IconProps = SVGProps<SVGSVGElement>;

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

function formatDisplayUrl(url: string) {
  try {
    const parsed = new URL(url);
    return `${parsed.host}${parsed.pathname}`.replace(/\/$/, "");
  } catch {
    return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
  }
}

type ContactProps = {
  locale: Locale;
};

export function Contact({ locale }: ContactProps) {
  const contactItems = [
    {
      label: "LinkedIn",
      value: formatDisplayUrl(profile.linkedinUrl),
      href: profile.linkedinUrl,
      note: locale === "ja" ? "プロフェッショナルプロフィール" : "Professional profile",
      icon: LinkedInIcon
    },
    {
      label: "researchmap",
      value: formatDisplayUrl(profile.researchmapUrl),
      href: profile.researchmapUrl,
      note: locale === "ja" ? "研究活動情報" : "Academic activity record",
      icon: ResearchMapIcon
    },
    ...(profile.githubUrl
      ? [
          {
            label: "GitHub",
            value: formatDisplayUrl(profile.githubUrl),
            href: profile.githubUrl,
            note: locale === "ja" ? "コードとプロジェクト" : "Code and project repository",
            icon: CodeIcon
          }
        ]
      : [])
  ];

  return (
    <section className="section-shell pb-24" id="contact">
      <div className="section-inner">
        <SectionTitle
          description={
            locale === "ja"
              ? "研究連絡や共同研究の相談につながるよう、シンプルでアクセスしやすい連絡先に整理しています。"
              : "A simple contact area designed for research communication and potential collaboration."
          }
          eyebrow="Contact"
          title={locale === "ja" ? "連絡先" : "Get in touch"}
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {contactItems.map((item) => {
            const Icon = item.icon;

            return (
              <ExternalLinkCard
                ariaLabel={`${item.label}${locale === "ja" ? " の外部リンク" : " external link"}`}
                className="flex h-full min-w-0 flex-col justify-between gap-6"
                href={item.href}
                key={item.label}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700">
                    <Icon aria-hidden="true" className="h-6 w-6" />
                  </div>
                  <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-500">
                    {item.label}
                  </span>
                </div>

                <div className="min-w-0 space-y-3">
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
                    {item.note}
                  </p>
                  <p className="break-words text-lg font-semibold leading-7 text-slate-900 [overflow-wrap:anywhere]">
                    {item.value}
                  </p>
                </div>
              </ExternalLinkCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
