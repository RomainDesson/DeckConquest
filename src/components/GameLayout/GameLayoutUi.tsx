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
        <div className="w-screen h-screen flex flex-col justify-between bg-yellow-900">
            <OpponentBarUi opponentName={opponentName} />
            {gameIsStarted ? (
                <GameboardLogic isPlayerOne={isPlayerOne} />
            ) : (
                <div className="flex-grow flex flex-col items-center justify-center bg-yellow-800 p-6 rounded-2xl shadow-2xl m-4">
                    <h2 className="text-4xl font-bold mb-6 text-yellow-200">En attente d'un adversaire</h2>
                    <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-yellow-200"></div>
                    <p className="mt-8 text-2xl text-yellow-100">Préparez-vous pour le combat !</p>
                </div>
            )}
            <PlayerHandLogic gameIsStarted={gameIsStarted} />
            <PlayerBarLogic playerName={playerName}/>
        </div>
    )
}