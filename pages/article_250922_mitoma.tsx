// pages/article_250922_mitoma.tsx
import Layout from "../components/Layout";
import { useI18n } from "../contexts/I18n";
import styles from "../styles/Article.module.css"; // 専用CSSを切り出すと綺麗

export default function MitomaArticle() {
  const { t } = useI18n();

  return (
    <Layout>
      <article className={styles.article}>
        <h1 className={styles.title}>{t("artMitomaTitle")}</h1>
        <p className={styles.lead}>{t("artMitomaLead")}</p>

        {/* 本文 */}
        <p className={styles.body}>
          ※本文：G/Aや出場時間に加え、キャリー・チャンスクリエイト・守備貢献のマイクロスタッツを可視化。
          トップウインガーとの相対比較と時系列トレンドを掲載。
        </p>
      </article>
    </Layout>
  );
}