# ALDAK — Landing Page Programa de Estágio 2027

One-page estática de recrutamento para o Programa de Estágio ALDAK 2027. Deploy na Vercel.

- Todo o copy está em `docs/spec.md` (verbatim, seção por seção).
- As referências visuais estão em `docs/reference/` (prints da página atual no Inhire + slides oficiais). **O resultado final deve reproduzir esses prints.** Em caso de dúvida de layout, abra a imagem de referência da seção antes de decidir.

## Stack

- Next.js (App Router) + TypeScript + Tailwind CSS
- Sem backend, sem banco de dados. Página 100% estática.
- Ícones: lucide-react (estilo linha/outline, stroke 1.5–2)
- Imagens via `next/image` (assets em `public/`)

## Regras invioláveis

1. **Todo o texto do site vem de `docs/spec.md`, verbatim.** Nunca inventar, resumir ou "melhorar" copy, números, benefícios, depoimentos, requisitos ou etapas. O que está em `[colchetes]` no spec é instrução de layout, não texto.
2. **Cores: somente a paleta abaixo** + tints/shades funcionais (hover, sombras). Nenhuma outra cor. O roxo que aparece na seção "etapas" do print `docs/reference/inhire-page-3.png` é um default do Inhire e **não** deve ser reproduzido — ver seção 8 abaixo.
3. **Fonte: somente a família Zalando Sans.** Fallback: `Arial, sans-serif`.
4. **Tokens `{{ }}` não substituídos:** renderizar "—" e deixar `// TODO` no código.
5. **URLs de inscrição centralizadas** na lista `INSCRICOES` em `src/content/site.ts` (uma entrada por vaga: `id`, `label`, `url`). Hoje são duas vagas no Inhire: **Nível Superior** e **Nível Técnico**. Todo ponto de CTA renderiza `<CTAGroup />` (`src/components/CTAGroup.tsx`), que gera um botão por vaga; nunca criar botão "Inscreva-se" avulso. Todos abrem em nova aba (`target="_blank" rel="noopener"`). Os rótulos dos botões ("Inscreva-se · Nível Superior" / "Inscreva-se · Nível Técnico") vivem em `INSCRICOES`, não no spec.
6. **Assets oficiais são usados como estão.** Não recriar logos, banner ou fotos de depoimentos em SVG/CSS. Os arquivos em `public/` são a fonte de verdade visual.

## Brand tokens

### Cores (CSS variables no `globals.css`)

| Token | Hex | Uso |
|---|---|---|
| `--navy` | `#20265B` | Footer, seção de etapas, títulos sobre fundo claro (alternativa) |
| `--blue-dark` | `#273D92` | **Cor exata dos logos.** Títulos e labels sobre fundo claro, bordas de cards claros, bullets de requisitos, links |
| `--blue-royal` | `#3951CD` | Detalhes, hover de links, ícones |
| `--blue-texture` | `#1B32AE` | Cor média da textura `blue-paper.jpg`. Usar como `background-color` por trás da textura e como fallback |
| `--orange` | `#F26C3F` | Botões CTA, cards da seção "O estágio que te leva além", nomes nos depoimentos, fundo do CTA final |
| `--amber` | `#FFBB55` | Apoio, uso pontual |
| `--gray-light` | `#D9D9D9` | Divisores |
| `--gray-bg` | `#F3F3F3` | Fundo do bloco "Requisitos" e fallback das seções claras |

Branco `#FFFFFF` e preto `#000000` completam a paleta.

### Fundos com textura

- **Seções azuis** usam `public/textures/blue-paper.jpg` (1920×1080, papel amassado) como `background-image` com `background-size: cover`, `background-position: center`, sobre `background-color: var(--blue-texture)`. Texto sempre branco.
- **Seções claras** usam textura de papel branco/cinza-claro (ver prints `inhire-page-2.png` e `slide-oportunidades.png`). **Não há arquivo oficial dessa textura** — `// TODO` em `globals.css`. Enquanto não houver, usar `var(--gray-bg)` liso. Não gerar textura com CSS/noise.

### Tipografia (Google Fonts)

- **Títulos (h1, h2):** Zalando Sans Expanded, bold
- **Subtítulos e títulos de card (h3):** Zalando Sans SemiExpanded, semibold
- **Texto corrido, botões, listas, chips:** Zalando Sans, regular/medium

