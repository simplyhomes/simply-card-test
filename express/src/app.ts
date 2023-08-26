import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { userRouter } from "./routers/user/router";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 5000;

app.use("/user", userRouter);

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
