// pages/article_japan-squad-2026.tsx
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import styles from "../styles/Article.module.css";
import { useI18n } from "../contexts/I18n";
import { japanSquad2026, pickText, renderLines } from "../content/articles/japan_squad_2026";
import PlotlyChart from "../components/PlotlyChart";

import squadBarGkJson from "../public/charts/squad_bar_gk.json";
import squadBarDfJson from "../public/charts/squad_bar_df.json";
import squadBarMfJson from "../public/charts/squad_bar_mf.json";
import squadBarFwJson from "../public/charts/squad_bar_fw.json";
import squadScatterJson from "../public/charts/squad_scatter.json";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const chartMap: Record<string, { data: any[]; layout: any }> = {
  squad_bar_gk:  squadBarGkJson  as { data: any[]; layout: any },
  squad_bar_df:  squadBarDfJson  as { data: any[]; layout: any },
  squad_bar_mf:  squadBarMfJson  as { data: any[]; layout: any },
  squad_bar_fw:  squadBarFwJson  as { data: any[]; layout: any },
  squad_scatter: squadScatterJson as { data: any[]; layout: any },
};

export default function JapanSquad2026Article() {
  const { lang } = useI18n();
  const { basePath } = useRouter();

  return (
    <Layout>
      <article className={styles.article}>
        <h1 className={styles.title}>{pickText(japanSquad2026.title, lang)}</h1>

        <p className={styles.lead}>
          {renderLines(pickText(japanSquad2026.lead, lang)).map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
        </p>

        {japanSquad2026.blocks.map((b, idx) => {
          if (b.type === "h2") {
            return (
              <section key={idx} className={styles.section}>
                <h2>{pickText(b.text, lang)}</h2>
              </section>
            );
          }

          if (b.type === "p") {
            return (
              <p key={idx} className={styles.body}>
                {renderLines(pickText(b.text, lang)).map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
            );
          }

          if (b.type === "chart") {
            const chart = chartMap[b.chartKey];
            if (!chart) return null;
            return (
              <PlotlyChart
                key={idx}
                data={chart.data}
                layout={chart.layout}
                caption={b.caption ? pickText(b.caption, lang) : undefined}
                lang={lang}
              />
            );
          }

          if (b.type === "image") {
            const imgSrc = b.src.startsWith("/") ? `${basePath}${b.src}` : b.src;
            return (
              <div key={idx} className={styles.imageWrapper}>
                <img
                  src={imgSrc}
                  alt={pickText(b.alt, lang)}
                  className={styles.image}
                />
                {b.caption ? (
                  <p className={styles.imageCaption}>
                    {renderLines(pickText(b.caption, lang)).map((line, i) => (
                      <span key={i}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </p>
                ) : null}
              </div>
            );
          }

          return null;
        })}
      </article>
    </Layout>
  );
}
