import Image from "next/image";
import Link from "next/link";
import { contact, footerNavigation } from "@/content/site";
import { BrandLogo } from "@/components/ui/BrandLogo/BrandLogo";
import { ArrowRightIcon } from "@/components/ui/Icons";
import styles from "./Footer.module.css";

const mediaInvitationHref =
  "https://wa.me/5511987884722?text=Ol%C3%A1%2C%20Bell!%20Gostaria%20de%20falar%20sobre%20um%20convite%20para%20podcast%20ou%20m%C3%ADdia.";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.brand}>
          <BrandLogo large />
        </div>

        <div className={styles.information}>
          <div className={styles.social}>
            <a href="#" aria-label="Instagram">
              <Image
                src="/vectors/insta.png"
                alt=""
                width={28}
                height={28}
                aria-hidden="true"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/bell-nacif/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Image
                src="/vectors/linkedin.png"
                alt=""
                width={25}
                height={28}
                aria-hidden="true"
              />
            </a>
            <a href="#" aria-label="YouTube">
              <Image
                src="/vectors/yt.png"
                alt=""
                width={28}
                height={28}
                aria-hidden="true"
              />
            </a>
          </div>

          <nav className={styles.footerNav} aria-label="Navegação do rodapé">
            {footerNavigation.map((column, index) => (
              <div key={index}>
                {column.map((item) => (
                  <Link href={item.href} key={item.href}>
                    {item.label}
                  </Link>
                ))}
              </div>
            ))}
          </nav>

          <a
            className={styles.invitation}
            href={mediaInvitationHref}
            target="_blank"
            rel="noreferrer"
            aria-label="Enviar convite para podcasts e outras mídias pelo WhatsApp"
          >
            <span className={styles.microphone} aria-hidden="true">
              <Image src="/vectors/mic.png" alt="" width={27} height={37} />
            </span>
            <p>Convites para podcasts e outras mídias.</p>
          </a>

          <address className={styles.contact}>
            <a href={contact.phoneHref}>{contact.phoneDisplay}</a>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </address>
        </div>

        <form className={styles.newsletter}>
          <div className={styles.newsletterIntro}>
            <span className={styles.mailIcon} aria-hidden="true">
              ✉
            </span>
            <div>
              <strong>Receba novidades por e-mail.</strong>
              <p>
                Conteúdos exclusivos para impulsionar liderança &amp; vendas.
              </p>
            </div>
          </div>
          <label>
            <span>Nome</span>
            <input name="name" type="text" autoComplete="name" />
          </label>
          <label>
            <span>E-mail</span>
            <input name="email" type="email" autoComplete="email" />
          </label>
          <button type="submit" aria-label="Cadastrar na newsletter">
            <ArrowRightIcon />
          </button>
        </form>
      </div>

      <div className={styles.legal}>
        <div className={`container ${styles.legalInner}`}>
          <p>© 2026 Bell Nacif. Todos os direitos reservados.</p>
          <div>
            <Link href="/politica-de-privacidade">
              Política de privacidade
            </Link>
            <Link href="/login">Login</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
