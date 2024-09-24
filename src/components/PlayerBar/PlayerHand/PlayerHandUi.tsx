import { CardLogic } from "../../Card/CardLogic"
import { CardType } from "../../Card/types"

interface PropsType {
    cardsInHand: CardType[]
    playerPlayACard: (card: CardType, zoneId: string) => void
}

export const PlayerHandUi = ({ cardsInHand, playerPlayACard }: PropsType) => {
    return (
        <div className="flex absolute bottom-3 left-1/2 transform -translate-x-1/2">
            {cardsInHand.map((card) => (
                <CardLogic key={card.id} card={card} playerPlayACard={playerPlayACard} />
            ))}
        </div>
    )
}