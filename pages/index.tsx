import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useI18n } from "../contexts/I18n";

export default function Home() {
  const { t } = useI18n();
  return (
    <div className={styles.page}>
      <header className={styles.nav}>
        <div className={styles.logoArea}>
          <span className={styles.logoDot} />
          <span className={styles.brand}>{t("brand")}</span>
        </div>
        <nav className={styles.menu}>
          <Link href="./" className={styles.menuLink}>{t("navHome")}</Link>
          <Link href="./article_250922_mitoma.html" className={styles.menuLink}>{t("navArticles")}</Link>
          <a href="./contact.html" className={styles.menuLink}>{t("navContact")}</a>
        </nav>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>{t("homeTitle")}</h1>
          <p>{t("homeLead")}</p>
          <div className={styles.ctaRow}>
            <Link href="./article_250922_mitoma.html" className={styles.ctaPrimary}>
              {t("ctaReadMitoma")}
            </Link>
          </div>
        </div>
      </section>
      {/* …（前回のKPIやカード類はそのまま流用OK）… */}
    </div>
  );
}
