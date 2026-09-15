# Cosmic Portfolio

A vibrant, immersive single-page portfolio built with React Three Fiber, featuring an interactive planetary system, bloom post-processing, GSAP scroll animations, and a cosmic neon aesthetic.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Customize

Edit `src/config/portfolio.ts` to update:

- Name, title, and tagline
- About section text
- Projects (title, description, tags, links)
- Skills and proficiency levels
- Email and social links

## Tech Stack

- **Vite** + **React** + **TypeScript**
- **React Three Fiber** + **Drei** + **Postprocessing**
- **GSAP** + ScrollTrigger
- **Tailwind CSS v4**

## Project Structure

```
src/
├── config/portfolio.ts      # All content placeholders
├── components/
│   ├── three/               # 3D scene (planets, nebula, particles)
│   ├── sections/            # Page sections (Hero, About, etc.)
│   ├── ui/                  # Loading screen, cursor, titles
│   └── layout/              # Navigation
├── hooks/                   # Mouse parallax, scroll animations
├── App.tsx
└── main.tsx
```

## Build

```bash
npm run build
npm run preview
```
