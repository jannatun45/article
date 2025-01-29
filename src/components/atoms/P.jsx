import React from 'react'

const P = ({children, className}) => {
  return (
    <div className={`mb-4 ${className}`}>
      {children}
    </div>
  )
}

export default P
