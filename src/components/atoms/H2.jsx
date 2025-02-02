import React from 'react'

const H2 = ({children, className}) => {
  return (
    <div className={`text-2xl font-semibold mb-4 decoration-red-400 ${className}`}>
      {children}
    </div>
  )
}

export default H2;