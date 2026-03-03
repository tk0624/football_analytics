# football_analytics

公開サイト: https://tk0624.github.io/football_analytics/

---

## 概要

**Samurai Metrics** は、海外で活躍する日本人サッカー選手の貢献をデータで見える化することを目的としたサイトです。

現在は SofaScore から取得したスタッツをベースに、選手ごとのパフォーマンスをインタラクティブなレーダーチャートで分析・公開しています。

---

## 記事

| 選手 | シーズン | ポジション |
|------|---------|-----------|
| 三苫薫（Brighton） | 24/25 | ウインガー |
| 鎌田大地（Crystal Palace） | 25/26 | ボックス・トゥ・ボックスMF |

---

## 技術スタック

- Next.js (Static Export) / TypeScript / React
- Plotly.js (`react-plotly.js`) によるインタラクティブチャート
- Python / pandas による分析・データ加工（Jupyter Notebook）
- GitHub Pages（`docs/` ディレクトリから配信）

---

## ディレクトリ構成

```
pages/          ページコンポーネント
components/     共通 UI コンポーネント（PlotlyChart など）
content/        記事データ（TypeScript）
contexts/       言語切替（日英）コンテキスト
styles/         CSS モジュール
data_analytics/ 分析用 Jupyter Notebook
public/charts/  チャート用 JSON（Plotly エクスポート）
docs/           GitHub Pages 公開用ビルド成果物
```

---

## データ

現在は SofaScore の公開スタッツを手動で収集・整形しています。
パーセンタイルランク（1〜5 スケール）で正規化し、比較グループ内での相対評価として表示しています。

### 今後の課題

詳細スタッツ（プレッシング強度、ボール保持時の動き、パスルート等）をカバーできるデータリソースを模索中です。
StatsBomb / Opta / FBref などの API や公開データセットの活用を検討しています。また、選手数・シーズン数を増やすにあたって、データ収集・更新フローの自動化も課題の一つです。

---

## ローカル開発

```bash
npm install
npm run dev       # http://localhost:3000/football_analytics
npm run build     # docs/ に静的ファイルを出力
```