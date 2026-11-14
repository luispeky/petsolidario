# Integration hand-off — Pet Solidário

## Static site
- Build: `npm run build`; generated files are written to `out/`.
- Hosting: GitHub Pages at `https://luispeky.github.io/petsolidario/`.
- Deployment: `.github/workflows/deploy.yml` publishes each push to `main`.
- Public routes use explicitly labeled demonstration data. Forms, login, and dashboard are informational only in this static edition.

## Retained backend source
- Next.js API handlers are preserved under `backend/api/` and are not deployed or executed by GitHub Pages.
- Prisma schema remains at `prisma/schema.prisma`; PostgreSQL and Azure Blob Storage are not required to build the static site.
- To restore dynamic features, move the handlers back under `app/api/`, restore the server-backed pages, configure the environment variables from `.env.example`, and deploy to a host that runs Next.js and PostgreSQL.
