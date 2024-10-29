// "use client"
import React from 'react'
import AnimatedCounter from '../AnimatedCounter'
interface CounterProps{
    title:string,
    figure:number,
    headline:string,
    className?:string
}
const CounterCard = ({title,figure,headline,className}:CounterProps) => {
  return (
    <div className={`bg-orange-400  ${className}`}>
      <h1 className='text-lg py-4'>{title}</h1>
      <AnimatedCounter className='py-2' amount={figure}/>
      <p className='text-xl py-4'>{headline}</p>
    </div>
  )
}

export default CounterCard
