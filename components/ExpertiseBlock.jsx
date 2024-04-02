import React from 'react'

const ExpertiseBlock = ({title, description}) => {
  return (
    <div className="px-8 py-4">
      <h5 className="text-accent text-3xl">{title}</h5>
      <p className="text-accent text-2xl border-t-8 border-secondary">{description}</p>
    </div>
  )
}

export default ExpertiseBlock
