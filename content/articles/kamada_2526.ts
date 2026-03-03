// content/articles/kamada_2425.ts
import type { ArticleBlock, Lang } from "./mitoma_2425";
export { pickText, renderLines } from "./mitoma_2425";

type Text = { ja: string; en?: string };

export const kamada2425 = {
  slug: "article_kamada-2025-26",
  title: {
    ja: "鎌田大地 25/26シーズン中分析",
    en: "Daichi Kamada 25/26 Mid-Season Analysis",
  } as Text,

  lead: {
    ja:
      "クリスタルパレスに所属する鎌田大地は、2025/26シーズンは怪我で離脱した期間以外はコンスタントに出場機会を得ているが、なかなか明確な数字として結果を残せていない印象がある。\n" +
      "26年2月時点で、プレミアリーグで0ゴール0アシストというスタッツは物足りなく映るかもしれない。\n" +
      "しかし、ミドルサードを起点にしたビルドアップへの関与や、相手ボールを奪い返す守備貢献など、スコアに直結しない部分での存在感は非常に大きく、グラスナー監督の信頼も厚い。\n" +
      "本稿では、プレミアリーグの同ポジション選手（ボックス・トゥ・ボックスMFおよびアンカー）と比較しながら、鎌田のプロファイルをデータで読み解いていく。",
    en:
      "Daichi Kamada has been a consistent presence in Crystal Palace's squad throughout the 2025/26 season, earning regular starts outside of an injury-enforced absence. Yet he has struggled to produce results in the conventional sense.\n" +
      "With zero goals and zero assists in the Premier League as of February 2026, his numbers may look underwhelming on the surface.\n" +
      "However, his influence in areas that do not show up on the scoresheet — involvement in build-up play through the middle third and his contribution to winning the ball back — has been considerable, and he continues to hold the trust of manager Oliver Glasner.\n" +
      "In this article, we analyse Kamada's profile using data, comparing him with players in similar roles — box-to-box midfielders and anchors — in the Premier League.",
  } as Text,

  blocks: [
    // ── チャート①：全指標レーダー ──────────────────────────────
    {
      type: "chart",
      chartKey: "radar_kamada_all",
      defaultPlayers: ["Daichi Kamada"],
      defaultMetrics: [
        "xG_Per90", "xA_Per90", "BigChancesCreated_Per90",
        "LongBalls_pg_Per90", "SuccDribbles_pg_Per90",
        "PossessionLost_Per90", "Interceptions_Per90", "Tackles_Per90",
        "GroundWin_pct", "AerialWin_pct",
      ],
      caption: {
        ja:
          "鎌田の25/26シーズンにおける各指標（1〜5スケール、比較選手でランク正規化）\n\n" +
          "比較用にピックアップした選手\n" +
          "マルティン・スビメンディ（アーセナル）\n" +
          "ロドリ（マンチェスター・シティ）\n" +
          "カゼミロ（マンチェスター・ユナイテッド）\n" +
          "ユーリー・ティールマンス（アストン・ヴィラ）\n" +
          "ブバカル・カマラ（アストン・ヴィラ）\n" +
          "モイセス・カイセド（チェルシー）\n" +
          "ライアン・フラフェンベルフ（リヴァプール）",
        en:
          "Radar chart of Daichi Kamada's metrics for the 2025/26 season (scaled 0–5, normalised against comparison group).\n\n" +
          "Players selected for comparison:\n" +
          "Martin Zubimendi (Arsenal)\n" +
          "Rodri (Manchester City)\n" +
          "Casemiro (Manchester United)\n" +
          "Youri Tielemans (Aston Villa)\n" +
          "Boubacar Kamara (Aston Villa)\n" +
          "Moises Caicedo (Chelsea)\n" +
          "Ryan Gravenberch (Liverpool)",
      },
    },

    // ── 攻撃面 ────────────────────────────────────────────────
    { type: "h2", text: { ja: "攻撃面での特徴", en: "Attacking profile" } },
    {
      type: "p",
      text: {
        ja:
          "ゴールやアシストはないが、xGやxAは他の同リーグの一流選手と同等であり、ペナルティ外からのミドルシュートでゴールに迫る場面があること、また決定機を生み出すパスの配球者として機能していることが読み取れる。\n" +
          "比較選手の中では、より攻撃的な選手であるティールマンスやグラフェンベルフと同様に、セカンドラインからの崩しに特化した役割を担うことができている。",
        en:
          "Despite the absence of goals or assists, his xG and xA are on a par with top players in the same league, suggesting he has created genuine scoring opportunities through long-range efforts from outside the penalty area and has functioned as a provider of key passes that generate clear-cut chances.\n" +
          "Among the comparison group, he is able to fulfil a role focused on breaking down the opposition from a deeper position — comparable to the more attacking profiles of Tielemans and Gravenberch.",
      },
    },

    // ── チャート②：絞り込み比較レーダー ───────────────────────
    {
      type: "chart",
      chartKey: "radar_kamada_cmp",
      defaultMetrics: [
        "xG_Per90", "xA_Per90", "BigChancesCreated_Per90",
        "LongBalls_pg_Per90", "SuccDribbles_pg_Per90",
        "PossessionLost_Per90", "Interceptions_Per90", "Tackles_Per90",
        "GroundWin_pct", "AerialWin_pct",
      ],
      caption: {
        ja: "vs ティールマンス、グラフェンベルフ 25/26シーズン",
        en: "vs Tielemans, Gravenberch for the 2025/26 season",
      },
    },

    // ── 守備面 ────────────────────────────────────────────────
    { type: "h2", text: { ja: "守備面での特徴", en: "Defensive profile" } },
    {
      type: "p",
      text: {
        ja:
          "特筆すべきはタックル数だ。今回ピックアップした上位チームの選手の中でも守備力に定評のあるカイセドと並ぶ最上位に位置する。\n" +
          "堅守速攻スタイルを貫くクリスタルパレスとして、中盤でのボール奪取は生命線であるが、鎌田がこの役割を見事に担っている。\n" +
          "鎌田はキープ力にも長けているため、ボール奪取後にまた奪い返されない選択をできることも強みの一つだ。",
        en:
          "His tackle numbers stand out. Among the players selected from top clubs in this comparison, he sits joint top alongside Caicedo — widely regarded as one of the best defensive midfielders in the league.\n" +
          "For Crystal Palace, whose identity is built on defensive solidity and quick transitions, winning the ball back in midfield is essential, and Kamada has taken on that responsibility with distinction.\n" +
          "His ability to retain possession also means that once he wins the ball, he rarely gives it straight back — an underrated but valuable quality.",
      },
    },
    {
      type: "p",
      text: {
        ja:
          "地上戦勝率や空中戦勝率も水準以上のレベルであり、世界最高峰のプレミアリーグに適応できていると言える。",
        en:
          "His success rates in both ground duels and aerial duels are above average, a sign that he has adapted well to the demands of the Premier League — the highest level of club football in the world.",
      },
    },

    // ── まとめ ────────────────────────────────────────────────
    { type: "h2", text: { ja: "まとめ", en: "Summary" } },
    {
      type: "p",
      text: {
        ja:
          "鎌田のプロファイルは、（堅守速攻というゴールが生まれにくいチームに所属していることもあるが）ゴールやアシストという分かりやすい指標だけを見ると過小評価されやすいタイプである。\n" +
          "xA・チャンス創出・タックル数・地上戦／空中戦勝率といった複数の指標で、上位チームの一流選手に引けを取らない同等としたスタッツを残しており、チームの月間MVPに選ばれたことも頷ける。\n" +
          "来シーズン以降の所属は不透明ではあるが、引き続きプレミアリーグやECL、Ｗ杯での活躍を期待したい。",
        en:
          "Kamada's profile is one that can easily be underestimated when assessed purely through goals and assists — partly because Crystal Palace's defensive, counter-attacking style is not one that naturally generates high goal tallies.\n" +
          "Across multiple metrics — xA, chance creation, tackles, and both ground and aerial duel success rates — he holds his own against top-level players from the league's leading clubs, and it comes as no surprise that he was named his side's Player of the Month.\n" +
          "His future beyond this season remains uncertain, but there is every reason to look forward to his continued contributions in the Premier League, the Europa Conference League, and at the World Cup.",
      },
    },
  ] as ArticleBlock[],
} as const;
