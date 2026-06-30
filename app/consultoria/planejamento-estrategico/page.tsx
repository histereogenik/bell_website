import type { Metadata } from "next";
import { ConsultingHero } from "@/components/consulting/ConsultingHero";
import { VerticalTestimonialsCarousel } from "@/components/consulting/VerticalTestimonialsCarousel";
import { FinalCtaSection } from "@/components/layout/FinalCtaSection";
import { Footer } from "@/components/layout/Footer/Footer";
import { Header } from "@/components/layout/Header/Header";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Planejamento estratégico | Bell Nacif",
  description:
    "Consultoria estratégica para transformar intenção em direção clara, prática e aplicável.",
};

const contactClientsHref = "/contato/clientes";

const programContent = [
  {
    title: "Plano de trabalho",
    text:
      "Compreendemos o contexto da organização e levantamos as informações relevantes. Definimos a gestão do projeto, apresentamos a metodologia e estabelecemos o escopo e as etapas de execução.",
    tag: "Início do projeto",
  },
  {
    title: "Diagnóstico",
    text:
      "Levantamos por meio de entrevistas e leitura de documentos os dados preliminares sobre o contexto de atuação do cliente. Conhecemos os principais processos, as questões estruturais e conjunturais, os planos anteriores e os projetos em andamento.",
    tag: "Análise interna",
  },
  {
    title: "Análise do contexto externo",
    text:
      "Analisamos o macroambiente do cliente, verificando as variáveis externas relevantes, suas tendências e seus possíveis impactos na organização — identificando oportunidades e ameaças. Avaliamos ainda o nível de competição no setor e o potencial de crescimento.",
    tag: "SWOT - Macroambiente",
  },
  {
    title: "Análise do contexto interno",
    text:
      "Analisamos as competências instaladas no cliente — as variáveis críticas internas da organização. Essa análise permite verificar o potencial de melhoria, o desenvolvimento de novos produtos/serviços e a entrada em novos negócios.",
    tag: "SWOT - Forças & Fraquezas",
  },
  {
    title: "Ideologia organizacional",
    text:
      "Revisamos e validamos a missão, a visão e os valores do cliente. Esses elementos compõem a ideologia organizacional e definem o escopo de atuação — a forma de estar da organização e o grande objetivo de médio prazo (2-3 anos).",
    tag: "Cultura & Propósito",
  },
  {
    title: "Modelagem estratégica",
    text:
      "Modelamos a estratégia do cliente — construindo o mapa estratégico, projetos prioritários, indicadores de desempenho e metas. Aqui os OKRs e o Balanced Scorecard entram em ação para garantir clareza e mensurabilidade.",
    tag: "OKRs · BSC · Metas",
  },
  {
    title: "Engajamento & acompanhamento",
    text:
      "Disseminamos a estratégia para gestores e demais colaboradores da organização. Garantimos que todos entendam o plano, os papéis e os resultados esperados, criando alinhamento e engajamento para a execução.\nApoiamos para que os comportamentos, valores e práticas definidos no planejamento se firmem na rotina das equipes, transformando intenção em cultura real.",
    tag: "Comunicação & Cultura",
  },
];

const strategyTestimonials = [
  { src: "test_1.png", width: 708, height: 216, alt: "Depoimento de Amelia Castro sobre planejamento estratégico." },
  { src: "test_2.png", width: 708, height: 203, alt: "Depoimento de Rita Pires sobre gestão de projetos." },
  { src: "test_3.png", width: 708, height: 268, alt: "Depoimento de Bruna Fernandez sobre gestão de projetos." },
  { src: "test_4.png", width: 708, height: 214, alt: "Depoimento de cliente sobre o processo de consultoria." },
  { src: "test_5.png", width: 708, height: 263, alt: "Depoimento de cliente sobre resultados após o processo." },
  { src: "test_6.png", width: 708, height: 167, alt: "Depoimento de cliente sobre acompanhamento estratégico." },
];

export default function StrategicPlanningConsultingPage() {
  return (
    <>
      <Header />
      <main>
        <ConsultingHero
          eyebrow="Planejamento estratégico"
          eyebrowHighlight="Consultoria estratégica"
          image="/images/consulting/strategy/strategy_hero.png"
          imageFit="contain-height"
          scrimVariant="strategy"
          primaryCta={{
            label: "Quero falar com Bell",
            href: contactClientsHref,
          }}
          title={
            <>
              Planejamento
              <br />
              Estratégico
            </>
          }
          description={
            <>
              Direção clara para transformar
              <br />
              intenção em direção.
            </>
          }
        />

        <section className={styles.program} aria-labelledby="program-title">
          <div className={`container ${styles.programInner}`}>
            <h2 id="program-title">Conteúdo do programa</h2>
            <div className={styles.programList}>
              {programContent.map((item, index) => (
                <details className={styles.programCard} key={item.title}>
                  <summary>
                    <span className={styles.programNumber}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className={styles.programToggle} aria-hidden="true" />
                    <span className={styles.programTitle}>{item.title}</span>
                  </summary>
                  <div className={styles.programBody}>
                    <p className={styles.programText}>{item.text}</p>
                    <span className={styles.programTag}>{item.tag}</span>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.testimonials} aria-labelledby="strategy-testimonials-title">
          <div className={`container ${styles.testimonialsInner}`}>
            <h2 id="strategy-testimonials-title">O que dizem após o processo</h2>
            <VerticalTestimonialsCarousel
              images={strategyTestimonials}
              imageBasePath="/images/consulting/strategy"
            />
          </div>
        </section>

        <FinalCtaSection
          titleId="strategy-final-cta-title"
          href={contactClientsHref}
          buttonLabel="Solicite uma reunião para Bell entender seu momento"
          title={
            <>
              Pronto para estruturar
              <br />a sua estratégia?
            </>
          }
        />
      </main>
      <Footer />
    </>
  );
}
