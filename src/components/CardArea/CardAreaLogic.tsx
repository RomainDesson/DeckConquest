import { useDrop } from 'react-dnd'
import { CardAreaUi } from './CardAreaUi'
import { CardTypeWithZoneId } from '../Gameboard/GameboardLogic'

interface PropsType {
  zoneId: string
  isBlocked: boolean
  cards: CardTypeWithZoneId[]
}

export const CardAreaLogic = ({zoneId, isBlocked, cards}: PropsType) => {

    const handleDrop = () => {
      if (isBlocked) {
        return
      }
      return { zoneId };
    }


    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'CARD',
        drop: () => handleDrop(),
        collect: (monitor) => ({
          isOver: monitor.isOver(),
        }),
      }));

    return <CardAreaUi isOver={isOver} drop={drop} droppedCards={cards} />
}