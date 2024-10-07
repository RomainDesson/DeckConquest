import { FaUserSecret } from "react-icons/fa";

interface PropsType {
    opponentName: string
}

export const OpponentBarUi = ({opponentName}: PropsType) => {
    return (
        <div className="w-full h-24 bg-gradient-to-r from-yellow-800 to-yellow-600 shadow-lg rounded-t-xl">
            <div className="w-full h-full flex flex-row justify-between items-center px-8">
                <div className="flex items-center space-x-4">
                    <div className="bg-yellow-200 rounded-full p-2">
                        <FaUserSecret className="text-yellow-800 text-2xl" />
                    </div>
                    <div>
                        <div className="text-xl text-yellow-100 font-bold flex items-center">
                            {opponentName}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}