# Pet Solidário

Plataforma em português para adoção responsável, campanhas solidárias e organizações de proteção animal. Aplicação Next.js App Router, TypeScript, Tailwind CSS, PostgreSQL/Prisma e uploads Azure Blob Storage (Azurite local).

## Requisitos

- Node.js 20.9+ e npm
- Docker Desktop ou Docker Engine com Compose

## Desenvolvimento local

1. Copie `.env.example` para `.env` e substitua `AUTH_SECRET` por um segredo aleatório de pelo menos 32 caracteres. Não use credenciais reais no repositório.
2. Inicie os serviços locais: `docker compose up -d`.
3. Instale dependências: `npm install`.
4. Gere Prisma Client e aplique o schema: `npm run db:generate` e `npm run db:push`.
5. Inicie o site: `npm run dev`, então abra http://localhost:3000.

PostgreSQL é disponibilizado em `localhost:5432` e Azurite Blob em `localhost:10000`. Os volumes persistentes podem ser removidos com `docker compose down -v` (isso apaga os dados locais).

Para produção, configure `DATABASE_URL`, `AUTH_SECRET`, `AZURE_STORAGE_CONNECTION_STRING`, `AZURE_STORAGE_CONTAINER` e opcionalmente `AZURE_BLOB_PUBLIC_BASE_URL` no ambiente seguro do host. Use armazenamento/container com estratégia de acesso público/CDN apropriada; não grave segredos no código.

## Funcionalidades MVP

- Página inicial pública com navegação para adoção, resgate, campanhas e lar temporário. Os perfis e indicadores em destaque na página inicial são demonstrativos e estão identificados como protótipo acadêmico.
- Páginas informativas para as formas de ajudar, contatos mediados, termos de uso e privacidade. Se o banco ainda não estiver configurado, as seções de dados e contato exibem uma orientação em vez de falharem.
- Catálogo público de pets, páginas de detalhe, perfis de organização e campanhas.
- Cadastro/login de ONGs e protetores; sessão em cookie HttpOnly assinado.
- Painel para atualizar perfil, cadastrar/excluir pets e campanhas e acompanhar/atualizar solicitações.
- Formulários públicos de adoção, contato e voluntariado.
- Upload autenticado de imagens JPEG/PNG/WebP até 5 MB ao Blob Storage.
- Campanhas exibem as instruções de doação da própria organização. Não há checkout nem processamento de pagamentos.

## Verificações

- `npm run build`
- `npx tsc --noEmit`
- `npm run db:generate`

O build das páginas dinâmicas requer PostgreSQL disponível ao acessar o site; não há dados de demonstração ou seed incluídos.
