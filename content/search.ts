import { articles } from "./articles";

export type SearchItemType =
  | "Artigo"
  | "Contato"
  | "Consultoria"
  | "Mentoria"
  | "Página"
  | "Palestras"
  | "Treinamentos";

export type SearchItem = {
  title: string;
  description: string;
  href: string;
  type: SearchItemType;
  keywords: string[];
  image?: string;
  duration?: number;
};

export const quickAccessItems: SearchItem[] = [
  {
    title: "Mentoria",
    description: "Acelere seu desenvolvimento.",
    href: "/mentoria/donos-de-negocios",
    type: "Mentoria",
    keywords: ["mentoria", "lúmina", "negócios", "lojas", "liderança"],
  },
  {
    title: "Consultoria",
    description: "Soluções estratégicas sob medida.",
    href: "/consultoria/cultura",
    type: "Consultoria",
    keywords: ["consultoria", "cultura", "estratégia", "pdv", "performance"],
  },
  {
    title: "Palestras",
    description: "Impacto e inspiração no palco.",
    href: "/palestras",
    type: "Palestras",
    keywords: ["palestras", "eventos", "palco", "liderança", "vendas"],
  },
  {
    title: "Treinamentos",
    description: "Capacitação para times de alta performance.",
    href: "/treinamentos",
    type: "Treinamentos",
    keywords: ["treinamentos", "workshop", "vendas", "equipes", "capacitação"],
  },
];

const institutionalItems: SearchItem[] = [
  {
    title: "Home",
    description: "Conheça Bell Nacif, sua experiência e principais soluções.",
    href: "/",
    type: "Página",
    keywords: ["home", "início", "bell nacif", "clientes", "depoimentos"],
  },
  {
    title: "Direto ao Ponto",
    description: "Aprendizados práticos sobre liderança, vendas e gestão.",
    href: "/direto-ao-ponto",
    type: "Página",
    keywords: ["artigos", "aprendizados", "blog", "direto ao ponto"],
  },
  {
    title: "Mentoria para Donos de Negócios",
    description: "Clareza para decidir, vender, liderar e crescer.",
    href: "/mentoria/donos-de-negocios",
    type: "Mentoria",
    keywords: ["mentoria", "donos", "negócios", "lúmina", "gestão"],
  },
  {
    title: "Mentoria para Donas de Lojas Físicas",
    description: "Método para preparar liderança, rotina e equipe no varejo.",
    href: "/mentoria/lojas-fisicas",
    type: "Mentoria",
    keywords: ["mentoria", "lojas", "varejo", "donas", "liderança"],
  },
  {
    title: "Consultoria de Cultura",
    description: "Transforme identidade em direção, valores em comportamento e estratégia em prática.",
    href: "/consultoria/cultura",
    type: "Consultoria",
    keywords: ["consultoria", "cultura", "valores", "comportamento"],
  },
  {
    title: "Planejamento Estratégico",
    description: "Direção clara para transformar intenção em direção.",
    href: "/consultoria/planejamento-estrategico",
    type: "Consultoria",
    keywords: ["planejamento", "estratégia", "diagnóstico", "gestão"],
  },
  {
    title: "Análise Plantas PDV",
    description: "Alinhamento entre arquitetura, visão comercial e experiência do cliente.",
    href: "/consultoria/analise-plantas-pdv",
    type: "Consultoria",
    keywords: ["pdv", "plantas", "varejo", "arquitetura", "loja"],
  },
  {
    title: "Performance 3 P's",
    description: "Pessoas, processos e produtos alinhados para gerar crescimento.",
    href: "/consultoria/performance-3ps",
    type: "Consultoria",
    keywords: ["performance", "pessoas", "processos", "produtos", "crescimento"],
  },
  {
    title: "Palestras",
    description: "Liderança e vendas humanizadas para eventos e empresas.",
    href: "/palestras",
    type: "Palestras",
    keywords: ["palestras", "eventos", "liderança", "vendas"],
  },
  {
    title: "Treinamentos",
    description: "Vivências de negociação e vendas para equipes comerciais.",
    href: "/treinamentos",
    type: "Treinamentos",
    keywords: ["treinamentos", "negociação", "vendas", "equipes"],
  },
  {
    title: "Sobre Bell Nacif",
    description: "A trajetória, o método e a visão por trás do trabalho.",
    href: "/sobre",
    type: "Página",
    keywords: ["sobre", "história", "trajetória", "bell nacif", "método sim"],
  },
  {
    title: "Contato para clientes",
    description: "Fale com Bell para mentoria, consultoria, palestra ou treinamento.",
    href: "/contato/clientes",
    type: "Contato",
    keywords: ["contato", "clientes", "whatsapp", "email", "reunião"],
  },
  {
    title: "Contato para parcerias",
    description: "Converse sobre parcerias, projetos e conexões profissionais.",
    href: "/contato/parcerias",
    type: "Contato",
    keywords: ["contato", "parcerias", "projetos", "conexões"],
  },
];

export const articleSearchItems: SearchItem[] = articles.map((article) => ({
  title: article.title,
  description: article.excerpt,
  href: `/direto-ao-ponto/${article.slug}`,
  type: "Artigo",
  keywords: [
    "artigo",
    "aprendizado",
    article.topic,
    article.eyebrow,
    ...article.learningPoints,
  ],
  image: article.coverImage,
  duration: article.duration,
}));

export const searchItems: SearchItem[] = [
  ...institutionalItems,
  ...articleSearchItems,
];

export const recentSearchArticles = articleSearchItems.slice(0, 2);
