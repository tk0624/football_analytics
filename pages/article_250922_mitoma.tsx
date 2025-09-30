// pages/article_250922_mitoma.tsx
import Layout from "../components/Layout";
import { useI18n } from "../contexts/I18n";
import styles from "../styles/Article.module.css";

export default function MitomaArticle() {
  const { t } = useI18n();

  return (
    <Layout>
      <article className={styles.article}>
        <h1 className={styles.title}>
          {t("artMitomaTitle", "三苫薫 24/25シーズン分析")}
        </h1>
        <p className={styles.lead}>
          {t(
            "artMitomaLead",
            "2月15日のチェルシー戦でのセンセーショナルなゴールを含め、三苫薫は24/25シーズンに10ゴール4アシストを記録した。彼の特徴を、プレミア上位8クラブの同ポジション選手と比較しながら振り返る。"
          )}
        </p>

        {/* 分析画像 */}
        <div className={styles.imageWrapper}>
          <img
            src="/images/articles/radar_chart_mitoma.png"
            alt="Mitoma 24/25 season analysis chart"
            className={styles.image}
          />
          <p className={styles.caption}>
            {t(
              "artMitomaImgCaption",
              "三苫の24/25シーズンにおける攻撃・守備・比較指標 / Analytical visualization of Mitoma’s 24/25 season"
            )}
          </p>
        </div>

        {/* 本文 */}
        <section className={styles.section}>
          {/* ...省略（攻撃・守備・総合評価） */}
        </section>
      </article>
    </Layout>
  );
}