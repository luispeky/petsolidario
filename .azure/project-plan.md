# Pet Solidario - Project Plan

## Goal

Create a responsive Portuguese-language platform that connects people with animal-protection organizations and rescuers.

## Approved requirements

- Framework: Next.js App Router.
- Language: TypeScript. Use TSX for React UI, HTML semantics in components, and CSS through Tailwind.
- Features: pet adoption listings, donation campaigns, organization/rescuer profiles, and contact/volunteer requests.
- Authentication: accounts for organizations/rescuers to manage their profiles and listings.
- Persistence: PostgreSQL for application data and Azure Blob Storage for uploaded images.
- Project location: `pet-solidario/` under the selected workspace.

## MVP scope

- Public landing page, adoption catalog and pet details, donation campaign catalog and details, organization profiles, and contact/volunteer form.
- Authenticated organization dashboard for managing profile, pets, campaigns, and incoming contact requests.
- Persist application entities and uploaded media; validate inputs and restrict management actions to authenticated owners.
- Provide local development configuration for PostgreSQL and an Azure Blob-compatible emulator, with environment variables documented for Azure Blob Storage.
- Donation campaigns provide campaign details and organization-provided donation instructions; no payment processing is in scope.

## Non-goals

- Production deployment or provisioning cloud resources.
- Payment processing, automated donation settlement, or a public administrative moderation console.
- Storing secrets or production credentials in source control.
