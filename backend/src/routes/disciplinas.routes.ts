import Express from "express";

import disciplinasController from "../controllers/disciplinas.controller";

const router = Express.Router();

router.get('/', disciplinasController.getAll);
router.get('/:id', disciplinasController.getId);

export default router;
