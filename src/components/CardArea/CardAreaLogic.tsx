import { useDrop } from 'react-dnd'
import { useState } from 'react'
import { CardAreaUi } from './CardAreaUi'

export const CardAreaLogic = () => {
    const [droppedCards, setDroppedCards] = useState<string[]>([]);

    const handleDrop = (item: { id: string }) => {
        setDroppedCards((prev) => [...prev, item.id]);
    };
    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'CARD',
        drop: (item) => handleDrop(item),
        collect: (monitor) => ({
          isOver: monitor.isOver(),
        }),
      }));
    return <CardAreaUi isOver={isOver} drop={drop} droppedCards={droppedCards} />
}