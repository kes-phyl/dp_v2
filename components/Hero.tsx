import React from 'react'
import { AnimatedButton } from '.'

const Hero = () => {
    const greetings = '{Hey there 👋🏿}'
  return (
    <div className='h-screen w-[100%] self-center mt-[10%] ml-[300px]'>

        <p className='mb-8 text-2xl text-[#708090]'>{'{Hi'} <span className='waving'>🖐🏿</span>{'}'}, <span className='text-[#00c1f5]'>I'm</span></p>
        <h1 className='text-7xl text-[#708090] font-mono'>Dan Phylbert</h1>
        <div className='w-[50%] mt-5 text-[#708090]'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum necessitatibus sequi tenetur tempora eveniet veniam inventore cumque delectus non, laudantium quia nulla rerum dicta, ea unde amet repudiandae, error consequatur!</p>
        </div>
        <AnimatedButton/>
    </div>
    
  )
}

export default Hero