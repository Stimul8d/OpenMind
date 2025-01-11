import { motion } from 'framer-motion'

const Quote = ({ text, source, category, duration = 1.5 }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ 
        duration: duration,
        ease: "easeInOut"
      }}
      className="max-w-3xl mx-auto text-center p-8 flex flex-col items-center justify-center min-h-screen"
    >
      <div className="space-y-8">
        <p className="text-4xl md:text-5xl font-serif text-white tracking-wide leading-relaxed">
          "{text}"
        </p>
        <div className="space-y-3">
          <p className="text-xl md:text-2xl text-white opacity-90">— {source}</p>
          <p className="text-lg text-white opacity-75">{category}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default Quote