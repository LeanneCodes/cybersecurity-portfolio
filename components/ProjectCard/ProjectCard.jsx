import React from 'react'
import Image from 'next/image'

const ProjectCard = ({ image, title, desc, children }) => {
  return (
    <div className="flex justify-center project-card">
      <div className="flex flex-col border-2 border-mediumGrey rounded-lg w-[90%] sm:w-[400px] md:w-[424px] min-h-[400px] md:min-h-[500px] lg:min-h-[700px] bg-mediumGrey">
        {image && (
          <div className="w-full h-[250px] sm:h-[280px] md:h-[298px] relative">
            <Image
              src={image}
              alt={title || "Project Image"}
              width={500}
              height={500}
              className="w-full h-full rounded-t-lg object-cover bg-cover bg-center bg-no-repeat"
              priority
            />
          </div>
        )}
        {/* Content section with equal height handling */}
        <div className="flex flex-col flex-grow justify-between rounded-b-lg bg-mediumGrey space-y-4 p-6 md:p-8">
          <h1 className="font-bold text-xl sm:text-2xl">{title}</h1>
          <div className="flex gap-2 flex-wrap">{children}</div>
          <p className="text-grey flex-grow">{desc}</p> 
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
