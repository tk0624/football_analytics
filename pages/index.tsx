// pages/index.tsx
import Link from "next/link";
import Layout from "../components/Layout";
import { useI18n } from "../contexts/I18n";
import styles from "../styles/Home.module.css";
import heroBg from "../public/images/hero-bg.png";

export default function Home() {
  const { t } = useI18n();

  return (
    <Layout>
      {/* ─ Hero ─ */}
      <section
        className={styles.hero}
        style={{
          backgroundImage: `url(${heroBg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className={styles.heroContent}>
          <h1>{t("homeTitle")}</h1>
          <p>{t("homeLead")}</p>
        </div>
      </section>

      {/* ─ 記事一覧 ─ */}
      <section className={styles.articleSection}>
        <h2 className={styles.sectionTitle}>{t("sectionArticles")}</h2>
        <div className={styles.articleGrid}>

          {/* 三苫記事 */}
          <Link href="/article_mitoma-2024-25/" className={styles.articleCard}>
            <span className={styles.cardTag}>{t("cardMitomaTag")}</span>
            <div className={styles.cardMeta}>
              <span className={styles.cardPlayer}>{t("cardMitomaTitle")}</span>
              <span className={styles.cardTeam}>{t("cardMitomaTeam")}</span>
            </div>
            <p className={styles.cardDesc}>{t("cardMitomaDesc")}</p>
            <span className={styles.cardReadLink}>{t("cardMitomaRead")} →</span>
          </Link>

          {/* 鎌田記事 */}
          <Link href="/article_kamada-2024-25/" className={styles.articleCard}>
            <span className={styles.cardTag}>{t("cardKamadaTag")}</span>
            <div className={styles.cardMeta}>
              <span className={styles.cardPlayer}>{t("cardKamadaTitle")}</span>
              <span className={styles.cardTeam}>{t("cardKamadaTeam")}</span>
            </div>
            <p className={styles.cardDesc}>{t("cardKamadaDesc")}</p>
            <span className={styles.cardReadLink}>{t("cardKamadaRead")} →</span>
          </Link>

        </div>
      </section>
    </Layout>
  );
}