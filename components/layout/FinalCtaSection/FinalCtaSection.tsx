import type { ReactNode } from "react";
import { CtaButton } from "@/components/ui/CtaButton";
import styles from "./FinalCtaSection.module.css";

type FinalCtaSectionProps = {
  title: ReactNode;
  description?: ReactNode;
  buttonLabel: string;
  href: string;
  target?: string;
  rel?: string;
  titleId?: string;
};

export function FinalCtaSection({
  title,
  description,
  buttonLabel,
  href,
  target,
  rel,
  titleId = "final-cta-title",
}: FinalCtaSectionProps) {
  return (
    <section className={styles.cta} aria-labelledby={titleId}>
      <div className={`container ${styles.inner}`}>
        <h2 id={titleId}>{title}</h2>
        {description ? <p>{description}</p> : null}
        <CtaButton className={styles.button} href={href} target={target} rel={rel}>
          {buttonLabel}
        </CtaButton>
      </div>
    </section>
  );
}
