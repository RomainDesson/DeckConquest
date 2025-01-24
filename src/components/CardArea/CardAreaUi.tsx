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
        <div className="flex flex-col items-center gap-2">
            <div
                ref={isBlocked ? () => {} : drop}
                className={`relative w-full aspect-[3/4] rounded-xl border-2 border-white/20 backdrop-blur-sm transition-colors ${
                    isOver ? 'bg-amber-500/20' : 'bg-white/5'
                } flex flex-wrap content-start justify-center gap-1 p-2`}
            >
                {droppedCards.map((card: CardType) => (
                    <div key={card.id} className="w-[45%] aspect-[3/4]">
                        <CardAreaDroppedItem card={card} />
                    </div>
                ))}
            </div>
            <div className="text-sm text-zinc-400">
                Points: <span className="text-amber-500">{droppedCards.reduce((sum, card) => sum + card.power, 0)}</span>
            </div>
        </div>
    )
}