import { RowDataPacket,ResultSetHeader } from 'mysql2';
import connection from './connection';
import * as av from '../interface/avaliacoes.interface';

const getAll = async (): Promise<av.Avaliacoes[]> => {
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

  return result as av.Avaliacoes[];
};

const getId = async (id: number): Promise<av.Avaliacoes> => {
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
    FROM notasAlunos.avaliacoes
    WHERE id = ?;
    `,
    [id]
  );
  
  return result as av.Avaliacoes;
}

const getReviewId = async (alunoId: number, disciplinaId: number) => {
  const [[result]] = await connection.execute<RowDataPacket[]>(
    `
    SELECT
      1°_avaliacao as 1°Avaliacao,
      2°_avaliacao as 2°Avaliacao,
      3°_avaliacao as 3°Avaliacao,
      4°_avaliacao as 4°Avaliacao
    FROM notasAlunos.avaliacoes
    WHERE aluno_id = ? AND disciplina_id = ?;
    `,
    [alunoId, disciplinaId]
  );

  return result;
}

const insert = async (obj: av.AvaliacoesReq) => {
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
    VALUES (?, ?, ?, ?, ?, ?, ?, ?);
    `,
    [
      obj.alunoId,
      obj.disciplinaId,
      obj['1°Avaliacao'],
      obj['2°Avaliacao'],
      obj['3°Avaliacao'],
      obj['4°Avaliacao'],
      obj.media,
      obj.resultado
    ]
  );

  return insertId;
}

const update = async (obj: av.Atualizacao, id: number) => {
  await connection.execute<ResultSetHeader>(
    `
    UPDATE notasAlunos.avaliacoes
    SET ${obj.avaliacao}°_avaliacao = ?, media_final = ?, resultado_final = ?
    WHERE aluno_id = ? AND disciplina_id = ?;
    `,
    [
      obj.nota,
      obj.media,
      obj.resultado || 2,
      id,
      obj.disciplinaId
    ]
  );
}

export default { getAll, getId, getReviewId, insert, update }
