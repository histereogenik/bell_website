"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./VerticalTestimonialsCarousel.module.css";

type TestimonialImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

type VerticalTestimonialsCarouselProps = {
  images: TestimonialImage[];
  imageBasePath: string;
};

export function VerticalTestimonialsCarousel({
  images,
  imageBasePath,
}: VerticalTestimonialsCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const speedRef = useRef(-18);
  const isHoveringViewportRef = useRef(false);
  const isPressingControlRef = useRef(false);
  const positionRef = useRef(0);
  const previousTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let frameId = 0;

    function animate(currentTime: number) {
      const track = trackRef.current;

      if (!track) {
        frameId = requestAnimationFrame(animate);
        return;
      }

      const previousTime = previousTimeRef.current ?? currentTime;
      const deltaSeconds = (currentTime - previousTime) / 1000;
      previousTimeRef.current = currentTime;

      const loopHeight = track.scrollHeight / 2;

      if (loopHeight > 0) {
        const currentSpeed =
          isHoveringViewportRef.current && !isPressingControlRef.current
            ? 0
            : speedRef.current;

        positionRef.current += currentSpeed * deltaSeconds;

        if (positionRef.current <= -loopHeight) {
          positionRef.current += loopHeight;
        }

        if (positionRef.current > 0) {
          positionRef.current -= loopHeight;
        }

        track.style.transform = `translateY(${positionRef.current}px)`;
      }

      frameId = requestAnimationFrame(animate);
    }

    frameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, []);

  function setSpeed(speed: number) {
    isPressingControlRef.current = true;
    speedRef.current = speed;
  }

  function resetSpeed() {
    isPressingControlRef.current = false;
    speedRef.current = -18;
  }

  return (
    <div className={styles.layout}>
      <div className={styles.controls}>
        <button
          type="button"
          className={styles.controlUp}
          onPointerDown={() => setSpeed(-96)}
          onPointerUp={resetSpeed}
          onPointerLeave={resetSpeed}
          onPointerCancel={resetSpeed}
          onBlur={resetSpeed}
          aria-label="Acelerar comentários para cima"
        >
          <span className={styles.arrow} aria-hidden="true">
            ↑
          </span>
        </button>
        <button
          type="button"
          className={styles.controlDown}
          onPointerDown={() => setSpeed(72)}
          onPointerUp={resetSpeed}
          onPointerLeave={resetSpeed}
          onPointerCancel={resetSpeed}
          onBlur={resetSpeed}
          aria-label="Voltar comentários"
        >
          <span className={styles.arrow} aria-hidden="true">
            ↓
          </span>
        </button>
      </div>

      <div
        className={styles.viewport}
        onPointerEnter={() => {
          isHoveringViewportRef.current = true;
        }}
        onPointerLeave={() => {
          isHoveringViewportRef.current = false;
        }}
      >
        <div className={styles.track} ref={trackRef}>
          {[...images, ...images].map((testimonial, index) => (
            <Image
              key={`${testimonial.src}-${index}`}
              src={`${imageBasePath}/${testimonial.src}`}
              alt={testimonial.alt}
              width={testimonial.width}
              height={testimonial.height}
              sizes="(max-width: 760px) calc(100vw - 56px), 708px"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
