import Image from "next/image";
import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer/Footer";
import { Header } from "@/components/layout/Header/Header";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Mentoria para donos de negócios | Bell Nacif",
  description:
    "Mentoria estratégica para donos de negócios que buscam clareza para vender, liderar e crescer com direção.",
};

export default function BusinessOwnersMentorshipPage() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.hero} aria-labelledby="mentorship-title">
          <Image
            className={styles.heroImage}
            src="/images/metorship/donosdenegocios_capa.png"
            alt=""
            fill
            priority
            sizes="100vw"
            aria-hidden="true"
          />
          <div className={`container ${styles.heroInner}`}>
            <p className={styles.eyebrow}>
              <span aria-hidden="true" />
              <strong>Lúmina Mentoria</strong> Estratégica para donos de
              negócios
            </p>
            <h1 id="mentorship-title">
              Clareza para
              <br />
              decidir.
              <br />
              Direção para o
              <br />
              vender, liderar e
              <br />
              crescer.
            </h1>
            <p className={styles.description}>
              Mentoria estratégica para donos de negócios que buscam tomar
              decisões com mais segurança, entender onde o negócio está travando
              e transformar ruídos em próximos passos claros para vender,
              liderar e crescer com direção.
            </p>
            <a className={styles.cta} href="#proximos-passos">
              Quero clarear meus próximos passos
            </a>
          </div>
        </section>

        <section
          className={styles.decisionIntro}
          aria-labelledby="decision-intro-title"
        >
          <div className={`container ${styles.decisionIntroInner}`}>
            <h2 id="decision-intro-title">
              Eu não começo
              <br />
              pelo CNPJ.
              <br />
              Começo por
              <br />
              quem toma as
              <br />
              decisões todos
              <br />
              os dias.
            </h2>
            <div className={styles.decisionIntroCopy}>
              <p>
                Seu negócio carrega sua forma de pensar, escolher, liderar e
                vender. Por isso, a mentoria LÚMINA une análise de perfil,
                leitura do negócio e orientação prática para construir caminhos
                claros, possíveis e aplicáveis à sua realidade.
              </p>
              <a className={styles.secondaryCta} href="#proximos-passos">
                Quero falar com a Bell
              </a>
            </div>
          </div>
        </section>

        <section className={styles.workScope} aria-labelledby="work-scope-title">
          <div className={`container ${styles.workScopeInner}`}>
            <header className={styles.workScopeHeader}>
              <h2 id="work-scope-title">O que trabalhamos</h2>
              <p>
                Antes de propor qualquer caminho, eu entendo quem conduz o
                negócio: como você decide, vende, lidera, negocia e avança.
              </p>
              <p>
                Porque estratégia boa não é a mais bonita no papel.
                <br />É a que funciona na sua realidade.
              </p>
            </header>

            <div className={styles.workScopeGrid}>
              <article className={styles.workCard}>
                <Image
                  src="/images/metorship/person.png"
                  alt=""
                  width={64}
                  height={64}
                  aria-hidden="true"
                />
                <h3>Perfil e tomada de decisão</h3>
                <p>Para entender como você lidera, decide e reage aos desafios.</p>
              </article>

              <article className={styles.workCard}>
                <Image
                  src="/images/metorship/octicon_goal.png"
                  alt=""
                  width={64}
                  height={64}
                  aria-hidden="true"
                />
                <h3>Vendas e posicionamento</h3>
                <p>
                  Para comunicar valor, melhorar propostas, negociação e
                  conversão.
                </p>
              </article>

              <article className={styles.workCard}>
                <Image
                  src="/images/metorship/gear.png"
                  alt=""
                  width={64}
                  height={64}
                  aria-hidden="true"
                />
                <h3>
                  Processos e
                  <br />
                  rotina
                </h3>
                <p>Para organizar o que hoje depende demais de você.</p>
              </article>

              <article className={styles.workCard}>
                <Image
                  src="/images/metorship/notebook.png"
                  alt=""
                  width={64}
                  height={64}
                  aria-hidden="true"
                />
                <h3>
                  Plano de
                  <br />
                  ação
                </h3>
                <p>
                  Para transformar diagnóstico em passos claros, com etapas e
                  prazos.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className={styles.pillars} aria-labelledby="pillars-title">
          <div className={`container ${styles.pillarsInner}`}>
            <div className={styles.pillarsCopy}>
              <h2 id="pillars-title">
                A Lúmina não
                <br />
                segue uma fórmula
                <br />
                pronta, segue uma
                <br />
                direção clara.
              </h2>
              <p>
                Cada processo é construído a partir do seu momento, do seu
                perfil e das fricções que aparecem na forma como você conduz o
                negócio.
              </p>
            </div>

            <Image
              className={styles.pillarsImage}
              src="/images/metorship/piramide.png"
              alt="Os 3 pilares Lúmina: direcionamento e distância, análise de perfil e padrões de decisão, escuta e leitura de cenário."
              width={694}
              height={596}
            />

            <a className={styles.pillarsCta} href="#proximos-passos">
              Quero conversar com a Bell
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
