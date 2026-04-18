# Altomir Rangel — Site oficial

Site institucional de Altomir Rangel: empresário cristão, pregador itinerante e autor.
Construído em **Next.js 14 (App Router) + TypeScript + Tailwind CSS**.

---

## Esta versão

Redesign **minimalista** com estética de **pureza** — paleta ivory/gold terroso, tipografia serifada Cormorant Garamond, respiros largos, decoração mínima. Foco em clareza, legibilidade e convite à contribuição.

### O que mudou

1. **Build corrigido** — arquitetura reescrita (Server Components limpos; `'use client'` só onde necessário).
2. **Minimalismo** — menos bordas, menos divisores, botões sóbrios (`.btn-primary`, `.btn-ghost`), inputs de linha fina.
3. **Seção "Visão & Apoie o canal"** — nova, dedicada. Vision statement + CTAs claros para inscrever-se, ativar o sino e compartilhar.
4. **Seção "Contribuir"** — três caminhos (pregação, livros, parceria) com versículo de fechamento (2 Coríntios 9:7).
5. **Formulário funcional** — WhatsApp + e-mail em um submit único, inputs minimalistas.
6. **Página individual de cada livro** (`/livros/[slug]`) gerada estaticamente.
7. **SEO completo** — sitemap, robots, JSON-LD (Person + Book), OpenGraph.
8. **`SafeImage`** — fallback elegante enquanto as imagens reais não estão no `/public`.

---

## Estrutura da home

```
Navbar
Hero              ← retrato + vision statement curto
Marquee           ← linha fina de palavras-chave
About             ← biografia + quote + estatísticas
Books             ← grade de 4 livros (cards sem bordas pesadas)
YouTube           ← 3 vídeos em destaque
Vision            ← vision statement + "Apoie o canal" (inscrever-se / sino / compartilhar)
Contribute        ← 3 caminhos: Pregar · Livros · Parceria + 2 Co 9:7
Contact           ← formulário WhatsApp + e-mail
Footer            ← claro, institucional
```

---

## Como subir para o GitHub

Na raiz do repositório local do projeto `arthurrrangel/altomir-rangel`:

```bash
# Copie os arquivos desta pasta por cima dos existentes
cp -R altomir-rangel/* .
cp altomir-rangel/.eslintrc.json .
cp altomir-rangel/.gitignore .

# O arquivo components/Invite.tsx ficou obsoleto (stub vazio);
# você pode apagá-lo após o commit se quiser.

git add -A
git commit -m "feat: redesign minimalista + seção Visão/Apoio + Contribuir"
git push origin main
```

A Vercel faz o deploy automático.

---

## Onde editar cada coisa

| Quero editar...                                          | Arquivo                                 |
| -------------------------------------------------------- | --------------------------------------- |
| Nome, tagline, WhatsApp, e-mail, Instagram, YouTube       | `lib/site.ts`                           |
| Estatísticas do Sobre (20+ anos etc.)                     | `lib/site.ts` (`stats`)                 |
| Itens do menu                                             | `lib/site.ts` (`navLinks`)              |
| Livros: sinopse, capítulos, link de compra                | `lib/books.ts`                          |
| Vídeos em destaque                                        | `lib/videos.ts`                         |
| Cores / paleta                                            | `tailwind.config.ts` + `app/globals.css`|
| Metadata global (título, OG, Twitter)                     | `app/layout.tsx`                        |
| Vision statement + CTAs de apoio ao canal                 | `components/Vision.tsx`                 |
| Três caminhos de contribuição                             | `components/Contribute.tsx`             |
| Texto da biografia                                        | `components/About.tsx`                  |
| Frase da marquee                                          | `components/Marquee.tsx`                |

---

## Imagens (em `/public`)

| Arquivo                     | Usado em                  | Dimensão sugerida |
| ----------------------------- | -------------------------- | ----------------- |
| `/altomir-hero.jpg`         | Hero                      | 1200 × 1500 (4:5) |
| `/altomir-about.jpg`        | Sobre                     | 900 × 1200 (3:4)  |
| `/books/[slug].jpg`         | Capa de cada livro        | 600 × 800 (3:4)   |

Slugs dos livros (ver `lib/books.ts`):

- `o-proposito-da-prosperidade`
- `da-religiao-a-realidade`
- `bem-vindo-ao-novo-voce`
- `feijao-com-arroz`

Enquanto as imagens não estiverem no `/public`, o `SafeImage` renderiza um placeholder em creme com o nome — o site nunca quebra.

---

## Formulário de contato

`components/Contact.tsx`:

1. Usuário preenche nome, e-mail, motivo (pregação / livros / parceria / outro) e mensagem.
2. Ao enviar, abre o WhatsApp já preenchido com o número de `lib/site.ts`.
3. Botão secundário abre `mailto:` de backup.

Sem backend, sem spam. Se no futuro quiser log do lead, plugar Resend ou Formspree é trivial.

---

## Rotas públicas

- `/` — home
- `/livros/[slug]` — página estática de cada livro
- `/sitemap.xml`
- `/robots.txt`

---

## Rodar localmente

```bash
npm install
npm run dev
```

Abre em `http://localhost:3000`.

---

## Stack

- Next.js 14.2.5 (App Router, Server Components)
- React 18 · TypeScript 5
- Tailwind CSS 3.4 (paleta custom)
- lucide-react
- Fontes Google: Cormorant Garamond, Inter, Playfair Display

---

## Próximos passos sugeridos

- [ ] Trocar placeholders por imagens reais (ver tabela acima)
- [ ] Atualizar sinopses, ISBN e links de compra em `lib/books.ts`
- [ ] Adicionar IDs reais dos vídeos em `lib/videos.ts`
- [ ] Ajustar vision statement no `components/Vision.tsx` se quiser redação própria
- [ ] (Opcional) Plugar Google Analytics ou Plausible em `app/layout.tsx`
- [ ] (Opcional) Trocar `mailto:` por Resend/Formspree em `Contact.tsx`
- [ ] Apagar `components/Invite.tsx` (stub obsoleto)
