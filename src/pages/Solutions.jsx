import React from 'react'

function Solutions() {

    return (
        <>
            <section className="bg-plus-pattern bg-[#0F172A] min-h-auto text-white px-5 lg:px-20 pt-20 pb-10">
                <div className='space-y-2 mb-15'>
                    <p className='text-[#b7bac0] text-md'>OUR PROCESS</p>
                    <h1 className='text-4xl text-white font-bold'>From Concept to Launch</h1>
                </div>

                <div className='flex flex-col lg:flex-row space-y-15 lg:space-y-0 lg:gap-15'>
                    {data.map((d) => (
                        <div className='space-y-4'>
                            <div className='relative'>
                                <div className='hidden lg:block absolute bg-white/20 w-full h-0.5 mt-8.5' />
                                <p className='lg:relative w-min bg-[#0F172A] text-white font-bold text-3xl border p-4 rounded-full'>{d.number}</p>
                            </div>
                            <h2 className='text-white text-2xl font-semibold'>{d.title}</h2>
                            <p className='text-md'>{d.description}</p>
                        </div>
                    ))}
                </div>

            </section>
        </>
    )
}

const data = [
    {
        number: `01`,
        title: `Discovery`,
        description: `We analyze your needs and define clear objectives for your project.`,
    },
    {
        number: `02`,
        title: `Design`,
        description: `Creating intuitive interfaces and robust architecture blueprints.`,
    },
    {
        number: `03`,
        title: `Build`,
        description: `Agile development with continuous testing and quality assurance.`,
    },
    {
        number: `04`,
        title: `Support`,
        description: `Ongoing maintenance, updates, and dedicated technical support.`,
    },
]

export default Solutions
