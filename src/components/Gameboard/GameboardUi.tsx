import { CardAreaLogic } from "../CardArea/CardAreaLogic"
import { CardTypeWithZoneId } from "./GameboardLogic"
import { GiCrown, GiCardPlay, GiCardRandom } from "react-icons/gi"
import { FaChessBoard } from "react-icons/fa"

interface PropsType {
    playerZones: string[],
    cardsInZone: (zoneId: string) => CardTypeWithZoneId[]
    gameIsFinished: boolean
    winner: string
}

export const GameboardUi = ({ playerZones, cardsInZone, gameIsFinished, winner }: PropsType) => {
    console.log(cardsInZone(playerZones[3]))
    return (
        <div className="h-screen w-screen flex flex-col justify-center items-center bg-yellow-800 overflow-hidden">
            <div className="relative w-11/12 h-5/6 bg-gradient-to-b from-yellow-200 to-yellow-100 p-6 rounded-2xl shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <h1 className="text-6xl font-bold text-yellow-600 opacity-20 flex items-center">
                        <GiCrown className="mr-2" />
                        Deck Conquest
                    </h1>
                </div>
                <FaChessBoard className="absolute top-2 left-2 text-yellow-600 opacity-20" size={40} />
                <GiCardPlay className="absolute top-2 right-2 text-yellow-600 opacity-20" size={40} />
                <GiCardRandom className="absolute bottom-2 left-2 text-yellow-600 opacity-20" size={40} />
                <GiCardPlay className="absolute bottom-2 right-2 text-yellow-600 opacity-20 transform rotate-180" size={40} />
                <div className="grid grid-cols-3 grid-rows-2 gap-4 h-full">
                    <div className="flex items-center justify-center">
                        <CardAreaLogic zoneId={playerZones[0]} isBlocked={true || cardsInZone(playerZones[0]).length > 3} cards={cardsInZone(playerZones[0])} />
                    </div>
                    <div className="flex items-center justify-center">
                        <CardAreaLogic zoneId={playerZones[1]} isBlocked={true || cardsInZone(playerZones[1]).length > 3} cards={cardsInZone(playerZones[1])} />
                    </div>
                    <div className="flex items-center justify-center">
                        <CardAreaLogic zoneId={playerZones[2]} isBlocked={true || cardsInZone(playerZones[2]).length > 3} cards={cardsInZone(playerZones[2])} />
                    </div>
                    <div className="flex items-center justify-center">
                        <CardAreaLogic zoneId={playerZones[3]} isBlocked={false || cardsInZone(playerZones[3]).length > 3} cards={cardsInZone(playerZones[3])} />
                    </div>
                    <div className="flex items-center justify-center">
                        <CardAreaLogic zoneId={playerZones[4]} isBlocked={false || cardsInZone(playerZones[4]).length > 3} cards={cardsInZone(playerZones[4])} />
                    </div>
                    <div className="flex items-center justify-center">
                        <CardAreaLogic zoneId={playerZones[5]} isBlocked={false || cardsInZone(playerZones[5]).length > 3} cards={cardsInZone(playerZones[5])} />
                    </div>
                </div>
            </div>
            {gameIsFinished && (
                <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                    <div className="bg-gradient-to-b from-yellow-200 to-yellow-100 p-8 rounded-lg max-w-4xl w-full text-center border-4 border-yellow-600 shadow-2xl">
                        <GiCrown className="mx-auto text-yellow-600 mb-4" size={60} />
                        <h2 className="text-4xl font-bold mb-4 text-yellow-800">Partie terminée</h2>
                        <p className="text-2xl font-semibold text-yellow-700">Gagnant : {winner}</p>
                    </div>
                </div>
            )}
        </div>
    )
}
