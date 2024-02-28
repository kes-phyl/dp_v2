import Link from "next/link"
import {VscGithubAlt} from 'react-icons/vsc';
import { CiInstagram } from "react-icons/ci";
import { FiLinkedin } from "react-icons/fi";

const Socials = () => {
  return (
    <div className="fixed bottom-0 left-[5%] flex flex-col gap-4 text-[#00c1f5]">
    <Link target='_blank' href='https://github.com/kes-phyl'>
        <VscGithubAlt size={30} className="cursor-pointer hover:scale-125 hover:text-[#00c1f5] ease-in-out duration-300"/>
    </Link>
    <Link target='_blank' href='https://www.linkedin.com/in/dan-phylbert-704947183/'>
        <FiLinkedin size={30} className="cursor-pointer hover:scale-125 hover:text-[#00c1f5] ease-in-out duration-300"/>
    </Link>
    <Link target='_blank' href='https://www.instagram.com/phyl_dan?igsh=MXFldjBsYXJoZmNmOQ%3D%3D&utm_source=qr'>
        <CiInstagram size={30} className="cursor-pointer hover:scale-125 hover:text-[#00c1f5] ease-in-out duration-300"/>
    </Link>
    <div className="h-[92px] border-l-2 ml-3 mt-2 border-[#610000]"></div>
</div>
  )
}

export default Socials