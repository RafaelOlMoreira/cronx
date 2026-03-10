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
            <header className='fixed z-3000 flex items-center w-full bg-black/90 px-5 md:px-10 xl:px-20 justify-between'>
                <a href="#Inicio">
                    <img src={Logo} className='h-15' />
                </a>
                <div className='hidden lg:flex w-full'>
                    <ul className='flex w-full items-center gap-10 justify-center text-white text-md'>
                        <li><a className='hover:cursor-pointer' href='#Inicio'>Início</a></li>
                        <li><a className='hover:cursor-pointer' href='#Servicos'>Serviços</a></li>
                        <li><a className='hover:cursor-pointer' href='#Solucoes'>Soluções</a></li>
                        <li><a className='hover:cursor-pointer' href='#Portifolio'>Portifólio</a></li>
                        <li><a className='hover:cursor-pointer' href='#Precos'>Preços</a></li>
                        <li><a className='hover:cursor-pointer' href='#Contato'>Contato</a></li>
                        <li><a className='hover:cursor-pointer' href='#Sobre'>Sobre</a></li>
                    </ul>
                    <a href="#Contato" className='mr-auto bg-white p-2 px-8 rounded-lg transition duration-300 hover:scale-105 hover:cursor-pointer'>
                        <span className='text-black text-md text-nowrap'>Solicitar Orçamento</span>
                    </a>
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
                    <ul className='text-white text-center space-y-7 text-xl'>
                        <li><a className='hover:cursor-pointer' href='#Inicio' onClick={toggleMenu}>Inicio</a></li>
                        <li><a className='hover:cursor-pointer' href='#Servicos' onClick={toggleMenu}>Serviços</a></li>
                        <li><a className='hover:cursor-pointer' href='#Solucoes' onClick={toggleMenu}>Soluções</a></li>
                        <li><a className='hover:cursor-pointer' href='#Portifolio' onClick={toggleMenu}>Portifólio</a></li>
                        <li><a className='hover:cursor-pointer' href='#Precos' onClick={toggleMenu}>Preços</a></li>
                        <li><a className='hover:cursor-pointer' href='#Contato' onClick={toggleMenu}>Contato</a></li>
                        <li><a className='hover:cursor-pointer' href='#Sobre' onClick={toggleMenu}>Sobre</a></li>
                        <li>
                            <a href="#Contato" onClick={toggleMenu} className='text-center bg-white p-4 px-20 rounded-lg transition duration-300 hover:scale-105 hover:cursor-pointer'>
                                <span className='text-black text-lg'>Solicitar Orçamento</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header
