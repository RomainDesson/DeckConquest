import { CardType } from "../Card/types";
import { clubsDeck, diamondDeck, heartsDeck, spadesDeck } from "../PlayerBar/PlayerDeck";

interface PropsType {
    joinGame: (e: React.FormEvent<HTMLFormElement>) => void;
    setGameId: (gameId: string) => void;
    setPlayerName: (playerName: string) => void;
    handleSetPlayerDeck: (deck: CardType[]) => void;
    playerDeck: CardType[];
}

export const PreGameScreenUi = ({joinGame, setGameId, setPlayerName, handleSetPlayerDeck, playerDeck}: PropsType) => {
    return (
        <div className="flex flex-col justify-between">
            <form onSubmit={joinGame} className="mb-16">
                <input className={'border border-gray-300 rounded-md p-2'} placeholder="Game ID" type="text" onChange={(e) => setGameId(e.target.value)} />
                <input className={'border border-gray-300 rounded-md p-2'} placeholder="Player Name" type="text" onChange={(e) => setPlayerName(e.target.value)} />
                <button className={'border border-gray-300 rounded-md p-2'} type="submit">Join Game</button>
            </form>
            <div>
                <h1 className="text-2xl font-bold mb-8">Choose your deck</h1>
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