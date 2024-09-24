import { CardAreaLogic } from "../CardArea/CardAreaLogic"
import { LandAreaLogic } from "../LandArea/LandAreaLogic"
import { CardTypeWithZoneId } from "./GameboardLogic"

interface PropsType {
    playerZones: string[],
    cardsInZone: (zoneId: string) => CardTypeWithZoneId[]
    gameIsFinished: boolean
    winner: string
}

export const GameboardUi = ({ playerZones, cardsInZone, gameIsFinished, winner }: PropsType) => {
    return (
        <div className="grid grid-cols-3 grid-rows-3 place-items-center" style={{ width: "100vw", height: "60vh" }}>
            <CardAreaLogic zoneId={playerZones[0]} isBlocked={true} cards={cardsInZone(playerZones[0])} />
            <CardAreaLogic zoneId={playerZones[1]} isBlocked={true} cards={cardsInZone(playerZones[1])} />
            <CardAreaLogic zoneId={playerZones[2]} isBlocked={true} cards={cardsInZone(playerZones[2])} />
            <LandAreaLogic />
            <LandAreaLogic />
            <LandAreaLogic />
            <CardAreaLogic zoneId={playerZones[3]} isBlocked={false} cards={cardsInZone(playerZones[3])} />
            <CardAreaLogic zoneId={playerZones[4]} isBlocked={false} cards={cardsInZone(playerZones[4])} />
            <CardAreaLogic zoneId={playerZones[5]} isBlocked={false} cards={cardsInZone(playerZones[5])} />
            {gameIsFinished && <div className="absolute top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex flex-col justify-center items-center">
                <div className="text-white text-4xl font-bold">Game is finished</div>
                <div className="text-white text-4xl font-bold">Winner: {winner}</div>
            </div>}
        </div>
    )
}
