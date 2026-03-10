import React from 'react'
import { HiCheck } from "react-icons/hi";

function Pricing() {
    return (
        <>
            <section id='Precos' className='scroll-mt-14 min-h-min bg-[#0a101d] py-20 px-7'>
                <div className='space-y-1 mb-20 text-center'
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    <p className='text-[#b7bac0] text-md lg:text-sm uppercase font-semibold'>PREÇOS</p>
                    <p className='text-4xl lg:text-5xl text-white font-bold'>Modelos de Contratação Flexíveis</p>
                    <p className='text-[#b7bac0] text-lg pt-5'>Cada projeto é único. Vamos conversar sobre suas necessidades.</p>
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
                                    <a href='#Contato' className=''>Consultar Preço</a>
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
        titulo: `Escopo Fixo`,
        descricao: `Entregas definidas com prazo e orçamento previsíveis. Ideal para projetos bem delimitados.`,
        topico1: `Escopo de projeto claro`,
        topico2: `Prazo fixo`,
        topico3: `Pagamentos por etapas`,
        topico4: `Gerente de projeto dedicado`,
    },
    {
        titulo: `Retainer`,
        descricao: `Suporte de desenvolvimento contínuo com horas mensais flexíveis. Ideal para melhorias constantes.`,
        topico1: `Banco de horas mensais`,
        topico2: `Suporte prioritário`,
        topico3: `Ajuste de escopo flexíveis`,
        topico4: `Ciclos de sprint regulares`,
    },
    {
        titulo: `Personalizado`,
        descricao: `Modelo de contratação totalmente adaptado às necessidades únicas do seu negócio.`,
        topico1: `Abordagem totalmente customizada`,
        topico2: `Equipe escalável`,
        topico3: `Condições de pagamento flexíveis`,
        topico4: `Suporte de nível enterprise`,
    },
]

export default Pricing

