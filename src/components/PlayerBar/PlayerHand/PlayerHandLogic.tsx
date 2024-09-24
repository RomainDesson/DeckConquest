import { PlayerHandUi } from "./PlayerHandUi"
import { CardType } from "../../Card/types"
import { useEffect, useCallback } from "react"
import { useGameStore } from "../../../store/game"
import { useDeckStore } from "../../../store/deck"
import { socket } from "../../../utils/socket"

interface PropsType {
    gameIsStarted: boolean
}

export const PlayerHandLogic = ({gameIsStarted}: PropsType) => {
    const { gameId, playerHasEndedTurn } = useGameStore();
    const { drawCard, cardsInHand, playCard } = useDeckStore();

    useEffect(() => {
        socket.on('endTurn', () => {
            drawCard(1)
        })
    }, [])

    const playerPlayACard = useCallback((cardPlayed: CardType, zoneId: string) => {
        socket.emit('playCard', gameId, cardPlayed, zoneId)
        playCard(cardPlayed)
    }, [playerHasEndedTurn])

    if (!gameIsStarted) {
        return null
    }

    return <PlayerHandUi cardsInHand={cardsInHand} playerPlayACard={playerPlayACard} />
}