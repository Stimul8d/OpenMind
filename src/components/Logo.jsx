import React from 'react'

const Logo = ({ className = '' }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <svg viewBox="0 0 50 50" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M25 5 
           C15 5 5 15 5 25
           C5 35 15 45 25 45
           C35 45 45 35 45 25"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M45 25 
           C45 15 35 5 25 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="4 4"
        fill="none"
      />
    </svg>
    <span className="text-2xl tracking-wide">OpenMind</span>
  </div>
)

export default Logo