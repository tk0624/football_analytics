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
      "3月のスコットランド戦・イングランド戦をともに1-0で撃破し、ベストとも言える結果を残してW杯前最後の欧州遠征を終えた日本代表。\n" +
      "2026年6月11日の開幕まで残り約2カ月となり、最終26名の選考が現実的な議題として浮かぶ時期が来た。\n" +
      "本稿では独自の定量指標を用いて、候補選手53名を横断的に評価する。\n" +
      "指標はクラブでの出場実績（APTS）、FotMob平均レーティング、日本代表通算キャップ評価の3軸をリーグ係数で補正し、さらに現時点のコンディションと「武器」の有無で最終スコアを算出した。\n" +
      "あくまで定量的な試みであり、戦術的適性や監督の評価とは切り離したものだが、「クラブでの活躍 × 代表での経験 × 現在の状態」という3軸で候補を整理する素材として活用していただければ幸いだ。",
    en:
      "Japan wrapped up their final pre-tournament European tour in the best possible fashion, beating Scotland and England 1-0 in successive matches.\n" +
      "With the World Cup kicking off on 11 June 2026 — just under two months away — the debate over the final 26-man squad is becoming very real.\n" +
      "In this article, we evaluate 53 candidate players using a proprietary quantitative metric.\n" +
      "The scoring system combines three axes — club playing time (APTS), FotMob average rating, and a Japan national team cap evaluation — adjusted by a league coefficient, then further modified by the player's current condition and the presence of a standout weapon.\n" +
      "This is a purely quantitative exercise, separate from tactical fit or coaching staff assessments. Our aim is to provide a structured reference — organising candidates along the three axes of club performance, international experience, and current fitness — to support the squad selection debate.",
  } as Text,

  blocks: [
    // ── 評価指標の説明 ────────────────────────────────────────
    { type: "h2", text: { ja: "評価指標について", en: "About the Metric" } },
    {
      type: "p",
      text: {
        ja:
          "総合レーティングは以下の式で算出している。\n\n" +
          "  総合 ＝ リーグ係数 × (APTS評価 ＋ NT評価 ＋ FotMob評価) ÷ 3 × コンディション係数 × 武器補正\n\n" +
          "【APTS評価(1〜5)】出場時間 ÷ (リーグ試合数 × 90分) × リーグ係数 × 100 をスコア化し、75以上=5 / 50以上=4 / 30以上=3 / 15以上=2 / 15未満=1。クラブでどれだけ試合に貢献できているか、リーグ強度込みで見る指標。\n" +
          "【NT評価(1〜5)】通算代表キャップ数で5段階。0=1 / 1〜4=2 / 5〜14=3 / 15〜29=4 / 30以上=5。積み重ねた代表経験の代理指標。\n" +
          "【FotMob評価(1〜5)】FotMob平均レーティングを5段階。7.5以上=5 / 7.0以上=4 / 6.5以上=3 / 6.0以上=2 / 6.0未満=1。複数クラブに在籍した場合は試合数加重平均を使用。\n" +
          "【リーグ係数(0.81〜1.00)】Optaベースのリーグ強度係数。PL=1.000 / LaLiga=0.949 / Serie A=0.936 / Bundesliga=0.935など。所属リーグの水準をスコアに反映するための補正。\n" +
          "【コンディション係数】コンディション3（万全）=×1.0 / 2（復帰の目途は立っているが万全でない）=×0.75 / 1（大きな怪我で直近復帰の目途が立っていない）=×0.5。\n" +
          "【武器補正】森安監督の戦術・チーム作りに合致するユニークな強みを持つ場合に加算。より替えがきかない存在（weapon 2）=×1.4 / 強みあり（weapon 1）=×1.2 / なし=×1.0。",
        en:
          "The overall rating is calculated as follows:\n\n" +
          "  Overall = League Coeff × (APTS Rating + NT Rating + FotMob Rating) ÷ 3 × Condition Coeff × Weapon Bonus\n\n" +
          "[APTS Rating (1–5)] Minutes played ÷ (league matches × 90) × league coefficient × 100, scaled to: ≥75=5 / ≥50=4 / ≥30=3 / ≥15=2 / <15=1. Measures how much a player contributes at club level, adjusted for league strength.\n" +
          "[NT Rating (1–5)] Total Japan national team caps: 0=1 / 1–4=2 / 5–14=3 / 15–29=4 / 30+=5. A proxy for accumulated international experience.\n" +
          "[FotMob Rating (1–5)] FotMob average match rating: ≥7.5=5 / ≥7.0=4 / ≥6.5=3 / ≥6.0=2 / <6.0=1. Where a player has been at multiple clubs, a minutes-weighted average is used.\n" +
          "[League Coefficient (0.81–1.00)] Opta-based league strength factor: PL=1.000 / La Liga=0.949 / Serie A=0.936 / Bundesliga=0.935, etc.\n" +
          "[Condition Coefficient] Condition 3 (fully fit) = ×1.0 / Condition 2 (expected return soon but not yet 100%) = ×0.75 / Condition 1 (serious injury, return timeline unclear) = ×0.5.\n" +
          "[Weapon Bonus] Applied where a player has a unique strength aligned with Moriyasu's tactical approach. Irreplaceable (weapon 2) = ×1.4 / Strength present (weapon 1) = ×1.2 / None = ×1.0.",
      },
    },

    // ── チャート：テーブル ─────────────────────────────────────
    { type: "h2", text: { ja: "候補選手一覧", en: "Candidate Overview" } },
    {
      // TODO: ポジション別フィルター・ソート可能テーブルを生成
      type: "chart",
      chartKey: "table_squad_all",
      caption: {
        ja: "GK / DF / MF / FW 別で切り替え可能。各列クリックでソート。",
        en: "Filterable by position (GK / DF / MF / FW). Click column headers to sort.",
      },
    },

    // ── チャート：散布図 ──────────────────────────────────────
    { type: "h2", text: { ja: "クラブ実績 vs 総合評価", en: "Club Output vs Overall Rating" } },
    {
      // TODO: ポジション別切り替え散布図（横軸 apts_score / 縦軸 overall_rating / サイズ weapon_bonus）
      type: "chart",
      chartKey: "squad_scatter",
      caption: {
        ja: "横軸：APTSスコア（クラブ出場率×リーグ係数×100）\n縦軸：総合レーティング\nプロットサイズ：武器補正の強さ\nポジション別で表示を切り替えられます。",
        en: "X-axis: APTS score (playing time ratio × league coeff × 100)\nY-axis: Overall rating\nBubble size: Weapon bonus magnitude\nToggle display by position.",
      },
    },

    // ── GK ──────────────────────────────────────────────────
    { type: "h2", text: { ja: "GK（3枠）", en: "Goalkeepers (3 spots)" } },
    {
      type: "p",
      text: {
        ja:
          "GKで絶対的な存在は鈴木彩艶（総合4.37）だ。セービング力の高さに加え、足元の技術とロングキックでビルドアップに貢献できる点が森安監督の戦術に合致しており、weapon 2として最高の武器補正を付与している。イタリア・パルマで出場13試合・22代表キャップと経験も申し分ない。スターターは鈴木彩艶で疑いの余地はないだろう。\n\n" +
          "残り2枠は、総合レーティングを見ると早川友基（3.38）、谷晃生（3.09）、小久保玲央ブライアン（2.95）、大迫敬介（2.81）、野澤大志ブランドン（2.65）がほぼ横並びの印象を受ける。実力差という観点ではそれほど大きな差はないとも言え、実力派がそろっていると言える。谷も候補としては十分考えられるが、控えGKはサポート的な役割も多く含まれるため、国際経験とチームへの親しみという点で、これまで好んで選ばれてきた早川・大迫という序列は変わらないと予測する。",
        en:
          "Zion Suzuki (overall 4.37) is the undisputed number one. In addition to his shot-stopping ability, his technical quality on the ball and long-kicking contribution to build-up play make him a natural fit for Moriyasu's system — qualities that earn him the maximum weapon bonus (weapon 2). With 13 Serie A appearances and 22 international caps, his experience reinforces the case. There is no debate about the starting spot.\n\n" +
          "For the remaining two places, the ratings tell a story of tight competition: Tomoki Hayakawa (3.38), Kosei Tani (3.09), Leo Brian Kokubo (2.95), Keisuke Osako (2.81), and Taishi Brandon Nozawa (2.65) are largely clustered together. The quality gap between them is not dramatic. Tani is a perfectly viable candidate, but backup goalkeepers carry significant off-pitch responsibilities — and given the preference coaches have shown for Hayakawa and Osako, we expect that pecking order to hold.",
      },
    },

    {
      type: "chart",
      chartKey: "squad_bar_gk",
      caption: {
        ja: "各指標の総合評価への寄与量。★ = weapon補正あり、▲ = コンディション低下。",
        en: "Contribution of each metric to the overall rating. ★ = weapon bonus, ▲ = condition penalty.",
      },
    },

    // ── DF ──────────────────────────────────────────────────
    { type: "h2", text: { ja: "DF（8枠）", en: "Defenders (8 spots)" } },
    {
      type: "p",
      text: {
        ja:
          "主力クラスと言えるのは谷口彰悟（4.24）・渡辺剛（3.74）・鈴木淳之介（3.47）・伊藤洋輝（3.74）の4名だ。谷口は統率力と経験（36キャップ）でDF陣のリーダー。渡辺はフィジカルを活かした対人の強さが際立つ。鈴木淳之介はボールを持ち運べる万能型のサイドバックとして今後の代表の主軸になりうる。伊藤洋輝はロングフィードという明確な武器（weapon 1）を持ち、バイエルン・ミュンヘンでの経験がスコアを支えている。\n\n" +
          "菅原由勢（3.74）はこれまでの起用のされ方から当落線上の一人とも言えるが、スコットランド・イングランドとの2試合でいずれも出場機会を得た。ブンデスでもシーズン通じて一定の出場を確保しており、右サイドバック・右ウイングバックのバックアッパーとして選ばれる可能性は十分ある。\n\n" +
          "瀬古歩夢（3.40）は代表での守備面で目立つシーンが気になる向きもあるが、本来は守備能力だけでなくロングフィードも得意で、所属クラブではアンカーも務める器用さを持つ。怪我での離脱も少なく、短期決戦において欠かせない戦力になると捉えている。\n\n" +
          "注目は冨安健洋（2.68）だ。アヤックスで出場わずか6試合198分と極端に少なく、コンディション係数も×0.75に留まっているため、現時点のスコアは実力を反映していない。42キャップのNT評価5と武器補正×1.4を持ち、完調時の潜在力はDF陣で群を抜く。短時間であっても起用したくなる頼もしさがあるプレーヤーだが、短期決戦で万全でない状態を抱えることはリスクがある。本番までの回復状況を最も注視したい選手の一人だ。\n\n" +
          "板倉滉（2.55）・高井幸大（1.17）・町田浩樹（1.09）はいずれも選ばれる実力があるが、怪我によるコンディション低下が現状のスコアを大きく抑制している。今回の代表戦でも辞退となった冨安・安藤と合わせて、所属クラブでの活躍を示せないと厳しい情勢と言える。状況次第では橋岡大樹（2.36）や荒木隼人（2.81）が滑り込む展開も十分ありうる。",
        en:
          "The core group consists of Shogo Taniguchi (4.24), Tsuyoshi Watanabe (3.74), Junnosuke Suzuki (3.47), and Hiroki Ito (3.74). Taniguchi provides leadership and experience (36 caps) as the defensive anchor. Watanabe's physical dominance in one-on-one situations stands out. Suzuki is a versatile ball-carrying full-back with the potential to become a long-term fixture. Hiroki Ito brings a clear weapon (weapon 1) in his long passing, underpinned by his experience at Bayern Munich.\n\n" +
          "Yukinari Sugawara (3.74) sits on the selection borderline based on how he has been used in the past, but he featured in both the Scotland and England matches during the latest camp. With a solid run of Bundesliga appearances to his name, he remains a strong candidate as backup right-back or right wing-back.\n\n" +
          "Ayumu Seko (3.40) has attracted attention for some costly defensive moments at international level, but his game goes well beyond defending — he is comfortable on the ball, effective with long passes, and capable of playing as an anchor at club level. His injury record is clean, and in a tournament where resilience matters, he could prove to be an under-appreciated asset.\n\n" +
          "Takehiro Tomiyasu (2.68) is the most closely watched name. Just 6 appearances and 198 minutes at Ajax — combined with a condition coefficient of ×0.75 — drag his score down significantly from his true level. His 42 caps (NT score: 5) and ×1.4 weapon bonus reflect top-tier potential when fully fit, and he is the kind of player a manager wants available even for limited minutes. That said, carrying multiple unfit defenders into a short tournament is a genuine risk. His recovery over the coming weeks is the single biggest watch-point among defenders.\n\n" +
          "Ko Itakura (2.55), Kota Takai (1.17), and Koki Machida (1.09) all have the quality to be included, but injury-related condition penalties are suppressing their scores heavily. Along with the withdrawn Tomiyasu and Tomoya Ando, each needs to show form at club level to strengthen their case. Depending on how things develop, Daiki Hashioka (2.36) or Hayato Araki (2.81) could emerge as surprise inclusions.",
      },
    },

    {
      type: "chart",
      chartKey: "squad_bar_df",
      caption: {
        ja: "各指標の総合評価への寄与量。★ = weapon補正あり、▲ = コンディション低下。",
        en: "Contribution of each metric to the overall rating. ★ = weapon bonus, ▲ = condition penalty.",
      },
    },

    // ── MF ──────────────────────────────────────────────────
    { type: "h2", text: { ja: "MF（11枠）", en: "Midfielders (11 spots)" } },
    {
      type: "p",
      text: {
        ja:
          "佐野海舟（5.00）・鎌田大地（5.00）・三笘薫（5.00）・伊東純也（4.54）は絶対的な存在だ。スコットランド戦・イングランド戦でもその実力を示し、いずれも代替の利かない役割を担っている。佐野はボール奪取力と運動量で中盤のフィルターとして機能し、鎌田はゲームをコントロールするテンポとパスで攻守をつなぐ。三笘はボールコントロールとドリブルで局面を打開し、伊東は衰えない突破力と精度高いクロスで得点機を生み出し続けている。\n\n" +
          "フランス2部所属で目立ちにくい中村敬斗（4.23）だが、ゴール前での落ち着きは欧州トップクラスとも言え、イングランド戦でも決定的な仕事を果たした。堂安律（4.86）はクラブでの調子が下降傾向にあるものの、勝負強さやポジティブなキャラクターはチームに欠かせない。怪我から復帰間近の久保建英（3.99）も、創造性とラ・リーガで記録した実績は唯一無二であり、コンディションが戻れば確実に選ばれる存在だ。\n\n" +
          "嬉しい悩みなのがディフェンシブハーフの争いだ。佐野航大（3.40）・藤田譲瑠チマ（3.74）は前目のポジションへの対応力もあり台頭目覚ましいが、アピールしきるには至っていない。田中碧（3.50）は安定感があり、遠藤航（3.00）・守田英正（3.88）も候補だ。遠藤はリバプールでの出場機会が限られており、怪我の状態も軽度ではないことから現状は厳しい。守田はゲームを読む力が高く、入れば確実に助けになるが、森安監督の序列はそれほど高くないとも言える。各クラブ残りシーズンでの活躍が選考を大きく左右するだろう。\n\n" +
          "唯一の懸念点は左サイドウイングバックの専任不在だ。前田大然もここではフィットしきっておらず、三笘・中村をそのポジションに固定するわけにもいかない。鈴木淳之介や伊藤洋輝も選択肢にはなるが、場合によっては相馬勇紀（3.66）のような国内組の抜擢も十分ありうる。",
        en:
          "Kaishu Sano (5.00), Daichi Kamada (5.00), Kaoru Mitoma (5.00), and Junya Ito (4.54) are locks. They demonstrated their quality once again against Scotland and England, and each occupies a role that is genuinely difficult to replicate. Sano operates as a tireless defensive midfield filter; Kamada controls tempo and links defence to attack through his passing; Mitoma makes things happen with his control and dribbling; and Ito continues to deliver penetrating runs and precise crosses.\n\n" +
          "Keito Nakamura (4.23) plays in Ligue 2, which keeps him under the radar, but his composure in front of goal rivals the best in Europe — as he showed with a decisive contribution against England. Ritsu Doan (4.86) may be in a dip of form at club level, but his quality in big moments and his positive, combative character are irreplaceable for the group. Takefusa Kubo (3.99), recovering from injury and close to a return, is a unique talent in terms of creative vision and his La Liga record — once fit, his inclusion would be a certainty.\n\n" +
          "The deeper midfield battle is a welcome problem to have. Kodai Sano (3.40) and Joeru Chima Fujita (3.74) have shown they can operate higher up the pitch too, and their progress is impressive — yet neither has fully staked an insurmountable claim. Ao Tanaka (3.50) brings reliability, while Wataru Endo (3.00) and Hidemasa Morita (3.88) remain in the conversation. Endo's limited Liverpool minutes and the severity of his injury situation make his prospects difficult at the moment. Morita's ability to read the game is elite-level and he would add value immediately, but his standing in Moriyasu's hierarchy may not be as high as his ability warrants. The rest of the club season will be decisive for several of these players.\n\n" +
          "The one genuine concern is the absence of a specialist left wing-back. Daizen Maeda has not fully convinced in that role, and deploying Mitoma or Nakamura there full-time makes little sense. Junnosuke Suzuki and Hiroki Ito are options, but the promotion of a domestic-based player — Yuki Soma (3.66), for example — is a real possibility.",
      },
    },

    {
      type: "chart",
      chartKey: "squad_bar_mf",
      caption: {
        ja: "各指標の総合評価への寄与量。★ = weapon補正あり、▲ = コンディション低下。",
        en: "Contribution of each metric to the overall rating. ★ = weapon bonus, ▲ = condition penalty.",
      },
    },

    // ── FW ──────────────────────────────────────────────────
    { type: "h2", text: { ja: "FW（4枠）", en: "Forwards (4 spots)" } },
    {
      type: "p",
      text: {
        ja:
          "上田綺世（5.00）は言わずもがな。フェイエノールトでの実績、フィニッシュの強さと精度という意味で絶対的な1番手であり、コンディションを崩さずに本番を迎えることだけを望む存在だ。\n\n" +
          "前田大然（4.56）も順当な選択だ。左サイドでの起用で活躍が限られる場面もあるが、前線の鬼プレスはある意味コンディションに左右されず発揮でき、世界レベルの武器とも言える。イングランド戦でもその献身的な姿勢はチームを助けていた。\n\n" +
          "今回のイギリス遠征で最も序列を上げたのは塩貝健斗（3.05）だろう。ボルフスブルク移籍前のオランダ時代12試合363分（FotMob平均6.98）との合算で評価しており、トータル20試合648分のデータを使用している。そのスピード・瞬発力・体の強さ・アグレッシブな姿勢は何かを起こしてくれる予感を漂わせ、残りのクラブシーズンでの出場が序列を決定づけるだろう。\n\n" +
          "残りの1枠は小川航基（3.06）・後藤啓介（2.95）・町野修斗（2.49）の争いだ。誰が入ってもおかしくないが、町野はクラブでほとんど出場できていない点が大きな懸念材料となる。高さという武器を持つ小川が一歩リードか。ただし小川もクラブでの出場機会が減っており、シント・トロイデンで28試合2080分と着実に実績を積む後藤にも十分チャンスがある。",
        en:
          "Ayase Ueda (5.00) needs no argument. His record at Feyenoord, his finishing power, and his precision in front of goal make him the unquestioned first choice — the only ask is that he stays fit and arrives at the tournament in top condition.\n\n" +
          "Daizen Maeda (4.56) is equally straightforward. His impact is sometimes limited when deployed as a wide forward, but his relentless pressing from the front is a weapon that does not depend on form — it is a world-class contribution in its own right. His tireless effort against England was exactly the kind of thing this team needs.\n\n" +
          "The player who did most to raise his stock on the British tour is Kento Shiogai (3.05). His score is based on combined stats — 12 appearances and 363 minutes at his previous Dutch club (FotMob average: 6.98), merged with his Wolfsburg data to give a total of 20 appearances and 648 minutes. His speed, explosive movement, physicality, and aggressive style give the impression that something is always about to happen when he is on the pitch. How much he plays for Wolfsburg between now and the end of the season will be telling.\n\n" +
          "The final spot is a three-way race between Koki Ogawa (3.06), Keisuke Goto (2.95), and Shuto Machino (2.49). Any of them could make the squad, but Machino's near-total absence from club football is a significant concern. Ogawa, with his aerial presence as a clear weapon, has a narrow edge. That said, his minutes at club level have been declining — and Keisuke Goto, who has accumulated 28 appearances and 2,080 minutes at Sint-Truiden, has built a quiet but solid case.",
      },
    },

    {
      type: "chart",
      chartKey: "squad_bar_fw",
      caption: {
        ja: "各指標の総合評価への寄与量。★ = weapon補正あり、▲ = コンディション低下。",
        en: "Contribution of each metric to the overall rating. ★ = weapon bonus, ▲ = condition penalty.",
      },
    },

    // ── まとめ ────────────────────────────────────────────────
    { type: "h2", text: { ja: "まとめ", en: "Summary" } },
    {
      type: "p",
      text: {
        ja:
          "スコットランド・イングランドとの連戦を完勝したことで、チームとしての完成度と自信が一段と高まった印象だ。一方で、怪我人の多さは引き続き大きな懸念材料であり、冨安・板倉・高井・町田・久保・遠藤と名前を挙げるだけで、そのいびつさが伝わる。残り約2カ月での各々の回復・調整によって、26名の顔ぶれは大きく入れ替わる可能性がある。\n\n" +
          "記事中では名前を挙げなかったが、前十字靭帯損傷という大きな怪我を負った南野拓実が復帰に向けたトレーニングを開始したというニュースも飛び込んできた。長く苦しむことになるかと思われた中で、このスピード感での回復は朗報だ。73キャップという代表実績と、本来の能力を考えれば、間に合うようであれば選考対象に上がってくることは間違いない。\n\n" +
          "本指標はあくまで定量的な試みであり、監督の評価や戦術的適性を反映するものではない。しかし「クラブでの実績 × 代表経験 × 現在のコンディション」という3軸で53名を整理することで、最終26名選考の議論の出発点として活用していただければ幸いだ。",
        en:
          "Back-to-back wins over Scotland and England have given this squad a genuine lift — both in terms of quality and confidence. At the same time, the injury list remains a serious concern: Tomiyasu, Itakura, Takai, Machida, Kubo, Endo — listing those names alone illustrates how far the squad is from full strength. With around ten weeks to go, the final 26 could look very different depending on who recovers and when.\n\n" +
          "One name not covered in the main analysis: Takumi Minamino, who suffered a serious ACL injury, has reportedly begun working his way back in training. That news is more welcome than many expected at this stage of his recovery. With 73 caps and his natural quality, if he can make it back, there is no question he would re-enter the selection picture.\n\n" +
          "This metric is a quantitative exercise and does not reflect the coaching staff's priorities or tactical considerations. But by organising 53 candidates along the three axes of club output, international experience, and current fitness, we hope it provides a useful starting point for the debate about Japan's final World Cup squad.",
      },
    },
  ] as ArticleBlock[],
} as const;
