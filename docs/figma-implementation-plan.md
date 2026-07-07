# Plano de implementação a partir do Figma — Bell Nacif

> **STATUS: PARCIALMENTE MAPEADO**
>
> A primeira leitura do MCP ficou restrita à região `Style Guide & Components`
> associada ao node `4:3`. Um print posterior confirmou que o arquivo também contém
> diversas páginas completas e uma área interna que não foram retornadas nessa
> enumeração. A Home foi posteriormente acessada e analisada pelo node `20:440`.
> As demais páginas continuam pendentes e não devem ser implementadas com base nas
> inferências antigas deste documento.

## 1. Resumo executivo

Arquivo analisado:

- Figma: `Bell Nacif`
- File key: `Ubmq8pUYWWdNROIKZp6kvw`
- Página encontrada: `Style Guide & Components` (`0:1`)
- Stack atual do repositório: Next.js `16.2.9`, React `19.2.4` e TypeScript

O arquivo disponível é uma biblioteca visual inicial, não um conjunto completo de
telas do produto. Ele contém moodboard, paleta, tipografia, botões, links, header
público, footer, header administrativo e estados de hover da navegação.

Essa conclusão pertence à primeira leitura incompleta. O arquivo também possui
páginas completas na página `Site`. Até o momento, somente a Home foi analisada em
detalhe. Versões mobile, modais, estados vazios e os demais fluxos ainda precisam ser
inspecionados individualmente.

Pelo vocabulário da interface, o produto parece ser o site institucional e comercial
de Bell Nacif, com foco em:

- liderança e vendas;
- mentoria;
- consultoria;
- palestras;
- treinamentos;
- conteúdo editorial chamado `Direto ao Ponto`;
- captação de contatos por newsletter;
- recebimento de convites para podcasts e outras mídias;
- possível blog com área administrativa autenticada.

## 2. Método e cobertura da análise

Foram usados:

- `get_metadata` para descobrir as páginas do documento;
- inspeção hierárquica complementar para mapear todos os frames e componentes da
  única página;
- `get_variable_defs` em cores, tipografia, botões, header e footer;
- inspeção de componentes, instâncias, reações de protótipo, imagens e vetores;
- `get_screenshot` dos frames principais permitidos pelo limite atual do MCP.

O MCP do Figma atingiu o limite de chamadas do plano Starter durante a captura das
screenshots. Foram validados visualmente:

- `Cores` (`4:2`);
- `Footer` (`166:403`).

Tipografia, botões, header público e header administrativo foram validados por
estrutura e propriedades, mas não por screenshot nesta rodada.

### Atualização — acesso à Home

A Home foi acessada diretamente pelo frame:

- página do Figma: `Site`;
- frame: `Home`;
- node ID: `20:440`;
- largura: `1440 px`;
- altura: aproximadamente `2816.51 px`;
- layout: Auto Layout vertical;
- status no Figma: Ready for dev.

A sessão autenticada do editor permitiu validar visualmente o frame completo e seus
principais blocos. O limite do plano Starter continuou impedindo novas chamadas de
`get_metadata`, `get_variable_defs` e `get_screenshot`, portanto propriedades
internas que não estavam visíveis no editor permanecem pendentes.

## 2.1. Home — mapa confirmado

### Estrutura da página

```text
Home
├── Header público
├── Hero de depoimento
├── Indicadores de autoridade
├── Clientes
└── Footer institucional + newsletter
```

O frame é uma pilha vertical sem gap global. Cada seção controla seu próprio
espaçamento e fundo.

### 1. Header público

O header da Home reutiliza o componente público já identificado no style guide.

Itens visíveis:

- logo Bell Nacif;
- Home;
- Direto ao Ponto;
- Mentoria, com indicação de submenu;
- Consultoria, com indicação de submenu;
- Palestras;
- Treinamentos;
- Sobre;
- Contato, com indicação de submenu;
- busca;
- menu hambúrguer.

Comportamentos a implementar:

- estado da rota atual;
- hover já definido nos componentes do Figma;
- submenus de Mentoria, Consultoria e Contato;
- busca;
- menu alternativo;
- navegação por teclado;
- fechamento por clique externo e `Escape`;
- versão mobile ainda pendente de análise.

