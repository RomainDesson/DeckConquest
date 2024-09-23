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
                cursor: 'move',
                border: '1px solid black',
                padding: '8px',
                margin: '4px',
                backgroundColor: 'white',
            }}
        >
            <img src={card.image} alt={card.name} />
            <div className="flex flex-col">
                <div className="text-lg font-bold">{card.name}</div>
                <div className="text-sm">{card.description}</div>
            </div>
        </div>  
    )
}