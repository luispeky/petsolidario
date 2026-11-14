# Pet Solidário

Site institucional do Pet Solidário, organização de proteção animal com atuação em Belém/PA. Divulga iniciativas de resgate, adoção responsável e apoio comunitário. Construído com Next.js, TypeScript e Tailwind CSS e publicado como site estático no GitHub Pages.

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

GitHub Pages hospeda somente arquivos estáticos. Esta publicação divulga informações, mas não executa formulários, login, painel, pagamentos ou gravação de dados. Confirme a disponibilidade de animais e campanhas e as formas oficiais de contribuição diretamente com o Pet Solidário.

Os handlers de API foram preservados em `backend/api/`, mas não são rotas ativas do site estático. Para habilitar cadastros, autenticação, formulários ou atualização dinâmica de dados, será necessário hospedar o backend e o PostgreSQL em um serviço com suporte a servidor, e apontar a interface para esse serviço.

Não publique segredos. `.env` e arquivos `.env.*.local` estão excluídos pelo `.gitignore`; `.env.example` contém apenas valores de desenvolvimento.
