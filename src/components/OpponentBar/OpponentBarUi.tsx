import { FaUserSecret } from "react-icons/fa";
import { motion } from "framer-motion";

interface PropsType {
    opponentName: string
}

export const OpponentBarUi = ({opponentName}: PropsType) => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full bg-white/5 backdrop-blur-lg border-b border-white/10 relative"
        >
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-transparent to-amber-500/5" />
            <div className="relative z-10 w-full h-20 flex flex-row justify-between items-center px-8">
                <div className="flex items-center space-x-4">
                    <motion.div 
                        whileHover={{ scale: 1.05, rotate: 5 }}
                        className="bg-gradient-to-br from-amber-400/20 to-amber-600/20 p-3 rounded-xl border border-amber-500/20"
                    >
                        <FaUserSecret className="text-amber-500 text-2xl" />
                    </motion.div>
                    <div>
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-400"
                        >
                            {opponentName}
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}