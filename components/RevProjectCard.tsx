import Image from 'next/image'
import {VscGithubAlt} from 'react-icons/vsc';
import { TbExternalLink } from "react-icons/tb";
import Link from 'next/link';


const RevProjectCard = () => {
  return (
    <div className='flex mt-20 ml-10 sm:ml-[220px] md:ml-[150px] xl:ml-[400px] w-[70%] text-[#708090]'>
        <div className='text-start absolute sm:static lg:static md:static xl:static sm:text-start xl:text-start md:text-start lg:text-start mt-12'>
            <h4 className='text-[#00c1f5] text-xs mb-2'>Featured Project</h4>
            <h2 className='mb-4 text-xl text-[#A9A9A9] font-semibold'>Keeper</h2>
            <div className='bg-[#041E42] rounded'>
                <p className='w-[400px] py-4 px-2 text-sm'>A task board for seamless organization. Streamline your tasks and boost productivity with Keeper's intuitive interface. Stay on top of your projects with ease, managing tasks efficiently.</p>
            </div>
            <div className='mt-4 mb-6 text-xs'>
                <span>React</span>  <span>Express</span>  <span>Node</span>
            </div>
            <div className='flex justify-start'>
            <Link target='_blank' href='https://github.com/kes-phyl/car_showcase'>
                <VscGithubAlt size={30} className="cursor-pointer hover:text-[#00c1f5] ease-in-out duration-300"/>
            </Link>
            <Link target='_blank' className='ml-2' href='https://github.com/kes-phyl/car_showcase'>
                <TbExternalLink size={30} className="cursor-pointer hover:text-[#00c1f5] ease-in-out duration-300"/>
            </Link>
            </div>
         </div>
        <div>
        <Image src='/keeper.jpg' width={500} alt='Project image' className='object-contain rounded' height={100}/>
        </div>
</div>
  )
}

export default RevProjectCard