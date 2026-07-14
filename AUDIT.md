# AUDIT.md

Documento de auditoria técnica do projeto Bell Nacif.

Objetivo: organizar uma varredura geral do código, layout, imagens, segurança, performance e testes antes de novas refatorações grandes. Cada etapa deve ser executada separadamente, com diagnóstico antes de alteração.

## Regra geral de execução

- Não refatorar durante a etapa de diagnóstico.
- Registrar achados antes de corrigir.
- Priorizar mudanças pequenas, revisáveis e testáveis.
- Rodar validações após cada grupo de alterações.
- Evitar mudar comportamento visual sem necessidade.
- Preservar o design já aprovado.

## Etapa 1 — Inventário inicial do projeto

Objetivo: entender o estado atual sem alterar arquivos.

Verificar:

- rotas existentes;
- componentes compartilhados;
- páginas com maior volume de código;
- arquivos CSS mais extensos;
- assets disponíveis em `public/`;
- scripts atuais em `package.json`;
- dependências instaladas;
- warnings conhecidos no terminal.

Saída esperada:

- lista de rotas;
- lista de componentes principais;
- lista de possíveis pontos de atenção;
- recomendação de ordem para auditoria detalhada.

Critério de conclusão:

- relatório curto com o mapa atual do projeto.

## Etapa 2 — Auditoria de imagens e assets

Objetivo: reduzir peso, evitar duplicações e garantir uso correto das imagens.

Verificar:

- imagens acima de 500 KB;
- imagens acima de 1 MB;
- dimensões excessivas para o uso real;
- imagens duplicadas ou antigas;
- assets não utilizados;
- diferença entre imagens originais e imagens otimizadas;
- uso correto de `next/image`;
- uso de `sizes`;
- uso de `priority` ou `loading="eager"` apenas em imagens acima da dobra;
- imagens decorativas com `alt=""`;
- imagens informativas com `alt` descritivo;
- organização das pastas em `public/images`, `public/logos` e `public/vectors`.

Decisão atual:

- manter as imagens dentro do projeto por enquanto;
- não mover para CDN externa neste momento;
- otimizar peso e formato quando fizer sentido;
- preservar imagens originais importantes até termos certeza de que a versão otimizada está correta.

Possíveis ações futuras:

- converter JPG/PNG pesados para WebP ou AVIF;
- criar versões específicas para hero, card e thumbnail;
- remover pastas antigas não usadas;
- padronizar nomes de arquivos;
- documentar qual imagem é usada em qual página.

Critério de conclusão:

- inventário com caminho, peso, dimensão, uso e recomendação: manter, otimizar, substituir ou remover.

## Etapa 3 — Auditoria de estrutura React/Next

Objetivo: identificar problemas estruturais, semânticos e oportunidades de organização.

Verificar:

- componentes marcados com `"use client"` sem necessidade;
- componentes grandes demais;
- componentes com muitas responsabilidades;
- props inconsistentes;
- lógica repetida entre páginas;
- imports não usados;
- rotas e layouts;
- uso correto do App Router;
- links internos com `next/link`;
- páginas que deveriam compartilhar layout;
- componentes que poderiam ser extraídos.

Candidatos prováveis de refatoração:

- heroes de páginas;
- CTAs;
- cards;
- accordions/FAQ;
- menus;
- filtros;
- thumbnails de vídeo;
- seções de texto + imagem;
- seções de depoimentos.

Critério de conclusão:

- lista priorizada de componentes para refatorar, com risco baixo, médio ou alto.

## Etapa 4 — Auditoria de HTML, semântica e acessibilidade

Objetivo: garantir que o site seja navegável, compreensível e tecnicamente correto.

Verificar:

- hierarquia de headings (`h1`, `h2`, `h3`);
- links que deveriam ser botões;
- botões que deveriam ser links;
- nesting inválido de HTML;
- `aria-expanded` em menus, accordions e dropdowns;
- `aria-hidden` em ícones decorativos;
- labels de formulários;
- foco por teclado;
- contraste mínimo;
- textos alternativos em imagens;
- navegação por teclado no header, busca, menu e filtros;
- uso consistente de `sr-only`;
- estados de hover/focus.

Critério de conclusão:

- lista de problemas de acessibilidade e HTML inválido, com severidade.

## Etapa 5 — Auditoria visual e responsiva

Objetivo: encontrar quebras invisíveis em tamanhos de tela diferentes.

Viewports mínimos para testar:

- mobile: 390 × 844;
- tablet: 768 × 1024;
- laptop: 1366 × 768;
- desktop base: 1440 × 900;
- desktop grande: 1920 × 1080;
- wide/4K quando necessário.

Verificar:

- scroll horizontal;
- texto quebrando em locais ruins;
- cards estourando;
- imagens distorcidas;
- heros altos demais;
- CTAs cortando texto;
- header sticky;
- menu aberto e fechado;
- busca;
- filtros;
- formulários;
- carrosséis;
- footer.

Critério de conclusão:

- checklist por rota e viewport com problemas encontrados.

## Etapa 6 — Auditoria de performance

Objetivo: reduzir peso e melhorar carregamento percebido.

Verificar:

- Largest Contentful Paint;
- imagens de hero;
- imagens abaixo da dobra carregando cedo demais;
- JavaScript client desnecessário;
- CSS duplicado;
- fontes;
- tamanho do bundle;
- warnings do Next;
- lazy loading;
- cache de assets;
- páginas estáticas vs dinâmicas.

