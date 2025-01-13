import { useState, useEffect, useRef } from 'react'
import { AnimatePresence } from 'framer-motion'
import Quote from './Quote'
import Header from './Header'
import quotes from '../data/quotes/index'
import QuoteManager from '../utils/quoteManager'

const gradients = [
  ['rgb(124, 58, 237)', 'rgb(59, 130, 246)'],     // violet -> blue
  ['rgb(244, 63, 94)', 'rgb(251, 146, 60)'],      // rose -> orange
  ['rgb(16, 185, 129)', 'rgb(45, 212, 191)'],     // emerald -> teal
  ['rgb(217, 70, 239)', 'rgb(147, 51, 234)'],     // fuchsia -> purple
  ['rgb(245, 158, 11)', 'rgb(236, 72, 153)'],     // amber -> pink
  ['rgb(20, 184, 166)', 'rgb(6, 182, 212)'],      // teal -> cyan
  ['rgb(139, 92, 246)', 'rgb(248, 113, 113)'],    // violet -> red
  ['rgb(52, 211, 153)', 'rgb(59, 130, 246)'],     // emerald -> blue
  ['rgb(234, 179, 8)', 'rgb(239, 68, 68)'],       // yellow -> red
  ['rgb(14, 165, 233)', 'rgb(79, 70, 229)'],      // sky -> indigo
  ['rgb(168, 85, 247)', 'rgb(236, 72, 153)'],     // purple -> pink
  ['rgb(34, 197, 94)', 'rgb(234, 179, 8)'],       // green -> yellow
  ['rgb(239, 68, 68)', 'rgb(168, 85, 247)'],      // red -> purple
  ['rgb(6, 182, 212)', 'rgb(59, 130, 246)'],      // cyan -> blue
  ['rgb(249, 115, 22)', 'rgb(234, 179, 8)'],      // orange -> yellow
  ['rgb(79, 70, 229)', 'rgb(236, 72, 153)'],      // indigo -> pink
  ['rgb(45, 212, 191)', 'rgb(34, 197, 94)'],      // teal -> green
  ['rgb(248, 113, 113)', 'rgb(251, 146, 60)'],    // red -> orange
  ['rgb(129, 140, 248)', 'rgb(217, 70, 239)'],    // indigo -> fuchsia
  ['rgb(34, 197, 94)', 'rgb(20, 184, 166)']       // green -> teal
]

const categoryMap = {
  'systems': 'System Thinking',
  'epistemology': 'Epistemology',
  'religion': 'Religion',
  'buddhism': 'Buddhism',
  'taoism': 'Taoism',
  'science': 'Science',
  'sport': 'Sport Psychology',
  'mental_models': 'Mental Models',
  'outsiders': 'Outsider Wisdom',
  'literature': 'Literature',
  'modern_pragmatists': 'Modern Pragmatism',
  'historical': 'Historical Wisdom',
  'indigenous': 'Indigenous Wisdom',
  'comedy': 'Comedy',
  'makers': 'Makers',
  'medical': 'Medical',
  'business': 'Business',
  'artists': 'Art',
  'engineers': 'Engineering',
  'ancient': 'Ancient Wisdom',
  'film': 'Film & TV',
  'music': 'Music'
}

const getQuoteCategory = (quote) => {
  // Try to find the quote in one of our category arrays
  for (const [key, displayName] of Object.entries(categoryMap)) {
    if (quote.tags && quote.tags.includes(key)) return displayName
  }
  
  // Try to identify through the quote's properties
  if (quote.tags && quote.tags.length > 0) {
    const firstTag = quote.tags[0]
    if (categoryMap[firstTag]) return categoryMap[firstTag]
  }
  
  // If we can't determine the category, use a default
  return 'Wisdom'
}

const QuoteContainer = () => {
  const [currentQuote, setCurrentQuote] = useState(null)
  const [progress, setProgress] = useState(0)
  const quoteManager = useRef(new QuoteManager(quotes))
  const cycleLength = 20000
  const animationFrameRef = useRef()
  
  useEffect(() => {
    const nextQuote = quoteManager.current.getNext()
    setCurrentQuote({
      ...nextQuote,
      category: getQuoteCategory(nextQuote)
    })

    const startTime = Date.now()
    
    const animate = () => {
      const elapsed = (Date.now() - startTime)
      const newProgress = (elapsed % (cycleLength * gradients.length)) / (cycleLength * gradients.length)
      setProgress(newProgress)
      animationFrameRef.current = requestAnimationFrame(animate)
    }
    
    const interval = setInterval(() => {
      const nextQuote = quoteManager.current.getNext()
      setCurrentQuote({
        ...nextQuote,
        category: getQuoteCategory(nextQuote)
      })
    }, cycleLength)
    
    animationFrameRef.current = requestAnimationFrame(animate)
    
    return () => {
      clearInterval(interval)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  if (!currentQuote) return null

  const gradientCount = gradients.length
  const gradientIndex = Math.floor(progress * gradientCount)
  const nextIndex = (gradientIndex + 1) % gradientCount
  
  const gradientProgress = (progress * gradientCount) % 1
  const [startColor1, endColor1] = gradients[gradientIndex]
  const [startColor2, endColor2] = gradients[nextIndex]
  
  const interpolateColor = (color1, color2, progress) => {
    const rgb1 = color1.match(/\d+/g).map(Number)
    const rgb2 = color2.match(/\d+/g).map(Number)
    const rgb = rgb1.map((c1, i) => {
      const c2 = rgb2[i]
      return Math.round(c1 + (c2 - c1) * progress)
    })
    return `rgb(${rgb.join(', ')})`
  }
  
  const currentStartColor = interpolateColor(startColor1, startColor2, gradientProgress)
  const currentEndColor = interpolateColor(endColor1, endColor2, gradientProgress)
  
  return (
    <div 
      className="min-h-screen"
      style={{
        backgroundImage: `linear-gradient(to bottom right, ${currentStartColor}, ${currentEndColor})`
      }}
    >
      <Header category={currentQuote.category} />
      <AnimatePresence mode="wait">
        <Quote 
          key={currentQuote.text} 
          {...currentQuote} 
        />
      </AnimatePresence>
    </div>
  )
}

export default QuoteContainer