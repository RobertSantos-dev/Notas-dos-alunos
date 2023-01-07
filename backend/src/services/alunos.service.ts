import alunosModel from "../models/alunos.model";
import statusCodes from "../utils/statusCodes";
import AlunosGet from "../interface/alunos.interface";

const getAll = async () => {
  const result: AlunosGet[] = await alunosModel.getAll();

  return { type: statusCodes.OK, message: result }
};

const getId = async (id: number) => {
  const result: AlunosGet = await alunosModel.getId(id);

  if (!result) {
    return { type: statusCodes.NOT_FOUND, message: 'Aluno não encontrado!' }
  }

  return { type: statusCodes.OK, message: result }
};

export default { getAll, getId };