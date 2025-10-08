// components/Layout.tsx
import Link from "next/link";
import { useI18n } from "../contexts/I18n";
import LanguageSwitch from "./LanguageSwitch";
import styles from "../styles/Layout.module.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { t } = useI18n();

  return (
    <div className={styles.page}>
      {/* ✅ 言語切替を最上部に移動＆中央寄せ */}
      <div className={styles.langSwitchTop}>
        <LanguageSwitch />
      </div>

      <header className={styles.nav}>
        <div className={styles.logoArea}>
          <span className={styles.logoDot} />
          <span className={styles.brand}>{t("brand")}</span>
        </div>

        <nav className={styles.menu}>
          <Link href="/" className={styles.menuLink}>
            {t("navHome")}
          </Link>
          <Link href="/article_250922_mitoma/" className={styles.menuLink}>
            {t("navArticles")}
          </Link>
          <a href="/contact.html" className={styles.menuLink}>
            {t("navContact")}
          </a>
        </nav>
      </header>

      {/* ✅ main に中央寄せ・最大幅を設定 */}
      <main className={styles.mainContent}>{children}</main>
    </div>
  );
}