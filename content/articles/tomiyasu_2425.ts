// content/articles/tomiyasu_2425.ts
export type Lang = "ja" | "en";

type Text = { ja: string; en?: string };

export type ArticleBlock =
  | { type: "h2"; text: Text }
  | { type: "p"; text: Text }
  | { type: "image"; src: string; alt: Text; caption?: Text }
  | { type: "chart"; chartKey: string; caption?: Text; defaultPlayers?: string[]; defaultMetrics?: string[] };

export const tomiyasu2425 = {
  slug: "article_tomiyasu-2024-25",
  title: {
    ja: "冨安健洋 24/25シーズン分析 ─ SBのデータが語るCBとしての真価",
    en: "Takehiro Tomiyasu 24/25 Season Analysis — CB Quality Hidden in SB Data",
  } as Text,

  lead: {
    ja:
      "2024/25シーズン、冨安健洋はまたもや長期離脱という試練に直面した。\n" +
      "アーセナルでの主戦場は右サイドバック（SB）であり、本人がより得意とするセンターバック（CB）ではない。\n" +
      "出場機会も21試合・平均80分にとどまり、満足のいくシーズンとは言い難かっただろう。\n\n" +
      "しかし、限られた出場時間のなかで記録されたデータを、同シーズンのプレミアリーグを代表するSB7名と比較してみると、\n" +
      "「SBとして」十分に通用していたことが浮かび上がる。\n" +
      "なかでも際立つのが、空中戦勝率・クリア数・被ドリブル突破の少なさといった、CB的な守備指標での高評価だ。\n\n" +
      "本稿では、冨安のデータをひも解きながら、SBというポジションでも発揮され続けた本来の能力 ── すなわちCBとしての素養 ── を検証する。",
    en:
      "The 2024/25 season brought yet another long-term injury for Takehiro Tomiyasu.\n" +
      "At Arsenal, his primary role remained right back (SB), rather than the centre-back (CB) position where he is most comfortable.\n" +
      "With only 21 appearances, averaging 80 minutes per game, it was far from the season he would have wished for.\n\n" +
      "Yet when the data recorded during those limited minutes is placed alongside seven of the Premier League's leading right backs in the same season,\n" +
      "a clear picture emerges: even as an SB, Tomiyasu was more than competitive at the top level.\n" +
      "What stands out most are his aerial duel win rate, clearances, and the rarity with which he was dribbled past — metrics that reflect the qualities of an elite CB.\n\n" +
      "This article examines Tomiyasu's data and makes the case that, even deployed as a full back, the defining traits of a world-class centre-back were plain to see.",
  } as Text,

  blocks: [
    // ── チャート①：全指標レーダー ──────────────────────────────
    {
      type: "chart",
      chartKey: "radar_tomiyasu_all",
      defaultPlayers: ["Takehiro Tomiyasu"],
      defaultMetrics: [
        "Interceptions_Per90",
        "Tackles_Per90",
        "DribbledPast_Per90",
        "Clearances_Per90",
        "GroundWin_pct",
        "AerialWin_pct",
        "LongBalls_pg_Per90",
        "LongBallAcc_pct",
        "Crosses_pg_Per90",
        "CrossAcc_pct",
        "Assists_Per90",
        "BigChancesCreated_Per90",
        "PossessionLost_Per90",
      ],
      caption: {
        ja:
          "冨安健洋 24/25シーズンにおける各指標（1〜5スケール、比較選手でランク正規化）\n\n" +
          "比較用にピックアップした選手（プレミアリーグ 同シーズン）\n" +
          "カイル・ウォーカー（マンチェスター・シティ）\n" +
          "トレント・アレクサンダー＝アーノルド（リヴァプール）\n" +
          "リース・ジェームズ（チェルシー）\n" +
          "アーロン・ワン＝ビサカ（マンチェスター・ユナイテッド）\n" +
          "エメルソン・ロイヤル（トッテナム・ホットスパー）\n" +
          "ウラジミール・クフォル（ウェストハム・ユナイテッド）\n" +
          "マティ・キャッシュ（アストン・ヴィラ）",
        en:
          "Radar chart of Takehiro Tomiyasu's metrics for the 2024/25 season (scaled 1–5, rank-normalised against comparison group).\n\n" +
          "Players selected for comparison (Premier League, same season):\n" +
          "Kyle Walker (Manchester City)\n" +
          "Trent Alexander-Arnold (Liverpool)\n" +
          "Reece James (Chelsea)\n" +
          "Aaron Wan-Bissaka (Manchester United)\n" +
          "Emerson Royal (Tottenham Hotspur)\n" +
          "Vladimir Coufal (West Ham United)\n" +
          "Matty Cash (Aston Villa)",
      },
    },

    { type: "h2", text: { ja: "CB的守備指標が突出する理由", en: "Why His CB-Type Defensive Metrics Stand Out" } },
    {
      type: "p",
      text: {
        ja:
          "冨安の守備面で最も目を引くのは、クリア数（/90）と空中戦勝率の高さだ。\n" +
          "8名の比較グループ内でクリア数はトップクラスに位置し、空中戦勝率54.0%はウォーカー（54.3%）とほぼ並ぶ。\n" +
          "これらはSBとしては異色の数字であり、むしろCBに求められる能力を色濃く反映している。\n\n" +
          "クリアというアクションは、ゴール前の危険なクロスやコーナーキックを跳ね返す局面で頻発する。\n" +
          "SBがここで高い数値を示すということは、深い位置まで引いて守備に参加していることを意味し、\n" +
          "チームがビルドアップよりも守備的なプレーを求める場面でも適切に対応できていたことを示す。",
        en:
          "The most striking aspect of Tomiyasu's defensive profile is his clearance rate per 90 and aerial duel win percentage.\n" +
          "Among the eight full backs in the comparison group, his clearances rank among the highest, and his aerial win rate of 54.0% is nearly identical to Kyle Walker's 54.3%.\n" +
          "These are unusual figures for a full back, and they closely mirror the qualities expected of a centre-back.\n\n" +
          "Clearances occur most often when dealing with dangerous crosses or set-pieces into the box.\n" +
          "A high clearance count for an SB suggests he was regularly dropping deep to contribute defensively,\n" +
          "and that he was dealing effectively with the most threatening situations even in a wider defensive role.",
      },
    },
    {
      type: "p",
      text: {
        ja:
          "被ドリブル突破（/90）の少なさも見逃せない。\n" +
          "SBは1対1の局面を頻繁に強いられるポジションだが、冨安はこのスコアで比較グループ上位に位置する。\n" +
          "これは純粋な対人強度だけでなく、相手の仕掛けを予測し封じる読みの鋭さ ── まさにCBとして培われた能力 ── が支えていると考えられる。",
        en:
          "The low rate at which Tomiyasu was dribbled past is equally notable.\n" +
          "Full backs are regularly placed in one-on-one situations, yet Tomiyasu ranked among the best in the comparison group on this metric.\n" +
          "This reflects not just raw defensive strength, but rather an ability to read and nullify attacking moves before they develop — precisely the type of anticipation refined through years as a centre-back.",
      },
    },

    // ── チャート②：絞り込み比較（Walker / T.A.A / R.James との比較）──
    {
      type: "chart",
      chartKey: "radar_tomiyasu_cmp",
      defaultMetrics: [
        "Interceptions_Per90",
        "Tackles_Per90",
        "DribbledPast_Per90",
        "Clearances_Per90",
        "GroundWin_pct",
        "AerialWin_pct",
        "LongBalls_pg_Per90",
        "LongBallAcc_pct",
        "Crosses_pg_Per90",
        "CrossAcc_pct",
        "Assists_Per90",
        "BigChancesCreated_Per90",
        "PossessionLost_Per90",
      ],
      caption: {
        ja: "冨安 vs ウォーカー・アレクサンダー＝アーノルド・リース・ジェームズ 24/25シーズン",
        en: "Tomiyasu vs Walker, Alexander-Arnold, Reece James — 2024/25 season",
      },
    },

    { type: "h2", text: { ja: "攻撃面 ── クロス精度という意外な強み", en: "Attack — An Unexpected Edge in Cross Accuracy" } },
    {
      type: "p",
      text: {
        ja:
          "攻撃的な数値に目を向けると、アシスト数や決定機創出頻度は比較グループ内で控えめな水準にとどまる。\n" +
          "これはSBとしての攻撃参加機会が限られていたこと、また怪我による離脱期間の影響も考えられる。\n\n" +
          "一方で、際立って高いのがクロス精度（41.9%）だ。\n" +
          "比較グループ内で最大値を示しており、T.A.A（30.0%）、ウォーカー（17.1%）を大きく上回る。\n" +
          "試行回数は多くないものの、上げた際の質は確かなものがある。\n" +
          "また、ボール保持での損失（ポゼッションロス/90）が少なく、不用意なボールの失い方をしない安定感も特徴的だ。",
        en:
          "On the attacking side, Tomiyasu's assist numbers and big chance creation rate are modest within the comparison group.\n" +
          "This is likely a reflection of limited opportunity to contribute in advanced positions, compounded by the disruption of his injury layoffs.\n\n" +
          "What does stand out, however, is his cross accuracy of 41.9% — the highest in the comparison group, and well clear of Alexander-Arnold (30.0%) and Walker (17.1%).\n" +
          "While he did not attempt crosses frequently, when he did, the quality was consistently high.\n" +
          "His low possession-loss rate per 90 also underlines a composure in possession that is rarely associated with a wide defensive player.",
      },
    },

    { type: "h2", text: { ja: "まとめ ── SBのデータが示すCBの本質", en: "Summary — CB Quality Revealed Through SB Data" } },
    {
      type: "p",
      text: {
        ja:
          "冨安健洋は24/25シーズン、怪我による制約を抱えながらも、SBとしてプレミアリーグのトップレベルで十分に通用するパフォーマンスを示した。\n\n" +
          "そのなかで特に印象的なのは、クリア数・空中戦勝率・被ドリブル突破の少なさという守備指標の高さだ。\n" +
          "これらはSBとしての役割を超えた数字であり、冨安がCBとして本来持つ守備能力がそのままSBのプレーにも反映されていると解釈できる。\n\n" +
          "本来の主戦場であるCBとして、コンディションを万全に保ってシーズンを戦い抜くことができれば、\n" +
          "冨安はプレミアリーグでも最高水準のDFとして再び存在感を示すだろう。\n" +
          "25/26シーズン以降の復活に、大いに期待したい。",
        en:
          "Despite the constraints imposed by injury, Takehiro Tomiyasu showed in 2024/25 that he remained more than capable of competing at the highest level of the Premier League as a full back.\n\n" +
          "What stands out most clearly is his performance across the suite of CB-type defensive metrics: clearances, aerial duel win rate, and resistance to being dribbled past.\n" +
          "These figures go beyond what is typically demanded of a full back, and are best understood as the natural expression of the defensive qualities Tomiyasu has built as a centre-back, transferred seamlessly into a wider role.\n\n" +
          "If he is able to remain fit and return to his preferred position at CB, there is every reason to believe he can re-establish himself among the very best defenders in the Premier League.\n" +
          "His performances from the 2025/26 season onward will be eagerly awaited.",
      },
    },
  ] as ArticleBlock[],
} as const;

export function pickText(text: Text, lang: Lang) {
  if (lang === "en") {
    const en = (text.en ?? "").trim();
    return en.length ? en : text.ja;
  }
  return text.ja;
}

export function renderLines(text: string) {
  return text.split("\n");
}
