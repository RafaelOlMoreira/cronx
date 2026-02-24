import React from 'react'

function Feedback() {
    return (
        <>
            <section className='min-h-min bg-[#0F172A] py-30 px-5'>
                <div className='space-y-2 mb-20 text-center'>
                    <p className='text-[#b7bac0] text-md uppercase'>CLIENT FEEDBACK</p>
                    <h1 className='text-4xl text-white font-bold'>What Our Clients Say</h1>
                </div>

                <div className='px-5 overflow-hidden relative'>

                    <div className='flex'>
                        {/* Card 1 */}
                        <div className='border border-white p-10 rounded-xl'>
                            <p className='text-[#b7bac0] text-2xl'>"CRONX transformed our operations with a custom ERP system that perfectly fits our workflow. The team was professional, responsive, and delivered beyond our expectations."</p>
                            <div className='text-center text-white pt-10'>
                                <h6 className='text-xl font-semibold'>Carlos Silva</h6>
                                <p className='text-[#b7bac0] text-lg'>CTO, LogiTech Solutions</p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className='border border-white p-10 rounded-xl'>
                            <p className='text-[#b7bac0] text-2xl'>"Our new e-commerce platform has exceeded all performance targets. CRONX delivered a scalable solution that handles our growing customer base with ease."</p>
                            <div className='text-center text-white pt-10'>
                                <h6 className='text-xl font-semibold'>Marina Costa</h6>
                                <p className='text-[#b7bac0] text-lg'>CEO, Bella Fashion</p>
                            </div>
                        </div>

                        {/* Card 1 */}
                        <div className='border border-white p-10 rounded-xl'>
                            <p className='text-[#b7bac0] text-2xl'>"The landing page CRONX created for our product launch generated a 40% increase in qualified leads. Their attention to detail and conversion optimization is outstanding."</p>
                            <div className='text-center text-white pt-10'>
                                <h6 className='text-xl font-semibold'>Roberto Mendes</h6>
                                <p className='text-[#b7bac0] text-lg'>Marketing Director, TechFlow</p>
                            </div>
                        </div>

                    </div>

                </div>
            </section >
        </>
    )
}

export default Feedback
