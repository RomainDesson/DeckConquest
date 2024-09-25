import { CardType } from "../../Card/types"

interface PropsType {
    card: CardType
}

export const CardAreaDroppedItem = ({ card }: PropsType) => {
    return (
        <div>
            <img className="w-full h-full" src={card.image} alt={card.name} />
        </div>
    )
}