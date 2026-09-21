import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

/* As duas famílias do sistema, self-hosted pelo next/font: sem requisição ao
   Google no runtime e sem salto de layout na troca da fonte. */
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap"
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-jetbrains",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.nome}: sistemas sob medida para o seu negócio`,
    template: `%s | ${site.nome}`
  },
  description: site.descricao,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: site.nome,
    title: `${site.nome}: sistemas sob medida para o seu negócio`,
    description: site.descricao,
    url: "/"
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.nome}: sistemas sob medida para o seu negócio`,
    description: site.descricao
  },
  robots: { index: true, follow: true }
};

export const viewport: Viewport = {
  themeColor: "#FBF7F2"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${jakarta.variable} ${jetbrains.variable}`}>
      <body>
        <a className="skip-link" href="#topo">
          Ir direto para o conteúdo
        </a>
        {children}
      </body>
    </html>
  );
}