### 2. Hero de depoimento

Layout desktop dividido em duas áreas:

- coluna esquerda clara com depoimento;
- coluna direita com fotografia de Bell Nacif;
- header sobreposto acima, mas separado estruturalmente;
- indicadores circulares na parte inferior do texto.

Conteúdo visível:

> “Se você está começando no varejo e não sabe por onde começar, eu tenho a
> resposta: Bell Nacif! Recomendo de olhos fechados para quem precisa de uma
> consultoria completa para transformar seu sonho em realidade.”

Autoria visível:

- Nana Cunha;
- cargo/marca precisa ser confirmado em maior resolução.

O conjunto de indicadores sugere um carrossel com aproximadamente seis depoimentos.
Também existem vários frames chamados `Hero` próximos à Home no canvas, reforçando
a hipótese de slides ou estados alternativos.

Implementação sugerida:

- `TestimonialHero`;
- `TestimonialSlide`;
- `CarouselIndicators`;
- imagem com foco preservado no rosto;
- troca automática somente se confirmada no protótipo;
- controles acessíveis e pausa de autoplay;
- respeito a `prefers-reduced-motion`.

Ainda precisa ser confirmado:

- quantidade exata de slides;
- conteúdo de cada depoimento;
- duração e transição;
- navegação por swipe;
- existência de setas;
- comportamento mobile;
- se os indicadores são clicáveis.

### 3. Indicadores de autoridade

Seção em fundo preto, texto branco e divisórias horizontais. Possui quatro linhas:

| Indicador | Título                                  | Complemento                                                                      |
| --------- | --------------------------------------- | -------------------------------------------------------------------------------- |
| `+23`     | Anos de experiência                     | em liderança, vendas e operações.                                                |
| `+40`     | Clientes confiaram na minha experiência | para fortalecer equipes, estruturar processos, e melhorar resultados comerciais. |
| `+500`    | Profissionais desenvolvidos             | em jornadas de vendas, liderança e atendimento.                                  |
| `+30%`    | De crescimento                          | em cases de consultoria, vendas e desenvolvimento de equipes.                    |

Componente sugerido:

- `AuthorityMetrics`;
- `AuthorityMetricRow`.

Regras:

- dados devem ficar separados da marcação;
- confirmar se os números são estáticos ou editáveis por CMS;
- não animar contadores sem aprovação;
- preservar leitura sem depender de animação;
- validar quebra dos títulos e descrições no mobile.

### 4. Clientes

Seção clara com título `Clientes` e uma faixa horizontal de logotipos.

Marcas legíveis no frame:

- PepsiCo;
- Lipton;
- Rosi Castro Pena Advogados;
- Sebrae;
- OABPrev-MG;
- outras marcas com baixa legibilidade na captura, pendentes de inventário.

Componente sugerido:

- `ClientLogoSection`;
- `ClientLogoList`;
- `ClientLogo`.

Ainda precisa ser confirmado:

- inventário completo e arquivos originais;
- ordem das marcas;
- uso monocromático;
- se a lista é estática, carrossel ou marquee;
- autorização de uso das marcas;
- textos alternativos.

### 5. Footer e newsletter

O footer da Home reutiliza o componente `Footer` (`166:403`) do style guide.

Blocos:

- assinatura visual Bell Nacif em grande escala;
- redes sociais;
- navegação institucional;
- convite para podcasts e outras mídias;
- telefone e e-mail;
- newsletter;
- copyright;
- política de privacidade;
- login.

Newsletter:

- título `Receba novidades por e-mail.`;
- texto de apoio sobre liderança e vendas;
- campo Nome;
- campo E-mail;
- ação de envio com seta.

Componentes sugeridos:

- `PublicFooter`;
- `FooterBrand`;
- `FooterNavigation`;
- `SocialLinks`;
- `MediaInvitation`;
- `ContactDetails`;
- `NewsletterForm`;
- `LegalLinks`.

Estados ainda ausentes no design:

- validação de nome e e-mail;
- carregamento;
- sucesso;
- erro;
- consentimento;
- duplicidade de cadastro;
- indisponibilidade da integração.

### Conteúdo e assets da Home

Assets confirmados:

