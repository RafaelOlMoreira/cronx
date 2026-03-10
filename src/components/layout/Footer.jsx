import React from 'react'

import Logo from '/CRONX sBG.png'

import { IoLogoInstagram } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io5";

function Footer() {
    return (
        <>
            <footer id='Sobre' className='scroll-mt-14 min-h-min bg-black pt-20 pb-10 px-7'>

                <div className='lg:grid lg:grid-cols-3 lg:pb-10 lg:px-10'>
                    <div className='space-y-5 lg:space-y-0 lg:col-span-1'>
                        <img src={Logo} className='h-15 w-15' />
                        <p className='text-[#b7bac0] text-lg'>Soluções de software empresarial.</p>

                        <div className='flex py-5 space-x-5'>
                            <a href="https://www.instagram.com/cronx.oficial">
                                <IoLogoInstagram className='size-12 p-2 text-white border border-[#b7bac0]/40 hover:cursor-pointer hover:border-white rounded-full transition-all duration-300' />
                            </a>
                            <a href="https://wa.me/5531992479530?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Gostaria%20de%20solicitar%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20desenvolvimento%20de%20um%20novo%20projeto.%20Poder%C3%ADamos%20conversar%20sobre%20os%20detalhes%3F">
                                <IoLogoWhatsapp className='size-12 p-2 text-white border border-[#b7bac0]/40 hover:cursor-pointer hover:border-white rounded-full transition-all duration-300' />
                            </a>
                        </div>
                    </div>

                    <div className='space-y-10 py-10 lg:space-y-0 lg:py-0'>
                        <ul className='text-[#b7bac0] text-lg space-y-3'>
                            <h6 className='text-white text-xl font-semibold'>Links Rápidos</h6>
                            <li className='w-min text-nowrap hover:cursor-pointer hover:text-white transition-all duration-300'><a href="#Services">Serviços</a></li>
                            <li className='w-min text-nowrap hover:cursor-pointer hover:text-white transition-all duration-300'><a href="#Solucoes">Soluções</a></li>
                            <li className='w-min text-nowrap hover:cursor-pointer hover:text-white transition-all duration-300'><a href="#Portifolio">Portifólio</a></li>
                            <li className='w-min text-nowrap hover:cursor-pointer hover:text-white transition-all duration-300'><a href="#Precos">Preços</a></li>
                            <li className='w-min text-nowrap hover:cursor-pointer hover:text-white transition-all duration-300'><a href="#Sobre">Sobre</a></li>
                            <li className='w-min text-nowrap hover:cursor-pointer hover:text-white transition-all duration-300'><a href="#Contato">Contato</a></li>
                        </ul>
                    </div>

                    <div className='space-y-10 pb-10 lg:space-y-0 lg:pb-0'>
                        <ul className='text-[#b7bac0] text-lg space-y-3'>
                            <h6 className='text-white text-xl font-semibold'>Entre em Contato</h6>
                            <li className='w-min text-nowrap hover:cursor-pointer hover:text-white transition-all duration-300'>cronx.oficial@gmail.com</li>
                            <li className='w-min text-nowrap hover:cursor-pointer hover:text-white transition-all duration-300'>+55 31 99247-9530</li>
                            <li>Belo Horizonte, MG, Brazil</li>
                        </ul>
                    </div>
                </div>

                <hr className='flex text-[#b7bac0]/20' />

                <div className='space-y-3 lg:flex lg:justify-between lg:pt-5 lg:px-20'>
                    <span className='flex justify-center pt-3 lg:pt-0 text-[#b7bac0] text-md'>&copy; 2026 CRONX. Todos os direitos reservados.</span>
                    <ul className='flex justify-center text-[#b7bac0] gap-3 lg:gap-10'>
                        <li className='hover:cursor-pointer hover:text-white transition-all duration-300'>Política de Privacidade</li>
                        <li className='hover:cursor-pointer hover:text-white transition-all duration-300'>Termos de Uso</li>
                        <li className='hover:cursor-pointer hover:text-white transition-all duration-300'>Termos de Contrato</li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default Footer
