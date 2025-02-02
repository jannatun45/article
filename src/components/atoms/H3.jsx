import React from 'react'

const H3 = ({children, className}) => {
  return (
    <div className={`text-xl font-semibold mb-4 ${className}`}>
      {children}
    </div>
  )
}

export default H3;