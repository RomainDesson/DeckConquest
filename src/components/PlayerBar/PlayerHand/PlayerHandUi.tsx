import { CardLogic } from "../../Card/CardLogic"
import { CardType } from "../../Card/types"
import { motion } from "framer-motion"

interface PropsType {
    cardsInHand: CardType[]
    playerPlayACard: (card: CardType, zoneId: string) => void
}

export const PlayerHandUi = ({ cardsInHand, playerPlayACard }: PropsType) => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex absolute bottom-24 left-1/2 transform -translate-x-1/2 gap-4"
        >
            {cardsInHand.map((card, index) => (
                <motion.div
                    key={card.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                >
                    <CardLogic card={card} playerPlayACard={playerPlayACard} />
                </motion.div>
            ))}
        </motion.div>
    )
}