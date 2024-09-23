import { GameboardLogic } from "../Gameboard/GameboardLogic"
import { PlayerBarUi } from "../PlayerBar/PlayerBarUi"
import { OpponentBarUi } from "../OpponentBar/OpponentBarUi"
import { PlayerHandLogic } from "../PlayerBar/PlayerHand/PlayerHandLogic"

export const GameLayoutUi = () => {
    return (
        <div className="w-screen h-screen flex flex-col justify-between">
            <OpponentBarUi />
            <GameboardLogic />
            <PlayerHandLogic />
            <PlayerBarUi />
        </div>
    )
}