# Diagnósticos resumidos da auditoria

Este arquivo guarda os achados resumidos das etapas executadas do `AUDIT.md`.

## Etapa 1 — Inventário inicial do projeto

Status: concluída como diagnóstico.

### Mapa geral

- Projeto em Next.js com App Router.
- Rotas públicas principais:
  - `/`
  - `/direto-ao-ponto`
  - `/direto-ao-ponto/[slug]`
  - `/mentoria/donos-de-negocios`
  - `/mentoria/lojas-fisicas`
  - `/consultoria/cultura`
  - `/consultoria/planejamento-estrategico`
  - `/consultoria/analise-plantas-pdv`
  - `/consultoria/performance-3ps`
  - `/palestras`
  - `/treinamentos`
  - `/sobre`
  - `/contato/clientes`
  - `/contato/parcerias`
  - `not-found`
- APIs existentes:
  - `/api/contact/clients`
  - `/api/contact/partners`

### Componentes e áreas compartilhadas identificadas

- Header, menu, busca e navegação.
- Footer, newsletter e links institucionais.
- Botões de CTA.
- CTAs finais reutilizáveis.
- Cards de artigos e filtros do Direto ao Ponto.
- Hero de depoimentos da home.
- Thumbnail de vídeo.
- Carrossel vertical de depoimentos.
- Formulários de contato.

### Arquivos mais volumosos no momento do inventário

- `app/mentoria/lojas-fisicas/page.module.css`
- `app/sobre/page.module.css`
- `app/mentoria/donos-de-negocios/page.module.css`
- `components/layout/Header/Header.module.css`
- `app/palestras/page.module.css`
- `app/mentoria/lojas-fisicas/page.tsx`
- `app/consultoria/cultura/page.module.css`
- `components/tothepoint/DirectToPoint.module.css`
- `app/sobre/page.tsx`

### Pontos de atenção

- Algumas páginas cresceram bastante porque carregam muitas seções específicas.
- Há bastante CSS modular repetindo padrões de seção, grid, card, título e responsividade.
- O header concentra muita responsabilidade: navegação, dropdown, menu, busca e comportamento responsivo.
- Os formulários já possuem API server-side, mas ainda merecem auditoria de segurança na etapa 7.
- O projeto já tem várias rotas institucionais e precisa de testes de navegação para evitar regressões invisíveis.

### Recomendação de ordem

1. Concluir limpeza de assets e imagens.
2. Mapear componentes React/Next para refatorações seguras.
3. Auditar HTML, semântica e acessibilidade.
4. Criar bateria mínima de testes E2E antes de grandes refatorações.
5. Auditar segurança dos formulários e headers.

## Etapa 2 — Auditoria de imagens e assets

Status: concluída e corrigida.

Resumo:

- Imagens pesadas foram convertidas/otimizadas em lotes.
- Arquivos antigos e substituídos foram removidos.
- Referências foram atualizadas para os novos formatos otimizados.
- A pasta `public/` teve redução expressiva de peso sem alteração visual perceptível.

Observação: o inventário detalhado de imagem, uso e recomendação foi tratado durante a execução da etapa. Como a etapa já foi corrigida, este arquivo mantém apenas o resumo executivo.

## Etapa 3 — Auditoria de estrutura React/Next

Status: diagnóstico inicial concluído; refatorações ainda não executadas.

### Componentes client-side atuais

Componentes marcados com `"use client"`:

- `components/tothepoint/ArticleExplorer.tsx`
- `components/home/TestimonialHero.tsx`
- `components/layout/Header/Header.tsx`
- `components/layout/Header/HeaderSearch.tsx`
- `components/ui/VideoThumbnail/VideoThumbnail.tsx`
- `components/consulting/VerticalTestimonialsCarousel/VerticalTestimonialsCarousel.tsx`
- `app/contato/clientes/ContactClientsForm.tsx`
- `app/contato/parcerias/ContactPartnersForm.tsx`

Leitura: o uso de client components é coerente nas áreas interativas, mas o header ainda é o principal candidato a decomposição.

### Candidatos de refatoração

Prioridade alta:

- Header/menu/busca: muita lógica e muito CSS concentrado em uma área crítica.
- Formulários de contato: dois formulários parecidos, com potencial de compartilhar campos, validação visual e mensagens.
- Seções de CTA: já existem como padrão, mas ainda vale checar se todas as páginas usam o mesmo componente.

Prioridade média:

- Heroes de consultoria/mentoria/treinamentos: padrões parecidos com variações de imagem, gradiente e altura.
- Seções de texto + imagem nas páginas Sobre, Palestras e Mentorias.
- Cards numerados e listas de etapas, repetidos em várias páginas.
- Accordions/FAQ/process cards.

Prioridade baixa:

- Pequenas variações visuais de cards e listas que podem continuar locais se a extração aumentar complexidade.
- CSS muito específico de páginas longas, desde que não esteja duplicando regras globais importantes.

### Riscos

- Refatorar heroes cedo demais pode gerar regressão visual porque cada página tem comportamento de imagem diferente.
- Refatorar o header exige cuidado extra, pois ele afeta todas as rotas.
- Extrair componentes sem mapear variações pode criar componentes genéricos demais e difíceis de manter.

### Próxima ação recomendada

Antes de refatorar:

1. Rodar lint/build.
2. Criar testes E2E mínimos para navegação, busca, menu e formulários.
3. Refatorar uma família de componentes por vez.
4. Validar visualmente mobile, tablet e desktop após cada mudança.
