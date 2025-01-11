import { motion } from 'framer-motion'

const Quote = ({ text, source, category }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ 
        duration: 1.5,
        ease: "easeInOut"
      }}
      className="w-screen h-screen flex items-center justify-center px-[3vw]"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
        <p 
          className="mx-auto text-[4vw] font-serif text-white tracking-wide leading-tight max-w-[25ch]"
          style={{ fontSize: 'clamp(1.5rem, 4vw, 3.5rem)' }}
        >
          "{text}"
        </p>
        <div className="mt-[3vh] space-y-[1vh]">
          <p 
            className="text-[2vw] text-white opacity-90"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.8rem)' }}
          >
            — {source}
          </p>
          <p 
            className="text-[1.5vw] text-white opacity-75"
            style={{ fontSize: 'clamp(0.8rem, 1.5vw, 1.2rem)' }}
          >
            {category}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default Quote