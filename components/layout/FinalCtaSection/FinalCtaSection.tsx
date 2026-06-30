import type { ReactNode } from "react";
import { CtaButton } from "@/components/ui/CtaButton";
import styles from "./FinalCtaSection.module.css";

type FinalCtaSectionProps = {
  title: ReactNode;
  description: ReactNode;
  buttonLabel: string;
  href: string;
  titleId?: string;
};

export function FinalCtaSection({
  title,
  description,
  buttonLabel,
  href,
  titleId = "final-cta-title",
}: FinalCtaSectionProps) {
  return (
    <section className={styles.cta} aria-labelledby={titleId}>
      <div className={`container ${styles.inner}`}>
        <h2 id={titleId}>{title}</h2>
        <p>{description}</p>
        <CtaButton className={styles.button} href={href}>
          {buttonLabel}
        </CtaButton>
      </div>
    </section>
  );
}
