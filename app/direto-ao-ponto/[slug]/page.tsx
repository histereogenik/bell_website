import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer/Footer";
import { Header } from "@/components/layout/Header/Header";
import { ShareCta } from "@/components/tothepoint/ShareCta";
import { articles, getArticleBySlug, type Article } from "@/content/articles";
import styles from "./article.module.css";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/direto-ao-ponto/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) return {};

  return {
    title: `${article.title} | Bell Nacif`,
    description: article.excerpt,
  };
}

function buildShareLinks(article: Article) {
  const pageUrl = `https://bellnacif.com.br/direto-ao-ponto/${article.slug}`;
  const text = `${article.title} — um aprendizado direto ao ponto com Bell Nacif.`;
  const encodedUrl = encodeURIComponent(pageUrl);
  const encodedText = encodeURIComponent(`${text} ${pageUrl}`);
  const encodedQuote = encodeURIComponent(text);

  return [
    {
      label: "Compartilhar no WhatsApp",
      href: `https://wa.me/?text=${encodedText}`,
      icon: "/vectors/wpp.png",
      width: 28,
      height: 28,
    },
    {
      label: "Compartilhar no Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedQuote}`,
      icon: "/vectors/facebook.png",
      width: 28,
      height: 28,
    },
    {
      label: "Compartilhar no LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}&title=${encodedQuote}&summary=${encodedQuote}`,
      icon: "/vectors/linkedin2.png",
      width: 25,
      height: 28,
    },
  ];
}

export default async function ArticlePage({
  params,
}: PageProps<"/direto-ao-ponto/[slug]">) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) notFound();

  const shareLinks = buildShareLinks(article);
  const pageUrl = `https://bellnacif.com.br/direto-ao-ponto/${article.slug}`;
  const shareText = `${article.title} — um aprendizado direto ao ponto com Bell Nacif.`;

  return (
    <>
      <Header />
      <main className={styles.main}>
        <article>
          <section className={styles.hero} aria-labelledby="article-title">
            <Image
              className={styles.heroImage}
              src={article.coverImage}
              alt=""
              fill
              priority
              sizes="100vw"
              aria-hidden="true"
            />
            <div className={`container ${styles.heroInner}`}>
              <p className={styles.eyebrow}>
                <strong>Aprendizados práticos</strong> com Bell Nacif
              </p>
              <Link href="/direto-ao-ponto" className={styles.breadcrumb}>
                <span>Aprender |</span>
                <em>Direto ao Ponto</em>
                <b aria-hidden="true">→</b>
              </Link>
              <h1 id="article-title">{article.title}</h1>

              <div className={styles.heroBottom}>
                <aside className={styles.shareRail} aria-label="Compartilhar">
                  <span>Compartilhar</span>
                  <div>
                    {shareLinks.map((link) => (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={link.label}
                        key={link.label}
                      >
                        <Image
                          src={link.icon}
                          alt=""
                          width={link.width}
                          height={link.height}
                          aria-hidden="true"
                        />
                      </a>
                    ))}
                  </div>
                </aside>

                {article.learningPoints.length > 0 && (
                  <div className={styles.learningBox}>
                    <h2>O que você vai aprender</h2>
                    <ul>
                      {article.learningPoints.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className={styles.heroMeta}>
                <span>Por {article.author.toUpperCase()}</span>
                <span aria-hidden="true">•</span>
                <span className={styles.readingTime}>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 18 18"
                    fill="none"
                    aria-hidden="true"
                  >
                    <circle cx="9" cy="9" r="7" stroke="currentColor" />
                    <path
                      d="M9 5.5V9l2.5 1.7"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {article.duration} min de leitura
                </span>
              </div>
            </div>
          </section>

          <div className={`container ${styles.articleBody}`}>
            {article.sections.map((section) => (
              <section
                className={`${styles.section} ${
                  section.layout ? styles[section.layout] : ""
                }`}
                key={section.id}
              >
                {section.image && (
                  <Image
                    className={styles.sectionImage}
                    src={section.image.src}
                    alt={section.image.alt}
                    width={942}
                    height={992}
                    sizes="(max-width: 900px) 100vw, 520px"
                  />
                )}
                <div className={styles.sectionCopy}>
                  {section.title && <h2>{section.title}</h2>}
                  {section.paragraphs?.map((paragraph) => (
                    <p key={paragraph}>
                      {paragraph.split("\n").map((line, index) => (
                        <span key={line}>
                          {index > 0 && <br />}
                          {line}
                        </span>
                      ))}
                    </p>
                  ))}
                  {section.emphasis && (
                    <div className={styles.emphasis}>
                      {section.emphasis.map((line) => (
                        <strong key={line}>{line}</strong>
                      ))}
                    </div>
                  )}
                  {section.list && (
                    <ul>
                      {section.list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>
            ))}

            {article.questions && (
              <section
                className={styles.questions}
                aria-labelledby="questions-title"
              >
                <div>
                  <h2 id="questions-title">Perguntas Transformadoras da Bell</h2>
                  <p>Antes de cobrar mais da equipe, responda com sinceridade:</p>
                  <ol>
                    {article.questions.map((question) => (
                      <li key={question}>{question}</li>
                    ))}
                  </ol>
                </div>
                <div className={styles.questionPortrait}>
                  <Image
                    src="/images/home/bell_hero.webp"
                    alt="Bell Nacif"
                    width={220}
                    height={220}
                  />
                </div>
              </section>
            )}

            {article.sources && (
              <section className={styles.sources} aria-label="Fontes">
                <strong>Fontes:</strong>
                {article.sources.map((source) => (
                  <p key={source}>{source}</p>
                ))}
              </section>
            )}
          </div>
        </article>

        <ShareCta pageUrl={pageUrl} shareText={shareText} />
      </main>
      <Footer />
    </>
  );
}
