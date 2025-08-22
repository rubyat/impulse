<div align="center">

# Impulse

Modern Nuxt 4 + Tailwind CSS demo app, designed and scaffolded with AI. Built to showcase a polished, mobile‑first UI and clean developer experience.

![Splash](assets/images/impulse-splash.svg)

[Nuxt](https://nuxt.com/) · [Vue 3](https://vuejs.org/) · [Tailwind CSS](https://tailwindcss.com/) · [Font Awesome](https://fontawesome.com/)

<br />

![Static Badge](https://img.shields.io/badge/Nuxt-4.0-green?logo=nuxtdotjs)
![Static Badge](https://img.shields.io/badge/Vue-3.5-42b883?logo=vue.js&logoColor=white)
![Static Badge](https://img.shields.io/badge/Tailwind-3-blue?logo=tailwindcss)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![Node >= 18](https://img.shields.io/badge/Node-%3E%3D18.x-339933?logo=node.js&logoColor=white)

</div>

## Features

- Clean, responsive UI with Nuxt 4 and Tailwind CSS
- Modular component structure under `app/components/`
- Simple content system using `public/data/*.json`
- Font Awesome integration via Nuxt plugin `plugins/fontawesome.ts`
- TypeScript support and Nuxt auto‑imports/composables

## Getting Started

Prerequisites: Node.js >= 18.

```bash
npm install
npm run dev
# App runs at http://localhost:3000
```

### Production

```bash
npm run build
npm run preview   # Preview the production build locally
```

## Scripts

- `dev` – Start dev server
- `build` – Build for production
- `generate` – Generate static site (SSG)
- `preview` – Preview built app

## Tech Stack

- `nuxt@^4` with Vue 3 and Vite
- `@nuxtjs/tailwindcss` for styling
- `@fortawesome/*` for icons
- `date-fns` for date utilities

## Project Structure

```
app/
  components/       # UI components
  layouts/          # App layouts
  pages/            # Route pages
assets/             # CSS/images
public/             # Static assets (served at root)
plugins/            # Nuxt plugins (fontawesome)
composables/        # Reusable logic hooks
```

## Deployment

Any static host or Node host works. See Nuxt docs for options:
- Vercel / Netlify (recommended)
- Static export via `npm run generate`

## License

This project is licensed under the MIT License – see [`LICENSE`](LICENSE).

---

If you find this useful, feel free to star the repo!
