import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer/Footer";
import { Header } from "@/components/layout/Header/Header";
import { articles } from "@/content/articles";
import styles from "./article.module.css";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/direto-ao-ponto/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);

  if (!article) return {};

  return {
    title: `${article.title} | Bell Nacif`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({
  params,
}: PageProps<"/direto-ao-ponto/[slug]">) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);

  if (!article) notFound();

  return (
    <>
      <Header />
      <main className={styles.main}>
        <article className={`container ${styles.article}`}>
          <Link href="/direto-ao-ponto" className={styles.back}>
            ← Voltar para os aprendizados
          </Link>
          <p className={styles.meta}>
            {article.topic} · {article.duration} minutos
          </p>
          <h1>{article.title}</h1>
          <p className={styles.lead}>{article.excerpt}</p>
          <div
            className={styles.cover}
            style={{ backgroundPosition: article.imagePosition }}
            aria-hidden="true"
          />
          <p className={styles.notice}>
            Este conteúdo está pré-criado e será desenvolvido na próxima etapa
            editorial.
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
