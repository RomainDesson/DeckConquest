interface PropsType {
    isOver: boolean
    drop: any
    droppedCards: string[]
}

export const CardAreaUi = ({ isOver, drop, droppedCards }: PropsType) => {
    return (
        <div
            ref={drop}
            style={{
                height: '200px',
                width: '150px',
                border: '1px dashed gray',
                position: 'relative',
                backgroundColor: isOver ? 'lightgreen' : 'white',
            }}
        >
            {droppedCards.map((card) => (
                <div key={card}>{card}</div>
            ))}
        </div>
    )
}