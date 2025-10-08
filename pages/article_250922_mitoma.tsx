// pages/article_250922_mitoma.tsx
import Layout from "../components/Layout";
import styles from "../styles/Article.module.css";

export default function MitomaArticle() {
  return (
    <Layout>
      <article className={styles.article}>
        <h1 className={styles.title}>
          三苫薫 24/25シーズン分析
        </h1>
        <p className={styles.lead}>
          ブライトンの三苫薫は、24/25シーズンプレミアリーグで10ゴール4アシストを記録、ゴール関与という最もわかりやすい指標で結果を残した。<br />
          また、チェルシー戦(2025年2月15日)での、GKからのロングボールを流れるようにセンセーショナルなゴールに代表されるように、
          ロングボールを見事におさめる秀逸なファーストタッチの数々はファンを魅了した。<br />
          <br />
          一方で、三苫の選手としての特徴は、データ上どのように表れているのだろうか<br />
          プレミアリーグ上位8クラブの類似した役割を担った選手と比較しながら振り返る。<br />
        </p>

        {/* 分析画像1 */}
        <div className={styles.imageWrapper}>
          <img
            // src="/images/articles/radar_chart_mitoma.png"
            src="https://tk0624.github.io/football_analytics/images/articles/radar_chart_mitoma.png"
            alt="三苫_24/25_レーダーチャート"
            className={styles.image}
          />
          <p className={styles.caption}>
            三苫の24/25シーズンにおける攻撃・守備・比較指標<br />
            <br />
            比較用にピックアップした選手<br />
            ジェレミー・ドク（マンチェスター・シティ）<br />
            ガブリエウ・マルティネッリ（アーセナル）<br />
            コーディ・ガクポ（リヴァプール）<br />
            ペドロ・ネト（チェルシー）<br />
            ハーヴィー・バーンズ（ニューカッスル・ユナイテッド）<br />
            ジェイドン・サンチョ（チェルシー）<br />
            カラム・ハドソン＝オドイ（ノッティンガム・フォレスト）<br />
          </p>
        </div>

        {/* 本文 */}
        <section className={styles.section}>
          <h2>攻撃面での特徴</h2>
          <p className={styles.body}>
            高いxGを記録した一方で、決定機を逃す場面も少なくなかったことが示唆されている。<br />
            これは、もっとゴールを挙げられたとも言えるが、相手にとっては危険な存在であったことも事実である。
            例えば、「右からのクロスにギリギリで飛び込む」、「スルーパスに抜け出してシュート」、
            などが、ゴールを脅かした印象的なシーンとして挙げられる。
          </p>
          <p className={styles.body}>
            ドリブルやクロスの試行回数は、他のウインガーに比べると突出した数値ではない。 <br />
            例えば、ドリブルではドク、クロスではマルティネリやネトの貢献が目立つ。
            これは、三苫が、やや成功率の劣る突破やクロスよりも、
            ”チームとしての崩し”を優先してプレー選択する傾向が高いことが窺える。
          </p>
        </section>

        {/* 分析画像2 */}
        <div className={styles.imageWrapper}>
          <img
            src="https://tk0624.github.io/football_analytics/images/articles/radar_chart_comparison.png"
            
            alt="三苫vs_24/25_レーダーチャート"
            className={styles.image}
          />
          <p className={styles.caption}>
            各指標比較_三苫vsドク、マルティネリ_24/25シーズン<br />
          </p>
        </div>

        <section className={styles.section}>
          <h2>守備面での特徴</h2>
          <p className={styles.body}>
            インターセプトやタックル数の多さは、三苫の守備意識の高さを物語っている。<br />
            決して守備強度の高いタイプではないが、常に適切なポジションを取ろうとし、
            隙あらば相手からボールを奪う姿勢はチームの守備を助けている。
            先発時のプレー時間が比較的長いことからも、試合展開によらず守備的なバランスを保つ上で、 
            ヒュルツェラー監督からの信頼が非常に高かったと言える。
          </p>
          <p className={styles.body}>
            また、空中戦の勝率が高く、サイドアタッカーとしては意外性のある強みとなっている。
            身長は決して高くはないが、空間把握能力とジャンプのタイミングの良さによるもので、
            良く観戦しているファンほど気づく「隠れた武器」と言える。
          </p>
        </section>

        <section className={styles.section}>
          <h2>総合評価と位置づけ</h2>
          <p className={styles.body}>
            三苫は個人で突破できるスキルやスピードを持ちながらも、
            チームとしてより高い確度を求める典型的な「ドリブラー型ウインガー」とは一線を画し、
            攻撃に加えて守備や空中戦でも存在感を発揮する「バランス型」のプロファイルを確立した。
            上位クラブの同ポジション選手と比較しても、
            攻撃面だけに依存せず、守備や試合全体への関与度で際立っている。
          </p>
          <p className={styles.body}>
            24/25シーズンの三苫を要約すれば、
            「派手さよりも堅実さ、そして守備貢献」。
            このスタイルはチーム戦術にフィットし、攻守両面で不可欠な存在へと進化したことを示している。
          </p>
        </section>
      </article>
    </Layout>
  );
}