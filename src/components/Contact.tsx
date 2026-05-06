import type { SVGProps } from "react";

import { profile } from "../data/profile";
import type { Locale } from "../types";

import { ExternalLinkCard } from "./ExternalLinkCard";
import { SectionTitle } from "./SectionTitle";

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
      label: "Email",
      value: profile.email,
      compactValue: profile.email,
      href: `mailto:${profile.email}`,
      note: locale === "ja" ? "研究連絡" : "Research contact",
      action: locale === "ja" ? "メールを送る" : "Send email",
      icon: MailIcon
    },
    {
      label: "LinkedIn",
      value: formatDisplayUrl(profile.linkedinUrl),
      compactValue: locale === "ja" ? "プロフィールを開く" : "Open profile",
      href: profile.linkedinUrl,
      note: locale === "ja" ? "外部プロフィール" : "Professional profile",
      action: locale === "ja" ? "外部ページへ" : "Open profile",
      icon: LinkedInIcon
    },
    {
      label: "researchmap",
      value: formatDisplayUrl(profile.researchmapUrl),
      compactValue: locale === "ja" ? "研究業績を見る" : "View profile",
      href: profile.researchmapUrl,
      note: locale === "ja" ? "研究活動情報" : "Academic activity record",
      action: locale === "ja" ? "外部ページへ" : "Open profile",
      icon: ResearchMapIcon
    },
    ...(profile.githubUrl
      ? [
          {
            label: "GitHub",
            value: formatDisplayUrl(profile.githubUrl),
            compactValue: "@tomozzz",
            href: profile.githubUrl,
            note: locale === "ja" ? "コードとプロジェクト" : "Code and projects",
            action: locale === "ja" ? "外部ページへ" : "Open repository",
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

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contactItems.map((item) => {
            const Icon = item.icon;

            return (
              <ExternalLinkCard
                ariaLabel={`${item.label}${locale === "ja" ? " の外部リンク" : " external link"}`}
                className="flex h-full min-w-0 flex-col justify-between gap-6 p-5 sm:p-6"
                href={item.href}
                key={item.label}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </div>
                  <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-500">
                    {item.label}
                  </span>
                </div>

                <div className="min-w-0 space-y-3">
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
                    {item.note}
                  </p>
                  <p className="text-2xl font-semibold tracking-tight text-slate-900">
                    {item.label}
                  </p>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">
                      {item.action}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-500 lg:hidden [overflow-wrap:anywhere]">
                      {item.value}
                    </p>
                    <p className="mt-2 hidden text-sm leading-6 text-slate-500 lg:block lg:group-hover:hidden lg:group-focus-visible:hidden">
                      {item.compactValue}
                    </p>
                    <p className="hidden text-sm leading-6 text-slate-500 [overflow-wrap:anywhere] lg:group-hover:block lg:group-focus-visible:block">
                      {item.value}
                    </p>
                  </div>
                </div>
              </ExternalLinkCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
