import { CardType } from "../Card/types"
import { CardAreaDroppedItem } from "./CardAreaDroppedItem/CardAreaDroppedItem"

interface PropsType {
    isOver: boolean
    drop: any
    droppedCards: CardType[]
    isBlocked: boolean
}

export const CardAreaUi = ({ isOver, drop, droppedCards, isBlocked }: PropsType) => {
    return (
        <div>
            <div
            ref={isBlocked ? () => {} : drop}
            className={`grid grid-cols-2 gap-2 justify-between items-center rounded-lg ${isOver ? 'bg-green-300' : ''}`}
            style={{
                height: '200px',
                width: '150px',
                border: '2px solid white',
                position: 'relative',
            }}
        >
            {droppedCards.map((card: CardType) => (
                <CardAreaDroppedItem key={card.id} card={card} />
            ))}
        </div>
        <div>Points: {droppedCards.reduce((sum, card) => sum + card.power, 0)}</div>
        </div>
    )
}