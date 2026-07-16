import type { Metadata } from "next";
import { ArticleExplorer } from "@/components/tothepoint/ArticleExplorer";
import { ShareCta } from "@/components/tothepoint/ShareCta";
import styles from "@/components/tothepoint/DirectToPoint.module.css";
import { Footer } from "@/components/layout/Footer/Footer";
import { Header } from "@/components/layout/Header/Header";

const pageUrl = "https://bell-website-gray.vercel.app/direto-ao-ponto";
const shareText =
  "Aprendizados práticos com Bell Nacif para quem empreende, lidera e vende.";

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
              <span className="heroDash" aria-hidden="true" />
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

        <ShareCta pageUrl={pageUrl} shareText={shareText} />
      </main>
      <Footer />
    </>
  );
}
