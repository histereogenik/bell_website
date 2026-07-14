import type { Metadata } from "next";
import { CtaButton } from "@/components/ui/CtaButton";
import { ArrowRightIcon } from "@/components/ui/Icons";
import { Footer } from "@/components/layout/Footer/Footer";
import { Header } from "@/components/layout/Header/Header";
import { contact } from "@/content/site";
import { ContactClientsForm } from "./ContactClientsForm";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contato para clientes | Bell Nacif",
  description:
    "Entre em contato com Bell Nacif para mentoria, consultoria, palestras ou treinamentos.",
};

const whatsappHref =
  "https://wa.me/5511987884722?text=Ol%C3%A1%2C%20Bell!%20Gostaria%20de%20conversar%20sobre%20mentoria%2C%20consultoria%2C%20palestra%20ou%20treinamento.";

const directContacts = [
  {
    title: "WhatsApp",
    description: "Resposta rápida para primeiros contatos e dúvidas.",
    value: contact.phoneDisplay,
    href: whatsappHref,
    label: "Enviar mensagem",
  },
  {
    title: "E-mail",
    description: "Para propostas detalhadas e documentações formais.",
    value: contact.email,
    href: `mailto:${contact.email}?subject=Contato%20pelo%20site%20Bell%20Nacif`,
    label: "Enviar mensagem",
  },
  {
    title: "LinkedIn",
    description: "Acompanhe conteúdo e conecte-se profissionalmente.",
    value: "Bell Nacif",
    href: "https://www.linkedin.com/in/bell-nacif/",
    label: "Enviar mensagem",
  },
];

const nextSteps = [
  {
    title: "Recebemos seu contato.",
    text:
      "Sua mensagem chega diretamente para a Bell. Nenhum intermediário, nenhum sistema automatizado sem atenção humana.",
  },
  {
    title: "Analisamos sua necessidade.",
    text:
      "Cada solicitação é analisada com cuidado para entender o contexto, o tamanho do desafio e o melhor caminho de atuação.",
  },
  {
    title: "Entramos em contato para aprofundarmos.",
    text:
      "Retornaremos para agendarmos uma conversa e darmos o próximo passo juntos, com clareza do que quer alcançar.",
  },
];

export default function ContactClientsPage() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.hero} aria-labelledby="contact-title">
          <div className={`container ${styles.heroInner}`}>
            <p className={styles.eyebrow}>
              <span aria-hidden="true" />
              Contato
            </p>
            <h1 id="contact-title">Vamos conversar?</h1>
            <div className={styles.heroCopy}>
              <p>Mentoria, consultoria, palestra ou treinamento.</p>
              <p>
                Conte sobre seu momento e eu desenho o caminho mais direto entre
                você e o resultado.
              </p>
              <p>Preencha o formulário ou utilize os canais abaixo.</p>
            </div>
            <div className={styles.heroActions}>
              <CtaButton href="#formulario" className={styles.heroButton}>
                Preencher formulário
              </CtaButton>
              <CtaButton
                href="#contatos-diretos"
                variant="black"
                className={styles.heroButton}
              >
                Ver canais diretos
              </CtaButton>
            </div>
          </div>
        </section>

        <section
          className={styles.directContacts}
          id="contatos-diretos"
          aria-labelledby="direct-title"
        >
          <div className={`container ${styles.directInner}`}>
            <h2 id="direct-title">Contatos Diretos</h2>
            <div className={styles.directGrid}>
              {directContacts.map((item) => (
                <article className={styles.directCard} key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <strong>{item.value}</strong>
                  <a href={item.href} target="_blank" rel="noreferrer">
                    {item.label}
                    <ArrowRightIcon size={22} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.formSection} id="formulario" aria-labelledby="form-title">
          <div className={`container ${styles.formInner}`}>
            <div className={styles.formIntro}>
              <h2 id="form-title">Como posso ajudar?</h2>
              <p>
                Conte um pouco sobre o que você procura para que eu possa
                entender melhor sua necessidade.
              </p>
            </div>
            <ContactClientsForm />
          </div>
        </section>

        <section className={styles.nextSteps} aria-labelledby="next-title">
          <div className={`container ${styles.nextInner}`}>
            <h2 id="next-title">O que acontece depois?</h2>
            <div className={styles.nextGrid}>
              {nextSteps.map((step, index) => (
                <article key={step.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
