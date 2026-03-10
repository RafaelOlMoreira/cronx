import React from 'react'

import { RiCodeView, RiStore2Line, RiArchiveDrawerLine } from "react-icons/ri";
import { GrTemplate } from "react-icons/gr";

function Services() {
    return (
        <>
            <section id='Servicos' className='scroll-mt-14 bg-[#0f172a] px-5 pt-20 pb-10'>

                <div
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    className='text-center space-y-2'>
                    <p className='uppercase text-[#b7bac0] text-lg'>O QUE FAZEMOS</p>
                    <h1 className='text-4xl lg:text-5xl text-white font-bold pb-2'>Serviços Feitos para Escalar</h1>
                    <p className='text-[#b7bac0] text-lg px-10'>Soluções de software completas, adaptadas aos seus objetivos de negócio.</p>
                </div>

                <article
                    className='px-5 lg:px-32 pt-20 space-y-10 lg:flex lg:gap-x-10 lg:space-y-0'>

                    {data.map((d) => (
                        <div
                            data-aos="fade-up"
                            data-aos-duration="1500"
                            className='group text-white bg-[#1b2335]/90 border border-[#a1a1a1]/30 rounded-xl p-10 transform duration-300 hover:shadow-2xl hover:-translate-y-1 hover:cursor-pointer'>
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
        title: `Software Personalizado`,
        description: `Aplicações sob medida para resolver seus desafios únicos e escalar junto com o crescimento do seu negócio.`,
    },
    {
        icon: <GrTemplate className='w-12 h-12 transform duration-300 group-hover:rotate-12' />,
        title: `Landing Pages`,
        description: `Páginas de alta conversão que capturam atenção e geram resultados mensuráveis para o seu negócio.`,
    },
    {
        icon: <RiStore2Line className='h-15 w-15 transform duration-300 group-hover:rotate-12' />,
        title: `Plataformas E-commerce`,
        description: `Lojas virtuais completas com experiências de checkout fluidas e gestão de estoque poderosa.`,
    }
]

export default Services
