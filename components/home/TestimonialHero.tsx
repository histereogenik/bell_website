"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { testimonials } from "@/content/site";
import styles from "./TestimonialHero.module.css";

export function TestimonialHero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 7000);

    return () => window.clearInterval(timer);
  }, []);

  const active = testimonials[activeIndex];

  return (
    <section className={styles.hero} aria-labelledby="home-title">
      <div className={styles.copy}>
        <div className={styles.copyInner}>
          <h1 id="home-title" className="sr-only">
            Bell Nacif — liderança e vendas
          </h1>
          <div className={styles.quoteStage}>
            <blockquote key={active.quote} className={styles.quote}>
              “{active.quote}”
            </blockquote>
          </div>
          <div className={styles.authorStage}>
            <p className={styles.author}>
              <strong>{active.author}</strong>
              <span>{active.role}</span>
            </p>
          </div>
          <div className={styles.indicators} aria-label="Selecionar depoimento">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.author}
                type="button"
                className={index === activeIndex ? styles.active : ""}
                aria-label={`Depoimento ${index + 1}: ${testimonial.author}`}
                aria-pressed={index === activeIndex}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.portrait}>
        <Image
          className={styles.portraitImage}
          src="/images/home/bell_hero.png"
          alt="Bell Nacif"
          width={674}
          height={872}
          priority
          unoptimized
          sizes="(max-width: 700px) 100vw, (max-width: 1100px) 46vw, 47vw"
        />
      </div>
    </section>
  );
}
