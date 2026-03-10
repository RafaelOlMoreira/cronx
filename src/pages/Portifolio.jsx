import React from 'react'
import Image1 from '/example.jpg'
import Image2 from '/example2.jpg'
import Image3 from '/example3.jpg'

import { HiArrowSmRight } from "react-icons/hi";

function Portifolio() {
    return (
        <section id='Portifolio' className='scroll-mt-14 min-h-min bg-linear-to-b from-[#0F172A] to-black px-5 pt-20 pb-10 text-center'>
            <div className='space-y-2 mb-20'
                data-aos="fade-up"
                data-aos-duration="1000"
            >
                <p className='text-[#b7bac0] text-md uppercase'>TRABALHOS EM DESTAQUE</p>
                <h1 className='text-4xl lg:text-5xl text-white font-bold'>Projetos que Entregam Resultados</h1>
            </div>

            <div className='space-y-15 lg:text-center lg:gap-x-15 lg:mx-16 lg:grid lg:grid-cols-2'>
                {data.map((d) => (
                    <div className='group/card text-start hover:cursor-pointer'
                            data-aos="fade-up"
                            data-aos-duration="1500"
                        >
                        <div>{d.image}</div>
                        <p className='text-[#b7bac0] text-md pt-5'>{d.typeService}</p>
                        <h1 className='text-2xl text-white font-bold'>{d.companyName}</h1>

                        <div className='flex items-center space-x-3 h-1 py-6'>
                            <span className='p-1 bg-green-800 rounded-full'></span>
                            <span className='text-[#b7bac0] text-lg font-medium'>{d.benefit}</span>
                        </div>

                        <div className='group flex items-center space-x-2 py-2 w-min text-nowrap'>
                            <span className='text-white text-xl font-medium'>View Case Study</span>
                            <HiArrowSmRight className='size-6 text-white transition duration-500 group-hover:translate-x-2' />
                        </div>
                    </div>
                ))}

            </div>
        </section>
    )
}

const data = [
    {
        image: <img src={Image1} className='rounded-xl transition duration-500 grayscale group-hover/card:grayscale-0' />,
        typeService: `Custom CRM Dashboard`,
        companyName: `FinTech Startup`,
        benefit: `+30% conversion in 3 months`,
    },
    {
        image: <img src={Image2} className='rounded-xl transition duration-500 grayscale group-hover/card:grayscale-0' />,
        typeService: `E-commerce Brand`,
        companyName: `High-Performance Online Store`,
        benefit: `+45% revenue growth in 6 months`,
    },
    {
        image: <img src={Image3} className='rounded-xl transition duration-500 grayscale group-hover/card:grayscale-0' />,
        typeService: `Enterprise ERP System`,
        companyName: `Manufacturing Company`,
        benefit: `60% reduction in processing time`,
    },
]
export default Portifolio
