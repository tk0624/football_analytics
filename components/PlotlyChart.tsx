// components/PlotlyChart.tsx
import dynamic from "next/dynamic";
import { useState, useMemo, useCallback } from "react";
import styles from "../styles/Article.module.css";

const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

// ── デフォルト表示スタッツ（14項目）───────────────────────────────
const DEFAULT_METRICS = new Set([
  // 攻撃
  "Goals_Per90",
  "xG_Per90",
  "BigChancesMissed_Per90",
  "Assists_Per90",
  "xA_Per90",
  "BigChancesCreated_Per90",
  // パス・ドリブル
  "LongBalls_pg_Per90",
  "Crosses_pg_Per90",
  "SuccDribbles_pg_Per90",
  // 守備
  "PossessionLost_Per90",
  "Interceptions_Per90",
  "Tackles_Per90",
  // デュエル
  "GroundWin_pct",
  "AerialWin_pct",
]);

// ── 色パレット: index 0 = 主役選手（骮色）、以降は比較選手───────────────
const PLAYER_COLORS = [
  "#F5C842", // 黄金（主役）
  "#60AFFF", // スカイブルー
  "#FF7B7B", // コーラルレッド
  "#6EE6A0", // ミントグリーン
  "#FFB347", // オレンジ
  "#C77DFF", // ラベンダー
  "#4DD9E8", // トール
  "#FF9FBF", // ピンク
  "#B8E04A", // 黄緑
];

// ── メトリクス名の日英ラベルマップ ──────────────────────────────────
const LABEL_MAP: Record<string, { ja: string; en: string }> = {
  Goals_Per90:              { ja: "ゴール /90",         en: "Goals /90" },
  xG_Per90:                 { ja: "xG /90",             en: "xG /90" },
  BigChancesMissed_Per90:   { ja: "決機逸 /90",         en: "BC Missed /90" },
  Assists_Per90:            { ja: "アシスト /90",       en: "Assists /90" },
  xA_Per90:                 { ja: "xA /90",             en: "xA /90" },
  BigChancesCreated_Per90:  { ja: "決機創出 /90",       en: "BC Created /90" },
  Yellow_Per90:             { ja: "黄紙 /90",           en: "Yellow /90" },
  YellowRed_Per90:          { ja: "2枚目黄 /90",        en: "2nd Yellow /90" },
  Red_Per90:                { ja: "赤紙 /90",           en: "Red /90" },
  LongBalls_pg_Per90:       { ja: "ロングボール /90",   en: "Long Balls /90" },
  Crosses_pg_Per90:         { ja: "クロス /90",         en: "Crosses /90" },
  Interceptions_Per90:      { ja: "インターセプト /90", en: "Interceptions /90" },
  Tackles_Per90:            { ja: "タックル /90",       en: "Tackles /90" },
  DribbledPast_Per90:       { ja: "抜かれ /90",         en: "Dribbled Past /90" },
  Clearances_Per90:         { ja: "クリア /90",         en: "Clearances /90" },
  Blocks_Per90:             { ja: "ブロック /90",       en: "Blocks /90" },
  SuccDribbles_pg_Per90:    { ja: "ドリブル成功 /90",   en: "Dribbles /90" },
  GroundDuelsWon_pg_Per90:  { ja: "地上デュエル勝 /90",en: "Ground Duels /90" },
  AerialDuelsWon_pg_Per90:  { ja: "空中デュエル勝 /90",en: "Aerial Duels /90" },
  PossessionLost_Per90:     { ja: "ポゼロス /90",       en: "Poss. Lost /90" },
  Fouls_Per90:              { ja: "ファウル /90",       en: "Fouls /90" },
  WasFouled_Per90:          { ja: "被ファウル /90",     en: "Was Fouled /90" },
  LongBallAcc_pct:          { ja: "ロングB精度%",       en: "Long Ball Acc%" },
  CrossAcc_pct:             { ja: "クロス精度%",        en: "Cross Acc%" },
  SuccDribbles_pct:         { ja: "ドリブル成功率%",   en: "Dribbles %" },
  GroundWin_pct:            { ja: "地上デュエル勝率%",  en: "Ground Win%" },
  AerialWin_pct:            { ja: "空中デュエル勝率%",  en: "Aerial Win%" },
};

const GROUPS = [
  {
    key: "attack",
    label: { ja: "攻撃", en: "Attack" },
    metrics: ["Goals_Per90", "xG_Per90", "BigChancesMissed_Per90", "Assists_Per90", "xA_Per90", "BigChancesCreated_Per90"],
  },
  {
    key: "passing",
    label: { ja: "パス", en: "Passing" },
    metrics: ["LongBalls_pg_Per90", "LongBallAcc_pct", "Crosses_pg_Per90", "CrossAcc_pct"],
  },
  {
    key: "defense",
    label: { ja: "守備", en: "Defense" },
    metrics: ["Interceptions_Per90", "Tackles_Per90", "Clearances_Per90", "Blocks_Per90", "DribbledPast_Per90"],
  },
  {
    key: "duel",
    label: { ja: "デュエル", en: "Duels" },
    metrics: ["GroundDuelsWon_pg_Per90", "AerialDuelsWon_pg_Per90", "GroundWin_pct", "AerialWin_pct", "SuccDribbles_pg_Per90", "SuccDribbles_pct"],
  },
  {
    key: "discipline",
    label: { ja: "規律/その他", en: "Discipline" },
    metrics: ["PossessionLost_Per90", "Fouls_Per90", "WasFouled_Per90", "Yellow_Per90", "YellowRed_Per90", "Red_Per90"],
  },
];

