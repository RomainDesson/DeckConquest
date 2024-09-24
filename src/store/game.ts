import { create } from 'zustand';

interface GameState {
    gameId: string;
    setGameId: (id: string) => void;
    turnCount: number;
    setTurnCount: (count: number) => void;
    player: {name: string, id: string};
    setPlayer: (player: {name: string, id: string}) => void;
    playerHasEndedTurn: boolean;
    setPlayerHasEndedTurn: (hasEnded: boolean) => void;
    gameIsFinished: boolean;
    setGameIsFinished: (finished: boolean) => void;
}

export const useGameStore = create<GameState>((set) => ({
    gameId: '',
    setGameId: (id: string) => set({ gameId: id }),
    turnCount: 1,
    setTurnCount: (count: number) => set({ turnCount: count }),
    player: {name: '', id: ''},
    setPlayer: (player: {name: string, id: string}) => set({ player: player }),
    playerHasEndedTurn: false,
    setPlayerHasEndedTurn: (hasEnded: boolean) => set({ playerHasEndedTurn: hasEnded }),
    gameIsFinished: false,
    setGameIsFinished: (finished: boolean) => set({ gameIsFinished: finished }),
}));
