import { socket } from "../utils/socket";

export const endTurn = (gameId: string, player: {name: string, id: string}, endGame: boolean) => {
    socket.emit('endTurn', gameId, player, endGame);
}