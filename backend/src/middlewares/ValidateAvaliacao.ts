import { Request, Response, NextFunction } from 'express';
import statusCodes from '../utils/statusCodes';

const ValidateInsert = (req: Request, res: Response, next: NextFunction) => {
  const objReq = [
    req.body.alunoId, req.body.disciplinaId,
    req.body['1°Avaliacao'], req.body['2°Avaliacao'],
    req.body['2°Avaliacao'], req.body['4°Avaliacao']
  ];

  if (objReq.every((e) => e)) {
    return res.status(statusCodes.NOT_FOUND).json(
      { message: 'one of the fields was not declared correctly' }
    )
  }

  next();
}

export default ValidateInsert;