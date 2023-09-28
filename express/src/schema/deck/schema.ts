import mongoose from "mongoose";
import { mongo } from "../../config/mongo/config";


const deckSchema = new mongoose.Schema({
  deck: [String]
})


export const Deck = mongo.model('Deck', deckSchema);




