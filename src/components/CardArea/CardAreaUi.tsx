import { CardType } from "../Card/types"
import { CardAreaDroppedItem } from "./CardAreaDroppedItem/CardAreaDroppedItem"

interface PropsType {
    isOver: boolean
    drop: any
    droppedCards: CardType[]
}

export const CardAreaUi = ({ isOver, drop, droppedCards }: PropsType) => {
    return (
        <div>
            <div
            ref={drop}
            className="grid grid-cols-2 gap-2 justify-between items-center"
            style={{
                height: '200px',
                width: '150px',
                border: '1px dashed gray',
                position: 'relative',
                backgroundColor: isOver ? 'lightgreen' : 'white',
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