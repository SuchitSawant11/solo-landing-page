# SOLO Learner Landing Page

A learner-focused landing page for [SOLO](https://thesolo.network) — a skills-first platform that helps learners discover what to learn, build real skills, prove their abilities through verified credentials, and turn their progress into career opportunities.

This project reimagines SOLO's homepage from the perspective of a first-time learner: what SOLO is, what they can do on it, and how it helps them grow — told through a single, continuously scrolling page rather than a typical feature list.

**Live demo:** [https://solo-landing-page.vercel.app](https://solo-landing-page.vercel.app/) <!-- replace with your actual Vercel URL -->

---

## About the Project

Built as a live internship project for **SPARK+ Technologies**, under the SOLO platform team.

The page follows SOLO's six-stage learner journey — **Discover → Learn → Build Skills → Prove Skills → Grow → Showcase** — expressed as anchor-linked sections within one page. The Grow and Showcase stages are merged into a single **Profile** section, bringing a learner's career-fit information and professional portfolio together in one place.

Design takes inspiration from the existing SOLO platform while allowing creative freedom in layout, visual design, interaction, and storytelling.

## Sections

| Section | Description |
|---|---|
| **Hero** | Introduces SOLO and previews the full learner journey at a glance |
| **Discover** | Searchable, filterable catalogue of courses, internships, and live projects, plus an interactive skill/pathway tree |
| **Learn & Build Skills** | Structured learning pathways with progress tracking and module breakdowns |
| **Prove Skills** | Credential gallery with flip-to-verify cards and a shareable QR-code credential demo |
| **Profile** | Career-fit matching, skill radar chart, AI-powered skill-gap analysis, and a digital portfolio preview |
| **Final CTA** | A low-friction next step, linking out to the real SOLO platform |

## Standout Features

- 🌳 **Interactive skill/pathway tree** — pick a target career and see which skills are unlocked vs. still to learn
- 📊 **Skill radar chart** — visually compares a sample learner profile against a job posting's required skills
- 🪪 **Collectible credential wallet** — badges as flippable cards with a shareable QR-code demo credential
- 🤖 **AI skill-gap analysis** — paste a job description and get matched / partially matched / missing skills against a demo profile

All interactive features run on realistic demo data — this is a static, informational landing page, not the SOLO platform itself. The Sign Up / Login buttons link out to the real platform at [thesolo.network](https://thesolo.network).

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animation:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide](https://lucide.dev/)
- **Deployment:** [Vercel](https://vercel.com/)

## Design System

| Colour | Hex | Role |
|---|---|---|
| Orange | `#FD4322` | Primary — buttons, hero elements, key accents |
| Gold | `#FF7F07` | Secondary accents, highlights |
| Blue | `#1255FF` | Contrast, verification, data elements |
| Coral Red | `#EB5038` | Tags, small details, decorative accents |

**Typography:** [Montserrat](https://fonts.google.com/specimen/Montserrat) for headings, [Roboto](https://fonts.google.com/specimen/Roboto) for body text.

## Getting Started

Clone the repo and install dependencies:

```bash
git clone https://github.com/SuchitSawant11/solo-landing-page.git
cd solo-landing-page
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```
app/
  layout.tsx          # Root layout — fonts, nav, metadata
  page.tsx             # Assembles all sections in order
  components/
    Nav.tsx
    Hero.tsx
    Discover.tsx
    PathwayTree.tsx
    LearnBuildSkills.tsx
    ProveSkills.tsx
    Profile.tsx
    FinalCTA.tsx
    Footer.tsx
  data/                # Demo/mock data (courses, career paths, credentials)
public/                # Images and static assets
```

## Branching Strategy

- `main` — always deployable
- `dev` — integration branch; all feature branches merge here first
- `feature/*` — one branch per section (e.g. `feature/discover`, `feature/profile`)

## Team

Built by **Suchit Sawant** and **Diksha Gaonkar** as part of a SPARK+ Technologies internship live project.

## Acknowledgements

- [SOLO Network](https://thesolo.network) — reference platform and brand guidelines
- Built under the guidance of the SPARK+ Technologies mentor team
