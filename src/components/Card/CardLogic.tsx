import { CardType } from "./types";
import { CardUi } from "./CardUi";
import { useDrag } from "react-dnd";
import { useGameStore } from "../../store/game";

interface PropsType {
  card: CardType;
  playerPlayACard: (cardId: CardType, zoneId: string) => void;
}

export const CardLogic = ({ card, playerPlayACard }: PropsType) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "CARD",
    item: card,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (dropResult && typeof dropResult === "object" && "zoneId" in dropResult) {
        const zoneId = dropResult.zoneId as string;
        const currentPlayerHasEndedTurn = useGameStore.getState().playerHasEndedTurn;
        console.log("playerHasEndedTurn (during drag end)", currentPlayerHasEndedTurn);

        if (currentPlayerHasEndedTurn) {
          return;
        }
        playerPlayACard(item, zoneId);
      }
    },
  }));

  return <CardUi card={card} isDragging={isDragging} drag={drag} />;
};
