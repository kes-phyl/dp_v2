import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {VscGithubAlt} from 'react-icons/vsc';
import { TbExternalLink } from "react-icons/tb";

const ProjectCard = () => {
  return (
    <div className='flex ml-10 sm:ml-[220px] md:ml-[150px] xl:ml-[400px] w-[70%] text-[#708090]'>
        <div>
        <Image src='/hub.jpg' width={500} alt='Project image' className=' object-contain rounded' height={100}/>
        </div>

        <div className='absolute sm:static lg:static md:static xl:static sm:text-end xl:text-end md:text-end lg:text-end mt-12'>
            <h4 className='text-[#00c1f5] text-xs mb-2'>Featured Project</h4>
            <h2 className='mb-4 text-xl text-[#A9A9A9] font-semibold'>Car_Hub</h2>
            <div className='bg-[#041E42] rounded'>
                <p className='w-[400px] py-4 px-2 text-sm'>Explore the Carhub project, a sleek solution offering comprehensive car information filtered by year. Delve into specific car details effortlessly with our intuitive interface.</p>
            </div>
            <div className='mt-4 mb-6 text-xs'>
                <span>Typescript</span>  <span>Next</span>  <span>Firebase</span>
            </div>
            <div className='flex justify-end'>
            <Link target='_blank' href='https://github.com/kes-phyl/car_showcase'>
                 <VscGithubAlt size={30} className="cursor-pointer hover:text-[#00c1f5] ease-in-out duration-300"/>
             </Link>
             <Link target='_blank' className='ml-2' href='https://github.com/kes-phyl/car_showcase'>
                 <TbExternalLink size={30} className="cursor-pointer hover:text-[#00c1f5] ease-in-out duration-300"/>
             </Link>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard