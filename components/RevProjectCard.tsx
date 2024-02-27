import Image from 'next/image'
import {VscGithubAlt} from 'react-icons/vsc';
import { TbExternalLink } from "react-icons/tb";
import Link from 'next/link';


const RevProjectCard = () => {
  return (
    <div className='flex mt-20 ml-[300px] w-[70%] text-[#708090]'>
        <div className='text-start mt-12'>
            <h4 className='text-[#00c1f5] text-xs mb-2'>Featured Project</h4>
            <h2 className='mb-4 text-xl text-[#A9A9A9] font-semibold'>Catalogue</h2>
            <div className='bg-[#041E42] rounded'>
                <p className='w-[400px] py-4 px-2'>A minimal, dark blue theme for VS code, Sublime Text, Atom, iTerm, and more. Available on Code sandbox and npm</p>
            </div>
            <div className='mt-4 mb-6 text-xs'>
                <span>VS Code</span>  <span>Sublime Text</span>  <span>Atom</span>
            </div>
            <div className='flex justify-start'>
            <Link href='github.com'>
                <VscGithubAlt size={30} className="cursor-pointer hover:text-[#00c1f5] ease-in-out duration-300"/>
            </Link>
            <Link className='ml-2' href='github.com'>
                <TbExternalLink size={30} className="cursor-pointer hover:text-[#00c1f5] ease-in-out duration-300"/>
            </Link>
            </div>
         </div>
    <Image src='/views.jpeg' width={500} alt='Project image' className=' object-contain ml-12 rounded' height={100}/>
</div>
  )
}

export default RevProjectCard