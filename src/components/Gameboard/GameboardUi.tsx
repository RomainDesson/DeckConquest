import { CardAreaLogic } from "../CardArea/CardAreaLogic"
import { LandAreaUi } from "../LandArea/LandAreaUi"

export const GameboardUi = () => {
    return (
        <div className="grid grid-cols-3 grid-rows-3 gap-4 place-items-center" style={{ width: "100vw", height: "60vh" }}>
            <CardAreaLogic />
            <CardAreaLogic />
            <CardAreaLogic />
            <LandAreaUi />
            <LandAreaUi />
            <LandAreaUi />
            <CardAreaLogic />
            <CardAreaLogic />
            <CardAreaLogic />
        </div>
    )
}