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

type ContactProps = {
  locale: Locale;
};

export function Contact({ locale }: ContactProps) {
  const contactItems = [
    {
      label: "Email",
      compactValue: profile.email,
      href: `mailto:${profile.email}`,
      note: locale === "ja" ? "研究連絡" : "Research contact",
      icon: MailIcon
    },
    {
      label: "LinkedIn",
      compactValue: locale === "ja" ? "プロフィールを開く" : "Open profile",
      href: profile.linkedinUrl,
      note: locale === "ja" ? "外部プロフィール" : "Professional profile",
      icon: LinkedInIcon
    },
    {
      label: "researchmap",
      compactValue: locale === "ja" ? "研究業績を見る" : "View profile",
      href: profile.researchmapUrl,
      note: locale === "ja" ? "研究活動情報" : "Academic activity record",
      icon: ResearchMapIcon
    },
    ...(profile.githubUrl
      ? [
          {
            label: "GitHub",
            compactValue: "@tomozzz",
            href: profile.githubUrl,
            note: locale === "ja" ? "コードとプロジェクト" : "Code and projects",
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
              ? "研究連絡や共同研究の相談をお待ちしております。"
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
                className="flex h-full min-h-[12rem] min-w-0 flex-col justify-between gap-8 p-5 sm:p-6"
                href={item.href}
                key={item.label}
              >
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </div>
                </div>

                <div className="min-w-0">
                  <p className="meta-label">
                    {item.note}
                  </p>
                  <h3 className="card-title mt-2">
                    {item.label}
                  </h3>
                  <p className="card-copy mt-3 min-w-0 text-slate-500">
                    {item.compactValue}
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
