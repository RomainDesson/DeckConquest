import { CardTypeWithZoneId } from "../components/Gameboard/GameboardLogic";
import { socket } from "./socket";

export const determineWinner = (gameId: string, zonesScore: CardTypeWithZoneId[]) => {
    const result = zonesScore.reduce((acc: { [key: string]: number }, card) => {
        acc[card.zoneId] = (acc[card.zoneId] || 0) + card.power;
        return acc;
    }, {});
    let playerOneWonZone = 0
    let playerTwoWonZone = 0

    const playerOneZones = ["3", "4", "5"]
    const playerTwoZones = ["0", "1", "2"]

    if (result[playerOneZones[0]] > result[playerTwoZones[0]]) {
        playerOneWonZone += 1
    } else if (result[playerOneZones[0]] < result[playerTwoZones[0]]) {
        playerTwoWonZone += 1
    }

    if (result[playerOneZones[1]] > result[playerTwoZones[1]]) {
        playerOneWonZone += 1
    } else if (result[playerOneZones[1]] < result[playerTwoZones[1]]) {
        playerTwoWonZone += 1
    }

    if (result[playerOneZones[2]] > result[playerTwoZones[2]]) {
        playerOneWonZone += 1
    } else if (result[playerOneZones[2]] < result[playerTwoZones[2]]) {
        playerTwoWonZone += 1
    }

    socket.emit('pickWinner', gameId, [playerOneWonZone, playerTwoWonZone])
}