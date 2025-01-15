import React from 'react'

const Labels = ({ children, className }) => {
  return (
    <div className={`rounded-full border-none px-4 py-2 ${className}`}>
      {children}
    </div>
  )
}

export default Labels
