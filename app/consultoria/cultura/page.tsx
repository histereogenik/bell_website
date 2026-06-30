import type { Metadata } from "next";
import { ConsultingHero } from "@/components/consulting/ConsultingHero";
import { Footer } from "@/components/layout/Footer/Footer";
import { Header } from "@/components/layout/Header/Header";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Consultoria de cultura | Bell Nacif",
  description:
    "Consultoria estratégica para transformar cultura em direção, comportamento e prática dentro da empresa.",
};

const contactClientsHref = "/contato/clientes";

const culturePillars = [
  {
    title: "O porquê da empresa",
    lead:
      "Clareza sobre o propósito que sustenta a existência da empresa, sua contribuição para clientes, pessoas e sociedade.",
    text:
      "Não se trata apenas de formular uma missão bonita, mas de revelar a razão que dá coerência às escolhas e à forma como o negócio deseja gerar valor.",
  },
  {
    title: "Valores que viram comportamento",
    lead:
      "Definição dos princípios que orientam decisões, relações e atitudes dentro da empresa.",
    text:
      "Os valores são traduzidos em comportamentos práticos, para que líderes e equipes saibam o que deve ser vivido, reforçado e desenvolvido no dia a dia.",
  },
  {
    title: "Visão que direciona o futuro",
    lead:
      "Construção de uma visão clara, possível e mobilizadora, capaz de orientar prioridades, metas e decisões estratégicas.",
    text: "A visão ajuda a empresa a sair da intenção e caminhar com direção.",
  },
  {
    title: "Coerência entre fala e prática",
    lead:
      "Análise do alinhamento entre o que a empresa declara, o que a liderança pratica e o que a equipe realmente vive.",
    text:
      "Porque cultura ganha força quando existe coerência entre discurso, decisão e comportamento.",
  },
  {
    title: "Práticas que sustentam a cultura",
    lead:
      "Definição de práticas, combinados e formas de acompanhamento que ajudam a manter a cultura viva na rotina.",
    text:
      "Cultura não se sustenta apenas por comunicação. Ela se sustenta pelo que é praticado, reconhecido, corrigido e repetido.",
  },
];

const cultureResults = [
  {
    title: "Direção",
    text: "Clareza sobre onde a empresa quer chegar e por quê.",
  },
  {
    title: "Coerência",
    text: "Alinhamento entre o que se diz, decide e pratica.",
  },
  {
    title: "Constância",
    text: "Práticas e comportamentos que sustentam a cultura.",
  },
];

export default function CultureConsultingPage() {
  return (
    <>
      <Header />
      <main>
        <ConsultingHero
          eyebrow="Cultura"
          eyebrowHighlight="Consultoria estratégica"
          image="/images/consulting/culture/culture_hero.png"
          primaryCta={{
            label: "Conheça essa solução",
            href: contactClientsHref,
          }}
          secondaryCta={{
            label: "Como funciona",
            href: "#como-funciona",
          }}
          title={
            <>
              Cultura clara,
              <br />
              coerente e aplicável
            </>
          }
          description={
            <>
              Transforme identidade em direção, valores
              <br />
              em comportamento e estratégia em prática.
            </>
          }
        />

        <section className={styles.cultureIntro} aria-labelledby="culture-intro-title">
          <div className={`container ${styles.cultureIntroInner}`}>
            <h2 id="culture-intro-title">
              Cultura não é o que a empresa
              <br />
              escreve na parede.
            </h2>
            <p>
              É o que ela valoriza nas decisões, tolera nos comportamentos e
              reforça na prática.
            </p>
            <p>
              Toda empresa tem uma cultura. A diferença é se ela foi construída
              com consciência ou apenas repetida
              <br />
              pela rotina.
            </p>
            <p>
              Meu trabalho ajuda empresas a clarearem sua identidade, traduzirem
              seus valores em comportamentos
              <br />
              reais e alinharem liderança, equipe e estratégia em torno de uma
              direção comum.
            </p>
            <p>
              Porque quando as pessoas entendem por que a empresa existe, como
              ela escolhe agir e o que espera de
              <br />
              cada pessoa, a cultura deixa de ser discurso e passa a orientar
              decisões.
            </p>
          </div>
        </section>

        <section className={styles.practice} aria-labelledby="practice-title">
          <div className={`container ${styles.practiceInner}`}>
            <header className={styles.practiceHeader}>
              <h2 id="practice-title">
                Cultura se constrói na prática,
                <br />
                não apenas no discurso.
              </h2>
              <p>Cinco frentes para tornar a cultura visível e praticável</p>
            </header>

            <div className={styles.practiceGrid}>
              {culturePillars.map((pillar, index) => (
                <article className={styles.practiceCard} key={pillar.title}>
                  <span>{index + 1}</span>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.lead}</p>
                  <p>{pillar.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.result} aria-labelledby="culture-result-title">
          <div className={`container ${styles.resultInner}`}>
            <p className={styles.resultEyebrow}>O resultado</p>
            <h2 id="culture-result-title">
              Uma cultura que orienta decisões, fortalece lideranças e
              <br />
              alinha pessoas em torno do mesmo propósito.
            </h2>
            <div className={styles.resultGrid}>
              {cultureResults.map((item) => (
                <article key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
