# Personal Portfolio Website

A responsive, dark-themed personal portfolio built with **React, Vite, TypeScript and Tailwind CSS**, with a GSAP/Lenis parallax intro from 21st.dev. Built as the mini project for **IT4048 – Version Control with Git and GitHub**.

- **Repository:** `https://github.com/YOUR-GITHUB-USERNAME/YashYadav_PortfolioWebsite` *(replace YOUR-GITHUB-USERNAME)*
- **Live site:** `https://YOUR-GITHUB-USERNAME.github.io/YashYadav_PortfolioWebsite/` *(available after you deploy)*

## Objective

Showcase Yash Yadav's introduction, education, skills, projects, achievements, résumé and contact details in one polished single-page site, and practise the Git/GitHub workflow (init, commit, push, deploy) while building it.

## Features

- Sticky, blurred navbar with active-section highlight, mobile hamburger menu and keyboard support
- Parallax intro banner (21st.dev / Osmo component, GSAP + Lenis) that switches off for users who prefer reduced motion
- Hero, About, Skills, Projects, Achievements timeline, Résumé card, Contact form and Footer
- Contact form with validation and honest feedback (`mailto:` fallback, optional Formspree endpoint)
- Résumé buttons that only activate when `public/resume.pdf` really exists, otherwise they show setup instructions
- Everything editable from **one file**: `src/data/portfolioData.ts`
- Accessible: labelled form fields, visible focus states, skip link, reduced-motion support, 44px touch targets

## Technologies

React 18, Vite 5, TypeScript, Tailwind CSS 3, Motion (`motion/react`), GSAP + ScrollTrigger, `@studio-freight/lenis`, Lucide React, `gh-pages`.

## Getting started

```bash
npm install          # 1. install dependencies
npm run dev          # 2. start the dev server (http://localhost:5173)
npm run build        # 3. production build into dist/
npm run preview      #    preview the production build locally
```

## Customise

1. Open `src/data/portfolioData.ts` and set your real `email`, `githubUser` and `linkedinUrl` (the only placeholders left). Project repository names are `LordsGym`, `LaBellaCucina` and `YashYadav_PortfolioWebsite`; rename them there if your repositories are named differently.
2. Your photo is already in `public/profile.jpg` (800×800). Project screenshots are in `public/projects/`.
3. A starter résumé is in `public/resume.pdf`. Replace it with your own PDF (add your email and phone) keeping the same file name.
4. Set `REPO_NAME` at the top of `vite.config.ts` to your **exact GitHub repository name**.
5. *(Optional)* To send messages without opening an email app, create a free form on Formspree and paste its URL into `formEndpoint`.

## Folder structure

```text
portfolio-website/
├── public/              resume.pdf, profile.jpg, favicon.svg, projects/ (screenshots + La Bella Cucina live demo)
├── src/
│   ├── components/      Navbar, Hero, About, Skills, Projects, Achievements, Resume, Contact, Footer
│   │   └── ui/          parallax-scrolling.tsx (21st.dev), gradient-button.tsx
│   ├── data/portfolioData.ts   all editable content
│   ├── hooks/           useActiveSection, useResume
│   ├── lib/             utils.ts, scroll.ts
│   ├── App.tsx  main.tsx  index.css
├── components.json      shadcn config (@/components/ui)
├── vite.config.ts  tailwind.config.js  tsconfig.json
└── README.md  REPORT_OUTLINE.md  CHECKLIST.md
```

## Git and GitHub

```bash
git init
git add .
git commit -m "Initial commit: portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR-GITHUB-USERNAME/YashYadav_PortfolioWebsite.git
git push -u origin main
```

Create the empty repository on github.com first (no README, since you already have one). Make several small commits as you customise; your IT4048 evaluator can see the history.

## Deploy to GitHub Pages

```bash
npm run deploy
```

This builds the site and publishes `dist/` to a `gh-pages` branch. Then on GitHub:

1. Repository → **Settings → Pages**
2. **Source:** *Deploy from a branch* → branch `gh-pages`, folder `/ (root)` → **Save**
3. After a minute, the URL appears at the top of that page. It follows `https://<username>.github.io/<repo-name>/`.

If the page is blank, the usual cause is `REPO_NAME` in `vite.config.ts` not matching the repository name.

## Screenshots

*Add screenshots here after deployment (desktop and mobile).*

| Desktop | Mobile |
| --- | --- |
| `docs/desktop.png` | `docs/mobile.png` |

## Credits

Parallax component by [Osmo](https://www.osmo.supply/) via [21st.dev](https://21st.dev). Parallax photos by Unsplash contributors.
