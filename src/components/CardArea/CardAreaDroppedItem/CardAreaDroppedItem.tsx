import { CardType } from "../../Card/types"

interface PropsType {
    card: CardType
}

export const CardAreaDroppedItem = ({ card }: PropsType) => {
    return (
        <div className='border-2 border-gray-300 h-full w-full flex justify-center items-center'>
            <div>{card.power}</div>
        </div>
    )
}