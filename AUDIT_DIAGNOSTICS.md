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

## Etapa 4 — Auditoria de HTML, semântica e acessibilidade

Status: diagnóstico inicial concluído; correções ainda não executadas.

### Pontos positivos encontrados

- As páginas principais usam `<main>` e seções com `aria-labelledby` ou `aria-label`.
- O header usa `<header>` e `<nav>` com rótulos de navegação.
- O footer usa `<footer>`, `<nav>` e `<address>`.
- Os formulários de contato usam `<label>` envolvendo seus campos.
- Não foram encontrados botões sem `type`.
- Não foram encontrados links externos com `target="_blank"` sem `rel`.
- Vários accordions/FAQs usam `<details>` e `<summary>`, o que reduz complexidade de ARIA manual.
- A busca do header já usa `role="dialog"`, `aria-modal="true"` e foco inicial no campo.
- Os carrosséis e animações principais já consideram `prefers-reduced-motion` em parte do código.

### Severidade alta

- `app/globals.css` remove o outline global de `:focus-visible`. Isso pode deixar links, botões e controles sem indicação visual para navegação por teclado quando o componente não define um foco próprio.
- O menu hamburger e a busca são overlays globais, mas ainda não há foco preso/restaurado de forma robusta. O usuário de teclado pode potencialmente navegar para elementos fora do overlay enquanto ele está aberto.
- O botão de dropdown no desktop para itens como Mentoria/Consultoria tem `aria-haspopup`, mas não informa `aria-expanded` nem vincula explicitamente o submenu. Como a abertura depende de hover/focus CSS, leitores de tela recebem menos contexto.

### Severidade média

- Alguns controles têm hover visual sem equivalente claro de `focus-visible`, especialmente em CTAs, footer, cookie banner, carrossel vertical e links de compartilhamento.
- Os campos de texto dos formulários removem `outline` no foco e indicam foco apenas por mudança de borda inferior. Funciona visualmente, mas pode ficar sutil demais para acessibilidade.
- O dropdown customizado do formulário de clientes usa `role="listbox"`/`role="option"`, mas não implementa navegação por setas, `aria-activedescendant` ou fechamento por Escape. Para teclado, ainda funciona como lista de botões, mas a semântica promete comportamento de listbox completo.
- O cookie banner usa `role="dialog"`, mas não é modal e não prende foco. Pode ser aceitável como banner, porém a semântica mais adequada talvez seja `region`/`status` ou um diálogo com tratamento completo de foco.
- O footer possui formulário de newsletter visual, mas sem integração real aparente. Isso pode gerar submissão sem feedback útil para usuário e precisa ser decidido: implementar, desabilitar ou transformar em placeholder não interativo.
- Imagens com `alt=""` foram encontradas em vários pontos. Muitas parecem decorativas, mas algumas fotos de conteúdo/história/depoimentos devem ser revisadas individualmente para decidir se precisam de alt descritivo.

### Severidade baixa

- A hierarquia de headings parece coerente nas páginas renderizadas, mas páginas que usam hero importado não exibem `<h1>` diretamente no `page.tsx`; isso é aceitável, porém merece validação visual/renderizada em teste E2E ou axe.
- Alguns rótulos e textos do terminal aparecem com mojibake no PowerShell, embora o projeto esteja em UTF-8. Não é problema do HTML final necessariamente, mas vale manter atenção em encoding ao editar arquivos.
- Alguns links/controles decorativos usam setas ou ícones com `aria-hidden`, o que está correto quando há texto ou `aria-label`, mas deve continuar sendo revisado em novos componentes.

### Próxima ação recomendada

