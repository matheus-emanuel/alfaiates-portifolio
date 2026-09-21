import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { Pain } from "@/components/sections/Pain";
import { Differentiators } from "@/components/sections/Differentiators";
import { Services } from "@/components/sections/Services";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Portfolio } from "@/components/sections/Portfolio";
import { Trust } from "@/components/sections/Trust";
import { Deliverables } from "@/components/sections/Deliverables";
import { About } from "@/components/sections/About";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { site } from "@/content/site";

/**
 * Ritmo de fundo (zebra): papel → alternado → papel → alternado → papel →
 * alternado → papel → alternado → papel → alternado → escuro. Uma seção nova
 * entra respeitando a alternância, e só o CTA final é escuro.
 */
export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.nome,
    description: site.descricao,
    url: site.url,
    areaServed: "BR",
    address: { "@type": "PostalAddress", addressLocality: "São Paulo", addressRegion: "SP", addressCountry: "BR" },
    knowsLanguage: "pt-BR"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main>
        <Hero />
        <Pain />
        <Differentiators />
        <Services />
        <HowItWorks />
        <Portfolio />
        <Trust />
        <Deliverables />
        <About />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
