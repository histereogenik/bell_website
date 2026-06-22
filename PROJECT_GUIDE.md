# Guia de Projeto: Site Institucional com Next.js e Figma

Este documento deve ser preenchido no início do projeto e mantido atualizado.
Ele funciona como referência principal para desenvolvedores e agentes de IA,
reduzindo perguntas repetidas, exploração desnecessária do repositório e uso de
tokens.

## 1. Resumo do projeto

Preencher antes do desenvolvimento:

- **Nome do projeto:**
- **Empresa ou marca:**
- **Objetivo principal do site:**
- **Público-alvo:**
- **Ação principal esperada do visitante:**
- **URL do Figma:**
- **Responsável pelo design:**
- **Responsável pelo conteúdo:**
- **Prazo previsto:**
- **Idiomas:**
- **Domínio:**
- **Hospedagem ou plataforma de deploy:**

### Escopo inicial

Liste somente o que faz parte da primeira entrega:

- Página inicial.
- Páginas institucionais.
- Página de serviços ou produtos.
- Contato.
- Política de privacidade e termos.
- Integrações.
- Formulários.
- Analytics e cookies.

### Fora do escopo

Registre explicitamente o que não será implementado:

- Painel administrativo.
- Área autenticada.
- E-commerce.
- Blog ou CMS.
- Animações não desenhadas no Figma.
- Funcionalidades futuras.

## 2. Decisões técnicas

Antes de escrever código, confirme as versões instaladas no `package.json` e
leia a documentação correspondente em `node_modules/next/dist/docs/`.
Não assuma que APIs e convenções de outras versões do Next.js continuam
válidas.

Configuração recomendada:

- Next.js com App Router.
- TypeScript em modo estrito.
- React conforme a versão instalada pelo Next.js.
- CSS Modules para estilos específicos.
- `app/globals.css` apenas para tokens, reset e estilos globais.
- `next/image` para imagens.
- `next/font` ou fontes locais para tipografia.
- Metadados definidos por rota.
- ESLint e build executados antes de cada entrega.
- Docker com saída `standalone` quando houver deploy em servidor próprio.

### Dependências

Adicione uma biblioteca somente quando ela resolver uma necessidade concreta.

Preferências:

- Ícones: Lucide.
- Animações: CSS para interações simples; Motion para sequências ou scroll.
- Formulários: recursos nativos antes de adicionar bibliotecas.
- Validação: schema estruturado quando o formulário ou domínio exigir.
- CMS: somente quando edição de conteúdo fizer parte do escopo.

Não instalar bibliotecas para:

- Componentes simples.
- Formatação trivial.
- Utilitários já disponíveis na plataforma.
- Funcionalidades futuras ainda não aprovadas.

## 3. Estrutura de pastas

```text
project/
├── app/
│   ├── api/
│   │   └── health/
│   │       └── route.ts
│   ├── contato/
│   │   └── page.tsx
│   ├── privacidade/
│   │   └── page.tsx
│   ├── servicos/
│   │   ├── [slug]/
│   │   │   └── page.tsx
│   │   └── page.tsx
│   ├── sobre/
│   │   └── page.tsx
│   ├── termos/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── not-found.tsx
│   └── page.tsx
├── components/
│   ├── layout/
│   │   ├── Footer/
│   │   │   ├── Footer.module.css
│   │   │   └── Footer.tsx
│   │   └── Header/
│   │       ├── Header.module.css
│   │       └── Header.tsx
│   ├── sections/
│   │   ├── AboutSection/
│   │   ├── ContactSection/
│   │   ├── HeroSection/
│   │   └── ServicesSection/
│   └── ui/
│       ├── Button/
│       ├── Container/
│       └── SectionHeading/
├── content/
│   ├── company.ts
│   ├── navigation.ts
│   ├── pages.ts
│   └── services.ts
├── lib/
│   ├── constants.ts
│   ├── metadata.ts
│   └── utils.ts
├── public/
│   ├── fonts/
│   ├── icons/
│   ├── images/
│   │   ├── about/
│   │   ├── hero/
│   │   └── services/
│   └── logos/
├── docs/
│   ├── decisions.md
│   └── figma-map.md
├── .dockerignore
├── AGENTS.md
├── Dockerfile
├── next.config.ts
├── package.json
└── tsconfig.json
```

