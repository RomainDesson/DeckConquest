import { CardType } from "./types"
import { CardUi } from "./CardUi"
import { useDrag } from 'react-dnd'

interface PropsType {
    card: CardType
    removeCardFromHand: (cardId: string) => void
}

export const CardLogic = ({ card, removeCardFromHand }: PropsType) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'CARD',
        item: { id: card.id },
        collect: (monitor) => ({
          isDragging: monitor.isDragging(),
        }),
        end: (item, monitor) => {
            if (monitor.didDrop()) {
                removeCardFromHand(item.id)
            }
        }
      }));
    return <CardUi card={card} isDragging={isDragging} drag={drag}/>
}