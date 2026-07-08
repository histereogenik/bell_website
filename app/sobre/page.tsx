import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "@/components/layout/Footer/Footer";
import { Header } from "@/components/layout/Header/Header";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Sobre | Bell Nacif",
  description:
    "Conheça Bell Nacif, especialista em vendas humanizadas, liderança, varejo e desenvolvimento de pessoas.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.hero} aria-labelledby="about-title">
          <Image
            className={styles.heroBackground}
            src="/images/about/about_bg.png"
            alt=""
            fill
            loading="eager"
            sizes="100vw"
            aria-hidden="true"
          />
          <div className={`container ${styles.heroInner}`}>
            <h1 id="about-title" aria-label="Bell Nacif">
              <span>Bell</span>
              <span>Nacif</span>
            </h1>
            <Image
              className={styles.heroPortrait}
              src="/images/about/picture_hero.png"
              alt="Bell Nacif sorrindo."
              width={701}
              height={767}
              loading="eager"
              sizes="(max-width: 760px) 74vw, (max-width: 1180px) 48vw, 701px"
            />
          </div>
        </section>

        <section className={styles.origin} aria-labelledby="origin-title">
          <div className={`container ${styles.originInner}`}>
            <p className={styles.originMedium}>
              Antes de falar sobre cargos, números, formações ou conquistas, eu
              preciso te dizer de onde tudo isso realmente veio.
            </p>

            <p className={styles.originLarge}>Veio do chão de loja.</p>

            <p className={styles.originSmall}>
              Veio dos atendimentos difíceis, das metas apertadas, dos “nãos”
              recebidos com sorriso no rosto, das equipes que precisavam de
              direção e dos clientes que, antes de comprarem qualquer produto,
              queriam ser percebidos como pessoas.
            </p>

            <p className={styles.originMedium}>
              Foi ali que eu aprendi uma verdade que nunca mais me abandonou:
            </p>

            <p className={styles.originLarge}>a verdade vende.</p>

            <p className={styles.originSmall}>
              Mas ela só vende quando existe escuta.
              <br />
              Quando existe interesse genuíno.
              <br />
              Quando existe presença, preparo e coragem para conduzir pessoas,
              não apenas cobrar delas.
            </p>

            <p className={styles.originMedium}>
              Ao longo de mais de duas décadas no varejo, eu entendi que cliente
              não é meta.
            </p>

            <p className={styles.originLarge}>
              Cliente é <span>PESSOA.</span>
            </p>

            <p className={styles.originSmall}>
              E que vendedor também não é apenas força de venda. São pessoas que
              precisam ser conduzidas, encorajadas e desenvolvidas para
              conseguirem entregar o melhor de si.
            </p>

            <p className={styles.originMedium}>
              Foi essa percepção que transformou a minha forma de vender, liderar
              e formar equipes.
            </p>

            <p className={styles.originSmall}>
              E é por isso que a minha história não é apenas sobre crescimento
              profissional.
            </p>

            <p className={styles.originMedium}>
              É sobre o caminho que me ensinou que negócios crescem quando
              pessoas são bem conduzidas.
            </p>

            <div className={styles.originClosing}>
              <h2 id="origin-title">
                Pessoas no centro.
                <br />
                Resultados no topo.
              </h2>
              <p>Com verdade,</p>
              <Image
                src="/images/about/signature.png"
                alt="Bell"
                width={170}
                height={101}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
