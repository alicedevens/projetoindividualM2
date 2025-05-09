# projetoindividualM2

Este projeto é um boilerplate básico para uma aplicação Node.js seguindo o padrão MVC (Model-View-Controller), utilizando PostgreSQL como banco de dados.

## Descrição do projeto 
O Inflow é uma aplicação web completa, com banco de dados, backend e frontend integrados, que gerencia tarefas com foco em produtividade e bem-estar mental. Ao acessar a plataforma, o usuário responde um breve questionário emocional, e suas atividades são adaptadas conforme o humor do dia. Tarefas mais leves são atribuídas em dias difíceis e mais desafiadoras quando há maior disposição. No fim da semana, o sistema fornece relatórios personalizados de produtividade.

## Requisitos

Para realizar o projeto, é necessário utilizar as seguintes ferramentas: 

- Node.js (versão 23.9.0)
- PostgreSQL (versão 17.4)


## Instalação

1. **Clonar o repositório:**

```bash
   git clone https://github.com/seu-usuario/seu-projeto.git
   cd seu-projeto
```

2. **Instalar as dependências:**
    
```bash
npm install
```
    
3. **Configurar o arquivo `.env`:**
    
Renomeie o arquivo `.env.example` para `.env` e configure as variáveis de ambiente necessárias, como as configurações do banco de dados PostgreSQL.

## Como executar o projeto localmente 
1. **Execução**
```bash
npm run dev 
```
ou 
```bash
npm start
```

2. **Acesse no navegador**
http://localhost:3000

    

Configuração do Banco de Dados
------------------------------

1. **Criar banco de dados:**
    
    Crie um banco de dados PostgreSQL com o nome especificado no seu arquivo `.env`.
    
2. **Executar o script SQL de inicialização:**
    
```bash
npm run init-db
```
    
Isso criará a tabela `users` no seu banco de dados PostgreSQL com UUID como chave primária e inserirá alguns registros de exemplo.
    

Funcionalidades
---------------

* **Padrão MVC:** Estrutura organizada em Model, View e Controller.
* **PostgreSQL:** Banco de dados relacional utilizado para persistência dos dados.
* **UUID:** Utilização de UUID como chave primária na tabela `users`.
* **Scripts com `nodemon`:** Utilização do `nodemon` para reiniciar automaticamente o servidor após alterações no código.
* **Testes:** Inclui estrutura básica para testes automatizados.

Scripts Disponíveis
-------------------

* `npm start`: Inicia o servidor Node.js.
* `npm run dev`: Inicia o servidor com `nodemon`, reiniciando automaticamente após alterações no código.
* `npm run test`: Executa os testes automatizados.
* `npm run test:coverage`: Executa os testes e gera um relatório de cobertura de código.

Estrutura de Diretórios
-----------------------

* **`config/`**: Configurações do banco de dados e outras configurações do projeto.
* **`controllers/`**: Controladores da aplicação (lógica de negócio).
* **`models/`**: Modelos da aplicação (definições de dados e interações com o banco de dados).
* **`routes/`**: Rotas da aplicação.
* **`tests/`**: Testes automatizados.
* **`views/`**: Views da aplicação (se aplicável).

```
meu-projeto/
│
├── config/                # Arquivos de configuração (ex: conexão com banco)
│   └── db.js
├── controllers/           # Lógica de controle das requisições
│   └── userController.js
├── documentos/             # Documentação do projeto
│   └── PI-WAD.md
├── models/                # Definição de modelos de dados (estrutura do banco)
│   └── userModel.js
├──node_modules/           # Local em que o Node.js armazena todas as suas dependências
│
├── routes/                # Definição das rotas do sistema
│   └── index.js
│   └── frontRoutes.js
│   └── userRoutes.js
├── services/              # Serviços auxiliares do sistema
│   └── userService.js
├── assets/                # Arquivos públicos como imagens e fontes
│   └── diagrama_modelo_bancodedados.png
│   └── PERSONA.jpg
├── scripts/               # Arquivos de JavaScript públicos
│   └── init.sql
│   └── runSQLScript.js
├── tests/                 # Arquivos de testes unitários
│   └── userController.test.js
│   └── userModel.test.js
│   └── userRoutes.test.js
│   └── userService.test.js
├── views/                # Pasta de visualizações/templates
│   └── components
│        └── header.ejs
│   └── css
│        └── style.css
│   └── layout
│        └── main.ejs
│   └── pages
│        └── page1.ejs
│        └── page2.ejs
├── .gitignore             # Arquivo para ignorar arquivos no Git
├── .env                   # Arquivo de variáveis de ambiente
├── jest.config.js         # Arquivo de configuração do Jest
├── package-lock.json      # Gerenciador de dependências do Node.js
├── package.json           # Gerenciador de dependências do Node.js
├── READMD.md              # Documentação do projeto (Markdown)
├── server.js              # Arquivo principal que inicializa o servidor
└── rest.http              # Teste de endpoints (opcional)
```

Contribuição
------------

Contribuições são bem-vindas! Sinta-se à vontade para abrir um issue ou enviar um pull request.

Licença
-------

Este projeto está licenciado sob a Licença MIT.

Este README.md fornece uma visão geral clara do boilerplate, incluindo instruções de instalação, configuração do banco de dados, funcionalidades principais, scripts disponíveis, estrutura de diretórios, como contribuir e informações de licença. Certifique-se de personalizar as seções com detalhes específicos do seu projeto conforme necessário.