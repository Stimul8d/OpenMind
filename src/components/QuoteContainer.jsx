import { useState, useEffect, useRef } from 'react'
import { AnimatePresence } from 'framer-motion'
import Quote from './Quote'
import quotes from '../data/quotes'
import QuoteManager from '../utils/quoteManager'

const QuoteContainer = () => {
  const [currentQuote, setCurrentQuote] = useState(null)
  const quoteManager = useRef(new QuoteManager(quotes))

  useEffect(() => {
    setCurrentQuote(quoteManager.current.getNext())
    const interval = setInterval(() => {
      setCurrentQuote(quoteManager.current.getNext())
    }, 12000)

    return () => clearInterval(interval)
  }, [])

  if (!currentQuote) return null

  return (
    <AnimatePresence mode="wait">
      <Quote 
        key={currentQuote.text} 
        {...currentQuote} 
        duration={1.5}
      />
    </AnimatePresence>
  )
}

export default QuoteContainer