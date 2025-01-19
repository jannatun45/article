import React from 'react'

const FileTree = ({fileStructure}) => {
  return (
    <pre className="bg-gray-100 p-4 mb-4 flex flex-col">
      {
        fileStructure.map((item, index) => (
          <code key={index}>{item}</code>
        ))
      }
    </pre>
  )
}

export default FileTree;
