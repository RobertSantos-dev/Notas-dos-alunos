import { RowDataPacket, ResultSetHeader } from "mysql2";
import connection from "./connection";
import AlunosGet from "../interface/alunos.interface";

const getAll = async (): Promise<AlunosGet[]> => {
  const [result] = await connection.execute<RowDataPacket[]>(
    'SELECT id, full_name AS fullName FROM notasAlunos.alunos'
  );

  return result as AlunosGet[];
}

const getId = async (id: number): Promise<AlunosGet> => {
  const [[result]] = await connection.execute<RowDataPacket[]>(
    `SELECT
      id, full_name AS fullName
    FROM
      notasAlunos.alunos
    WHERE id = ?`,
    [id]
  );

  return result as AlunosGet;
}

const insert = async (aluno: string): Promise<number> => {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    `INSERT INTO notasAlunos.alunos (full_name)
     VALUES (?)
   `,
    [aluno]
  );
    return insertId;
  ;
}

export default { getAll, getId, insert }
