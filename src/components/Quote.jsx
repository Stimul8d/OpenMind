import { motion } from 'framer-motion'

const Quote = ({ text, source, category }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-2xl mx-auto text-center text-white p-8"
    >
      <p className="text-3xl md:text-4xl mb-6 font-serif">"{text}"</p>
      <p className="text-xl md:text-2xl mb-2">— {source}</p>
      <p className="text-lg opacity-75">{category}</p>
    </motion.div>
  )
}

export default Quote