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

const faqItems = [
  {
    question: "Além de donos de loja, a mentoria é indicada para supervisores e gerentes?",
    answer:
      "Sim. A mentoria pode ser realizada para supervisores e gerentes. Caso ocorra em grupo não são misturadas as funções.\n\nCada função tem desafios, responsabilidades e níveis de decisão diferentes. Por isso, a jornada é conduzida de forma separada, respeitando o papel de cada liderança dentro da operação.",
  },
  {
    question: "A mentoria serve para qualquer segmento do varejo?",
    answer:
      "Sim. A mentoria foi criada para lojas físicas do varejo em geral.\n\nO foco está nos fundamentos de liderança, gestão de loja, indicadores, processos, atendimento e performance comercial — temas presentes em diferentes segmentos do varejo.",
  },
  {
    question: "A empresa precisa ter processos estruturados para participar?",
    answer:
      "Não. Inclusive, muitas operações procuram a mentoria justamente porque ainda não possuem processos claros.\n\nA proposta é ajudar o líder a compreender princípios de gestão que permitam organizar melhor sua rotina, sua equipe e seus acompanhamentos, mesmo em ambientes que ainda estão em fase de estruturação.",
  },
  {
    question: "A mentoria é mais teórica ou prática?",
    answer:
      "Ambos. A mentoria tem uma abordagem prática e conectada à realidade da loja.\n\nOs participantes aprendem conceitos, princípios e ferramentas para aplicar em sua própria rotina, considerando os desafios da equipe, da operação e dos resultados que precisam conduzir no dia a dia.",
  },
  {
    question: "A mentoria serve para loja com apenas uma unidade?",
    answer:
      "Sim. A mentoria ajuda donas de lojas com uma unidade a organizarem a liderança, prepararem a equipe e criarem uma rotina comercial mais clara para vender mais sem dependência.",
  },
];