- logo Bell Nacif para o header;
- retrato principal de Bell Nacif;
- logos dos clientes;
- assinatura visual ampliada do footer;
- ícones de busca e menu;
- ícones sociais;
- ícones de microfone e e-mail;
- seta de envio.

Conteúdo que deve ser centralizado:

- itens de navegação;
- depoimentos;
- indicadores de autoridade;
- clientes;
- telefone;
- e-mail;
- redes sociais;
- textos da newsletter;
- links legais.

### Componentes reutilizados na Home

| Componente           | Origem                  | Reutilização                                 |
| -------------------- | ----------------------- | -------------------------------------------- |
| `PublicHeader`       | Style guide             | Todas as páginas públicas                    |
| `NavigationItem`     | Component sets do Figma | Header e possíveis menus                     |
| `TestimonialHero`    | Home                    | Possível uso em páginas institucionais       |
| `AuthorityMetricRow` | Home                    | Sobre, serviços e propostas                  |
| `ClientLogoList`     | Home                    | Sobre, consultoria, palestras e treinamentos |
| `PublicFooter`       | Style guide             | Todas as páginas públicas                    |
| `NewsletterForm`     | Footer                  | Footer e possíveis landing pages             |

### Rota e metadados

| Item                  | Definição                                                          |
| --------------------- | ------------------------------------------------------------------ |
| Rota                  | `/`                                                                |
| Layout                | público                                                            |
| Frame                 | `Home`                                                             |
| Node ID               | `20:440`                                                           |
| Largura de referência | `1440 px`                                                          |
| H1                    | Não há H1 textual evidente no frame; precisa ser validado para SEO |
| CTA principal         | Não há CTA evidente no hero atual                                  |

A ausência de um H1 descritivo e de CTA principal deve ser discutida antes da
implementação. O depoimento não deve ser promovido automaticamente a H1 apenas para
preencher a semântica.

### Ordem de implementação da Home

1. Foundations de cor, tipografia e container.
2. Header desktop e navegação.
3. Estrutura do hero.
4. Conteúdo e mecanismo do carrossel.
5. Indicadores de autoridade.
6. Faixa de clientes.
7. Footer.
8. Newsletter e integração.
9. Estados interativos e acessibilidade.
10. Tablet e mobile após análise dos frames correspondentes.
11. Comparação visual em 1440 px.

### Critério de aceite da Home

- [ ] Frame corresponde ao Figma em 1440 px.
- [ ] Header preserva alinhamento, submenus e estado ativo.
- [ ] Hero mantém proporção entre texto e retrato.
- [ ] Todos os depoimentos e indicadores do carrossel funcionam.
- [ ] Métricas preservam hierarquia, divisórias e contraste.
- [ ] Logos dos clientes usam assets oficiais e dimensões estáveis.
- [ ] Footer corresponde ao componente aprovado.
- [ ] Newsletter possui estados completos e feedback acessível.
- [ ] Existe exatamente um H1 adequado.
- [ ] Não há overflow em português.
- [ ] Navegação funciona por teclado.
- [ ] Movimento respeita `prefers-reduced-motion`.
- [ ] Mobile e tablet correspondem aos frames ainda a analisar.
- [ ] Console, lint e build passam.

### Pendências específicas da Home

1. Localizar e analisar o frame mobile da Home.
2. Confirmar tablet ou regras intermediárias.
3. Mapear todos os slides do hero.
4. Confirmar autoria completa do depoimento visível.
5. Definir H1 e objetivo principal da página.
6. Confirmar CTA principal.
7. Inventariar todos os logos de clientes.
8. Confirmar comportamento dos submenus, busca e menu hambúrguer.
9. Confirmar integração da newsletter.
10. Confirmar se `login` deve permanecer no footer público.

## 3. Inventário do arquivo

### Página de topo

| Página                   | Node ID | Conteúdo                                                     |
| ------------------------ | ------- | ------------------------------------------------------------ |
| Style Guide & Components | `0:1`   | Moodboard, foundations, componentes e layouts compartilhados |

### Frames e componentes principais

