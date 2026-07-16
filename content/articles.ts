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
};

export type ArticleSection = {
  id: string;
  title?: string;
  paragraphs?: string[];
  emphasis?: string[];
  list?: string[];
  image?: ArticleImage;
  layout?: "image-left" | "image-right";
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
  questions?: string[];
  sources?: string[];
};

const defaultCoverImage = "/images/tothepoint/tothepoint_hero.webp";
const placeholderTitle = "Lorem ipsum dolor sit amet consectetur";
const placeholderExcerpt =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non sem vitae justo faucibus facilisis.";

function buildDraftSections(excerpt: string): ArticleSection[] {
  void excerpt;

  return [
    {
      id: "lorem-ipsum",
      paragraphs: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non sem vitae justo faucibus facilisis. Sed euismod, lorem at interdum viverra, nibh erat consequat magna, vitae posuere justo lacus sed neque.",
      ],
    },
  ];
}

export const articles: Article[] = [
  {
    slug: "erro-silencioso-dono-carregar-empresa",
    title: "Um erro silencioso que faz o dono carregar a empresa nas costas",
    excerpt:
      "Achar que cobrar mais é liderar melhor, quando, na verdade, a equipe precisa de clareza, processo e acompanhamento.",
    eyebrow: "Aprendizados práticos com Bell Nacif",
    breadcrumb: "Aprender | Direto ao Ponto",
    topic: "Liderança",
    duration: 6,
    coverImage: "/images/posts/erro-silencioso/hero.webp",
    cardImagePosition: "center 58%",
    author: "Bell Nacif",
    learningPoints: [
      "Por que cobrar o tempo todo não é liderança de verdade.",
      "Como desenvolver pessoas, processos e rotina para reduzir a dependência do dono.",
      "Como liderar melhor sem transformar a empresa em um peso diário.",
    ],
    sections: [
      {
        id: "abertura",
        paragraphs: [
          "Todo dono de negócio quer vender mais, atender melhor e ter uma equipe mais comprometida.",
          "Mas, na prática, muitos vivem a mesma rotina: cobram as equipes, resolvem problemas de clientes, corrigem falhas, conferem atendimento e lembram a todo momento o que precisa ser feito. Quando percebem, estão carregando a empresa inteira nas costas. O problema é que muitos empreendedores acreditam que a solução é cobrar mais.",
          "Mas existe uma grande diferença entre cobrar resultado e liderar pessoas.",
          "E quando a equipe depende do dono para tudo, o negócio até funciona. Mas funciona preso nele.",
        ],
        emphasis: [
          "Cobrança sem direção vira pressão.",
          "Cobrança sem processo vira desgaste.",
          "Cobrança sem desenvolvimento vira dependência.",
        ],
      },
      {
        id: "problema",
        title: "O verdadeiro problema não é a falta de cobrança",
        layout: "image-left",
        image: {
          src: "/images/posts/erro-silencioso/section-1.webp",
          alt: "Bell Nacif orientando uma equipe em reunião.",
        },
        paragraphs: [
          "Muitos donos dizem: “Minha equipe só faz quando eu cobro.” Mas essa frase pode revelar algo mais profundo. Talvez a equipe não saiba exatamente o que precisa fazer. Talvez não exista um padrão de atendimento. Talvez os vendedores não tenham sido treinados para negociar. Talvez ninguém acompanhe indicadores com consistência. Ou seja: o problema nem sempre é falta de vontade.",
          "Muitas vezes, é falta de clareza, processo e desenvolvimento. Quando não existe processo, o dono vira o processo. Quando não existe padrão, o dono vira o padrão. Quando não existe liderança estruturada, o dono vira o lembrete ambulante da empresa.",
          "E isso cansa.",
        ],
      },
      {
        id: "preparar",
        title: "Liderar é preparar a equipe para fazer melhor",
        paragraphs: [
          "Liderar não é estar disponível o tempo todo para resolver tudo. Liderar é construir clareza, responsabilidade, autonomia, rotina e cultura. Uma equipe boa não nasce pronta. Ela é desenvolvida. E desenvolver pessoas exige mais do que dizer: “Preciso que vocês vendam mais.”",
          "É preciso mostrar como vender melhor, como atender melhor, como resolver problemas, como medir desempenho e como agir diante das situações do dia a dia. Quando isso não acontece, a equipe trabalha no automático. E o automático quase sempre mantém o negócio no mesmo lugar.",
          "Como começar a liderar melhor na prática? Para sair da cobrança constante, organize sua liderança em três pilares:",
        ],
      },
      {
        id: "pilares",
        layout: "image-right",
        image: {
          src: "/images/posts/erro-silencioso/section-2.webp",
          alt: "Equipe acompanhando uma apresentação sobre crescimento.",
        },
        paragraphs: [
          "1. Clareza\nA equipe precisa saber exatamente o que se espera dela. Não basta dizer: “Atendam bem.” O que é atender bem na sua empresa? É receber o cliente com agilidade? É fazer perguntas antes de apresentar o produto? É oferecer produtos complementares? É acompanhar o cliente depois da compra? Quanto mais genérica for a orientação, mais genérico será o resultado. A liderança começa quando o dono transforma expectativas invisíveis em combinados claros.",
          "2. Processo\nDepois da clareza, vem o processo. Processo não precisa ser complicado. Ele pode começar com uma sequência simples. Por exemplo, no atendimento de uma loja: receber o cliente com uma abordagem padrão, entender o que ele procura, fazer perguntas para identificar necessidade, apresentar as melhores opções, oferecer complemento, finalizar a venda ou registrar o motivo da não compra. Quando existe processo, a equipe tem um caminho. E quando a equipe tem um caminho, o dono não precisa explicar tudo de novo todos os dias.",
          "3. Acompanhamento\nAcompanhar não é vigiar. Acompanhar é observar, medir, orientar e corrigir rota. Em vez de cobrar apenas quando o resultado está ruim, crie momentos simples de acompanhamento: uma conversa rápida no início do dia, uma revisão semanal de vendas, uma análise dos atendimentos perdidos, um feedback individual, um quadro com metas e indicadores. O importante é que a equipe entenda que resultado não é sorte. Resultado é consequência de comportamento, rotina e melhoria constante.",
        ],
      },
      {
        id: "sozinho",
        title: "O dono não precisa carregar tudo sozinho",
        paragraphs: [
          "Todo empreendedor começa fazendo muito. Mas existe uma fase em que o negócio precisa deixar de depender apenas da força do dono. Essa virada acontece quando a liderança deixa de ser baseada apenas em cobrança e passa a ser baseada em desenvolvimento.",
          "Desenvolver pessoas dá trabalho. Criar processos dá trabalho. Acompanhar indicadores dá trabalho.",
          "Mas carregar a empresa inteira nas costas dá muito mais. A diferença é que desenvolver a equipe constrói futuro. Cobrar sem método só repete o mesmo problema com mais desgaste.",
        ],
      },
      {
        id: "direcao",
        layout: "image-left",
        image: {
          src: "/images/posts/erro-silencioso/section-3.webp",
          alt: "Bell Nacif conduzindo conversa estratégica com uma equipe.",
        },
        paragraphs: [
          "No entanto, liderar melhor não significa cobrar menos. Significa cobrar com mais clareza, mais processo e mais direção. Uma equipe que entende o que precisa fazer, sabe como fazer e recebe acompanhamento constante tem mais chance de assumir responsabilidade. E quando isso acontece, o dono deixa de ser o centro de tudo e começa a ocupar um papel mais estratégico dentro do negócio.",
          "Porque uma empresa saudável não é aquela em que o dono resolve tudo. É aquela em que as pessoas sabem o que fazer, os processos sustentam a operação e a liderança desenvolve o crescimento.",
        ],
      },
    ],
    questions: [
      "Minha equipe sabe exatamente o que precisa fazer, como fazer e qual resultado se espera dela?",
      "Eu tenho processos claros de atendimento, vendas e rotina, ou tudo ainda depende da minha orientação diária?",
      "Eu estou desenvolvendo pessoas ou apenas cobrando resultados quando algo sai errado?",
    ],
    sources: [
      "EDMONDSON, Amy. Psychological Safety and Learning Behavior in Work Teams. Administrative Science Quarterly, 1999. Disponível em: https://doi.org/10.2307/2666999",
      "LOCKE, Edwin A.; LATHAM, Gary P. Building a Practically Useful Theory of Goal Setting and Task Motivation. American Psychologist, 2002. Disponível em: https://doi.org/10.1037/0003-066X.57.9.705",
      "DETERT, James R.; BURRIS, Ethan R. Leadership Behavior and Employee Voice. Academy of Management Journal, 2007. Disponível em: https://doi.org/10.5465/amj.2007.26279183",
    ],
  },
  {
    slug: "lideranca-que-organiza-a-rotina",
    title: placeholderTitle,
    excerpt: placeholderExcerpt,
    eyebrow: "Aprendizados práticos com Bell Nacif",
    breadcrumb: "Aprender | Direto ao Ponto",
    topic: "Liderança",
    duration: 5,
    coverImage: defaultCoverImage,
    cardImagePosition: "54% 72%",
    author: "Bell Nacif",
    learningPoints: [],
    sections: buildDraftSections(
      "Como criar acordos claros, distribuir responsabilidades e manter o time avançando com autonomia.",
    ),
  },
  {
    slug: "vender-mais-sem-depender-de-promocao",
    title: placeholderTitle,
    excerpt: placeholderExcerpt,
    eyebrow: "Aprendizados práticos com Bell Nacif",
    breadcrumb: "Aprender | Direto ao Ponto",
    topic: "Vendas",
    duration: 10,
    coverImage: defaultCoverImage,
    cardImagePosition: "88% 45%",
    author: "Bell Nacif",
    learningPoints: [],
    sections: buildDraftSections(
      "Uma visão prática sobre atendimento, percepção de valor e consistência comercial no dia a dia.",
    ),
  },
  {
    slug: "processos-simples-negocio-crescer",
    title: placeholderTitle,
    excerpt: placeholderExcerpt,
    eyebrow: "Aprendizados práticos com Bell Nacif",
    breadcrumb: "Aprender | Direto ao Ponto",
    topic: "Estratégia",
    duration: 10,
    coverImage: defaultCoverImage,
    cardImagePosition: "63% 60%",
    author: "Bell Nacif",
    learningPoints: [],
    sections: buildDraftSections(
      "Os primeiros processos que precisam sair da cabeça do dono e entrar na rotina da equipe.",
    ),
  },
  {
    slug: "equipe-sabe-o-que-espera-dela",
    title: placeholderTitle,
    excerpt: placeholderExcerpt,
    eyebrow: "Aprendizados práticos com Bell Nacif",
    breadcrumb: "Aprender | Direto ao Ponto",
    topic: "Liderança",
    duration: 5,
    coverImage: defaultCoverImage,
    cardImagePosition: "83% 18%",
    author: "Bell Nacif",
    learningPoints: [],
    sections: buildDraftSections(
      "Metas só funcionam quando cada pessoa entende prioridades, comportamento esperado e critérios de sucesso.",
    ),
  },
  {
    slug: "experiencia-cliente-comeca-bastidores",
    title: placeholderTitle,
    excerpt: placeholderExcerpt,
    eyebrow: "Aprendizados práticos com Bell Nacif",
    breadcrumb: "Aprender | Direto ao Ponto",
    topic: "Experiência do cliente",
    duration: 5,
    coverImage: defaultCoverImage,
    cardImagePosition: "93% 70%",
    author: "Bell Nacif",
    learningPoints: [],
    sections: buildDraftSections(
      "Organização, repertório e segurança da equipe também fazem parte da experiência que chega ao consumidor.",
    ),
  },
  {
    slug: "reunioes-que-geram-decisao",
    title: placeholderTitle,
    excerpt: placeholderExcerpt,
    eyebrow: "Aprendizados práticos com Bell Nacif",
    breadcrumb: "Aprender | Direto ao Ponto",
    topic: "Cultura",
    duration: 15,
    coverImage: defaultCoverImage,
    cardImagePosition: "72% 12%",
    author: "Bell Nacif",
    learningPoints: [],
    sections: buildDraftSections(
      "Um roteiro objetivo para transformar encontros longos em conversas que realmente fazem o trabalho avançar.",
    ),
  },
  {
    slug: "indicadores-essenciais-loja",
    title: placeholderTitle,
    excerpt: placeholderExcerpt,
    eyebrow: "Aprendizados práticos com Bell Nacif",
    breadcrumb: "Aprender | Direto ao Ponto",
    topic: "Indicadores",
    duration: 10,
    coverImage: defaultCoverImage,
    cardImagePosition: "42% 35%",
    author: "Bell Nacif",
    learningPoints: [],
    sections: buildDraftSections(
      "O que acompanhar para tomar decisões melhores sem transformar a operação em uma planilha impossível.",
    ),
  },
  {
    slug: "feedback-que-desenvolve",
    title: placeholderTitle,
    excerpt: placeholderExcerpt,
    eyebrow: "Aprendizados práticos com Bell Nacif",
    breadcrumb: "Aprender | Direto ao Ponto",
    topic: "Liderança",
    duration: 5,
    coverImage: defaultCoverImage,
    cardImagePosition: "71% 34%",
    author: "Bell Nacif",
    learningPoints: [],
    sections: buildDraftSections(
      "Como conduzir conversas firmes e respeitosas, com exemplos claros e próximos passos possíveis.",
    ),
  },
  {
    slug: "jornada-de-vendas-repetivel",
    title: placeholderTitle,
    excerpt: placeholderExcerpt,
    eyebrow: "Aprendizados práticos com Bell Nacif",
    breadcrumb: "Aprender | Direto ao Ponto",
    topic: "Vendas",
    duration: 15,
    coverImage: defaultCoverImage,
    cardImagePosition: "96% 38%",
    author: "Bell Nacif",
    learningPoints: [],
    sections: buildDraftSections(
      "Da abordagem ao pós-venda: organize etapas sem engessar a personalidade de quem atende.",
    ),
  },
  {
    slug: "dono-sair-da-operacao",
    title: placeholderTitle,
    excerpt: placeholderExcerpt,
    eyebrow: "Aprendizados práticos com Bell Nacif",
    breadcrumb: "Aprender | Direto ao Ponto",
    topic: "Negociação",
    duration: 20,
    coverImage: defaultCoverImage,
    cardImagePosition: "58% 80%",
    author: "Bell Nacif",
    learningPoints: [],
    sections: buildDraftSections(
      "Delegar não é desaparecer: é criar estrutura, acompanhamento e critérios para que o negócio funcione.",
    ),
  },
  {
    slug: "atendimento-que-gera-retorno",
    title: placeholderTitle,
    excerpt: placeholderExcerpt,
    eyebrow: "Aprendizados práticos com Bell Nacif",
    breadcrumb: "Aprender | Direto ao Ponto",
    topic: "Varejo",
    duration: 5,
    coverImage: defaultCoverImage,
    cardImagePosition: "90% 56%",
    author: "Bell Nacif",
    learningPoints: [],
    sections: buildDraftSections(
      "Pequenos comportamentos que aumentam confiança, proximidade e a percepção de cuidado no varejo.",
    ),
  },
];

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}
