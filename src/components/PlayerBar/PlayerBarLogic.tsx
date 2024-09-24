import { PlayerBarUi } from "./PlayerBarUi"
import { useGameStore } from "../../store/game"
import { endTurn } from "../../utils/endTurn"
import { useDeckStore } from "../../store/deck"
import { useEffect } from "react"
import { PlayerDeck } from './PlayerDeck'
import { shuffleDeck } from '../../utils/shuffleDeck'

interface PropsType {
    playerName: string
}

export const PlayerBarLogic = ({ playerName }: PropsType) => {
    const { gameId, turnCount, player, playerHasEndedTurn, setPlayerHasEndedTurn } = useGameStore();
    const { initializeDeck, drawCard, deck } = useDeckStore();

    useEffect(() => {
        initializeDeck(shuffleDeck(PlayerDeck))
        drawCard(5)
    }, [])

    const handleEndTurn = () => {
        endTurn(gameId, player, deck.length === 0)
        setPlayerHasEndedTurn(true)
    }

    return <PlayerBarUi playerName={playerName} turnCount={turnCount} handleEndTurn={handleEndTurn} playerHasEndedTurn={playerHasEndedTurn} />
}