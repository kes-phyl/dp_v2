import React from 'react'
import { LiaCaretRightSolid } from "react-icons/lia";
import Image from 'next/image';
const About = () => {
  return (
    <section id='about' className='h-[100vh]'>    
        <div className='flex w-[100%] mb-10'>
            <div className='ml-10 sm:ml-[210px] xl:ml-[420px] text-3xl text-[#708090] flex mr-10'>
                <span className='text-[#00c1f5]'>01.</span>  About Me</div>
            <div className='h-4 w-[10%] border-b border-[#610000]'></div>
        </div>
   <div className="notification w-full xl:flex ml-10 md:w-[60%] sm:ml-[210px] xl:ml-[420px] h-[90vh] xl:h-[70vh] xl:h-[60vh] pt-10 pr-10">
   <div className="notibody w-full">
        <div className='xl:w-[70%] w-full'>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nihil, eveniet tempore voluptas atque voluptate, suscipit voluptates ab autem culpa, cumque labore tempora commodi vitae? Repellat ullam quo at perferendis!</p>
                     <br />
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nihil, eveniet tempore voluptas atque voluptate, suscipit voluptates ab autem culpa, cumque labore tempora commodi vitae? Repellat ullam quo at perferendis!</p>
                      <br />
             <p>Here are a few Technologies I have worked with</p>
        <div className='ml-[5%] mt-[5%] technology flex py-2 list-none text-xs'>
                <div className='first-stack mr-12'>
                <li><LiaCaretRightSolid className='inline text-base text-[#610000]'/> JavaScript  (ES6+)</li>
                <li><LiaCaretRightSolid className='inline text-base text-[#610000]'/> NodeJs</li>
                <li><LiaCaretRightSolid className='inline text-base text-[#610000]'/> TypeScript</li>
                </div>

                <div className='second-stack'>
                <li><LiaCaretRightSolid className='inline text-base text-[#610000]'/> React</li>
                <li><LiaCaretRightSolid className='inline text-base text-[#610000]'/> Python</li>
                </div>
         </div>
       
           
        </div>
   </div>
  
    <div className='mt-5'>
        <Image src='/kes.jpg' alt='my image' width={200} height={200} className='ml-10 float-right rounded-full'/>
    </div>
   {/* <div className="notiglow"></div>
   <div className="notiborderglow"></div> */}
   
 </div>
 </section>
  )
}

export default About