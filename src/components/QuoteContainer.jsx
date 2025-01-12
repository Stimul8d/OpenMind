import { useState, useEffect, useRef } from 'react'
import { AnimatePresence } from 'framer-motion'
import Quote from './Quote'
import quotes from '../data/quotes/index'
import QuoteManager from '../utils/quoteManager'

const gradients = [
  ['rgb(124, 58, 237)', 'rgb(59, 130, 246)'],    // violet -> blue
  ['rgb(244, 63, 94)', 'rgb(251, 146, 60)'],     // rose -> orange
  ['rgb(16, 185, 129)', 'rgb(45, 212, 191)'],    // emerald -> teal
  ['rgb(217, 70, 239)', 'rgb(147, 51, 234)'],    // fuchsia -> purple
  ['rgb(245, 158, 11)', 'rgb(236, 72, 153)']     // amber -> pink
]

const QuoteContainer = () => {
  const [currentQuote, setCurrentQuote] = useState(null)
  const [progress, setProgress] = useState(0)
  const quoteManager = useRef(new QuoteManager(quotes))
  const cycleLength = 20000
  const animationFrameRef = useRef()
  
  useEffect(() => {
    setCurrentQuote(quoteManager.current.getNext())
    const startTime = Date.now()
    
    const animate = () => {
      const elapsed = (Date.now() - startTime)
      const newProgress = (elapsed % (cycleLength * gradients.length)) / (cycleLength * gradients.length)
      setProgress(newProgress)
      animationFrameRef.current = requestAnimationFrame(animate)
    }
    
    const interval = setInterval(() => {
      setCurrentQuote(quoteManager.current.getNext())
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