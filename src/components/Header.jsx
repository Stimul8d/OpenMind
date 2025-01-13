import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const Header = ({ category }) => (
  <header className="fixed top-0 left-0 w-full p-6 z-10">
    <h1 className="text-white/90 text-lg tracking-wide flex items-center gap-2">
      OpenMind
      <AnimatePresence mode="wait">
        {category && (
          <motion.span
            key={category}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
            className="text-white/60"
          >
            - {category}
          </motion.span>
        )}
      </AnimatePresence>
    </h1>
  </header>
)

export default Header