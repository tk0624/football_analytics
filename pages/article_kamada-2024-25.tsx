// pages/article_kamada-2024-25.tsx
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import styles from "../styles/Article.module.css";
import { useI18n } from "../contexts/I18n";
import { kamada2425, pickText, renderLines } from "../content/articles/kamada_2425";

export default function KamadaArticle() {
  const { lang } = useI18n();
  const { basePath } = useRouter();

  return (
    <Layout>
      <article className={styles.article}>
        <h1 className={styles.title}>{pickText(kamada2425.title, lang)}</h1>

        <p className={styles.lead}>
          {renderLines(pickText(kamada2425.lead, lang)).map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
        </p>

        {kamada2425.blocks.map((b, idx) => {
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
