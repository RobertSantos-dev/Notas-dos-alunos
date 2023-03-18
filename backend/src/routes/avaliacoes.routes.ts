import Express from "express";

import avaliacoesController from "../controllers/avaliacoes.controller";
import ValidateAvaliacao from "../middlewares/ValidateAvaliacao";

const router = Express.Router();

router.get('/', avaliacoesController.getAll);
router.get('/:id', avaliacoesController.getId);

router.post('/', ValidateAvaliacao.VInsert, avaliacoesController.insert);

router.put('/:id', ValidateAvaliacao.VUpdate, avaliacoesController.update);


export default router;
