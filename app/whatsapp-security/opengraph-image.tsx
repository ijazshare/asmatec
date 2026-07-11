import { ImageResponse } from "next/og";

// Link-preview card shown when the guide is shared (WhatsApp, iMessage, etc.).
export const alt =
  "Create a private, scam-proof WhatsApp Community — free guide from AsmaTec";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg, #081A34 0%, #0d2a4a 55%, #0A1A2F 100%)",
          padding: "76px 80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "#25D366",
            }}
          />
          <div style={{ fontSize: 30, fontWeight: 700, color: "#25D366" }}>
            Private WhatsApp Community
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 70,
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            The setup scammers can&apos;t get into
          </div>
          <div style={{ fontSize: 32, color: "#94a3b8", marginTop: 30 }}>
            Numbers hidden · Only admins can post or add · Free step-by-step
            guide
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ fontSize: 34, fontWeight: 800, color: "#ffffff" }}>
            AsmaTec
          </div>
          <div style={{ fontSize: 26, color: "#3b82f6" }}>
            asmatec.com/whatsapp-security
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
