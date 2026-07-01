import Image from "next/image";
import styles from "./ShareCta.module.css";

type ShareCtaProps = {
  pageUrl: string;
  shareText: string;
};

export function ShareCta({ pageUrl, shareText }: ShareCtaProps) {
  const encodedPageUrl = encodeURIComponent(pageUrl);
  const encodedShareText = encodeURIComponent(`${shareText} ${pageUrl}`);
  const encodedShareQuote = encodeURIComponent(shareText);

  const links = [
    {
      label: "Compartilhar no Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedPageUrl}&quote=${encodedShareQuote}`,
      icon: "/vectors/facebook.png",
      width: 62,
      height: 62,
    },
    {
      label: "Compartilhar no LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedPageUrl}&title=${encodedShareQuote}&summary=${encodedShareQuote}`,
      icon: "/vectors/linkedin2.png",
      width: 56,
      height: 62,
    },
    {
      label: "Compartilhar no WhatsApp",
      href: `https://wa.me/?text=${encodedShareText}`,
      icon: "/vectors/wpp.png",
      width: 62,
      height: 62,
    },
  ];

  return (
    <section className={styles.share} aria-labelledby="share-title">
      <div className={`container ${styles.shareInner}`}>
        <h2 id="share-title">
          Aprendizados práticos para quem empreende, lidera e vende.
          <br />
          Compartilhe com um amigo.
        </h2>
        <div className={styles.socials} aria-label="Compartilhar">
          {links.map((link) => (
            <a
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.label}
              key={link.label}
            >
              <Image
                src={link.icon}
                alt=""
                width={link.width}
                height={link.height}
                aria-hidden="true"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
