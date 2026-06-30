import Image from "next/image";
import type { ReactNode } from "react";
import { CtaButton } from "@/components/ui/CtaButton";
import styles from "./ConsultingHero.module.css";

type ConsultingHeroProps = {
  eyebrow: string;
  eyebrowHighlight: string;
  title: ReactNode;
  description: ReactNode;
  image: string;
  imageAlt?: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
};

export function ConsultingHero({
  eyebrow,
  eyebrowHighlight,
  title,
  description,
  image,
  imageAlt = "",
  primaryCta,
  secondaryCta,
}: ConsultingHeroProps) {
  return (
    <section className={styles.hero} aria-labelledby="consulting-hero-title">
      <Image
        className={styles.image}
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
      />
      <div className={styles.scrim} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        <p className={styles.eyebrow}>
          <span aria-hidden="true" />
          <span>
            <strong>{eyebrowHighlight}</strong> | {eyebrow}
          </span>
        </p>
        <h1 id="consulting-hero-title">{title}</h1>
        <p className={styles.description}>{description}</p>
        <div className={styles.actions}>
          <CtaButton href={primaryCta.href}>{primaryCta.label}</CtaButton>
          <CtaButton href={secondaryCta.href} variant="black">
            {secondaryCta.label}
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
