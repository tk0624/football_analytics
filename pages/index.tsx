// pages/index.tsx
import Layout from "../components/Layout";
import { useI18n } from "../contexts/I18n";
import styles from "../styles/Home.module.css";

export default function Home() {
  const { t } = useI18n();

  return (
    <Layout>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>{t("homeTitle")}</h1>
          <p>{t("homeLead")}</p>
          <div className={styles.ctaRow}>
            <a href="./article_250922_mitoma/" className={styles.ctaPrimary}>
              {t("ctaReadMitoma")}
            </a>
          </div>
        </div>
      </section>
      {/* ここに追加コンテンツを配置 */}
    </Layout>
  );
}