"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { FormEvent } from "react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  quickAccessItems,
  recentSearchArticles,
  searchItems,
  type SearchItem,
} from "@/content/search";
import { ArrowRightIcon, CloseIcon } from "@/components/ui/Icons";
import styles from "./Header.module.css";

type HeaderSearchProps = {
  open: boolean;
  onClose: () => void;
};

function normalizeSearchText(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function buildSearchText(item: SearchItem) {
  return normalizeSearchText(
    [item.title, item.description, item.type, ...item.keywords].join(" "),
  );
}

const searchableItems = searchItems.map((item) => ({
  item,
  searchText: buildSearchText(item),
}));

function ResultCard({
  item,
  onSelect,
}: {
  item: SearchItem;
  onSelect: () => void;
}) {
  return (
    <Link className={styles.searchResult} href={item.href} onClick={onSelect}>
      <span className={styles.searchResultType}>{item.type}</span>
      <strong>{item.title}</strong>
      <span>{item.description}</span>
    </Link>
  );
}

function ArticleCard({
  item,
  onSelect,
}: {
  item: SearchItem;
  onSelect: () => void;
}) {
  return (
    <Link className={styles.searchArticle} href={item.href} onClick={onSelect}>
      {item.image ? (
        <Image
          src={item.image}
          alt=""
          width={86}
          height={62}
          sizes="86px"
          aria-hidden="true"
        />
      ) : (
        <span className={styles.searchArticlePlaceholder} aria-hidden="true" />
      )}
      <span>
        <em>{item.type}</em>
        <strong>{item.title}</strong>
        {typeof item.duration === "number" ? (
          <small>{item.duration} min de leitura</small>
        ) : null}
      </span>
    </Link>
  );
}

export function HeaderSearch({ open, onClose }: HeaderSearchProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const closeSearch = useCallback(() => {
    setQuery("");
    onClose();
  }, [onClose]);

  const results = useMemo(() => {
    const normalizedQuery = normalizeSearchText(query);

    if (!normalizedQuery) return [];

    return searchableItems
      .filter(({ searchText }) => searchText.includes(normalizedQuery))
      .map(({ item }) => item)
      .slice(0, 8);
  }, [query]);

  useEffect(() => {
    if (!open) return;

    const focusTimeout = window.setTimeout(() => {
      inputRef.current?.focus();
    }, 80);

    function handlePointerDown(event: PointerEvent) {
      if (
        panelRef.current &&
        event.target instanceof Node &&
        !panelRef.current.contains(event.target)
      ) {
        closeSearch();
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") closeSearch();
    }

    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.clearTimeout(focusTimeout);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeSearch, open]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const firstResult = results[0];

    if (firstResult) {
      closeSearch();
      router.push(firstResult.href);
    }
  }

  return (
    <div
      id="header-search"
      className={`${styles.searchLayer} ${open ? styles.searchLayerOpen : ""}`}
      aria-hidden={!open}
    >
      <div
        className={styles.searchPanel}
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Busca do site"
      >
        <form className={styles.searchForm} onSubmit={handleSubmit}>
          <label htmlFor="site-search">O que você procura?</label>
          <div className={styles.searchInputRow}>
            <input
              id="site-search"
              ref={inputRef}
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Busque por artigos, soluções, mentorias ou contato"
            />
            <button type="submit" aria-label="Buscar">
              <ArrowRightIcon size={25} />
            </button>
            <button
              type="button"
              onClick={closeSearch}
              aria-label="Fechar busca"
            >
              <CloseIcon size={22} />
            </button>
          </div>
        </form>

        {query.trim() ? (
          <div className={styles.searchResultsArea}>
            <h2>Resultados encontrados</h2>
            {results.length ? (
              <div className={styles.searchResultsGrid}>
                {results.map((item) => (
                  <ResultCard
                    item={item}
                    key={`${item.type}-${item.href}`}
                    onSelect={closeSearch}
                  />
                ))}
              </div>
            ) : (
              <p className={styles.searchEmpty}>
                Não encontrei nada com esse termo. Tente buscar por vendas,
                liderança, mentoria ou contato.
              </p>
            )}
          </div>
        ) : (
          <div className={styles.searchDefaultGrid}>
            <section aria-labelledby="quick-access-title">
              <h2 id="quick-access-title">Acessos rápidos</h2>
              <div className={styles.quickGrid}>
                {quickAccessItems.map((item) => (
                  <Link
                    className={styles.quickItem}
                    href={item.href}
                    key={item.href}
                    onClick={closeSearch}
                  >
                    <strong>{item.title}</strong>
                    <span>{item.description}</span>
                    <ArrowRightIcon size={16} />
                  </Link>
                ))}
              </div>
            </section>

            <section aria-labelledby="recent-articles-title">
              <h2 id="recent-articles-title">Artigos recentes</h2>
              <div className={styles.searchArticles}>
                {recentSearchArticles.map((item) => (
                  <ArticleCard
                    item={item}
                    key={item.href}
                    onSelect={closeSearch}
                  />
                ))}
              </div>
            </section>
          </div>
        )}
      </div>
    </div>
  );
}
