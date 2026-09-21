import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/** Favicon: quadrado laranja da marca com o "A" de Alfaiates, sem depender de asset externo. */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#FF5F1F",
          borderRadius: 7
        }}
      >
        <span
          style={{
            color: "#FFFFFF",
            fontSize: 21,
            fontWeight: 700,
            lineHeight: 1
          }}
        >
          A
        </span>
      </div>
    ),
    size
  );
}
