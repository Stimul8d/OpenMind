import { motion } from 'framer-motion'

const Quote = ({ text, source, context }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ 
        duration: 1.5,
        ease: "easeInOut"
      }}
      className="w-screen h-screen flex items-center justify-center px-8"
    >
      <div className="max-w-4xl mx-auto text-center">
        <blockquote className="mb-16">
          <p 
            className="text-white font-serif tracking-wide leading-tight"
            style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
          >
            "{text}"
          </p>
        </blockquote>
        
        <footer className="text-white/80">
          <p className="text-lg">{source}{context && ` - ${context}`}</p>
        </footer>
      </div>
    </motion.div>
  )
}

export default Quote