interface PropsType {
    playerName: string
    turnCount: number
    handleEndTurn: () => void
    playerHasEndedTurn: boolean
}

export const PlayerBarUi = ({playerName, turnCount, handleEndTurn, playerHasEndedTurn}: PropsType) => {
    return (
        <div className="w-full h-16 bg-gray-500">
            <div className="w-full h-full flex flex-row justify-between px-8">
                <div>
                    <div>{playerName}</div>
                    <div>Turn {turnCount}</div>
                </div>
                <div>
                    {!playerHasEndedTurn && <button onClick={() => handleEndTurn()}>End Turn</button>}
                    <div>mana</div>
                </div>
            </div>
        </div>
    )
}