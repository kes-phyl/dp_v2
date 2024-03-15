import React from 'react'
import { LiaCaretRightSolid } from "react-icons/lia";
import Image from 'next/image';
import Link from 'next/link';

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
        <div className='xl:w-[70%] w-full text-sm'>
             <p>Hi there, my name is Dan and I enjoy creating impactful digital experiences.  I have always been fascinated by gadgets, but my interest in web development started back in 2015 when I got a ‘coding-dictionary’ that shows you how to make websites! Which in hindsight, was a textbook on HTML & CSS.</p>
                     <br />
             <p>Asides my passion for computers, I have even been more passionate about making easier the lives of persons around me. This passion led me to explore other areas like Nursing. Very quickly, I found out that I am much comfortable in the sweet spot where technology solves a user’s needs. </p>
                      <br />
             <p>Fast-forward to today, I’ve completed a Masters in Comp Science from Coventry Uni, and I’ve had the privilege of working for <Link target='_blank' className='text-[#00c1f5]' href='https://signapse.ai'>a start-up,</Link> and <Link target='_blank' className='text-[#00c1f5]' href='https://conigital.org'>a scale up</Link> organisation.</p>
                        <br/>
            <p>Here are a few technologies I am currently working with:</p>

        <div className='ml-[5%] mt-[5%] technology flex py-2 list-none text-xs'>
                <div className='first-stack mr-12'>
                <li><LiaCaretRightSolid className='inline text-base text-[#610000]'/> JavaScript  (ES6+)</li>
                <li><LiaCaretRightSolid className='inline text-base text-[#610000]'/> React</li>
                <li><LiaCaretRightSolid className='inline text-base text-[#610000]'/> Node.js</li>
                </div>

                <div className='second-stack'>
                <li><LiaCaretRightSolid className='inline text-base text-[#610000]'/> TypeScript</li>
                <li><LiaCaretRightSolid className='inline text-base text-[#610000]'/> Next</li>
                </div>
         </div>
       
           
        </div>
   </div>
  
    <div className='mt-5'>
        <Image src='/kes.jpg' alt='my image' width={200} height={200} className='ml-10 float-right rounded-full hidden xl:flex'/>
    </div>
   {/* <div className="notiglow"></div>
   <div className="notiborderglow"></div> */}
   
 </div>
 </section>
  )
}

export default About