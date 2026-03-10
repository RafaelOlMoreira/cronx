import React from 'react'
import { HiCheck } from "react-icons/hi";

function Pricing() {
    return (
        <>
            <section id='Pricing' className='scroll-mt-14 min-h-min bg-[#0a101d] py-20 px-7'>
                <div className='space-y-1 mb-20 text-center'
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    <p className='text-[#b7bac0] text-md lg:text-sm uppercase font-semibold'>PRICING</p>
                    <p className='text-4xl lg:text-5xl text-white font-bold'>Flexible Engagement Models</p>
                    <p className='text-[#b7bac0] text-lg pt-5'>Every project is unique. Let's discuss your needs.</p>
                </div>

                <article className='px-5 lg:px-10 space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-10'>

                    {data.map((d) => (
                        <div className='group bg-[#1b2335]/90 border border-[#a1a1a1]/30 rounded-xl px-10 py-5 transform duration-1000 hover:shadow-2xl hover:-translate-y-1 space-y-5'
                            data-aos="fade-up"
                            data-aos-duration="1500"
                        >
                            <h1 className='text-white text-2xl pt-5 font-semibold'>{d.titulo}</h1>
                            <p className='text-[#b7bac0] text-lg'>{d.descricao}</p>
                            <div className=''>
                                <ul className='mt-5 space-y-3 text-white text-lg lg:text-md'>
                                    <li className='flex items-center gap-4'><HiCheck className='size-6' />{d.topico1}</li>
                                    <li className='flex items-center gap-4'><HiCheck className='size-6' />{d.topico2}</li>
                                    <li className='flex items-center gap-4'><HiCheck className='size-6' />{d.topico3}</li>
                                    <li className='flex items-center gap-4'><HiCheck className='size-6' />{d.topico4}</li>
                                </ul>
                            </div>
                            <div className='pb-5'>
                                <button className='border border-white p-3 text-md text-white w-full rounded-lg hover:cursor-pointer transition duration-300 hover:bg-white hover:text-black'>
                                    <a href='#Contact' className=''>Contact for Pricing</a>
                                </button>
                            </div>
                        </div>
                    ))}

                </article>
            </section>
        </>
    )
}

const data = [
    {
        titulo: `Fixed Scope`,
        descricao: `Defined deliverables with predictable timeline and budget. Perfect for well-defined projects.`,
        topico1: `Clear project Scope`,
        topico2: `Fixed timeline`,
        topico3: `Milestone-based payments`,
        topico4: `Dedicated project manager`,
    },
    {
        titulo: `Retainer`,
        descricao: `Ongoing development support with flexible monthly hours. Ideal for continuous improvement.`,
        topico1: `Monthly hour allocation`,
        topico2: `Priority support`,
        topico3: `Flexible scope adjustments`,
        topico4: `Regular sprint cycles`,
    },
    {
        titulo: `Custom`,
        descricao: `Tailored engagement model designed specifically for your unique business requirements.`,
        topico1: `Fully customized approach`,
        topico2: `Scalable team size`,
        topico3: `Flexible payment terms`,
        topico4: `Enterprise-level support`,
    },
]

export default Pricing

