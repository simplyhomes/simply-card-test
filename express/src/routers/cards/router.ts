import { Router } from "express";
import { drawACard, getNewDeck } from "../../controllers/cards/controllers";

export const cardsRouter = Router();
cardsRouter.route("/resetDeck").get(getNewDeck);
cardsRouter.route("/drawACard").post(drawACard);