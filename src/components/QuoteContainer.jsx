import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Quote from './Quote'
import quotes from '../data/quotes'

const QuoteContainer = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % quotes.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <AnimatePresence mode="wait">
        <Quote key={currentIndex} {...quotes[currentIndex]} />
      </AnimatePresence>
    </div>
  )
}

export default QuoteContainer