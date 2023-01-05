import app from "./app";

const PORT:number = 5000;

app.listen(PORT, (): void => {
  console.log(`Server is running at http://localhost:${PORT}`);
});