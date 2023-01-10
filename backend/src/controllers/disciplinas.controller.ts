import { Request, Response } from "express";
import disciplinasService from "../services/disciplinas.service";
import statusCodes from "../utils/statusCodes";

const getAll = async (_req: Request, res: Response) => {
  const { type, message } = await disciplinasService.getAll();

  return res.status(type).json(message);
};

const getId = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { type, message } = await disciplinasService.getId(Number(id));

  return res.status(type).json(message);
}

export default { getAll, getId };