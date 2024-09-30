import { CardType } from "../components/Card/types"

export const shuffleDeck = (deck: CardType[]) => {
    const shuffledDeck = deck.sort(() => Math.random() - 0.5);
    return shuffledDeck.slice(0, 10);
}