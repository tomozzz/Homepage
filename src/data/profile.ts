import type { DetailItem, LocalizedText, Profile } from "../types";

export const profile: Profile = {
  name: {
    ja: "山本智也",
    en: "Tomoya Yamamoto"
  },
  affiliation: {
    ja: "筑波大学 / ライフエンジニアリング研究室",
    en: "University of Tsukuba / Life Engineering Laboratory"
  },
  position: {
    ja: "博士後期課程1年",
    en: "1st-year Doctoral Student"
  },
  researchField: {
    ja: "スペックルイメージング / 医用光学 / 非侵襲血流モニタリング",
    en: "Speckle imaging / Biomedical optics / Noninvasive blood flow monitoring"
  },
  email: "s2630242@u.tsukuba.ac.jp",
  linkedinUrl: "https://www.linkedin.com/in/tomo-yamamoto/",
  researchmapUrl: "https://researchmap.jp/tomo-yamamoto",
  githubUrl: "https://github.com/tomozzz",
  shortBio: {
    ja: "スペックルイメージングと生体光計測を基盤に、非侵襲的な血流モニタリングと末梢微小循環評価に取り組んでいます。",
    en: "Doctoral researcher working on speckle imaging, SCOS, and noninvasive blood flow monitoring in biomedical optics."
  }
};

export const homeHighlights: LocalizedText[] = [
  {
    ja: "スペックルイメージング",
    en: "Speckle imaging"
  },
  {
    ja: "医用光学",
    en: "Biomedical optics"
  },
  {
    ja: "末梢微小循環",
    en: "Peripheral microcirculation"
  }
];

export const aboutParagraphs: LocalizedText[] = [
  {
    ja: "医用光学と生体計測を基盤に、非侵襲的な血流評価と末梢微小循環モニタリングに取り組んでいます。スペックルイメージングを起点として、SCOS、DCS、NIRS などの光計測手法を用いながら、計測原理の理解から応用展開までを一貫して進めています。",
    en: "My work centers on biomedical optics and physiological sensing for noninvasive blood flow assessment and peripheral microcirculation monitoring. Starting from speckle imaging, I work across SCOS, DCS, and NIRS-based methods, linking measurement principles with application-oriented studies."
  },
  {
    ja: "現在は、SCOS の深さ評価、血流マッピング、出血性ショックモデルへの応用など、基礎から応用へとつながる研究テーマを段階的に発展させています。",
    en: "Current themes include measurable-depth evaluation in SCOS, blood flow mapping, and applications to hemorrhagic shock models, forming a stepwise research path from fundamentals to applications."
  }
];

export const aboutDetails: DetailItem[] = [
  {
    label: {
      ja: "所属",
      en: "Affiliation"
    },
    value: profile.affiliation
  },
  {
    label: {
      ja: "立場",
      en: "Position"
    },
    value: profile.position
  },
  {
    label: {
      ja: "研究分野",
      en: "Research Field"
    },
    value: profile.researchField
  },
  {
    label: {
      ja: "学歴",
      en: "Education"
    },
    value: {
      ja: [
        "明治大学理工学部電気電子生命学科 生命理工学専攻 卒",
        "明治大学大学院理工学研究科電気工学専攻 博士前期課程 修了",
        "筑波大学大学院理工情報生命学術院 システム情報工学研究群 博士後期課程"
      ].join("\n"),
      en: [
        "B.E., Program in Bioscience, Department of Electronics and Bioinformatics, School of Science and Technology, Meiji University",
        "M.E., Department of Electrical Engineering, Graduate School of Science and Technology, Meiji University",
        "Doctoral Program, Degree Programs in Systems and Information Engineering, Graduate School of Science and Technology, University of Tsukuba"
      ].join("\n")
    }
  }
];

export const researchInterests: LocalizedText[] = [
  {
    ja: "スペックルイメージング",
    en: "Speckle imaging"
  },
  {
    ja: "Speckle Contrast Optical Spectroscopy (SCOS)",
    en: "Speckle Contrast Optical Spectroscopy (SCOS)"
  },
  {
    ja: "Diffuse Correlation Spectroscopy (DCS)",
    en: "Diffuse Correlation Spectroscopy (DCS)"
  },
  {
    ja: "Near-Infrared Spectroscopy (NIRS)",
    en: "Near-Infrared Spectroscopy (NIRS)"
  },
  {
    ja: "末梢微小循環モニタリング",
    en: "Peripheral microcirculation monitoring"
  },
  {
    ja: "血流マッピング",
    en: "Blood flow mapping"
  }
];
