import React from 'react'

import { RiCodeView, RiStore2Line, RiArchiveDrawerLine } from "react-icons/ri";
import { GrTemplate } from "react-icons/gr";

function Services() {
    return (
        <>
            <section className='bg-[#0f172a] px-5 pt-20 pb-10'>

                <div className='text-center space-y-5'>
                    <p className='uppercase text-[#b7bac0] text-lg'>What We Do</p>
                    <h1 className='text-4xl lg:text-5xl text-white font-bold'>Services Built for Scale</h1>
                    <p className='text-[#b7bac0] text-lg px-10'>End-to-end software solutions tailored to your business goals.</p>
                </div>

                <article className='px-5 lg:px-32 pt-20 space-y-10 lg:flex lg:gap-x-10 lg:space-y-0'>

                    {data.map((d) => (
                        <div className='group text-white bg-[#1b2335]/90 border border-[#a1a1a1]/30 rounded-xl p-10 transform duration-300 hover:shadow-2xl hover:-translate-y-1 hover:cursor-pointer'>
                            <div>
                                {d.icon}
                            </div>
                            <h1 className='text-2xl py-4 font-semibold'>{d.title}</h1>
                            <p className='text-[#b7bac0] text-md'>{d.description}</p>
                        </div>
                    ))}

                </article>
            </section>
        </>
    )
}

const data = [
    {
        icon: <RiCodeView className='h-15 w-15 transform duration-300 group-hover:rotate-12' />,
        title: `Custom Software`,
        description: `Bespoke applications designed to solve your unique challenges and scale with your business growth.`,
    },
    {
        icon: <GrTemplate className='w-12 h-12 transform duration-300 group-hover:rotate-12' />,
        title: `Landing Pages`,
        description: `High-converting landing pages that capture attention and drive measurable business results.`,
    },
    {
        icon: <RiStore2Line className='h-15 w-15 transform duration-300 group-hover:rotate-12' />,
        title: `E-commerce Platforms`,
        description: `Complete online stores with seamless checkout experiences and powerful inventory management.`,
    }
]

export default Services
