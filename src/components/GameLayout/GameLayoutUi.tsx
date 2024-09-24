import { GameboardLogic } from "../Gameboard/GameboardLogic"
import { OpponentBarUi } from "../OpponentBar/OpponentBarUi"
import { PlayerHandLogic } from "../PlayerBar/PlayerHand/PlayerHandLogic"
import { PlayerBarLogic } from "../PlayerBar/PlayerBarLogic"

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
        return (
            <div className="flex flex-col justify-between">
                <form onSubmit={joinGame}>
                    <input className={'border border-gray-300 rounded-md p-2'} placeholder="Game ID" type="text" onChange={(e) => setGameId(e.target.value)} />
                    <input className={'border border-gray-300 rounded-md p-2'} placeholder="Player Name" type="text" onChange={(e) => setPlayerName(e.target.value)} />
                    <button className={'border border-gray-300 rounded-md p-2'} type="submit">Join Game</button>
                </form>
            </div>
        )
    }

    return (
        <div className="w-screen h-screen flex flex-col justify-between">
            <OpponentBarUi opponentName={opponentName} />
            {gameIsStarted ? <GameboardLogic isPlayerOne={isPlayerOne} /> : <div>Waiting for the game to start...</div>}
            <PlayerHandLogic gameIsStarted={gameIsStarted} />
            <PlayerBarLogic playerName={playerName}/>
        </div>
    )
}