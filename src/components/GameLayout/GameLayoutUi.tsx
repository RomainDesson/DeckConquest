import { GameboardLogic } from "../Gameboard/GameboardLogic"
import { OpponentBarUi } from "../OpponentBar/OpponentBarUi"
import { PlayerHandLogic } from "../PlayerBar/PlayerHand/PlayerHandLogic"
import { PlayerBarLogic } from "../PlayerBar/PlayerBarLogic"
import { PreGameScreenLogic } from "../PreGameScreen/PreGameScreenLogic"
import { motion } from "framer-motion"

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
        <div className="w-screen h-screen flex flex-col justify-between bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 relative overflow-hidden">
            {/* Motif d'arrière-plan */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[url('/assets/pattern.png')] opacity-5" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            <div className="relative z-10 flex flex-col h-full">
                <OpponentBarUi opponentName={opponentName} />
                
                {gameIsStarted ? (
                    <GameboardLogic isPlayerOne={isPlayerOne} />
                ) : (
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex-grow flex flex-col items-center justify-center m-4"
                    >
                        <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-12 shadow-xl border border-white/10 relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-transparent to-amber-500/10 opacity-50 rounded-2xl" />
                            <div className="relative space-y-6 text-center">
                                <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200">
                                    En attente d'un adversaire
                                </h2>
                                <div className="flex justify-center">
                                    <div className="w-24 h-24 rounded-full border-4 border-amber-500/30 border-t-amber-500 animate-spin" />
                                </div>
                                <p className="text-xl text-zinc-400">
                                    Préparez-vous pour le combat !
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )}

                <PlayerHandLogic gameIsStarted={gameIsStarted} />
                <PlayerBarLogic playerName={playerName}/>
            </div>
        </div>
    )
}