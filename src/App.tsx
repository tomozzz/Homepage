import { useEffect, useState } from "react";

import { About } from "./components/About";
import { Awards } from "./components/Awards";
import { Conferences } from "./components/Conferences";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Publications } from "./components/Publications";
import { Research } from "./components/Research";
import { profile } from "./data/profile";
import type { Locale, NavSection, RouteKey } from "./types";

const sections: NavSection[] = [
  { id: "home", label: { ja: "ホーム", en: "Home" }, page: "home" },
  { id: "about", label: { ja: "プロフィール", en: "About" }, page: "home" },
  { id: "research", label: { ja: "研究内容", en: "Research" }, page: "research" },
  { id: "publications", label: { ja: "論文", en: "Publications" }, page: "home" },
  {
    id: "presentations",
    label: { ja: "学会発表", en: "Presentations" },
    page: "home"
  },
  { id: "awards", label: { ja: "受賞歴", en: "Awards" }, page: "home" },
  { id: "contact", label: { ja: "連絡先", en: "Contact" }, page: "home" }
];

const getPageFromUrl = (): RouteKey =>
  new URLSearchParams(window.location.search).get("page") === "research"
    ? "research"
    : "home";

const updateMetaTag = (
  selector: string,
  attribute: "content",
  value: string,
  fallbackAttributes: Record<string, string>
) => {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement("meta");
    Object.entries(fallbackAttributes).forEach(([key, attributeValue]) => {
      element?.setAttribute(key, attributeValue);
    });
    document.head.appendChild(element);
  }

  element.setAttribute(attribute, value);
};

function App() {
  const [locale, setLocale] = useState<Locale>(() => {
    const savedLocale = window.localStorage.getItem("homepage-locale");
    return savedLocale === "en" ? "en" : "ja";
  });
  const [page, setPage] = useState<RouteKey>(getPageFromUrl());
  const [activeSection, setActiveSection] = useState(
    page === "research" ? "research" : "home"
  );

  useEffect(() => {
    const syncFromUrl = () => {
      const nextPage = getPageFromUrl();
      setPage(nextPage);
      setActiveSection(nextPage === "research" ? "research" : "home");
    };

    window.addEventListener("popstate", syncFromUrl);
    return () => window.removeEventListener("popstate", syncFromUrl);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("homepage-locale", locale);
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    const isResearchPage = page === "research";
    const title =
      locale === "ja"
        ? isResearchPage
          ? `研究内容 | ${profile.name.ja}`
          : `${profile.name.ja} | Personal Website`
        : isResearchPage
          ? `Research | ${profile.name.en}`
          : `${profile.name.en} | Personal Website`;

    const description =
      locale === "ja"
        ? isResearchPage
          ? "スペックルイメージングから SCOS、深さ評価、血流マッピング、出血性ショックモデルへの応用までを紹介する研究ページです。"
          : "山本智也の個人ホームページ。医用光学、スペックルイメージング、SCOS、非侵襲血流モニタリングに関する研究活動を紹介します。"
        : isResearchPage
          ? "Research page covering speckle imaging, the SCOS principle, depth evaluation, blood flow mapping, and applications to hemorrhagic shock models."
          : "Personal website of Tomoya Yamamoto, focusing on biomedical optics, speckle imaging, SCOS, and noninvasive blood flow monitoring.";

    document.title = title;

    updateMetaTag('meta[name="description"]', "content", description, {
      name: "description"
    });
    updateMetaTag('meta[property="og:title"]', "content", title, {
      property: "og:title"
    });
    updateMetaTag('meta[property="og:description"]', "content", description, {
      property: "og:description"
    });
    updateMetaTag('meta[property="og:site_name"]', "content", title, {
      property: "og:site_name"
    });
    updateMetaTag('meta[name="twitter:title"]', "content", title, {
      name: "twitter:title"
    });
    updateMetaTag('meta[name="twitter:description"]', "content", description, {
      name: "twitter:description"
    });
    updateMetaTag(
      'meta[property="og:image"]',
      "content",
      `${window.location.origin}${import.meta.env.BASE_URL}og-image.svg`,
      { property: "og:image" }
    );
  }, [locale, page]);

  useEffect(() => {
    if (page === "research") {
      setActiveSection("research");
      return;
    }

    const homeSections = sections.filter((section) => section.page === "home");
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => right.intersectionRatio - left.intersectionRatio);

        if (visibleEntries[0]) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.15, 0.3, 0.55]
      }
    );

    homeSections.forEach((section) => {
      const element = document.getElementById(section.id);

      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [page]);

  const navigate = (targetPage: RouteKey, sectionId?: string) => {
    const url = new URL(window.location.href);

    if (targetPage === "research") {
      url.searchParams.set("page", "research");
    } else {
      url.searchParams.delete("page");
    }

    url.hash = sectionId ? `#${sectionId}` : "";
    window.history.pushState({}, "", `${url.pathname}${url.search}${url.hash}`);

    setPage(targetPage);
    setActiveSection(targetPage === "research" ? "research" : sectionId ?? "home");

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        if (targetPage === "research") {
          window.scrollTo({ top: 0, behavior: "smooth" });
          return;
        }

        if (sectionId) {
          document.getElementById(sectionId)?.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
          return;
        }

        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    });
  };

  return (
    <div className="relative min-h-screen overflow-x-clip">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[38rem] bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_32%),radial-gradient(circle_at_top_right,_rgba(56,189,248,0.12),_transparent_30%)] blur-3xl" />
      <Header
        activeSection={activeSection}
        locale={locale}
        onLocaleChange={setLocale}
        onNavigate={navigate}
        sections={sections}
      />
      <main>
        {page === "research" ? (
          <Research locale={locale} onNavigate={navigate} />
        ) : (
          <>
            <Hero locale={locale} onNavigate={navigate} />
            <About locale={locale} />
            <Publications locale={locale} />
            <Conferences locale={locale} />
            <Awards locale={locale} />
            <Contact locale={locale} />
          </>
        )}
      </main>
    </div>
  );
}

export default App;
