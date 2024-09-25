import { GameboardLogic } from "../Gameboard/GameboardLogic"
import { OpponentBarUi } from "../OpponentBar/OpponentBarUi"
import { PlayerHandLogic } from "../PlayerBar/PlayerHand/PlayerHandLogic"
import { PlayerBarLogic } from "../PlayerBar/PlayerBarLogic"
import { PreGameScreenLogic } from "../PreGameScreen/PreGameScreenLogic"

interface PropsType {
    isLogged: boolean
    joinGame: () => void
    playerName: string
    opponentName: string
    setGameId: (gameId: string) => void
    setPlayerName: (playerName: string) => void
    gameIsStarted: boolean
    isPlayerOne: boolean
}

export const GameLayoutUi = ({isLogged, joinGame, playerName, opponentName, setGameId, setPlayerName, gameIsStarted, isPlayerOne}: PropsType) => {

    if (!isLogged) {
        return <PreGameScreenLogic joinGame={joinGame} setGameId={setGameId} setPlayerName={setPlayerName} />
    }

    return (
        <div className="w-screen h-screen flex flex-col justify-between bg-green-600">
            <OpponentBarUi opponentName={opponentName} />
            {gameIsStarted ? <GameboardLogic isPlayerOne={isPlayerOne} /> : <div>Waiting for the game to start...</div>}
            <PlayerHandLogic gameIsStarted={gameIsStarted} />
            <PlayerBarLogic playerName={playerName}/>
        </div>
    )
}