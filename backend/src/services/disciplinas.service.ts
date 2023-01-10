import disciplinasModel from "../models/disciplinas.model";
import DisciplinasGet from "../interface/disciplinas.interface";
import statusCodes from "../utils/statusCodes";

const getAll = async () => {
  const result: DisciplinasGet[] = await disciplinasModel.getAll();

  return { type: statusCodes.OK, message: result };
};

const getId = async (id: number) => {
  const result: DisciplinasGet = await disciplinasModel.getId(id);

  if (!result) {
    const res = {
      type: statusCodes.NOT_FOUND,
      message: { message: 'Disciplina não encontrado!' }
    }

    return res;
  }

  return { type: statusCodes.OK, message: result }
};

export default { getAll, getId };