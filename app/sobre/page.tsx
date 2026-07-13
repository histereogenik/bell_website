import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "@/components/layout/Footer/Footer";
import { Header } from "@/components/layout/Header/Header";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Sobre | Bell Nacif",
  description:
    "Conheça Bell Nacif, especialista em vendas humanizadas, liderança, varejo e desenvolvimento de pessoas.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.hero} aria-labelledby="about-title">
          <Image
            className={styles.heroBackground}
            src="/images/about/about_bg.png"
            alt=""
            fill
            loading="eager"
            sizes="100vw"
            aria-hidden="true"
          />
          <div className={`container ${styles.heroInner}`}>
            <h1 id="about-title" aria-label="Bell Nacif">
              <span>Bell</span>
              <span>Nacif</span>
            </h1>
            <Image
              className={styles.heroPortrait}
              src="/images/about/picture_hero.png"
              alt="Bell Nacif sorrindo."
              width={701}
              height={767}
              loading="eager"
              sizes="(max-width: 760px) 74vw, (max-width: 1180px) 48vw, 701px"
            />
          </div>
        </section>

        <section className={styles.origin} aria-labelledby="origin-title">
          <div className={`container ${styles.originInner}`}>
            <p className={styles.originMedium}>
              Antes de falar sobre cargos, números, formações ou conquistas, eu
              preciso te dizer de onde tudo isso realmente veio.
            </p>

            <p className={styles.originLarge}>Veio do chão de loja.</p>

            <p className={styles.originSmall}>
              Veio dos atendimentos difíceis, das metas apertadas, dos “nãos”
              recebidos com sorriso no rosto, das equipes que precisavam de
              direção e dos clientes que, antes de comprarem qualquer produto,
              queriam ser percebidos como pessoas.
            </p>

            <p className={styles.originMedium}>
              Foi ali que eu aprendi uma verdade que nunca mais me abandonou:
            </p>

            <p className={styles.originLarge}>a verdade vende.</p>

            <p className={styles.originSmall}>
              Mas ela só vende quando existe escuta.
              <br />
              Quando existe interesse genuíno.
              <br />
              Quando existe presença, preparo e coragem para conduzir pessoas,
              não apenas cobrar delas.
            </p>

            <p className={styles.originMedium}>
              Ao longo de mais de duas décadas no varejo, eu entendi que cliente
              não é meta.
            </p>

            <p className={styles.originLarge}>
              Cliente é <span>PESSOA.</span>
            </p>

            <p className={styles.originSmall}>
              E que vendedor também não é apenas força de venda. São pessoas que
              precisam ser conduzidas, encorajadas e desenvolvidas para
              conseguirem entregar o melhor de si.
            </p>

            <p className={styles.originMedium}>
              Foi essa percepção que transformou a minha forma de vender, liderar
              e formar equipes.
            </p>

            <p className={styles.originSmall}>
              E é por isso que a minha história não é apenas sobre crescimento
              profissional.
            </p>

            <p className={styles.originMedium}>
              É sobre o caminho que me ensinou que negócios crescem quando
              pessoas são bem conduzidas.
            </p>

            <div className={styles.originClosing}>
              <h2 id="origin-title">
                Pessoas no centro.
                <br />
                Resultados no topo.
              </h2>
              <p>Com verdade,</p>
              <Image
                src="/images/about/signature.png"
                alt="Bell"
                width={170}
                height={101}
              />
            </div>
          </div>
        </section>

        <section className={styles.quoteSection} aria-label="Frase de Bell Nacif">
          <div className={`container ${styles.quoteCard}`}>
            <blockquote>
              <Image
                src="/images/about/aspas_grey.png"
                alt=""
                width={98}
                height={76}
                aria-hidden="true"
              />
              <p>
                Transformar negócios é sobre transformar{" "}
                <span>PESSOAS.</span>
                <br />É com elas que os resultados acontecem.”
              </p>
              <footer>
                <span aria-hidden="true" />
                Bell Nacif
              </footer>
            </blockquote>
          </div>
        </section>

        <section className={styles.story} aria-labelledby="story-title">
          <div className={`container ${styles.storyInner}`}>
            <div className={styles.storyCopy}>
              <h2 id="story-title">Minha história</h2>
              <p>
                Minha primeira escola de atendimento e vendas não teve vitrine,
                caixa ou meta.
              </p>
              <p>
                Teve tecidos sobre a mesa, tesouras, moldes, alfinetes e
                mulheres entrando para provar roupas que carregavam muito mais do
                que medidas.
              </p>
              <p>
                Ainda menina, em Barroso, uma pequena cidade de Minas Gerais, eu
                observava minha mãe costurar peças sob medida para nossa família
                e clientes.
              </p>
              <p>
                Entre provas de roupa, ajustes e expectativas, eu via algo que,
                naquela época, ainda não sabia nomear.
              </p>
              <p className={styles.storyEmphasis}>
                Minha mãe não entregava apenas roupas.
              </p>
              <p className={styles.storyEmphasis}>Ela entregava cuidado.</p>
              <p className={styles.storyBig}>
                Ali, eu aprendi uma das verdades que guiariam toda a minha
                trajetória:
              </p>
            </div>

            <div className={styles.storyMural}>
              <figure className={styles.storyRoom}>
                <Image
                  src="/images/about/room.png"
                  alt="Mesa de costura com moldes e tecidos."
                  width={1441}
                  height={1081}
                  sizes="(max-width: 980px) 100vw, 52vw"
                />
              </figure>
              <p className={styles.storyMuralText}>
                Pessoas querem ser vistas, ouvidas e bem cuidadas.
              </p>
              <figure className={styles.storyKid}>
                <Image
                  src="/images/about/kid.png"
                  alt="Bell Nacif criança usando vestido confeccionado por sua mãe."
                  width={721}
                  height={967}
                  sizes="(max-width: 980px) 48vw, 24vw"
                />
                <figcaption>Eu com vestido confeccionado por minha mãe</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className={styles.retailStart} aria-label="Início da carreira no varejo">
          <div className={`container ${styles.retailStartInner}`}>
            <div className={styles.retailStartCopy}>
              <p>
                Anos depois, aos 19 anos, me mudei para Belo Horizonte para
                estudar e trabalhar.
              </p>
              <p>
                Foi quando comecei minha carreira no varejo, como vendedora, em
                marcas do Grupo Mineiro de Moda.
              </p>
              <p className={styles.retailStartLarge}>
                Eu não comecei liderando grandes operações.
              </p>
              <p className={styles.retailStartLarge}>Comecei no chão de loja.</p>
              <p>
                Atendendo clientes, organizando produtos, limpando, ouvindo
                “não”, batendo metas, errando, aprendendo e voltando no dia
                seguinte com mais repertório, mais escuta e mais coragem.
              </p>
            </div>

            <figure className={styles.retailStartFigure}>
              <Image
                src="/images/about/fashion.png"
                alt="Bell Nacif jovem com colegas no varejo de moda."
                width={946}
                height={978}
                sizes="(max-width: 860px) 100vw, 45vw"
              />
              <figcaption>
                <strong>2000 |</strong> Como vendedora responsável junto com
                minha equipe, fazendo de uma situação difícil uma brincadeira.
              </figcaption>
            </figure>
          </div>
        </section>

        <section className={styles.serviceTruth} aria-label="Vender é servir com direção">
          <div className={`container ${styles.serviceTruthInner}`}>
            <div className={styles.serviceTruthStatement}>
              <p className={styles.serviceTruthMedium}>
                Foi ali que descobri uma verdade que nunca mais me abandonou:
              </p>
              <p className={styles.serviceTruthLarge}>vender não é empurrar.</p>
              <p className={styles.serviceTruthOrange}>
                Vender é servir
                <br />
                com direção.
              </p>
            </div>

            <div className={styles.serviceTruthCopy}>
              <p>
                Ao longo de mais de duas décadas, passei por empresas como Arezzo,
                Viva Vida, Zoomp, Vivaz, Luigi Bertolli, Cori, Shoulder,
                Altenburg, Chicco, Carrefour, entre outras.
              </p>
              <p>Cresci dentro da operação.</p>
              <p>
                Vendi, liderei, formei equipes, acompanhei metas, estruturei
                processos e conduzi negócios em diferentes segmentos, do mercado
                de moda de luxo, serviços aos produtos alimentares.
              </p>
              <p className={styles.serviceTruthHighlight}>
                Com o tempo, cheguei à posição de Head de Vendas e Operações de
                marcas nacionais e internacionais, liderando operações
                responsáveis por faturamentos superiores a R$ 100 milhões ao ano.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.peoplePreparation} aria-label="Preparação de pessoas">
          <div className={`container ${styles.peoplePreparationInner}`}>
            <div className={styles.preparationBoard}>
              <figure className={styles.boardOne}>
                <Image
                  src="/images/about/board_1.png"
                  alt="Bell Nacif com equipe de gerentes celebrando resultados."
                  width={1057}
                  height={794}
                  sizes="(max-width: 900px) 100vw, 42vw"
                />
                <figcaption>
                  2010 | Com parte do meu time de gerentes de lojas celebrando
                  resultados.
                </figcaption>
              </figure>
              <figure className={styles.boardTwo}>
                <Image
                  src="/images/about/board_2.png"
                  alt="Bell Nacif com equipe em mesa de restaurante."
                  width={928}
                  height={1234}
                  sizes="(max-width: 900px) 100vw, 28vw"
                />
                <figcaption>
                  2018 | Comemorando crescimento de vendas com minha equipe de
                  gerentes de lojas.
                </figcaption>
              </figure>
              <figure className={styles.boardThree}>
                <Image
                  src="/images/about/board_3.png"
                  alt="Bell Nacif com equipe em treinamento."
                  width={968}
                  height={730}
                  sizes="(max-width: 900px) 100vw, 32vw"
                />
                <figcaption>2017 | Sempre acreditando em Pessoas.</figcaption>
              </figure>
            </div>

            <div className={styles.peoplePreparationCopy}>
              <p className={styles.preparationMedium}>
                Mas a minha história nunca foi apenas sobre crescimento
                profissional.
              </p>
              <p className={styles.preparationMedium}>
                Foi sobre enxergar o que muitos negócios ainda negligenciam.
              </p>
              <div className={styles.preparationSmallGroup}>
                <p>
                  Durante anos, vi empresas cobrarem resultado sem preparar
                  verdadeiramente quem precisava entregar.
                </p>
                <p>
                  Vi vendedores talentosos perderem força por falta de liderança.
                </p>
                <p>
                  Vi líderes bem-intencionados se perderem na pressão da meta.
                </p>
                <p>
                  Vi equipes inteiras tentando performar mais, sem clareza, sem
                  método e, muitas vezes, sem alguém que as conduzisse de verdade.
                </p>
              </div>
              <p className={styles.preparationMedium}>
                E foi nesse ponto que a minha trajetória ganhou um sentido maior.
              </p>
              <p className={styles.preparationMedium}>
                Eu entendi que o problema das vendas não está apenas na meta.
              </p>
              <p className={styles.preparationBig}>
                Está na forma como as pessoas são preparadas, conduzidas e
                encorajadas para alcançá-la.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
