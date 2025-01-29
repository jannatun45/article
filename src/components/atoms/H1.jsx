import React from 'react'

const H1 = ({children, className}) => {
  return (
    <div className={`text-3xl font-semibold mb-6 text-center ${className}`}>
      {children}
    </div>
  )
}

export default H1
