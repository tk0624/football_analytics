import { useState } from "react";
import styles from "../styles/Article.module.css";

type Player = {
  pos: "GK" | "DF" | "MF" | "FW";
  name_jp: string;
  name_en: string;
  club: string;
  overall: number;
  condition: number;
  weapon: number;
};

type Props = {
  players: Player[];
  lang: "ja" | "en";
  caption?: string;
};

const POS_COLORS: Record<string, string> = {
  GK: "#60afff",
  DF: "#7ed957",
  MF: "#ff914d",
  FW: "#ff7b7b",
};

const POS_ORDER: Array<"GK" | "DF" | "MF" | "FW"> = ["GK", "DF", "MF", "FW"];

function stripCountry(club: string): string {
  return club.replace(/\s*\(.*?\)$/, "");
}

function weaponMark(weapon: number): string {
  if (weapon === 2) return "★★";
  if (weapon === 1) return "★";
  return "";
}

function conditionMark(condition: number): string {
  if (condition === 1) return "⚠";
  if (condition === 2) return "▲";
  return "";
}

const thStyle = (align: "left" | "center"): React.CSSProperties => ({
  textAlign: align,
  padding: "6px 10px",
  color: "#666",
  fontWeight: 600,
  fontSize: "0.76rem",
  letterSpacing: "0.04em",
  whiteSpace: "nowrap",
  borderBottom: "1px solid #2a2a2a",
});

const tdStyle = (align: "left" | "center"): React.CSSProperties => ({
  textAlign: align,
  padding: "7px 10px",
  color: "#c0c0c0",
  whiteSpace: "nowrap",
});

export default function SquadTable({ players, lang, caption }: Props) {
  const [filter, setFilter] = useState<"ALL" | "GK" | "DF" | "MF" | "FW">("ALL");

  const visiblePlayers = filter === "ALL" ? players : players.filter((p) => p.pos === filter);

  const groups = POS_ORDER.filter((pos) => filter === "ALL" || pos === filter).map((pos) => ({
    pos,
    rows: visiblePlayers.filter((p) => p.pos === pos),
  })).filter((g) => g.rows.length > 0);

  const tabs: Array<"ALL" | "GK" | "DF" | "MF" | "FW"> = ["ALL", "GK", "DF", "MF", "FW"];

  return (
    <div className={styles.chartSection}>
      {/* Position filter */}
      <div style={{ display: "flex", gap: "6px", marginBottom: "14px", flexWrap: "wrap" }}>
        {tabs.map((tab) => {
          const active = filter === tab;
          const label = tab === "ALL" ? (lang === "ja" ? "全て" : "All") : tab;
          return (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              style={{
                padding: "4px 14px",
                borderRadius: "5px",
                border: `1.5px solid ${active ? "#7ed957" : "#333"}`,
                background: active ? "#162216" : "#1a1a1a",
                color: active ? "#7ed957" : "#777",
                cursor: "pointer",
                fontSize: "0.82rem",
                fontWeight: active ? 700 : 400,
                transition: "all 0.15s",
              }}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* Table */}
      <div style={{ overflowX: "auto", borderRadius: "6px", border: "1px solid #222" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.87rem" }}>
          <thead>
            <tr>
              <th style={thStyle("left")}>{lang === "ja" ? "選手名" : "Name"}</th>
              <th style={thStyle("left")}>{lang === "ja" ? "クラブ" : "Club"}</th>
              <th style={thStyle("center")}>{lang === "ja" ? "総合評価" : "Overall"}</th>
              <th style={thStyle("center")}>{lang === "ja" ? "特性" : "Trait"}</th>
              <th style={thStyle("center")}>{lang === "ja" ? "状態" : "Cond."}</th>
            </tr>
          </thead>
          <tbody>
            {groups.map(({ pos, rows }) => (
              <>
                {filter === "ALL" && (
                  <tr key={`header-${pos}`}>
                    <td
                      colSpan={5}
                      style={{
                        padding: "8px 10px 4px",
                        color: POS_COLORS[pos],
                        fontWeight: 700,
                        fontSize: "0.78rem",
                        borderTop: "1px solid #252525",
                        letterSpacing: "0.06em",
                        background: "#131313",
                      }}
                    >
                      {pos}
                    </td>
                  </tr>
                )}
                {rows.map((p, i) => (
                  <tr
                    key={p.name_jp}
                    style={{
                      borderBottom: "1px solid #1e1e1e",
                      background: i % 2 === 0 ? "#111" : "#151515",
                    }}
                  >
                    <td style={{ ...tdStyle("left"), color: "#e0e0e0", fontWeight: 500 }}>
                      {lang === "ja" ? p.name_jp : p.name_en}
                    </td>
                    <td style={{ ...tdStyle("left"), color: "#666", fontSize: "0.81rem" }}>
                      {stripCountry(p.club)}
                    </td>
                    <td style={{ ...tdStyle("center"), fontWeight: 700, color: "#f5f5f5" }}>
                      {p.overall.toFixed(2)}
                    </td>
                    <td style={{ ...tdStyle("center"), color: "#f5c842", fontSize: "0.8rem" }}>
                      {weaponMark(p.weapon)}
                    </td>
                    <td
                      style={{
                        ...tdStyle("center"),
                        color: p.condition === 1 ? "#ff5a5a" : p.condition === 2 ? "#ff914d" : "#444",
                        fontSize: "0.85rem",
                      }}
                    >
                      {conditionMark(p.condition)}
                    </td>
                  </tr>
                ))}
              </>
            ))}
          </tbody>
        </table>
      </div>

      {caption && (
        <p className={styles.imageCaption}>
          {caption.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
        </p>
      )}
    </div>
  );
}
