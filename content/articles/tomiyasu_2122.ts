// content/articles/tomiyasu_2122.ts
export type Lang = "ja" | "en";

type Text = { ja: string; en?: string };

export type ArticleBlock =
  | { type: "h2"; text: Text }
  | { type: "p"; text: Text }
  | { type: "image"; src: string; alt: Text; caption?: Text }
  | { type: "chart"; chartKey: string; caption?: Text; defaultPlayers?: string[]; defaultMetrics?: string[] };

export const tomiyasu2122 = {
  slug: "article_tomiyasu-2021-22",
  title: {
    ja: "冨安健洋 アーセナル時代分析 ─ SBのデータが語るCBとしての真価",
    en: "Takehiro Tomiyasu — Arsenal Years Analysis: CB Quality Hidden in SB Data",
  } as Text,

  lead: {
    ja:
      "2026年1月、冨安健洋はアヤックスに移籍し、長期離脱からの復帰を果たした。\n" +
      "アーセナルでの最後の出場は2024年10月まで遡り、実に1年以上ピッチから遠ざかっていたことになる。\n" +
      "アヤックス復帰後は左右のサイドバックとしての途中出場が中心となっており、コンディションの回復を慎重に積み上げている段階だ。\n\n" +
      "アーセナル時代に目を移しても、起用ポジションは大きく差異はなく、左右のサイドバックを主戦場とし、偽サイドバックとしての役割もこなした。\n" +
      "守備力の高い選手で最終ラインを固めたいアルテタ監督の方針にマッチしていた。\n" +
      "その一方で、筆者は、冨安の本来のポジションはセンターバックであり、SB起用はあくまでチーム事情によるユニット活用の結果だと捉えている。\n\n" +
      "怪我に見舞われたシーズンが多かった冨安だが、なかでもアーセナルに加入した初年度にあたる21/22シーズンは、限られた出場時間ながらも対PL水準でのデータが揃う数少ないシーズンだ。\n" +
      "本稿ではそのシーズンのデータを軸に、SBとしての数字のなかに滲み出るCB的な守備能力の高さを検証する。",
    en:
      "In January 2026, Takehiro Tomiyasu joined Ajax and completed his return from a lengthy injury layoff.\n" +
      "His last appearance for Arsenal had been in October 2024, meaning he had been away from competitive football for over a year.\n" +
      "Since returning, he has mainly been used as a substitute at left or right back, carefully rebuilding his match fitness.\n\n" +
      "Turning to his Arsenal years, his role remained largely the same — left and right back were his primary positions, and he also operated as a false full-back.\n" +
      "This suited Arteta's preference for a defensively solid back line.\n" +
      "That said, in the author's view, Tomiyasu's natural position is centre-back; his deployment at SB was ultimately a product of squad needs and tactical unit management.\n\n" +
      "Tomiyasu's career at Arsenal was disrupted by injuries in many seasons, but the 2021/22 campaign — his debut season at the club — is one of the few where a meaningful dataset against Premier League opposition is available.\n" +
      "This article uses that season as its primary reference point, examining how the hallmarks of an elite centre-back made themselves visible even through the lens of SB data.",
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
          "比較用にピックアップした選手（プレミアリーグ 24/25シーズン）\n" +
          "カイル・ウォーカー（マンチェスター・シティ）\n" +
          "トレント・アレクサンダー＝アーノルド（リヴァプール）\n" +
          "リース・ジェームズ（チェルシー）\n" +
          "アーロン・ワン＝ビサカ（マンチェスター・ユナイテッド）\n" +
          "エメルソン・ロイヤル（トッテナム・ホットスパー）\n" +
          "ウラジミール・クフォル（ウェストハム・ユナイテッド）\n" +
          "マティ・キャッシュ（アストン・ヴィラ）",
        en:
          "Radar chart of Takehiro Tomiyasu's metrics for the 2024/25 season (scaled 1–5, rank-normalised against comparison group).\n\n" +
          "Players selected for comparison (Premier League, 2024/25 season):\n" +
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
          "チームがビルドアップよりも守備的なプレーを求める場面でも適切に対応できていたことを示す。\n" +
          "偽サイドバックとして内側に絞り、中央のスペースを埋める役割を帯びれば、内側からのクリア機会は増える。それも高いクリア数につながっていると考えられる。",
        en:
          "The most striking aspect of Tomiyasu's defensive profile is his clearance rate per 90 and aerial duel win percentage.\n" +
          "Among the eight full backs in the comparison group, his clearances rank among the highest, and his aerial win rate of 54.0% is nearly identical to Kyle Walker's 54.3%.\n" +
          "These are unusual figures for a full back, and they closely mirror the qualities expected of a centre-back.\n\n" +
          "Clearances occur most often when dealing with dangerous crosses or set-pieces into the box.\n" +
          "A high clearance count for an SB suggests he was regularly dropping deep to contribute defensively,\n" +
          "and that he was dealing effectively with the most threatening situations even in a wider defensive role.\n" +
          "When operating as a false full-back \u2014 tucking inside to occupy central spaces \u2014 opportunities to make clearances centrally naturally increase, which likely contributes to this figure.",
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
          "冨安健洋は21/22シーズン、長期離脱という制約を抱えながらも、SBとしてプレミアリーグのトップレベルで十分に通用するパフォーマンスを示した。\n\n" +
          "そのなかで特に印象的なのは、クリア数・空中戦勝率・被ドリブル突破の少なさという守備指標の高さだ。\n" +
          "これらはSBとしての役割を超えた数字であり、冨安がCBとして本来持つ守備能力がそのままSBのプレーにも反映されていると解釈できる。\n\n" +
          "今後、本来の主戦場であるCBとして定着すれば、対峙する相手はウインガータイプからストライカータイプへと変わり、求められる守備対応も異なってくる。\n" +
          "だが、イタリア時代からCBとSBの両方を高いレベルでこなしてきた冨安の適応力を考えれば、その橋渡りにさほどの懸念はないだろう。\n" +
          "アヤックスでの復帰を足がかりに、再びCBとして自身の本来の舞台で存在感を発揮する日を心待ちにしたい。",
        en:
          "Takehiro Tomiyasu demonstrated in the 2021/22 season that, despite a lengthy injury absence, he remained fully capable of competing at the highest level of the Premier League as a full back.\n\n" +
          "What stands out most clearly is his performance across CB-type defensive metrics: clearances, aerial duel win rate, and resistance to being dribbled past.\n" +
          "These figures go beyond what is typically demanded of a full back, and are best understood as the natural expression of defensive qualities built as a centre-back, channelled seamlessly into a wider role.\n\n" +
          "Should he establish himself as a CB going forward, the opponents he faces will shift from winger types to striker types, and the demands on his defending will change accordingly.\n" +
          "Yet for a player who has operated at both CB and SB to a high level since his time in Italy, bridging that gap should pose little difficulty.\n" +
          "With his return via Ajax as the starting point, the hope is that he will once again show the full depth of his ability where it belongs — at centre-back.",
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
