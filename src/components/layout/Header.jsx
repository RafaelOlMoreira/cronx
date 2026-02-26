import React, { useState, useEffect, useRef } from 'react'
import Logo from '/CRONX sBG.png'

import { HiMenu, HiOutlineX } from "react-icons/hi";

function Header() {

    const [navMenuAberto, setNavMenuAberto] = useState(false);
    const overlayRef = useRef(null);

    // bloqueia scroll
    useEffect(() => {
        document.body.style.overflow = navMenuAberto ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [navMenuAberto]);

    // fecha com ESC
    useEffect(() => {
        const onKey = (e) => {
            if (e.key === 'Escape') setNavMenuAberto(false);
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, []);

    const toggleMenu = () => setNavMenuAberto((s) => !s);

    return (
        <>
            <header className='fixed z-3000 flex items-center w-full bg-black/80 px-5 md:px-10 xl:px-20 justify-between'>
                <img src={Logo} className='h-15' />
                <div className='hidden lg:flex w-full'>
                    <ul className='flex w-full items-center gap-10 justify-center text-white text-md'>
                        <li><a className='hover:cursor-pointer' href='#Home'>Home</a></li>
                        <li><a className='hover:cursor-pointer' href='#'>Services</a></li>
                        <li><a className='hover:cursor-pointer' href='#'>Solutions</a></li>
                        <li><a className='hover:cursor-pointer' href='#'>Portifolio</a></li>
                        <li><a className='hover:cursor-pointer' href='#'>Pricing</a></li>
                        <li><a className='hover:cursor-pointer' href='#'>About</a></li>
                        <li><a className='hover:cursor-pointer' href='#'>Contact</a></li>
                    </ul>
                    <button className='mr-auto bg-white p-2 px-12 rounded-lg transition duration-300 hover:scale-105 hover:cursor-pointer'>
                        <span className='text-black text-md text-nowrap'>Get a Quote</span>
                    </button>
                </div>
                <button
                    className='block lg:hidden'
                    onClick={toggleMenu}
                    aria-expanded={navMenuAberto}
                >
                    {navMenuAberto ? (
                        <HiOutlineX className='w-10 h-10 text-white' />
                    ) : (
                        <HiMenu className='w-10 h-10 text-white' />
                    )}
                </button>
            </header>

            <div ref={overlayRef} className={`fixed inset-0 z-2000 bg-black/95 transition duration-300 ${navMenuAberto ? "opacity-100 pointer-events-auto fixed" : "hidden pointer-events-none"}`}>
                <div className="flex justify-center h-screen items-center transform transition-transform duration-300">
                    <ul className='text-white text-center space-y-5 text-xl'>
                        <li><a className='hover:cursor-pointer' href='#Home' onClick={toggleMenu}>Home</a></li>
                        <li><a className='hover:cursor-pointer' href='#' onClick={toggleMenu}>Services</a></li>
                        <li><a className='hover:cursor-pointer' href='#' onClick={toggleMenu}>Solutions</a></li>
                        <li><a className='hover:cursor-pointer' href='#' onClick={toggleMenu}>Portifolio</a></li>
                        <li><a className='hover:cursor-pointer' href='#' onClick={toggleMenu}>Pricing</a></li>
                        <li><a className='hover:cursor-pointer' href='#' onClick={toggleMenu}>About</a></li>
                        <li><a className='hover:cursor-pointer' href='#' onClick={toggleMenu}>Contact</a></li>
                        <button className='bg-white p-4 px-20 rounded-lg transition duration-300 hover:scale-105 hover:cursor-pointer'>
                            <span className='text-black text-lg'>Get a Quote</span>
                        </button>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header
