import { CardType } from "../components/Card/types"

export const shuffleDeck = (deck: CardType[]) => {
    return deck.sort(() => Math.random() - 0.5)
}