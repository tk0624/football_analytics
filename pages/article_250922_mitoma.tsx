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
          2月15日のチェルシー戦でのセンセーショナルなゴールを含め、
          三苫薫は24/25シーズンに10ゴール4アシストを記録した。
          彼の特徴を、プレミア上位8クラブの同ポジション選手と比較しながら振り返る。
        </p>

        {/* 分析画像 */}
        <div className={styles.imageWrapper}>
          <img
            // src="/images/articles/radar_chart_mitoma.png"
            src="https://tk0624.github.io/football_analytics/images/articles/radar_chart_mitoma.png"
            alt="三苫の24/25シーズン分析レーダーチャート"
            className={styles.image}
          />
          <p className={styles.caption}>
            三苫の24/25シーズンにおける攻撃・守備・比較指標
          </p>
        </div>

        {/* 本文 */}
        <section className={styles.section}>
          <h2>攻撃面の特徴</h2>
          <p className={styles.body}>
            三苫は高いxGを記録した一方で、決定機を逃す場面も少なくなかった。
            特にミンテからのクロスにギリギリ飛び込むシーンは、ゴール前で存在感を示しながらも
            最後の一歩が届かない惜しいシーンとして象徴的だった。
          </p>
          <p className={styles.body}>
            ドリブルやクロスの試行回数・成功率は平均的であり、他のウインガーに比べると突出した数値ではない。
            無理な突破やクロスよりも、戦術的に求められるポジショニングやプレッシングを優先しており、
            「個の突破」で勝負するよりも「チームに適応した堅実さ」が光る。
            比較すると、ドリブル成功率ではドク、クロス精度ではマルティネリやネトが目立つ。
          </p>
        </section>

        <section className={styles.section}>
          <h2>守備面の特徴</h2>
          <p className={styles.body}>
            インターセプトやタックル数の多さは、三苫の守備意識の高さを物語っている。
            特にプレスバック時には積極的に相手からボールを奪い、ビルドアップを阻止する場面が目立つ。
            前線のアタッカーとしては異例なほど、守備面での信頼を勝ち取っている。
          </p>
          <p className={styles.body}>
            また、空中戦の勝率も高く、サイドアタッカーとしては意外性のある強みとなっている。
            空間把握能力とジャンプのタイミングが良く、相手より先にボールへ到達する姿勢は、
            試合をよく観察しているファンほど気づく「隠れた武器」と言える。
          </p>
        </section>

        <section className={styles.section}>
          <h2>総合評価と位置づけ</h2>
          <p className={styles.body}>
            三苫は典型的な「ドリブラー型ウインガー」とは一線を画し、
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