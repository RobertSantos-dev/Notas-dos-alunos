import { RowDataPacket } from "mysql2";
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

export default { getAll, getId }
