import { GiCrown, GiSandsOfTime } from "react-icons/gi";
import { FaUser } from "react-icons/fa";
import { motion } from "framer-motion";

interface PropsType {
    playerName: string
    turnCount: number
    handleEndTurn: () => void
    playerHasEndedTurn: boolean
}

export const PlayerBarUi = ({playerName, turnCount, handleEndTurn, playerHasEndedTurn}: PropsType) => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full bg-white/5 backdrop-blur-lg border-t border-white/10 relative"
        >
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-transparent to-amber-500/5" />
            <div className="relative z-10 w-full h-20 flex flex-row justify-between items-center px-8">
                <div className="flex items-center space-x-4">
                    <motion.div 
                        whileHover={{ scale: 1.05, rotate: 5 }}
                        className="bg-gradient-to-br from-amber-400/20 to-amber-600/20 p-3 rounded-xl border border-amber-500/20"
                    >
                        <FaUser className="text-amber-500 text-2xl" />
                    </motion.div>
                    <div>
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-400 flex items-center"
                        >
                            {playerName}
                            {playerHasEndedTurn && (
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="ml-2"
                                >
                                    <GiCrown className="text-amber-500 drop-shadow-[0_0_8px_rgba(251,191,36,0.3)]" />
                                </motion.div>
                            )}
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-sm text-zinc-400 flex items-center"
                        >
                            <GiSandsOfTime className="mr-1 text-amber-500/70" />
                            Tour {turnCount}
                        </motion.div>
                    </div>
                </div>
                <div className="flex items-center space-x-6">
                    {!playerHasEndedTurn && (
                        <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-medium rounded-xl transition-all duration-200 shadow-lg shadow-amber-500/20 relative overflow-hidden group"
                            onClick={() => handleEndTurn()}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                            <span className="relative">Fin du tour</span>
                        </motion.button>
                    )}
                </div>
            </div>
        </motion.div>
    )
}