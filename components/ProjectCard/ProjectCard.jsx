import React, { useEffect } from 'react'
import Image from 'next/image'

const ProjectCard = ({ image, title, desc, children }) => {
  return (
    <div className='flex justify-center project-card'>
      <div className='flex flex-col border-2 border-mediumGrey rounded-lg w-[424px] h-fit bg-mediumGrey'>
        {image && (
          <div className="w-full h-[298px] relative">
            <Image
              src={image}
              alt={title || "Project Image"}
              width={500}
              height={500}
              className='w-full h-full rounded-t-lg object-cover bg-cover bg-center bg-no-repeat'
              priority
            />
          </div>
        )}
        <div className='flex flex-col justify-around items-start rounded-b-lg bg-mediumGrey space-y-4 p-8'>
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
