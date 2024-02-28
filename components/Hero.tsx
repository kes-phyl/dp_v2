import React from 'react'
import { AnimatedButton } from '.'
import Link from 'next/link'
const Hero = () => {
    const greetings = '{Hey there 👋🏿}'
  return (
    <div className='h-screen w-[100%] ml-20 mt-[10%] sm:ml-[200px] xl:ml-[400px]'>

        <p className='mb-8 text-2xl text-[#708090]'>{'{Hi'} <span className='waving'>🖐🏿</span>{'}'}, <span className='text-[#00c1f5]'>I'm</span></p>
        <h1 className='xl:text-7xl sm:text-5xl text-3xl text-[#708090] font-mono'>Dan Phylbert</h1>
        <div className='xl:w-[50%] w-[60%] mt-5 text-[#708090]'>
        <p>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at <Link target='_blank' className='text-[#00c1f5]' href='https://signapse.ai'>Signapse.</Link></p>
        </div>
        <AnimatedButton/>
    </div>
    
  )
}

export default Hero