| Elemento    | Node ID    | Tipo      |    Dimensão | Situação                                 |
| ----------- | ---------- | --------- | ----------: | ---------------------------------------- |
| MOODBOARD   | `9:36`     | Frame     | 2552 × 1312 | 10 imagens de referência                 |
| Cores       | `4:2`      | Frame     | 1440 × 1262 | Paleta e orientação de uso               |
| Tipografia  | `5:65`     | Frame     | 1440 × 1599 | Famílias e escala tipográfica            |
| Botões      | `5:153`    | Frame     |  1440 × 353 | Amostras dos três níveis de botão e link |
| Header      | `14:31`    | Component |   1440 × 90 | Navegação pública desktop                |
| Footer      | `166:403`  | Component |  1440 × 768 | Footer público desktop                   |
| Header blog | `315:1441` | Component |   1519 × 80 | Cabeçalho de área administrativa         |

### Component sets

| Componente       | Node ID    | Estados         |
| ---------------- | ---------- | --------------- |
| Botão Primário   | `14:14`    | Default e hover |
| Botão Secundário | `14:20`    | Default e hover |
| Botão Terciário  | `14:26`    | Default e hover |
| Link com seta    | `20:273`   | 2 variantes     |
| Home             | `365:1123` | Default e hover |
| Direto ao Ponto  | `365:1170` | Default e hover |
| Mentoria         | `365:1214` | Default e hover |
| Consultoria      | `471:1226` | Default e hover |
| Palestras        | `365:1317` | Default e hover |
| Treinamentos     | `365:1359` | Default e hover |
| Sobre            | `365:1401` | Default e hover |
| Contato          | `553:1712` | Default e hover |

Os estados de hover usam `CHANGE_TO`, Smart Animate, `ease-out` e duração de
aproximadamente `300 ms`.

## 4. Mapa de telas encontradas

### Telas públicas

Nenhuma página pública completa foi encontrada.

Foram encontrados apenas os elementos compartilhados que indicam a futura existência
das seguintes páginas ou destinos:

- Home;
- Direto ao Ponto;
- Mentoria;
- Consultoria;
- Palestras;
- Treinamentos;
- Sobre;
- Contato;
- Política de Privacidade.

### Telas autenticadas

Foi encontrado o componente `Header blog`, contendo:

- logotipo;
- título `Blog Admin`;
- ação `Sair`.

Isso indica uma área autenticada de administração do blog, mas não foram encontrados:

- tela de login;
- dashboard;
- lista de posts;
- editor de post;
- upload de mídia;
- estado vazio;
- confirmação de exclusão;
- recuperação de senha;
- perfis ou permissões.

### Modais, drawers e estados vazios

Não foram encontrados.

### Desktop e mobile

- Existem componentes desktop para header e footer.
- Não existem frames mobile ou tablet.
- O header contém ícones de busca e menu hambúrguer, mas o comportamento responsivo
  e o conteúdo do menu aberto não estão desenhados.

## 5. Navegação e fluxos inferidos

### Fluxo público principal

```text
Home
├── Direto ao Ponto
├── Mentoria
├── Consultoria
├── Palestras
├── Treinamentos
├── Sobre
└── Contato
```

O header também contém:

- busca;
- menu hambúrguer.

Ainda não está definido se a busca será global, restrita ao blog ou apenas um
elemento futuro.

### Fluxo de newsletter

```text
Footer
→ preencher Nome
→ preencher E-mail
→ enviar
→ feedback de sucesso ou erro
```

Os estados de validação, carregamento, sucesso, erro e consentimento não estão
desenhados.

### Fluxo de contato

O footer expõe:

- telefone: `+55 11 98788-4722`;
- e-mail: `bell@bellnacif.com.br`;
- convite para podcasts e outras mídias;
- Instagram, LinkedIn e YouTube.

O destino do item `Contato` e o mecanismo para convites ainda precisam ser
confirmados: página, âncora, e-mail ou formulário.

### Fluxo administrativo inferido

```text
Login
→ Blog Admin
→ gerenciamento de conteúdo
→ Sair
```

Somente o header autenticado foi desenhado. Todo o restante do fluxo é hipótese de
implementação.

## 6. Sugestão de rotas

As rotas abaixo são uma proposta derivada dos rótulos de navegação. Elas não estão
confirmadas por frames de página.

### Grupo público

