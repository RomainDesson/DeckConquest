import { PlayerBarUi } from "./PlayerBarUi"
import { useGameStore } from "../../store/game"
import { endTurn } from "../../utils/endTurn"
interface PropsType {
    playerName: string
}

export const PlayerBarLogic = ({ playerName }: PropsType) => {
    const { gameId, turnCount, player, playerHasEndedTurn, setPlayerHasEndedTurn } = useGameStore();

    const handleEndTurn = () => {
        endTurn(gameId, player)
        setPlayerHasEndedTurn(true)
    }

    return <PlayerBarUi playerName={playerName} turnCount={turnCount} handleEndTurn={handleEndTurn} playerHasEndedTurn={playerHasEndedTurn} />
}