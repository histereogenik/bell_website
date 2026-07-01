import type { Metadata } from "next";
import Image from "next/image";
import { ConsultingHero } from "@/components/consulting/ConsultingHero";
import { FinalCtaSection } from "@/components/layout/FinalCtaSection";
import { Footer } from "@/components/layout/Footer/Footer";
import { Header } from "@/components/layout/Header/Header";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Performance 3 P's | Bell Nacif",
  description:
    "Consultoria de negócios para alinhar pessoas, processos e produtos para gerar crescimento.",
};

const contactClientsHref = "/contato/clientes";

const buildTogetherItems = [
  {
    title: (
      <>
        Mapeamento de
        <br />
        cenário
      </>
    ),
    text:
      "Para entender onde o negócio está travando, identificar oportunidades e enxergar com clareza o que precisa ser priorizado.",
  },
  {
    title: "Definição das prioridades estratégicas",
    text:
      "Para transformar diagnósticos em decisões objetivas, organizando o que deve ser feito primeiro para gerar avanço real.",
  },
  {
    title: "Definição do(s) eixo(s) estratégicos",
    text:
      "Para direcionar a atuação em Pessoas, Processos e Produtos, conforme o que o negócio mais precisa desenvolver.",
  },
];

const pillars = [
  {
    icon: "person.png",
    title: "Pessoas",
    text:
      "Desenvolvimento de habilidades, liderança, comunicação, postura comercial e cultura organizacional.\nO ativo mais valioso de qualquer negócio.",
  },
  {
    icon: "gear.png",
    title: "Processos",
    text:
      "Estruturação, padronização e ferramentas para que a operação funcione com clareza, consistência e eficiência — apoiando com segurança quem executa.",
  },
  {
    icon: "box.png",
    title: "Produtos",
    text:
      "Posicionamento, rentabilidade e análise do mix para garantir que o que a empresa vende está alinhado com quem ela quer ser e com o que o mercado exige.",
  },
];

const peopleResults = [
  "Equipes mais alinhadas e engajadas.",
  "Lideranças mais maduras e estratégicas.",
  "Atendimento consistente e memorável.",
  "Aprendizado contínuo e performance sustentável.",
];

export default function Performance3PsConsultingPage() {
  return (
    <>
      <Header />
      <main>
        <ConsultingHero
          eyebrow="Performance 3 P's"
          eyebrowHighlight="Consultoria estratégica"
          image="/images/consulting/performance/performance_hero.png"
          imageFit="contain-height"
          scrimVariant="strategy"
          primaryCta={{
            label: "Quero falar com Bell",
            href: contactClientsHref,
          }}
          title={
            <>
              PESSOAS,
              <br />
              PROCESSOS e
              <br />
              PRODUTOS
              <br />
              alinhados para gerar
              <br />
              crescimento.
            </>
          }
          description={
            <>
              Entenda como Bell Nacif pode contribuir com sua
              <br />
              empresa e desenvolver Pessoas, organizar
              <br />
              Processos e direcionar Produtos para potencializar
              <br />
              resultados.
            </>
          }
        />

        <section className={styles.buildTogether} aria-labelledby="build-together-title">
          <div className={`container ${styles.buildTogetherInner}`}>
            <h2 id="build-together-title">O que podemos construir juntos</h2>
            <div className={styles.buildTogetherIntro}>
              <p>
                Não atuo em sintomas. Atuo nas causas profundas que sabotam a
                rentabilidade, engajamento e execução.
              </p>
              <p>
                Cada solução começa pela leitura do momento do negócio e avança
                para decisões práticas, com clareza,
                <br />
                método e foco em resultado.
              </p>
            </div>
            <div className={styles.buildTogetherGrid}>
              {buildTogetherItems.map((item, index) => (
                <article key={index}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.pillars} aria-labelledby="pillars-title">
          <div className={`container ${styles.pillarsInner}`}>
            <h2 id="pillars-title">Três pilares. Um único objetivo: resultados</h2>
            <div className={styles.pillarsGrid}>
              {pillars.map((pillar) => (
                <article key={pillar.title}>
                  <Image
                    src={`/images/consulting/performance/${pillar.icon}`}
                    alt=""
                    width={64}
                    height={64}
                    aria-hidden="true"
                  />
                  <h3>{pillar.title}</h3>
                  <p>{pillar.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.peopleAxis} aria-labelledby="people-axis-title">
          <div className={`container ${styles.peopleAxisInner}`}>
            <h2 id="people-axis-title">Eixo pessoas</h2>
            <div className={styles.peopleAxisIntro}>
              <p>
                Com base no mapeamento do cenário atual, cocriamos com a empresa
                um sistema virtuoso em quatro
                <br />
                frentes que organiza, desenvolve e fortalece a atuação das
                equipes.
              </p>
              <p>
                A metodologia integra experiência do colaborador, liderança,
                atendimento e treinamento para gerar
                <br />
                soluções consistentes e aplicáveis aos desafios reais do negócio.
              </p>
            </div>
            <Image
              className={styles.peopleAxisImage}
              src="/images/consulting/performance/eixo.png"
              alt="Sistema virtuoso do eixo pessoas com organização, liderança, treinamentos e atendimento."
              width={1280}
              height={679}
            />
            <h3>Um sistema virtuoso que gera resultados</h3>
            <div className={styles.peopleResults}>
              {peopleResults.map((result) => (
                <article key={result}>
                  <Image
                    src="/images/consulting/performance/check.png"
                    alt=""
                    width={48}
                    height={48}
                    aria-hidden="true"
                  />
                  <p>{result}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.processAxis} aria-labelledby="process-axis-title">
          <div className={`container ${styles.processAxisInner}`}>
            <h2 id="process-axis-title">Eixo processos</h2>
            <p>
              Conhecendo a execução dos processos no cenário atual, organizamos
              processos com clareza e eficiência,
              <br />
              atuando em três frentes.
            </p>
            <Image
              className={styles.processAxisImage}
              src="/images/consulting/performance/process.png"
              alt="Eixo processos com estruturação, padronização e ferramentas."
              width={1280}
              height={720}
            />
          </div>
        </section>

        <section className={styles.productsAxis} aria-labelledby="products-axis-title">
          <div className={`container ${styles.productsAxisInner}`}>
            <h2 id="products-axis-title">Eixo produtos</h2>
            <p>
              Conhecendo o mix de produtos no cenário atual, desdobramos com a
              empresa três frentes de atuação:
            </p>
            <Image
              className={styles.productsAxisImage}
              src="/images/consulting/performance/products.png"
              alt="Eixo produtos com posicionamento, rentabilidade e análises."
              width={1280}
              height={533}
            />
          </div>
        </section>

        <FinalCtaSection
          titleId="performance-final-cta-title"
          href={contactClientsHref}
          buttonLabel="Quero mapear meu negócio"
          title={
            <>
              Vamos construir juntos o próximo
              <br />
              movimento do seu negócio?
            </>
          }
          description={
            <>
              Vamos identificar quais eixos precisam ser ajustados para o seu
              negócio
              <br />
              avançar com mais clareza, eficiência e resultado.
            </>
          }
        />
      </main>
      <Footer />
    </>
  );
}
