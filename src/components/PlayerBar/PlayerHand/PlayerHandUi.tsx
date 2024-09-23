import { CardLogic } from "../../Card/CardLogic"
import { CardType } from "../../Card/types"

interface PropsType {
    cards: CardType[]
    removeCardFromHand: (cardId: string) => void
}

export const PlayerHandUi = ({ cards, removeCardFromHand }: PropsType) => {
    return (
        <div className="flex absolute bottom-3 left-1/2 transform -translate-x-1/2">
            {cards.map((card) => (
                <CardLogic key={card.id} card={card} removeCardFromHand={removeCardFromHand} />
            ))}
        </div>
    )
}