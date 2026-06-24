import type { ResearchProject } from "../types";

export const researchProjects: ResearchProject[] = [
  {
    title: {
      ja: "SCOSにおける測定可能深度の評価",
      en: "Evaluation of Measurable Depth in SCOS"
    },
    subtitle: {
      ja: "SCOSがどの程度深部の血流変化を捉えられるかを検討",
      en: "Assessing how deep SCOS can detect blood flow changes"
    },
    description: {
      ja: "この研究では、SCOSを用いた血流変化の測定可能深度を検討しています。ファントム実験により、現行システムで約1.5 cmの深部における血流変化を検出できる可能性が示されており、深部組織の血流モニタリングへ応用するための基礎的な足がかりとなっています。",
      en: "This project investigates the measurable depth of blood flow changes using SCOS. Phantom-based experiments suggest that the current system may detect blood flow changes at depths of approximately 1.5 cm, providing a fundamental basis for considering SCOS in deeper tissue blood flow monitoring."
    },
    keywords: [
      "SCOS",
      "measurable depth",
      "deep tissue blood flow",
      "tissue phantom",
      "biomedical optics"
    ],
    stage: "Fundamental"
  },
  {
    title: {
      ja: "SCOSを用いた血流マッピング",
      en: "Blood Flow Mapping using SCOS"
    },
    subtitle: {
      ja: "カメラベースSCOSによる空間的血流分布の可視化",
      en: "Visualizing spatial blood flow distribution with camera-based SCOS"
    },
    description: {
      ja: "この研究では、SCOSのカメラベース計測という特徴を生かし、複数点での血流情報を同時に取得することによって、二次元の血流分布を可視化することを目指しています。単一点計測を超えて、局所的な血流変化や組織灌流の空間的不均一性を評価できる可能性があります。",
      en: "This project uses the camera-based nature of SCOS to visualize two-dimensional blood flow distributions by simultaneously acquiring blood flow information at multiple points. Moving beyond single-point measurements may allow evaluation of local blood flow changes and spatial heterogeneity in tissue perfusion."
    },
    keywords: [
      "blood flow mapping",
      "speckle imaging",
      "spatial distribution",
      "microcirculation",
      "CMOS camera"
    ],
    stage: "Methodological"
  },
  {
    title: {
      ja: "出血性ショックにおける末梢微小循環モニタリングへの応用",
      en: "Peripheral Microcirculation Monitoring in Hemorrhagic Shock"
    },
    subtitle: {
      ja: "ショックモデルにおける末梢灌流評価へのSCOSの応用",
      en: "Applying SCOS to peripheral perfusion assessment in shock models"
    },
    description: {
      ja: "この研究では、出血性ショック時の末梢微小循環変化を、SCOSによって非侵襲かつ連続的に捉えることを目指しています。SCOSによる血流指標を先行技術である拡散相関分光法（DCS）、全身血行動態、乳酸値と比較し、末梢循環不全の検出に有用な指標を検討しています。",
      en: "This project applies SCOS to noninvasively and continuously monitor changes in peripheral microcirculation during hemorrhagic shock. SCOS-derived blood flow indices are compared with the established diffuse correlation spectroscopy (DCS) technique, systemic hemodynamic parameters, and lactate levels to explore indicators for detecting peripheral circulatory failure."
    },
    keywords: [
      "SCOS",
      "DCS",
      "hemorrhagic shock",
      "microcirculation",
      "lactate",
      "peripheral perfusion"
    ],
    stage: "Application"
  }
];
