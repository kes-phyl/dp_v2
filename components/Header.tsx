'use client'
import { ThemeToggle } from "."
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {BsList, BsX, BsInstagram, BsLinkedin , BsGithub} from 'react-icons/bs';


const styles = {
    navLinks: 'cursor-pointer ml-10 hover:text-[#00c1f5] text-xs',
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
                <Link href='/'>
                <Image
                    src='/logo_name.png'
                    alt="logo with name"
                    width={118}
                    height={180}
                    className="object-contain cursor-pointer shadow-lg"
                    />
                </Link>

                <div className="text-[#ccd6f6] opacity-50 hidden sm:flex">
                    <ul className="hidden sm:flex">
                        <li className={styles.navLinks}>
                            <span className={styles.navNumb}>01.</span> <Link href='/about'>About</Link>
                        </li>
                        <li className={styles.navLinks}>
                            <span className={styles.navNumb}>02.</span> <Link href='/experience'>Experience</Link>
                        </li>
                        <li className={styles.navLinks}>
                            <span className={styles.navNumb}>03.</span> <Link href='/work'>Work</Link>
                        </li>
                        <li className={styles.navLinks}>
                            <span className={styles.navNumb}>04.</span> <Link href='/contact'>Contact</Link>
                        </li>
                    </ul>
                </div>
                {/* mobile design */}
                <div onClick={toggleMenu} className="sm:hidden cursor-pointer pl-24 ease-in-out duration-500">
                    <BsList className="h-8 w-8 text-[#00c1f5]"/>
                </div>
            </div>

            <div className={menuOpen? "fixed top-0 left-0 w-[75%] sm:hidden h-screen bg-[#021a33] shadow-xl p-10 ease-in-out duration-500": "fixed left-[100%] top-0 p-10 ease-in-out duration-500"}>
                    <div className="flex w-full items-center justify-end mb-20">
                        <div onClick={toggleMenu} className="cursor-pointer">
                            <BsX className="h-8 w-8 text-[#00c1f5]"/>
                        </div>
                    </div>
                        {/* mobile menu links */}
                    <div className="flex-col text-center py-4 mb-10">
                            <ul>
                                <li className={styles.navMobileLinks} onClick={()=> setMenuOpen(false)}>
                                <span className={styles.navNumb}>01.</span> <br/><Link href='/about'>About</Link>
                                </li>
                                <li className={styles.navMobileLinks} onClick={()=> setMenuOpen(false)}>
                                <span className={styles.navNumb}>02.</span> <br/><Link href='/experience'>Experience </Link>
                                </li>
                                <li className={styles.navMobileLinks} onClick={()=> setMenuOpen(false)}>
                                <span className={styles.navNumb}>03.</span> <br/><Link href='/projects'>Projects</Link>
                                </li>
                                <li className={styles.navMobileLinks} onClick={()=> setMenuOpen(false)}>
                                <span className={styles.navNumb}>04.</span> <br/><Link href='/contact'>Contact</Link>
                                </li>
                            </ul>
                     </div>

                     {/* social links */}
                     <div className="flex flex-row justify-around">
                        <Link href='github.com'>
                            <BsGithub size={30} className="cursor-pointer hover:text-[#00c1f5] ease-in-out duration-300"/>
                        </Link>
                        <Link href='linkedin.com'>
                            <BsLinkedin size={30} className="cursor-pointer hover:text-[#00c1f5] ease-in-out duration-300"/>
                        </Link>
                        <Link href='instagram.com'>
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