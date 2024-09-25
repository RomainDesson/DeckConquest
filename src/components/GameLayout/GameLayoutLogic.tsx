import { useState, useEffect } from "react";
import { GameLayoutUi } from "./GameLayoutUi";
import { socket } from "../../utils/socket";
import { useGameStore } from "../../store/game";

export const GameLayoutLogic = () => {
    const [playerName, setPlayerName] = useState<string>('');
    const [opponentName, setOpponentName] = useState<string>(`Waiting for an opponent...` );
    const [isLogged, setIsLogged] = useState(false);
    const [gameIsStarted, setGameIsStarted] = useState(false);
    const { gameId, setGameId, setTurnCount, setPlayer, setPlayerHasEndedTurn, setGameIsFinished } = useGameStore();
    const [isPlayerOne, setIsPlayerOne] = useState(false);

    const joinGame = () => {
        if (gameId && playerName) {
            socket.emit('joinGame', gameId, playerName);
            setIsLogged(true);
        }
    };

    useEffect(() => {
        socket.on('welcome', (player: {name: string, id: string}) => {
            setPlayer(player);
        });

        socket.on('startGame', ({ player1, player2 }) => {
            if (player1.name === playerName) {
                setIsPlayerOne(true);
                setOpponentName(player2.name);
            } else {
                setIsPlayerOne(false);
                setOpponentName(player1.name);
            }
            setGameIsStarted(true);
        });

        socket.on('endTurn', (turnCount: number) => {
            console.log("turnCount", turnCount)
            setTurnCount(turnCount)
            setPlayerHasEndedTurn(false);
            socket.emit('revealCards', gameId)
        });

        socket.on('gameEnded', () => {
            setGameIsFinished(true);
        });

        return () => {
            socket.off('playerJoined');
            socket.off('startGame');
            socket.off('endTurn');
        };
    }, [playerName]);

    return (
        <GameLayoutUi 
            isLogged={isLogged} 
            joinGame={joinGame} 
            playerName={playerName} 
            opponentName={opponentName} 
            setGameId={setGameId} 
            setPlayerName={setPlayerName} 
            gameIsStarted={gameIsStarted}
            isPlayerOne={isPlayerOne}
        />
    );
};
