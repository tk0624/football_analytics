// components/Layout.tsx
import Link from "next/link";
import { useI18n } from "../contexts/I18n";
import LanguageSwitch from "./LanguageSwitch";
import styles from "../styles/Layout.module.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { t } = useI18n();

  return (
    <div className={styles.page}>
      <header className={styles.nav}>
        <div className={styles.logoArea}>
          <span className={styles.logoDot} />
          <span className={styles.brand}>{t("brand")}</span>
        </div>

        <nav className={styles.menu}>
          <Link href="/" className={styles.menuLink}>
            {t("navHome")}
          </Link>
          <Link href="/article_mitoma-2024-25/" className={styles.menuLink}>
            {t("navArticles")}
          </Link>
          <a
            href="https://github.com/tk0624/football_analytics/issues"
            target="_blank"
            rel="noreferrer"
            className={styles.menuLink}
          >
            {t("navContact")}
          </a>
        </nav>

        <div className={styles.langArea}><LanguageSwitch /></div>
      </header>

      <main className={styles.mainContent}>{children}</main>
    </div>
  );
}