import React from 'react'
import { AnimatedButton } from '.'

const Hero = () => {
    const greetings = '{Hey there 👋🏿}'
  return (
    <div className='h-screen w-[100%] ml-20 mt-[10%] sm:ml-[200px] xl:ml-[400px]'>

        <p className='mb-8 text-2xl text-[#708090]'>{'{Hi'} <span className='waving'>🖐🏿</span>{'}'}, <span className='text-[#00c1f5]'>I'm</span></p>
        <h1 className='xl:text-7xl sm:text-5xl text-3xl text-[#708090] font-mono'>Dan Phylbert</h1>
        <div className='xl:w-[50%] w-[60%] mt-5 text-[#708090]'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum necessitatibus sequi tenetur tempora eveniet veniam inventore cumque delectus non, laudantium quia nulla rerum dicta, ea unde amet repudiandae, error consequatur!</p>
        </div>
        <AnimatedButton/>
    </div>
    
  )
}

export default Hero