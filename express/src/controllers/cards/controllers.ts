import { Request, Response } from "express";
import { generateDeck } from "../../utils/cards/utils";
import { mongo } from "../../config/mongo/config";
import { Deck } from "../../schema/deck/schema";

export const getNewDeck = async (req: Request, res: Response) => {
  const newDeck = new Deck({ deck: generateDeck().shuffledDeck });
  const remain = newDeck.deck.length;
  await newDeck.save();
  return res.json({ 
    deck_id: newDeck._id,
    remaining: remain,
    shuffled: true,
    success: true
   });
};

export const drawACard = async (req: Request, res: Response) => {
  const currentDeckId = req.body.deck_id;

  const deck = await Deck.findById(currentDeckId);
  if (!deck) {
    return res.status(400).json("No deck found");
  } else {
    const drawnCard = deck.deck.splice(0, 1);
    const value = drawnCard[0][0];
    let suit = drawnCard[0][1];
    switch (suit) {
      case "S":
        suit = "SPADES";
        break;
      case "C":
        suit = "CLUBS";
        break;
      case "D":
        suit = "DIAMONDS";
        break;
      case "H":
        suit = "HEARTS";
        break;
    }
    const remain = deck.deck.length;
    await deck.save();
    return res.json({
      cards: [
        {
          code: drawnCard,
          image: `https://deckofcardsapi.com/static/img/${drawnCard}.png`,
          images: {
            svg: `https://deckofcardsapi.com/static/img/${drawnCard}.svg`,
            png: `https://deckofcardsapi.com/static/img/${drawnCard}.png`,
          },
          value: value === "0" ? "10" : value,
          suit: suit,
        },
      ],
      deck_id: currentDeckId,
      remaining: remain,
      success: true
    });
  }
};
