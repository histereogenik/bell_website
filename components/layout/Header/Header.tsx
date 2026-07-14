"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { articleSearchItems } from "@/content/search";
import { navigation } from "@/content/site";
import { BrandLogo } from "@/components/ui/BrandLogo/BrandLogo";
import {
  ChevronDownIcon,
  SearchIcon,
} from "@/components/ui/Icons";
import { HeaderSearch } from "./HeaderSearch";
import styles from "./Header.module.css";

const menuPosts = articleSearchItems.slice(0, 6);
const featuredPost =
  articleSearchItems.find((post) =>
    post.href.includes("erro-silencioso-dono-carregar-empresa"),
  ) ?? articleSearchItems[0]!;

const socialLinks = [
  {
    label: "Instagram",
    description: "Conecte-se comigo",
    href: "https://www.instagram.com/bellnacif/",
    icon: "/vectors/insta.png",
    width: 28,
    height: 28,
  },
  {
    label: "LinkedIn",
    description: "Contato profissional",
    href: "https://www.linkedin.com/in/bell-nacif/",
    icon: "/vectors/linkedin.png",
    width: 25,
    height: 28,
  },
  {
    label: "YouTube",
    description: "Conteúdo em vídeo",
    href: "https://www.youtube.com/@qsmvm-bellnacif5468",
    icon: "/vectors/yt.png",
    width: 28,
    height: 28,
  },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();

  function isActive(href: string) {
    if (href === "/") return pathname === href;
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  useEffect(() => {
    document.body.style.overflow = menuOpen || searchOpen ? "hidden" : "";

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false);
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen, searchOpen]);

  return (
    <header className={`${styles.header} ${menuOpen ? styles.menuIsOpen : ""}`}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logoLink}>
          <BrandLogo />
        </Link>

        <nav className={styles.desktopNav} aria-label="Navegação principal">
          {navigation.map((item) => (
            <div className={styles.navItem} key={item.label}>
              {"children" in item ? (
                <button
                  className={`${styles.navLink} ${
                    isActive(item.href) ? styles.active : ""
                  }`}
                  type="button"
                  aria-haspopup="true"
                >
                  {item.label}
                  <ChevronDownIcon />
                </button>
              ) : (
                <Link
                  href={item.href}
                  className={`${styles.navLink} ${
                    isActive(item.href) ? styles.active : ""
                  }`}
                >
                  {item.label}
                </Link>
              )}

              {"children" in item && (
                <div className={styles.submenu}>
                  {item.children.map((child) => (
                    <Link href={child.href} key={child.href}>
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className={styles.actions}>
          <button
            className={styles.iconButton}
            type="button"
            aria-expanded={searchOpen}
            aria-controls="header-search"
            onClick={() => {
              setMenuOpen(false);
              setSearchOpen((current) => !current);
            }}
          >
            <span className="sr-only">Buscar</span>
            <SearchIcon />
          </button>
          <button
            className={`${styles.iconButton} ${styles.menuToggleButton}`}
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => {
              setSearchOpen(false);
              setMenuOpen((current) => !current);
            }}
          >
            <span className="sr-only">
              {menuOpen ? "Fechar menu" : "Abrir menu"}
            </span>
            <span
              className={`${styles.hamburgerIcon} ${
                menuOpen ? styles.hamburgerIconOpen : ""
              }`}
              aria-hidden="true"
            >
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`${styles.mobilePanel} ${menuOpen ? styles.open : ""}`}
        aria-hidden={!menuOpen}
      >
        <nav className={styles.mobileNav} aria-label="Menu">
          {navigation.map((item) => (
            <div className={styles.mobileGroup} key={item.label}>
              {"children" in item ? (
                <button type="button">
                  {item.label}
                  <ChevronDownIcon />
                </button>
              ) : (
                <Link href={item.href} onClick={() => setMenuOpen(false)}>
                  {item.label}
                  <span aria-hidden="true">→</span>
                </Link>
              )}
              {"children" in item &&
                item.children.map((child) => (
                  <Link
                    className={styles.mobileChild}
                    href={child.href}
                    key={child.href}
                    onClick={() => setMenuOpen(false)}
                  >
                    {child.label}
                  </Link>
                ))}
            </div>
          ))}
        </nav>

        <aside className={styles.menuAside} aria-label="Conteúdos e redes">
          <div className={styles.menuContentGrid}>
          <section
            className={styles.menuFeatured}
            aria-labelledby="menu-featured"
          >
            <h2 id="menu-featured">Artigo em destaque</h2>
            <Link href={featuredPost.href} onClick={() => setMenuOpen(false)}>
              {featuredPost.image ? (
                <Image
                  src={featuredPost.image}
                  alt=""
                  width={360}
                  height={220}
                  sizes="(max-width: 1180px) 100vw, 260px"
                  aria-hidden="true"
                />
              ) : null}
                <strong>{featuredPost.title}</strong>
                <p>{featuredPost.description}</p>
              {featuredPost.duration ? (
                <small>{featuredPost.duration} min de leitura</small>
              ) : null}
            </Link>
          </section>

          <section className={styles.menuPosts} aria-labelledby="menu-posts">
            <h2 id="menu-posts">Últimos no Direto ao Ponto</h2>
            <div>
              {menuPosts.map((post) => (
                <Link
                  href={post.href}
                  key={post.href}
                  onClick={() => setMenuOpen(false)}
                >
                    <strong>{post.title}</strong>
                  {post.duration ? <small>{post.duration} min</small> : null}
                </Link>
              ))}
            </div>
          </section>
          </div>

          <section className={styles.menuSocial} aria-labelledby="menu-social">
            <h2 id="menu-social">Redes sociais</h2>
            <div>
              {socialLinks.map((social) => (
                <a
                  href={social.href}
                  key={social.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src={social.icon}
                    alt=""
                    width={social.width}
                    height={social.height}
                    aria-hidden="true"
                  />
                  <span>
                    <strong>{social.label}</strong>
                    <small>{social.description}</small>
                  </span>
                </a>
              ))}
            </div>
          </section>
        </aside>
      </div>
      <HeaderSearch open={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}
