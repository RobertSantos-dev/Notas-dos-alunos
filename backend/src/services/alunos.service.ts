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
    const res = {
      type: statusCodes.NOT_FOUND,
      message: { message: 'Aluno não encontrado!' }
    };

    return res;
  }

  return { type: statusCodes.OK, message: result }
};

const insert = async (aluno: string) => {
  const result: number = await alunosModel.insert(aluno);

  return { type: null, message: result }
}

export default { getAll, getId, insert };