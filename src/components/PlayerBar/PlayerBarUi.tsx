interface PropsType {
    playerName: string
    turnCount: number
    handleEndTurn: () => void
    playerHasEndedTurn: boolean
}

export const PlayerBarUi = ({playerName, turnCount, handleEndTurn, playerHasEndedTurn}: PropsType) => {
    return (
        <div className="w-full h-28 bg-gray-200">
            <div className="w-full h-full flex flex-row justify-between px-8">
                <div>
                    <div className="text-xl text-gray-800 font-bold">{playerName}</div>
                    <div className="text-sm">Turn {turnCount}</div>
                </div>
                <div>
                    {!playerHasEndedTurn && <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => handleEndTurn()}>End Turn</button>}
                </div>
            </div>
        </div>
    )
}