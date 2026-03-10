import React from 'react'

function Solutions() {

    return (
        <>
            <section id='Solucoes' className="scroll-mt-14 bg-plus-pattern bg-[#0F172A] min-h-auto text-white px-5 lg:px-20 pt-20 pb-10">
                <div className='space-y-2 mb-15'
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    <p className='text-[#b7bac0] text-md'>NOSSO PROCESSO</p>
                    <h1 className='text-4xl text-white font-bold'>Do Conceito ao Lançamento</h1>
                </div>

                <div className='flex flex-col lg:flex-row space-y-15 lg:space-y-0 lg:gap-15'>
                    {data.map((d) => (
                        <div className='space-y-4'
                            data-aos="fade-up"
                            data-aos-duration="1500"
                        >
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
        title: `Descoberta`,
        description: `Analisamos suas necessidades e definimos objetivos claros para o seu projeto.`,
    },
    {
        number: `02`,
        title: `Design`,
        description: `Criamos interfaces intuitivas e blueprints de arquitetura robustos.`,
    },
    {
        number: `03`,
        title: `Desenvolvimento`,
        description: `Desenvolvimento ágil com testes contínuos e garantia de qualidade.`,
    },
    {
        number: `04`,
        title: `Suporte`,
        description: `Manutenção contínua, atualizações e suporte técnico dedicado.`,
    },
]

export default Solutions