| Rota sugerida              | Finalidade                               | Confiança |
| -------------------------- | ---------------------------------------- | --------- |
| `/`                        | Home                                     | Alta      |
| `/direto-ao-ponto`         | Conteúdo editorial ou página do programa | Alta      |
| `/mentoria`                | Oferta de mentoria                       | Alta      |
| `/consultoria`             | Oferta de consultoria                    | Alta      |
| `/palestras`               | Oferta de palestras                      | Alta      |
| `/treinamentos`            | Oferta de treinamentos                   | Alta      |
| `/sobre`                   | Perfil e história de Bell Nacif          | Alta      |
| `/contato`                 | Contato comercial e mídia                | Média     |
| `/politica-de-privacidade` | Política de privacidade                  | Alta      |
| `/login`                   | Entrada da área administrativa           | Média     |

### Blog e administração

| Rota sugerida             | Finalidade               | Confiança |
| ------------------------- | ------------------------ | --------- |
| `/blog`                   | Lista pública de artigos | Baixa     |
| `/blog/[slug]`            | Artigo público           | Baixa     |
| `/admin/blog`             | Lista administrativa     | Média     |
| `/admin/blog/novo`        | Criação de artigo        | Baixa     |
| `/admin/blog/[id]/editar` | Edição de artigo         | Baixa     |

### Agrupamento sugerido no App Router

```text
app/
├── (site)/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── direto-ao-ponto/
│   ├── mentoria/
│   ├── consultoria/
│   ├── palestras/
│   ├── treinamentos/
│   ├── sobre/
│   ├── contato/
│   └── politica-de-privacidade/
├── (auth)/
│   └── login/
├── admin/
│   └── blog/
└── api/
    ├── newsletter/
    ├── contato/
    └── health/
```

Esse agrupamento é conceitual. Antes de implementar, é obrigatório consultar a
documentação instalada do Next.js em `node_modules/next/dist/docs/`.

## 7. Layouts compartilhados

### Layout público

Composição:

- header desktop de 90 px;
- conteúdo variável da rota;
- footer institucional;
- navegação principal;
- busca e menu responsivo;
- newsletter;
- links legais.

### Layout administrativo

Composição conhecida:

- header de 80 px;
- logo;
- rótulo `Blog Admin`;
- ação `Sair`.

Sidebar, navegação administrativa e largura de conteúdo não estão definidas.

### Layout de autenticação

Não há referência visual. Deve permanecer pendente até existir design aprovado.

## 8. Componentes reutilizáveis

### Foundations e UI

- `Container`;
- `Button`, com variantes `primary`, `secondary` e `tertiary`;
- `TextLink`, com seta opcional;
- `IconButton`;
- `SectionHeading`;
- `TextField`;
- `EmailField`;
- `FormMessage`;
- `Logo`;

### Navegação

- `PublicHeader`;
- `DesktopNavigation`;
- `NavigationItem`;
- `SearchButton`;
- `MobileMenuButton`;
- `MobileMenu`, ainda sem design;
- `AdminHeader`;

### Footer

- `PublicFooter`;
- `SocialLinks`;
- `FooterNavigation`;
- `MediaInvitation`;
- `ContactDetails`;
- `NewsletterForm`;
- `LegalLinks`;

### Conteúdo futuro

Os componentes abaixo são prováveis, mas não devem ser criados antes de existirem
telas ou repetição real:

- cards de serviço;
- cards de artigo;
- hero;
- depoimentos;
- agenda ou cards de eventos;
- formulários comerciais;
- editor e tabela administrativa.

## 9. Design system identificado

### Cores

