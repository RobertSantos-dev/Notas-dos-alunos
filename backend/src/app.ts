import express from "express";

import alunosRoutes from './routes/alunos.routes';
import disciplinasRoutes from "./routes/disciplinas.routes";
import avaliacoesRoutes from "./routes/avaliacoes.routes";

const app = express();
app.use(express.json());

app.use('/alunos', alunosRoutes);
app.use('/disciplinas', disciplinasRoutes);
app.use('/avaliacoes', avaliacoesRoutes);

export default app;