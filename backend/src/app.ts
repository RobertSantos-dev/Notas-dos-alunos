import express from "express";
import alunosController from "./controllers/alunos.controller";

const app = express();
app.use(express.json());

app.get('/alunos', alunosController.getAll);
app.get('/alunos/:id', alunosController.getId);

export default app;