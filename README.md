# Site Altomir Rangel

Site profissional desenvolvido em **Next.js 14 + TypeScript + Tailwind CSS**.

## 🚀 Como Rodar Localmente

```bash
# 1. Instale as dependências
npm install

# 2. Rode em modo desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## 📦 Deploy no Vercel (Recomendado)

1. Crie um repositório no GitHub e envie o projeto
2. Acesse [vercel.com](https://vercel.com) e importe o repositório
3. O Vercel detecta Next.js automaticamente — clique em **Deploy**

## ✏️ Personalizações Importantes

### Foto do Altomir
No arquivo `components/Hero.tsx`, substitua o placeholder `AR` por uma `<Image>` real:
```tsx
import Image from 'next/image'
// ...
<Image src="/altomir.jpg" alt="Altomir Rangel" fill className="object-cover" />
```
Adicione a foto em `public/altomir.jpg`.

### Livros
Em `components/Books.tsx`, edite o array `books` com:
- `title`: título real do livro
- `subtitle`: subtítulo
- `description`: sinopse
- `pages`: número de páginas
- `buyLink`: link para compra (WhatsApp, Hotmart, etc.)

### Vídeos do YouTube
Em `components/YouTube.tsx`, edite o array `videos`:
- `id`: o ID do vídeo do YouTube (parte final da URL: `youtube.com/watch?v=**VIDEO_ID**`)
- `title` e `description`: título e descrição do vídeo
- `duration`: duração em formato `mm:ss`

### Contato / Email
Em `components/Contact.tsx`, integre um serviço de formulário como:
- [Formspree](https://formspree.io) — gratuito, muito fácil
- [EmailJS](https://emailjs.com) — envio direto pelo front-end

## 🎨 Paleta de Cores

| Cor       | Valor     | Uso                        |
|-----------|-----------|----------------------------|
| Navy 900  | `#0a0f1e` | Fundo principal            |
| Gold 500  | `#c9a84c` | Destaques e CTAs           |
| Cream 100 | `#f5f0e8` | Textos principais          |
| Gold 400  | `#e8c060` | Hover e acentuações        |

## 📁 Estrutura do Projeto

```
altomir-rangel/
├── app/
│   ├── globals.css       # Estilos globais + Tailwind
│   ├── layout.tsx        # Layout raiz (SEO + metadados)
│   └── page.tsx          # Página principal
├── components/
│   ├── Navbar.tsx        # Navegação fixa com scroll
│   ├── Hero.tsx          # Seção inicial impactante
│   ├── About.tsx         # Sobre o Altomir
│   ├── Books.tsx         # Catálogo de livros
│   ├── YouTube.tsx       # Seção do canal YouTube
│   ├── Contact.tsx       # Formulário de contato
│   └── Footer.tsx        # Rodapé
├── public/               # Imagens e assets estáticos
├── tailwind.config.ts    # Configuração Tailwind
└── next.config.ts        # Configuração Next.js
```