const videoTestimonials = [
  {
    name: "Priscila Chaves",
    role: "Dona lojas Frank Chaves & Olivia Chaves Calçados",
  },
  {
    name: "Everson Boeck",
    role: "Gerente de Loja",
  },
  {
    name: "Rafael Paulozo",
    role: "Gerente de Loja",
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
            <h2 id="pillars-title">
              Os pilares da jornada
              <br />
              Quem Sabe Mais Vende Mais<sup>&reg;</sup>
            </h2>
            <p className={styles.pillarsIntro}>
              Na prática, a jornada leva a liderança a evoluir em quatro
              dimensões:
            </p>
            <Image
              className={styles.pillarsImage}
              src={`${imageBase}/stats.png`}
              alt="Os quatro pilares da jornada Quem Sabe Mais Vende Mais: consciência de liderança, domínio da gestão, condução de pessoas e atendimento com método."
              width={1280}
              height={764}
            />
          </div>
          <div className={styles.pillarsFooter}>
            <p className="container">
              Os quatro pilares:{" "}
              <strong>
                consciência de liderança, domínio da gestão, condução de
                pessoas e atendimento com método
              </strong>{" "}
              ajudam o dono da loja a transformar uma operação reativa em uma
              gestão mais clara, organizada e preparada para vender com
              consistência.
            </p>
          </div>
        </section>

        <section className={styles.testimonials} aria-labelledby="testimonials-title">
          <div className={`container ${styles.testimonialsInner}`}>
            <p className={styles.testimonialsEyebrow}>O que muda depois da mentoria</p>
            <h2 id="testimonials-title">Transformações reais</h2>

            <div className={styles.camilaTestimonial}>
              <div className={styles.camilaQuote}>
                <Image
                  className={styles.quoteIcon}
                  src={`${imageBase}/abre.png`}
                  alt=""
                  width={51}
                  height={40}
                  aria-hidden="true"
                />
                <div>
                  <p>
                    Tive a oportunidade de participar de uma mentoria com a Bell
                    através da empresa em que atuava e que ela prestava
                    consultoria.
                  </p>
                  <p>
                    Quando iniciamos esse processo, eu ainda estava dando os
                    primeiros passos na gerência, embora já tivesse experiência
                    com gestão de pessoas e processos. Desde o início, a Bell
                    trouxe um conteúdo extremamente claro, estratégico e, ao
                    mesmo tempo, muito humanizado. Sua didática e olhar atento me
                    ajudaram a enxergar aspectos da gestão de negócio que eu
                    ainda precisava desenvolver.
                  </p>
                  <p>
                    Ao aplicar as técnicas aprendidas, as rotinas diárias, os
                    relatórios e o acompanhamento dos indicadores, os resultados
                    começaram a aparecer de forma muito consistente. Em pouco
                    tempo, a evolução da minha equipe já era perceptível,
                    refletindo diretamente nos nossos resultados.
                    <br />
                    Em 11 meses, alcancei resultados expressivos e fui promovida
                    ao cargo de Supervisora Comercial. E, mais uma vez, tive o
                    privilégio de ser desenvolvida pela Bell nessa nova etapa da
                    minha trajetória profissional.
                  </p>
                  <p>
                    Foi incrível aprender novas estratégias, técnicas e formas de
                    execução para esse novo desafio. Eu acompanhava cada
                    orientação com muita atenção, porque além de transmitir
                    conhecimento, ela compartilhava experiência prática e uma
                    visão de alta performance que transformava os desafios do dia
                    a dia em oportunidades de solução e crescimento. Sem dúvida,
                    foi um período de muito aprendizado, desenvolvimento e
                    evolução.
                  </p>
                  <p>
                    Carrego comigo ensinamentos valiosos que foram confirmados
                    não apenas no conhecimento adquirido, mas principalmente nos
                    resultados que eu e minha equipe conseguimos alcançar ao
                    longo dessa jornada. É difícil resumir o que vivi, porque a
                    Bell é MARAVILHOSAAAA não dá pra resumir, não!!
                  </p>
                </div>
              </div>
              <figure className={styles.camilaAuthor}>
                <Image
                  src={`${imageBase}/camila.png`}
                  alt="Camila Eduardo"
                  width={278}
                  height={266}
                />
                <figcaption>
                  Camila Eduardo –<br />
                  Supervisora de Loja
                  <br />
                  Física
                </figcaption>
              </figure>
            </div>

            <div className={styles.videoGrid}>
              {videoTestimonials.map((person) => (
                <figure className={styles.videoPlaceholder} key={person.name}>
                  <div aria-label={`Vídeo de ${person.name} em breve`}>
                    <span aria-hidden="true" />
                  </div>
                  <figcaption>
                    <strong>{person.name}</strong>
                    <br />
                    {person.role}
                  </figcaption>
                </figure>
              ))}
            </div>

            <div className={styles.nanaTestimonial}>
              <figure className={styles.nanaAuthor}>
                <Image
                  src={`${imageBase}/nana.png`}
                  alt="Nana Cunha"
                  width={278}
                  height={266}
                />
                <figcaption>
                  Nana Cunha
                  <br />
                  Dona Lojas Ene Ene
                </figcaption>
              </figure>
              <div className={styles.nanaQuote}>
                <Image
                  className={styles.quoteIcon}
                  src={`${imageBase}/abre.png`}
                  alt=""
                  width={51}
                  height={40}
                  aria-hidden="true"
                />
                <div>
                  <p>
                    Quando você se joga no varejo físico e não sabe por onde
                    começar? Quando você precisa contratar um time certeiro para
                    sua nova loja e nao sabe nem o que perguntar nas entrevistas?
                    Quando você precisa determinar metas compatíveis com a
                    realidade do seu negócio e se perde nos números? Quando você
                    precisa organizar um escala de trabalho mas não tem
                    conhecimento de direito trabalhista? Quando você precisa de
                    um treinamento de vendas especializado, focado nas suas
                    individualidades e capaz de transformar a percepção do
                    cliente, mas não faz ideia em como fazer isso? E quando as
                    vezes você precisa de alguém que acredite em você mais do que
                    vc mesma? Eu tenho a resposta para todas essas perguntas:
                    Bell Nacif! A Bell não é só uma excelente estrategista em
                    gestão de vendas, a Bell entrega muito mais.
                  </p>
                  <p>
                    Ela é um daqueles seres humanos que põe a mão na massa, que
                    abraça a sua empresa como se fosse a dela, que coloca tempo,
                    dedicação e constrói junto com vc os pilares e a cultura que
                    vc quer implementar.
                  </p>
                  <p>
                    Muito grata por ter “encontrado” a Bell nesse começo de Ene
                    Ene, com sua “doçura mineira” e muita capacidade de
                    transformação ela me deu a mão e atravessou muitas
                    tempestades do meu lado.
                  </p>
                  <p>
                    Indico e recomendo a Bell para todo mundo que como eu
                    precisava de um consultoria completa para fazer seu sonho
                    virar realidade.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.deliverables} aria-labelledby="deliverables-title">
          <div className={`container ${styles.deliverablesInner}`}>
            <h2 id="deliverables-title">Para quem é a LÚMINA Gestão de Lojas</h2>
            <ul>
              <li>
                Donas de lojas que querem reduzir a dependência da operação sobre
                elas e ainda não sabem como e o quê delegar para supervisão e/ou
                gerentes;
              </li>
              <li>
                Supervisores e gerentes de lojas físicas que querem evoluir na
                liderança do varejo;
              </li>
              <li>
                Empresas que desejam desenvolver suas lideranças comerciais,
                fortalecer padrão, rotina e acompanhamento;
              </li>
              <li>Vendedores que almejam serem promovidos para gerentes;</li>
              <li>Gerentes que desejam serem promovidos para Supervisores.</li>
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
              Fortaleça sua liderança, forme pessoas mais preparadas e construa
              uma loja que venda com mais método, clareza e consistência, sem
              tudo depender só de você.
            </p>
            <CtaButton className={styles.finalCtaButton} href={contactClientsHref}>
              Quero vender mais com o meu time
            </CtaButton>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
