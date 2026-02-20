import React from 'react'
import Image from '/example.jpg'
import Image2 from '/example2.jpg'
import Image3 from '/example3.jpg'

import { HiArrowSmRight } from "react-icons/hi";

function Portifolio() {
    return (
        <div className='min-h-min bg-linear-to-b from-[#0F172A] to-black py-30 px-5 text-center'>
            <div className='space-y-2 mb-20'>
                <p className='text-[#b7bac0] text-md uppercase'>FEATURED WORK</p>
                <h1 className='text-4xl text-white font-bold'>Projects That Deliver</h1>
            </div>

            <div className='space-y-15'>

                {/* Projeto 1 */}
                <div className='group/card text-start'>
                    <img src={Image} className='rounded-xl transition duration-500 grayscale group-hover/card:grayscale-0' />
                    <p className='text-[#b7bac0] text-md pt-5'>FinTech Startup</p>
                    <h1 className='text-2xl text-white font-bold'>Custom CRM Dashboard</h1>

                    <div className='flex items-center space-x-3 h-1 py-6'>
                        <span className='p-1 bg-green-800 rounded-full'></span>
                        <span className='text-[#b7bac0] text-lg font-medium'>+30% conversion in 3 months</span>
                    </div>

                    <div className='group flex items-center space-x-2 py-2 w-min text-nowrap'>
                        <span className='text-white text-xl font-medium'>View Case Study</span>
                        <HiArrowSmRight className='size-6 text-white transition duration-500 group-hover:translate-x-2' />
                    </div>
                </div>

                {/* Projeto 2 */}
                <div className='group/card text-start'>
                    <img src={Image2} className='rounded-xl transition duration-500 grayscale group-hover/card:grayscale-0' />
                    <p className='text-[#b7bac0] text-md pt-5'>E-commerce Brand</p>
                    <h1 className='text-2xl text-white font-bold'>High-Performance Online Store</h1>

                    <div className='flex items-center space-x-3 h-1 py-6'>
                        <span className='p-1 bg-green-800 rounded-full'></span>
                        <span className='text-[#b7bac0] text-lg font-medium'>+45% revenue growth in 6 months</span>
                    </div>

                    <div className='group flex items-center space-x-2 py-2 w-min text-nowrap'>
                        <span className='text-white text-xl font-medium'>View Case Study</span>
                        <HiArrowSmRight className='size-6 text-white transition duration-500 group-hover:translate-x-2' />
                    </div>
                </div>

                {/* Projeto 3 */}
                <div className='group/card text-start'>
                    <img src={Image3} className='rounded-xl transition duration-500 grayscale group-hover/card:grayscale-0' />
                    <p className='text-[#b7bac0] text-md pt-5'>Manufacturing Company</p>
                    <h1 className='text-2xl text-white font-bold'>Enterprise ERP System</h1>

                    <div className='flex items-center space-x-3 h-1 py-6'>
                        <span className='p-1 bg-green-800 rounded-full'></span>
                        <span className='text-[#b7bac0] text-lg font-medium'>60% reduction in processing time</span>
                    </div>

                    <div className='group flex items-center space-x-2 py-2 w-min text-nowrap'>
                        <span className='text-white text-xl font-medium'>View Case Study</span>
                        <HiArrowSmRight className='size-6 text-white transition duration-500 group-hover:translate-x-2' />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Portifolio
