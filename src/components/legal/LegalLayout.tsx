import type { ReactNode } from "react";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Wordmark } from "@/components/ui/Wordmark";
import { Footer } from "@/components/sections/Footer";
import styles from "./LegalLayout.module.css";

export interface LegalLayoutProps {
  eyebrow: string;
  title: string;
  updated: string;
  children: ReactNode;
}

export function LegalLayout({ eyebrow, title, updated, children }: LegalLayoutProps) {
  return (
    <>
      <div className={styles.top}>
        <div className={styles.topInner}>
          <Wordmark size={18} href="/" />
          <Link className={styles.back} href="/">
            ← Voltar pro início
          </Link>
        </div>
      </div>
      <main>
        <Section>
          <div className="stack stack-6">
            <SectionHeading eyebrow={eyebrow} title={title} />
            <span className={styles.updated}>Atualizado em {updated}</span>
            <div className={styles.prose}>{children}</div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
