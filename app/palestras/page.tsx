import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "@/components/layout/Footer/Footer";
import { Header } from "@/components/layout/Header/Header";
import { CtaButton } from "@/components/ui/CtaButton";
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
      </main>
      <Footer />
    </>
  );
}
