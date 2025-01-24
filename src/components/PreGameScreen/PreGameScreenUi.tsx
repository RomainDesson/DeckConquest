import { CardType } from "../Card/types";
import { clubsDeck, diamondDeck, heartsDeck, spadesDeck } from "../PlayerBar/PlayerDeck";
import { GiCrown } from "react-icons/gi";
import { LuBookOpen } from "react-icons/lu";
import { motion } from "framer-motion";
import { faGem, faHeart, faCircle, faSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface PropsType {
    joinGame: (e: React.FormEvent<HTMLFormElement>) => void;
    setGameId: (gameId: string) => void;
    setPlayerName: (playerName: string) => void;
    handleSetPlayerDeck: (deck: CardType[]) => void;
    playerDeck: CardType[];
    showRules: boolean;
    setShowRules: (showRules: boolean) => void;
}

export const PreGameScreenUi = ({joinGame, setGameId, setPlayerName, handleSetPlayerDeck, playerDeck, showRules, setShowRules}: PropsType) => {
    const deckIcons = [
        { icon: faSquare, color: "text-blue-400" },
        { icon: faHeart, color: "text-red-400" },
        { icon: faCircle, color: "text-green-400" },
        { icon: faGem, color: "text-purple-400" }
    ];

    return (
        <div className="min-h-screen w-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 relative overflow-hidden">
            {/* Motifs d'arrière-plan animés */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[url('/assets/pattern.png')] opacity-5" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                {deckIcons.map((Icon, index) => (
                    <motion.div
                        key={index}
                        className={`absolute ${Icon.color} opacity-5`}
                        initial={{ scale: 1, opacity: 0.05 }}
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.05, 0.08, 0.05],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            delay: index * 1,
                        }}
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            fontSize: '8rem',
                        }}
                    >
                        <FontAwesomeIcon icon={Icon.icon} />
                    </motion.div>
                ))}
            </div>
            
            <div className="relative z-10 container mx-auto px-4 py-12 flex flex-col items-center">
                {/* En-tête */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16 relative"
                >
                    <motion.div 
                        className="flex items-center justify-center mb-6"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                        <GiCrown className="text-amber-500 drop-shadow-[0_0_15px_rgba(251,191,36,0.3)]" size={64} />
                    </motion.div>
                    <div className="relative">
                        <h1 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 mb-4 tracking-tight">
                            Deck Conquest
                        </h1>
                        <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 via-amber-500/10 to-amber-500/20 blur-lg -z-10" />
                    </div>
                    <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        Plongez dans une expérience stratégique unique où chaque carte peut changer le cours de la partie
                    </p>
                </motion.div>

                <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Formulaire */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-white/10 relative group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-transparent to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                        <form onSubmit={joinGame} className="space-y-6 relative">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-zinc-300">ID de la partie</label>
                                <input 
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500/50 transition-all"
                                    placeholder="Entrez l'ID de la partie" 
                                    type="text" 
                                    onChange={(e) => setGameId(e.target.value)} 
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-zinc-300">Nom du joueur</label>
                                <input 
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500/50 transition-all"
                                    placeholder="Entrez votre nom" 
                                    type="text" 
                                    onChange={(e) => setPlayerName(e.target.value)} 
                                />
                            </div>
                            <motion.button 
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-medium rounded-xl transition-all duration-200 shadow-lg shadow-amber-500/20 relative overflow-hidden group"
                                type="submit"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                                <span className="relative">Rejoindre la partie</span>
                            </motion.button>
                        </form>
                    </motion.div>

                    {/* Sélection du deck */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-6"
                    >
                        <div className="flex items-center justify-between">
                            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400">Votre deck</h2>
                            <motion.button 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-xl text-zinc-300 hover:text-white transition-all border border-white/10"
                                onClick={() => setShowRules(!showRules)}
                            >
                                <LuBookOpen className="text-amber-500" />
                                <span>Règles du jeu</span>
                            </motion.button>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-6">
                            {[clubsDeck, diamondDeck, heartsDeck, spadesDeck].map((deck, index) => (
                                <motion.div 
                                    key={index}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    className={`relative cursor-pointer transition-all duration-200 ${
                                        playerDeck.includes(deck[0]) 
                                            ? 'ring-2 ring-amber-500 rounded-xl shadow-lg shadow-amber-500/20' 
                                            : ''
                                    }`}
                                    onClick={() => handleSetPlayerDeck(deck)}
                                >
                                    <div className="aspect-[3/4] rounded-xl overflow-hidden">
                                        <img 
                                            src={deck[0].image} 
                                            alt={deck[0].name} 
                                            className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110" 
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <motion.div 
                                            className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: playerDeck.includes(deck[0]) ? 1 : 0, y: playerDeck.includes(deck[0]) ? 0 : 10 }}
                                        >
                                            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/80 text-sm font-medium ${playerDeck.includes(deck[0]) ? 'opacity-100' : 'opacity-0'}`}>
                                                Sélectionné
                                            </div>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Modal des règles */}
            {showRules && (
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                >
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="bg-zinc-900/90 backdrop-blur-xl border border-zinc-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8 text-zinc-300 shadow-xl"
                    >
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-semibold text-white">Règles du jeu</h2>
                            <motion.button 
                                whileHover={{ scale: 1.1, rotate: 90 }}
                                whileTap={{ scale: 0.9 }}
                                className="text-zinc-400 hover:text-white transition-colors"
                                onClick={() => setShowRules(false)}
                            >
                                ×
                            </motion.button>
                        </div>
                        <div className="space-y-6">
                            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">Règles du Jeu : Deck Conquest</h1>
                            <p className="text-zinc-400 leading-relaxed">Ce jeu de cartes stratégique oppose deux joueurs dans une bataille de contrôle de territoires. Le bluff et la gestion des ressources sont essentiels pour l'emporter.</p>
                            
                            <div className="space-y-4">
                                {[
                                    { title: "But du jeu", content: "Le but est de contrôler plus de territoires que ton adversaire en accumulant le plus de points dans ces zones à la fin de la partie." },
                                    { title: "Mise en place", items: [
                                        "Chaque joueur dispose d'un deck de 13 cartes",
                                        "3 cartes sont retirées aléatoirement de chaque deck au début de la partie",
                                        "Chaque joueur pioche une main de 5 cartes pour commencer"
                                    ]},
                                    { title: "Déroulement d'un tour", items: [
                                        "Les joueurs peuvent jouer autant de cartes qu'ils le souhaitent par tour",
                                        "Un maximum de 4 cartes peut être joué sur chaque territoire",
                                        "À la fin de chaque tour, les joueurs piochent une carte depuis leur deck",
                                        "Les tours sont simultanés : un tour se termine lorsque les deux joueurs ont fini de jouer leurs cartes"
                                    ]}
                                ].map((section, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="bg-white/5 rounded-xl p-6 border border-white/10"
                                    >
                                        <h2 className="text-xl font-semibold text-amber-400 mb-3">{section.title}</h2>
                                        {section.content ? (
                                            <p className="text-zinc-300">{section.content}</p>
                                        ) : (
                                            <ul className="space-y-2">
                                                {section.items?.map((item, idx) => (
                                                    <li key={idx} className="flex items-start gap-2 text-zinc-300">
                                                        <span className="text-amber-500 mt-1">•</span>
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </div>
    )
}