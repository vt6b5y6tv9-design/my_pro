# ✦ Asteris

> A precision workspace for modern revenue teams.

Asteris is a portfolio-grade React admin experience inspired by the restraint of Vercel, the information density of Linear, and the data craft of Stripe—translated into an original product language rather than a template remix.

## Preview

| Overview | Customers & detail drawer |
| --- | --- |
| `docs/overview-light.png` | `docs/customers-dark.png` |

## Highlights

- Typography-first hierarchy with quiet borders and meaningful color
- Animated executive overview and responsive revenue chart
- TanStack-powered searchable, sortable customer table
- Global `⌘ K` / `Ctrl K` command palette
- Interactive customer detail drawer and Asteris AI insights
- Token-driven light and dark themes
- Feature-based architecture and reduced-motion support

## Stack

React 19 · TypeScript · Vite · Tailwind CSS · TanStack Table · TanStack Query · Zustand · Motion · Lucide · Recharts

## Run locally

```bash
pnpm install
pnpm dev
```

Production build:

```bash
pnpm build
pnpm preview
```

## Structure

```text
src/
├── components/       # Shared UI and application chrome
├── data/             # Typed mock product data
├── features/         # Domain-owned screens
├── lib/              # Formatting and class utilities
└── store/            # Zustand application state
```

## Design direction

Asteris uses a neutral token system, 8px interaction radius, compact type scale, and low-contrast structural lines. Violet and blue appear only as an intelligence accent; green and amber retain semantic meaning. The result is calm, fast, and precise.

---

Designed and engineered as a high-fidelity frontend portfolio project.
