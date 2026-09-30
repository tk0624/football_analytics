import Layout from "../components/Layout";

const trendSeries = [
  { label: "2025-09", value: 12 },
  { label: "2025-10", value: 17 },
  { label: "2025-11", value: 23 },
  { label: "2025-12", value: 18 },
  { label: "2026-01", value: 14 },
  { label: "2026-02", value: 19 },
  { label: "2026-03", value: 27 },
  { label: "2026-04", value: 24 },
  { label: "2026-05", value: 31 },
  { label: "2026-06", value: 43 },
  { label: "2026-07", value: 60 },
  { label: "2026-08", value: 78 },
  { label: "2026-09", value: 92 },
];

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
];

const chartWidth = 760;
const chartHeight = 220;
const chartPadding = 30;
const maxValue = Math.max(...trendSeries.map((item) => item.value), 100);
const chartPoints = trendSeries
  .map((item, index) => {
    const x = chartPadding + (index / (trendSeries.length - 1)) * (chartWidth - chartPadding * 2);
    const y = chartHeight - chartPadding - (item.value / maxValue) * (chartHeight - chartPadding * 2);
    return `${x},${y}`;
  })
  .join(" ");

const eventMarkerPositions = eventWindows.map((event) => {
  const startDate = new Date(`${event.start}T00:00:00Z`);
  const endDate = new Date(`${event.end}T00:00:00Z`);
  const seriesStart = new Date(`${trendSeries[0].label}-01T00:00:00Z`);
  const seriesEnd = new Date(`${trendSeries[trendSeries.length - 1].label}-01T00:00:00Z`);
  const total = (seriesEnd.getTime() - seriesStart.getTime()) / (1000 * 60 * 60 * 24 * 30);
  const startOffset = ((startDate.getTime() - seriesStart.getTime()) / (1000 * 60 * 60 * 24 * 30)) / total;
  const endOffset = ((endDate.getTime() - seriesStart.getTime()) / (1000 * 60 * 60 * 24 * 30)) / total;
  return {
    ...event,
    left: `${Math.max(0, Math.min(100, startOffset * 100))}%`,
    width: `${Math.max(8, Math.min(100, (endOffset - startOffset) * 100))}%`,
  };
});

export default function ZionSuzukiTrendsTestPage() {
  return (
    <Layout>
      <article style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 20px 80px" }}>
        <h1 style={{ fontSize: "2.2rem", marginBottom: 12 }}>Zion Suzuki: attention spike check</h1>

        <p style={{ color: "#d9d9d9", lineHeight: 1.8, marginBottom: 20 }}>
          This is a lightweight PoC to test whether search interest rises around major events.
          The comparison against Kolo Touré helps assess whether Zion’s spikes behave like a similarly discussed defensive profile,
          or whether the surge is more tied to World Cup timing, transfer buzz, or match-day moments.
        </p>

        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: "1.5rem", marginBottom: 14 }}>Key event windows</h2>

          <div style={{ border: "1px solid #2a2a2a", borderRadius: 12, background: "#141414", padding: 16 }}>
            <div style={{ display: "grid", gap: 12 }}>
              {eventWindows.map((event) => (
                <div
                  key={event.label}
                  style={{
                    borderRadius: 10,
                    background: `${event.color}22`,
                    border: `1px solid ${event.color}`,
                    boxShadow: `inset 0 0 0 1px ${event.color}33`,
                    color: "#f5f5f5",
                    padding: 12,
                    boxSizing: "border-box",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
                    <div style={{ fontWeight: 700, fontSize: 13 }}>{event.label}</div>
                    <div style={{ fontSize: 11, color: "#d9d9d9" }}>{event.start} — {event.end}</div>
                  </div>
                  <div style={{ fontSize: 11, opacity: 0.8, marginTop: 6 }}>{event.note}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", marginBottom: 12 }}>Interest trend</h2>
          <div
            style={{
              border: "1px solid #333",
              borderRadius: 12,
              background: "#141414",
              padding: 12,
              overflow: "hidden",
            }}
          >
            <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} width="100%" height="220" role="img" aria-label="Zion Suzuki attention trend chart">
              {[0, 25, 50, 75, 100].map((tick) => {
                const y = chartHeight - chartPadding - (tick / 100) * (chartHeight - chartPadding * 2);
                return (
                  <g key={tick}>
                    <line x1={chartPadding} x2={chartWidth - chartPadding} y1={y} y2={y} stroke="#2d2d2d" strokeDasharray="4 6" />
                    <text x={8} y={y + 4} fill="#9a9a9a" fontSize="10">{tick}</text>
                  </g>
                );
              })}

              {eventMarkerPositions.map((event) => (
                <g key={event.label}>
                  <rect
                    x={(chartWidth - chartPadding * 2) * ((parseFloat(event.left) / 100)) + chartPadding}
                    y={chartPadding / 2}
                    width={(chartWidth - chartPadding * 2) * (parseFloat(event.width) / 100)}
                    height={chartHeight - chartPadding}
                    fill={event.color}
                    opacity={0.12}
                  />
                </g>
              ))}

              <polyline
                fill="none"
                stroke="#7ed957"
                strokeWidth="3"
                strokeLinejoin="round"
                strokeLinecap="round"
                points={chartPoints}
              />

              {trendSeries.map((item, index) => {
                const x = chartPadding + (index / (trendSeries.length - 1)) * (chartWidth - chartPadding * 2);
                const y = chartHeight - chartPadding - (item.value / maxValue) * (chartHeight - chartPadding * 2);
                return (
                  <g key={item.label}>
                    <circle cx={x} cy={y} r={4} fill="#7ed957" />
                    <text x={x} y={chartHeight - 4} textAnchor="middle" fill="#9a9a9a" fontSize="10">
                      {item.label.replace("2026-", "")}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", marginBottom: 12 }}>Regional interest</h2>
          <div
            style={{
              border: "1px solid #333",
              borderRadius: 12,
              background: "#141414",
              padding: 16,
              color: "#d9d9d9",
              lineHeight: 1.8,
            }}
          >
            Japan remains the dominant region in this synthetic attention check, while the strongest spikes are concentrated around major events rather than steady baseline growth.
            The score is best interpreted as a timing signal, not a direct fan-reception metric.
          </div>
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
