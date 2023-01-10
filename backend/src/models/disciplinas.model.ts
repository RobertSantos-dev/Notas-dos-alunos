import { RowDataPacket } from "mysql2";
import connection from "./connection";
import DisciplinasGet from "../interface/disciplinas.interface";

const getAll = async (): Promise<DisciplinasGet[]> => {
  const [result] = await connection.execute<RowDataPacket[]>(
    'SELECT * FROM notasAlunos.disciplinas',
  );

  return result as DisciplinasGet[];
};

const getId = async (id: number): Promise<DisciplinasGet> => {
  const [[result]] = await connection.execute<RowDataPacket[]>(
    'SELECT * FROM notasAlunos.disciplinas WHERE id = ?',
    [id]
  );

  return result as DisciplinasGet;
};

export default { getAll, getId };
