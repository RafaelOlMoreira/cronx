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
            <section id='Feedback' className='min-h-min bg-[#0F172A] py-20 px-7'>
                <div className='space-y-2 mb-20 text-center'
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    <p className='text-[#b7bac0] text-md lg:text-sm uppercase font-semibold'>OPINIÃO DOS CLIENTES</p>
                    <h1 className='text-4xl lg:text-5xl text-white font-bold'>O Que Nossos Clientes Dizem</h1>
                </div>

                <Slider ref={sliderRef} {...settings} className='lg:px-60 lg:flex lg:text-center'>
                    {data.map((d, idx) => (
                        <div key={idx} className='border border-white bg-[#1b2335] p-10 rounded-xl'
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            <p className='text-[#e9e9eb] italic text-2xl lg:text-xl lg:text-justify'>{d.descricao}</p>
                            <div className='text-center text-white pt-8 lg:text-start'>
                                <h6 className='text-xl font-semibold lg:text-lg'>{d.nome}</h6>
                                <p className='text-[#b7bac0] text-lg lg:text-md'>{d.empresa}</p>
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
                                className={`mx-2 focus:outline-none rounded-full transition-all duration-200 hover:cursor-pointer
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
        descricao: `"A CRONX transformou nossas operações com um sistema ERP personalizado que se encaixa perfeitamente no nosso fluxo de trabalho. A equipe foi profissional, ágil e entregou além das nossas expectativas."`,
        nome: `Carlos Silva`,
        empresa: `CTO, LogiTech Solutions`,
    },
    {
        descricao: `"Nossa nova plataforma de e-commerce superou todas as metas de desempenho. A CRONX entregou uma solução escalável que suporta nossa base crescente de clientes com facilidade."`,
        nome: `Marina Costa`,
        empresa: `CEO, Bella Fashion`,
    },
    {
        descricao: `"A landing page criada pela CRONX para o lançamento do nosso produto gerou um aumento de 40% em leads qualificados. A atenção aos detalhes e a otimização de conversão são excepcionais."`,
        nome: `Roberto Mendes`,
        empresa: `Marketing Director, TechFlow`,
    }
]

export default Feedback