Possíveis ações:

- reduzir `"use client"`;
- extrair lógica client apenas onde precisa;
- otimizar imagens;
- revisar `sizes`;
- revisar `priority`;
- consolidar CSS repetido;
- criar componentes server quando possível.

Critério de conclusão:

- lista de otimizações ordenadas por impacto e risco.

## Etapa 7 — Segurança e proteção contra abuso

Objetivo: proteger formulários, APIs e infraestrutura sem tentar esconder o que é público.

Premissa:

- não existe como bloquear acesso ao HTML de um site público;
- HTML, CSS, JS e imagens públicas podem ser lidos por qualquer visitante;
- scraping pode ser dificultado, mas não impedido completamente;
- DDoS deve ser tratado principalmente por camada de hospedagem/CDN.

Verificar:

- endpoints `/api/contact/*`;
- validação server-side dos formulários;
- honeypot anti-spam;
- rate limit;
- headers de segurança;
- ausência de secrets no frontend;
- variáveis de ambiente;
- mensagens de erro;
- robots.txt;
- sitemap;
- política de privacidade;
- proteção futura para área administrativa.

Possíveis ações:

- adicionar honeypot nos formulários;
- adicionar rate limiting nos endpoints;
- adicionar validação de payload;
- adicionar headers de segurança;
- usar proteção da Vercel/Cloudflare se necessário;
- criar páginas amigáveis de erro/autorização;
- bloquear rotas administrativas por autenticação server-side no futuro.

Critério de conclusão:

- matriz de riscos: baixo, médio, alto;
- lista de correções recomendadas.

## Etapa 8 — Estratégia de testes

Objetivo: criar segurança para refatorar sem quebrar o site de forma invisível.

### 8.1 Checks básicos

Rodar:

- `npm run lint`;
- `npm run build`;
- checagem de TypeScript;
- checagem de links internos;
- checagem de imagens inexistentes.

### 8.2 Testes de integração

Possíveis ferramentas:

- Vitest;
- React Testing Library.

Testar:

- filtros da página Direto ao Ponto;
- busca do header;
- menu hamburger;
- FAQ/accordions;
- formulários;
- dropdowns.

### 8.3 Testes E2E

Ferramenta recomendada:

- Playwright.

Fluxos prioritários:

- home carrega;
- menu abre e fecha;
- busca retorna resultado;
- navegação principal funciona;
- Direto ao Ponto filtra por tópico;
- Direto ao Ponto filtra por duração;
- artigo abre;
- breadcrumb volta;
- formulário de contato cliente valida/preenche;
- formulário de contato parceria valida/preenche;
- páginas principais respondem;
- mobile não tem scroll horizontal.

Critério de conclusão:

- suíte mínima de E2E criada;
- testes rodando localmente;
- documentação de como executar.

## Etapa 9 — Refatoração controlada

Objetivo: reduzir duplicação e melhorar manutenção sem alterar o visual aprovado.

Ordem sugerida:

1. componentes de CTA;
2. botões;
3. heroes;
4. cards;
5. FAQ/accordion;
6. filtros/dropdowns;
7. thumbnails de vídeo;
8. seções de texto + imagem;
9. estilos globais/tokens;
10. organização de assets.

Regras:

- uma família de componentes por vez;
- validar visualmente após cada refatoração;
- rodar lint/build/testes;
- evitar reescrever páginas inteiras sem necessidade.

Critério de conclusão:

- redução de duplicação;
- componentes mais previsíveis;
- nenhuma regressão visual relevante.

## Etapa 10 — SEO, metadata e conteúdo

Objetivo: melhorar apresentação em buscadores e compartilhamentos.

Verificar:

- `title` único por página;
- `description` única por página;
- Open Graph;
- Twitter cards;
- sitemap;
- robots.txt;
- canonical quando necessário;
- dados estruturados para artigos;
- slugs;
- breadcrumbs;
- metadata dos posts.

Critério de conclusão:

- páginas principais com metadata revisada;
- artigos preparados para compartilhamento.

## Etapa 11 — Preparação para área interna futura

Objetivo: deixar decisões atuais compatíveis com um backend/CMS futuro.

Verificar:

- estrutura de dados dos artigos;
- campos manuais como `duration`;
- imagens de posts;
- autores;
- categorias/tópicos;
- fontes;
- status de publicação;
- drafts;
- autenticação futura;
- rotas privadas;
- permissões.

Decisão atual sobre tempo de leitura:

- não calcular automaticamente em runtime;
- manter valor manual/editorial;
- ao criar novo post, calcular estimativa com média de 200 palavras por minuto;
- arredondar para cima;
- permitir ajuste editorial.

Critério de conclusão:

- modelo atual documentado;
- lista de campos necessários para CMS futuro.

## Etapa 12 — Relatório final e plano de ação

Objetivo: consolidar tudo em uma fila prática.

Entregar:

- problemas encontrados;
- riscos;
- quick wins;
- refatorações recomendadas;
- testes recomendados;
- melhorias de segurança;
- melhorias de performance;
- ordem de execução.

Classificação:

- prioridade alta: risco real ou quebra visível;
- prioridade média: melhora manutenção/performance;
- prioridade baixa: limpeza ou refinamento.

Critério de conclusão:

- backlog técnico pronto para execução por etapas.
