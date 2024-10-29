"use client"
import React from 'react'
import CountUp from 'react-countup'

const AnimatedCounter = ({amount,className}:{amount:number,className?:string}) => {
  return (
    <div className={`w-full ${className}`}>
        <CountUp className='text-4xl' end={amount}
        duration={1.5}
        decimal='2'/>
    </div>
  )
}

export default AnimatedCounter