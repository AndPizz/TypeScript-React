import express, { Request, Response } from "express";
import homeRoute from "./routes/games.routes";
import cors from "cors";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use(homeRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
