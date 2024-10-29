import React from 'react'
interface WADICardProps{
    title: string;
    content:string,
    icon:React.ReactNode,
    className:string
}
const WADICard = ({title,content,icon,className}:WADICardProps) => {
  return (
    <div className={`flex gap-8 ${className}`}>
      <div className="image">
            {icon}
      </div>
      <div className="image">
            <h1 className='text-2xl text-red'>{title}</h1>
            <p className='text-xl py-4'>{content}</p>
      </div>
    </div>
  )
}

export default WADICard

