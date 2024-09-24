interface PropsType {
    opponentName: string
}

export const OpponentBarUi = ({opponentName}: PropsType) => {
    return (
        <div className="w-full h-16 bg-gray-500">
            <div className="w-full h-full flex flex-row justify-between px-8">
                <div>{opponentName}</div>
                <div>mana</div>
            </div>
        </div>
    )
}