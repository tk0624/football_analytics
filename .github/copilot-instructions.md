# Copilot Instructions

## 開発ルール

### 確認なしに実施してよい操作
- コードの修正・追加（CSS, TSX, TS, Python など）
- ビルド・エクスポート・git commit / push などのデプロイ操作
- 設定ファイルの編集（`next.config.js`, `tsconfig.json` など）
- 動作確認できるコード変更の場合は、特に指示がなければコード修正後に `npm run build` でビルド確認し、問題なければそのままデプロイ（postexport → git commit → push）まで実施する

### 事前に許可を求める操作（実行禁止）
- OS・システム設定の変更
- 既存ファイルの削除（`Remove-Item`, `rm` など）
- 新しいパッケージ・モジュールのインストール（`npm install`, `pip install` など）

---

## プロジェクト概要

日本人サッカー選手のデータ分析サイト（GitHub Pages で公開）。

- **フレームワーク**: Next.js 15 (Static Export)
- **公開先**: `docs/` ディレクトリ → GitHub Pages (`/football_analytics`)
- **デプロイ手順**: `npm run build` → `npm run postexport` → `git add -A` → `git commit` → `git push`

## ディレクトリ構成

| パス | 役割 |
|------|------|
| `pages/` | Next.js ページコンポーネント |
| `components/` | 共通コンポーネント（Layout, PlotlyChart など） |
| `styles/` | CSS Modules |
| `content/articles/` | 記事データ（TS形式） |
| `contexts/I18n.tsx` | 日英テキスト辞書 |
| `public/charts/` | Plotly レーダーチャート JSON |
| `docs/` | ビルド出力（GitHub Pages 用） |
| `data_analytics/` | Jupyter Notebook（データ分析・チャート生成） |

## カラーパレット

| 用途 | カラーコード |
|------|-------------|
| ブランドカラー（緑） | `#7ed957` |
| アクセント（オレンジ） | `#ff914d` |
| 背景 | `#111111` |
| パネル | `#1a1a1a` / `#202020` |
| テキスト（メイン） | `#f5f5f5` |
| テキスト（ミュート） | `#b0b0b0` |

## 言語対応

- 日本語（`ja`）/ 英語（`en`）の2言語対応
- テキストはすべて `contexts/I18n.tsx` で管理
- 記事コンテンツは `content/articles/*.ts` 内で `{ ja: "...", en: "..." }` 形式で定義
