import { ImageResponse } from "next/og";

// Edge runtime : évite le bug de résolution de police (@vercel/og) au build Windows.
export const runtime = "edge";

export const alt = "Benti — le makloub de Sidi Bou Saïd, fait maison à Paris";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "linear-gradient(135deg, #0e3a47 0%, #1b7a93 55%, #2da5c3 100%)",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* diamants zellige */}
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -80,
            width: 320,
            height: 320,
            background: "#f2b441",
            opacity: 0.9,
            transform: "rotate(45deg)",
            borderRadius: 32,
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -120,
            left: -60,
            width: 260,
            height: 260,
            background: "#ac4066",
            opacity: 0.85,
            transform: "rotate(45deg)",
            borderRadius: 28,
            display: "flex",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 44,
              height: 44,
              background: "#b46a35",
              transform: "rotate(45deg)",
              borderRadius: 8,
              display: "flex",
            }}
          />
          <span
            style={{
              color: "#fbf5ea",
              fontSize: 30,
              fontWeight: 700,
              letterSpacing: 6,
            }}
          >
            BENTI
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", zIndex: 10 }}>
          <span
            style={{
              color: "#f2b441",
              fontSize: 30,
              fontWeight: 700,
              letterSpacing: 3,
              textTransform: "uppercase",
            }}
          >
            Restaurant tunisien · Paris 11e &amp; 3e
          </span>
          <span
            style={{
              color: "#fffdf8",
              fontSize: 76,
              fontWeight: 800,
              lineHeight: 1.05,
              marginTop: 18,
              maxWidth: 900,
            }}
          >
            Le makloub de Sidi Bou Saïd, fait maison.
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 20, zIndex: 10 }}>
          <span
            style={{
              background: "#c85a2b",
              color: "#fff",
              fontSize: 26,
              fontWeight: 700,
              padding: "12px 26px",
              borderRadius: 999,
              display: "flex",
            }}
          >
            benti-paris.fr
          </span>
          <span style={{ color: "#fbf5ea", fontSize: 24, opacity: 0.85 }}>
            ★ 4,8/5 · 665 avis
          </span>
        </div>
      </div>
    ),
    size
  );
}
