import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { userRouter } from "./routers/user/router";
import { cardsRouter } from "./routers/cards/router";
import cors from "cors";


dotenv.config();

const app: Express = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use("/user", userRouter);
app.use("/cards", cardsRouter);


app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});




