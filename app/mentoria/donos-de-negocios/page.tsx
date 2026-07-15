import Image from "next/image";
import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer/Footer";
import { Header } from "@/components/layout/Header/Header";
import { CtaButton } from "@/components/ui/CtaButton";
import { VideoThumbnail } from "@/components/ui/VideoThumbnail";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Mentoria para donos de negócios | Bell Nacif",
  description:
    "Mentoria estratégica para donos de negócios que buscam clareza para vender, liderar e crescer com direção.",
};

const contactClientsHref = "/contato/clientes";

export default function BusinessOwnersMentorshipPage() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.hero} aria-labelledby="mentorship-title">
          <Image
            className={styles.heroImage}
            src="/images/mentorship/bússola.png"
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
                <strong>Lúmina Mentoria</strong> Estratégica para donos de
                negócios
              </span>
            </p>
            <h1 id="mentorship-title">
              Clareza para
              <br />
              decidir.
              <br />
              Direção para o
              <br />
              vender, liderar
              <span className={styles.desktopOnly}> e</span>
              <br />
              <span className={styles.mobileOnly}>e </span>
              crescer.
            </h1>
            <p className={styles.description}>
              Mentoria estratégica para donos de negócios que buscam tomar
              decisões com mais segurança, entender onde o negócio está travando
              e transformar ruídos em próximos passos claros para vender,
              liderar e crescer com direção.
            </p>
            <CtaButton className={styles.heroCta} href={contactClientsHref} />
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
              <CtaButton
                className={styles.introCta}
                href={contactClientsHref}
                variant="black"
              />
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
                  src="/images/mentorship/person.png"
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
                  src="/images/mentorship/octicon_goal.png"
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
                  src="/images/mentorship/gear.png"
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
                  src="/images/mentorship/notebook.png"
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
                A LÚMINA não
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
              src="/images/mentorship/piramide.png"
              alt="Os 3 pilares Lúmina: direcionamento e distância, análise de perfil e padrões de decisão, escuta e leitura de cenário."
              width={694}
              height={596}
            />

            <CtaButton
              className={styles.pillarsCta}
              href={contactClientsHref}
              variant="black"
            />
          </div>
        </section>

        <section className={styles.strategicJourney}>
          <div className={`container ${styles.strategicJourneyInner}`}>
            <ul className={styles.journeyList} aria-label="O que a mentoria não é">
              <li>
                <Image
                  src="/images/mentorship/x.png"
                  alt=""
                  width={15}
                  height={13}
                  aria-hidden="true"
                />
                <span>Não é fórmula pronta.</span>
              </li>
              <li>
                <Image
                  src="/images/mentorship/x.png"
                  alt=""
                  width={15}
                  height={13}
                  aria-hidden="true"
                />
                <span>Não é palestra motivacional.</span>
              </li>
              <li>
                <Image
                  src="/images/mentorship/x.png"
                  alt=""
                  width={15}
                  height={13}
                  aria-hidden="true"
                />
                <span>
                  Não é um método engessado
                  <br />
                  igual para todo mundo.
                </span>
              </li>
              <li>
                <Image
                  src="/images/mentorship/x.png"
                  alt=""
                  width={15}
                  height={13}
                  aria-hidden="true"
                />
                <span>
                  Não é uma lista de tarefas
                  <br />
                  que ignora sua realidade.
                </span>
              </li>
            </ul>

            <p className={styles.journeyStatement}>
              É uma jornada
              <br />
              estratégica,
              <br />
              personalizada e
              <br />
              prática para
              <br />
              clarear decisões e
              <br />
              orientar ações.
            </p>
          </div>
        </section>

        <section className={styles.testimonials} aria-labelledby="testimonials-title">
          <div className={`container ${styles.testimonialsInner}`}>
            <p className={styles.testimonialsEyebrow}>
              O que muda depois da mentoria
            </p>
            <h2 id="testimonials-title">Transformações reais</h2>

            <div className={styles.testimonialMain}>
              <div className={styles.testimonialText}>
                <Image
                  className={styles.quoteIcon}
                  src="/images/mentorship_store/abre.png"
                  alt=""
                  width={51}
                  height={40}
                  aria-hidden="true"
                />
                <div>
                  <p>
                    A Bell apareceu na minha vida num momento de instabilidade,
                    dúvidas, medos e incertezas.
                    <br />
                    Ela me ensinou a enxergar a vida por outro ângulo, o ângulo
                    do autoconhecimento.
                  </p>
                  <p>
                    Com a mentoria dela, eu pude recalcular a rota da minha
                    vida, evitar muitos erros e acelerar o resultado de sucesso
                    que todos procuram. Bell é transparente, fala a verdade,
                    fala com amor. Em nossas sessões de mentoria ela me fez
                    conhecer uma força que eu não sabia que eu tinha e que eu
                    podia usar a meu favor. Bell, acompanha de perto, pega na
                    mão se precisar, é acessível e com muito respeito valoriza
                    um dos bens mais preciosos que temos: o nosso tempo.
                  </p>
                  <p>
                    Acredito que eu esteja vivendo hoje um momento único na
                    minha carreira, e se não fosse pela mentoria da Bell Nacif,
                    de duas, uma, ou eu não estaria vivendo isso ou esse momento
                    demoraria muitos anos para chegar.
                  </p>
                </div>
              </div>

              <figure className={styles.testimonialAuthor}>
                <Image
                  src="/images/mentorship/renata.png"
                  alt="Dra. Renata Bomfim Bartolozzi"
                  width={278}
                  height={266}
                />
                <figcaption>
                  Dra. Renata Bomfim Bartolozzi
                  <br />
                  Dentista Mestre HOF
                </figcaption>
              </figure>
            </div>

            <div className={styles.videoTestimonial}>
              <figure className={styles.videoFigure}>
                <VideoThumbnail
                  className={styles.videoPlaceholder}
                  title="Chris Gontigo"
                  thumbnail="/images/mentorship/chris.png"
                  aspectRatio="430 / 628"
                  sizes="(max-width: 768px) 100vw, 430px"
                />
                <figcaption>
                  Chris Gontigo
                  <br />
                  Empresária e Escritora
                  <br />
                  Especialista em Etiqueta e Excelência Corporativa
                </figcaption>
              </figure>

              <blockquote className={styles.videoQuote}>
                <Image
                  src="/images/mentorship_store/abre.png"
                  alt=""
                  width={51}
                  height={40}
                  aria-hidden="true"
                />
                <p>
                  Eu não indico eu
                  <br />
                  assino embaixo.
                  <br />
                  Bell, sem você eu não
                  <br />
                  chegaria onde estou.”
                </p>
              </blockquote>
            </div>
          </div>
        </section>

        <section className={styles.faq} aria-labelledby="faq-title">
          <div className={`container ${styles.faqInner}`}>
            <h2 id="faq-title">Perguntas frequentes</h2>

            <div className={styles.faqList}>
              <details className={styles.faqItem} name="mentorship-faq">
                <summary>A mentoria é igual para todo mundo?</summary>
                <p>
                  Não. Cada jornada é construída a partir do perfil da pessoa e
                  do momento do negócio.
                </p>
              </details>

              <details className={styles.faqItem} name="mentorship-faq">
                <summary>
                  Preciso saber exatamente qual é o meu problema?
                </summary>
                <p>
                  Não. Muitas vezes, o primeiro passo é justamente organizar o
                  que está confuso.
                </p>
              </details>

              <details className={styles.faqItem} name="mentorship-faq">
                <summary>É mais vendas ou gestão?</summary>
                <p>
                  Depende do que o seu momento pedir. Podemos trabalhar vendas,
                  posicionamento, processos, liderança, precificação, proposta
                  ou rotina comercial.
                </p>
              </details>

              <details className={styles.faqItem} name="mentorship-faq">
                <summary>Vou receber um plano pronto?</summary>
                <p>
                  Não. Você constrói caminhos com orientação, considerando sua
                  realidade, seu perfil e sua capacidade de execução.
                </p>
              </details>
            </div>
          </div>
        </section>

        <section className={styles.finalCta} aria-labelledby="final-cta-title">
          <div className={`container ${styles.finalCtaInner}`}>
            <h2 id="final-cta-title">
              Quer parar de decidir no
              <br />
              escuro e sozinho?
            </h2>
            <p>
              Imagine conduzir o negócio com clareza sobre o que priorizar,
              <br />
              quais decisões tomar e quais ajustes podem destravar vendas,
              <br />
              processos e liderança.
            </p>
            <CtaButton
              className={styles.finalCtaButton}
              href={contactClientsHref}
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
