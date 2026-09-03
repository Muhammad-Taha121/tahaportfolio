# Muhammad Taha Sabir — Portfolio

Personal portfolio site for Muhammad Taha Sabir, full-stack software engineer. Built with Next.js 15 (App Router), TypeScript, Tailwind CSS v4 and Framer Motion.

## Stack

- Next.js 15 · App Router · TypeScript (strict)
- Tailwind CSS v4 (CSS-based theme in `app/globals.css`)
- Framer Motion (hero entrance, scroll reveals, marquee, mobile nav) — respects `prefers-reduced-motion`
- Fonts: Inter Tight (headings) and Inter (body) via `next/font/google`

## Project structure

```
app/                  routes, layout, metadata, sitemap/robots, OG image
components/           Nav, Hero, TechMarquee, About, Services, Solutions, Process, Projects, ContactFooter, Reveal
data/                 all site copy — site.ts, skills.ts, services.ts, process.ts, projects.ts, solutions.ts
lib/styles.ts         shared Tailwind class fragments (container, buttons, section tag)
```

All copy lives in `data/*.ts` and is fully typed — edit those files to change site content, no JSX hunting required.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Copy `.env.example` to `.env.local` and set:

| Variable | Purpose | Default |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Used for `metadataBase`, Open Graph/Twitter URLs, `sitemap.xml` and `robots.txt` | `https://example.com` (placeholder — must be replaced) |

The Gmail compose link, GitHub/LinkedIn URLs, email and phone number are hardcoded in `data/site.ts` since they don't change per environment.

## Scripts

```bash
npm run dev      # start dev server
npm run build    # production build (also type-checks)
npm run start    # run the production build locally
npm run lint     # ESLint
```

## Deploying to Vercel

1. Push this repository to GitHub (or GitLab/Bitbucket).
2. Import the repo at [vercel.com/new](https://vercel.com/new) — no build configuration is required, Vercel auto-detects Next.js.
3. In the Vercel project settings, add the `NEXT_PUBLIC_SITE_URL` environment variable set to your production URL (e.g. `https://your-project.vercel.app` or a custom domain), for Production (and Preview, if desired).
4. Deploy. Re-deploy after adding/changing the env var so `sitemap.xml`, `robots.txt` and Open Graph tags pick it up.

## TODO before launch

- [ ] Set `NEXT_PUBLIC_SITE_URL` to the real deployed domain (`data/site.ts:36`, also used in `.env.example`) — currently a placeholder (`https://example.com`).
- [ ] Once a real domain is live, consider adding it as `metadataBase` verification / Search Console if desired (not required for the site to function).

No other placeholder content remains — hero, about, services, solutions, process, project and footer copy are final.
