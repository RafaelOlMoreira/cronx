import React from 'react'

import Logo from '/CRONX sBG.png'

import { IoLogoInstagram } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io5";

function Footer() {
    return (
        <>
            <footer className='min-h-min bg-black pt-20 pb-10 px-7 space-y-5'>
                <img src={Logo} className='h-15 w-15' />
                <p className='text-[#b7bac0] text-lg'>Enterprise software solutions.</p>

                <div className='flex py-5 space-x-5'>
                    <IoLogoInstagram className='size-12 p-2 text-white border border-[#b7bac0]/95 hover:border-white rounded-full transition-all duration-300' />
                    <IoLogoWhatsapp className='size-12 p-2 text-white border border-[#b7bac0]/95 hover:border-white rounded-full transition-all duration-300' />
                </div>

                <div className='space-y-10 pb-10'>
                    <ul className='text-[#b7bac0] text-lg space-y-3'>
                        <h6 className='text-white text-xl font-semibold'>Quick Links</h6>
                        <li className='hover:cursor-pointer hover:text-white transition-all duration-300'>Services</li>
                        <li className='hover:cursor-pointer hover:text-white transition-all duration-300'>Solutions</li>
                        <li className='hover:cursor-pointer hover:text-white transition-all duration-300'>Portfolio</li>
                        <li className='hover:cursor-pointer hover:text-white transition-all duration-300'>Pricing</li>
                        <li className='hover:cursor-pointer hover:text-white transition-all duration-300'>About</li>
                        <li className='hover:cursor-pointer hover:text-white transition-all duration-300'>Contact</li>
                    </ul>

                    <ul className='text-[#b7bac0] text-lg space-y-3'>
                        <h6 className='text-white text-xl font-semibold'>Get in Touch</h6>
                        <li className='hover:cursor-pointer hover:text-white transition-all duration-300'>cronx.oficial@gmail.com</li>
                        <li className='hover:cursor-pointer hover:text-white transition-all duration-300'>+55 31 99247-9530</li>
                        <li className='hover:cursor-pointer hover:text-white transition-all duration-300'>Belo Horizonte, MG, Brazil</li>
                    </ul>
                </div>

                <hr className='flex text-[#b7bac0]/80' />

                <span className='flex justify-center pt-3 text-[#b7bac0] font-semibold text-md'>&copy; 2026 CRONX. All rights reserved.</span>
                <ul className='flex text-center text-[#b7bac0]'>
                    <li className='hover:text-white transition-all duration-300'>Privacy Policy</li>
                    <li className='hover:text-white transition-all duration-300'>Terms Of Service</li>
                    <li className='hover:text-white transition-all duration-300'>Powered By Readdy</li>
                </ul>
            </footer>
        </>
    )
}

export default Footer
