import Image from 'next/image'
import React from 'react'
interface ProposalCardProps {
    title: string
    description: string
    source:string,
    className:string
}
const ProposalCard = ({title,description,source,className}:ProposalCardProps) => {
  return (
    <div className={`${className}`}>
        <div className="image">
            <Image alt='' className='w-[30rem] h-[10rem] '  height={200} width={200} src={source}/>
        </div>
        <div className="white bg-white rounded relative bottom-[5%] p-4">
            <h2 className='font-bold text-xl py-4'>{title}</h2>
            <p className='text-gray-400 py-4'>{description}</p>
        </div>
    </div>
  )
}

export default ProposalCard
