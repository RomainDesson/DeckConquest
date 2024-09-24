import { CardType } from "../components/Card/types"

export const drawCards = (deck: CardType[], numberOfCardsToDraw: number) => {
    const drawnCards = deck.slice(0, numberOfCardsToDraw)
    const remainingCards = deck.filter((card) => !drawnCards.includes(card))
    return { drawnCards, remainingCards }
}