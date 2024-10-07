import { CardType } from "../Card/types";
import { clubsDeck, diamondDeck, heartsDeck, spadesDeck } from "../PlayerBar/PlayerDeck";
import { GiCrown } from "react-icons/gi";
import { LuBookOpen } from "react-icons/lu";

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
    return (
        <div className="bg-yellow-800 min-h-screen w-screen flex justify-center items-center">
            <div className="flex flex-col justify-between items-center relative bg-gradient-to-b from-yellow-200 to-yellow-100 p-8 rounded-2xl shadow-2xl max-w-6xl mx-auto">
            <div className="w-full max-w-6xl mx-auto">
                <h1 className="text-6xl font-bold mb-8 text-yellow-800 text-center relative">
                    <GiCrown className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-yellow-600" size={48} />
                    Deck Conquest
                </h1>
                <button 
                    className="text-xl font-bold mb-8 bg-yellow-600 hover:bg-yellow-700 text-white py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 mx-auto block flex items-center justify-center"
                    onClick={() => setShowRules(!showRules)}
                >
                    <LuBookOpen className="mr-2" />
                    {showRules ? "Fermer les règles" : "Afficher les règles"}
                </button>
                
                {showRules && (
                    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                        <div className="bg-white bg-cover p-8 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto relative border-4 border-brown-600">
                            <button 
                                className="absolute top-2 right-2 text-2xl font-bold text-brown-800 hover:text-brown-600"
                                onClick={() => setShowRules(false)}
                            >
                                &times;
                            </button>
                            <h1 className="text-3xl font-bold mb-8 text-brown-800 font-serif">Règles du Jeu : Deck Conquest</h1>
                            <h1 className="text-2xl font-bold mb-8">Règles du Jeu : Deck Conquest</h1>
                            <p>Ce jeu de cartes stratégique oppose deux joueurs dans une bataille de contrôle de territoires. Le bluff et la gestion des ressources sont essentiels pour l'emporter.</p>
                            <h2 className="text-xl font-semibold mt-4">But du jeu :</h2>
                            <p>Le but est de contrôler plus de territoires que ton adversaire en accumulant le plus de points dans ces zones à la fin de la partie.</p>
                            <h2 className="text-xl font-semibold mt-4">Mise en place :</h2>
                            <ul className="list-disc list-inside ml-4">
                                <li>Chaque joueur dispose d'un deck de 13 cartes.</li>
                                <li>3 cartes sont retirées aléatoirement de chaque deck au début de la partie.</li>
                                <li>Chaque joueur pioche une main de 5 cartes pour commencer.</li>
                            </ul>
                            <h2 className="text-xl font-semibold mt-4">Déroulement d'un tour :</h2>
                            <ul className="list-disc list-inside ml-4">
                                <li>Les joueurs peuvent jouer autant de cartes qu'ils le souhaitent par tour.</li>
                                <li>Un maximum de 4 cartes peut être joué sur chaque territoire.</li>
                                <li>À la fin de chaque tour, les joueurs piochent une carte depuis leur deck.</li>
                                <li>Les tours sont simultanés : un tour se termine lorsque les deux joueurs ont fini de jouer leurs cartes.</li>
                            </ul>
                            <h2 className="text-xl font-semibold mt-4">Règles de jeu :</h2>
                            <ul className="list-disc list-inside ml-4">
                                <li>Chaque carte a une valeur correspondant à sa puissance, égale à son nombre.</li>
                                <li>Les cartes jouées sur un territoire contribuent à la puissance totale dans cette zone.</li>
                                <li>À la fin de chaque tour, les cartes jouées par ton adversaire sont révélées.</li>
                                <li>La partie continue jusqu'à ce que plus aucun joueur n'ait de carte à piocher dans son deck.</li>
                            </ul>
                            <h2 className="text-xl font-semibold mt-4">Victoire :</h2>
                            <p>À la fin de la partie, le joueur ayant accumulé le plus de points en contrôlant les territoires remporte la victoire. Les points de chaque territoire sont déterminés par la puissance totale des cartes posées dessus.</p>
                            <h2 className="text-xl font-semibold mt-4">Conclusion :</h2>
                            <p>Utilise tes cartes avec stratégie, bluffe ton adversaire, et contrôle les territoires pour remporter la victoire !</p>
                        </div>
                    </div>
                )}
                
                <p className="text-lg mb-8 text-yellow-800 text-center">Veuillez entrer l'ID du jeu et votre nom pour rejoindre la partie</p>
                <form onSubmit={joinGame} className="mb-16 flex flex-col items-center w-full">
                    <input 
                        className="border-2 border-yellow-500  rounded-md p-3 mb-4 bg-yellow-100 text-brown-800 placeholder-brown-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full max-w-md"
                        placeholder="ID de la partie" 
                        type="text" 
                        onChange={(e) => setGameId(e.target.value)} 
                    />
                    <input 
                        className="border-2 border-yellow-500 rounded-md p-3 mb-4 bg-yellow-100 text-brown-800 placeholder-brown-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full max-w-md"
                        placeholder="Nom du joueur" 
                        type="text" 
                        onChange={(e) => setPlayerName(e.target.value)} 
                    />
                    <button 
                        className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded transition duration-300 ease-in-out transform hover:scale-105 shadow-lg flex items-center justify-center"
                        type="submit"
                    >
                        Rejoindre la partie
                    </button>
                </form>
                <div className=" p-8 rounded-lg w-full shadow-xl border-2 border-yellow-200">
                    <h1 className="text-3xl font-bold mb-8 text-yellow-800 font-serif text-center">Choisissez votre deck</h1>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[clubsDeck, diamondDeck, heartsDeck, spadesDeck].map((deck, index) => (
                            <div 
                                key={index}
                                className={`${playerDeck.includes(deck[0]) ? 'rounded-lg transform scale-110' : 'p-2'} cursor-pointer transition-all duration-100`} 
                                onClick={() => handleSetPlayerDeck(deck)}
                            >
                                <img src={deck[0].image} alt={deck[0].name} className="rounded-lg w-40" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}