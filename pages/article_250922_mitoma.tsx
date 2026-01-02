// pages\article_250922_mitoma.tsx
import Layout from "../components/Layout";
import styles from "../styles/Article.module.css";
import { useI18n } from "../contexts/I18n";
import { mitoma2425, pickText, renderLines } from "../content/articles/mitoma_2425";

export default function MitomaArticle() {
  const { lang } = useI18n();

  return (
    <Layout>
      <article className={styles.article}>
        <h1 className={styles.title}>{pickText(mitoma2425.title, lang)}</h1>

        <p className={styles.lead}>
          {renderLines(pickText(mitoma2425.lead, lang)).map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
        </p>

        {mitoma2425.blocks.map((b, idx) => {
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
            return (
              <div key={idx} className={styles.imageWrapper}>
                <img
                  src={b.src}
                  alt={pickText(b.alt, lang)}
                  className={styles.image}
                />
                {b.caption ? (
                  <p className={styles.caption}>
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