| Token sugerido         | Nome no Figma     | Valor     | Uso indicado                                                   |
| ---------------------- | ----------------- | --------- | -------------------------------------------------------------- |
| `--color-black`        | Preto             | `#0B0B0B` | Footer, header escuro, hero escuro, texto forte e CTAs escuros |
| `--color-off-white`    | Off-White         | `#F7F3EE` | Fundo principal, páginas internas e áreas claras               |
| `--color-white`        | Branco            | `#FFFFFF` | Cards, formulários e superfícies elevadas                      |
| `--color-gray-light`   | Cinza Claro       | `#E8E4DE` | Bordas, divisórias e fundos secundários                        |
| `--color-gray-dark`    | Cinza Escuro      | `#5E5A55` | Corpo de texto, captions e textos auxiliares                   |
| `--color-orange`       | Laranja Principal | `#FF5A00` | CTAs, hover, links, ícones, detalhes e destaques               |
| `--color-orange-hover` | Laranja Hover     | `#FF5F15` | Hover                                                          |
| `--color-orange-soft`  | Laranja Soft      | `#FFA87F` | Superfícies e destaques suaves                                 |
| `--color-blue-muted`   | Azul              | `#116655` | Nomeado como Azul no arquivo, apesar do tom verde-petróleo     |
| `--color-orange-alt`   | LARANJA           | `#FC4C02` | Laranja alternativo; uso não documentado                       |

Observação: `get_variable_defs` não retornou definições para o frame de cores. Os
valores acima foram confirmados pelos rótulos e pela screenshot do guia.

### Tipografia

Famílias:

- display e headings: `Montserrat`;
- corpo e navegação: `Poppins`;
- `Inter` aparece apenas nos títulos internos do próprio style guide.

Escala encontrada:

| Estilo       | Família    | Peso | Tamanho | Line-height | Letter-spacing |
| ------------ | ---------- | ---: | ------: | ----------: | -------------: |
| Hero Display | Montserrat |  800 |   88 px |        100% |              0 |
| H1           | Montserrat |  800 |   64 px |        100% |              0 |
| H2           | Montserrat |  700 |   48 px |        100% |              0 |
| H3           | Montserrat |  700 |   32 px |        100% |              0 |
| H4           | Montserrat |  700 |   24 px |        100% |              0 |
| Body Large   | Poppins    |  400 |   20 px |        100% |              0 |
| Body Default | Poppins    |  400 |   16 px |        100% |              0 |
| Small        | Poppins    |  400 |   11 px |        100% |              0 |

Usos adicionais encontrados:

- navegação do header: Poppins Medium, 16 px;
- título `Blog Admin`: Poppins Bold, 18 px;
- ação `Sair`: Poppins Medium, 14 px;
- copyright e links legais: Poppins 14 px;
- texto dos botões: Montserrat SemiBold, 16 px;
- link editorial: Poppins SemiBold, 18 px.

Não existe escala mobile definida.

### Espaçamento e grid

Padrões confirmados nos componentes desktop:

- largura base dos layouts: 1440 px;
- padding lateral recorrente: 80 px;
- largura útil recorrente: 1280 px;
- header público: 90 px de altura;
- header administrativo: 80 px de altura;
- botões: 48 px de altura;
- footer: 768 px de altura;
- barra de newsletter: aproximadamente 1280 px de largura, alinhada ao container.

Não há coleção de spacing tokens documentada nem especificação de breakpoints.

### Bordas, raios e sombras

- Botões possuem 48 px de altura e aparência de pill/cápsula.
- Cards de amostra da paleta usam cantos arredondados e sombra.
- `get_variable_defs` encontrou o efeito `M3/Elevation Light/1`:
  - sombra 1: preto a 15%, offset `0 1`, blur `3`, spread `1`;
  - sombra 2: preto a 30%, offset `0 1`, blur `2`, spread `0`.
- Não está claro se essa sombra faz parte do produto ou apenas do style guide.

### Estados interativos

Confirmados:

- default;
- hover com transição de 300 ms nos botões e itens de navegação.

Ausentes:

- focus-visible;
- active/pressed;
- disabled;
- loading;
- erro e sucesso;
- item de navegação correspondente à rota atual;
- menu aberto;
- validação de formulário.

## 10. Assets necessários

### Confirmados no arquivo

- identidade visual Bell Nacif em formato raster;
- versão grande da marca usada no footer;
- versão reduzida usada nos headers;
- ícones de Instagram, LinkedIn e YouTube;
- ícone de microfone;
- ícone de e-mail;
- ícone de busca;
- ícone de menu;
- setas de links e envio;
- dez imagens do moodboard.

### Recomendações de preparação

- solicitar o logo original em SVG;
- separar assinatura horizontal, símbolo e versões monocromáticas;
- confirmar se as imagens do moodboard são somente referência ou assets licenciados
  para publicação;
