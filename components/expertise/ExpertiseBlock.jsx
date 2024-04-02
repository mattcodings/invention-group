import React from 'react'

const ExpertiseBlock = ({title, description}) => {
  return (
    <div className="px-8 py-4">
      <h5 className="text-primary text-3xl pb-2">{title}</h5>
      <p className="text-primary text-2xl border-t-8 border-neutral pt-2">{description}</p>
    </div>
  )
}

export default ExpertiseBlock
