import React from 'react'
import Image from 'next/image'

const ProcessStepRight = ({title, description, img}) => {
    return (  
        <div className='p-8'>
            <div className='flex gap-20 w-[70%] mx-auto items-center'>
            <Image src={img} width={500} height={300} alt={title}/>
            <div>
          <h5 className='text-3xl'>{title}</h5>
          <p className='text-2xl'>{description}</p>
          </div>
        </div>
        </div>
      )
}

export default ProcessStepRight