- exportar ícones próprios como SVG quando não forem substituídos por Lucide;
- obter arquivos WOFF2 de Montserrat e Poppins ou confirmar uso via `next/font`;
- criar inventário com origem, licença, corte, formato e texto alternativo.

O moodboard deve ser tratado como direção visual, não como banco automático de
imagens do site.

## 11. Integrações e dados dinâmicos inferidos

| Recurso           | Inferência                              | Necessidade de confirmação                                   |
| ----------------- | --------------------------------------- | ------------------------------------------------------------ |
| Newsletter        | Cadastro de nome e e-mail               | Provedor, double opt-in, consentimento, mensagens e política |
| Contato           | Telefone, e-mail e possível formulário  | Destino dos leads e proteção antispam                        |
| Redes sociais     | Instagram, LinkedIn e YouTube           | URLs oficiais                                                |
| Busca             | Ícone no header                         | Escopo, índice e tela de resultados                          |
| Blog              | Header administrativo e login no footer | CMS, banco, modelo editorial e telas públicas                |
| Autenticação      | `Blog Admin`, `Sair` e `login`          | Provedor, papéis, sessão e recuperação de senha              |
| Analytics         | Não representado visualmente            | Ferramenta, consentimento e eventos                          |
| Convites de mídia | Texto específico no footer              | E-mail, formulário ou CRM                                    |

### Modelo de conteúdo provável

- páginas institucionais;
- serviços/ofertas;
- artigos;
- categorias ou tags;
- autor;
- SEO por página e artigo;
- contatos e leads;
- inscrições de newsletter.

Isso é apenas uma inferência de domínio. Nenhum schema deve ser criado antes da
confirmação do escopo.

## 12. Ordem recomendada de implementação

### Fase 0 — Fechar lacunas de design e produto

1. Entregar frames desktop completos de todas as páginas públicas.
2. Entregar tablet e mobile.
3. Definir menu mobile aberto e busca.
4. Confirmar se `Direto ao Ponto` é página, programa, blog ou categoria.
5. Confirmar blog público e escopo do admin.
6. Definir login, dashboard, editor e estados vazios, se estiverem no escopo.
7. Confirmar conteúdo, URLs, formulários, integrações e assets licenciados.

### Fase 1 — Foundations

1. Registrar tokens reais de cor, tipografia, spacing, radius e shadow.
2. Configurar Montserrat e Poppins.
3. Criar reset, estilos globais e container.
4. Criar primitivas de botão, link, campo e ícone.
5. Implementar todos os estados de acessibilidade ausentes.

### Fase 2 — Shell público

1. Header desktop.
2. Header tablet/mobile.
3. Navegação ativa.
4. Busca, caso aprovada.
5. Menu mobile.
6. Footer responsivo.
7. Newsletter com estados completos.

### Fase 3 — Páginas públicas

Implementar uma por vez, somente quando o frame correspondente existir:

1. Home.
2. Sobre.
3. Mentoria.
4. Consultoria.
5. Palestras.
6. Treinamentos.
7. Direto ao Ponto.
8. Contato.
9. Política de Privacidade.

### Fase 4 — Conteúdo e integrações

1. Newsletter.
2. Contato e convites de mídia.
3. Analytics e consentimento.
4. SEO, sitemap, robots, Open Graph e dados estruturados.

### Fase 5 — Blog e autenticação

Executar apenas se confirmados no escopo:

1. modelo de conteúdo;
2. blog público;
3. autenticação;
4. listagem administrativa;
5. criação e edição;
6. upload de mídia;
7. preview, publicação e exclusão;
8. autorização e auditoria.

### Fase 6 — Validação final

1. responsividade;
2. acessibilidade;
3. comparação visual;
4. performance;
5. lint e build;
6. links, formulários, console, 404 e políticas.

## 13. Checklist de responsividade

