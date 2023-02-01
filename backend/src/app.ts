import express from "express";
import alunosController from "./controllers/alunos.controller";
import disciplinasController from "./controllers/disciplinas.controller";
import ValitadeAlunos from "./middlewares/ValidateAlunos";

const app = express();
app.use(express.json());

app.get('/alunos', alunosController.getAll);
app.get('/alunos/:id', alunosController.getId);
app.get('/disciplinas', disciplinasController.getAll);
app.get('/disciplinas/:id', disciplinasController.getId);

app.post('/aluno', ValitadeAlunos, alunosController.insert)

export default app;