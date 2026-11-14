# Pet Solidário

Site demonstrativo em português para adoção responsável, resgates e apoio a organizações de proteção animal. Construído com Next.js, TypeScript e Tailwind CSS e publicado como site estático no GitHub Pages.

## Publicação

O workflow em `.github/workflows/deploy.yml` constrói o site e publica automaticamente quando há um push para `main`. Ele também tenta habilitar o GitHub Pages na primeira execução. Se as permissões do repositório impedirem isso, abra **Settings → Pages** e selecione **GitHub Actions** como fonte de publicação.

Depois que a primeira execução terminar, o site ficará disponível em:

<https://luispeky.github.io/petsolidario/>

## Desenvolvimento local

- Requisitos: Node.js 20.9+ e npm.
- Instale dependências com `npm ci`.
- Inicie o site com `npm run dev` e abra <http://localhost:3000>.
- Gere a versão estática com `npm run build`; os arquivos prontos para publicação ficam em `out/`.

## Limites da versão GitHub Pages

GitHub Pages hospeda somente arquivos estáticos. Os animais, campanhas e organizações desta publicação são dados demonstrativos; formulários, login, painel e gravação de dados não são executados nem enviados.

Os handlers de API foram preservados em `backend/api/`, mas não são rotas ativas do site estático. Para habilitar cadastros, autenticação, formulários ou dados reais, será necessário hospedar o backend e o PostgreSQL em um serviço com suporte a servidor, e apontar a interface para esse serviço.

Não publique segredos. `.env` e arquivos `.env.*.local` estão excluídos pelo `.gitignore`; `.env.example` contém apenas valores de desenvolvimento.
