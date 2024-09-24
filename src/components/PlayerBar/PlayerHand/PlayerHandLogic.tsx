import { PlayerHandUi } from "./PlayerHandUi"
import { CardType } from "../../Card/types"
import { useEffect } from "react"
import { PlayerDeck } from "../PlayerDeck"
import { shuffleDeck } from "../../../utils/shuffleDeck"
import { useGameStore } from "../../../store/game"
import { useDeckStore } from "../../../store/deck"
import { socket } from "../../../utils/socket"

interface PropsType {
    gameIsStarted: boolean
}

export const PlayerHandLogic = ({gameIsStarted}: PropsType) => {
    const { gameId } = useGameStore();
    const { initializeDeck, drawCard, cardsInHand, playCard } = useDeckStore();

    useEffect(() => {
        initializeDeck(shuffleDeck(PlayerDeck))
        drawCard(5)
    }, [gameIsStarted])

    useEffect(() => {
        socket.on('endTurn', () => {
            drawCard(1)
        })
    }, [])

    const playerPlayACard = (cardPlayed: CardType, zoneId: string) => {
        socket.emit('playCard', gameId, cardPlayed, zoneId)
        playCard(cardPlayed)
    }

    if (!gameIsStarted) {
        return null
    }

    return <PlayerHandUi cardsInHand={cardsInHand} playerPlayACard={playerPlayACard} />
}