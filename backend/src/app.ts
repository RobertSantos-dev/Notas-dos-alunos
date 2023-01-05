import express, { Request, Response } from "express";
import statusCodes from "./utils/statusCodes";

const app = express();
app.use(express.json());

app.get('/', (_req: Request, res: Response): void => {
  res.status(statusCodes.OK).json({ message: "Express + TypeScript" });
});

export default app;