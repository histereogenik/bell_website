import type { Metadata } from "next";
import Image from "next/image";
import { ConsultingHero } from "@/components/consulting/ConsultingHero";
import { FinalCtaSection } from "@/components/layout/FinalCtaSection";
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

const cultureProcess = [
  {
    tag: "Diagnóstico",
    title: "Imersão na realidade da empresa",
    description:
      "Conversas com lideranças e colaboradores para entender como a cultura é vivida hoje. O que funciona, o que não funciona, e onde estão os desalinhamentos entre discurso e prática.",
    tags: ["Entrevistas", "Análise de clima", "Mapeamento cultural"],
    deliverable:
      "Diagnóstico cultural com principais achados e oportunidades.",
  },
  {
    tag: "Clareza",
    title: "Definição do propósito, valores e visão",
    description:
      "Construção coletiva do porquê da empresa existir, dos princípios que orientam decisões e da direção que se deseja alcançar. Tudo traduzido em linguagem clara e aplicável.",
    tags: ["Workshops", "Co-criação", "Refinamento"],
    deliverable: "Documento de propósito, valores operacionais e visão estratégica.",
  },
  {
    tag: "Comportamento",
    title: "Tradução de valores em comportamentos",
    description:
      "Cada valor vira um conjunto de comportamentos esperados para líderes e colaboradores. O que se deve fazer mais, o que se deve parar de fazer e o que será reforçado.",
    tags: ["Definição de comportamentos", "Níveis de liderança", "Indicadores"],
    deliverable: "Matriz de comportamentos por valor e por nível hierárquico.",
  },
  {
    tag: "Coerência",
    title: "Alinhamento entre fala, decisão e prática",
    description:
      "Análise de onde o discurso diverge da realidade. Identificação de processos, políticas e práticas que precisam ser ajustados para sustentar a cultura desejada.",
    tags: ["Mapeamento de gaps", "Revisão de processos", "Ajustes de políticas"],
    deliverable: "Plano de alinhamento com prioridades e responsáveis.",
  },
  {
    tag: "Consistência",
    title: "Criação de práticas que sustentam a cultura",
    description:
      "Definição de práticas, momentos de reconhecimento, formas de feedback e canais de comunicação que mantêm a cultura viva na rotina, não apenas nos slides e materiais institucionais.",
    tags: ["Práticas de reconhecimento", "Feedbacks", "Canais de comunicação"],
    deliverable: "Protocolo de práticas culturais implementáveis.",
  },
  {
    tag: "Acompanhamento",
    title: "Ajustes, evolução e sustentação",
    description:
      "Cultura não se constrói da noite para o dia. É preciso acompanhar, medir e ajustar continuamente para que o que foi definido se torne realidade no dia a dia.",
    tags: ["Pulsos de clima", "Revisões trimestrais", "Ajustes contínuos"],
    deliverable: "Ciclo de acompanhamento com métricas e evolução.",
  },
];

const workFormat = [
  {
    icon: "clock.png",
    title: "Duração",
    text: "De 3 a 6 meses, dependendo do tamanho da empresa e da profundidade do trabalho.",
  },
  {
    icon: "round_group.png",
    title: "Formato",
    text:
      "Workshops presenciais e virtuais, entrevistas individuais e acompanhamento contínuo.",
  },
  {
    icon: "pyramid_group.png",
    title: "Equipe envolvida",
    text:
      "Alta Liderança, RH e representantes das equipes para garantir adesão real.",
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
          image="/images/consulting/culture/culture_hero.webp"
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

        <section
          className={styles.process}
          id="como-funciona"
          aria-labelledby="culture-process-title"
        >
          <div className={`container ${styles.processInner}`}>
            <header className={styles.processHeader}>
              <p>Processo</p>
              <h2 id="culture-process-title">Como funciona, passo a passo.</h2>
              <p>
                Um processo estruturado para transformar cultura em direção
                aplicável.
              </p>
            </header>

            <div className={styles.processTimeline}>
              {cultureProcess.map((step, index) => (
                <div className={styles.processStep} key={step.title}>
                  <details className={styles.processCard}>
                    <summary>
                      <span className={styles.processTag}>{step.tag}</span>
                      <span className={styles.processToggle} aria-hidden="true" />
                      <span className={styles.processTitle}>{step.title}</span>
                    </summary>
                    <div className={styles.processCardBody}>
                      <p>{step.description}</p>
                      <div className={styles.processTags}>
                        {step.tags.map((tag, tagIndex) => (
                          <span key={`${step.title}-${tag}-${tagIndex}`}>
                            {tag}
                          </span>
                        ))}
                      </div>
                      <p>{step.deliverable}</p>
                    </div>
                  </details>
                  <span className={styles.processNumber} aria-hidden="true">
                    {index + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.format} aria-labelledby="work-format-title">
          <div className={`container ${styles.formatInner}`}>
            <p className={styles.formatEyebrow}>Formato do trabalho</p>
            <h2 id="work-format-title">O que esperar da jornada</h2>
            <div className={styles.formatGrid}>
              {workFormat.map((item) => (
                <article key={item.title}>
                  <span aria-hidden="true">
                    <Image
                      src={`/images/consulting/culture/${item.icon}`}
                      alt=""
                      width={42}
                      height={42}
                    />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <FinalCtaSection
          titleId="culture-final-cta-title"
          href={contactClientsHref}
          buttonLabel="Quero conversar com a Bell"
          title={
            <>
              Quer transformar a cultura da sua
              <br />
              empresa em direção clara e prática?
            </>
          }
          description={
            <>
              Vamos conversar sobre como construir uma cultura coerente, viva e
              aplicável no dia a dia.
            </>
          }
        />
      </main>
      <Footer />
    </>
  );
}
