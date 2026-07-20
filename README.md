# Ministério ARC — Altomir Rangel · Site oficial

Site institucional de Altomir Rangel: empresário, pregador e autor.
**Next.js 14 (App Router) + TypeScript + Tailwind CSS**, publicado na Vercel em [ministerioarc.com](https://www.ministerioarc.com).

---

## Rotas

| Rota | Conteúdo |
| --- | --- |
| `/` | Home: Hero · Visão · Livros · YouTube · Depoimentos + PIX · Contato |
| `/livros/[slug]` | Página individual de cada livro (estática, com JSON-LD de `Book` + `Offer`) |
| `/altardanoite` | Funil de leads do Altar de Oração (Meta Pixel + Google Sheets) |
| `/altardanoite/obrigado` | Confirmação do funil |
| `/sitemap.xml` · `/robots.txt` | Gerados a partir de `lib/site.ts` |

---

## Onde editar cada coisa

| Quero editar... | Arquivo |
| --- | --- |
| Domínio, WhatsApp, e-mail, YouTube, chave PIX | `lib/site.ts` |
| Todos os textos do site (hero, seções, rodapé) | `lib/content.ts` |
| Livros: sinopse, preço, links de compra, ISBN | `lib/books.ts` |
| Ofertas/benefícios exibidos na home por livro | `components/Books.tsx` (`meta`) |
| Vídeos de fallback do YouTube | `lib/videos.ts` (atualiza sozinho via `/api/videos`) |
| Depoimentos | `components/Contribute.tsx` |
| Cores / paleta | `tailwind.config.ts` + `app/globals.css` |
| Metadata global (título, OG, JSON-LD) | `app/layout.tsx` |
| Config do funil Altar da Noite (Pixel, planilha, grupo) | `app/altardanoite/config.ts` |

Após `git push` na branch `main`, a Vercel publica automaticamente (~1 minuto).

---

## Imagens (`/public`)

| Arquivo | Uso |
| --- | --- |
| `altomir-hero.webp` | Hero — recorte em alta resolução (2112px, fundo transparente) |
| `altomir-portrait.jpg` | Retrato original (fonte do recorte) |
| `altomir-fundo.jpg` | Seção Visão & Propósito |
| `altomir-pregando.jpg` | Cartão "Convite para Ministrar" (Contato) |
| `og.jpg` | Open Graph / Twitter Card do site (1200×630) |
| `altomir-og.jpg` | Open Graph do funil `/altardanoite` |
| `pix-qr.svg` | QR Code PIX (BR Code estático validado — chave em `lib/site.ts`) |
| `books/*.jpg` | Capas dos livros |

Favicon e ícone da aba: `app/favicon.ico` + `app/icon.svg` + `app/apple-icon.png`.

> Fotografias: usar sempre fotos reais do Altomir. Para trocar a foto do hero,
> gere um recorte (remoção de fundo) em alta resolução e salve como
> `public/altomir-hero.webp` mantendo o enquadramento vertical (busto para cima).

---

## Qualidade

- **Lighthouse (build local):** Desktop 99–100 · Mobile ~87 (LCP limitado pela rede) · Acessibilidade 100 · SEO 100 · CLS 0
- `npm run lint` — ESLint (next/core-web-vitals)
- `npm run typecheck` — TypeScript estrito
- `npm run build` — build de produção (13 páginas estáticas)

Acessibilidade: skip-link, `focus-visible` dourado, `aria-expanded` no menu,
labels associados no formulário, contraste AA nos textos, `prefers-reduced-motion`.

SEO: domínio canônico `https://www.ministerioarc.com`, Open Graph + Twitter Card,
JSON-LD (`Person`, `WebSite`, `Book` + `Offer`, `BreadcrumbList`), sitemap e robots corretos.

---

## Rodar localmente

```bash
npm install
npm run dev
```

Abre em `http://localhost:3000`.

## Stack

- Next.js 14.2 (App Router, Server Components) · React 18 · TypeScript 5
- Tailwind CSS 3.4 (paleta navy/dourado custom)
- `next/font`: Bebas Neue · Inter · Playfair Display
- `sharp` para otimização de imagens (AVIF/WebP)
- lucide-react (ícones) · Formspree (formulário) · Plausible (analytics)
