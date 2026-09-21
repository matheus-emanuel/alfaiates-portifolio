# Alfaiates Sistemas — site

Landing page de produção, reconstruída a partir do protótipo do design system
(`../project/`). Next.js 16 (App Router) + React 19 + TypeScript, CSS Modules
sobre os tokens do sistema.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # build de produção
npm start          # serve o build
npm run typecheck  # tsc --noEmit
npm run lint       # eslint
npm run imagens    # converte os prints de ../project/project-images para WebP
```

## O que já está ligado

- **WhatsApp** (88) 99689-7590, com a mensagem de abertura já escrita.
- **LinkedIn e GitHub** das três pessoas do time.
- **Prints dos quatro projetos**, em `public/trabalhos/`. Os PNGs originais
  ficam em `../project/project-images/`; `npm run imagens` converte para WebP
  no tamanho da página.

## Antes de publicar

1. **Instagram.** `links.instagram` em `src/content/site.ts` ainda está vazio,
   e por isso o botão "Ver no Instagram" não é renderizado — mas o texto da
   seção "Quem somos" convida a acompanhar o Instagram. Enquanto a URL não
   chegar, o convite não tem para onde levar.
2. **Fotos do time.** `public/time/` está vazio: os três slots mostram a medida
   que falta (quadrada, mínimo 264×264). Depois de colocar o arquivo, apontar o
   caminho no campo `foto` de cada pessoa em `site.ts`.
3. **Destino do formulário.** `src/app/actions.ts` valida no servidor e só
   registra no log; nenhum pedido chega em ninguém. Por isso
   `ENTREGA_ATIVA = false` em `src/app/form-state.ts`: a tela de sucesso não
   promete retorno, ela manda a pessoa pro WhatsApp. Ao ligar e-mail, CRM ou
   WhatsApp API, virar a constante para `true` e a confirmação volta a ser
   "a gente chama no WhatsApp hoje".
4. **Domínio.** `site.url` está provisório e alimenta a canônica e o Open Graph.
5. **Cidade.** O rodapé e o JSON-LD dizem "São Paulo, SP", copy que veio do
   protótipo. O DDD do WhatsApp é 88 (Ceará). Conferir qual é a praça certa.

## Como o projeto está organizado

```
src/
  app/
    layout.tsx        fontes, metadata, skip link
    page.tsx          ordem das seções e JSON-LD
    actions.ts        Server Action do formulário
    form-state.ts     estado inicial do formulário
    globals.css       tokens + utilitários de grade
  components/
    ui/               design system (Button, Card, Field, Icon, …)
    sections/         as onze faixas da página
  content/site.ts     toda a copy e todos os links
  styles/tokens/      tokens do design system, copiados de ../project/tokens
```

**A copy não mora nos componentes.** Mudar texto é mudar `content/site.ts`.

## Decisões que valem saber

**Quase tudo é Server Component.** Só dois arquivos têm `"use client"`:
`ui/FlipWord.tsx` (o painel split-flap, que precisa de um ticker) e
`sections/ContactForm.tsx` (que precisa de `useActionState`). Hover, foco,
press, o accordion do FAQ e o reveal dos cards de portfólio são CSS puro — no
protótipo eles eram `useState`, o que tornava cliente cada card da página e
deixava o hover inacessível por teclado.

**O FAQ é `<details>`/`<summary>`.** Abre e fecha sem JavaScript, e já vem com
teclado e leitor de tela corretos.

**O formulário funciona sem JavaScript.** A validação roda na Server Action, e
o navegador faz o POST normal: os erros voltam renderizados no campo certo.

**Tokens são a única fonte de cor, medida e sombra.** Nenhum valor de marca é
escrito solto em componente. `--accent-warm-ink` foi acrescentado ao sistema:
era um hex solto no código do protótipo, usado como cor de ícone e de bullet no
tom rosa.

**Ícones.** Interface: Lucide, que é o conjunto que o design system nomeia,
traço padronizado em 2px. Marcas (LinkedIn, GitHub, Instagram): Phosphor, porque
o Lucide retirou os ícones de marca do pacote. O glifo do WhatsApp continua
sendo o que já vinha desenhado no sistema. Como todos renderizam no servidor,
nenhuma das duas bibliotecas vai para o bundle do cliente.

**Fontes.** Plus Jakarta Sans e JetBrains Mono via `next/font`, self-hosted,
com preload. Os tokens `--font-core` e `--font-mono` apontam para as variáveis
geradas, então o resto do sistema não muda.

## Ritmo de fundo (zebra)

`papel` → `alternado` → `papel` → `alternado` → `papel` → `alternado` →
`papel` → `alternado` → `papel` (quem somos) → `alternado` (FAQ) → `escuro`
(CTA final). Seção nova entra respeitando a alternância: nunca dois fundos
iguais seguidos, e só uma seção escura na página inteira.

## Peso

Página estática, pré-renderizada no build. HTML 21 KB gzip, CSS+JS 186 KB gzip
— dos quais cerca de 9 KB são o código da página; o resto é o runtime de
React 19 + App Router.
