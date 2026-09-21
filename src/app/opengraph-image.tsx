import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Card de compartilhamento: mesmo fundo escuro do CTA final (a única seção
 * escura do sistema), wordmark e a costura pontilhada como assinatura.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 96px",
          background: "#1F1A17"
        }}
      >
        <div
          style={{
            display: "flex",
            width: 120,
            borderTop: "3px dashed #CE9095",
            marginBottom: 40
          }}
        />
        <div style={{ display: "flex", fontSize: 76, fontWeight: 800, letterSpacing: "-0.02em" }}>
          <span style={{ color: "#FFFFFF" }}>Alfaiates</span>
          <span style={{ color: "#CE9095" }}>Sistemas</span>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 32,
            color: "rgba(255,255,255,0.62)"
          }}
        >
          {site.tagline}
        </div>
      </div>
    ),
    size
  );
}
