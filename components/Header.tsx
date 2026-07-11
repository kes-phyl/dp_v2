'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { BsList, BsX, BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs'
import { navLinks, socialLinks } from '@/utils/navLinks'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-inherit/80 backdrop-blur-sm">
      <nav className="section-container flex h-20 items-center justify-between">
        <Link href="/" onClick={closeMenu}>
          <Image
            src="/logo_name.png"
            alt="Dan Phylbert logo"
            width={50}
            height={50}
            className="cursor-pointer object-contain shadow-lg"
          />
        </Link>

        <ul className="hidden items-center gap-2 text-nav opacity-80 lg:flex">
          {navLinks.map(({ number, label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className="cursor-pointer px-3 py-2 text-xs transition-colors hover:text-accent"
              >
                <span className="text-accent">{number}.</span> {label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="cursor-pointer text-accent lg:hidden"
        >
          {menuOpen ? <BsX className="h-8 w-8" /> : <BsList className="h-8 w-8" />}
        </button>
      </nav>

      {menuOpen && (
        <button
          type="button"
          aria-label="Close menu overlay"
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={closeMenu}
        />
      )}

      <div
        className={`fixed right-0 top-0 z-50 flex h-screen w-[min(85vw,20rem)] flex-col bg-[#021a33] p-8 shadow-xl transition-transform duration-300 ease-in-out lg:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="mb-12 flex justify-end">
          <button type="button" aria-label="Close menu" onClick={closeMenu} className="text-accent">
            <BsX className="h-8 w-8" />
          </button>
        </div>

        <ul className="flex flex-col gap-2 text-center">
          {navLinks.map(({ number, label, href }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={closeMenu}
                className="block py-3 text-xs text-nav transition-colors hover:text-accent"
              >
                <span className="text-accent">{number}.</span>
                <br />
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex justify-around pt-10">
          <Link href={socialLinks[0].href} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <BsGithub size={28} className="text-accent transition-colors hover:text-white" />
          </Link>
          <Link href={socialLinks[1].href} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <BsLinkedin size={28} className="text-accent transition-colors hover:text-white" />
          </Link>
          <Link href={socialLinks[2].href} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <BsInstagram size={28} className="text-accent transition-colors hover:text-white" />
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