1. Restaurar um padrão global de foco acessível usando `--focus-ring` e só remover outline quando houver substituto visível.
2. Melhorar menu e busca com gerenciamento de foco: foco inicial, Escape, retorno ao botão que abriu e contenção de tab enquanto aberto.
3. Ajustar dropdowns de navegação desktop com `aria-expanded`, `aria-controls` e IDs de submenu.
4. Revisar `focus-visible` dos CTAs, footer, cookie banner, carrossel vertical e links de compartilhamento.
5. Decidir o comportamento real da newsletter antes de lançar: integrar ou remover a submissão.
6. Fazer uma rodada com axe/Playwright na etapa de testes para validar problemas que a leitura estática não captura, como contraste real, ordem de tab e nomes acessíveis renderizados.

## Etapa 5 — Auditoria visual e responsiva

Status: diagnóstico inicial concluído; validação visual automatizada ficou limitada pelo ambiente local.

### Método usado

- Subi/validei o site local em `localhost:3000`.
- Conferi as principais rotas públicas por HTTP.
- Conferi a página inexistente para validar o fluxo de `404`.
- Fiz varredura estática nos CSS mais sensíveis a responsividade: header/menu, busca, CTAs, home hero, Direto ao Ponto, Contato, Sobre, Palestras, Treinamentos e Performance 3 P's.
- Tentei validar screenshots/overflow com browser headless e browser integrado, mas ambos ficaram indisponíveis neste ambiente:
  - Edge headless falhou com erro de GPU/headless.
  - Browser integrado retornou indisponível para esta sessão.

Por isso, esta etapa identifica riscos e confirmações estruturais, mas ainda precisa de uma rodada visual real ou Playwright quando a bateria de testes for montada.

### Rotas verificadas

Todas as rotas públicas principais responderam `200`:

- `/`
- `/direto-ao-ponto`
- `/direto-ao-ponto/erro-silencioso-dono-carregar-empresa`
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
- `/politica-de-privacidade`

Rota inexistente testada:

- `/pagina-inexistente-audit` retornou `404`, como esperado.

### Pontos positivos encontrados

- Os heros principais já têm regras específicas para mobile, tablet, desktop e telas acima de `1440px`.
- A home usa altura baseada em viewport no hero, respeitando o header.
- As páginas de contato reaproveitam estilos entre clientes e parcerias, reduzindo duplicação.
- O CTA final já está concentrado em componente reutilizável.
- O header possui breakpoints específicos para desktop, tablet e mobile.
- O menu mobile/tablet tem comportamento separado do menu desktop, o que reduz conflito visual.
- A página de parcerias reaproveita o CSS da página de clientes.
- A página inexistente já cai no fluxo de `not-found`.

### Riscos por viewport

#### Mobile — 390px

Riscos principais:

- Menu e busca são overlays globais e precisam de teste visual/interativo em aparelho estreito.
- Filtros do Direto ao Ponto ainda têm regras com `min-width` e dropdowns customizados; precisam ser conferidos para evitar overflow horizontal.
- Páginas longas com tipografia grande, especialmente Sobre, Palestras e Treinamentos, têm maior risco de quebra de palavras ou espaçamentos apertados.
- CTAs finais precisam ser conferidos para garantir que o símbolo “B” do fundo continue aparecendo sem competir com o texto.
- Formulários de contato precisam de validação visual dos dropdowns, mensagens e botões em uma coluna.

#### Tablet — 768px

Riscos principais:

- Header/menu é o ponto mais sensível: o menu desktop usa `clip-path` e o menu tablet/mobile troca layout, então o breakpoint intermediário precisa de inspeção real.
- A página Sobre tem grids e imagens com alturas customizadas; maior risco de desalinhamento em tablet.
- Cards em seções de Cultura, Treinamentos, Mentoria e Consultoria podem ficar estreitos demais se o grid não quebrar no momento certo.
- O hero de contato usa imagem com gradiente e posicionamento por breakpoint; precisa checar legibilidade do texto.

#### Laptop — 1366×768

Riscos principais:

- Essa faixa é crítica porque já tivemos problema de heros altos demais. As regras atuais existem, mas precisam de confirmação visual.
- Páginas com hero de imagem em background devem ser checadas para garantir que o texto não fique sobre áreas com pouco contraste.
- Carrosséis e grids com imagens precisam ser testados para não gerar scroll horizontal invisível.

