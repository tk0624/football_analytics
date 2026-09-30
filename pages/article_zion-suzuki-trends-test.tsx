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

  const dateStart = new Date("2026-06-30T00:00:00Z");
  const dateEnd = new Date("2026-09-30T00:00:00Z");
  const totalDays = (dateEnd.getTime() - dateStart.getTime()) / (1000 * 60 * 60 * 24);

  const eventWindows = [
    {
      label: "World Cup period",
      start: "2026-06-30",
      end: "2026-07-15",
      color: "#7ed957",
      note: "tournament window / international attention",
    },
    {
      label: "Aston Villa decision",
      start: "2026-08-15",
      end: "2026-08-31",
      color: "#ff914d",
      note: "club move buzz / transfer timing",
    },
    {
      label: "Match appearances",
      start: "2026-09-01",
      end: "2026-09-30",
      color: "#7cc8ff",
      note: "on-pitch minutes / match-day traction",
    },
  ].map((item) => {
    const startDate = new Date(`${item.start}T00:00:00Z`);
    const endDate = new Date(`${item.end}T00:00:00Z`);
    const startOffset = ((startDate.getTime() - dateStart.getTime()) / (1000 * 60 * 60 * 24)) / totalDays;
    const endOffset = ((endDate.getTime() - dateStart.getTime()) / (1000 * 60 * 60 * 24)) / totalDays;
    return {
      ...item,
      left: `${Math.max(0, startOffset * 100)}%`,
      width: `${Math.max(8, (endOffset - startOffset) * 100)}%`,
    };
  });

  return (
    <Layout>
      <article style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 20px 80px" }}>
        <h1 style={{ fontSize: "2.2rem", marginBottom: 12 }}>Zion Suzuki: attention spike check</h1>

        <p style={{ color: "#d9d9d9", lineHeight: 1.8, marginBottom: 20 }}>
          This is a lightweight PoC to test whether search interest rises around major events.
          The key question is whether the attention curve lines up with notable moments such as the World Cup cycle,
          the Aston Villa move, and match appearances.
        </p>

        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: "1.5rem", marginBottom: 14 }}>Key event windows</h2>

          <div style={{ border: "1px solid #2a2a2a", borderRadius: 12, background: "#141414", padding: 16 }}>
            <div style={{ position: "relative", height: 110, marginBottom: 18 }}>
              <div style={{ position: "absolute", left: 0, right: 0, top: 48, height: 2, background: "#2d2d2d" }} />
              <div style={{ position: "absolute", left: 0, right: 0, top: 38, display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 12, color: "#9a9a9a" }}>
                <span>2026-06-30</span>
                <span>2026-09-30</span>
              </div>

              {eventWindows.map((event) => (
                <div
                  key={event.label}
                  style={{
                    position: "absolute",
                    left: event.left,
                    top: 20,
                    width: event.width,
                    minWidth: 120,
                    height: 52,
                    borderRadius: 10,
                    background: `${event.color}22`,
                    border: `1px solid ${event.color}`,
                    boxShadow: `inset 0 0 0 1px ${event.color}33`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    color: "#f5f5f5",
                    fontWeight: 700,
                    fontSize: 12,
                    padding: 8,
                    boxSizing: "border-box",
                  }}
                >
                  <div>
                    <div>{event.label}</div>
                    <div style={{ fontSize: 10, opacity: 0.8, marginTop: 4 }}>{event.note}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

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
