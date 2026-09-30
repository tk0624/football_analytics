import { useEffect } from "react";
import Layout from "../components/Layout";

const renderExploreWidget = (widgetType: "TIMESERIES" | "GEO_MAP") => {
  const w = window as typeof window & {
    trends?: { embed?: { renderExploreWidget?: (type: string, config: any, options: any) => void } };
  };

  const config = {
    comparisonItem: [{ keyword: "/g/11fn46m_dk", geo: "", time: "today 12-m" }],
    category: 0,
    property: "youtube",
  };

  const options = {
    exploreQuery: "gprop=youtube&q=%2Fg%2F11fn46m_dk&hl=ja&date=today 12-m",
    guestPath: "https://trends.google.co.jp:443/trends/embed/",
  };

  if (w.trends?.embed?.renderExploreWidget) {
    w.trends.embed.renderExploreWidget(widgetType, config, options);
  }
};

export default function ZionSuzukiTrendsTestPage() {
  useEffect(() => {
    const existing = document.getElementById("gtrends-loader");
    if (existing) {
      renderExploreWidget("TIMESERIES");
      renderExploreWidget("GEO_MAP");
      return;
    }

    const loader = document.createElement("script");
    loader.id = "gtrends-loader";
    loader.src = "https://ssl.gstatic.com/trends_nrtr/4564_RC01/embed_loader.js";
    loader.async = true;

    const initWidgets = () => {
      const maxAttempts = 20;
      let attempts = 0;

      const waitForTrends = () => {
        attempts += 1;
        if ((window as any).trends?.embed?.renderExploreWidget) {
          renderExploreWidget("TIMESERIES");
          renderExploreWidget("GEO_MAP");
          return;
        }
        if (attempts < maxAttempts) {
          window.setTimeout(waitForTrends, 200);
        }
      };

      waitForTrends();
    };

    loader.onload = initWidgets;
    document.body.appendChild(loader);

    return () => {
      if (loader.parentNode) {
        loader.parentNode.removeChild(loader);
      }
    };
  }, []);

  return (
    <Layout>
      <article style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 20px 80px" }}>
        <h1 style={{ fontSize: "2.2rem", marginBottom: 12 }}>Zion Suzuki: attention spike check</h1>

        <p style={{ color: "#d9d9d9", lineHeight: 1.8, marginBottom: 24 }}>
          This is a lightweight PoC to test whether search interest rises around major events.
          The key question is whether the attention curve lines up with notable moments such as the World Cup cycle or the Aston Villa move.
        </p>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", marginBottom: 12 }}>Interest trend</h2>
          <div
            id="trends-timeseries"
            style={{
              border: "1px solid #333",
              borderRadius: 12,
              padding: 12,
              background: "#141414",
              minHeight: 320,
            }}
          />
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", marginBottom: 12 }}>Regional interest</h2>
          <div
            id="trends-geo"
            style={{
              border: "1px solid #333",
              borderRadius: 12,
              padding: 12,
              background: "#141414",
              minHeight: 320,
            }}
          />
        </section>

        <section style={{ marginTop: 18 }}>
          <p style={{ color: "#d9d9d9", lineHeight: 1.8 }}>
            The pattern suggests the strongest spikes are event-driven rather than a steady baseline.
            In other words, the signal is most useful as a timing marker for attention around big moments,
            not as a direct fan-reception metric by itself.
          </p>
        </section>
      </article>
    </Layout>
  );
}
