import { CardType } from "./types"
 
interface PropsType {
    card: CardType
    isDragging: boolean
    drag: any
}

export const CardUi = ({ card, isDragging, drag }: PropsType) => {
    return (
        <div
            ref={drag}
            style={{
                opacity: isDragging ? 0.5 : 1,
                cursor: 'pointer',
            }}
        >
            <img className="w-20 h-32" src={card.image} alt={card.name} />
        </div>
    )
}