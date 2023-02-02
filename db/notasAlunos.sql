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

CREATE TABLE notasAlunos.resultado (
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  resultado TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS notasAlunos.avaliacoes (
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  aluno_id INTEGER,
  disciplina_id INTEGER,
  `1°_avaliacao` DECIMAL(4, 2) NOT NULL,
  `2°_avaliacao` DECIMAL(4, 2) NOT NULL,
  `3°_avaliacao` DECIMAL(4, 2) NOT NULL,
  `4°_avaliacao` DECIMAL(4, 2) NOT NULL,
  media_final DECIMAL(4, 2),
  resultado_final INTEGER,

  FOREIGN KEY (aluno_id) REFERENCES notasAlunos.alunos (id),
  FOREIGN KEY (disciplina_id) REFERENCES notasAlunos.disciplinas (id),
  FOREIGN KEY (resultado_final) REFERENCES notasAlunos.resultado (id)
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
  notasAlunos.disciplinas (name)
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

INSERT INTO
  notasAlunos.resultado (resultado)
VALUES
  ('Aprovado'),
  -- ('Recuperação'),
  ('Reprovado');
