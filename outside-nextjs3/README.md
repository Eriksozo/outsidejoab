# Outside — Masterclass Outside Sem Segredos (Next.js)

Landing page (originalmente WordPress/Elementor) portada para **Next.js 14 (App Router)** e
re-skinada com o **Design System "Máquina de Padrões Melódicos"** (tema escuro/âmbar, Bebas Neue + Inter).

Todos os **links, imagens e vídeos** continuam os mesmos do site original.

## Rodando o projeto

```bash
npm install
npm run dev
```

Abra http://localhost:3000

Para produção:

```bash
npm run build
npm start
```

## Estrutura

```
outside-nextjs/
├── app/
│   ├── layout.jsx        # <html>, fontes (Bebas Neue + Inter), metadados, scripts Wistia
│   ├── page.jsx          # Monta as seções na ordem da página
│   └── globals.css       # Design System completo (tokens, componentes, animações)
├── components/
│   ├── WistiaScripts.jsx # Carrega player.js + os 5 embeds de vídeo (next/script)
│   ├── WistiaPlayer.jsx  # Wrapper do web component <wistia-player>
│   ├── ClientFx.jsx      # GSAP scroll-reveal + parallax + sticky CTA (client)
│   ├── fx/
│   │   ├── AmberShader.jsx   # Fundo WebGL do herói (shader âmbar reativo ao mouse)
│   │   └── ParticleField.jsx # Campo fixo de partículas/luzes (canvas 2D)
│   └── sections/         # Uma seção por arquivo (Hero usa Framer Motion)
│       ├── TopBar · Hero · SocialStrip · Story · Learn · Testimonials
│       ├── Compare · Bonus · Summary · Offer · Author · Support
│       └── Footer · StickyBar
├── next.config.mjs
├── jsconfig.json         # Alias "@/..."
└── package.json
```

## Animações & efeitos ("ultramegazord")

Mix de **Framer Motion + GSAP + WebGL**, tudo com guardas de 60fps / mobile / `prefers-reduced-motion`:

- **WebGL no herói** (`fx/AmberShader.jsx`): shader âmbar (fbm + domain warping = ondas) reativo ao mouse,
  pausado quando fora da viewport ou aba oculta.
- **Partículas/luzes** (`fx/ParticleField.jsx`): campo fixo atrás da página inteira; contagem reduzida em mobile.
- **Scroll reveals + parallax** (`ClientFx.jsx`): GSAP ScrollTrigger com stagger/blur; `[data-parallax]` em imagens.
- **Framer Motion**: entrada encenada do herói (`sections/Hero.jsx`).
- **CSS**: shimmer no acento, respiro de glow na oferta, float do vídeo, orbs de luz na seção de oferta, sticky bar.

Estilos da camada de efeitos em `app/fx.css`. Dependências: `framer-motion`, `gsap`.

## Design System

Os tokens, componentes e animações vivem em `app/globals.css` e seguem a referência fornecida:

- **Cores**: fundo marrom-preto (`#0F0C09`), primária âmbar (`#D9A35B`), CTA laranja (`#E87A1A`), texto em tons de areia.
- **Tipografia**: `Bebas Neue` (display/impacto) + `Inter` (corpo/UI), via Google Fonts.
- **Componentes**: `.btn--cta`, `.offer-box`, `.value-stack`, `.price-reveal`, `.bonus-card`,
  `.curriculum-card`, `.check-list` / `.cross-list`, `.hero`, `.social-strip`, `.sticky-bar`, etc.
- **Animações**: scroll-reveal, CTA pulse/shine, dot-pulse, badge-pulse, sticky slide-in.

## Imagens e vídeos (inalterados)

- **Imagens**: servidas das URLs originais (`fabricadefrasesinfinitas.com`) via `<img>`.
- **Vídeos**: embeds **Wistia** originais (mesmos `media-id`), carregados em `components/WistiaScripts.jsx`.

## Links preservados

- CTAs internos → âncora `#oferta`
- Botão de compra → `https://pay.kiwify.com.br/Z3dsYJZ`
- Atendimento → link do WhatsApp original

## Notas da migração

- A frase residual "Esse tom está no ponto certo para sua página?…" (resíduo de edição do conteúdo original)
  foi **removida** na seção de atendimento.
- O bloco de preço usa os números originais (R$197 / R$97 / R$97 / R$97; ancoragem R$397; à vista R$97 ou 3× R$34,29).
  O "Valor Total" é a soma real dos itens (R$488); o aviso de R$397 ao sair da página foi mantido.
