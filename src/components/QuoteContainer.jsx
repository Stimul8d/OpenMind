import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Quote from './Quote'
import quotes from '../data/quotes'

const colours = [
  'bg-gradient-to-br from-purple-600 to-blue-500',
  'bg-gradient-to-br from-rose-500 to-orange-400',
  'bg-gradient-to-br from-emerald-500 to-teal-400',
  'bg-gradient-to-br from-fuchsia-500 to-purple-600',
  'bg-gradient-to-br from-amber-500 to-pink-500'
]

const QuoteContainer = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentColour, setCurrentColour] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % quotes.length)
      setCurrentColour(prev => (prev + 1) % colours.length)
    }, 12000) // 12 seconds per quote

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`min-h-screen transition-colors duration-2000 ${colours[currentColour]}`}>
      <AnimatePresence mode="wait">
        <Quote 
          key={currentIndex} 
          {...quotes[currentIndex]} 
          duration={1.5} // Longer fade transition
        />
      </AnimatePresence>
    </div>
  )
}

export default QuoteContainer