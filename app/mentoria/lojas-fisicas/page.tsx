import Image from "next/image";
import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer/Footer";
import { Header } from "@/components/layout/Header/Header";
import { CtaButton } from "@/components/ui/CtaButton";
import styles from "./page.module.css";

const contactClientsHref = "/contato/clientes";
const imageBase = "/images/mentorship_store";

export const metadata: Metadata = {
  title: "Mentoria para donos de lojas físicas | Bell Nacif",
  description:
    "Mentoria estratégica para donos de lojas que precisam preparar liderança, rotina comercial e equipe para vender com mais previsibilidade.",
};

const improvisoCards = [
  { icon: "alert_impro.png", text: "Falta de padrão no atendimento" },
  { icon: "target_impro.png", text: "Metas instáveis" },
  { icon: "people_impro.png", text: "Vendedores desmotivados" },
  { icon: "baloon_impro.png", text: "Falhas na comunicação" },
  { icon: "dizzy_impro.png", text: "Baixa autonomia dos líderes" },
  {
    icon: "recycle_impro.png",
    text: "Rotina que depende mais do esforço individual e do fluxo de clientes do que de uma gestão estruturada.",
  },
] as const;

const unlocks = [
  {
    title: "Direção da equipe",
    text: "Para reduzir desmotivação, conflitos e falta de alinhamento.",
  },
  {
    title: "Performance em vendas",
    text: "Para entender o que compromete metas, conversão e resultados.",
  },
  {
    title: "Liderança e desenvolvimento de pessoas",
    text: "Para melhorar feedbacks, acompanhamento e evolução dos times.",
  },
  {
    title: "Rotina de gestão comercial e financeira",
    text: "Para acompanhar indicadores ( KPIs), metas e performance com mais clareza.",
  },
  {
    title: "Processos, autonomia e consistência operacional",
    text: "Para reduzir improvisos, dependência do dono, falhas de execução e falta de padrão de atendimento.",
  },
];

const journeyPillars = [
  "Consciência de liderança",
  "Domínio da gestão",
  "Condução de pessoas",
  "Atendimento com método",
];

const faqItems = [
  {
    question: "Além de donos de loja, a mentoria é indicada para supervisores e gerentes?",
    answer:
      "Sim. A mentoria pode apoiar donos, líderes e gestores que precisam melhorar rotina, vendas, atendimento e condução de equipe.",
  },
  {
    question: "A mentoria serve para qualquer segmento do varejo?",
    answer:
      "Sim, desde que exista operação, equipe e necessidade de melhorar gestão, atendimento, vendas ou liderança.",
  },
  {
    question: "A empresa precisa ter processos estruturados para participar?",
    answer:
      "Não. Muitas vezes, o trabalho começa justamente organizando o que ainda depende demais da presença do dono.",
  },
  {
    question: "A mentoria é mais teórica ou prática?",
    answer:
      "É prática. O foco é transformar diagnóstico em decisões, rotina, combinados e próximos passos aplicáveis à loja.",
  },
  {
    question: "A mentoria serve para loja com apenas uma unidade?",
    answer:
      "Sim. A quantidade de unidades importa menos do que o momento da operação e o nível de dependência do dono.",
  },
];

