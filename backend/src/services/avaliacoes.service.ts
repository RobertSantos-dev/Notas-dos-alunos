import avaliacoesModel from "../models/avaliacoes.model";
import {
  Avaliacoes,
  AvaliacoesReq,
} from "../interface/avaliacoes.interface";
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
    av['1°Avaliacao'] + av['2°Avaliacao'] +
    av['3°Avaliacao'] + av['4°Avaliacao']
  ) / 4;
  let resultadoFinal = 2;

  const objInsert = { ...av, media: mediaFinal, resultado: resultadoFinal };
  const result = await avaliacoesModel.insert(objInsert);

  return { type: null, message: { id: result, ...objInsert } }
}

const update = async (av: { disciplinaId: number, avaliacao: number, nota: number }, id: number) => {
  const resultId = await avaliacoesModel.getReviewId(id, av.disciplinaId);
  delete resultId[`${av.avaliacao}°Avaliacao`];

  const notas = {
    [`${av.avaliacao}°Avaliacao`]: Number(av.nota),
    ...resultId
  };

  const media = Object.values(notas).reduce(
    (acc, at) => acc + Number(at), 0) / 4;
  let resultado = media > 5.99 ? 1 : 3;

  await avaliacoesModel.update({ ...av, media, resultado }, id);
  return { type: null, message: 'Atualizado com sucesso' };
}

export default { getAll, getId, insert, update };
