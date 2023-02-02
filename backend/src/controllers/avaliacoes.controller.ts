import { Response, Request } from "express";
import avaliacoesService from "../services/avaliacoes.service";
import alunosService from "../services/alunos.service";
import statusCodes from "../utils/statusCodes";

const getAll = async (_req: Request, res: Response) => {
  const { type, message } = await avaliacoesService.getAll();
  
  return res.status(type).json(message);
};

const getId = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { type, message } = await avaliacoesService.getId(Number(id));
    
  return res.status(type).json(message);
};

const insert = async (req: Request, res: Response) => {
  // const aluno = await alunosService.getId(req.body.alunoId);
  // if (aluno.type) return res.status(aluno.type).json({ message: aluno.message })

  const { type, message } = await avaliacoesService.insert(req.body);
  if (type) { return res.status(type).json({ message }) }

  return res.status(statusCodes.CREATED).json(message);
}

export default { getAll, getId, insert };