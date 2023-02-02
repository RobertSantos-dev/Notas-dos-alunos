import { RowDataPacket,ResultSetHeader } from 'mysql2';
import connection from './connection';
import * as Avaliacoes from '../interface/avaliacoes.interface';

const getAll = async (): Promise<Avaliacoes.default[]> => {
  const [result] = await connection.execute<RowDataPacket[]>(
    `
    SELECT
      id,
      aluno_id as alunoId,
      disciplina_id as disciplinaId,
      1°_avaliacao as 1°Avaliacao,
      2°_avaliacao as 2°Avaliacao,
      3°_avaliacao as 3°Avaliacao,
      4°_avaliacao as 4°Avaliacao,
      media_final as mediaFinal,
      resultado_final as resultadoFinal
    FROM notasAlunos.avaliacoes;
    `,
    []
  );

  return result as Avaliacoes.default[];
};

const getId = async (id: number): Promise<Avaliacoes.default> => {
  const [[result]] = await connection.execute<RowDataPacket[]>(
    `
    SELECT
      id,
      aluno_id as alunoId,
      disciplina_id as disciplinaId,
      1°_avaliacao as 1°Avaliacao,
      2°_avaliacao as 2°Avaliacao,
      3°_avaliacao as 3°Avaliacao,
      4°_avaliacao as 4°Avaliacao,
      media_final as mediaFinal,
      resultado_final as resultadoFinal
    FROM notasAlunos.avaliacoes;
    WHERE id = ?
    `,
    [id]
  );
  
  return result as Avaliacoes.default;
}

const insert = async (obj: Avaliacoes.avaliacoesObjInsert) => {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    `
    INSERT INTO notasAlunos.avaliacoes
    (
      aluno_id,
      disciplina_id,
      1°_avaliacao,
      2°_avaliacao,
      3°_avaliacao,
      4°_avaliacao,
      media_final,
      resultado_final
    )
    VALUES ( ?, ?, ?, ?, ?, ?, ?, ?);
    `,
    [
      obj.alunoId,
      obj.disciplinaId,
      obj['1°Avaliacao'],
      obj['2°Avaliacao'],
      obj['3°Avaliacao'],
      obj['4°Avaliacao'],
      obj.mediaFinal,
      obj.resultadoFinal
    ]
  );

  return insertId;
}

export default { getAll, getId, insert }
