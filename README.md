# 7-days-of-code-alura-react

Projeto #7DaysOfCode de #React para da Alura.
Versão simplificada do Twitter (atualmente chamado de X) em React.

## Tecnologias:
- **Vite**
- **JavaScript**
- **React**
- **Firebase**
  - **Authentication**
  - **Realtime Database**
  - **Hosting**
- **Tailwind CSS**

## Funcionalidades
- **Autenticação de Usuários**
- **Atualizações em Tempo Real**
- **Hospedagem Pública**
## Começando

### Pré-requisitos

- Node.js (v14 ou superior)
- npm (v6 ou superior)

### Instalação

1. **Clone o Repositório**:
    ```sh
    git clone https://github.com/emanuel-marques/7-days-of-code-react.git
    cd 7-days-of-code-react
    ```

2. **Instale as Dependências**:
    ```sh
    npm install
    ```

3. **Configure o Firebase**:
    - Crie um projeto no Firebase Console [Firebase Console](https://console.firebase.google.com/).
    - Habilite a Autenticação (método de login por Email/Senha).
    - Configure o Realtime Database.
    - Habilite o Hosting.
    - Obtenha o objeto de configuração do Firebase no Console do Firebase e adicione-o a um arquivo `firebase.config.json` na raiz do seu projeto:
        ```
        "apiKey": "sua-api-key",
        "authDomain": "seu-auth-domain",
        "projectId": "seu-project-id",
        "storageBucket":"seu-storage-bucket",
        "messagingSenderId":"seu-messaging-sender-id"
        "appId":"seu-app-id",
        "databaseURL": "seu-database-url",
        "measurementId": "seu-measurementId",
        ```

4. **Execute a Aplicação**:
    ```sh
    npm run dev
    ```
    Isso iniciará o servidor de desenvolvimento e você poderá visualizar a aplicação em `http://localhost:3000`.

## Uso

- **Cadastro**: Crie uma nova conta de usuário.
- **Login**: Faça login com uma conta existente.
- **Postar Tweets**: Compartilhe atualizações em tempo real.

## Contribuindo

Contribuições são bem-vindas! Por favor, faça um fork do repositório e envie um pull request para quaisquer melhorias ou correções de bugs.

## Licença

Este projeto é licenciado sob a Licença MIT.

## Contato

Para qualquer dúvida ou feedback, entre em contato pelo email [Emanuel Marques](emanuelmarques585@gmail.com).

---

**Nota**: Substitua valores de espaço reservado como `seu-usuario`, `sua-api-key`, e `seu-email@exemplo.com` com seus valores reais.
