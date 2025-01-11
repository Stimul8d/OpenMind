import { useState, useEffect, useRef } from 'react'
import { AnimatePresence } from 'framer-motion'
import Quote from './Quote'
import quotes from '../data/quotes'
import QuoteManager from '../utils/quoteManager'

const colours = [
  'bg-gradient-to-br from-purple-600 to-blue-500',
  'bg-gradient-to-br from-rose-500 to-orange-400',
  'bg-gradient-to-br from-emerald-500 to-teal-400',
  'bg-gradient-to-br from-fuchsia-500 to-purple-600',
  'bg-gradient-to-br from-amber-500 to-pink-500'
]

const QuoteContainer = () => {
  const [currentQuote, setCurrentQuote] = useState(null)
  const [currentColour, setCurrentColour] = useState(0)
  const quoteManager = useRef(new QuoteManager(quotes))

  useEffect(() => {
    setCurrentQuote(quoteManager.current.getNext())
    const interval = setInterval(() => {
      setCurrentQuote(quoteManager.current.getNext())
      setCurrentColour(prev => (prev + 1) % colours.length)
    }, 12000)

    return () => clearInterval(interval)
  }, [])

  if (!currentQuote) return null

  return (
    <div className={`min-h-screen transition-colors duration-2000 ${colours[currentColour]}`}>
      <AnimatePresence mode="wait">
        <Quote 
          key={currentQuote.text} 
          {...currentQuote} 
          duration={1.5}
        />
      </AnimatePresence>
    </div>
  )
}

export default QuoteContainer