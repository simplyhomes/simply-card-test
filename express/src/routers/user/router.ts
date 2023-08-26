import { Router } from "express";
import { getAllUserMock } from "../../controllers/user/controllers";

export const userRouter = Router();
userRouter.route("/").all(getAllUserMock);
