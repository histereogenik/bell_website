import type { Metadata } from "next";
import Image from "next/image";
import { ConsultingHero } from "@/components/consulting/ConsultingHero";
import { FinalCtaSection } from "@/components/layout/FinalCtaSection";
import { Footer } from "@/components/layout/Footer/Footer";
import { Header } from "@/components/layout/Header/Header";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Análise de plantas PDV | Bell Nacif",
  description:
    "Consultoria estratégica para alinhar projeto de arquitetura, visão comercial e experiência do cliente no ponto de venda.",
};

const contactClientsHref = "/contato/clientes";

const processSteps = [
  {
    title: "Alinhamentos com as equipes de produtos, VM comercial",
    text:
      "Entendemos os objetivos do negócio para garantir que o espaço sirva à estratégia.",
  },
  {
    title: "Análise da planta comercial com o cliente",
    text:
      "Avaliamos o espaço com foco em performance e experiência de compra.",
  },
  {
    title: "Recomendações e ajustes com profissionais executores",
    text: "Contribuição para que o projeto tenha uma única visão estratégica.",
  },
  {
    title: "Acompanhamento",
    text: "Visitas em obra para garantir a execução do planejamento.",
  },
];

const processHighlights = [
  {
    icon: "house.png",
    title: "Se aplica para:",
    text: "Varejo, showrooms e espaços de experiência.",
  },
  {
    icon: "gram.png",
    title: "Integração entre áreas:",
    text: "Time de produto, visão comercial, visual merchandising integrados ao projeto.",
  },
  {
    icon: "target_analysis.png",
    title: "Resultado:",
    text: "Foco em conversão e experiência do cliente.",
  },
];

export default function PdvPlansAnalysisConsultingPage() {
  return (
    <>
      <Header />
      <main>
        <ConsultingHero
          eyebrow="Análise de plantas PDV"
          eyebrowHighlight="Consultoria estratégica"
          image="/images/consulting/analysis/analysis_hero.png"
          scrimVariant="strategy"
          ctaLayout="column"
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
              Plantas comerciais de
              <br />
              alta performance
            </>
          }
          description={
            <>
              Alinhamos o projeto de arquitetura com a visão comercial
              <br />e a experiência do cliente no seu ponto de venda (PDV)
            </>
          }
        />

        <section
          className={styles.process}
          id="como-funciona"
          aria-labelledby="analysis-process-title"
        >
          <div className={`container ${styles.processInner}`}>
            <h2 id="analysis-process-title">Como funciona o processo</h2>
            <div className={styles.processGrid}>
              <div className={styles.steps}>
                {processSteps.map((step, index) => (
                  <article className={styles.stepCard} key={step.title}>
                    <span className={styles.stepNumber}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </article>
                ))}
              </div>

              <div className={styles.highlights}>
                {processHighlights.map((item) => (
                  <article className={styles.highlightCard} key={item.title}>
                    <Image
                      src={`/images/consulting/analysis/${item.icon}`}
                      alt=""
                      width={64}
                      height={64}
                      aria-hidden="true"
                    />
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <FinalCtaSection
          titleId="analysis-final-cta-title"
          href={contactClientsHref}
          buttonLabel="Quero conversar com a Bell"
          title={
            <>
              Sua loja está pronta para vender ou
              <br />
              só para ficar bonita?
            </>
          }
          description={
            <>
              Antes de inaugurar, vamos avaliar se o seu projeto está preparado
              para
              <br />
              vender, encantar o cliente e funcionar bem na rotina da operação.
            </>
          }
        />
      </main>
      <Footer />
    </>
  );
}
