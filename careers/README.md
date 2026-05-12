# GetDrives Careers (Next.js)

Premium careers microsite aligned with the GetDrives landing visual system (`brand-bg`, `brand-orange`, Inter, uppercase tracking, glass cards, orange glow). Runs as a **standalone Next.js 14 App Router** app in this folder so you can deploy it on Vercel alongside the Vite marketing site.

## Folder structure

```
careers/
├── prisma/
│   ├── schema.prisma      # Role + Applicant models (Neon Postgres)
│   └── seed.ts            # Seeds open roles (Growth / Launch, Social & Content)
├── src/
│   ├── app/
│   │   ├── layout.tsx     # Inter font, metadata/SEO, UploadThing SSR plugin, Sonner toasts
│   │   ├── page.tsx       # Server page — loads roles, renders CareersShell
│   │   ├── globals.css    # Tailwind + scrollbar + selection (matches landing)
│   │   └── api/uploadthing/
│   │       ├── core.ts    # File router: CV uploads (PDF + DOC/DOCX via blob route)
│   │       └── route.ts   # GET/POST handlers for UploadThing
│   ├── actions/
│   │   └── submit-application.ts   # Server Action: validate → Prisma → Resend
│   ├── components/careers/         # Hero, culture, roles, form, chrome
│   ├── content/roles.ts            # Rich job copy keyed by role slug (pairs with DB)
│   ├── lib/
│   │   ├── prisma.ts
│   │   ├── validations.ts          # Zod schema (shared client/server)
│   │   ├── motion.ts               # prefers-reduced-motion aware presets
│   │   ├── uploadthing.ts          # typed useUploadThing helper
│   │   └── email/                  # Resend HTML templates + send helper
│   └── services/
│       └── applicant.service.ts    # Prisma create + listRoles (admin-ready)
├── .env.example
├── package.json
└── tailwind.config.ts
```

## Backend flow

1. **GET `/`** — `listRoles()` reads active rows from `Role` (seeded). UI merges DB titles with rich bullets in `src/content/roles.ts` by **slug**.
2. **CV upload** — Client calls `useUploadThing("cvUploader")` → UploadThing presigned upload → `cvUrl` stored as HTTPS URL on the file object.
3. **Submit** — `submitCareersApplication` server action runs `applicationSchema.safeParse`, then `createApplicant()` inserts into `Applicant` with FK to `Role`.
4. **Email** — `sendApplicationEmails()` sends two HTML emails via Resend: confirmation to applicant + internal alert to `CAREERS_ADMIN_EMAIL`. Failures are logged; the DB row still exists so recruiting never loses the candidate.

## Upload handling

- Route `cvUploader` accepts **pdf** and **blob** (8MB max, single file). Middleware validates **filename extension** `.pdf`, `.doc`, `.docx`.
- Client restricts `accept` attribute similarly; server middleware is the source of truth.
- `Applicant.cvUrl` stores the UploadThing CDN URL.

## Email integration

- Set `RESEND_API_KEY`, `RESEND_FROM_EMAIL` (verified domain), and `CAREERS_ADMIN_EMAIL`.
- Templates live in `src/lib/email/templates.ts` (dark UI, orange accent, mobile-friendly tables).

## Environment variables

See `.env.example`. Minimum to run fully:

| Variable | Purpose |
|----------|---------|
| `DATABASE_URL` | Neon Postgres connection string |
| `UPLOADTHING_TOKEN` | UploadThing secret |
| `RESEND_API_KEY` | Outbound email |
| `RESEND_FROM_EMAIL` | Verified sender |
| `CAREERS_ADMIN_EMAIL` | Internal notifications |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for metadata / OG |
| `NEXT_PUBLIC_MAIN_SITE_URL` | “Back to GetDrives” navbar link |

## Local setup

```bash
cd careers
cp .env.example .env
# edit DATABASE_URL + API keys

npm install
npx prisma db push    # or: prisma migrate dev --name init
npm run db:seed
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy on Vercel

1. Create a Vercel project from this repo; set **Root Directory** to `careers`.
2. Add environment variables from `.env.example` in the Vercel dashboard.
3. **Build command:** `prisma generate && next build` (already in `package.json` `build` script).
4. Connect Neon: paste `DATABASE_URL` (use pooling URL for serverless).
5. Run migrations/seed against production DB once (`prisma db push` + `db:seed` from CI or locally pointing at prod — protect credentials).

UploadThing and Resend dashboards must allow your production domain.

## Adding future roles

1. **Database:** Insert into `Role` (or extend `prisma/seed.ts` and re-run seed for dev).
2. **Copy:** Add a matching entry to `src/content/roles.ts` with the same **slug** (responsibilities + ideal candidate bullets).
3. **Optional:** Later, replace static `ROLE_DETAILS` with CMS or Prisma JSON fields — `applicant.service` and admin UI can evolve without changing the form shape.

## Admin dashboard (future)

- `listRoles()` / Prisma queries are isolated in `services/` so an admin route can reuse them.
- `Applicant` rows already indexed by `email`, `roleId`, `createdAt` for pipelines.

## Design parity with Vite landing

Shared tokens: `#0B0B0B` background, `#FF5A1F` orange, `#A0A0A0` muted text, Inter, uppercase micro-labels, `border-white/[0.06]` cards, `shadow-glow-orange`, generous spacing (`max-w-7xl`, section py-16/24).
