import Image from "next/image";
import type { ReactNode } from "react";
import { CtaButton } from "@/components/ui/CtaButton";
import styles from "./ConsultingHero.module.css";

type ConsultingHeroProps = {
  eyebrow: string;
  eyebrowHighlight?: string;
  title: ReactNode;
  description: ReactNode;
  image: string;
  imageAlt?: string;
  imageFit?: "cover" | "contain-height";
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  ctaLayout?: "row" | "column";
  scrimVariant?: "default" | "strategy";
};

export function ConsultingHero({
  eyebrow,
  eyebrowHighlight,
  title,
  description,
  image,
  imageAlt = "",
  imageFit = "cover",
  primaryCta,
  secondaryCta,
  ctaLayout = "row",
  scrimVariant = "default",
}: ConsultingHeroProps) {
  const imageClassName = [styles.image, styles[imageFit]]
    .filter(Boolean)
    .join(" ");

  const scrimClassName = [styles.scrim, styles[scrimVariant]]
    .filter(Boolean)
    .join(" ");

  const actionsClassName = [styles.actions, styles[ctaLayout]]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={styles.hero} aria-labelledby="consulting-hero-title">
      <Image
        className={imageClassName}
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
      />
      <div className={scrimClassName} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        <p className={styles.eyebrow}>
          <span aria-hidden="true" />
          <span>
            {eyebrowHighlight ? (
              <>
                <strong>{eyebrowHighlight}</strong> | {eyebrow}
              </>
            ) : (
              eyebrow
            )}
          </span>
        </p>
        <h1 id="consulting-hero-title">{title}</h1>
        <p className={styles.description}>{description}</p>
        <div className={actionsClassName}>
          <CtaButton href={primaryCta.href}>{primaryCta.label}</CtaButton>
          {secondaryCta ? (
            <CtaButton href={secondaryCta.href} variant="black">
              {secondaryCta.label}
            </CtaButton>
          ) : null}
        </div>
      </div>
    </section>
  );
}
