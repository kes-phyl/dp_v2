import React from 'react'
import { LiaCaretRightSolid } from "react-icons/lia";
import Image from 'next/image';
const About = () => {
  return (
    <section className='h-[100vh]'>    
        <div className='flex w-[100%] mb-10'>
            <div className='ml-[300px] text-3xl text-[#708090] flex mr-10'>
                <span className='text-[#00c1f5]'>01.</span>  About Me</div>
            <div className='h-4 w-[10%] border-b border-[#610000]'></div>
        </div>
   <div className="notification w-[70%] ml-[300px] h-[60vh] pt-10">
   <div className="notibody w-[50%]">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nihil, eveniet tempore voluptas atque voluptate, suscipit voluptates ab autem culpa, cumque labore tempora commodi vitae? Repellat ullam quo at perferendis!</p>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nihil, eveniet tempore voluptas atque voluptate, suscipit voluptates ab autem culpa, cumque labore tempora commodi vitae? Repellat ullam quo at perferendis!</p>
         <br />
        <p>Here are a few Technologies I have worked with</p>
        <div className='ml-[5%] mt-[5%] technology flex py-2 list-none text-xs'>
            <div className='first-stack mr-12'>
            <li><LiaCaretRightSolid className='inline text-base text-[#610000]'/> JavaScript</li>
            <li><LiaCaretRightSolid className='inline text-base text-[#610000]'/> NodeJs</li>
            <li><LiaCaretRightSolid className='inline text-base text-[#610000]'/> TypeScript</li>
            </div>

            <div className='second-stack'>
            <li><LiaCaretRightSolid className='inline text-base text-[#610000]'/> Python</li>
            <li><LiaCaretRightSolid className='inline text-base text-[#610000]'/> ReactNative</li>
            </div>
           
        </div>
   </div>
  
    <div className='justify-end mt-5 ml-20'>
        <Image src='/kes.jpg' alt='my image' width={200} height={200} className='rounded-full'/>
    </div>
 </div>
 </section>
  )
}

export default About