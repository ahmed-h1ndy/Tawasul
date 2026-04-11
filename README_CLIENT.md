# Tawasul Contact Solutions Website

This package contains the source code and production-ready build output for the **Tawasul Contact Solutions** bilingual corporate website. The project is a frontend web application built with **React**, **Vite**, **TypeScript**, **Tailwind CSS 4**, and **Wouter** for client-side routing.

## Project overview

The website includes bilingual **English** and **Arabic** content, Arabic **RTL** layout support, a premium navy-and-gold visual system, and the main corporate pages for Home, About Us, Services, Why Choose Us, and Contact Us.

| Item | Details |
|---|---|
| Framework | React 19 |
| Build tool | Vite 7 |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| Routing | Wouter |
| Package manager | pnpm |
| Runtime requirement | Node.js 22+ recommended |

## Installation

First install **Node.js** and **pnpm** on your machine. Then extract the source ZIP file and run the installation command inside the project directory.

```bash
pnpm install
```

If pnpm is not installed globally, you can install it with:

```bash
npm install -g pnpm
```

## Run locally

To start the development server locally, open a terminal in the project folder and run:

```bash
pnpm dev
```

This starts the Vite development server. After the server starts, open the local URL shown in the terminal, which is typically `http://localhost:3000` or the Vite port printed in your environment.

## Production build

To generate the production build, run:

```bash
pnpm build
```

This command creates the compiled frontend assets and production server bundle in the `dist/` directory.

## Preview the production build locally

After building, you can run the production bundle locally with:

```bash
pnpm start
```

This serves the generated production output through the included Node.js server.

## Deployment guidance

This website can be deployed to most modern hosting providers. The deployment approach depends on whether the host supports Node.js processes or only static files.

| Hosting type | What to upload or run | Recommended approach |
|---|---|---|
| Static hosting | `dist/public/` | Use when the provider serves static sites only |
| Node.js hosting | Full project or production bundle | Install dependencies, run `pnpm build`, then `pnpm start` |
| Container/VPS hosting | Full project | Install Node.js and pnpm, then build and run normally |

For **static hosts** such as Netlify, Vercel static output, Cloudflare Pages, GitHub Pages, or any CDN-based static hosting platform, publish the contents of:

```text
dist/public/
```

For **Node.js hosts** such as a VPS, Render web service, Railway, or similar platforms, use the following process:

1. Upload the source code.
2. Run `pnpm install`.
3. Run `pnpm build`.
4. Start the app with `pnpm start`.

## Included archives

Two separate archives are prepared for delivery.

| Archive | Purpose |
|---|---|
| Source code ZIP | Contains the project files required to install dependencies, run locally, and build the site |
| Production build ZIP | Contains the ready-to-deploy compiled output |

## Important notes

The source archive intentionally excludes dependency folders such as `node_modules` because these can be restored with `pnpm install`. The production build archive is intended for deployment or handoff when a compiled output is specifically required.
