export const generateDeck = () => {
    const deck = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "0", "J", "Q", "K"]
       .map((str) => ["S", "C", "D", "H"].map((suit) => `${str}${suit}`))
       .flat();
    const shuffle = (array: string[]) => {
       let currentIndex = array.length,
          randomIndex;
 
       // While there remain elements to shuffle.
       while (currentIndex != 0) {
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
 
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
       }
 
       return array;
    };
    const shuffledDeck = shuffle(deck);
    return { shuffledDeck };
 };
 