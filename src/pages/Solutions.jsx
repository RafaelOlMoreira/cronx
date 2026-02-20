import React from 'react'

function Solutions() {

    return (
        <>
            <section className="bg-plus-pattern bg-[#0F172A] min-h-auto text-white px-5 pt-50 pb-35">
                <div className='space-y-2 mb-15'>
                    <p className='text-[#b7bac0] text-md'>OUR PROCESS</p>
                    <h1 className='text-4xl text-white font-bold'>From Concept to Launch</h1>
                </div>

                <div className='flex flex-col space-y-15'>

                    <div className='space-y-4'>
                        <p className='w-min text-white font-bold text-3xl border p-4 rounded-full'>01</p>
                        <h2 className='text-white text-2xl font-semibold'>Discovery</h2>
                        <p className='text-md'>We analyze your needs and define clear objectives for your project.</p>
                    </div>

                    <div className='space-y-4'>
                        <p className='w-min text-white font-bold text-3xl border p-4 rounded-full'>02</p>
                        <h2 className='text-white text-2xl font-semibold'>Design</h2>
                        <p className='text-md'>Creating intuitive interfaces and robust architecture blueprints.</p>
                    </div>

                    <div className='space-y-4'>
                        <p className='w-min text-white font-bold text-3xl border p-4 rounded-full'>03</p>
                        <h2 className='text-white text-2xl font-semibold'>Build</h2>
                        <p className='text-md'>Agile development with continuous testing and quality assurance.</p>
                    </div>

                    <div className='space-y-4'>
                        <p className='w-min text-white font-bold text-3xl border p-4 rounded-full'>04</p>
                        <h2 className='text-white text-2xl font-semibold'>Support</h2>
                        <p className='text-md'>Ongoing maintenance, updates, and dedicated technical support.</p>
                    </div>

                </div>

            </section>
        </>
    )
}

export default Solutions
