import React from 'react'
import PropTypes from 'prop-types'

const CommandLineInstructions = ({code}) => {
  return (
      <pre className="bg-gray-100 p-4 mb-4">
        <code>{code}</code>
      </pre>
  )
}
CommandLineInstructions.prototype = {
  code: PropTypes.string.isRequired,
}

export default CommandLineInstructions
