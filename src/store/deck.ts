import { create } from 'zustand'
import { CardType } from '../components/Card/types'
import { shuffleDeck } from '../utils/shuffleDeck'
import { drawCards } from '../utils/drawCards'

interface DeckState {
    deck: CardType[]
    cardsInHand: CardType[]
    initializeDeck: (initialDeck: CardType[]) => void
    drawCard: (numberOfCards: number) => void
    playCard: (card: CardType) => void
}

export const useDeckStore = create<DeckState>((set) => ({
    deck: [],
    cardsInHand: [],
    initializeDeck: (initialDeck: CardType[]) => set(() => ({
        deck: shuffleDeck(initialDeck),
        cardsInHand: []
    })),
    drawCard: (numberOfCards: number) => set((state) => {
        const { drawnCards, remainingCards } = drawCards(state.deck, numberOfCards)
        return {
            deck: remainingCards,
            cardsInHand: [...state.cardsInHand, ...drawnCards]
        }
    }),
    playCard: (card: CardType) => set((state) => ({
        cardsInHand: state.cardsInHand.filter((c) => c.id !== card.id)
    }))
}))
