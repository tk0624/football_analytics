// components/LanguageSwitch.tsx
import { useI18n } from "../contexts/I18n";
import styles from "../styles/LanguageSwitch.module.css";

export default function LanguageSwitch() {
  const { lang, setLang } = useI18n();
  return (
    <div className={styles.wrap}>
      <button
        className={`${styles.btn} ${lang === "ja" ? styles.active : ""}`}
        onClick={() => setLang("ja")}
        aria-pressed={lang === "ja"}
      >
        日本語
      </button>
      <button
        className={`${styles.btn} ${lang === "en" ? styles.active : ""}`}
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
    </div>
  );
}
