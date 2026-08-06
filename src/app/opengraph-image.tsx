import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "#0A2540",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: "#FFFFFF",
            fontSize: 40,
            fontWeight: 700,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 64,
              height: 64,
              alignItems: "center",
              justifyContent: "center",
              background: "#FF6600",
              borderRadius: 12,
              fontSize: 28,
            }}
          >
            JR
          </div>
          JefRey Import
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 52,
            fontWeight: 700,
            color: "#FFFFFF",
            maxWidth: 900,
            lineHeight: 1.2,
          }}
        >
          Peças automotivas importadas com compatibilidade garantida
        </div>
      </div>
    ),
    { ...size },
  );
}
