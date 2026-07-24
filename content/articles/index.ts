import { erroSilenciosoDonoCarregarEmpresaArticle } from "./erro-silencioso-dono-carregar-empresa";
import { quandoOSucessoPedeMaisEstruturaArticle } from "./quando-o-sucesso-pede-mais-estrutura";
import { venderNaoEEmpurrarArticle } from "./vender-nao-e-empurrar";
import { voceConheceOsNumerosDoSeuNegocioArticle } from "./voce-conhece-os-numeros-do-seu-negocio";
import type { Article } from "./types";

export type { Article, ArticleImage, ArticleSection, ArticleTopic } from "./types";

export const articles: Article[] = [
  erroSilenciosoDonoCarregarEmpresaArticle,
  venderNaoEEmpurrarArticle,
  quandoOSucessoPedeMaisEstruturaArticle,
  voceConheceOsNumerosDoSeuNegocioArticle,
];

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}
