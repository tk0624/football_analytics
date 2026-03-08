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
    ja: "海外で活躍する日本人選手の貢献をデータで見える化",
    en: "Visualising the contributions of Japanese players competing abroad."
  },

  // 記事一覧セクション
  sectionArticles: { ja: "分析記事", en: "Analysis" },

  // 三苫記事カード
  cardMitomaTag:   { ja: "24/25 シーズン分析", en: "2024/25 Season Analysis" },
  cardMitomaTitle: { ja: "三苫薫", en: "Kaoru Mitoma" },
  cardMitomaTeam:  { ja: "ブライトン", en: "Brighton" },
  cardMitomaDesc:  {
    ja: "代名詞であるドリブル以外の貢献は？",
    en: "What does Mitoma offer beyond his trademark dribbling?"
  },
  cardMitomaRead:  { ja: "分析を読む", en: "Read analysis" },

  // 鎌田記事カード
  cardKamadaTag:   { ja: "25/26 シーズン中分析", en: "2025/26 Mid-Season Analysis" },
  cardKamadaTitle: { ja: "鎌田大地", en: "Daichi Kamada" },
  cardKamadaTeam:  { ja: "クリスタルパレス", en: "Crystal Palace" },
  cardKamadaDesc:  {
    ja: "月間MVPにも選ばれた貢献度は読み取れるのか？",
    en: "Can data capture the contribution that earned him Player of the Month?"
  },
  cardKamadaRead:  { ja: "分析を読む", en: "Read analysis" },

  // 冨安記事カード
  cardTomiyasuTag:   { ja: "21/22 シーズン分析", en: "2021/22 Season Analysis" },
  cardTomiyasuTitle: { ja: "冨安健洋", en: "Takehiro Tomiyasu" },
  cardTomiyasuTeam:  { ja: "アーセナル", en: "Arsenal" },
  cardTomiyasuDesc:  {
    ja: "SBのデータが示すCBとしての真価",
    en: "CB quality revealed through SB data"
  },
  cardTomiyasuRead:  { ja: "分析を読む", en: "Read analysis" },
  cardWipBadge:      { ja: "作成中", en: "In progress" },
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