// contexts/I18n.tsx
import { createContext, useContext, useEffect, useMemo, useState } from "react";

type Lang = "ja" | "en";
type Dict = Record<string, { ja: string; en: string }>;

const I18nContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: keyof typeof dictionary) => string;
}>({
  lang: "ja",
  setLang: () => {},
  t: () => "",
});

// 必要に応じて増やしてください
const dictionary: Dict = {
  // 共通
  brand: { ja: "Samurai Metrics", en: "Samurai Metrics" },
  navHome: { ja: "ホーム", en: "Home" },
  navArticles: { ja: "記事", en: "Articles" },
  navContact: { ja: "問い合わせ", en: "Contact" },

  // トップページ
  homeTitle: { ja: "Samurai Metrics", en: "Samurai Metrics" },
  homeLead: {
    ja: "海外で活躍する日本人サッカー選手の、見えにくい貢献をデータで捉える。",
    en: "Examining the less visible contributions of Japanese players overseas."
  },

  // 記事CTA
  ctaReadMitoma: {
    ja: "三苫 24-25 シーズン分析を読む",
    en: "Read Mitoma 2024/25 Analysis"
  },

  ctaReadArticle2: {
    ja: "記事2",
    en: "Article2"
  },
};

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ja");

  // localStorage と同期（静的ホスティング想定でSSRなし）
  useEffect(() => {
    const saved = typeof window !== "undefined" ? window.localStorage.getItem("lang") : null;
    if (saved === "ja" || saved === "en") setLangState(saved);
  }, []);
  const setLang = (l: Lang) => {
    setLangState(l);
    try { window.localStorage.setItem("lang", l); } catch {}
  };

  const t = useMemo(() => {
    return (key: keyof typeof dictionary) => dictionary[key]?.[lang] ?? "";
  }, [lang]);

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}