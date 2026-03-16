# lilhuy blog

My personal blog built with Astro — terminal/cyberpunk aesthetic, image galleries, global search, and more.

---

## Installation & local development

**Requirements:** Node.js 20+ and pnpm.

```bash
pnpm install
pnpm run dev
# → http://localhost:4321
```

To test the Pagefind search index locally:

```bash
pnpm run build && pnpm run preview
```

### Docker

```bash
docker build -t lilhuy-blog .
docker run -p 4321:80 lilhuy-blog
```

---

## Commands

| Command            | Action                                              |
| :----------------- | :-------------------------------------------------- |
| `pnpm install`     | Install dependencies                                |
| `pnpm run dev`     | Local dev server at `localhost:4321`                |
| `pnpm run build`   | Production build (`astro check` + build + Pagefind) |
| `pnpm run preview` | Preview the production build                        |
| `pnpm run format`  | Format with Prettier                                |
| `pnpm run lint`    | Lint with ESLint                                    |

---

## Configuration

Edit `src/config.ts` to update site metadata, timezone, galleries toggle, and audio player settings.

Social links and share links are defined in `src/constants.ts`.

---

## Credits

Template based on [astro-devosfera](https://github.com/0xdres/astro-devosfera) by [0xdres](https://github.com/0xdres), which itself is based on [AstroPaper](https://github.com/satnaing/astro-paper) by [Sat Naing](https://satnaing.dev). Both licensed under MIT.
