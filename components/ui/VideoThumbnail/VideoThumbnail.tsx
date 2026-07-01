"use client";

import Image from "next/image";
import { useMemo, useState, type CSSProperties } from "react";
import styles from "./VideoThumbnail.module.css";

type VideoThumbnailProps = {
  title: string;
  thumbnail: string;
  videoUrl?: string;
  className?: string;
  aspectRatio?: string;
  sizes?: string;
};

function getYouTubeEmbedUrl(url?: string) {
  if (!url) {
    return null;
  }

  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^www\./, "");

    let videoId: string | null = null;

    if (host === "youtu.be") {
      videoId = parsed.pathname.split("/").filter(Boolean)[0] ?? null;
    }

    if (host === "youtube.com" || host === "m.youtube.com") {
      if (parsed.pathname.startsWith("/shorts/")) {
        videoId = parsed.pathname.split("/").filter(Boolean)[1] ?? null;
      } else if (parsed.pathname.startsWith("/watch")) {
        videoId = parsed.searchParams.get("v");
      } else if (parsed.pathname.startsWith("/embed/")) {
        videoId = parsed.pathname.split("/").filter(Boolean)[1] ?? null;
      }
    }

    return videoId
      ? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`
      : null;
  } catch {
    return null;
  }
}

export function VideoThumbnail({
  title,
  thumbnail,
  videoUrl,
  className,
  aspectRatio = "322 / 514",
  sizes = "(max-width: 768px) 100vw, 33vw",
}: VideoThumbnailProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const embedUrl = useMemo(() => getYouTubeEmbedUrl(videoUrl), [videoUrl]);
  const style = { "--video-aspect-ratio": aspectRatio } as CSSProperties;

  return (
    <div className={`${styles.video} ${className ?? ""}`} style={style}>
      {isPlaying && embedUrl ? (
        <iframe
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          className={styles.thumbnail}
          onClick={() => embedUrl && setIsPlaying(true)}
          disabled={!embedUrl}
          aria-label={
            embedUrl ? `Reproduzir vídeo de ${title}` : `Vídeo de ${title} em breve`
          }
        >
          <Image
            src={thumbnail}
            alt=""
            fill
            sizes={sizes}
            className={styles.image}
            aria-hidden="true"
          />
          <span className={styles.play} aria-hidden="true" />
        </button>
      )}
    </div>
  );
}
