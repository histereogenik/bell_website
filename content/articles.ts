export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  topic:
    | "Liderança"
    | "Vendas"
    | "Cultura"
    | "Estratégia"
    | "Varejo"
    | "Negociação"
    | "Indicadores"
    | "Experiência do cliente";
  duration: number;
  imagePosition: string;
};

export const articles: Article[] = [
  {
    slug: "erro-silencioso-dono-carregar-empresa",
    title: "O erro silencioso que faz o dono carregar a empresa nas costas",
    excerpt:
      "Achar que cobrar mais é liderar melhor, quando, na verdade, a equipe precisa de clareza, processo e acompanhamento.",
    topic: "Liderança",
    duration: 5,
    imagePosition: "74% 27%",
  },
  {
    slug: "lideranca-que-organiza-a-rotina",
    title: "Liderança que organiza a rotina sem centralizar decisões",
    excerpt:
      "Como criar acordos claros, distribuir responsabilidades e manter o time avançando com autonomia.",
    topic: "Liderança",
    duration: 5,
    imagePosition: "54% 72%",
  },
  {
    slug: "vender-mais-sem-depender-de-promocao",
    title: "Como vender mais sem depender de promoção o tempo todo",
    excerpt:
      "Uma visão prática sobre atendimento, percepção de valor e consistência comercial no dia a dia.",
    topic: "Vendas",
    duration: 10,
    imagePosition: "88% 45%",
  },
  {
    slug: "processos-simples-negocio-crescer",
    title: "Processos simples para o negócio crescer sem perder o controle",
    excerpt:
      "Os primeiros processos que precisam sair da cabeça do dono e entrar na rotina da equipe.",
    topic: "Estratégia",
    duration: 10,
    imagePosition: "63% 60%",
  },
  {
    slug: "equipe-sabe-o-que-espera-dela",
    title: "Sua equipe sabe exatamente o que você espera dela?",
    excerpt:
      "Metas só funcionam quando cada pessoa entende prioridades, comportamento esperado e critérios de sucesso.",
    topic: "Liderança",
    duration: 5,
    imagePosition: "83% 18%",
  },
  {
    slug: "experiencia-cliente-comeca-bastidores",
    title: "A experiência do cliente começa muito antes do atendimento",
    excerpt:
      "Organização, repertório e segurança da equipe também fazem parte da experiência que chega ao consumidor.",
    topic: "Experiência do cliente",
    duration: 5,
    imagePosition: "93% 70%",
  },
  {
    slug: "reunioes-que-geram-decisao",
    title: "Reuniões que geram decisão, responsabilidade e movimento",
    excerpt:
      "Um roteiro objetivo para transformar encontros longos em conversas que realmente fazem o trabalho avançar.",
    topic: "Cultura",
    duration: 15,
    imagePosition: "72% 12%",
  },
  {
    slug: "indicadores-essenciais-loja",
    title: "Os indicadores essenciais para entender a saúde da sua loja",
    excerpt:
      "O que acompanhar para tomar decisões melhores sem transformar a operação em uma planilha impossível.",
    topic: "Indicadores",
    duration: 10,
    imagePosition: "42% 35%",
  },
  {
    slug: "feedback-que-desenvolve",
    title: "Feedback que desenvolve em vez de apenas corrigir",
    excerpt:
      "Como conduzir conversas firmes e respeitosas, com exemplos claros e próximos passos possíveis.",
    topic: "Liderança",
    duration: 5,
    imagePosition: "71% 34%",
  },
  {
    slug: "jornada-de-vendas-repetivel",
    title: "Como construir uma jornada de vendas que a equipe consiga repetir",
    excerpt:
      "Da abordagem ao pós-venda: organize etapas sem engessar a personalidade de quem atende.",
    topic: "Vendas",
    duration: 15,
    imagePosition: "96% 38%",
  },
  {
    slug: "dono-sair-da-operacao",
    title: "O que precisa acontecer para o dono conseguir sair da operação",
    excerpt:
      "Delegar não é desaparecer: é criar estrutura, acompanhamento e critérios para que o negócio funcione.",
    topic: "Negociação",
    duration: 20,
    imagePosition: "58% 80%",
  },
  {
    slug: "atendimento-que-gera-retorno",
    title: "Atendimento que faz o cliente querer voltar",
    excerpt:
      "Pequenos comportamentos que aumentam confiança, proximidade e a percepção de cuidado no varejo.",
    topic: "Varejo",
    duration: 5,
    imagePosition: "90% 56%",
  },
];
