// content/articles/japan_squad_2026.ts
import type { ArticleBlock, Lang } from "./mitoma_2425";
export { pickText, renderLines } from "./mitoma_2425";

type Text = { ja: string; en?: string };

export const japanSquad2026 = {
  slug: "article_japan-squad-2026",
  title: {
    ja: "W杯2026 日本代表候補 スカッド総合評価",
    en: "Japan National Team Squad Evaluation for World Cup 2026",
  } as Text,

  lead: {
    ja:
      "2026年3,4月のスコットランド戦・イングランド戦をともに1-0で撃破し、ベストとも言える結果を残してW杯前最後の欧州遠征を終えた日本代表。\n" +
      "6月11日の開幕まで残り約2カ月となり、いよいよ最終26名の選考を進めなければいけない。\n" +
      "本稿では独自の定量指標を用いて、2025年より選出されている候補選手53名を対象に横断的に評価を行った。\n" +
      "指標はクラブでの出場実績、FotMob平均評価、日本代表通算キャップ評価の3軸に所属リーグ係数で補正し、さらに現時点のコンディションと「特性」の有無で総合評価を算出した。\n",
    en:
      "Japan wrapped up their final pre-tournament European tour in the best possible fashion, beating Scotland and England 1-0 in successive matches.\n" +
      "With the World Cup kicking off on 11 June 2026 — just under two months away — the debate over the final 26-man squad is becoming very real.\n" +
      "In this article, we evaluate 53 candidate players using a proprietary quantitative metric.\n" +
      "The scoring system combines three axes — Club Contribution Score, FotMob average score, and a Japan national team cap evaluation — adjusted by a league coefficient, then further modified by the player's current condition and the presence of a standout trait bonus.\n" +
      "This is a purely quantitative exercise, separate from tactical fit or coaching staff assessments. Our aim is to provide a structured reference — organising candidates along the three axes of club performance, international experience, and current fitness — to support the squad selection debate.",
  } as Text,

  blocks: [
    // ── 評価指標の説明 ────────────────────────────────────────
    { type: "h2", text: { ja: "評価指標について", en: "About the Metric" } },
    {
      type: "p",
      text: {
        ja:
          "総合評価 ＝ (クラブ貢献評価 ＋ 代表経験評価 ＋ クラブパフォーマンス評価) ÷ 3 × コンディション係数 × 特性補正\n\n" +
          "【クラブ貢献評価 (1〜5)】\n" +
          "出場時間 ÷ (リーグ試合数 × 90分) × リーグ係数 × 100 をスコア化。\n" +
          "75以上=5 / 50以上=4 / 30以上=3 / 15以上=2 / 15未満=1\n\n" +
          "【代表経験評価 (1〜5)】\n" +
          "通算代表キャップ数。0キャップ=1 / 1〜4キャップ=2 / 5〜14キャップ=3 / 15〜29キャップ=4 / 30キャップ以上=5\n\n" +
          "【クラブパフォーマンス評価 (1〜5)】\n" +
          "FotMob平均評価。7.5pt以上=5 / 7.0pt以上=4 / 6.5pt以上=3 / 6.0pt以上=2 / 6.0pt未満=1\n" +
          "（複数クラブ在籍時は試合数加重平均）\n\n" +
          "【リーグ係数 (0.81〜1.00)】\n" +
          "Optaベースのリーグ強度係数。PL=1.000 / La Liga=0.949 / Serie A=0.936 / Bundesliga=0.935など。クラブ貢献評価の算出に内包。\n\n" +
          "【コンディション係数】\n" +
          "万全（3）= ×1.0 / 復帰予定だが万全でない（2）= ×0.75 / 直近での復帰目途なし（1）= ×0.5\n\n" +
          "【特性補正】\n" +
          "森保監督のチーム作り、戦術に合致する強みを持つ場合に加算。特性2（替えがきかない）= ×1.4 / 特性1（強みあり）= ×1.2 / なし= ×1.0",
        en:
          "Overall Score = (Club Contribution Score + NT Experience Score + Club Performance Score) ÷ 3 × Condition Coefficient × Trait Bonus\n\n" +
          "[Club Contribution Score (1–5)]\n" +
          "Minutes played ÷ (league matches × 90) × league coefficient × 100.\n" +
          "≥75=5 / ≥50=4 / ≥30=3 / ≥15=2 / <15=1\n\n" +
          "[NT Experience Score (1–5)]\n" +
          "Total Japan caps. 0=1 / 1–4=2 / 5–14=3 / 15–29=4 / 30+=5\n\n" +
          "[Club Performance Score (1–5)]\n" +
          "FotMob average rating. ≥7.5=5 / ≥7.0=4 / ≥6.5=3 / ≥6.0=2 / <6.0=1\n" +
          "(Minutes-weighted average when at multiple clubs)\n\n" +
          "[League Coefficient (0.81–1.00)]\n" +
          "Opta-based league strength factor. PL=1.000 / La Liga=0.949 / Serie A=0.936 / Bundesliga=0.935, etc. Embedded within Club Contribution Score.\n\n" +
          "[Condition Coefficient]\n" +
          "Fully fit (3) = ×1.0 / Return expected but not 100% (2) = ×0.75 / Return timeline unclear (1) = ×0.5\n\n" +
          "[Trait Bonus]\n" +
          "Irreplaceable (trait 2) = ×1.4 / Strength present (trait 1) = ×1.2 / None = ×1.0",
      },
    },

    // ── チャート：テーブル ─────────────────────────────────────
    { type: "h2", text: { ja: "候補選手一覧", en: "Candidate Overview" } },
    {
      // TODO: ポジション別フィルター・ソート可能テーブルを生成
      type: "chart",
      chartKey: "table_squad_all",
    },

    // ── チャート：散布図 ──────────────────────────────────────
    { type: "h2", text: { ja: "クラブ実績 vs 総合評価", en: "Club Output vs Overall Score" } },
    {
      // TODO: ポジション別切り替え散布図（横軸 apts_score / 縦軸 overall_rating / サイズ特性補正）
      type: "chart",
      chartKey: "squad_scatter",
      caption: {
        ja: "横軸：クラブ貢献評価（クラブ出場率×リーグ係数×100）\n縦軸：総合評価\nプロットサイズ：特性補正の強さ\nポジション別で表示を切り替えられます。",
        en: "X-axis: Club Contribution Score (playing time ratio × league coeff × 100)\nY-axis: Overall score\nBubble size: Trait bonus magnitude\nToggle display by position.",
      },
    },

    // ── GK ──────────────────────────────────────────────────
    { type: "h2", text: { ja: "GK（3枠）", en: "Goalkeepers (3 spots)" } },

    {
      type: "chart",
      chartKey: "squad_bar_gk",
      caption: {
        ja: "各指標の総合評価への寄与量。★ = 特性補正あり、▲ = コンディション低下。",
        en: "Contribution of each metric to the overall score. ★ = trait bonus, ▲ = condition penalty.",
      },
    },
    {
      type: "p",
      text: {
        ja:
          "GKで絶対的な存在は鈴木彩艶だ。セービング力の高さに加え、規格外のキック力と精度を併せ持ったロングキックでビルドアップに貢献できる点は唯一無二。怪我で離脱はあったものの、パルマでもレギュラーであり、代表キャップも22を重ねている。スターターは鈴木彩で疑いの余地はないだろう。\n\n" +
          "残り2枠について、総合評価を見ると早川友基がやや抜けてはいるものの、谷晃生、小久保玲央ブライアン、大迫敬介、野澤大志ブランドンは横並びの印象を受ける。これらのメンバーが入る可能性は十分考えられるが、控えGKはサポート的な役割も多く含まれるため、現チームへの親和性という点で、これまで好んで選ばれてきた早川・大迫という序列は変わらないと予測する。",
        en:
          "Zion Suzuki is the undisputed number one goalkeeper. His combination of shot-stopping quality and the extraordinary power and precision of his long distribution makes him uniquely suited to contribute to build-up play — qualities that are genuinely hard to replicate at this level. Despite a spell on the sidelines through injury, he has maintained his starting spot at Parma and has 22 international caps to his name. The starting position is not up for debate.\n\n" +
          "For the remaining two places, the scores put Tomoki Hayakawa slightly ahead of the group, with Kósei Tani, Leo Brian Kokubo, Keisuke Osako, and Taishi Brandon Nozawa all closely clustered behind — but backup goalkeepers carry significant off-pitch support responsibilities, and in terms of familiarity within the current setup, we expect the established preference for Hayakawa and Osako to hold.",
      },
    },

    // ── DF ──────────────────────────────────────────────────
    { type: "h2", text: { ja: "DF（8枠前後）", en: "Defenders (approx. 8 spots)" } },

    {
      type: "chart",
      chartKey: "squad_bar_df",
      caption: {
        ja: "各指標の総合評価への寄与量。★ = 特性補正あり、▲ = コンディション低下。",
        en: "Contribution of each metric to the overall score. ★ = trait bonus, ▲ = condition penalty.",
      },
    },
    {
      type: "p",
      text: {
        ja:
          "主力クラスと言えるのは谷口彰悟・渡辺剛・伊藤洋輝・鈴木淳之介の4名だ。谷口は統率力と経験で既にDF陣のリーダー。渡辺はフィジカルを活かした対人の強さが際立つ。伊藤洋輝はロングフィードという明確な武器を持ち、バイエルン・ミュンヘン所属のクオリティを示している。鈴木淳之介はボールを持ち運べる万能型のサイドバックとして今後の代表の主軸になりうる。\n\n" +
          "菅原由勢はこれまでの起用のされ方から当落線上の一人とも言えるが、スコットランド・イングランドとの2試合でいずれも出場機会を得た。ブンデスでもシーズン通じて一定の出場を確保しており、右サイドバック・右ウイングバックのバックアッパーとして選ばれる可能性が高い。\n\n" +
          "瀬古歩夢は代表での守備面で悪目立ちしてしまったシーンのため過少評価されている一人だ。欧州の所属クラブで継続して確かな結果を残してきている通り、守備能力だけでなくロングフィードも得意で、所属クラブではアンカーも務める器用さを持つ。怪我での離脱も少なく、短期決戦において欠かせない戦力になると予想する。\n\n" +
          "注目は冨安健洋。まだ復帰途上と言え、アヤックスで出場わずか6試合198分に留まっており、現時点の総合評価は実力を反映していない。完調時のパフォーマンスはレベルの高いDF陣の中でも異色。短時間であっても起用したくなる頼もしさがあるため、フル稼働が見込めずともメンバー入りの可能性は十分ありうるが、回復状況を最も注視したい選手の一人だ。\n\n" +
          "板倉滉・高井幸大・安藤智哉・町田浩樹はいずれも選ばれる実力があるが、現時点では怪我を抱えており不透明。上記冨安と同様に、今後のコンディション、所属クラブでの活躍次第と言える。同ポジションにコンディションが不安な選手を複数抱えるわけにはいかないため、状況次第では橋岡大樹や荒木隼人が滑り込む可能性も考えられる。",
        en:
          "The established core consists of Shogo Taniguchi, Tsuyoshi Watanabe, Hiroki Ito, and Junnosuke Suzuki. Taniguchi is already the de facto leader of the defensive unit, combining authority with experience. Watanabe’s physical edge and intensity in one-on-one duels stands out clearly. Hiroki Ito’s long delivery is a clear weapon, and his standard at Bayern Munich speaks for itself. Junnosuke Suzuki is a versatile, ball-carrying defender who is emerging as a long-term pillar of the national side.\n\n" +
          "Yukinari Sugawara has sometimes sat on the margins of selection, but he featured in both matches against Scotland and England and has maintained a consistent run of Bundesliga appearances. He looks a likely inclusion as backup right-back or right wing-back.\n\n" +
          "Ayumu Seko is arguably one of the more underrated names in the squad, despite some high-profile defensive lapses that have invited scrutiny at international level. His record in Europe tells a fuller story — composure on the ball, range with his long passing, and the capacity to operate as an anchor midfielder at club level. Add a clean injury record to that, and he is exactly the kind of dependable all-rounder short tournaments thrive on.\n\n" +
          "Takehiro Tomiyasu is the name everyone is watching. Still making his way back, he has managed just six appearances and 198 minutes at Ajax — and his overall score at this point does not reflect his actual level. When fully fit, he stands in a class of his own among this group of defenders. Any manager will want him available even for limited minutes, and his inclusion despite less-than-full fitness remains entirely plausible. Even so, his recovery is the single most closely watched storyline in this entire squad picture.\n\n" +
          "Ko Itakura, Kota Takai, Tomoya Ando, and Koki Machida all have the quality to be included, but all are currently dealing with injuries and their situations remain unclear. As with Tomiyasu, fitness and club form over the coming weeks will be decisive. The squad cannot afford to carry too many injury concerns at the same position, which means Daiki Hashioka or Hayato Araki could yet work their way into the picture depending on how things develop.",
      },
    },

    // ── MF ──────────────────────────────────────────────────
    { type: "h2", text: { ja: "MF（10枠前後）", en: "Midfielders (approx. 10 spots)" } },

    {
      type: "chart",
      chartKey: "squad_bar_mf",
      caption: {
        ja: "各指標の総合評価への寄与量。★ = 特性補正あり、▲ = コンディション低下。",
        en: "Contribution of each metric to the overall score. ★ = trait bonus, ▲ = condition penalty.",
      },
    },
    {
      type: "p",
      text: {
        ja:
          "満点評価となった佐野海舟・鎌田大地・三笘薫・伊東純也・中村敬斗・堂安律は絶対的な存在だ。いずれも代替の利かない強みを持ち、佐野海はボール奪取力と運動量、鎌田は高いテクニックとゲームメイク力、三笘はワールドクラスのボールコントロールとドリブル、伊東は衰えない突破力と精度高いクロスをもって、スコットランド戦・イングランド戦でもその実力を示した。\n\n" +
          "中でも、中村はフランス2部所属のため目立ちにくいが、ゴール前での落ち着きは欧州トップクラスとも言え、イングランド戦でも決定的な仕事を果たし、運動量も圧倒的だった。本番ではフィニッシュの質も期待ができる。\n\n" +
          "堂安は、クラブでの調子は開幕時と比較すると控えめであるものの、攻撃と守備を高レベルでこなすことができ、勝負強さやポジティブなキャラクターはチームに欠かせない。\n\n" +
          "また、怪我から復帰間近の久保建英も、創造性とラ・リーガでの実績は唯一無二であり、コンディションが戻れば確実に選ばれる存在だ。\n\n" +
          "嬉しい悩みなのが守備的MFの争いだ。佐野航大・藤田譲瑠チマは前目のポジションへの対応力もあり台頭目覚ましいが、アピールしきるには至らなかった。田中碧は今回2試合とも出場機会を得ておりやや優勢か。遠藤航・守田英正も入ってくる。遠藤はリバプールでの出場機会が限られており、怪我の状態も軽度ではないことから現状は厳しい。守田はゲームを読む力が高く、入れば確実に助けになるだろうが、森保監督の序列はそれほど高くないと考えられ、各クラブ残りシーズンでの活躍が選考を大きく左右するだろう。\n\n" +
          "唯一の懸念点は左サイドのウイングバックの専任不在だ。前田大然もここではフィットしきっておらず、三笘・中村をそのポジションに固定するわけにもいかない。鈴木淳や伊藤も選択肢にはなるが、場合によっては相馬勇紀のような国内組の抜擢も十分ありうる。",
        en:
          "Kaishu Sano, Daichi Kamada, Kaoru Mitoma, Junya Ito, Keito Nakamura, and Ritsu Doan all received perfect scores — each possessing qualities that are genuinely hard to replace, and all demonstrated exactly that across both the Scotland and England matches. Sano: relentless ball-winning dynamism and work rate. Kamada: technical excellence and game management. Mitoma: world-class control and dribbling. Ito: penetrating runs and clinical delivery that show no sign of fading.\n\n" +
          "Nakamura, in particular, stays under the radar playing in Ligue 2, but his composure in the final third is up there with anyone in Europe — he made a decisive contribution against England and his running output was outstanding throughout. His finishing quality at the tournament itself is something to look forward to.\n\n" +
          "Doan's club form has been somewhat quieter compared to the start of the season, but his ability to operate at a high level in both phases of the game, combined with his clutch mentality and infectious character, make him genuinely irreplaceable within this group.\n\n" +
          "Takefusa Kubo, on the verge of returning from injury, brings creative quality and a sustained La Liga record that no one else in the squad can match — he is a certainty when fit.\n\n" +
          "The deeper midfield competition is a genuinely welcome headache. Kodai Sano and Joēru Chima Fujita have both shown they can operate further forward as well, and their emergence has been impressive — though neither has yet made an unassailable case. Ao Tanaka featured in both matches on this tour, giving him a slight edge at this moment. Wataru Endo and Hidemasa Morita are also in the frame. Endo's outlook is difficult: limited Liverpool minutes and an injury situation that is not trivial. Morita reads the game as well as anyone and would contribute immediately, though his position in Moriyasu's order of selection appears lower than his quality alone might suggest. How each of these players performs for their clubs in the run-in will carry real weight.\n\n" +
          "The one genuine gap in the group is the absence of a devoted left wing-back. Daizen Maeda has not been fully convincing in the role, and deploying Mitoma or Nakamura there on a permanent basis makes little sense. Junnosuke Suzuki and Hiroki Ito are options in principle, but the promotion of a domestic-based player — Yuki Soma being the natural candidate — is a real and credible possibility.",
      },
    },

    // ── FW ──────────────────────────────────────────────────
    { type: "h2", text: { ja: "FW（4枠前後）", en: "Forwards (approx. 4 spots)" } },

    {
      type: "chart",
      chartKey: "squad_bar_fw",
      caption: {
        ja: "各指標の総合評価への寄与量。★ = 特性補正あり、▲ = コンディション低下。",
        en: "Contribution of each metric to the overall score. ★ = trait bonus, ▲ = condition penalty.",
      },
    },
    {
      type: "p",
      text: {
        ja:
          "エースは言わずもがな上田綺世。フェイエノールトでの実績に違わず、フィニッシュの強さ、精度に加え、高強度のポストプレーや質の高いプレスも可能で、いるといないとで戦い方が変わってくる存在。コンディションを崩さずに本番を迎えることだけを望む。\n\n" +
          "前田大然も順当な選択だ。左サイドでの起用が続き、活躍が限られている印象もあるが、前線からの鬼プレスはある意味コンディションに左右されず発揮でき、ワールドクラスの武器とも言える。特に劣勢時には必ずチームの助けになる。\n\n" +
          "今回のイギリス遠征で最もインパクトを残したのは塩貝健斗だろう。そのスピード・瞬発力・体の強さ・アグレッシブな姿勢は何かを起こしてくれる予感を漂わせており、残りのシーズン、ヴォルフスブルクでなんとか結果を残し出場を決定付けてほしい。\n\n" +
          "小川航基・後藤啓介・町野修斗もレベルの高い争いになっている。誰が入ってもおかしくないが、より器用な印象がある町野はクラブでほとんど出場できていない点が大きな懸念材料となる。小川は高さという武器を持つが、こちらもクラブでは十分な出場機会を得られていない。二人に比べると経験は浅いが、シント・トロイデンで充実のシーズンを送る後藤にも十分チャンスがある。",
        en:
          "Ayase Ueda goes without saying. True to his Feyenoord record, his finishing quality is complemented by high-intensity hold-up play and quality pressing — his presence or absence genuinely changes what this team can do. The only ask is that he arrives at the tournament in full working order.\n\n" +
          "Daizen Maeda is also automatic. His deployment as a wide forward has sometimes limited his direct impact, but his relentless pressing from the front is a weapon that does not depend on match rhythm or form — it simply is what he does. When the team is under pressure, he reliably shifts the balance back in Japan's favour.\n\n" +
          "The player who made the biggest impression on the British tour was Kento Shiogai. His pace, explosive movement, physicality, and aggressive approach create a constant sense that something is about to happen — and we genuinely want to see him force his way into regular minutes at Wolfsburg in the time that remains.\n\n" +
          "The remaining spot or spots come down to Koki Ogawa, Keisuke Goto, and Shuto Machino. Any of them could make the cut, but Machino — who gives a more versatile impression — has barely featured for his club, and that absence is a serious concern. Ogawa brings a clear aerial weapon but has also struggled to secure regular minutes at club level. Goto has had a productive season at Sint-Truiden and, though less experienced than the other two, has every reason to feel genuinely in contention going into the final run-in.",
      },
    },

    // ── まとめ ────────────────────────────────────────────────
    { type: "h2", text: { ja: "まとめ", en: "Summary" } },
    {
      type: "p",
      text: {
        ja:
          "スコットランド・イングランドとの連戦を完勝したことで、チームとしての完成度と自信が一段と高まった印象だ。一方で、怪我人の多さは引き続き大きな懸念材料。森保監督は、できる限りこれまでにより関わった選手を選出したいだろうが、残り約2カ月での各々の回復・調整によって、入れ替え必要になる可能性がある。\n\n" +
          "記事中では名前を挙げなかったが、前十字靭帯損傷という大きな怪我を負った南野拓実が復帰に向けたトレーニングを開始したというニュースも飛び込んできた。長く苦しむことになるかと思われた中で、このスピード感での回復は朗報だ。代表実績と、本来の能力を考えれば、間に合うようであれば選考対象に上がってくることは間違いない。\n\n" +
          "記事中の指標はあくまで定量的な試みであり、監督の評価や戦術的適性を反映するものではない。W杯での活躍を楽しみにしている一日本サッカーファンとしての思いを含んだアウトプットとして捉えてもらえると幸いだ。",
        en:
          "Back-to-back wins over Scotland and England have given this squad a genuine lift — in terms of both quality and confidence. At the same time, the volume of injuries continues to be a serious concern. With just under two months to the tournament, the final 26 could look very different depending on how each player's recovery and preparation unfolds.\n\n" +
          "One name not featured in the main analysis: Takumi Minamino, who suffered a serious ACL injury, has reportedly returned to training. At a point when many feared a prolonged absence, that pace of recovery is genuinely encouraging. Given his international record and natural ability, there is no doubt he would re-enter the selection picture if he can make it back in time.\n\n" +
          "The metric used in this article is a purely quantitative exercise and does not reflect coaching priorities or tactical fit. We hope it reads for what it is — the output of a Japan football fan who is very much looking forward to watching this team at the World Cup.",
      },
    },
  ] as ArticleBlock[],
} as const;
