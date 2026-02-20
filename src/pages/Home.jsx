import React from 'react'
import Particles from '../assets/background/Particles';

function Home() {
    return (
        <section className='relative min-h-screen'>
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
            <div className='relative h-screen flex flex-col justify-center mx-5 space-y-5'>
                    <h1 className='text-white text-5xl font-bold'>Custom Software That Drives Results</h1>
                    <p className='text-[#a1a1a1] text-xl'>Enterprise-grade solutions for ambitious businesses. From landing pages to full-stack systems.</p>

                    <div className='space-y-4'>
                        <button className='bg-white p-4 text-xl w-full rounded-lg hover:cursor-pointer transition duration-300 hover:scale-105'>
                            <span className='font-semibold'>Request a Proposal</span>
                        </button>
                        <button className='border border-white p-4 text-xl text-white w-full rounded-lg hover:cursor-pointer transition duration-300 hover:bg-white hover:text-black'>
                            <span className='font-semibold'>View Our Work</span>
                        </button>
                    </div>

                    <p className='text-[#a1a1a1] text-md'>Based in Belo Horizonte • Serving clients across Brazil</p>

            </div>

        </section>
    )
}

export default Home
