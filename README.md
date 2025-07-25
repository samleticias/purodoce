# PuroDoce - Sistema de Pedidos Online para Doceria

## Descrição

O **PuroDoce** é um sistema web completo para uma doceria, onde os clientes podem criar conta, fazer login, realizar pedidos de doces e receber notificações de confirmação via WhatsApp. O sistema facilita a gestão de pedidos e melhora a comunicação entre doceria e cliente, garantindo agilidade e satisfação.

## Funcionalidades Principais

- **Cadastro de usuário:** Clientes podem criar uma conta informando dados pessoais.
- **Login:** Autenticação segura para acesso à área de pedidos.
- **Realização de pedidos:** Escolha e confirmação dos produtos disponíveis.
- **Notificações via WhatsApp (futuro):** Alertas automáticos enviados para o cliente confirmando o pedido.
- **Painel administrativo (futuro):** Gestão dos pedidos e controle do estoque.

## Tecnologias Utilizadas

### Backend

- **Node.js** com **TypeScript** — Ambiente e linguagem para desenvolvimento do servidor.
- **Express** — Framework para criação das APIs REST.
- **Prisma ORM** — Integração e manipulação do banco de dados PostgreSQL.
- **PostgreSQL** — Banco de dados relacional para armazenamento dos dados.
- **Dotenv** — Gerenciamento de variáveis de ambiente.

### Frontend

- **React.js** — Biblioteca para construção da interface interativa.
- **Vite** — Ferramenta de build rápida e eficiente para frontend.
- **Chakra UI** — Biblioteca de componentes para estilização.
- **Axios / Fetch API** — Para comunicação com o backend.

## Estrutura do Projeto
```
purodoce/
├── back-end/ # Servidor Node.js + API REST
├── front-end/ # Aplicação React + Vite
├── README.md # Documentação do projeto
```
