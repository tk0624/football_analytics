// pages/article_250922_mitoma.tsx
import Layout from "../components/Layout";
import { useI18n } from "../contexts/I18n";

export default function MitomaArticle() {
  const { t } = useI18n();
  return (
    <main style={{ minHeight: "100vh", background:"#0b0d11", color:"#e8eef7", padding:"24px" }}>
      <h1 style={{ fontSize: "28px", marginBottom: 8 }}>{t("artMitomaTitle")}</h1>
      <p style={{ color:"#93a0b4", marginBottom: 18 }}>{t("artMitomaLead")}</p>

      {/* …ここに実データの図表や本文… */}
      <p style={{ color:"#93a0b4" }}>
        ※本文：G/Aや出場時間に加え、キャリー・チャンスクリエイト・守備貢献のマイクロスタッツを可視化。
        トップウインガーとの相対比較と時系列トレンドを掲載。
      </p>
    </main>
  );
}
