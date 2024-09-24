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
            className="flex flex-col justify-center items-center w-20 h-32"
        >
            <div className="flex flex-col">
                <div className="text-lg font-bold">{card.power}</div>
            </div>
        </div>  
    )
}