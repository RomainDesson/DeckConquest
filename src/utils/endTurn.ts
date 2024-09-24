import { socket } from "../utils/socket";

export const endTurn = (gameId: string, player: {name: string, id: string}) => {
    socket.emit('endTurn', gameId, player);
}