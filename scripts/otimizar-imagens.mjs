/**
 * Converte os prints dos projetos (PNG grandes, entregues pelo cliente) em WebP
 * no tamanho que a página usa. Rodar de novo quando chegar print novo:
 *   node scripts/otimizar-imagens.mjs
 */
import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

const ORIGEM = path.resolve(import.meta.dirname, "../../project/project-images");
const DESTINO = path.resolve(import.meta.dirname, "../public/trabalhos");
const LARGURA = 1600;

const MAPA = {
  "vr-pilates.png": "vr-pilates",
  "amazing school.png": "amazing-school",
  "foco contábil.png": "foco-contabil",
  "me ajuda aí.png": "me-ajuda-ai"
};

fs.mkdirSync(DESTINO, { recursive: true });

for (const [arquivo, slug] of Object.entries(MAPA)) {
  const entrada = path.join(ORIGEM, arquivo);
  if (!fs.existsSync(entrada)) {
    console.warn(`faltando: ${arquivo}`);
    continue;
  }
  const meta = await sharp(entrada).metadata();
  const saida = path.join(DESTINO, `${slug}.webp`);
  const info = await sharp(entrada)
    .resize({ width: LARGURA, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(saida);
  const antes = (fs.statSync(entrada).size / 1024 / 1024).toFixed(2);
  console.log(
    `${slug.padEnd(15)} ${meta.width}x${meta.height} (${antes} MB) -> ` +
    `${info.width}x${info.height} (${(info.size / 1024).toFixed(0)} KB) razão ${(info.width / info.height).toFixed(3)}`
  );
}
