import { erroSilenciosoDonoCarregarEmpresaArticle } from "./erro-silencioso-dono-carregar-empresa";
import { venderNaoEEmpurrarArticle } from "./vender-nao-e-empurrar";
import type { Article } from "./types";

export type { Article, ArticleImage, ArticleSection, ArticleTopic } from "./types";

export const articles: Article[] = [
  erroSilenciosoDonoCarregarEmpresaArticle,
  venderNaoEEmpurrarArticle,
];

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}
