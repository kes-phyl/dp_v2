import { ThemeToggle } from "."
import Link from "next/link";
import Image from "next/image";
import {BsList, BsX} from 'react-icons/bs';


const styles = {
    navLinks: 'cursor-pointer ml-10 hover:text-[#00c1f5] text-xs',
    navNumb: 'text-[#00c1f5]',
    navMobileLinks: 'py-4 hover:text-[#00c1f5] text-[#ccd6f6] text-xs'
}

const Header = () => {
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
                <div className="sm:hidden cursor-pointer pl-24 ease-in-out duration-200">
                    <BsList className="h-8 w-8 text-[#00c1f5]"/>
                </div>
            </div>

            <div className="fixed top-0 left-0 w-[75%] sm:hidden h-screen bg-[#021a33] shadow-xl p-10 ease-in-out duration-500">
                    <div className="flex w-full items-center justify-end">
                        <div className="cursor-pointer">
                            <BsX className="h-8 w-8 text-[#00c1f5]"/>
                        </div>
                    </div>
                        {/* mobile menu links */}
                    <div className="flex-col text-center py-4">
                            <ul>
                                <li className={styles.navMobileLinks}>
                                <span className={styles.navNumb}>01.</span> <br/><Link href='/about'>About</Link>
                                </li>
                                <li className={styles.navMobileLinks}>
                                <span className={styles.navNumb}>02.</span> <br/><Link href='/experience'>Experience </Link>
                                </li>
                                <li className={styles.navMobileLinks}>
                                <span className={styles.navNumb}>03.</span> <br/><Link href='/projects'>Projects</Link>
                                </li>
                                <li className={styles.navMobileLinks}>
                                <span className={styles.navNumb}>04.</span> <br/><Link href='/contact'>Contact</Link>
                                </li>
                            </ul>
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