Carregar via `next/font/google` (`Zalando_Sans`, `Zalando_Sans_Expanded`, `Zalando_Sans_SemiExpanded`). Se algum nome não existir na versão instalada do Next, usar `<link>` do Google Fonts no layout como fallback — nunca trocar de fonte.

### Componentes recorrentes

- **Botão CTA:** fundo `--orange`, texto branco, `rounded-full`, padding generoso, hover = orange 10% mais escuro (`--color-orange-hover`). Exceção: sobre fundo laranja (CTA final) o botão é branco com texto `--orange`. Os botões sempre vêm em par via `<CTAGroup />`: empilhados no mobile, lado a lado a partir de `sm`.
- **Card claro:** fundo branco, borda 1px `--blue-dark`, `rounded-2xl`, título em `--blue-dark` (h3), texto em preto/cinza-escuro.
- **Card laranja:** fundo `--orange`, texto branco, `rounded-2xl`, sem borda.
- **Chip:** fundo branco, texto `--navy`, `rounded-full`, borda 1px branca (sobre azul) — ver `slide-35-anos.png`.
- **Foto arredondada:** `rounded-2xl`, `object-cover`.
- Cantos arredondados generosos em tudo (cards, botões, imagens, chips).

## Assets (`public/`)

Renomear os arquivos originais ao copiar (sem acentos, espaços ou sufixos `__1_`):

| Original | Destino | Observação |
|---|---|---|
| `Cópia_de_logo_horiz_tecnologia.png` | `public/brand/aldak-horizontal-white.png` | 2813×625, **branco** sobre transparente. Para a versão azul (navbar), renderizar com CSS `mask-image` + `background-color: var(--blue-dark)` — não recriar o logo. |
| `LOGO-PROGRAMA_ESTA_GIO-AZUL__2_.png` | `public/brand/programa-estagio-2027-blue.png` | 2844×1251, cor `#273D92` |
| `LOGO-PROGRAMA_ESTA_GIO-BRANCO__1_.png` | `public/brand/programa-estagio-2027-white.png` | 2844×1251 |
| `TEXTURA_1.jpg` | `public/textures/blue-paper.jpg` | 1920×1080 |
| `BANNER-INHIRE-1366x370__4_.jpg` | `public/hero/banner-1366x370.jpg` | Já contém logo do programa, "INSCRIÇÕES ATÉ 25/10" e "Oportunidades em Salvador e São Paulo" |
| `Hyago__2_.jpg` | `public/depoimentos/hyago.jpg` | 1024×1024, já vem com moldura laranja sobre azul |
| `Evelyn__2_.jpg` | `public/depoimentos/evelyn.jpg` | idem |
| `Islã__2_.jpg` | `public/depoimentos/isla.jpg` | idem |
| `Camila.jpg` | `public/depoimentos/camila.jpg` | idem |

Referências (não servidas, ficam em `docs/reference/`):

| Original | Destino |
|---|---|
| `image.png` | `docs/reference/inhire-page-1.png` (navbar + hero + 2 seções azuis) |
| `image__1_.png` | `docs/reference/inhire-page-2.png` (valores + estágio + oportunidades) |
| `image__2_.png` | `docs/reference/inhire-page-3.png` (etapas + benefícios + depoimentos) |
| `OFICIAL_Feira_de_Carreiras_Inteli_16_09.png` | `docs/reference/slide-proposito.png` |
| `OFICIAL_Feira_de_Carreiras_Inteli_16_09__1_.png` | `docs/reference/slide-35-anos.png` |
| `Ajustes_Inhire__5_.png` | `docs/reference/slide-oportunidades.png` |
| `Ajustes_Inhire__6_.png` | `docs/reference/slide-valores.png` |

Componente `<Logo variant="aldak-white" | "aldak-blue" | "programa-white" | "programa-blue" />` isolado em `src/components/Logo.tsx`.

## Estrutura da página (ordem fixa)

Cada seção é um componente em `src/components/sections/`, consome `src/content/site.ts` e tem `id` para âncora do navbar. Fundo indicado entre parênteses. **A sequência de fundos abaixo é a do mockup e substitui qualquer regra genérica de alternância.**

