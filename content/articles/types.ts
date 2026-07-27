export type ArticleTopic =
  | "Liderança"
  | "Vendas"
  | "Cultura"
  | "Estratégia"
  | "Varejo"
  | "Negociação"
  | "Indicadores"
  | "Experiência do cliente";

export type ArticleImage = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export type ArticleSection = {
  id: string;
  title?: string;
  paragraphs?: string[];
  emphasis?: string[];
  list?: string[];
  image?: ArticleImage;
  layout?: "image-left" | "image-right" | "image-right-narrow";
};

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  eyebrow: string;
  breadcrumb: string;
  topic: ArticleTopic;
  duration: number;
  coverImage: string;
  cardImagePosition: string;
  author: string;
  learningPoints: string[];
  sections: ArticleSection[];
  questionsIntro?: string;
  questions?: string[];
  sources?: string[];
};
