# Integration hand-off — Pet Solidário

## Backend
- Project: workspace root (`pet-solidario/`); Next.js App Router route handlers.
- Run: `npm run dev` (port 3000); build: `npm run build`; health probe: `GET /api/auth/me` (401 when signed out is expected; verifies route availability).
- Data access: Prisma Client in `lib/db.ts`; schema in `prisma/schema.prisma`.

## Frontend
- Project: workspace root (`pet-solidario/`); run `npm run dev`; build `npm run build`.
- Live-data path: server-rendered App Router pages query Prisma directly; forms use `/api/*` routes. The home page includes clearly labeled demonstration profiles for the academic prototype; these do not replace Prisma-backed catalogs or seed database records.
- UI: `app/`, `components/`; API client seam is the typed server queries and form fetch calls in `components/contact-form.tsx`, `components/auth-form.tsx`, and `components/dashboard.tsx`. Keep data live from Prisma/route handlers; no replacement of mock data is needed.
- Shared types: Prisma-generated types from `@prisma/client`; no separate shared package or import alias.

## API route inventory
- `POST /api/auth/register` — create organization account and session.
- `POST /api/auth/login` — authenticate and set session.
- `POST /api/auth/logout` — clear session.
- `GET /api/auth/me` — current organization (401 when unauthenticated).
- `GET /api/pets` — available pets; optional `species` and `q` filters.
- `POST /api/pets` — create pet (authenticated owner).
- `PATCH /api/pets/{id}` — update owned pet.
- `DELETE /api/pets/{id}` — delete owned pet.
- `GET /api/campaigns` — public campaign listing.
- `POST /api/campaigns` — create campaign (authenticated owner).
- `PATCH /api/campaigns/{id}` — update owned campaign.
- `DELETE /api/campaigns/{id}` — delete owned campaign.
- `PATCH /api/organizations/me` — update authenticated organization profile.
- `POST /api/requests` — public contact/adoption/volunteer request.
- `GET /api/requests` — authenticated organization's incoming requests.
- `PATCH /api/requests` — update status of owned request.
- `POST /api/upload` — authenticated Blob image upload (multipart `file`, max 5 MB).

## Database and storage
- Database: PostgreSQL; schema: `prisma/schema.prisma`; migration tool: Prisma Migrate, directory `prisma/migrations/`; local MVP setup may use `npm run db:push`. `DATABASE_URL` is required.
- Create schema migrations as needed; **NO seed data**.
- Blob settings: `AZURE_STORAGE_CONNECTION_STRING`, `AZURE_STORAGE_CONTAINER`, optional `AZURE_BLOB_PUBLIC_BASE_URL`; local emulator: Azurite via `docker-compose.yml`.

## Services
- Essential: Next.js web app, PostgreSQL.
- Essential for image upload: Azure Blob Storage (Azurite locally).
- Enhancement: none.
