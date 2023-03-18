import { Response, Request } from "express";
import avaliacoesService from "../services/avaliacoes.service";
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
  const { type, message } = await avaliacoesService.insert(req.body);
  if (type) { return res.status(type).json({ message }) }

  return res.status(statusCodes.CREATED).json(message);
}

const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { type, message } = await avaliacoesService.update(req.body, Number(id));
  
  if (type) return res.status(type).json({ message });

  return res.status(statusCodes.CREATED).json(message);
}

export default { getAll, getId, insert, update };