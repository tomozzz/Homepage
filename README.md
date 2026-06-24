# Research Portfolio Homepage

[山本智也 | SCOS・スペックルコントラスト分光法・Biomedical Optics Research](https://tomozzz.github.io/Homepage/)

山本智也の研究活動を紹介する GitHub Pages 対応パーソナルサイトです。Vite + React + TypeScript + Tailwind CSS で構成し、SCOS、血流計測、微小循環評価に関する研究内容、論文、学会発表、受賞歴、連絡先を `src/data/` 配下で管理できるようにしています。

## 1. 概要

- 日本語ベースで表示し、ヘッダーから英語表示に切り替えられます
- Home と Research を分け、研究内容は専用ページで見せる構成です
- GitHub Pages で公開できる静的サイトです
- `src/data/` の TypeScript データを編集するだけで内容を更新できます

## 2. ローカル起動方法

### 前提

- `Node.js` と `npm` が使える環境が必要です
- 推奨は `Node.js 20 LTS` 以上です
- `node -v` と `npm -v` が表示されない場合は、先に Node.js をインストールしてください

### 開発サーバー

```bash
npm install
npm run dev
```

### 本番ビルド確認

```bash
npm run build
npm run preview
```

`preview` は `dist/` を配信するため、GitHub Pages 公開前の確認に向いています。

## 3. ビルド方法

```bash
npm run build
```

ビルド成果物は `dist/` に出力されます。

## 4. GitHub Pages への公開方法

1. このプロジェクトを GitHub リポジトリに push します
2. GitHub の `Settings > Pages` で `Build and deployment` のソースを `GitHub Actions` に設定します
3. `main` ブランチへ push すると `.github/workflows/deploy.yml` により自動でビルドとデプロイが走ります

### `username.github.io` のルートリポジトリの場合

- 公開 URL は `https://username.github.io/`
- `vite.config.ts` は自動的に `base: "/"` を使います

### 通常リポジトリの GitHub Pages の場合

- たとえば `repository-name` というリポジトリなら `https://username.github.io/repository-name/` に公開されます
- GitHub Actions 上では `GITHUB_REPOSITORY` から自動的に `base` が決まります
- ローカルの `npm run build` / `npm run preview` はデフォルトで `/` を使うため、そのまま確認できます
- 通常リポジトリのパスをローカルで再現したい場合だけ、`VITE_BASE_PATH=/repository-name/` を設定してください

## 5. プロフィール情報の編集方法

`src/data/profile.ts` を編集します。

- `profile` に名前、所属、肩書き、研究分野、メール、各種 URL を入れます
- 日本語と英語の本文は `LocalizedText` 形式で管理しています
- `aboutParagraphs`、`aboutDetails`、`researchInterests` も同じファイルで編集できます

## 6. Research Projects の編集方法

`src/data/researchProjects.ts` を編集します。

各プロジェクトは以下を持ちます。

- `title`
- `subtitle`
- `description`
- `keywords`
- `stage`

`title`、`subtitle`、`description` は日本語・英語の両方を入れられます。

## 7. Publications の追加方法

`src/data/publications.ts` を編集します。

```ts
export const publications: Publication[] = [
  {
    title: "Paper title",
    authors: "Author A, Author B",
    venue: "Journal or Conference Name",
    year: "2026",
    sortDate: "2026-05-01",
    doi: "10.xxxx/xxxxx",
    url: "https://example.com",
    tags: ["SCOS"],
    type: {
      ja: "国際会議プロシーディング",
      en: "Conference proceeding"
    }
  }
];
```

優先リンクは `pubmedUrl` → `doi` → `url` の順で使われます。

## 8. Conference Presentations の追加方法

`src/data/conferences.ts` を編集します。

```ts
export const conferences: ConferencePresentation[] = [
  {
    title: {
      ja: "発表タイトル",
      en: "Presentation title"
    },
    authors: [
      { ja: "山本智也", en: "Tomoya Yamamoto", isSelf: true },
      { ja: "共著者", en: "Co-author" }
    ],
    conference: {
      ja: "学会名",
      en: "Conference name"
    },
    location: {
      ja: "東京",
      en: "Tokyo, Japan"
    },
    year: "2026",
    sortDate: "2026-11-01",
    dateLabel: {
      ja: "2026年11月",
      en: "November 2026"
    },
    presentationType: "Poster",
    url: "https://example.com",
    tags: ["Blood flow mapping"]
  }
];
```

`isSelf: true` を付けた著者名には下線が表示されます。

## 9. Awards の追加方法

`src/data/awards.ts` を編集します。

```ts
export const awards: Award[] = [
  {
    title: "Award title",
    organization: "Organization name",
    year: "2026",
    description: "Optional description",
    url: "https://example.com"
  }
];
```

## 補足

- 未掲載の連絡先情報は表示しない構成にしています
- 実在しない論文、発表、受賞歴、URL は追加していません
- favicon は `public/favicon.svg`、OG 画像は `public/og-image.svg` を編集して差し替えできます
