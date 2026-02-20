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
            <header className='fixed z-3000 flex items-center w-full bg-black/40 px-5 justify-between'>
                <img src={Logo} className='h-15' />
                <button
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

            <div
                ref={overlayRef}
                className={`fixed inset-0 z-2000 bg-black/95 transition duration-300 
                ${navMenuAberto ? "opacity-100 pointer-events-auto fixed" : "hidden pointer-events-none"}`}>
                <div className={`flex justify-center h-screen items-center transform transition-transform duration-300
                                ${navMenuAberto ? 'translate-y-0' : 'translate-y-4'

                    }`}>
                    <ul className='text-white text-center space-y-5 text-xl'>
                        <li className='hover:cursor-pointer' id='#' onClick={toggleMenu}>Home</li>
                        <li className='hover:cursor-pointer' id='#' onClick={toggleMenu}>Services</li>
                        <li className='hover:cursor-pointer' id='#' onClick={toggleMenu}>Solutions</li>
                        <li className='hover:cursor-pointer' id='#' onClick={toggleMenu}>Portifolio</li>
                        <li className='hover:cursor-pointer' id='#' onClick={toggleMenu}>Pricing</li>
                        <li className='hover:cursor-pointer' id='#' onClick={toggleMenu}>About</li>
                        <li className='hover:cursor-pointer' id='#' onClick={toggleMenu}>Contact</li>
                        <button className='bg-white p-4 px-20 rounded-lg transition duration-300 hover:scale-105'>
                            <span className='text-black text-lg'>Get a Quote</span>
                        </button>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header
