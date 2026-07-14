import type { Metadata } from "next";
import { ArrowRightIcon } from "@/components/ui/Icons";
import { Footer } from "@/components/layout/Footer/Footer";
import { Header } from "@/components/layout/Header/Header";
import { contact } from "@/content/site";
import { ContactPartnersForm } from "./ContactPartnersForm";
import styles from "../clientes/page.module.css";

export const metadata: Metadata = {
  title: "Contato para parcerias | Bell Nacif",
  description:
    "Entre em contato com Bell Nacif para parcerias, projetos e conexões profissionais.",
};

const whatsappHref =
  "https://wa.me/5511987884722?text=Ol%C3%A1%2C%20Bell!%20Gostaria%20de%20conversar%20sobre%20uma%20parceria%20ou%20projeto.";

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
    href: `mailto:${contact.email}?subject=Parcerias%20e%20projetos%20-%20Bell%20Nacif`,
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

export default function ContactPartnersPage() {
  return (
    <>
      <Header />
      <main>
        <section
          className={`${styles.hero} ${styles.partnerHero}`}
          aria-labelledby="partners-contact-title"
        >
          <div className={`container ${styles.heroInner}`}>
            <p className={styles.eyebrow}>
              <span aria-hidden="true" />
              Parcerias &amp; Projetos
            </p>
            <h1 id="partners-contact-title">
              Vamos somar competências em projetos que geram valor?
            </h1>
            <div className={styles.heroCopy}>
              <p>Acredito que bons projetos nascem de boas conexões.</p>
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

            <div className={styles.partnersNote}>
              <p>
                Se você deseja construir uma parceria comigo ou me convidar para
                atuar em um projeto, este é o espaço para iniciarmos uma
                conversa.
              </p>
              <p>
                Estou aberta a conexões com consultores, especialistas,
                facilitadores, mentores e empresas que atuam com seriedade em
                projetos de vendas, liderança, varejo, cultura, processos,
                experiência do cliente e desenvolvimento de equipes.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.formSection} id="formulario" aria-labelledby="form-title">
          <div className={`container ${styles.formInner}`}>
            <div className={styles.partnersFormIntro}>
              <h2 id="form-title" className="sr-only">
                Formulário para parcerias
              </h2>
              <p>
                Conte um pouco sobre você para que eu possa entender melhor como
                podemos gerar valor juntos.
              </p>
            </div>
            <ContactPartnersForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
