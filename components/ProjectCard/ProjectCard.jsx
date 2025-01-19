import React from 'react'
import Image from 'next/image'

const ProjectCard = ({ image, title, desc, children }) => {
  return (
    <div className='flex justify-center'>
      <div className='flex flex-col border-2 rounded-lg w-[424px] h-[505px]'>
        {image && (
          <div className="w-full h-[298px] relative">
            <Image
              src={image}
              alt={title || "Project Image"}
              width={500}
              height={500}
              className='w-full h-full object-cover bg-cover bg-center bg-no-repeat'
              priority
            />
          </div>
        )}
        <div className='flex flex-col justify-around items-start bg-mediumGrey space-y-4 p-4'>
            <h1 className='font-bold text-2xl'>{title}</h1>
            <div className='flex gap-2 flex-wrap'>
              {children}
            </div>
            <p className='text-grey'>{desc}</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
