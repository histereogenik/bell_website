"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { articles } from "@/content/articles";
import { ChevronDownIcon, CloseIcon, FilterIcon } from "@/components/ui/Icons";
import styles from "./DirectToPoint.module.css";

const PAGE_SIZE = 6;

const topics = [
  "Vendas",
  "Liderança",
  "Cultura",
  "Estratégia",
  "Varejo",
  "Negociação",
  "Indicadores",
  "Experiência do cliente",
];

const durationOptions = [
  { label: "Até 5 min", value: "5", min: 0, max: 5 },
  { label: "6–10 min", value: "10", min: 6, max: 10 },
  { label: "11–15 min", value: "15", min: 11, max: 15 },
  { label: "16–20 min", value: "20", min: 16, max: 20 },
  { label: "21–30 min", value: "30", min: 21, max: 30 },
];

type FilterPopoverProps = {
  label: string;
  title: string;
  name: string;
  selectedValues: string[];
  options: Array<{ label: string; value: string }>;
  onChange: (value: string) => void;
  getDisplayValue: (values: string[]) => string;
};

function FilterPopover({
  label,
  title,
  name,
  selectedValues,
  options,
  onChange,
  getDisplayValue,
}: FilterPopoverProps) {
  const detailsRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    function closeOnOutsideClick(event: PointerEvent) {
      const details = detailsRef.current;

      if (!details?.open || !(event.target instanceof Node)) return;
      if (!details.contains(event.target)) details.open = false;
    }

    document.addEventListener("pointerdown", closeOnOutsideClick);

    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
    };
  }, []);

  const displayValue =
    selectedValues.length > 0 ? getDisplayValue(selectedValues) : label;

  return (
    <details className={styles.filterPopover} ref={detailsRef}>
      <summary>
        <span>{displayValue}</span>
        <ChevronDownIcon size={13} />
      </summary>
      <fieldset className={styles.filterMenu}>
        <legend>{title}</legend>
        {options.map((option) => (
          <label key={option.value}>
            <input
              type="checkbox"
              name={name}
              value={option.value}
              checked={selectedValues.includes(option.value)}
              onChange={() => onChange(option.value)}
            />
            <span>{option.label}</span>
          </label>
        ))}
      </fieldset>
    </details>
  );
}

function getTopicDisplayValue(values: string[]) {
  if (values.length === 1) return values[0];
  return `${values.length} tópicos`;
}

function getDurationDisplayValue(values: string[]) {
  if (values.length === 1) {
    return (
      durationOptions.find((option) => option.value === values[0])?.label ??
      `${values[0]} min`
    );
  }
  return `${values.length} durações`;
}

function matchesDurationRange(duration: number, selectedDurations: string[]) {
  if (selectedDurations.length === 0) return true;

  return selectedDurations.some((selectedDuration) => {
    const range = durationOptions.find(
      (option) => option.value === selectedDuration,
    );

    if (!range) return false;
    return duration >= range.min && duration <= range.max;
  });
}

function toggleFilterValue(currentValues: string[], nextValue: string) {
  if (currentValues.includes(nextValue)) {
    return currentValues.filter((value) => value !== nextValue);
  }

  return [...currentValues, nextValue];
}

export function ArticleExplorer() {
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [selectedDurations, setSelectedDurations] = useState<string[]>([]);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filteredArticles = useMemo(
    () =>
      articles.filter((article) => {
        const matchesTopic =
          selectedTopics.length === 0 ||
          selectedTopics.includes(article.topic);
        const matchesDuration = matchesDurationRange(
          article.duration,
          selectedDurations,
        );

        return matchesTopic && matchesDuration;
      }),
    [selectedDurations, selectedTopics],
  );

  const visibleArticles = filteredArticles.slice(0, visibleCount);
  const hasMore = visibleCount < filteredArticles.length;
  const hasActiveFilters =
    selectedTopics.length > 0 || selectedDurations.length > 0;

  function updateTopics(value: string) {
    setSelectedTopics((currentValues) => toggleFilterValue(currentValues, value));
    setVisibleCount(PAGE_SIZE);
  }

  function updateDurations(value: string) {
    setSelectedDurations((currentValues) =>
      toggleFilterValue(currentValues, value),
    );
    setVisibleCount(PAGE_SIZE);
  }

  function clearFilters() {
    setSelectedTopics([]);
    setSelectedDurations([]);
    setVisibleCount(PAGE_SIZE);
  }

  return (
    <>
      <section className={styles.filters} aria-label="Filtros de conteúdo">
        <div className={`container ${styles.filterInner}`}>
          <div className={styles.filterLabel} aria-hidden="true">
            <FilterIcon size={18} />
            <span>Filtrar</span>
          </div>

          <FilterPopover
            label="Tópicos"
            title="Selecione um tópico"
            name="topic"
            selectedValues={selectedTopics}
            options={topics.map((item) => ({ label: item, value: item }))}
            onChange={updateTopics}
            getDisplayValue={getTopicDisplayValue}
          />

          <FilterPopover
            label="Duração"
            title="Selecione uma duração"
            name="duration"
            selectedValues={selectedDurations}
            options={durationOptions.map(({ label, value }) => ({
              label,
              value,
            }))}
            onChange={updateDurations}
            getDisplayValue={getDurationDisplayValue}
          />

          {hasActiveFilters && (
            <button
              className={styles.clearFilters}
              type="button"
              onClick={clearFilters}
            >
              <CloseIcon size={14} />
              Limpar filtros
            </button>
          )}
        </div>
      </section>

      <section className={styles.articleSection} aria-labelledby="articles-title">
        <div className="container">
          <h2 id="articles-title" className="sr-only">
            Aprendizados Direto ao Ponto
          </h2>

          {visibleArticles.length > 0 ? (
            <div className={styles.grid}>
              {visibleArticles.map((article) => {
                const href = `/direto-ao-ponto/${article.slug}`;

                return (
                  <article className={styles.card} key={article.slug}>
                    <Link
                      href={href}
                      className={styles.cardImage}
                      aria-label={`Ler: ${article.title}`}
                    >
                      <Image
                        src={article.coverImage}
                        alt=""
                        fill
                        sizes="(max-width: 620px) 100vw, (max-width: 900px) 50vw, 33vw"
                        style={{ objectPosition: article.cardImagePosition }}
                        aria-hidden="true"
                      />
                    </Link>
                    <div className={styles.cardBody}>
                      <span className={styles.duration}>
                        {article.duration} minutos
                      </span>
                      <h3>
                        <Link href={href}>{article.title}</Link>
                      </h3>
                      <p className={styles.excerpt}>{article.excerpt}</p>
                      <Link className={styles.readMore} href={href}>
                        Ler aprendizado <b aria-hidden="true">→</b>
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <p className={styles.empty}>
              Nenhum aprendizado encontrado para esses filtros.
            </p>
          )}

          {hasMore && (
            <button
              className={styles.loadMore}
              type="button"
              onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
            >
              Carregar mais aprendizados
            </button>
          )}
        </div>
      </section>
    </>
  );
}