- [ ] Criar especificação mobile e tablet antes da implementação final.
- [ ] Testar 360 × 800.
- [ ] Testar 390 × 844.
- [ ] Testar 768 × 1024.
- [ ] Testar 1024 × 900.
- [ ] Testar 1440 × 1000.
- [ ] Testar 1920 × 1080.
- [ ] Confirmar redução da escala tipográfica em cada breakpoint.
- [ ] Confirmar padding lateral abaixo dos 80 px do desktop.
- [ ] Garantir que a navegação desktop seja substituída por menu acessível.
- [ ] Definir o conteúdo e o comportamento do menu aberto.
- [ ] Garantir que busca e menu tenham área de toque mínima de 44 × 44 px.
- [ ] Reorganizar as quatro colunas informativas do footer.
- [ ] Empilhar ou reestruturar o formulário de newsletter.
- [ ] Evitar overflow dos títulos Montserrat de 64–88 px.
- [ ] Preservar o logo sem cortes ou rasterização aparente.
- [ ] Garantir que hover não seja necessário para compreender ou usar a interface.
- [ ] Verificar foco visível, ordem de tabulação e fechamento do menu por `Escape`.
- [ ] Não esconder conteúdo atrás de header fixo, caso ele se torne sticky.

## 14. Checklist de validação visual

- [ ] Comparar cada rota com seu frame no mesmo viewport.
- [ ] Validar os hexadecimais da paleta.
- [ ] Validar Montserrat e Poppins com pesos reais disponíveis.
- [ ] Validar line-height, quebra de linha e largura de títulos.
- [ ] Confirmar container de 1280 px e padding de 80 px no desktop.
- [ ] Confirmar altura de 90 px do header público.
- [ ] Confirmar altura de 48 px dos botões.
- [ ] Validar estados default, hover, focus, active, disabled e loading.
- [ ] Validar duração de 300 ms onde o protótipo usa Smart Animate.
- [ ] Confirmar tamanho e alinhamento do logo.
- [ ] Confirmar ícones, stroke e alinhamento óptico.
- [ ] Confirmar espaçamentos internos do footer.
- [ ] Validar newsletter em estados vazio, preenchido, erro, envio e sucesso.
- [ ] Conferir contraste de laranja, cinzas e textos pequenos.
- [ ] Conferir crop e qualidade de todos os assets.
- [ ] Capturar screenshots desktop, tablet e mobile.
- [ ] Conferir diferenças com overlay ou comparação lado a lado.
- [ ] Conferir console, layout shift e carregamento de fontes.

## 15. Dúvidas e ambiguidades

1. Onde estão os frames completos das páginas públicas?
2. Existem páginas em outro arquivo ou branch do Figma?
3. Qual é o conteúdo e a hierarquia de cada página?
4. Quais são as versões tablet e mobile?
5. Como funciona o menu mobile aberto?
6. O ícone de busca terá funcionalidade real? O que será pesquisado?
7. `Direto ao Ponto` é uma landing page, blog, newsletter, produto ou categoria?
8. Existe blog público ou somente administração?
9. Qual é o escopo do `Blog Admin`?
10. Qual tecnologia de CMS, banco e autenticação será usada?
11. O link `login` deve aparecer publicamente no footer em produção?
12. O contato é página, âncora, e-mail ou formulário?
13. Para onde deve ir o pedido de convite para podcasts e outras mídias?
14. Qual provedor será usado para newsletter?
15. Quais consentimentos e políticas são necessários para os formulários?
16. As imagens do moodboard podem ser utilizadas comercialmente?
17. Existe logo vetorial oficial?
18. O token chamado `Azul` (`#116655`) está correto ou deve ser renomeado?
19. Qual é o uso do laranja alternativo `#FC4C02`?
20. A sombra M3 encontrada faz parte do produto ou somente dos cards do guia?
21. Quais são os valores oficiais de spacing, grid, radius e breakpoints?
22. Quais estados de formulário e componentes devem existir?
23. O ano do copyright deve ser fixo ou dinâmico?
24. Quais são as URLs oficiais das redes sociais?
25. O site terá apenas português ou será multilíngue?

## 16. Critério para iniciar desenvolvimento

O desenvolvimento visual das páginas pode começar quando houver, no mínimo:

- frame desktop da página;
- comportamento mobile definido;
- conteúdo final ou claramente sinalizado como provisório;
- assets aprovados;
- destino real dos CTAs;
- confirmação da rota;
- confirmação das integrações presentes na página;
- critério de aceite visual.

Até lá, é seguro implementar apenas foundations e componentes já especificados,
evitando inventar layouts ou fluxos que não existem no Figma.
