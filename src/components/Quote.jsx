import { motion } from 'framer-motion'

const Quote = ({ text, source, context, isTransitioning }) => {
  const quoteVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 2,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: {
        duration: 1.5
      }
    }
  }

  const attributionVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 0.8,
      transition: {
        duration: 1.5,
        delay: 1.2,
        ease: "easeIn"
      }
    },
    exit: { 
      opacity: 0,
      transition: {
        duration: 1
      }
    }
  }

  const containerVariants = {
    exit: {
      opacity: 0,
      transition: { duration: 1.5 }
    }
  }

  return (
    <motion.div 
      className="w-screen h-screen flex flex-col justify-center px-8"
      variants={containerVariants}
      animate={isTransitioning ? "exit" : "animate"}
    >
      <motion.blockquote 
        variants={quoteVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="max-w-4xl mx-auto text-center"
      >
        <p 
          className="text-white font-serif tracking-wide leading-tight"
          style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
        >
          {text}
        </p>
      </motion.blockquote>
      
      <motion.footer 
        variants={attributionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="fixed bottom-0 left-0 w-full text-center mb-8"
      >
        <p className="text-white text-lg">{source}{context && ` - ${context}`}</p>
      </motion.footer>
    </motion.div>
  )
}

export default Quote