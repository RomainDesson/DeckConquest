import { GameboardUi } from "./GameboardUi"
import { useEffect, useState } from 'react'
import { socket } from '../../utils/socket'
import { CardType } from '../Card/types'

export type CardTypeWithZoneId = CardType & {
    zoneId: string
}

interface PropsType {
    isPlayerOne: boolean
}

export const GameboardLogic = ({ isPlayerOne }: PropsType) => {
    const [droppedCards, setDroppedCards] = useState<CardTypeWithZoneId[]>([]);

    const playerZones = isPlayerOne 
        ? ["3", "4", "5", "0", "1", "2"] // Normal view for player 1
        : ["0", "1", "2", "3", "4", "5"]; // Mirror view for player 2

    useEffect(() => {
        socket.on('cardPlayed', (card, zoneId) => {
            setDroppedCards((prevCards) => {
                const updatedCards = [...prevCards, { ...card, zoneId }];
                return updatedCards;
            });
        });

        return () => {
            socket.off('cardPlayed');
        };
    }, []);

    useEffect(() => {
        socket.on('cardsRevealed', (revealedCards) => {
            console.log(revealedCards)
            const updatedCards = Object.keys(revealedCards).flatMap(zoneId => 
                revealedCards[zoneId].map((card: CardType) => ({ ...card, zoneId }))
            );
            setDroppedCards(updatedCards);
        });

        return () => {
            socket.off('cardsRevealed');
        };
    }, []);

    const cardsInZone = (zoneId: string) => 
        droppedCards.filter(card => card.zoneId === zoneId);

    return <GameboardUi playerZones={playerZones} cardsInZone={cardsInZone} />
}
