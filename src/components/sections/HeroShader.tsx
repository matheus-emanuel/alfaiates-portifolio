"use client";

import { ChromaFlow, FilmGrain, FlutedGlass, Shader, Swirl } from "shaders/react";

/**
 * Pilha de shaders do hero, na paleta da marca: papel + laranja-alfaiate.
 * Carregado só via HeroBackground (dynamic, sem SSR), que decide se o
 * dispositivo aguenta.
 */
export default function HeroShader({ onUnavailable }: { onUnavailable: () => void }) {
  return (
    <Shader
      style={{ width: "100%", height: "100%" }}
      disableTelemetry
      onUnavailable={onUnavailable}
    >
      <Swirl colorA="#FFFFFF" colorB="#F2EBE3" detail={1.7} />
      <ChromaFlow
        baseColor="#FBF7F2"
        downColor="#FF5F1F"
        leftColor="#FF5F1F"
        rightColor="#FF5F1F"
        upColor="#FF5F1F"
        momentum={13}
        radius={3.5}
      />
      <FlutedGlass
        aberration={0.61}
        angle={31}
        frequency={8}
        highlight={0.12}
        highlightSoftness={0}
        lightAngle={-90}
        refraction={4}
        shape="rounded"
        softness={1}
        speed={0.15}
      />
      <FilmGrain strength={0.03} />
    </Shader>
  );
}
