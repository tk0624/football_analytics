// content/articles/kamada_2425.ts
import type { ArticleBlock, Lang } from "./mitoma_2425";
export { pickText, renderLines } from "./mitoma_2425";

type Text = { ja: string; en?: string };

export const kamada2425 = {
  slug: "article_kamada-2025-26",
  title: {
    ja: "鎌田大地 25/26シーズン分析",
    en: "Daichi Kamada 25/26 Season Analysis",
  } as Text,

  lead: {
    ja:
      "クリスタルパレスに加入した鎌田大地は、2025/26シーズン序盤に出場機会を得ながらも、なかなか数字で結果を残せずにいた印象がある。\n" +
      "14試合で0ゴールというスタッツは、攻撃的なポジションを担うプレイヤーとしては物足りなく映るかもしれない。\n" +
      "しかし、ミドルサードを起点にしたビルドアップへの関与や、相手ボールを奪い返す守備貢献など、スコアに直結しない部分での存在感は少なくない。\n" +
      "本稿では、プレミアリーグの同ポジション選手（ボックス・トゥ・ボックスMFおよびアンカー）と比較しながら、鎌田のプロファイルをデータで読み解いていく。",
    en:
      "Daichi Kamada joined Crystal Palace ahead of the 2025/26 season, and while he has earned playing time in the early stages of the campaign, he has struggled to produce results in the traditional sense.\n" +
      "Zero goals in 14 appearances may look underwhelming for a player expected to contribute in advanced areas.\n" +
      "However, his involvement in build-up play through the middle third and his contribution to winning the ball back without it showing in the scoreline deserve closer attention.\n" +
      "In this article, we analyse Kamada's profile using data, comparing him with players in similar roles — box-to-box midfielders and anchors — in the Premier League.",
  } as Text,

  blocks: [
    // ── チャート①：全指標レーダー ──────────────────────────────
    {
      type: "chart",
      chartKey: "radar_kamada_all",
      defaultPlayers: ["Daichi Kamada"],
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
          "14試合でゴールは0本だが、xGは0.87とそれほど低くはなく、シュートまで至らずにチャンスを潰している場面よりも、そもそも自らフィニッシュを狙いにいくシーンが限られているとみた方が実態に近い。\n" +
          "むしろ注目すべきはxA（1.55）とBigChancesCreated（2）の数字で、決定機を生み出すパスの配球者として機能していることが読み取れる。\n" +
          "比較選手の中ではティールマンスやグラフェンベルフと近いポジショニングを取りながら、よりセカンドラインからの崩しに特化した役割を担っている。",
        en:
          "Despite zero goals in 14 matches, an xG of 0.87 is not particularly low, suggesting the issue is less about missed chances and more about the limited number of situations where Kamada actively seeks to finish.\n" +
          "More telling are his xA (1.55) and BigChancesCreated (2), which indicate he is functioning as a provider of key passes and a creator of clear-cut opportunities.\n" +
          "Among the comparison group, he occupies a similar profile to Tielemans and Gravenberch, leaning towards a role focused on breaking down the opposition from a deeper creative position.",
      },
    },

    // ── チャート②：絞り込み比較レーダー ───────────────────────
    {
      type: "chart",
      chartKey: "radar_kamada_cmp",
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
          "タックル数はゲームあたり2.9本で、比較グループの中でもカイセド（2.9）と並ぶ最上位に位置する。\n" +
          "インターセプト（0.6/game）はそれほど高くないものの、積極的にボールホルダーへプレッシャーをかけ奪いにいく姿勢が数字に表れている。\n" +
          "また、ファウルを受けた回数（1.2/game）が比較選手の中で最も多く、相手にとって止めにくい存在であることを示している。\n" +
          "守備への貢献は数値には出にくい部分も多いが、トランジションの局面でのボール奪取という点では、明確なインパクトを残していると言える。",
        en:
          "Kamada's tackles per game (2.9) place him joint top among the comparison group, alongside Caicedo (2.9).\n" +
          "While his interceptions (0.6/game) are not particularly high, the willingness to press aggressively and challenge for the ball is reflected in the tackled numbers.\n" +
          "Notably, he is fouled 1.2 times per game — the highest in the comparison group — indicating that opponents find him genuinely difficult to stop legally.\n" +
          "Though defensive contributions often go unquantified, his output in transition and ball-winning situations constitutes a clear positive impact.",
      },
    },
    {
      type: "p",
      text: {
        ja:
          "空中戦の勝率55.0%は、ボランチ・インサイドMFの枠組みでは水準以上の数字だ。\n" +
          "カゼミロ（42.6%）やカイセド（37.0%）と比較すると、鎌田の184cmという身長とジャンプのタイミングが活かされていることが分かる。\n" +
          "セットプレー守備など空中戦が求められる局面での安定感は、チームにとって計算できる要素の一つと言える。",
        en:
          "An aerial duel success rate of 55.0% is above average for a midfielder or central role.\n" +
          "Compared with Casemiro (42.6%) and Caicedo (37.0%), Kamada's 184cm frame and timing in the air appear to be genuine assets.\n" +
          "His reliability in aerial situations — particularly for defensive set pieces — provides Crystal Palace with a dependable option in those moments.",
      },
    },

    // ── まとめ ────────────────────────────────────────────────
    { type: "h2", text: { ja: "まとめ", en: "Summary" } },
    {
      type: "p",
      text: {
        ja:
          "鎌田のプロファイルは、ゴールという分かりやすい指標だけを見ると過小評価されやすいタイプと言える。\n" +
          "xA・チャンス創出・タックル数・空中戦勝率といった複数の指標を重ね合わせると、攻守にわたってチームに貢献するバランス型のMFとしての輪郭が浮かび上がる。\n" +
          "得点関与数が今後どれだけ伸びるかが評価の分かれ目になるが、スコアに残らない貢献でチームを支える姿勢は、データにも表れている。",
        en:
          "Kamada's profile is one that can easily be underestimated when assessed through goals alone.\n" +
          "When multiple metrics are overlaid — xA, chance creation, tackles, and aerial success — he emerges as a balanced, box-to-box midfielder who contributes at both ends of the pitch.\n" +
          "The extent to which his goal involvement numbers grow will be a key factor in how he is evaluated, but his data-backed contribution in areas that do not appear on the scoresheet is already evident.",
      },
    },
  ] as ArticleBlock[],
} as const;
