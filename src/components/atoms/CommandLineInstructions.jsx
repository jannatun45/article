import React from 'react'
import PropTypes from 'prop-types'

const CommandLineInstructions = ({code, className}) => {
  return (
      <pre className={`bg-gray-100 py-2 px-4 mb-1 ${className}`}>
        <code>{code}</code>
      </pre>
  )
}
CommandLineInstructions.prototype = {
  code: PropTypes.string.isRequired,
}

export default CommandLineInstructions
