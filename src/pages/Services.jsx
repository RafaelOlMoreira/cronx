import React from 'react'

import { RiCodeView, RiStore2Line, RiArchiveDrawerLine } from "react-icons/ri";
import { GrTemplate } from "react-icons/gr";

function Services() {
    return (
        <>
            <section className='bg-[#0f172a] px-5 py-50'>
                
                <div className='text-center space-y-5'>
                    <p className='uppercase text-[#b7bac0] text-lg'>What We Do</p>
                    <h1 className='text-4xl text-white font-bold'>Services Built for Scale</h1>
                    <p className='text-[#b7bac0] text-lg px-10'>End-to-end software solutions tailored to your business goals.</p>
                </div>

                <article className='px-5 pt-20 space-y-10'>

                    <div className='group bg-[#1b2335]/90 border border-[#a1a1a1]/30 rounded-xl p-10 transform duration-300 hover:shadow-2xl hover:-translate-y-1'>
                        <RiCodeView className='text-white w-15 h-15 transform duration-300 group-hover:rotate-12' />
                        <h1 className='text-white text-2xl py-4 font-semibold'>Custom Software</h1>
                        <p className='text-[#b7bac0] text-md'>Bespoke applications designed to solve your unique challenges and scale with your business growth.</p>
                    </div>

                    <div className='group bg-[#1b2335]/90 border border-[#a1a1a1]/30 rounded-xl p-10 transform duration-300 hover:shadow-2xl hover:-translate-y-1'>
                        <GrTemplate className='text-white w-12 h-15 transform duration-300 group-hover:rotate-12' />
                        <h1 className='text-white text-2xl py-4 font-semibold'>Landing Pages</h1>
                        <p className='text-[#b7bac0] text-md'>High-converting landing pages that capture attention and drive measurable business results.</p>
                    </div>

                    <div className='group bg-[#1b2335]/90 border border-[#a1a1a1]/30 rounded-xl p-10 transform duration-300 hover:shadow-2xl hover:-translate-y-1'>
                        <RiStore2Line className='text-white w-15 h-15 transform duration-300 group-hover:rotate-12' />
                        <h1 className='text-white text-2xl py-4 font-semibold'>E-commerce Platforms</h1>
                        <p className='text-[#b7bac0] text-md'>Complete online stores with seamless checkout experiences and powerful inventory management.</p>
                    </div>

                    <div className='group bg-[#1b2335]/90 border border-[#a1a1a1]/30 rounded-xl p-10 transform duration-300 hover:shadow-2xl hover:-translate-y-1'>
                        <RiArchiveDrawerLine className='text-white w-15 h-15 transform duration-300 group-hover:rotate-12' />
                        <h1 className='text-white text-2xl py-4 font-semibold'>Enterprise Systems</h1>
                        <p className='text-[#b7bac0] text-md'>Full-stack enterprise solutions including CRM, ERP, and custom business process automation.</p>
                    </div>

                </article>
            </section>
        </>
    )
}

export default Services
