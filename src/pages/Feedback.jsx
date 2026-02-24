import React, { useRef, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Feedback() {

    const sliderRef = useRef(null);
    const [current, setCurrent] = useState(0);

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (_, next) => setCurrent(next),
    };

    const ACTIVE_COLOR = "bg-gray-400";    // cor do dot ativo
    const INACTIVE_COLOR = "bg-gray-700";   // cor do dot inativo
    const DOT_HEIGHT = "h-2";               // altura dos dots
    const DOT_INACTIVE_WIDTH = "w-2";       // largura estado inativo
    const DOT_ACTIVE_WIDTH = "w-10";         // largura estado ativo

    return (
        <>
            <section className='min-h-min bg-[#0F172A] py-20 px-7'>
                <div className='space-y-2 mb-20 text-center'>
                    <p className='text-[#b7bac0] text-md uppercase'>CLIENT FEEDBACK</p>
                    <h1 className='text-4xl text-white font-bold'>What Our Clients Say</h1>
                </div>

                <Slider ref={sliderRef} {...settings}>
                    {data.map((d, idx) => (
                        <div key={idx} className='border border-white p-10 rounded-xl'>
                            <p className='text-[#b7bac0] text-2xl'>{d.descricao}</p>
                            <div className='text-center text-white pt-10'>
                                <h6 className='text-xl font-semibold'>{d.nome}</h6>
                                <p className='text-[#b7bac0] text-lg'>{d.empresa}</p>
                            </div>
                        </div>
                    ))}
                </Slider>

                <div className="flex justify-center mt-6">
                    {data.map((_, idx) => {
                        const isActive = idx === current;
                        return (
                            <button
                                key={idx}
                                aria-label={`Ir para feedback ${idx + 1}`}
                                aria-pressed={isActive}
                                onClick={() => {
                                    if (sliderRef.current) {
                                        sliderRef.current.slickGoTo(idx);
                                        setCurrent(idx);
                                    }
                                }}
                                className={`mx-2 focus:outline-none rounded-full transition-all duration-200
                                ${DOT_HEIGHT} ${isActive ? DOT_ACTIVE_WIDTH : DOT_INACTIVE_WIDTH} ${isActive ? ACTIVE_COLOR : INACTIVE_COLOR}`}
                                style={{ display: 'inline-block' }}
                            />
                        );
                    })}
                </div>
            </section >
        </>
    )
}

const data = [
    {
        descricao: `"CRONX transformed our operations with a custom ERP system that perfectly fits our workflow. The team was professional, responsive, and delivered beyond our expectations."`,
        nome: `Carlos Silva`,
        empresa: `CTO, LogiTech Solutions`,
    },
    {
        descricao: `"Our new e-commerce platform has exceeded all performance targets. CRONX delivered a scalable solution that handles our growing customer base with ease."`,
        nome: `Marina Costa`,
        empresa: `CEO, Bella Fashion`,
    },
    {
        descricao: `"The landing page CRONX created for our product launch generated a 40% increase in qualified leads. Their attention to detail and conversion optimization is outstanding."`,
        nome: `Roberto Mendes`,
        empresa: `Marketing Director, TechFlow`,
    }
]

export default Feedback
