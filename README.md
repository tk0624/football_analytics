# football_analytics

公開サイト: https://tk0624.github.io/football_analytics/

---

## 概要

**Samurai Metrics** は、海外で活躍する日本人サッカー選手の貢献をデータで見える化することを目的としたサイトです。

公開スタッツをもとに選手のパフォーマンスを分析し、インタラクティブな可視化として記事を公開しています。

---

## 技術スタック

- Next.js (Static Export) / TypeScript / React
- Plotly.js (`react-plotly.js`) によるインタラクティブな可視化
- Python / pandas による分析・データ加工（Jupyter Notebook）
- GitHub Pages（`docs/` ディレクトリから配信）

---

## ディレクトリ構成

```
pages/          ページコンポーネント
components/     共通 UI コンポーネント
content/        記事データ（TypeScript）
contexts/       言語切替（日英）コンテキスト
styles/         CSS モジュール
data_analytics/ 分析用 Jupyter Notebook
public/charts/  可視化用データ（JSON）
docs/           GitHub Pages 公開用ビルド成果物
```

---

## データ

現在は SofaScore の公開スタッツを手動で収集・整形しています。
比較グループ内での相対評価を基本とし、各記事の分析目的に合わせて加工しています。

### 今後の課題

より詳細なスタッツ（プレッシング強度、ボール保持時の動き、パスルート等）や、多数の選手のデータを継続的に活用できるよう、StatsBomb / Opta / FBref などのリソースを模索中です。データ収集・更新フローの自動化も合わせて検討しています。

---

## ローカル開発

```bash
npm install
npm run dev       # http://localhost:3000/football_analytics
npm run build     # docs/ に静的ファイルを出力
```