import { CardAreaLogic } from "../CardArea/CardAreaLogic"
import { CardTypeWithZoneId } from "./GameboardLogic"
import { GiCrown, GiCardPlay, GiCardRandom, GiDiamonds, GiSpades, GiHearts, GiClubs } from "react-icons/gi"
import { FaChessBoard } from "react-icons/fa"
import { motion, AnimatePresence } from "framer-motion"

interface PropsType {
    playerZones: string[],
    cardsInZone: (zoneId: string) => CardTypeWithZoneId[]
    gameIsFinished: boolean
    winner: string
}

export const GameboardUi = ({ playerZones, cardsInZone, gameIsFinished, winner }: PropsType) => {
    // Symboles flottants pour l'arrière-plan
    const floatingSymbols = [
        { Icon: GiSpades, color: "text-blue-400" },
        { Icon: GiHearts, color: "text-red-400" },
        { Icon: GiClubs, color: "text-green-400" },
        { Icon: GiDiamonds, color: "text-purple-400" }
    ];

    return (
        <div className="flex-1 flex items-stretch justify-center p-4 relative">
            {/* Symboles flottants en arrière-plan */}
            {floatingSymbols.map((Symbol, index) => (
                Array.from({ length: 3 }).map((_, subIndex) => (
                    <motion.div
                        key={`${index}-${subIndex}`}
                        className={`absolute ${Symbol.color} opacity-5`}
                        initial={{ scale: 1, opacity: 0.05 }}
                        animate={{
                            y: [0, -30, 0],
                            scale: [1, 1.2, 1],
                            opacity: [0.05, 0.08, 0.05],
                        }}
                        transition={{
                            duration: 4 + Math.random() * 2,
                            repeat: Infinity,
                            delay: index * 0.5 + subIndex,
                        }}
                        style={{
                            top: `${20 + Math.random() * 60}%`,
                            left: `${20 + Math.random() * 60}%`,
                            fontSize: '4rem',
                        }}
                    >
                        <Symbol.Icon />
                    </motion.div>
                ))
            ))}

            <div className="flex-1 flex items-center justify-center max-w-7xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-full aspect-[16/9] bg-white/5 backdrop-blur-xl rounded-2xl shadow-xl border border-white/10 relative overflow-hidden"
                >
                    {/* Effet de brillance animé */}
                    <div className="absolute inset-0 overflow-hidden rounded-2xl">
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/10 to-transparent"
                            animate={{
                                x: ['-100%', '100%'],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        />
                    </div>

                    {/* Bordure brillante */}
                    <div className="absolute -inset-[1px] bg-gradient-to-r from-amber-500/20 via-white/20 to-amber-500/20 rounded-2xl z-0" />
                    
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-transparent to-amber-500/5 rounded-2xl" />
                    
                    {/* Titre avec effet de profondeur */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
                        <div className="relative">
                            <h1 className="text-6xl font-bold text-white/5 flex items-center tracking-tight blur-sm scale-110">
                                <GiCrown className="mr-2" />
                                Deck Conquest
                            </h1>
                            <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 flex items-center tracking-tight absolute inset-0">
                                <GiCrown className="mr-2" />
                                Deck Conquest
                            </h1>
                        </div>
                    </div>
                    
                    {/* Icônes décoratives avec animation */}
                    {[FaChessBoard, GiCardPlay, GiCardRandom].map((Icon, index) => (
                        <motion.div
                            key={index}
                            className="absolute text-amber-500/20"
                            whileHover={{ scale: 1.2, opacity: 0.4 }}
                            style={{
                                top: index === 0 ? '1rem' : index === 1 ? '1rem' : 'auto',
                                bottom: index === 2 ? '1rem' : 'auto',
                                left: index === 0 ? '1rem' : 'auto',
                                right: index === 1 ? '1rem' : index === 2 ? '1rem' : 'auto',
                            }}
                        >
                            <Icon size={40} />
                        </motion.div>
                    ))}

                    {/* Grille de jeu révisée */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-[90%] h-[85%] grid grid-cols-3 grid-rows-2 gap-8">
                            {[...Array(6)].map((_, index) => (
                                <motion.div 
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center justify-center w-full h-full"
                                >
                                    <div className="w-[160px] aspect-[3/4]">
                                        <CardAreaLogic 
                                            zoneId={playerZones[index]} 
                                            isBlocked={index < 3 || cardsInZone(playerZones[index]).length > 3} 
                                            cards={cardsInZone(playerZones[index])} 
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Modal de fin de partie amélioré */}
            <AnimatePresence>
                {gameIsFinished && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
                    >
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="bg-zinc-900/90 backdrop-blur-xl border border-amber-500/20 rounded-2xl max-w-2xl w-full p-8 text-center relative overflow-hidden"
                        >
                            {/* Effet de particules */}
                            <div className="absolute inset-0 overflow-hidden">
                                {Array.from({ length: 20 }).map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute w-1 h-1 bg-amber-500/30 rounded-full"
                                        animate={{
                                            y: [-10, -60],
                                            x: Math.random() * 20 - 10,
                                            opacity: [0, 1, 0],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            delay: Math.random() * 2,
                                        }}
                                        style={{
                                            left: `${Math.random() * 100}%`,
                                            bottom: "0",
                                        }}
                                    />
                                ))}
                            </div>

                            <motion.div 
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                className="inline-block mb-6 relative"
                            >
                                <GiCrown className="text-amber-500 drop-shadow-[0_0_15px_rgba(251,191,36,0.3)]" size={80} />
                                <motion.div
                                    className="absolute inset-0 bg-amber-500 filter blur-xl opacity-30"
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [0.3, 0.5, 0.3],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                    }}
                                />
                            </motion.div>

                            <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 relative">
                                <span className="relative z-10">Partie terminée</span>
                                <motion.span
                                    className="absolute inset-0 text-amber-500 opacity-20 blur-sm"
                                    animate={{
                                        scale: [1, 1.1, 1],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                    }}
                                >
                                    Partie terminée
                                </motion.span>
                            </h2>

                            <motion.p 
                                className="text-2xl text-zinc-400"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                Gagnant : <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">{winner}</span>
                            </motion.p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