1. **Navbar** (branco, sticky) — logo ALDAK azul à esquerda; links de âncora ao centro; os dois botões CTA (compactos) à direita. Layout completo só a partir de `xl` (1280); abaixo disso, menu hambúrguer com links + os dois botões empilhados. Ref: `inhire-page-1.png`.
2. **Hero** `#hero` (textura azul) — o banner `hero/banner-1366x370.jpg` em largura total do container, `rounded-2xl`, proporção preservada; abaixo dele, centralizados, os dois botões CTA. Ref: `inhire-page-1.png`.
3. **Propósito** `#proposito` (textura azul) — h1 branco centralizado; linha de 4 fotos quadradas `rounded-2xl` (profissionais com EPI); frase de apoio abaixo. Ref: `slide-proposito.png`. Fotos em `public/proposito/pessoa-{1..4}.webp` (recortes com fundo branco, ~800×800, na ordem do slide). Cada uma vai dentro de um card branco `rounded-2xl` quadrado com `object-cover object-top`.
4. **35 anos** `#quem-somos` (textura azul) — h2 branco em 3 linhas à esquerda, parágrafo, grid de 6 chips em 3 colunas (2 linhas). Ref: `slide-35-anos.png`.
5. **Valores** `#valores` (papel claro) — h2 em `--blue-dark` em 2 linhas ("Nossos valores" / "Nossa cultura"); grid 2 colunas × 3 linhas, cada item = ícone lucide à esquerda + título h3 azul + texto. Ícones: Fome→`Rocket`, Verdade→`BadgeCheck`, Humildade Intelectual→`Lightbulb`, Comprometimento→`Flag` (ou `Mountain`), Resolutividade→`Puzzle`, Jogamos juntos→`Handshake`. Ref: `slide-valores.png`. Mobile: 1 coluna.
6. **O estágio** `#o-estagio` (papel claro) — tagline em `--blue-dark` centralizada, h2 centralizado, 3 cards laranja lado a lado. Ref: `inhire-page-2.png`. Mobile: empilhados.
7. **Oportunidades** `#oportunidades` (papel claro) — h2 à esquerda em 2 linhas; grid 2×2 de cards claros; abaixo, bloco "Requisitos" com fundo `--gray-bg`, `rounded-2xl`, título h3 em `--blue-dark`, bullets em 2 colunas com texto azul. Ref: `slide-oportunidades.png`.
8. **Etapas** `#etapas` (`--navy`, sem textura) — h2 branco centralizado; timeline vertical numerada (1–5) com linha conectora e círculos `--orange`, texto branco. Substitui a seção roxa do Inhire. Ref de posição: `inhire-page-3.png`.
9. **Benefícios** `#beneficios` (papel claro) — h2 em `--blue-dark`; grid 2×2 de cards claros com ícone lucide + h3 + texto. Ícones: Auxílio Refeição→`CreditCard`, Auxílio Transporte→`Bus`, Totalpass→`Dumbbell`, Dayoff→`Cake`. Ref: `inhire-page-3.png`.
10. **Depoimentos** `#depoimentos` (branco) — h2 em `--blue-dark` centralizado; 4 cards claros. Foto quadrada no topo (arquivo já vem com moldura, não adicionar outra borda), nome em `--orange` (medium), cargo em cinza, depoimento completo abaixo. Desktop: grid 2×2 (o texto é longo — não cortar, não usar "ler mais"). Mobile: 1 coluna. Ref: `inhire-page-3.png`.
11. **CTA final** `#inscreva-se` (`--orange`) — h2 branco "Inscrições até 25/10" + os dois botões brancos com texto laranja.
12. **Footer** (`--navy`) — logo ALDAK branco + logo do programa branco, texto "Programa de Estágio Aldak 2027".

Mobile-first; breakpoints `md` (768), `lg` (1024) e `xl` (1280, só o navbar). Container `max-w-6xl`. Espaçamento vertical de seção: `py-16 md:py-24`.

## Arquitetura de conteúdo

- **Todo o copy em `src/content/site.ts`** como objeto tipado, espelhando as seções acima (`nav`, `hero`, `proposito`, `quemSomos`, `valores`, `oEstagio`, `oportunidades`, `requisitos`, `etapas`, `beneficios`, `depoimentos`, `ctaFinal`, `footer`).
- Componentes não contêm texto hardcoded — só consomem o objeto.
- Ícones referenciados por nome no objeto (`icon: "Rocket"`) e resolvidos por um mapa em `src/components/Icon.tsx`.

## Comandos

- `npm run dev` — servidor local
- `npm run build` — build de produção. **Precisa passar sem erros antes de qualquer commit.**
- `npm run lint`

## Pendências conhecidas (`// TODO` no código)

- Textura de papel claro (seções 5–7, 9) — arquivo não entregue.
- Data "25/10" está gravada no banner do hero; se mudar, o banner precisa ser refeito pelo design.