### Regras da estrutura

- Componentes compartilhados não devem ficar dentro de uma rota.
- Componentes exclusivos de uma rota podem ficar próximos dela.
- Evite arquivos genéricos como `components.tsx`, `helpers.ts` ou `data.ts`.
- Use nomes que expressem responsabilidade e domínio.
- Não crie um componente para cada `div`.
- Extraia componentes quando houver repetição, comportamento próprio ou uma
  fronteira visual clara.
- Conteúdo institucional deve ficar separado da marcação quando for extenso ou
  reutilizado.

## 4. Tradução do Figma para código

O Figma é a fonte visual de verdade. Antes da implementação, registre as
informações abaixo.

### Mapa de páginas e frames

| Rota | Frame no Figma | Desktop | Tablet | Mobile | Status |
|---|---|---:|---:|---:|---|
| `/` |  |  |  |  | Pendente |
| `/sobre` |  |  |  |  | Pendente |
| `/servicos` |  |  |  |  | Pendente |
| `/contato` |  |  |  |  | Pendente |

### Tokens visuais

Copie do Figma:

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f5f5f5;
  --color-text: #111111;
  --color-text-muted: #666666;
  --color-primary: #000000;
  --color-accent: #cc0000;
  --color-line: #dddddd;

  --font-body: sans-serif;
  --font-display: sans-serif;

  --container: 1200px;
  --space-page: 24px;
  --radius-small: 4px;
  --radius-medium: 8px;
}
```

Substitua os valores pelos tokens reais do design. Não invente novas cores,
sombras, gradientes ou raios sem necessidade.

### Tipografia

Registre:

| Uso | Fonte | Peso | Tamanho desktop | Tamanho mobile | Line-height |
|---|---|---:|---:|---:|---:|
| Hero |  |  |  |  |  |
| H2 |  |  |  |  |  |
| H3 |  |  |  |  |  |
| Corpo |  |  |  |  |  |
| Label |  |  |  |  |  |

Regras:

- Não escalar fontes diretamente com a largura da viewport.
- Use `clamp()` apenas com limites previsíveis.
- Mantenha `letter-spacing: 0`, salvo quando o Figma exigir outro valor.
- Verifique palavras longas em português e inglês.

### Espaçamento e grid

Registre:

- Largura máxima do conteúdo.
- Padding lateral desktop, tablet e mobile.
- Número de colunas.
- Gaps.
- Alturas mínimas de hero e seções.
- Breakpoints observados no Figma.
- Comportamento de imagens em cada breakpoint.

### Componentes identificados no Figma

Liste antes de desenvolver:

- Header.
- Menu desktop.
- Menu mobile.
- Botões primário e secundário.
- Hero.
- Títulos de seção.
- Cards.
- Listas.
- Formulários.
- Footer.
- Modais.
- Carrosséis.
- Acordeões.
- Elementos animados.

## 5. Assets

### Convenções

```text
public/images/<pagina>/<nome-descritivo>.webp
public/logos/<marca>.png
public/icons/<nome>.svg
public/fonts/<familia>/<arquivo>.woff2
```

Regras:

- Preserve arquivos originais fora do projeto quando necessário.
- Use nomes descritivos em minúsculas e com hífen.
- Não use arquivos como `image1.png`, `final-final.png` ou `foto-nova.jpg`.
- Prefira WebP ou AVIF para fotografias.
- Use SVG para marcas e gráficos vetoriais quando houver arquivo original.
- Defina `alt` pelo significado da imagem, não pelo nome do arquivo.
- Imagens decorativas devem usar `alt=""`.
- Não deixe assets temporários dentro de `public`.

### Inventário de assets

| Arquivo | Página | Uso | Formato final | Alt | Status |
|---|---|---|---|---|---|
|  |  |  |  |  | Pendente |

## 6. Conteúdo

O texto final deve estar disponível antes da revisão visual.

Para cada página, registre:

```text
Rota:
Title SEO:
Description SEO:
H1:
Eyebrow:
Texto principal:
CTAs:
Seções:
Imagens:
Links:
```

Regras:

- Uma página deve ter apenas um `h1`.
- Títulos devem explicar a seção, não apenas decorá-la.
- Evite textos provisórios dentro dos componentes.
- CTAs devem apontar para destinos reais.
- Telefone, e-mail e redes sociais devem ser centralizados em constantes.
- Conteúdo bilíngue deve ter a mesma estrutura sem depender de tradução
  automática em runtime.

## 7. Rotas e navegação

Preencha a tabela:

| Item | Rota ou âncora | Disponível | Header | Footer |
|---|---|---:|---:|---:|
| Início | `/` | Sim | Sim | Não |
| Sobre | `/sobre` |  |  |  |
| Serviços | `/servicos` |  |  |  |
| Contato | `/contato` ou `#contato` |  |  |  |
| Privacidade | `/privacidade` |  | Não | Sim |
| Termos | `/termos` |  | Não | Sim |