function getLabel(key: string, lang: "ja" | "en"): string {
  return LABEL_MAP[key]?.[lang] ?? key;
}

interface PlotlyChartProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  layout: any;
  caption?: string;
  lang?: "ja" | "en";
  /** 初期表示する選手名。未指定時は全展示 */
  defaultPlayers?: string[];
  /** 初期選択スタッツ。未指定時は DEFAULT_METRICS を使用 */
  defaultMetrics?: string[];
}

export default function PlotlyChart({ data, layout, caption, lang = "ja", defaultPlayers, defaultMetrics }: PlotlyChartProps) {
  const allMetrics: string[] = useMemo(() => {
    const firstTrace = data[0] as { theta?: string[] } | undefined;
    return firstTrace?.theta ?? [];
  }, [data]);

  // デフォルトは defaultMetrics 指定時はその項目、未指定は DEFAULT_METRICS のうちチャートに存在する項目のみ
  const effectiveDefault = useMemo(() => {
    if (defaultMetrics && defaultMetrics.length > 0) {
      return new Set(allMetrics.filter((m) => defaultMetrics.includes(m)));
    }
    return new Set(allMetrics.filter((m) => DEFAULT_METRICS.has(m)));
  }, [allMetrics, defaultMetrics]);

  const [selected, setSelected] = useState<Set<string>>(() => effectiveDefault);
  const [panelOpen, setPanelOpen] = useState(false);

  // defaultPlayers の未指定時は全展示、指定時はそれ以外を非表示
  const [hiddenPlayers, setHiddenPlayers] = useState<Set<string>>(() => {
    if (!defaultPlayers || defaultPlayers.length === 0) return new Set<string>();
    const dp = new Set(defaultPlayers);
    const allPlayers: string[] = data.map((t: { name?: string }) => t.name ?? "").filter(Boolean);
    return new Set(allPlayers.filter((p) => !dp.has(p)));
  });

  const filteredData = useMemo(() => {
    // defaultPlayers を先頭に並べ替えて色を順番に割り当て
    const dp = new Set(defaultPlayers ?? []);
    const sorted = [
      ...data.filter((t) => dp.has(t.name)),
      ...data.filter((t) => !dp.has(t.name)),
    ];
    return sorted.map((trace, colorIdx) => {
      const theta: string[] = trace.theta ?? [];
      const r: number[] = trace.r ?? [];
      const indices = theta.reduce<number[]>((acc, m, i) => {
        if (selected.has(m)) acc.push(i);
        return acc;
      }, []);
      const color = PLAYER_COLORS[colorIdx % PLAYER_COLORS.length];
      return {
        ...trace,
        theta: indices.map((i) => theta[i]),
        r: indices.map((i) => r[i]),
        line: { ...(trace.line ?? {}), color },
        marker: { ...(trace.marker ?? {}), color },
        // プレイヤー選択状態を維持
        visible: hiddenPlayers.has(trace.name) ? "legendonly" : true,
      };
    });
  }, [data, selected, hiddenPlayers, defaultPlayers]);

  // 凡例クリックでプレイヤー表示切替（メトリクス変更時も維持）
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleLegendClick = useCallback((e: any) => {
    const name: string | undefined = e?.data?.[e.curveNumber]?.name;
    if (!name) return undefined;
    setHiddenPlayers((prev) => {
      const next = new Set(prev);
      next.has(name) ? next.delete(name) : next.add(name);
      return next;
    });
    return false; // Plotlyデフォルト動作をキャンセル
  }, []);

  // 凡例ダブルクリック：そのプレイヤーだけ表示
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleLegendDoubleClick = useCallback((e: any) => {
    const name: string | undefined = e?.data?.[e.curveNumber]?.name;
    if (!name) return undefined;
    const allPlayers: string[] = data.map((t) => t.name);
    setHiddenPlayers((prev) => {
      const isIsolated = prev.size === allPlayers.length - 1 && !prev.has(name);
      if (isIsolated) return new Set(); // 全員表示に戻す
      return new Set(allPlayers.filter((p) => p !== name));
    });
    return false;
  }, [data]);

  const toggle = (m: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(m) ? next.delete(m) : next.add(m);
      return next;
    });
  };

  const toggleGroup = (metrics: string[], toOn: boolean) => {
    setSelected((prev) => {
      const next = new Set(prev);
      metrics.forEach((m) => (toOn ? next.add(m) : next.delete(m)));
      return next;
    });
  };

  const selectAll = () => setSelected(new Set(allMetrics));
  const clearAll = () => setSelected(new Set());
  const resetDefault = () => setSelected(new Set(effectiveDefault));

  const mergedLayout = {
    ...layout,
    autosize: true,
    paper_bgcolor: "transparent",
    plot_bgcolor: "transparent",
    // ズーム・回転を禁止
    dragmode: false as const,
    // ラベルが切れないよう polar angularaxis フォントを小さめに
    polar: {
      ...((layout as any).polar ?? {}),
      angularaxis: {
        ...(((layout as any).polar as any)?.angularaxis ?? {}),
        tickfont: { size: 8 },
      },
    },
    // 凡例をチャート下部に横並び配置 → スマホでも重ならない
    legend: {
      ...(layout.legend ?? {}),
      orientation: "h" as const,
      x: 0.5,
      y: -0.15,
      xanchor: "center" as const,
      yanchor: "top" as const,
      font: { size: 11 },
    },
    // 左右マージンを広げてラベルのクリップを防ぐ
    margin: { t: 40, b: 120, l: 40, r: 40 },
  };

  const activeGroups = GROUPS.map((g) => ({
    ...g,
    available: g.metrics.filter((m) => allMetrics.includes(m)),
  })).filter((g) => g.available.length > 0);

  const knownMetrics = new Set(GROUPS.flatMap((g) => g.metrics));
  const otherMetrics = allMetrics.filter((m) => !knownMetrics.has(m));

  return (
    // imageWrapper ではなく独自ラッパーを使い、前後テキストとの被りを防ぐ
    <div className={styles.chartSection}>
      {/* ── メトリクス選択パネル ── */}
      <div className={styles.metricPanel}>
        <button className={styles.metricToggleBtn} onClick={() => setPanelOpen((v) => !v)}>
          {panelOpen
            ? (lang === "ja" ? "▲ スタッツ選択を閉じる" : "▲ Close Stats Filter")
            : (lang === "ja" ? "▼ スタッツ選択" : "▼ Filter Stats")}
          <span className={styles.metricBadge}>{selected.size} / {allMetrics.length}</span>
        </button>

        {panelOpen && (
          <div className={styles.metricPanelBody}>
            <div className={styles.metricActions}>
              <button className={styles.metricActionBtn} onClick={selectAll}>
                {lang === "ja" ? "全選択" : "All"}
              </button>
              <button className={styles.metricActionBtn} onClick={clearAll}>
                {lang === "ja" ? "全解除" : "None"}
              </button>
              <button className={styles.metricActionBtn} onClick={resetDefault}>
                {lang === "ja" ? "デフォルト" : "Default"}
              </button>
            </div>

            <div className={styles.metricGroups}>
              {activeGroups.map((g) => {
                const allOn = g.available.every((m) => selected.has(m));
                return (
                  <div key={g.key} className={styles.metricGroup}>
                    <button
                      className={`${styles.metricGroupLabel} ${allOn ? styles.groupOn : ""}`}
                      onClick={() => toggleGroup(g.available, !allOn)}
                    >
                      {g.label[lang]}
                    </button>
                    <div className={styles.metricCheckboxes}>
                      {g.available.map((m) => (
                        <label key={m} className={`${styles.metricLabel} ${selected.has(m) ? styles.metricOn : ""}`}>
                          <input
                            type="checkbox"
                            checked={selected.has(m)}
                            onChange={() => toggle(m)}
                            className={styles.metricCheckbox}
                          />
                          {getLabel(m, lang)}
                        </label>
                      ))}
                    </div>
                  </div>
                );
              })}

              {otherMetrics.length > 0 && (
                <div className={styles.metricGroup}>
                  <span className={styles.metricGroupLabel}>{lang === "ja" ? "その他" : "Other"}</span>
                  <div className={styles.metricCheckboxes}>
                    {otherMetrics.map((m) => (
                      <label key={m} className={`${styles.metricLabel} ${selected.has(m) ? styles.metricOn : ""}`}>
                        <input type="checkbox" checked={selected.has(m)} onChange={() => toggle(m)} className={styles.metricCheckbox} />
                        {getLabel(m, lang)}
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* ── Plotly チャート ── */}
      <div className={styles.plotWrapper}>
        <Plot
          data={filteredData}
          layout={mergedLayout}
          config={{ responsive: true, displayModeBar: false, scrollZoom: false }}
          style={{ width: "100%", height: "100%" }}
          onLegendClick={handleLegendClick}
          onLegendDoubleClick={handleLegendDoubleClick}
        />
      </div>

      {caption && (
        <p className={styles.imageCaption}>
          {caption.split("\n").map((line, i) => (
            <span key={i}>{line}<br /></span>
          ))}
        </p>
      )}
    </div>
  );
}
