import type { Metadata } from "next";
import Image from "next/image";
import { FinalCtaSection } from "@/components/layout/FinalCtaSection";
import { Footer } from "@/components/layout/Footer/Footer";
import { Header } from "@/components/layout/Header/Header";
import { CtaButton } from "@/components/ui/CtaButton";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Treinamentos | Bell Nacif",
  description:
    "Treinamentos em negociação e vendas com formato de workshop, exercícios práticos e aplicação orientada para equipes comerciais.",
};

export default function TrainingsPage() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.hero} aria-labelledby="trainings-title">
          <Image
            className={styles.heroImage}
            src="/images/trainings/trainings_hero.png"
            alt=""
            fill
            loading="eager"
            sizes="100vw"
            aria-hidden="true"
          />
          <div className={styles.heroScrim} aria-hidden="true" />

          <div className={`container ${styles.heroInner}`}>
            <p className={styles.eyebrow}>
              <span aria-hidden="true" />
              <span>
                <strong>Treinamentos</strong>
                {" | "}
                Vivências de Negociação &amp; Vendas
              </span>
            </p>

            <h1 id="trainings-title">
              Nada muda na venda até a
              <br />
              equipe treinar a conversa.
              <br />
              A venda melhora quando a
              <br />
              conversa melhora.
            </h1>

            <div className={styles.copy}>
              <p>
                Treinamentos conduzidos em formato de workshop, com conteúdo de
                vendas, exercícios práticos e aplicação orientada.
              </p>
              <p>
                A equipe treina abordagens, perguntas, escuta, objeções, negociação
                e condução do cliente até a decisão.
              </p>
              <p>
                Porque conhecimento em vendas não é para ficar no discurso.
                <br />É para aparecer na postura, na conversa e na ação diante do
                cliente.
              </p>
            </div>

            <CtaButton className={styles.heroCta} href="/contato/clientes">
              Quero minha equipe performando melhor
            </CtaButton>
          </div>
        </section>

        <section className={styles.foundation} aria-labelledby="foundation-title">
          <div className={`container ${styles.foundationInner}`}>
            <h2 id="foundation-title">O que sustenta os treinamentos</h2>
            <h3>Método, vivência e prática para desenvolver equipes comerciais.</h3>

            <div className={styles.foundationIntro}>
              <p>
                Os treinamentos são construídos para desenvolver pessoas em temas
                como vendas, atendimento, liderança e sucesso do cliente.
              </p>
              <p>
                A condução combina conhecimento, exercícios e situações reais para
                que a equipe amplie repertório, fortaleça postura comercial e ganhe
                mais segurança diante do cliente.
              </p>
            </div>

            <div className={styles.foundationGrid}>
              <article className={styles.foundationCard}>
                <span>01</span>
                <div>
                  <h4>Pessoas em desenvolvimento</h4>
                  <p>Trabalho habilidades, comunicação, escuta, postura e atitude comercial.</p>
                </div>
              </article>

              <article className={styles.foundationCard}>
                <span>02</span>
                <div>
                  <h4>Prática orientada</h4>
                  <p>Exercícios e situações conectadas aos desafios reais da equipe.</p>
                </div>
              </article>

              <article className={styles.foundationCard}>
                <span>03</span>
                <div>
                  <h4>Método autoral</h4>
                  <p>
                    Vendas, atendimento e liderança conduzidos a partir de
                    metodologias próprias, como o SIM — Servir, Interesse e Meta.
                  </p>
                </div>
              </article>

              <article className={styles.foundationCard}>
                <span>04</span>
                <div>
                  <h4>Aplicação no dia a dia</h4>
                  <p>
                    Conteúdos pensados para aparecer na rotina de trabalho, não
                    apenas no momento do treinamento.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className={styles.formats} aria-labelledby="formats-title">
          <div className={`container ${styles.formatsInner}`}>
            <h2 id="formats-title">Formatos de entrega</h2>
            <h3>Flexibilidade para atender a realidade da sua empresa.</h3>
            <p className={styles.formatsLead}>
              Cada treinamento pode ser adaptado ao momento da equipe, ao objetivo
              da empresa e ao formato mais adequado para gerar mudança de
              comportamento, aprendizagem e aplicação.
            </p>

            <div className={styles.formatsList}>
              <article className={styles.formatItem}>
                <span>01</span>
                <div>
                  <h4>Presencial in Company</h4>
                  <p>
                    Encontros com maior interação, presença, energia e troca entre
                    os participantes.
                  </p>
                </div>
              </article>

              <article className={styles.formatItem}>
                <span>02</span>
                <div>
                  <h4>Online ao vivo</h4>
                  <p>
                    Treinamentos conduzidos em tempo real, com participação ativa e
                    aplicação prática.
                  </p>
                </div>
              </article>

              <article className={styles.formatItem}>
                <span>03</span>
                <div>
                  <h4>Conteúdo complementar</h4>
                  <p>
                    Materiais, exercícios e trilhas de apoio para reforçar o
                    aprendizado.
                  </p>
                </div>
              </article>

              <article className={styles.formatItem}>
                <span>04</span>
                <div>
                  <h4>Híbrido</h4>
                  <p>
                    Combinação de formatos para ampliar alcance, profundidade e
                    continuidade.
                  </p>
                </div>
              </article>

              <article className={styles.formatItem}>
                <span>05</span>
                <div>
                  <h4>Observação da equipe em ação</h4>
                  <p>
                    Visita presencial para observar a operação em ação, identificar
                    oportunidades de melhoria e, quando fizer sentido, orientar e/ou
                    treinar a equipe no próprio momento.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className={styles.photoWall} aria-label="Registros dos treinamentos">
          <div className={`container ${styles.photoWallInner}`}>
            <div className={styles.photoWallGrid}>
              <div className={`${styles.photoTile} ${styles.tileOne}`}>
                <Image
                  src="/images/trainings/grid_1.png"
                  alt="Equipe reunida após treinamento conduzido por Bell Nacif."
                  fill
                  sizes="(max-width: 820px) 100vw, 31vw"
                />
              </div>

              <div className={styles.middleColumn}>
                <div className={`${styles.photoTile} ${styles.tileTwo}`}>
                  <Image
                    src="/images/trainings/trainings_hero.png"
                    alt="Bell Nacif conduzindo treinamento em sala."
                    fill
                    sizes="(max-width: 820px) 100vw, 33vw"
                  />
                </div>
                <div className={styles.middleBottom}>
                  <div className={`${styles.photoTile} ${styles.tileThree}`}>
                    <Image
                      src="/images/trainings/grid_3.png"
                      alt="Participantes exibindo certificados em loja."
                      fill
                      sizes="(max-width: 820px) 50vw, 16vw"
                    />
                  </div>
                  <div className={`${styles.photoTile} ${styles.tileFour}`}>
                    <Image
                      src="/images/trainings/grid_4.png"
                      alt="Grupo em treinamento de vendas em sala."
                      fill
                      sizes="(max-width: 820px) 50vw, 16vw"
                    />
                  </div>
                </div>
              </div>

              <div className={styles.rightColumn}>
                <div className={`${styles.photoTile} ${styles.tileFive}`}>
                  <Image
                    src="/images/trainings/grid_5.png"
                    alt="Equipe em dinâmica de treinamento."
                    fill
                    sizes="(max-width: 820px) 100vw, 31vw"
                  />
                </div>
                <div className={`${styles.photoTile} ${styles.tileSix}`}>
                  <Image
                    src="/images/trainings/grid_6.png"
                    alt="Participantes em reunião de treinamento ao redor da mesa."
                    fill
                    sizes="(max-width: 820px) 100vw, 31vw"
                  />
                </div>
                <div className={`${styles.photoTile} ${styles.tileSeven}`}>
                  <Image
                    src="/images/trainings/grid_7.png"
                    alt="Participantes posando em loja após treinamento."
                    fill
                    sizes="(max-width: 820px) 100vw, 31vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <FinalCtaSection
          title={
            <>
              Vamos desenhar juntos o
              <br />
              treinamento ideal para o
              <br />
              momento de seu negócio?
            </>
          }
          buttonLabel="Agende com Bell"
          href="/contato/clientes"
          titleId="trainings-final-cta-title"
        />
      </main>
      <Footer />
    </>
  );
}
