import { PlayerBarUi } from "./PlayerBarUi"
import { useGameStore } from "../../store/game"
import { endTurn } from "../../utils/endTurn"
import { useDeckStore } from "../../store/deck"
import { useEffect } from "react"
import { shuffleDeck } from '../../utils/shuffleDeck'

interface PropsType {
    playerName: string
}

export const PlayerBarLogic = ({ playerName }: PropsType) => {
    const { gameId, turnCount, player, playerHasEndedTurn, setPlayerHasEndedTurn, playerDeck } = useGameStore();
    const { initializeDeck, drawCard, deck } = useDeckStore();

    useEffect(() => {
        initializeDeck(shuffleDeck(playerDeck))
        drawCard(5)
    }, [])

    const handleEndTurn = () => {
        setPlayerHasEndedTurn(true)
        endTurn(gameId, player, deck.length === 0)
    }

    return <PlayerBarUi playerName={playerName} turnCount={turnCount} handleEndTurn={handleEndTurn} playerHasEndedTurn={playerHasEndedTurn} />
}