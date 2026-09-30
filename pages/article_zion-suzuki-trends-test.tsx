import Layout from "../components/Layout";

const themeBubbles = [
  { label: "Passing quality", note: "Xavi / Iniesta comparison", size: 180, color: "#7ed957" },
  { label: "Personality", note: "deserves more credit", size: 150, color: "#ff914d" },
  { label: "Potential", note: "elite traits", size: 140, color: "#7cc8ff" },
  { label: "National team recognition", note: "team Japan / keeper", size: 130, color: "#b18cff" },
  { label: "Club hype", note: "match-day buzz", size: 120, color: "#ffd166" },
];

export default function ZionSuzukiTrendsTestPage() {
  return (
    <Layout>
      <article style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 20px 80px" }}>
        <h1 style={{ fontSize: "2.2rem", marginBottom: 12 }}>Zion Suzuki Trends Test</h1>

        <p style={{ color: "#d9d9d9", lineHeight: 1.8, marginBottom: 24 }}>
          これは Google Trends を使った「注目度の見え方」を確認するテスト記事です。
          現時点では、現地ファン評価そのものを定量化するより、
          どの時期に関心が上がったか、そして何が評価されているかを見える化するためのPoCとして扱っています。
        </p>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", marginBottom: 12 }}>1. 注目度の推移</h2>
          <p style={{ color: "#d9d9d9", lineHeight: 1.8, marginBottom: 16 }}>
            取得できた時系列データでは、特に <strong style={{ color: "#7ed957" }}>2026-06-30</strong> に最大のピークがあり、
            その後も <strong style={{ color: "#ff914d" }}>2026-08-15〜16</strong> と <strong style={{ color: "#ff914d" }}>2026-08-31</strong> 周辺で再び上昇が確認されます。
            これは、イベントや話題の発生時に注目が一気に増えるパターンを示しており、
            いわゆる「話題のピーク」を可視化できる指標として使えます。
          </p>
          <div style={{ border: "1px solid #333", borderRadius: 12, padding: 12, background: "#141414" }}>
            <script type="text/javascript" src="https://ssl.gstatic.com/trends_nrtr/4564_RC01/embed_loader.js" />
            <script
              type="text/javascript"
              dangerouslySetInnerHTML={{
                __html: `
                  trends.embed.renderExploreWidget(
                    "TIMESERIES",
                    {
                      "comparisonItem":[{"keyword":"/g/11fn46m_dk","geo":"","time":"today 12-m"}],
                      "category":0,
                      "property":"youtube"
                    },
                    {
                      "exploreQuery":"gprop=youtube&q=%2Fg%2F11fn46m_dk&hl=ja&date=today 12-m",
                      "guestPath":"https://trends.google.co.jp:443/trends/embed/"
                    }
                  );
                `,
              }}
            />
          </div>
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", marginBottom: 12 }}>2. 現地の評価指標は、今の情報だけでは直接定量化しにくい</h2>
          <div style={{ border: "1px solid #2a2a2a", borderRadius: 12, padding: 20, background: "#171717" }}>
            <p style={{ color: "#d9d9d9", lineHeight: 1.8, margin: 0 }}>
              現時点のデータでは、Google Trends は「関心の強さ」を示せますが、
              「現地ファンからの評価」はそのまま測るのが難しいです。
              その理由は、今の情報が主に検索ボリュームと断片的なコメントに偏っており、
              評価の軸が定量的にそろっていないためです。
            </p>
            <p style={{ color: "#d9d9d9", lineHeight: 1.8, margin: "16px 0 0" }}>
              そのため、実務的には <strong style={{ color: "#7ed957" }}>Google Trends + Reddit / News の評価軸抽出</strong> を組み合わせて、
              「注目度」と「評価の中身」を分けて見るアプローチが適切です。
            </p>
          </div>
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", marginBottom: 12 }}>3. どの点が評価されているか</h2>
          <p style={{ color: "#d9d9d9", lineHeight: 1.8, marginBottom: 20 }}>
            Reddit やニュースの文脈では、<strong style={{ color: "#7ed957" }}>passing quality</strong>、
            <strong style={{ color: "#ff914d" }}>personality</strong>、
            <strong style={{ color: "#7cc8ff" }}>potential</strong> などが評価テーマとして繰り返し出ています。
            ここは「量そのもの」よりも、「何が評価されているか」を見せるバブル可視化に向いています。
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              gap: 18,
              padding: "12px 0 8px",
            }}
          >
            {themeBubbles.map((bubble) => (
              <div
                key={bubble.label}
                style={{
                  width: bubble.size,
                  height: bubble.size,
                  borderRadius: "50%",
                  background: bubble.color,
                  color: "#111111",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  padding: 12,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
                  fontWeight: 700,
                  fontSize: bubble.size > 150 ? 15 : 12,
                  lineHeight: 1.3,
                  position: "relative",
                }}
              >
                <div>
                  <div>{bubble.label}</div>
                  <div style={{ fontSize: 11, opacity: 0.8, marginTop: 4 }}>{bubble.note}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", marginBottom: 12 }}>4. 地域別の関心度</h2>
          <div style={{ border: "1px solid #333", borderRadius: 12, padding: 12, background: "#141414" }}>
            <script type="text/javascript" src="https://ssl.gstatic.com/trends_nrtr/4564_RC01/embed_loader.js" />
            <script
              type="text/javascript"
              dangerouslySetInnerHTML={{
                __html: `
                  trends.embed.renderExploreWidget(
                    "GEO_MAP",
                    {
                      "comparisonItem":[{"keyword":"/g/11fn46m_dk","geo":"","time":"today 12-m"}],
                      "category":0,
                      "property":"youtube"
                    },
                    {
                      "exploreQuery":"gprop=youtube&q=%2Fg%2F11fn46m_dk&hl=ja&date=today 12-m",
                      "guestPath":"https://trends.google.co.jp:443/trends/embed/"
                    }
                  );
                `,
              }}
            />
          </div>
        </section>

        <section style={{ marginTop: 32, paddingTop: 24, borderTop: "1px solid #2a2a2a" }}>
          <h3 style={{ fontSize: "1.2rem", marginBottom: 12 }}>補足</h3>
          <ul style={{ color: "#d9d9d9", lineHeight: 1.8, paddingLeft: 20 }}>
            <li>注目度は時系列で見ると、どの時期にピークが来たかを把握しやすいです。</li>
            <li>一方で、現地評価の定量化には今の段階では Reddit / News の文脈解釈が必要です。</li>
            <li>次の改善では、テーマ別のバブルと注目度の時系列をセットで見せることで、分析の説得力を高められます。</li>
          </ul>
        </section>
      </article>
    </Layout>
  );
}