export default function StoreMentorshipPage() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.hero} aria-labelledby="store-hero-title">
          <Image
            className={styles.heroImage}
            src={`${imageBase}/hero.png`}
            alt=""
            fill
            priority
            sizes="100vw"
            aria-hidden="true"
          />
          <div className={`container ${styles.heroInner}`}>
            <p className={styles.eyebrow}>
              <span aria-hidden="true" />
              <span>
                <strong>Lúmina Gestão de Lojas</strong> | Mentoria estratégica
                para donas de lojas físicas
              </span>
            </p>
            <h1 id="store-hero-title">
              Sua loja cresceu,
              <br />
              mas ainda
              <br />
              depende demais
              <br />
              de você?
            </h1>
            <p className={styles.description}>
              Clareza para liderar.
              <br />
              Método para a equipe vender.
              <br />
              Direção para a loja performar.
            </p>
            <p className={styles.description}>
              A LÚMINA Gestão de Lojas ajuda donas de varejo físico a saírem do
              modo “apagar incêndio” e formarem líderes e equipes comerciais
              mais preparados, organizados e responsáveis para vender mais sem
              depender da presença constante da dona.
            </p>
            <CtaButton className={styles.heroCta} href={contactClientsHref}>
              Quero saber mais sobre a mentoria
            </CtaButton>
          </div>
        </section>

        <section className={styles.reality} aria-labelledby="reality-title">
          <div className={`container ${styles.realityInner}`}>
            <h2 id="reality-title">
              A realidade das lojas físicas do varejo brasileiro
            </h2>
            <div className={styles.realityGrid}>
              <div className={styles.realityLinkedList}>
                <article>
                  <span className={styles.realityIcon} aria-hidden="true">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="8" r="3.5" stroke="currentColor" />
                      <path
                        d="M5.5 19c.9-3.4 3.1-5.3 6.5-5.3s5.6 1.9 6.5 5.3"
                        stroke="currentColor"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  <p>
                    No varejo, muitos profissionais são promovidos porque vendem
                    bem, batem metas ou se destacam na operação.
                  </p>
                </article>
                <article>
                  <span className={styles.realityIcon} aria-hidden="true">
                    <Image
                      src={`${imageBase}/up.png`}
                      alt=""
                      width={21}
                      height={20}
                    />
                  </span>
                  <p>
                    Mas vender bem não prepara, sozinho, alguém para liderar
                    pessoas, acompanhar indicadores, organizar rotinas, cobrar com
                    clareza e sustentar resultados todos os dias.
                  </p>
                </article>
                <article>
                  <span className={styles.realityIcon} aria-hidden="true">
                    <Image
                      src={`${imageBase}/Group.png`}
                      alt=""
                      width={24}
                      height={24}
                    />
                  </span>
                  <p>
                    É aí que muitas donas de lojas começam a sentir o peso do
                    crescimento: a loja vende, a equipe existe, os líderes foram
                    escolhidos, mas tudo ainda depende delas.
                  </p>
                </article>
              </div>

              <div className={styles.realityColumn}>
                <p>
                  Eu conheço essa realidade de perto. Vivi o chão de loja, a
                  pressão por metas, a formação de equipes e os desafios de
                  transformar lideranças.
                </p>
                <p>
                  A <strong>Mentoria LÚMINA Gestão de Lojas</strong> nasce de
                  mais de 20 anos da minha experiência no varejo, da vivência
                  real no chão de loja e da união entre estratégia, prática e
                  teoria — aprofundada no meu Mestrado em Varejo pela FGV-SP —
                  para formar líderes, equipes e operações mais preparadas para
                  vender com consistência.
                </p>
                <CtaButton
                  className={styles.realityCta}
                  href={contactClientsHref}
                  variant="black"
                >
                  Quero liderar melhor e vender mais
                </CtaButton>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.experiencePhoto} aria-label="Bell Nacif em palestra para o varejo">
          <Image
            src={`${imageBase}/speech_bg.png`}
            alt="Bell Nacif em apresentação para uma plateia de profissionais do varejo."
            width={1440}
            height={823}
            sizes="100vw"
          />
          <div className={styles.experienceCard}>
            <Image
              src={`${imageBase}/upup.png`}
              alt=""
              width={29}
              height={18}
              aria-hidden="true"
            />
            <div>
              <strong>20+</strong>
              <span>anos</span>
            </div>
            <p>De varejo, estratégia e resultados reais.</p>
          </div>
        </section>

        <section className={styles.improviso} aria-labelledby="improviso-title">
          <div className={`container ${styles.improvisoInner}`}>
            <h2 id="improviso-title">
              Sua loja cobra líderes preparados, mas talvez esteja formando
              líderes no improviso
            </h2>

            <div className={styles.improvisoGrid}>
              <div className={styles.improvisoCopy}>
                <p>
                  É comum que donas de lojas físicas tenham supervisores,
                  gerentes,e vendedores comprometidos, mas ainda assim sintam que
                  tudo depende delas.
                </p>
                <p>
                  A equipe se esforça.
                  <br />
                  Os líderes tentam resolver.
                  <br />A loja vende.
                </p>
                <p>
                  Mas os mesmos problemas continuam aparecendo:
                </p>
                <div className={styles.problemCards}>
                  {improvisoCards.map((card) => (
                    <article key={card.text}>
                      <span className={styles.issueIcon}>
                        <Image
                          src={`${imageBase}/${card.icon}`}
                          alt=""
                          width={51}
                          height={44}
                          aria-hidden="true"
                        />
                      </span>
                      <span>{card.text}</span>
                    </article>
                  ))}
                </div>
                <p>
                  No varejo, muitos profissionais são promovidos porque vendem
                  bem, conhecem a operação ou são de confiança da dona. Mas vender
                  bem não prepara, sozinho, alguém para liderar pessoas,
                  acompanhar indicadores, treinar vendedores e sustentar resultados.
                </p>
                <article className={styles.leadershipBox}>
                  <span className={styles.issueIcon}>
                    <Image
                      src={`${imageBase}/up_impro.png`}
                      alt=""
                      width={31}
                      height={24}
                      aria-hidden="true"
                    />
                  </span>
                  <div>
                    <h3>
                      Quando a liderança não tem método, a dona vira o centro de
                      tudo.
                    </h3>
                    <ul>
                      <li>O gerente vira bombeiro.</li>
                      <li>O supervisor vira cobrador de meta.</li>
                      <li>A equipe perde direção.</li>
                      <li>As vendas ficam instáveis.</li>
                      <li>E a dona continua apagando incêndios todos os dias.</li>
                    </ul>
                  </div>
                </article>
              </div>
              <div className={styles.storeVisual}>
                <Image
                  src={`${imageBase}/shopping.png`}
                  alt="Fachada de loja em shopping."
                  width={592}
                  height={1829}
                />
                <Image
                  className={styles.roundStamp}
                  src={`${imageBase}/bell_rounded.png`}
                  alt=""
                  width={494}
                  height={489}
                  aria-hidden="true"
                />
              </div>
            </div>

            <article className={styles.clarityBox}>
              <span className={styles.issueIcon}>
                <Image
                  src={`${imageBase}/star_impro.png`}
                  alt=""
                  width={42}
                  height={40}
                  aria-hidden="true"
                />
              </span>
              <div>
                <p>
                  O problema não é falta de esforço.
                  <br />
                  <strong>
                    É falta de clareza, rotina e desenvolvimento de liderança.
                  </strong>
                </p>
                <p>
                  A <strong>LÚMINA Gestão de Lojas</strong> ajuda donas de lojas
                  físicas a formarem líderes e equipes mais preparados para vender
                  com mais método, consistência e autonomia.
                </p>
              </div>
            </article>

            <blockquote className={styles.improvisoQuote}>
              <Image
                src={`${imageBase}/abre.png`}
                alt=""
                width={51}
                height={40}
                aria-hidden="true"
              />
              <p>
                Uma loja sem liderança preparada até pode vender. Mas dificilmente
                sustenta resultado, cultura e performance por muito tempo.
              </p>
              <Image
                src={`${imageBase}/fecha.png`}
                alt=""
                width={51}
                height={40}
                aria-hidden="true"
              />
            </blockquote>
          </div>
        </section>

        <section className={styles.unlocks} aria-labelledby="unlocks-title">
          <div className={`container ${styles.unlocksInner}`}>
            <h2 id="unlocks-title">O que destravamos na sua loja</h2>
            <p>
              A Mentoria LÚMINA Gestão de Lojas foi criada para donos de lojas
              físicas que querem organizar a operação, desenvolver líderes e
              fazer o time vender com mais consistência.
            </p>
            <div className={styles.unlockList}>
              {unlocks.map((item, index) => (
                <article key={item.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
            <p className={styles.unlocksClosing}>
              Mesmo quando a empresa ainda não possui todos os processos
              estruturados, o dono de loja aprende a criar rotina de gestão para
              organizar melhor sua equipe, acompanhar de forma estratégica os
              resultados e conduzir a loja com clareza.
            </p>
          </div>
        </section>

        <section className={styles.method} aria-labelledby="method-title">
          <div className={`container ${styles.methodInner}`}>
            <h2 id="method-title">
              O método Quem Sabe Mais Vende Mais<sup>&reg;</sup>
            </h2>
            <p>
              A LÚMINA Gestão de Lojas é conduzida pelo método Quem Sabe Mais
              Vende Mais<sup>&reg;</sup>, criado a partir de mais de 20 anos de
              experiência no varejo, do chão de loja à estratégia, na liderança
              e formação de equipes de vendas.
            </p>
            <p>
              A metodologia parte de uma ideia simples: uma loja não vende mais
              só porque cobra mais a sua equipe.
            </p>
            <p>
              Vende mais quando a liderança sabe o que observar, como conduzir
              pessoas e onde agir com método na operação.
            </p>
          </div>
        </section>

        <section className={styles.pillars} aria-labelledby="pillars-title">
          <div className={`container ${styles.pillarsInner}`}>
            <p className={styles.kicker}>Os pilares da jornada</p>
            <h2 id="pillars-title">
              Quem Sabe Mais Vende Mais<sup>&reg;</sup>
            </h2>
            <div className={styles.pillarGrid}>
              {journeyPillars.map((pillar, index) => (
                <article key={pillar}>
                  <span>{index + 1}</span>
                  <Image
                    src={`${imageBase}/Group.png`}
                    alt=""
                    width={24}
                    height={24}
                    aria-hidden="true"
                  />
                  <h3>{pillar}</h3>
                </article>
              ))}
            </div>
            <p className={styles.pillarsText}>
              Os quatro pilares: consciência de liderança, domínio da gestão,
              condução de pessoas e atendimento com método ajudam o dono da loja
              a transformar uma operação reativa em uma gestão mais clara,
              organizada e preparada para vender com consistência.
            </p>
          </div>
        </section>

        <section className={styles.testimonials} aria-labelledby="testimonials-title">
          <div className={`container ${styles.testimonialsInner}`}>
            <p className={styles.testimonialsEyebrow}>O que muda depois da mentoria</p>
            <h2 id="testimonials-title">Transformações reais</h2>
            <div className={styles.featureTestimonial}>
              <Image
                className={styles.quoteIcon}
                src="/images/metorship/aspas.png"
                alt=""
                width={51}
                height={40}
                aria-hidden="true"
              />
              <p>
                Toda a oportunidade de participar de uma mentoria com a Bell
                deveria ser obrigatória para quem trabalha com varejo. A
                conversa vira clareza, a clareza vira direção e a direção muda
                a forma como a equipe vende.
              </p>
              <figure>
                <Image
                  src={`${imageBase}/camila.png`}
                  alt="Camila"
                  width={278}
                  height={266}
                />
                <figcaption>Camila</figcaption>
              </figure>
            </div>
            <div className={styles.peopleGrid}>
              <figure>
                <Image src={`${imageBase}/nana.png`} alt="Nana Couto" width={278} height={266} />
                <figcaption>Nana Couto</figcaption>
              </figure>
              <figure>
                <Image src={`${imageBase}/camila.png`} alt="Cliente Bell Nacif" width={278} height={266} />
                <figcaption>Cliente Bell Nacif</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className={styles.deliverables} aria-labelledby="deliverables-title">
          <div className={`container ${styles.deliverablesInner}`}>
            <h2 id="deliverables-title">Para quem a LÚMINA Gestão de Lojas</h2>
            <p>Dentro da jornada, você pode trabalhar:</p>
            <ul>
              <li>clareza do papel dos líderes na operação;</li>
              <li>rotina comercial e acompanhamento de equipe;</li>
              <li>comunicação, atendimento e padrão de venda;</li>
              <li>indicadores, metas e prioridades da loja;</li>
              <li>gestão menos dependente do improviso.</li>
            </ul>
          </div>
        </section>

        <section className={styles.faq} aria-labelledby="faq-title">
          <div className={`container ${styles.faqInner}`}>
            <h2 id="faq-title">Perguntas frequentes</h2>
            <div className={styles.faqList}>
              {faqItems.map((item) => (
                <details className={styles.faqItem} key={item.question} name="store-faq">
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.finalCta} aria-labelledby="store-final-cta">
          <div className={`container ${styles.finalCtaInner}`}>
            <h2 id="store-final-cta">
              Prontos para parar de carregar
              <br />a loja nas costas?
            </h2>
            <p>
              Transforme improviso em liderança, rotina comercial e clareza para
              vender melhor.
            </p>
            <CtaButton className={styles.finalCtaButton} href={contactClientsHref} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
