# Pixzen – GenZ Web Page

Next.js 15 (App Router) + React 19 + Tailwind CSS 4 + Three.js / GSAP / Framer Motion.

## Setup

```bash
npm install
cp .env.example .env     # Windows: copy .env.example .env  (then fill in the values)
npm run dev              # http://localhost:3000
```

## Scripts

| Command         | What it does                 |
| --------------- | ---------------------------- |
| `npm run dev`   | Start the dev server         |
| `npm run build` | Production build             |
| `npm start`     | Serve the production build   |

## Environment

- `GOOGLE_SHEETS_WEBHOOK_URL` – optional. Contact form submissions are also POSTed here. Ask the project owner for the value.
- Contact inquiries are appended to `data/contact-inquiries.csv` (created automatically, not committed).

## Pages

Home, About, Platform, Solutions (+ `/solutions/[slug]`), AI Interviewer, AI LMS, Job Portal, Resume Builder, Use Cases, Pricing, Careers, Contact, Login, Privacy, Terms.
