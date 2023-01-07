import { Response, Request } from "express";
import alunosService from "../services/alunos.service";

const getAll = async (_req: Request, res: Response) => {
  const { type, message } = await alunosService.getAll();
  
  return res.status(type).json(message);
};

const getId = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { type, message } = await alunosService.getId(Number(id));
    
  return res.status(type).json(message);
};

export default { getAll, getId };