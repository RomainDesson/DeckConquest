import { CardType } from "../Card/types";

const createDeck = (color: string): CardType[] => {
    return Array.from({ length: 13 }, (_, index) => ({
        id: `${color}-${index + 1}`,
        name: `${color.charAt(0).toUpperCase() + color.slice(1)} Card ${index + 1}`,
        power: index + 1,
        image: `/cards/${color}_${index + 1}.png`,
    }));
};

export const clubsDeck: CardType[] = createDeck("Clubs");
export const diamondDeck: CardType[] = createDeck("Diamond");
export const heartsDeck: CardType[] = createDeck("Hearts");
export const spadesDeck: CardType[] = createDeck("Spades");