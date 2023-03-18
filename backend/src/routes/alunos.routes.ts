import Express from "express";

import alunosController from "../controllers/alunos.controller";
import ValitadeAlunos from "../middlewares/ValidateAlunos";

const router = Express.Router();

router.get('/', alunosController.getAll);
router.get('/:id', alunosController.getId);

router.post('/', ValitadeAlunos, alunosController.insert);

export default router;
