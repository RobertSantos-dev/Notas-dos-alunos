-- Criando Banco
DROP DATABASE IF EXISTS notasAlunos;
CREATE DATABASE IF NOT EXISTS notasAlunos;

-- Criando Tabelas
CREATE TABLE notasAlunos.alunos (
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  full_name TEXT NOT NULL
);

CREATE TABLE notasAlunos.disciplinas (
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  name TEXT NOT NULL
);

CREATE TABLE notasAlunos.avaliacoes (
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  aluno_id INTEGER,
  disciplina_id INTEGER,

  FOREIGN KEY (aluno_id) REFERENCES notasAlunos.alunos (id),
  FOREIGN KEY (disciplina_id) REFERENCES notasAlunos.disciplinas (id)
);

-- Populando Tabelas
INSERT INTO
  notasAlunos.alunos (full_name)
VALUES
  ('Miguel Lopes Barreto'),
  ('Laura Fernanda Silva Lorenzo'),
  ('Diego Fernandez de Assunção'),
  ('Fabiana Oliveira de Melo');

INSERT INTO
  notasAlunos.displinas (name)
VALUES
  ('Língua Portuguesa'),
  ('Matemática'),
  ('História'),
  ('Geográfia'),
  ('Física'),
  ('Artes'),
  ('Biologia'),
  ('Inglês'),
  ('Química');