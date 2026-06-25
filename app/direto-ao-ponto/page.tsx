import Image from "next/image";
import type { Metadata } from "next";
import { ArticleExplorer } from "@/components/tothepoint/ArticleExplorer";
import styles from "@/components/tothepoint/DirectToPoint.module.css";
import { Footer } from "@/components/layout/Footer/Footer";
import { Header } from "@/components/layout/Header/Header";

const pageUrl = "https://bellnacif.com.br/direto-ao-ponto";
const shareText =
  "Aprendizados práticos com Bell Nacif para quem empreende, lidera e vende.";
const encodedPageUrl = encodeURIComponent(pageUrl);
const encodedShareText = encodeURIComponent(`${shareText} ${pageUrl}`);
const encodedShareQuote = encodeURIComponent(shareText);

export const metadata: Metadata = {
  title: "Direto ao Ponto | Bell Nacif",
  description:
    "Aprendizados práticos sobre liderança, vendas, gestão e varejo para aplicar na rotina do seu negócio.",
};

export default function DirectToPointPage() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.hero} aria-labelledby="direct-title">
          <div className={`container ${styles.heroContent}`}>
            <p className={styles.eyebrow}>
              <span>
                <strong>Aprendizados práticos com</strong> Bell Nacif
              </span>
            </p>
            <h1 id="direct-title">Direto ao ponto</h1>
            <p className={styles.intro}>
              Conteúdo claro, aplicável e conectado à rotina de quem empreende,
              lidera e vende.
            </p>
          </div>
        </section>

        <ArticleExplorer />

        <section className={styles.share} aria-labelledby="share-title">
          <div className={`container ${styles.shareInner}`}>
            <h2 id="share-title">
              Aprendizados práticos para quem empreende, lidera e vende.
              <br />
              Compartilhe com um amigo.
            </h2>
            <div className={styles.socials} aria-label="Compartilhar">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodedPageUrl}&quote=${encodedShareQuote}`}
                target="_blank"
                rel="noreferrer"
                aria-label="Compartilhar no Facebook"
              >
                <Image
                  src="/vectors/facebook.png"
                  alt=""
                  width={62}
                  height={62}
                  aria-hidden="true"
                />
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedPageUrl}&title=${encodedShareQuote}&summary=${encodedShareQuote}`}
                target="_blank"
                rel="noreferrer"
                aria-label="Compartilhar no LinkedIn"
              >
                <Image
                  src="/vectors/linkedin2.png"
                  alt=""
                  width={56}
                  height={62}
                  aria-hidden="true"
                />
              </a>
              <a
                href={`https://wa.me/?text=${encodedShareText}`}
                target="_blank"
                rel="noreferrer"
                aria-label="Compartilhar no WhatsApp"
              >
                <Image
                  src="/vectors/wpp.png"
                  alt=""
                  width={62}
                  height={62}
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