Valide:

- Nenhum link usa `#` sem existir um `id` correspondente.
- Rotas localizadas apontam para a versão equivalente.
- Links externos usam `target="_blank"` e `rel="noreferrer"` quando adequado.
- O menu fecha após uma navegação no mobile.
- A rota atual é refletida corretamente na navegação.

## 8. Responsividade

Breakpoints devem vir do comportamento do design, não de dispositivos
específicos.

Verificar pelo menos:

- 360 × 800.
- 390 × 844.
- 768 × 1024.
- 1024 × 900.
- 1440 × 1000.
- 1920 × 1080.

Checklist:

- Sem rolagem horizontal.
- Sem texto cortado.
- Botões não ultrapassam o viewport.
- Menu completo e acessível.
- Imagens preservam o foco importante.
- Cards mantêm dimensões estáveis.
- Conteúdo não fica escondido atrás do header.
- Hover não é necessário para acessar informação no mobile.

## 9. Acessibilidade

- HTML semântico.
- Hierarquia correta de títulos.
- `aria-label` somente quando o texto visível não for suficiente.
- Foco visível para links, botões e campos.
- Contraste verificado.
- Navegação completa por teclado.
- Respeito a `prefers-reduced-motion`.
- Botões são usados para ações; links são usados para navegação.
- Formulários possuem `label`, mensagens de erro e estados de envio.
- Elementos decorativos ficam fora da árvore de acessibilidade.

## 10. SEO e metadados

Definir:

- `metadataBase`.
- Title padrão e template.
- Description por página.
- Open Graph.
- Twitter cards.
- Ícones e favicon.
- `robots.txt`.
- `sitemap.xml`.
- Canonical.
- Idioma do documento.
- Dados estruturados quando aplicáveis.

Para sites bilíngues:

- Rotas explícitas por idioma.
- `hreflang`.
- Conteúdo equivalente.
- Troca de idioma preservando a página atual.

## 11. Privacidade e integrações

Antes de adicionar scripts externos, registrar:

| Serviço | Finalidade | Dados | Cookies | Consentimento | Política |
|---|---|---|---|---|---|
| Analytics |  |  |  |  |  |
| Formulário |  |  |  |  |  |
| Chat |  |  |  |  |  |

Regras:

- Scripts opcionais só carregam após consentimento.
- Não criar cookies apenas para registrar consentimento; prefira
  `localStorage` quando apropriado.
- Se não houver cookies essenciais, ofereça a opção de não aceitar cookie
  algum.
- Política de privacidade deve descrever apenas práticas existentes.
- Termos e políticas devem passar por revisão jurídica antes da publicação.

## 12. Performance

Metas iniciais:

- Evitar JavaScript desnecessário no cliente.
- Manter componentes como Server Components quando não houver interação.
- Priorizar somente imagens visíveis no primeiro viewport.
- Definir `sizes` corretamente em `next/image`.
- Evitar bibliotecas pesadas para animações pequenas.
- Não carregar vídeos automaticamente no mobile.
- Reduzir o peso de fontes, imagens e ícones.
- Evitar layout shift com dimensões estáveis.

## 13. Deploy

Para deploy com Docker:

```ts
// next.config.ts
const nextConfig = {
  output: "standalone",
};

export default nextConfig;
```

O projeto deve ter:

- `Dockerfile` multi-stage.
- `.dockerignore`.
- Usuário não-root.
- Porta configurável por `PORT`.
- Host `0.0.0.0`.
- Endpoint `/api/health`.
- HTTPS no proxy da plataforma.
- Variáveis de ambiente documentadas.

Variáveis públicas `NEXT_PUBLIC_*` são incorporadas durante o build. Defina-as
antes de construir a imagem.

## 14. Fluxo de desenvolvimento

### Etapa 1 — Preparação

1. Confirmar escopo.
2. Conferir versões.
3. Ler documentação local do Next.js.
4. Mapear frames do Figma.
5. Inventariar assets.
6. Registrar conteúdo e rotas.
7. Definir tokens.

### Etapa 2 — Fundação

1. Configurar fontes.
2. Criar tokens globais.
3. Criar container e botões.
4. Implementar header e footer.
5. Criar metadados.
6. Preparar rotas.

### Etapa 3 — Páginas

Implementar uma página por vez:

1. Estrutura semântica.
2. Desktop.
3. Tablet.
4. Mobile.
5. Interações.
6. Conteúdo final.
7. Revisão visual.

### Etapa 4 — Verificação

```bash
npm run lint
npm run build
```

Além disso:

- Testar links.
- Testar formulário.
- Testar menu por teclado.
- Capturar screenshots nos viewports definidos.
- Conferir console do navegador.
- Conferir página 404.
- Conferir política de privacidade e cookies.

## 15. Regras para reduzir uso de tokens

### Para o usuário

- Envie o link do Figma e indique os frames exatos.
- Entregue todos os textos em um único documento.
- Nomeie os assets antes de colocá-los em `public`.
- Informe prioridades e itens fora do escopo.
- Envie referências visuais junto ao primeiro pedido.
- Agrupe alterações relacionadas em uma mensagem.
- Diga quando uma decisão substitui uma anterior.

### Para o agente

- Ler primeiro `AGENTS.md`, `package.json`, a árvore de arquivos e este guia.
- Não reler arquivos grandes sem necessidade.
- Usar buscas específicas com `rg`.
- Ler arquivos independentes em paralelo.
- Reutilizar padrões existentes.
- Não criar abstrações antes de existir repetição real.
- Não pesquisar tecnologias já definidas no projeto.
- Não gerar várias alternativas quando uma direção já foi aprovada.
- Implementar, validar e relatar somente o que mudou.
- Manter atualizada uma seção curta de decisões.

### Pacote mínimo de contexto para cada tarefa

Use este formato:

```text
Objetivo:
Página ou componente:
Frame do Figma:
Comportamento desktop:
Comportamento mobile:
Conteúdo:
Assets:
Restrições:
Critério de aceite:
```

## 16. Registro de decisões

Atualize durante o projeto:

| Data | Decisão | Motivo | Arquivos afetados |
|---|---|---|---|
|  |  |  |  |

Não preserve decisões antigas como se ainda fossem válidas. Quando uma decisão
for substituída, marque a anterior como obsoleta.

## 17. Critério de conclusão

Uma página está concluída somente quando:

- Corresponde ao Figma nos viewports principais.
- Conteúdo final está aplicado.
- Não há overflow ou sobreposição.
- Header e footer funcionam.
- Links possuem destinos reais.
- Imagens possuem dimensão e texto alternativo.
- Estados de hover, foco e mobile estão implementados.
- Console não apresenta erros.
- Lint passa.
- Build passa.
- Alterações não quebram outras páginas.

## 18. Modelo de `AGENTS.md`

Copie e adapte no próximo repositório:

```md
# Regras do projeto

- Leia `NEXTJS_INSTITUTIONAL_PROJECT_GUIDE.md` antes de implementar.
- Leia a documentação da versão instalada em
  `node_modules/next/dist/docs/` antes de usar APIs do Next.js.
- O Figma indicado no guia é a fonte visual de verdade.
- Preserve tokens, componentes e padrões existentes.
- Não invente conteúdo, assets, cores ou interações.
- Use `apply_patch` para alterações manuais.
- Não reverta mudanças do usuário.
- Execute lint e build antes de concluir alterações relevantes.
- Para frontend, valide desktop, tablet e mobile.
- Mantenha o registro de decisões atualizado.
```