#### Desktop — 1440px

Riscos principais:

- É a base do design, então a maior atenção é preservar quebras estratégicas de título.
- CTAs com parágrafos longos devem ser conferidos para evitar palavras isoladas.
- O menu desktop novo precisa de teste de abertura/fechamento, coluna de artigo em destaque e últimos posts.

#### Wide/4K — acima de 1440px

Riscos principais:

- Heros com imagem travada ou background-size manual precisam manter qualidade visual sem “esticar” imagem.
- Home hero e CTAs devem manter proximidade entre texto/imagem e não criar espaços laterais estranhos.
- Páginas de consultoria/contato com gradiente precisam disfarçar bem a limitação de largura da imagem.

### Achados técnicos relevantes

#### Severidade alta

- A validação visual automatizada não pôde ser concluída neste ambiente. Isso impede afirmar com segurança que não há scroll horizontal, colisão visual ou quebra de layout em todos os viewports.
- O header/menu continua sendo o componente de maior risco visual por afetar todas as páginas e ter comportamentos diferentes por viewport.

#### Severidade média

- Foram encontrados vários `min-width`, `min-height`, `max-height` e `white-space: nowrap` em áreas sensíveis. Muitos são intencionais, mas devem ser validados visualmente.
- A página Sobre concentra bastante layout customizado, tipografia grande e grids de imagem; é uma das páginas com maior risco de regressão responsiva.
- Direto ao Ponto tem filtros customizados e cards com truncamento; precisa de teste específico em mobile e tablet.
- CTAs finais usam imagem de fundo e texto centralizado; precisam ser validados em todas as larguras principais.
- O menu desktop usa `clip-path` para o painel lateral, que pode se comportar diferente entre navegadores e larguras intermediárias.

#### Severidade baixa

- Carrosséis contínuos, hover pause e botões de direção precisam de validação manual ou teste E2E com interação.
- Footer e créditos TUSK devem ser conferidos em mobile para garantir leitura e alinhamento.
- Formulários de newsletter/cookies/contato devem ser conferidos visualmente junto com a etapa de acessibilidade.

### Checklist visual recomendado para a próxima rodada

Para cada viewport `390×844`, `768×1024`, `1366×768`, `1440×900` e `1920×1080`, validar:

- Sem scroll horizontal.
- Header sticky funcionando.
- Menu hamburger abrindo e fechando.
- Busca abrindo, pesquisando e fechando.
- Dropdowns de Mentoria, Consultoria e Contato.
- Heros com altura correta e texto legível.
- CTAs sem texto quebrado de forma ruim.
- Cards sem estouro de texto ou imagem distorcida.
- Formulários de contato com campos, dropdowns e botão alinhados.
- Footer com logo, redes sociais, política de privacidade e crédito TUSK alinhados.
- Página `404` amigável.

### Próxima ação recomendada

1. Montar uma bateria Playwright mínima para capturar screenshots e medir `document.documentElement.scrollWidth > window.innerWidth`.
2. Rodar essa bateria nos viewports definidos no `AUDIT.md`.
3. Priorizar correções nesta ordem:
   - scroll horizontal;
   - header/menu/busca;
   - heros;
   - formulários;
   - CTAs;
   - grids longos das páginas Sobre, Treinamentos e Mentorias.
4. Depois da primeira rodada visual real, transformar os cenários mais críticos em testes permanentes.

## Etapa 6 — Auditoria de performance

Status: diagnóstico inicial concluído; nenhuma otimização aplicada nesta etapa.

### Método usado

- Rodei `npm run build` em produção.
- O primeiro build falhou no sandbox porque o `next/font/google` tentou baixar Montserrat e Poppins sem acesso à rede.
- Reexecutei o build com rede liberada e ele passou.
- Conferi rotas estáticas/dinâmicas pelo output do Next.
- Levantei maiores chunks gerados em `.next/static`.
- Mapeei componentes com `"use client"`.
- Mapeei usos de `next/image`, `priority`, `loading="eager"`, `sizes`, `iframe` e imagens usadas via CSS/background.
- Consultei a documentação local do Next 16 sobre `Image`, porque `priority` foi depreciado em favor de `preload`.

