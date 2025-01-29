import React from 'react'

const Highlight = ({children, className}) => {
  return (
    <span className={`bg-gray-400 px-2 py-1 rounded-md font-mono text-gray-800 ${className}`}>
      {children}
    </span>
  )
}

export default Highlight
