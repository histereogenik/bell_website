export const navigation = [
  { label: "Home", href: "/" },
  { label: "Direto ao Ponto", href: "/direto-ao-ponto" },
  {
    label: "Mentoria",
    href: "/mentoria",
    children: [
      { label: "Para donos de negócios", href: "/mentoria/donos-de-negocios" },
      { label: "Para lojas físicas", href: "/mentoria/lojas-fisicas" },
    ],
  },
  {
    label: "Consultoria",
    href: "/consultoria",
    children: [
      { label: "Cultura", href: "/consultoria/cultura" },
      {
        label: "Planejamento estratégico",
        href: "/consultoria/planejamento-estrategico",
      },
      {
        label: "Análise plantas PDV",
        href: "/consultoria/analise-plantas-pdv",
      },
      {
        label: "Performance 3 P's",
        href: "/consultoria/performance-3ps",
      },
    ],
  },
  { label: "Palestras", href: "/palestras" },
  { label: "Treinamentos", href: "/treinamentos" },
  { label: "Sobre", href: "/sobre" },
  { label: "Contato", href: "/contato" },
] as const;

export const testimonials = [
  {
    quote:
      "Se você está começando no varejo e não sabe por onde começar, eu tenho a resposta: Bell Nacif! Recomendo de olhos fechados para quem precisa de uma consultoria completa para transformar seu sonho em realidade.",
    author: "Nara Cunha",
    role: "CEO da marca Eneene",
  },
  {
    quote:
      "Bell desempenha um trabalho de capacitação fora da curva, muito acima da média, conquistando a todos. Com insights rápidos, domina as ferramentas de gestão e vendas e é extremamente objetiva e adequada.",
    author: "Sérgio Rossi",
    role: "Sócio-diretor, RCP Advogados",
  },
  {
    quote:
      "Bell prestou um excelente trabalho em minha empresa, desenvolvendo pessoas, disseminando processos e gestão, ministrando excelentes treinamentos de vendas. Sem dúvidas, colaborou muito com o desenvolvimento de pessoas das minhas equipes.",
    author: "Marcelo Daher Salomão",
    role: "CEO Beluga e Casas Lev",
  },
  {
    quote:
      "Contratamos a melhor “psicanalista empresarial” do Brasil, ela atende pelo nome de Bell Nacif.",
    author: "Rogério Vieira Santigo",
    role: "Presidente OAB Prev MG",
  },
  {
    quote:
      "Quanta competência e dedicação em uma pessoa só. A Bell tem o varejo no sangue, conhece como ninguém a realidade do chão de loja.",
    author: "Fred Rocha",
    role: "Palestrante internacional, autor best-seller e especialista em varejo & consumo",
  },
  {
    quote:
      "Profissional super competente, consegue perceber as dores da empresa e adaptar seu trabalho para ajudar a solucionar. Super recomendo.",
    author: "Amélia Castro",
    role: "Sócia-diretora RCP Advogados",
  },
] as const;

export const authorityMetrics = [
  {
    value: "+23",
    title: "Anos de experiência",
    description: "em liderança, vendas e operações.",
  },
  {
    value: "+40",
    title: "Clientes confiaram na minha experiência",
    description:
      "para fortalecer equipes, estruturar processos e melhorar resultados comerciais.",
  },
  {
    value: "+500",
    title: "Profissionais desenvolvidos",
    description: "em jornadas de vendas, liderança e atendimento.",
  },
  {
    value: "+30%",
    title: "De crescimento",
    description:
      "em cases de consultoria, vendas e desenvolvimento de equipes.",
  },
] as const;

export const clients = [
  { name: "PepsiCo", image: "/images/clients-logos/pepsico.png" },
  { name: "Lipton", image: "/images/clients-logos/lipton.png" },
  { name: "Columbia", image: "/images/clients-logos/columbia.png" },
  { name: "Natura", image: "/images/clients-logos/natura.png" },
  {
    name: "Rosi Castro Pena Advogados",
    image: "/images/clients-logos/rosicastro.png",
  },
  { name: "Ene Ene", image: "/images/clients-logos/eneene.png" },
  {
    name: "Frank Chaves Calçados",
    image: "/images/clients-logos/frankchaves.png",
  },
  { name: "Sebrae", image: "/images/clients-logos/sebrae.png" },
  { name: "EMS", image: "/images/clients-logos/ems.png" },
  { name: "N Produções", image: "/images/clients-logos/nprod.png" },
  { name: "Manná", image: "/images/clients-logos/manna.png" },
  { name: "Cozi", image: "/images/clients-logos/cozi.png" },
  { name: "Meat House", image: "/images/clients-logos/mkthouse.png" },
  { name: "Coreu Burguer", image: "/images/clients-logos/coreu.png" },
  {
    name: "Clínica Transformando Faces",
    image: "/images/clients-logos/transformando.png",
  },
  {
    name: "Congresso de Inovação COLVET",
    image: "/images/clients-logos/congresso.png",
  },
  {
    name: "Clínica Martinezo",
    image: "/images/clients-logos/martinez.png",
  },
] as const;

export const footerNavigation = [
  navigation.slice(0, 4),
  navigation.slice(4),
] as const;

export const contact = {
  phoneDisplay: "+55 11 98788-4722",
  phoneHref: "tel:+5511987884722",
  email: "bell@bellnacif.com.br",
} as const;
