import { Request, Response, NextFunction } from 'express';
import statusCodes from '../utils/statusCodes';

const ValidateInsert = (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body;

  if (!name || name === undefined) {
    return res.status(statusCodes.NOT_FOUND).json(
      { message: 'name undefined' }
    )
  }

  if (name.split(' ').length < 3) {
    return res.status(statusCodes.BAD_REQUEST).json(
      { message: 'name field must have more than 2 names' }
    )
  }

  next();
}

export default ValidateInsert;