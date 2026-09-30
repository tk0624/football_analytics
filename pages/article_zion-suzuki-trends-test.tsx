import Layout from "../components/Layout";

export default function ZionSuzukiTrendsTestPage() {
  return (
    <Layout>
      <article style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 20px 80px" }}>
        <h1 style={{ fontSize: "2.2rem", marginBottom: 12 }}>Zion Suzuki Trends Test</h1>

        <p style={{ color: "#d9d9d9", lineHeight: 1.8, marginBottom: 24 }}>
          これは Google Trends の埋め込み動作確認用のテスト記事です。
          ここでは「注目度の推移」と「地域別の関心度」を確認できるように、埋め込みウィジェットを配置しています。
          現時点では、現地ファン評価そのものではなく、オンライン関心の変化を見るための可視化として扱います。
        </p>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", marginBottom: 12 }}>注目度の推移</h2>
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
          <h2 style={{ fontSize: "1.5rem", marginBottom: 12 }}>地域別の関心度</h2>
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
            <li>これはライブ表示の確認用ページであり、長期比較の定量分析そのものではありません。</li>
            <li>現地ファンからの評価を直接測るには、X / Reddit / News を別途補う必要があります。</li>
            <li>次の段階では、トピックの変化と評価軸を別の可視化で見せる想定です。</li>
          </ul>
        </section>
      </article>
    </Layout>
  );
}
