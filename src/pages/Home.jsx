import React from 'react'
import Particles from '../assets/Particles';

function Home() {
    return (
        <section className='relative min-h-screen' id='#Inicio'>
            <div className='absolute inset-0 -z-5 bg-black'>
                <Particles
                    particleColors={["#a1a1a1"]}
                    particleCount={2000}
                    particleSpread={10}
                    speed={0.1}
                    particleBaseSize={100}
                    moveParticlesOnHover={false}
                    alphaParticles
                    disableRotation
                    pixelRatio={1}
                />
            </div>
            <div id='Inicio' className='relative h-screen flex flex-col justify-center mx-5 lg:mx-15 space-y-5 lg:w-2/5'>
                <h1 className='text-white text-5xl font-bold'>Software Personalizado que Gera Resultados</h1>
                <p className='text-[#a1a1a1] text-xl'>Soluções para empresas ambiciosas. De sites ate a sistemas completos.</p>

                <div className='space-y-4 lg:space-y-0 lg:flex lg:gap-x-5'>
                    <a href="#Contato" className='block text-center text-nowrap bg-white p-4 text-xl w-full rounded-lg hover:cursor-pointer transition duration-300 hover:scale-105'>
                        <span className='font-semibold'>Solicitar Proposta</span>
                    </a>
                    <a href="#Portifolio" className='block text-center text-nowrap border border-white p-4 text-xl text-white w-full rounded-lg hover:cursor-pointer transition duration-300 hover:bg-white hover:text-black'>
                        <span className='font-semibold'>Ver Nosso Trabalho</span>
                    </a>
                </div>

                <p className='text-[#a1a1a1] text-md'>Sediados em Belo Horizonte • Atendendo clientes em todo o Brasil</p>

            </div>

        </section>
    )
}

export default Home
