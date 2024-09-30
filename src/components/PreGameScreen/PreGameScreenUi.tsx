import { CardType } from "../Card/types";
import { clubsDeck, diamondDeck, heartsDeck, spadesDeck } from "../PlayerBar/PlayerDeck";

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
        <div className="flex flex-col justify-between items-center relative">
            <h1 className="text-4xl font-bold mb-8">Deck Conquest</h1>
            <button className="text-xl font-bold mb-8" onClick={() => setShowRules(!showRules)}>
                {showRules ? "Fermer les règles" : "Afficher les règles"}
            </button>
            
            {showRules && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded-lg max-w-2xl max-h-[90vh] overflow-y-auto relative">
                        <button 
                            className="absolute top-2 right-2 text-2xl font-bold"
                            onClick={() => setShowRules(false)}
                        >
                            &times;
                        </button>
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
            
            <p className="text-lg mb-8">Veuillez entrer l'ID du jeu et votre nom pour rejoindre la partie</p>
            <form onSubmit={joinGame} className="mb-16">
                <input className={'border border-gray-300 rounded-md p-2'} placeholder="ID de la partie" type="text" onChange={(e) => setGameId(e.target.value)} />
                <input className={'border border-gray-300 rounded-md p-2'} placeholder="Nom du joueur" type="text" onChange={(e) => setPlayerName(e.target.value)} />
                <button className={'border border-gray-300 rounded-md p-2'} type="submit">Rejoindre la partie</button>
            </form>
            <div>
                <h1 className="text-2xl font-bold mb-8">Choisissez votre deck</h1>
                <div className="grid grid-cols-4 grid-rows-1 gap-8">
                    <div className={`${playerDeck.includes(clubsDeck[0]) ? 'border-8 border-blue-400 rounded-lg' : 'p-2'} cursor-pointer`} onClick={() => handleSetPlayerDeck(clubsDeck)}><img src={clubsDeck[0].image} alt={clubsDeck[0].name} /></div>
                    <div className={`${playerDeck.includes(diamondDeck[0]) ? 'border-8 border-blue-400 rounded-lg' : 'p-2'} cursor-pointer`} onClick={() => handleSetPlayerDeck(diamondDeck)}><img src={diamondDeck[0].image} alt={diamondDeck[0].name} /></div>
                    <div className={`${playerDeck.includes(heartsDeck[0]) ? 'border-8 border-blue-400 rounded-lg' : 'p-2'} cursor-pointer`} onClick={() => handleSetPlayerDeck(heartsDeck)}><img src={heartsDeck[0].image} alt={heartsDeck[0].name} /></div>
                    <div className={`${playerDeck.includes(spadesDeck[0]) ? 'border-8 border-blue-400 rounded-lg' : 'p-2'} cursor-pointer`} onClick={() => handleSetPlayerDeck(spadesDeck)}><img src={spadesDeck[0].image} alt={spadesDeck[0].name} /></div>
                </div>
            </div>
        </div>
    )
}