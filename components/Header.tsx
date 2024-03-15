'use client'
import { ThemeToggle } from "."
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {BsList, BsX, BsInstagram, BsLinkedin , BsGithub} from 'react-icons/bs';

const styles = {
    navLinks: 'cursor-pointer ml-10 hover:text-[#00c1f5] text-xs py-2 px-2',
    navNumb: 'text-[#00c1f5] leading-loose',
    navMobileLinks: 'py-4 hover:text-[#00c1f5] text-[#ccd6f6] text-xs'
}

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);
  return (
    <header>
        <nav className="w-full shadow-xl h-24 items-center justify-between">
            {/* desktop styles */}
            <div className="flex justify-between items-center px-4 w-full h-full">
                <div>
                <Link href='/'>
                <Image
                    src='/logo_name.png'
                    alt="logo with name"
                    width={50}
                    height={50}
                    className="object-contain cursor-pointer shadow-lg ml-10"
/>
                </Link>

                </div>

                <div className="text-[#ccd6f6] opacity-50 hidden xl:flex">
                    <ul className="hidden xl:flex">
                          <Link href='#about'> <li className={styles.navLinks}>
                            <span className={styles.navNumb}>01.</span> About
                            </li></Link>
                            <Link href='#experience'><li className={styles.navLinks}>
                            <span className={styles.navNumb}>02.</span> Experience
                        </li></Link>
                        <Link href='#project'> <li className={styles.navLinks}>
                            <span className={styles.navNumb}>03.</span> Project
                        </li></Link>
                        <Link href='#contact'><li className={styles.navLinks}>
                            <span className={styles.navNumb}>04.</span> Contact
                        </li></Link>
                    </ul>
                </div>
                {/* mobile design */}
                <div onClick={toggleMenu} className="xl:hidden cursor-pointer pl-24 ease-in-out duration-500">
                    <BsList className="h-8 w-8 text-[#00c1f5]"/>
                </div>
            </div>

            <div className={menuOpen? "fixed top-0 right-0 w-[75%] xl:hidden h-screen bg-[#021a33] shadow-xl p-10 ease-linear z-40 duration-500": "fixed left-[100%] top-0 p-10 ease-in-out duration-500"}>
                    <div className="flex w-full items-center justify-end mb-20">
                        <div onClick={toggleMenu} className="cursor-pointer">
                            <BsX className="h-8 w-8 text-[#00c1f5]"/>
                        </div>
                    </div>
                        {/* mobile menu links */}
                    <div className="flex-col text-center py-4 mb-10">
                            <ul>
                                <li className={styles.navMobileLinks} onClick={()=> setMenuOpen(false)}>
                                <span className={styles.navNumb}>01.</span> <br/><Link href='#about'>About</Link>
                                </li>
                                <li className={styles.navMobileLinks} onClick={()=> setMenuOpen(false)}>
                                <span className={styles.navNumb}>02.</span> <br/><Link href='#experience'>Experience </Link>
                                </li>
                                <li className={styles.navMobileLinks} onClick={()=> setMenuOpen(false)}>
                                <span className={styles.navNumb}>03.</span> <br/><Link href='#project'>Projects</Link>
                                </li>
                                <li className={styles.navMobileLinks} onClick={()=> setMenuOpen(false)}>
                                <span className={styles.navNumb}>04.</span> <br/><Link href='#contact'>Contact</Link>
                                </li>
                            </ul>
                     </div>

                     {/* social links */}
                     <div className="flex flex-row justify-around">
                        <Link href='https://github.com/kes-phyl'>
                            <BsGithub size={30} className="cursor-pointer hover:text-[#00c1f5] ease-in-out duration-300"/>
                        </Link>
                        <Link href='https://www.linkedin.com/in/dan-phylbert-704947183/'>
                            <BsLinkedin size={30} className="cursor-pointer hover:text-[#00c1f5] ease-in-out duration-300"/>
                        </Link>
                        <Link href='https://www.instagram.com/phyl_dan?igsh=MXFldjBsYXJoZmNmOQ%3D%3D&utm_source=qr'>
                            <BsInstagram size={30} className="cursor-pointer hover:text-[#00c1f5] ease-in-out duration-300"/>
                        </Link>
                     </div>
                   
            </div>


        </nav>
        {/* <ThemeToggle/> */}
    </header>
    // <div>
        
    // <ThemeToggle/>
    // </div>
  )
}

export default Header