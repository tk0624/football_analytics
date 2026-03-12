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
        "AerialDuelsWon_pg_Per90",
        "AerialWin_pct",
        "GroundDuelsWon_pg_Per90",
        "GroundWin_pct",
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
          "冨安健洋 21/22シーズンにおける各指標（1〜5スケール、比較選手でランク正規化）\n\n" +
          "比較用にピックアップした選手（プレミアリーグ 21/22シーズン）\n" +
          "カイル・ウォーカー（マンチェスター・シティ）\n" +
          "トレント・アレクサンダー＝アーノルド（リヴァプール）\n" +
          "リース・ジェームズ（チェルシー）\n" +
          "アーロン・ワン＝ビサカ（マンチェスター・ユナイテッド）\n" +
          "エメルソン・ロイヤル（トッテナム・ホットスパー）\n" +
          "ウラジミール・クフォル（ウェストハム・ユナイテッド）\n" +
          "マティ・キャッシュ（アストン・ヴィラ）",
        en:
          "Radar chart of Takehiro Tomiyasu's metrics for the 2021/22 season (scaled 1–5, rank-normalised against comparison group).\n\n" +
          "Players selected for comparison (Premier League, 2021/22 season):\n" +
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
          "冨安の守備面で最も目を引くのは、空中戦の圧倒的な勝利数と勝率だ。トランジションの質が高く、直線や対角のロングパスも多用されるプレミアリーグにおいて、相手側のそういったロングパス戦術を無意味にする影響があったと言える。\n" +
          "他にもクリア数や、被ドリブル突破数、タックルやインターセプションなど基本的な守備指標は平均以上であり、守備観点では、対象シーズンにおいて上位チームの主力であった他7人※と比較しても遜色ないスタッツであった。\n" +
          "※ウォーカーやジェームズ、ワン＝ビサカといった選手が対人守備において強烈な強さを示す存在であったのは周知の事実だろう。\n\n" +
          "もちろん、ストライカータイプと対峙するCBに対して、SBはウインガータイプと対峙するため空中戦は優位となるが、スピードに秀でた選手に対して地上戦守備で全く見劣りしなかったのは、十分CBとしても通用する証拠であると捉えている。",
        en:
          "The most striking aspect of Tomiyasu's defensive profile is the sheer volume and win rate of his aerial duels. In the Premier League, where through-balls and diagonal long passes are used at high frequency, his ability to neutralise such long-ball tactics proved invaluable.\n" +
          "Other basic defensive metrics — clearances, dribble resistance, tackles and interceptions — were all above average. Against the seven other players in the comparison group, all starters at top clubs during that season, Tomiyasu's defensive statistics ranked at the very top.\n" +
          "※ It is widely known that players such as Walker, James, and Wan-Bissaka were dominant forces in one-on-one defending.\n\n" +
          "Of course, whereas CBs primarily face striker types, SBs deal predominantly with wingers, which naturally confers an aerial advantage in that role. Yet the fact that Tomiyasu showed no weakness in ground duels against pace-reliant wide players is, in the author's view, ample evidence that he is equally capable of performing at CB level.",
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
        "AerialDuelsWon_pg_Per90",
        "AerialWin_pct",
        "GroundDuelsWon_pg_Per90",
        "GroundWin_pct",
        "LongBalls_pg_Per90",
        "LongBallAcc_pct",
        "Crosses_pg_Per90",
        "CrossAcc_pct",
        "Assists_Per90",
        "BigChancesCreated_Per90",
        "PossessionLost_Per90",
      ],
      caption: {
        ja: "冨安 vs ウォーカー・アレクサンダー＝アーノルド・リース・ジェームズ 21/22シーズン",
        en: "Tomiyasu vs Walker, Alexander-Arnold, Reece James — 2021/22 season",
      },
    },

    { type: "h2", text: { ja: "攻撃面 ── クロス精度という意外な強み", en: "Attack — An Unexpected Edge in Cross Accuracy" } },
    {
      type: "p",
      text: {
        ja:
          "攻撃的な数値に目を向けると、アシスト数や決定機創出頻度は比較グループ内で控えめな水準にとどまる。\n" +
          "これは、前述の通り、アルテタ監督が片方または両方のSBに、より守備的な貢献を求めている戦術的な影響も大きかったと考えられる。\n\n" +
          "ただ、意外にも際立って高かったのがクロス精度で、T.A.A（アーノルド）よりも高い水準であった。\n" +
          "冨安はポゼッションロスも少なく、これらのスタッツは、より確度の高いシーンでクロスを上げて、不用意なボールの失い方をしないパス選択をしていたことの裏付けとなっている。\n" +
          "また、試合を観ているとわかるが、冨安は左右どちらの足でも精度の高いパスを出すことができる。この辺りの安定感や器用さも冨安の特徴の一つだ。",
        en:
          "On the attacking side, Tomiyasu's assist numbers and big chance creation rate are modest within the comparison group.\n" +
          "As noted earlier, this is largely attributable to Arteta's tactical preference for one or both SBs to provide a more defensive contribution.\n\n" +
          "What does stand out unexpectedly, however, is his cross accuracy, which exceeded that of Alexander-Arnold (T.A.A).\n" +
          "His possession loss rate is also low; together, these figures suggest a player who waited for the right moment to deliver crosses and consistently made composed passing decisions.\n" +
          "Those who watch him play will also know that he can deliver accurate passes with either foot — this composure and versatility is another hallmark of his game.",
      },
    },

    { type: "h2", text: { ja: "まとめ ── SBのデータが示すCBの本質", en: "Summary — CB Quality Revealed Through SB Data" } },
    {
      type: "p",
      text: {
        ja:
          "冨安健洋は、長期離脱という制約を抱えながらも、SBとしてプレミアリーグのトップレベルで十分に通用するパフォーマンスを示した。\n\n" +
          "空中戦勝利を筆頭に、クリアや被ドリブル突破、タックルやインターセプションなど総合的な守備指標の高さは、SBとしての役割を超えた数字であり、冨安がCBとして本来持つ守備能力がそのままSBのプレーにも反映されていると解釈できる。\n\n" +
          "今後、もしまた欧州の舞台でCBとして定着すれば、対峙する相手はウインガータイプからストライカータイプへと変わり、求められる守備対応も異なってくる。\n" +
          "だが、イタリア時代から代表戦を含めてCBとSBの両方を高いレベルでこなしてきた冨安の適応力を考えれば、その橋渡りにさほどの懸念はないだろう。\n" +
          "アヤックスでの復帰を足がかりに、再びCBとして自身のポテンシャルを最大限発揮する日を心待ちにしたい。",
        en:
          "Takehiro Tomiyasu demonstrated that, despite a lengthy injury absence, he remained fully capable of competing at the highest level of the Premier League as a full back.\n\n" +
          "Aerial duel victories above all, along with clearances, dribble resistance, tackles and interceptions — the breadth of his defensive numbers goes beyond what is typically demanded of an SB, and is best understood as the natural expression of defensive qualities built as a CB, channelled seamlessly into a wider role.\n\n" +
          "Should he go on to establish himself as a CB once more on the European stage, the opponents he faces will shift from wingers to strikers, and the defensive demands will change accordingly.\n" +
          "Yet for a player who has operated to a high level at both CB and SB since his time in Italy — including at international level — bridging that gap should pose little difficulty.\n" +
          "With his return via Ajax as the starting point, the hope is that he will once again show the full depth of his potential where it truly belongs — at centre-back.",
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