### Resultado do build

Build de produção concluído com sucesso.

Rotas estáticas/SSG:

- `/`
- `/consultoria/analise-plantas-pdv`
- `/consultoria/cultura`
- `/consultoria/performance-3ps`
- `/consultoria/planejamento-estrategico`
- `/contato/clientes`
- `/contato/parcerias`
- `/direto-ao-ponto`
- `/direto-ao-ponto/[slug]` via SSG
- `/mentoria/donos-de-negocios`
- `/mentoria/lojas-fisicas`
- `/palestras`
- `/politica-de-privacidade`
- `/sobre`
- `/treinamentos`
- `/_not-found`

Rotas dinâmicas:

- `/api/contact/clients`
- `/api/contact/partners`

Conclusão: a arquitetura atual é boa para performance de hospedagem, porque quase todo o site é estático. O custo dinâmico está concentrado nos formulários.

### Maiores arquivos gerados no build

Maiores itens encontrados em `.next/static`:

- JS chunk: ~221 KB
- JS chunk: ~146.8 KB
- CSS chunk: ~115.9 KB
- JS chunk: ~110 KB
- Fontes geradas pelo `next/font`: ~66.6 KB e várias entre ~38 KB
- Outros chunks JS entre ~24 KB e ~53 KB

Interpretação:

- O peso ainda parece aceitável para um site institucional rico em imagens, mas há espaço para reduzir JavaScript global.
- O CSS acumulado já merece atenção antes de crescer mais.
- As fontes são uma parte relevante da carga inicial.

### Componentes client-side encontrados

Componentes reais com `"use client"`:

- `components/layout/Header/Header.tsx`
- `components/layout/Header/HeaderSearch.tsx`
- `components/layout/CookieConsent/CookieConsent.tsx`
- `components/home/TestimonialHero.tsx`
- `components/home/ClientsSection.tsx`
- `components/tothepoint/ArticleExplorer.tsx`
- `components/consulting/VerticalTestimonialsCarousel/VerticalTestimonialsCarousel.tsx`
- `components/ui/VideoThumbnail/VideoThumbnail.tsx`
- `app/contato/clientes/ContactClientsForm.tsx`
- `app/contato/parcerias/ContactPartnersForm.tsx`

Observação: a lista é pequena, o que é positivo. O ponto mais sensível é que o `Header` é client-side em todas as páginas e carrega menu, busca, posts recentes, artigo em destaque e redes sociais.

### Pontos positivos encontrados

- A maior parte do site é prerenderizada como estática.
- Os endpoints dinâmicos estão limitados aos formulários.
- As imagens de fundo usadas via CSS estão leves após a otimização.
- Muitas imagens já usam `next/image` com `sizes`.
- Vídeos de depoimento usam thumbnail e só carregam iframe após clique.
- O Google Analytics só é carregado depois do consentimento de cookies.
- As imagens grandes restantes estão abaixo de 500 KB após a etapa 2, com exceção prática de algumas próximas desse limite.
- O build de TypeScript passou.

### Severidade alta

- O build depende de rede para baixar fontes do Google via `next/font/google`. Em ambientes sem rede, CI restrito ou builds offline, isso falha. Para robustez, considerar migrar Montserrat/Poppins para `next/font/local` com arquivos versionados no projeto.
- O `Header` é client-side global e concentra muita lógica. Como ele aparece em todas as páginas, qualquer JS carregado ali vira custo global, mesmo em páginas onde o usuário não abre busca/menu.
- A página de Palestras ainda carrega um `iframe` direto do YouTube na seção de vídeo placeholder. Isso pode puxar recursos externos cedo demais. O padrão mais performático já existe no projeto: thumbnail + clique para carregar o iframe.

### Severidade média

