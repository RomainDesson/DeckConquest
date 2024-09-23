import { PlayerHandUi } from "./PlayerHandUi"
import { CardType } from "../../Card/types"
import { useState, useCallback } from "react"

export const PlayerHandLogic = () => {
    const [cards, setCards] = useState<CardType[]>([
        {
            id: "1",
            power: 1,
            life: 1,
            image: "card1.png",
            name: "Card 1",
            description: "Card 1 description",
            specialEffect: "Card 1 special effect",
        },
        {
            id: "2",
            power: 2,
            life: 2,
            image: "card2.png",
            name: "Card 2",
            description: "Card 2 description",
            specialEffect: "Card 2 special effect",
        },
        {
            id: "3",
            power: 3,
            life: 3,
            image: "card3.png",
            name: "Card 3",
            description: "Card 3 description",
            specialEffect: "Card 3 special effect",
        },
    ])

    const removeCardFromHand = useCallback((cardId: string) => {
        setCards((prevCards) => prevCards.filter((card) => card.id !== cardId))
    }, [])

    return <PlayerHandUi cards={cards} removeCardFromHand={removeCardFromHand} />
}