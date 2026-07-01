"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigation } from "@/content/site";
import { BrandLogo } from "@/components/ui/BrandLogo/BrandLogo";
import {
  ChevronDownIcon,
  CloseIcon,
  MenuIcon,
  SearchIcon,
} from "@/components/ui/Icons";
import styles from "./Header.module.css";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  function isActive(href: string) {
    if (href === "/") return pathname === href;
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false);
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);

  return (
    <header className={styles.header}>
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
          <button className={styles.iconButton} type="button">
            <span className="sr-only">Buscar</span>
            <SearchIcon />
          </button>
          <button
            className={styles.iconButton}
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((current) => !current)}
          >
            <span className="sr-only">
              {menuOpen ? "Fechar menu" : "Abrir menu"}
            </span>
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
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
      </div>
    </header>
  );
}
