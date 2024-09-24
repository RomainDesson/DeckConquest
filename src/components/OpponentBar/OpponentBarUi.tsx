interface PropsType {
    opponentName: string
}

export const OpponentBarUi = ({opponentName}: PropsType) => {
    return (
        <div className="w-full h-28 bg-gray-200">
            <div className="w-full h-full flex flex-row justify-between px-8">
                <div className="text-xl text-gray-800 font-bold">{opponentName}</div>
            </div>
        </div>
    )
}