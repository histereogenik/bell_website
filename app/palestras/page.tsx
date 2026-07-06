import type { Metadata } from "next";
import Image from "next/image";
import { FinalCtaSection } from "@/components/layout/FinalCtaSection";
import { Footer } from "@/components/layout/Footer/Footer";
import { Header } from "@/components/layout/Header/Header";
import { CtaButton } from "@/components/ui/CtaButton";
import { VideoThumbnail } from "@/components/ui/VideoThumbnail";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Palestras | Bell Nacif",
  description:
    "Palestras sobre liderança, vendas e gestão humanizada para eventos, empresas e equipes comerciais.",
};

export default function TalksPage() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.hero} aria-labelledby="talks-title">
          <div className={`container ${styles.heroInner}`}>
            <h1 id="talks-title">
              Liderança e vendas
              <br />
              humanizadas no seu palco
            </h1>
            <p>Ofereça ao seu público mais do que inspiração.</p>
          </div>
        </section>

        <section className={styles.videoSection} aria-label="Vídeo de apresentação">
          <div className={`container ${styles.videoInner}`}>
            <div className={styles.videoFrame}>
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0"
                title="Vídeo placeholder de palestras"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <section className={styles.introSection} aria-labelledby="talks-intro-title">
          <div className={`container ${styles.introInner}`}>
            <h2 id="talks-intro-title">
              Boas palestras emocionam.
              <br />
              Palestras com verdade, método e vivência provocam movimento.
            </h2>

            <div className={styles.introCopy}>
              <p>
                Nas palestras de Bell Nacif, a inspiração vem acompanhada de prática,
                consciência e direção para que líderes e equipes saiam do evento com
                uma nova forma de olhar para vendas, atendimento e resultado.
              </p>
              <p>
                Com mais de 20 anos de atuação no varejo, da venda no chão de loja à
                liderança em grandes operações, Bell leva ao palco uma mensagem que
                une experiência real, vendas humanizadas, liderança e performance.
              </p>
            </div>

            <h3>Suas palestras entregam:</h3>
            <ul className={styles.deliverables}>
              <li>Conteúdo conectado à realidade das empresas;</li>
              <li>Reflexões práticas para líderes e equipes comerciais;</li>
              <li>Ferramentas simples para aplicar no dia a dia;</li>
              <li>Uma fala envolvente, humana e provocativa;</li>
              <li>Uma nova visão sobre servir, vender e liderar.</li>
            </ul>

            <p className={styles.closing}>
              Mais do que falar sobre vendas, Bell provoca pessoas e empresas a
              <br />
              venderem com mais consciência, conexão e intenção.
            </p>
          </div>
        </section>

        <section className={styles.quoteSection} aria-label="Frase de Bell Nacif">
          <div className={`container ${styles.quoteInner}`}>
            <blockquote>
              <div className={styles.quoteText}>
                <Image
                  src="/images/mentorship_store/abre.png"
                  alt=""
                  width={51}
                  height={40}
                  aria-hidden="true"
                />
                <p>
                  Vender é um ato de amor, amor
                  <br />
                  em servir aos clientes.
                </p>
              </div>
              <footer>
                <span aria-hidden="true" />
                Bell Nacif
              </footer>
            </blockquote>
          </div>
        </section>

        <section className={styles.aboutSection} aria-labelledby="talks-about-title">
          <div className={`container ${styles.aboutInner}`}>
            <Image
              className={styles.aboutImage}
              src="/images/lectures/lecture_1.png"
              alt="Bell Nacif palestrando para uma plateia em auditório."
              width={777}
              height={573}
              sizes="(max-width: 980px) calc(100vw - 40px), 777px"
            />

            <div className={styles.aboutCopy}>
              <h2 id="talks-about-title">
                Prazer, sou Sibelle Nacif,
                <br />
                mas pode me chamar de Bell
              </h2>

              <p>
                Sou Estrategista em Vendas Humanizadas, Mestre em Varejo pela
                FGV-SP, professora de Negociação e Vendas, consultora, mentora e
                palestrante.
              </p>
              <p>
                Minha trajetória foi construída entre o chão de loja, a liderança
                comercial e o desenvolvimento de pessoas.
              </p>
              <p>
                O varejo me ensinou que uma palestra só faz sentido quando inspira,
                provoca reflexão e deixa uma direção prática para quem ouve.
              </p>

              <p className={styles.highlight}>
                Eu não levo ao palco apenas uma fala bonita.
              </p>

              <p>
                Levo vivência, método e uma atenção cuidadosa ao momento da empresa,
                ao perfil do público e ao objetivo do evento.
              </p>
              <p>
                Cada apresentação é pensada para conectar líderes e equipes ao que
                realmente sustenta a performance comercial: pessoas preparadas,
                atendimento com propósito e performance consistente.
              </p>
              <p>
                A mensagem pode mudar de forma conforme o contexto e mantém a mesma
                essência: desenvolver uma forma mais humana, consciente, estratégica
                de liderar, vender e servir.
              </p>
              <p>
                Minhas palestras são indicadas para convenções, eventos corporativos,
                encontros de liderança, semanas comerciais, treinamentos de equipes,
                eventos de varejo e empresas que desejam fortalecer cultura,
                atendimento e resultados.
              </p>

              <a className={styles.trajectoryLink} href="/sobre">
                Conheça a trajetória
                <span aria-hidden="true">→</span>
              </a>

              <CtaButton className={styles.eventCta} href="/contato/clientes">
                Quero levar Bell ao meu evento
              </CtaButton>
            </div>
          </div>
        </section>

        <section className={styles.featuredSection} aria-labelledby="featured-talk-title">
          <div className={`container ${styles.featuredInner}`}>
            <div className={styles.featuredVideo}>
              <VideoThumbnail
                title="Liderança & Vendas: Do Princípio ao SIM"
                thumbnail="/images/lectures/bell_thumb.png"
                videoUrl="https://youtube.com/shorts/OnRD8NBvBvA"
                aspectRatio="478 / 774"
                sizes="(max-width: 980px) calc(100vw - 40px), 478px"
              />
            </div>

            <div className={styles.featuredCopy}>
              <p className={styles.featuredEyebrow}>Palestra em destaque</p>
              <h2 id="featured-talk-title">
                Liderança &amp; Vendas:
                <br />
                Do Princípio ao SIM
              </h2>
              <h3>
                Uma palestra sobre liderança,{" "}
                <br />
                vendas humanizadas e o caminho{" "}
                <br />
                até o SIM do cliente.
              </h3>
              <p>
                <strong>A palestra Liderança &amp; Vendas: Do Princípio ao SIM</strong>{" "}
                foi criada para empresas que desejam inspirar líderes e equipes
                comerciais a repensarem a forma como vendem, atendem e se relacionam
                com clientes.
              </p>
              <p>
                A partir de uma abordagem prática, humana e provocativa, Bell mostra
                que o resultado comercial não nasce apenas da cobrança por metas, mas
                da forma como líderes conduzem pessoas, equipes despertam interesse
                genuíno e clientes percebem valor na experiência.
              </p>
              <p>
                Uma palestra para empresas que querem fortalecer atendimento, cultura
                comercial e performance sem perder a sensibilidade humana.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.methodSection} aria-labelledby="talks-method-title">
          <div className={`container ${styles.methodInner}`}>
            <h2 id="talks-method-title">
              Por trás de cada palestra um método autoral
              <br />
              simples, humano e aplicável
            </h2>

            <div className={styles.methodList}>
              <article className={styles.methodItem}>
                <span className={styles.methodLetter}>S</span>
                <div>
                  <h3>Servir</h3>
                  <p>
                    Colocar pessoas, clientes e resultados no centro, com intenção
                    genuína de contribuir antes de vender, liderar ou convencer.
                  </p>
                </div>
              </article>

              <article className={styles.methodItem}>
                <span className={styles.methodLetter}>I</span>
                <div>
                  <h3>Interesse</h3>
                  <p>
                    Despertar curiosidade, escuta e presença real para entender o
                    outro, o contexto e as oportunidades que muitas vezes passam
                    despercebidas.
                  </p>
                </div>
              </article>

              <article className={styles.methodItem}>
                <span className={styles.methodLetter}>M</span>
                <div>
                  <h3>Meta</h3>
                  <p>
                    Conduzir a reflexão para a prática, com clareza, direção e
                    próximos passos possíveis para gerar resultado.
                  </p>
                </div>
              </article>
            </div>

            <p className={styles.methodClosing}>
              As palestras são conduzidas pelo método SIM: uma forma simples,
              prática e humana de transformar reflexão em atitude, atitude em
              relacionamento e relacionamento em resultado.
            </p>
          </div>
        </section>

        <section className={styles.reasonsSection} aria-labelledby="talks-reasons-title">
          <div className={`container ${styles.reasonsInner}`}>
            <h2 id="talks-reasons-title">
              3 motivos para levar Bell Nacif ao seu evento
            </h2>

            <div className={styles.reasonsList}>
              <article className={styles.reasonItem}>
                <span className={styles.reasonNumber}>01</span>
                <div>
                  <h3>A mineira que a plateia não esquece</h3>
                  <p>
                    Uma presença que conquista pela autenticidade, pela doçura e por
                    uma verdade que chega fácil em qualquer pessoa.
                  </p>
                  <p>
                    Bell tem uma fala próxima, envolvente e marcante, daquelas que
                    fazem a plateia rir, refletir e se reconhecer.
                  </p>
                </div>
              </article>

              <article className={styles.reasonItem}>
                <span className={styles.reasonNumber}>02</span>
                <div>
                  <h3>Conteúdo nascido do chão de loja</h3>
                  <p>
                    Vendedora, gerente, supervisora, gerente regional e head de
                    vendas &amp; operações.
                  </p>
                  <p>
                    Bell fala do que viveu.
                    <br />
                    E quando alguém fala do que viveu, a plateia sente a diferença.
                  </p>
                  <p>
                    Sua mensagem nasce da prática, mas chega ao palco com método,
                    clareza e direção.
                  </p>
                </div>
              </article>

              <article className={styles.reasonItem}>
                <span className={styles.reasonNumber}>03</span>
                <div>
                  <h3>Ferramentas que voltam com o participante</h3>
                  <p>A palestra inspira, mas não fica só na emoção.</p>
                  <p>
                    Bell entrega reflexões e caminhos simples para que líderes e
                    equipes voltem para a empresa com uma nova forma de olhar para
                    atendimento, vendas, liderança e resultado.
                  </p>
                  <p>É uma experiência humana, genuína e aplicável.</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className={styles.stagePhotoSection} aria-label="Bell Nacif palestrando em evento">
          <Image
            src="/images/lectures/lecture_2.png"
            alt="Bell Nacif no palco palestrando para uma grande plateia."
            width={1440}
            height={840}
            sizes="100vw"
            className={styles.stagePhoto}
          />
        </section>

        <section
          className={styles.talkTestimonials}
          aria-labelledby="talk-testimonials-title"
        >
          <div className={`container ${styles.talkTestimonialsInner}`}>
            <h2 id="talk-testimonials-title">O que dizem sobre as palestras</h2>

            <div className={styles.talkTestimonialsGrid}>
              <article className={`${styles.testimonialCard} ${styles.cardOrange}`}>
                <Image
                  src="/images/mentorship_store/abre.png"
                  alt=""
                  width={51}
                  height={40}
                  aria-hidden="true"
                />
                <p>Muito obrigada por me ensinar a vender com amor.</p>
                <footer>
                  <strong>Eliane Basso</strong>
                  <br />
                  Evento Prospere Falando
                </footer>
              </article>

              <article className={`${styles.testimonialCard} ${styles.cardBlackWide}`}>
                <Image
                  src="/images/mentorship_store/abre.png"
                  alt=""
                  width={51}
                  height={40}
                  aria-hidden="true"
                />
                <p>
                  Bell nos mostrou que, por trás de grandes resultados, sempre
                  existem relações genuínas.
                </p>
                <footer>
                  <strong>Evento Movimento Vida 360</strong>
                  <br />N Produções
                </footer>
              </article>

              <article className={`${styles.testimonialCard} ${styles.cardGrayFull}`}>
                <Image
                  src="/images/mentorship_store/abre.png"
                  alt=""
                  width={51}
                  height={40}
                  aria-hidden="true"
                />
                <p>
                  Linda e encantadora sua palestra. Me senti representada por uma
                  mulher tão encantadora, firme e ao mesmo tempo delicada.
                </p>
                <footer>
                  <strong>Eunice Gomes</strong>
                  <br />
                  Franqueada | Convenção Natura
                </footer>
              </article>

              <article className={`${styles.testimonialCard} ${styles.cardBlackSmall}`}>
                <Image
                  src="/images/mentorship_store/abre.png"
                  alt=""
                  width={51}
                  height={40}
                  aria-hidden="true"
                />
                <p>Queria te ouvir muito mais!</p>
                <footer>
                  <strong>Laryssa Queiroz</strong>
                  <br />
                  Evento Prospere Falando
                </footer>
              </article>

              <article className={`${styles.testimonialCard} ${styles.cardLight}`}>
                <Image
                  src="/images/mentorship_store/abre.png"
                  alt=""
                  width={51}
                  height={40}
                  aria-hidden="true"
                />
                <p>Sua palestra nos ajudou muito.</p>
                <footer>
                  <strong>Catia Oshira</strong>
                  <br />
                  Franqueada | Convenção Natura
                </footer>
              </article>

              <article className={`${styles.testimonialCard} ${styles.cardOrangeWide}`}>
                <Image
                  src="/images/mentorship_store/abre.png"
                  alt=""
                  width={51}
                  height={40}
                  aria-hidden="true"
                />
                <p>Você ilumina tudo por onde passa. Sua palestra é show demais!</p>
                <footer>
                  <strong>Erick Barbi</strong>
                  <br />
                  Evento Prospere Falando
                </footer>
              </article>
            </div>
          </div>
        </section>

        <FinalCtaSection
          title={
            <>
              Sua plateia merece uma
              <br />
              experiência que muda
              <br />
              perspectivas.
            </>
          }
          description={
            <>
              Leve a presença, a vivência e a mensagem de{" "}
              <strong>Bell Nacif</strong> para o seu próximo evento.
            </>
          }
          buttonLabel="Quero Bell no meu evento"
          href="/contato/clientes"
          titleId="talks-final-cta-title"
        />
      </main>
      <Footer />
    </>
  );
}
