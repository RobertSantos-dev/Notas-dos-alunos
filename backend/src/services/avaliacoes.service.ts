import avaliacoesModel from "../models/avaliacoes.model";
import { AvaliacoesReq } from "../interface/avaliacoes.interface";
import statusCodes from "../utils/statusCodes";

const getAll = async () => {
  const result = await avaliacoesModel.getAll();

  return { type: statusCodes.OK, message: result }
};

const getId = async (id: number) => {
  const result = await avaliacoesModel.getId(id);
  
  if (!result) {
    const res = {
      type: statusCodes.NOT_FOUND,
      message: { message: 'Avaliação não encontrada!' }
    };

    return res;
  }

  return { type: statusCodes.OK, message: result }
};

const insert = async (av: AvaliacoesReq) => {
  const mediaFinal = (
    av['1°Avaliacao'] +
    av['2°Avaliacao'] +
    av['3°Avaliacao'] +
    av['4°Avaliacao']) / 4;

  let resultadoFinal = 0;

  if ( mediaFinal > 5.99) resultadoFinal = 1;
  if ( mediaFinal < 6 ) resultadoFinal = 2;

  const objInsert = { ...av, mediaFinal, resultadoFinal };
  const result = await avaliacoesModel.insert(objInsert);

  return { type: null, message: { id: result, ...objInsert } }
}

export default { getAll, getId, insert };