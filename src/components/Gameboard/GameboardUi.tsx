import { CardAreaLogic } from "../CardArea/CardAreaLogic"
import { LandAreaLogic } from "../LandArea/LandAreaLogic"
import { CardTypeWithZoneId } from "./GameboardLogic"

interface PropsType {
    playerZones: string[],
    cardsInZone: (zoneId: string) => CardTypeWithZoneId[]
}

export const GameboardUi = ({ playerZones, cardsInZone }: PropsType) => {
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
        </div>
    )
}
