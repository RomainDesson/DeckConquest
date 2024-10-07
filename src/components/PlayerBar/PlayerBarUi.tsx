import { GiCrown, GiSandsOfTime } from "react-icons/gi";
import { FaUser } from "react-icons/fa";

interface PropsType {
    playerName: string
    turnCount: number
    handleEndTurn: () => void
    playerHasEndedTurn: boolean
}

export const PlayerBarUi = ({playerName, turnCount, handleEndTurn, playerHasEndedTurn}: PropsType) => {
    return (
        <div className="w-full h-24 bg-gradient-to-r from-yellow-600 to-yellow-800 shadow-lg rounded-b-xl">
            <div className="w-full h-full flex flex-row justify-between items-center px-8">
                <div className="flex items-center space-x-4">
                    <div className="bg-yellow-200 rounded-full p-2">
                        <FaUser className="text-yellow-800 text-2xl" />
                    </div>
                    <div>
                        <div className="text-xl text-yellow-100 font-bold flex items-center">
                            {playerName}
                            {playerHasEndedTurn && <GiCrown className="ml-2 text-yellow-300" />}
                        </div>
                        <div className="text-sm text-yellow-200 flex items-center">
                            <GiSandsOfTime className="mr-1" />
                            Tour {turnCount}
                        </div>
                    </div>
                </div>
                <div className="flex items-center space-x-6">
                    {!playerHasEndedTurn && (
                        <button 
                            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-md"
                            onClick={() => handleEndTurn()}
                        >
                            Fin du tour
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}