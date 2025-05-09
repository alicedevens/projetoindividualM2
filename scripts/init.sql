-- init.sql

-- Criar extensão para suportar UUIDs, se ainda não estiver ativada
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Criar tabela de usuários com UUID como chave primária
CREATE TABLE IF NOT EXISTS login (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  senha VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS questionario (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100),
  data TIMESTAMP NOT NULL, 
  id_usuario INT,
  id_pergunta INT ,
  FOREIGN KEY (id_usuario) REFERENCES login(id),
  FOREIGN KEY (id_pergunta) REFERENCES perguntas(id)

);

CREATE TABLE IF NOT EXISTS perguntas (
  id SERIAL PRIMARY KEY,
  texto_perguntas TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS resposta (
  id SERIAL PRIMARY KEY,
  id_pergunta INT,
  avaliacao INT,
  FOREIGN KEY (id_pergunta) REFERENCES perguntas(id)
)

CREATE TABLE IF NOT EXISTS atividades (
  id_atividades SERIAL PRIMARY KEY, 
  titulo VARCHAR(80), 
  descricao VARCHAR(150) NOT NULL,
  nivel_dificuldade INT NOT NULL, 
  duracao INT NOT NULL, 
  prazo DATE,
  id_login INT NOT NULL,
  FOREIGN KEY (id_login) REFERENCES login(id)
);

CREATE TABLE IF NOT EXITS dados_produtividade (
  id SERIAL PRIMARY KEY DEFAULT,
  porcentagem_tarefasCompletas INT,
  mensagem_motivacional TEXT NOT NULL
);


