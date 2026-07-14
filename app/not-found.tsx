import Link from "next/link";
import { Footer } from "@/components/layout/Footer/Footer";
import { Header } from "@/components/layout/Header/Header";
import { CtaButton } from "@/components/ui/CtaButton";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <section className={styles.hero} aria-labelledby="not-found-title">
          <div className={`container ${styles.inner}`}>
            <p className={styles.eyebrow}>
              <span aria-hidden="true" />
              Caminho não encontrado
            </p>
            <p className={styles.code} aria-hidden="true">
              404
            </p>
            <h1 className={styles.title} id="not-found-title">
              Essa página saiu da rota.
            </h1>
            <p className={styles.copy}>
              O endereço pode ter mudado, o link pode estar antigo ou essa área
              ainda não está disponível. Vamos te levar de volta para um caminho
              seguro.
            </p>
            <div className={styles.actions}>
              <CtaButton href="/">Voltar para a Home</CtaButton>
              <Link className={styles.secondary} href="/contato/clientes">
                Falar com a Bell
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
