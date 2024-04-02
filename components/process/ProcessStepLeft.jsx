import React from 'react'
import Image from 'next/image'

const ProcessStepLeft = ({title, description, img}) => {
  return (
    <div className='bg-secondary p-8'>
        <div className='flex gap-20 w-[70%] mx-auto items-center'>
        <div>
      <h5 className='text-3xl'>{title}</h5>
      <p className='text-2xl'>{description}</p>
      </div>
      <Image src={img} width={500} height={300} alt={title}/>
    </div>
    </div> 
  )
}

export default ProcessStepLeft
