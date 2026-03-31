// pages/article_japan-squad-2026.tsx
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import styles from "../styles/Article.module.css";
import { useI18n } from "../contexts/I18n";
import { japanSquad2026, pickText, renderLines } from "../content/articles/japan_squad_2026";
import PlotlyChart from "../components/PlotlyChart";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const chartMap: Record<string, { data: any[]; layout: any }> = {
  // Charts will be added here when JSON files are generated
  // e.g. table_squad_all: tableSquadAllJson as { data: any[]; layout: any },
  // e.g. scatter_squad_pos: scatterSquadPosJson as { data: any[]; layout: any },
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
