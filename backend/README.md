# Backend fora do GitHub Pages

Os handlers de API foram mantidos aqui para referência e para uma futura hospedagem com servidor. O GitHub Pages publica somente os arquivos estáticos gerados em `out/`; ele não executa estes handlers, autenticação, formulários ou consultas ao PostgreSQL.

Para reativar os handlers, será necessário movê-los para `app/api/` e hospedar o projeto em uma plataforma que execute Next.js e forneça PostgreSQL e as variáveis de ambiente documentadas em `.env.example`.
