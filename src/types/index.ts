export type Locale = "ja" | "en";

export type RouteKey = "home" | "research";

export type LocalizedText = {
  ja: string;
  en: string;
};

export type Profile = {
  name: LocalizedText;
  affiliation: LocalizedText;
  position: LocalizedText;
  researchField: LocalizedText;
  email: string;
  linkedinUrl: string;
  researchmapUrl: string;
  githubUrl?: string;
  shortBio: LocalizedText;
};

export type DetailItem = {
  label: LocalizedText;
  value: LocalizedText;
};

export type ResearchProject = {
  title: LocalizedText;
  subtitle?: LocalizedText;
  description: LocalizedText;
  keywords: string[];
  stage: "Fundamental" | "Methodological" | "Application";
};

export type ResearchReference = {
  id: number;
  authors: string;
  title: string;
  journal: string;
  year: string;
  doi: string;
  url: string;
};

export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: string;
  sortDate: string;
  url?: string;
  doi?: string;
  pubmedUrl?: string;
  tags?: string[];
  type?: LocalizedText;
};

export type PresentationAuthor = {
  ja: string;
  en: string;
  isSelf?: boolean;
};

export type ConferencePresentation = {
  title: LocalizedText;
  authors: PresentationAuthor[];
  conference: LocalizedText;
  location?: LocalizedText;
  year: string;
  sortDate: string;
  dateLabel: LocalizedText;
  presentationType?: "Oral" | "Poster" | "Invited" | "Other";
  url?: string;
  tags?: string[];
};

export type Award = {
  title: LocalizedText;
  organization: LocalizedText;
  year: string;
  description?: LocalizedText;
  url?: string;
};

export type NavSection = {
  id: string;
  label: LocalizedText;
  page: RouteKey;
};
