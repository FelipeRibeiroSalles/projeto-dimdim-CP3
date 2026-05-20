# Projeto DevOps CP3 - DimDim

## Sobre o Projeto

Este projeto foi desenvolvido para a disciplina de DevOps utilizando:

- Linux Ubuntu Server na Azure
- Docker
- Docker Compose
- Node.js
- PostgreSQL
- API REST
- Interface Web

A aplicação permite realizar operações CRUD de clientes utilizando containers Docker em ambiente cloud.

---

# Tecnologias Utilizadas

- Ubuntu Server 24.04
- Docker
- Docker Compose
- Node.js
- Express
- PostgreSQL
- Azure VM
- GitHub

---

# Estrutura do Projeto

```bash
projeto-dimdim-CP3/
│
├── app/
│   ├── public/
│   ├── Dockerfile
│   ├── db.js
│   ├── package.json
│   └── server.js
│
├── docker-compose.yml
├── init.sql
└── .gitignore
```

---

# Containers

## Aplicação

Node.js e interface web.

## Banco de Dados

Container PostgreSQL.

---

# Funcionalidades

- Cadastro de clientes
- Listagem de clientes
- Exclusão de clientes
- Persistência de dados
- Integração com PostgreSQL
- Execução em containers Docker

---

# Execução do Projeto

## Clonar repositório

```bash
git clone https://github.com/FelipeRibeiroSalles/projeto-dimdim-CP3.git
```

## Entrar na pasta

```bash
cd projeto-dimdim-CP3
```

## Executar containers

```bash
docker compose up --build -d
```

---

# Acesso

Aplicação disponível em:

```bash
http://20.151.97.169:3000
```

# Nomes:
Felipe Ribeiro Salles de Camargo RM:565224
João Victor Santana dos Santos RM:566063
