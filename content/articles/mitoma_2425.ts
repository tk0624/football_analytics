//content\articles\mitoma_2425.ts
export type Lang = "ja" | "en";

type Text = { ja: string; en?: string };

export type ArticleBlock =
  | { type: "h2"; text: Text }
  | { type: "p"; text: Text }
  | { type: "image"; src: string; alt: Text; caption?: Text };

export const mitoma2425 = {
  slug: "article_250922_mitoma",
  title: {
    ja: "三苫薫 24/25シーズン分析",
    en: "Kaoru Mitoma 24/25 Season Analysis",
  } as Text,

  lead: {
    ja:
        "ブライトンの三苫薫といえば、鋭いドリブルや突破力をまず思い浮かべる人が多いだろう。\n" +
        "しかし、今シーズンを含む直近数シーズンの試合を振り返ると、怪我やコンディションの影響はあるにせよ、以前のように無理に仕掛ける場面は明らかに減っている。\n" +
        "それでも、相手選手やブライトンのサポーターにとって、三苫の存在感が薄れたという印象はほとんどない。\n" +
        "実際、24/25シーズンのプレミアリーグでは10ゴール4アシストを記録し、ゴール関与という最も分かりやすい指標で結果を残している。\n" +
        "また、ボールを受けた瞬間から複数の相手選手が、突破を警戒して素早くマークに寄せる光景は、今季も頻繁に見られた。\n" +
        "その背景にある要素の一つが、三苫のファーストタッチの質である。ロングボールや鋭い縦パスに対しても、1〜2タッチで体勢を整え、相手にとってリスクの高い位置にボールを置くことで、寄せるタイミングそのものを奪っている。\n" +
        "2025年2月15日のチェルシー戦で見せた、GKからのロングボールを流れるようにコントロールし、そのままゴールへとつなげた一連のプレーは、この特徴を象徴するシーンと言える。\n\n" +
        "もっとも、このファーストタッチの巧みさは、残念ながら一般に公開されているデータ指標から直接捉えることは難しい。\n" +
        "では、三苫の選手としての特徴は、データ上ではどのように表れているのだろうか。\n" +
        "本稿では、プレミアリーグ上位8クラブで類似した役割を担うウインガーと比較しながら、その特徴を読み解いていく。",
    en:
        "Kaoru Mitoma at Brighton is widely associated with explosive dribbling and one-on-one attacking ability.\n" +
        "However, when looking back at matches from the past few seasons, including the current campaign, it is clear that he now forces individual take-ons far less frequently than before, partly due to injuries and physical condition.\n" +
        "Even so, there has been little sense that Mitoma’s presence has diminished for either opposing defenders or Brighton supporters.\n" +
        "In fact, during the 2024/25 Premier League season, he recorded 10 goals and 4 assists, delivering tangible output in the most straightforward metric of attacking contribution.\n" +
        "Moreover, scenes in which multiple defenders immediately close him down upon his first touch, wary of his ability to break through, have remained a common sight this season.\n" +
        "One key factor behind this is the quality of Mitoma’s first touch. Even when receiving long balls or fast vertical passes, he is able to set his body with one or two touches and place the ball in areas that pose high risk for defenders, effectively denying them the timing to step in.\n" +
        "His goal against Chelsea on February 15, 2025 — controlling a long ball from the goalkeeper in one fluid motion before finishing — stands as a symbolic example of this trait.\n\n" +
        "That said, such excellence in first touch is unfortunately difficult to capture directly through publicly available data metrics.\n" +
        "So how, then, do Mitoma’s characteristics as a player appear when viewed through data?\n" +
        "In this article, we examine his profile by comparing him with wingers performing similar roles at top-eight Premier League clubs.",
  } as Text,

  blocks: [
    {
      type: "image",
      src: "https://tk0624.github.io/football_analytics/images/articles/radar_chart_mitoma.png",
      alt: { 
        ja: "三苫 24/25シーズン レーダーチャート",
        en: "",
      },
      caption: {
        ja:
          "三苫の24/25シーズンにおける攻撃・守備・比較指標\n\n" +
          "比較用にピックアップした選手\n" +
          "ジェレミー・ドク（マンチェスター・シティ）\n" +
          "ガブリエウ・マルティネッリ（アーセナル）\n" +
          "コーディ・ガクポ（リヴァプール）\n" +
          "ペドロ・ネト（チェルシー）\n" +
          "ハーヴィー・バーンズ（ニューカッスル・ユナイテッド）\n" +
          "ジェイドン・サンチョ（チェルシー）\n" +
          "カラム・ハドソン＝オドイ（ノッティンガム・フォレスト）",
        en: 
          "Radar chart of Kaoru Mitoma's attacking, defensive, and comparative metrics for the 2024/25 season.\n\n" +
          "Players selected for comparison:\n" +
          "Jeremy Doku (Manchester City)\n" +
          "Gabriel Martinelli (Arsenal)\n" +
          "Cody Gakpo (Liverpool)\n" +
          "Pedro Neto (Chelsea)\n" +
          "Harvey Barnes (Newcastle United)\n" +
          "Jadon Sancho (Chelsea)\n" +
          "Callum Hudson-Odoi (Nottingham Forest)",
      },
    },

    { type: "h2", text: { ja: "攻撃面での特徴", en: "Attacking profile" } },
    {
      type: "p",
      text: {
        ja:
          "高いxGを記録した一方で、決定機を逃す場面も少なくなかったことが示唆されている。\n" +
          "これは、もっとゴールを挙げられたとも言えるが、相手にとっては危険な存在であったことも事実だ。\n" +
          "例えば、「右からのクロスにギリギリで飛び込む」、「スルーパスに抜け出してシュート」などが、ゴールを脅かした印象的なシーンとして挙げられる。 \n" +
          "特に24/25シーズンからはスピードに定評のあるヤンクバ・ミンテと両翼を担い、多くのチャンスを創出している。",
        en:
          "While Mitoma recorded a relatively high xG, the data also suggests that he missed several big chances.\n" +
          "This can be interpreted in two ways: he could have scored more goals, but at the same time, he consistently positioned himself as a dangerous attacking threat for opponents.\n" +
          "Typical examples include late runs to meet crosses from the right flank and shots after breaking through the defensive line via through balls.\n" +
          "Notably, from the 2024/25 season onward, Mitoma has often operated on the opposite wing to the pacey Yankuba Minteh, a pairing that has helped generate a large number of attacking opportunities.",
      },
    },
    {
      type: "p",
      text: {
        ja:
          "ドリブルやクロスの試行回数は、他のウインガーと比較すると突出した数値ではない。\n" +
          "例えば、ドリブルではドク、クロスではマルティネッリやネトの方が、より積極的に関与していることが分かる。\n" +
          "これは三苫が、成功率の低い個人突破や無理なクロスを選択するよりも、味方との連携を重視した「チームとしての崩し」を優先していることを示唆している。\n" +
          "実際、近年はドリブル突破の回数を意図的に抑えていることを、三苫自身もインタビューの中で語っている。",
        en:
          "The volume of Mitoma’s dribbles and crosses is not particularly high when compared with other wingers.\n" +
          "For instance, Doku is more prominent in terms of dribble attempts, while Martinelli and Neto are more heavily involved in crossing.\n" +
          "This indicates that Mitoma tends to prioritize combination play within the team rather than forcing individual take-ons or attempting low-percentage crosses.\n" +
          "In fact, Mitoma himself has mentioned in interviews that he has deliberately reduced the number of dribble attempts in recent seasons.",
        },
    },
    {
      type: "image",
      src: "https://tk0624.github.io/football_analytics/images/articles/radar_chart_comparison.png",
      alt: { ja: "三苫 vs 比較 レーダーチャート", en: "" },
      caption: { ja: "vs ドク、マルティネリ 24/25シーズン", en: "vs Doku, Martinelli for the 2024/25 season" },
    },

    { type: "h2", text: { ja: "守備面での特徴", en: "Defending profile" } },
    {
      type: "p",
      text: {
        ja:
            "インターセプトやタックル数の多さは、三苫の守備意識の高さを端的に示している。\n" +
            "決して対人守備の強度で勝負するタイプではないものの、常に適切なポジションを意識し、タイミングを見てボールを奪いにいく姿勢は、チーム全体の守備バランスを支えている。\n" +
            "先発時のプレー時間が比較的長いことからも、試合展開に左右されず守備面での安定感をもたらす存在として、ヒュルツェラー監督から高い信頼を得ていたことがうかがえる。",
        en:
            "The high numbers of interceptions and tackles clearly reflect Mitoma’s strong defensive awareness.\n" +
            "While he is not a winger who relies on physical intensity in duels, his consistent positioning and willingness to step in at the right moment help maintain the team’s defensive balance.\n" +
            "The relatively long minutes he logged when starting also suggest that head coach Hürzeler placed significant trust in Mitoma as a player who could provide defensive stability regardless of match context.",
      },
    },
    {
      type: "p",
      text: {
        ja:
            "さらに、空中戦の勝率が高い点も、サイドアタッカーとしては意外性のある特徴だ。\n" +
            "身長が特別高いわけではないが、優れた空間把握能力とジャンプのタイミングによって補っており、熱心に試合を見ているファンほど気づきやすい「隠れた強み」と言える。",
        en:
            "In addition, Mitoma’s aerial duel success rate stands out as an unexpected strength for a wide attacker.\n" +
            "Although he is not particularly tall, this is compensated for by his spatial awareness and well-timed jumps, making it a ‘hidden weapon’ that is more readily noticed by attentive viewers.",
      },
    },

    { type: "h2", text: { ja: "まとめ", en: "Summary" } },
    {
      type: "p",
      text: {
        ja:
            "三苫は個人で局面を打開できるスキルとスピードを備えながらも、単純に仕掛けの回数で勝負する典型的な「ドリブラー型ウインガー」とは一線を画している。\n" +
            "攻撃にとどまらず、守備や空中戦を含めて試合全体に関与しており、「バランス型」のプロファイルを確立している。\n" +
            "上位クラブの同ポジションの選手と比較しても、攻撃面だけに依存せず、守備貢献や試合への関与度という点で際立った存在と言える。",
        en:
            "While Mitoma possesses the skill and pace to beat opponents individually, he clearly differs from the archetypal ‘dribbler-type’ winger who relies primarily on volume of take-ons.\n" +
            "By contributing not only in attack but also in defense and aerial situations, he has established a well-balanced player profile with strong involvement across all phases of the game.\n" +
            "Even when compared with players in similar positions at top clubs, Mitoma stands out for his ability to impact matches without relying solely on attacking output, particularly through his defensive contribution and overall involvement.",
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