- O projeto ainda usa `priority` em imagens. No Next 16, a documentação local indica que `priority` foi depreciado em favor de `preload`. Ocorrências encontradas:
  - `components/home/TestimonialHero.tsx`
  - `components/consulting/ConsultingHero/ConsultingHero.tsx`
  - `app/mentoria/lojas-fisicas/page.tsx`
  - `app/mentoria/donos-de-negocios/page.tsx`
  - `app/direto-ao-ponto/[slug]/page.tsx`
  - `components/ui/BrandLogo/BrandLogo.tsx`
- Algumas imagens acima da dobra usam `loading="eager"` em vez de `preload`/`fetchPriority`. Isso pode ser suficiente em alguns casos, mas vale padronizar conforme a recomendação atual do Next 16.
- `BrandLogo` usa `priority={!large}`. Como a logo pequena aparece no header em todas as páginas, isso pode gerar preload global de uma imagem pequena. O impacto é baixo em peso, mas conceitualmente não é LCP e pode ser desnecessário.
- O CSS gerado tem um chunk relevante de ~115.9 KB. Ainda não é alarmante, mas as páginas longas acumulam muitos módulos grandes.
- Existem muitas seções com CSS local repetindo padrões parecidos: cards, grids, heros, CTAs, textos grandes e listas numeradas. Isso é mais manutenção do que performance hoje, mas tende a aumentar CSS.

### Severidade baixa

- Imagens via CSS/background não passam por `next/image`, mas os arquivos atuais estão leves:
  - `background_grey.webp`: ~6.1 KB
  - `tothepoint_hero.webp`: ~20.7 KB
  - `share_section.webp`: ~33 KB
  - `clients_hero.webp`: ~45.3 KB
  - `partner_hero.webp`: ~45.1 KB
  - `about_bg.webp`: ~7.1 KB
  - `background_piramide.webp`: ~36.8 KB
  - `background_bell_brown.webp`: ~76.6 KB
- O cookie banner é client-side global, mas necessário para consentimento/Analytics.
- Carrosséis com `requestAnimationFrame` e `setInterval` são localizados e respeitam parcialmente `prefers-reduced-motion`.

### Otimizações recomendadas por impacto e risco

#### Alta prioridade / baixo a médio risco

1. Trocar o iframe direto da página de Palestras por `VideoThumbnail`, carregando YouTube apenas após clique.
2. Revisar imagens LCP acima da dobra e padronizar `preload`, `loading="eager"` ou `fetchPriority="high"` conforme o caso, removendo `priority` depreciado.
3. Remover `priority` da logo do header, ou trocar por uma estratégia mais conservadora se necessário.
4. Considerar `next/font/local` para Montserrat e Poppins, eliminando dependência de rede no build.

#### Média prioridade / médio risco

1. Dividir o `Header` em uma parte server/static e uma parte client apenas para menu/busca.
2. Avaliar lazy/dynamic import para o painel de busca/menu se o custo do bundle inicial estiver alto.
3. Extrair padrões CSS repetidos de cards, listas numeradas e CTAs para reduzir crescimento de CSS.
4. Revisar `sizes` das imagens em páginas longas, especialmente Sobre, Mentorias, Palestras e Treinamentos.

#### Baixa prioridade / baixo risco

1. Medir Web Vitals em produção com Vercel Analytics ou `useReportWebVitals`.
2. Adicionar orçamento de performance no futuro: tamanho máximo de chunks, imagens acima de certo peso e Lighthouse CI.
3. Revisar se todos os vídeos de YouTube seguem o padrão thumbnail-first.

### Próxima ação recomendada

Antes de refatorar performance:

1. Corrigir primeiro o iframe direto de Palestras.
2. Fazer uma rodada específica para imagens LCP e `priority` depreciado.
3. Só depois mexer no `Header`, porque ele é global e tem risco maior de regressão visual/interativa.
4. Após a etapa de testes, medir Lighthouse/Web Vitals em produção ou preview da Vercel.
