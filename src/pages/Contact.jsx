import React, { useState } from 'react'
import emailjs from '@emailjs/browser'

import { HiOutlinePhone, HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";

const MAX = 500;

function formatPhone(value) {
    const digits = value.replace(/\D/g, '').slice(0, 11);
    if (digits.length === 0) return '';
    if (digits.length <= 2) return `(${digits}`;
    if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

function Contact() {

    const [name, setName] = useState('')
    const [company, setCompany] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [service, setService] = useState('')
    const [message, setMessage] = useState('')
    const [check, setCheck] = useState(false)

    const [sending, setSending] = useState(false)

    const counterColor =
        message.length >= MAX ? 'text-red-500' :
            message.length > MAX * 0.9 ? 'text-amber-500' :
                'text-[#b7bac0]';

    function sendEmail(e) {
        e.preventDefault();

        // Verificar se todos os campos foram preenchidos
        if (name === '' || email === '' || service === '' || message === '') {
            alert("Preencha todos os campos obrigatórios.");
            return;
        }
        if (check === true && phone === '') {
            // Verificação de não enviar o formulário sem um número de telefone com o checkbox marcado
            alert("Para receber a resposta via Whatsapp você precisa adicionar um número de telefone válido.");
            return;
        }

        setSending(true);

        // ... dentro da função sendEmail
        const phoneDigits = phone.replace(/\D/g, ''); // Remove tudo que não é número

        // Garante que o número comece com 55 (Brasil)
        const phone_raw = phoneDigits.startsWith('55') ? phoneDigits : `55${phoneDigits}`;

        const templateParams = {
            from_name: name,
            company: company || "Não informado",
            email: email,
            phone: phone,
            phone_raw: phone_raw,
            service: service,
            message: message,
            check: check ? "Sim" : "Não"
        }

        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            templateParams,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then((response) => {
                console.log("Email enviado", response.status, response.text)

                setName('')
                setCompany('')
                setEmail('')
                setPhone('')
                setService('')
                setMessage('')
                setCheck(false)

                alert('Email enviado com sucesso!')
            }, (err) => {
                console.log("ERRO", err)
                alert('Falha ao enviar o Email, tente novamente mais tarde.')
            })
            .finally(() => {
                setSending(false);
            })
    }

    return (
        <>
            <section id='Contact' className='scroll-mt-14 min-h-min bg-[#0F172A] pt-20 pb-10 px-5 lg:px-20 lg:grid lg:grid-cols-3'>

                <div className='lg:col-span-1 lg:mr-auto'>
                    <div className='space-y-2 lg:space-y-10 mb-20 lg:mb-10 text-center lg:text-left'>
                        <h1 className='text-4xl text-white font-bold'>Let's Build Something Great</h1>
                        <p className='text-[#b7bac0] text-lg'>Tell us about your project and we'll get back within 24 hours.</p>
                    </div>

                    <div className='space-y-5 lg:flex lg:flex-col'>
                        {data.map((d) => (
                            <div className='flex items-center space-x-5 text-white'>
                                {d.icon}
                                <div className=''>
                                    <p className='text-[#b7bac0] text-md'>{d.typeContact}</p>
                                    <span className='font-semibold text-lg'>{d.contact}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='lg:col-span-2 lg:pl-10'>

                    <form onSubmit={sendEmail} className='mt-10 lg:mt-0 space-y-5'>
                        <div className='space-y-5 lg:space-y-0 lg:flex lg:gap-5'>
                            <input
                                className='w-full p-5 lg:px-5 lg:p-3 border border-[#b7bac0]/50 placeholder:text-[#b7bac0]/80 text-white text-xl lg:text-lg rounded-xl'
                                type="text"
                                placeholder='Your Name *'
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                            />
                            <input
                                className='w-full p-5 lg:px-5 lg:p-3 border border-[#b7bac0]/50 placeholder:text-[#b7bac0]/80 text-white text-xl lg:text-lg rounded-xl'
                                type="text"
                                placeholder='Company Name'
                                onChange={(e) => setCompany(e.target.value)}
                                value={company}
                            />
                        </div>

                        <div className='space-y-5 lg:space-y-0 lg:flex lg:gap-5'>
                            <input
                                className='w-full p-5 lg:px-5 lg:p-3 border border-[#b7bac0]/50 placeholder:text-[#b7bac0]/80 text-white text-xl lg:text-lg rounded-xl'
                                type="email"
                                placeholder='Email Address *'
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                            />
                            <input
                                className='w-full p-5 lg:px-5 lg:p-3 border border-[#b7bac0]/50 placeholder:text-[#b7bac0]/80 text-white text-xl lg:text-lg rounded-xl'
                                type="tel"
                                placeholder='Phone (Optional)'
                                onChange={(e) => setPhone(formatPhone(e.target.value))}
                                value={phone}
                            />
                        </div>

                        <select
                            className='w-full p-5 lg:px-5 lg:p-4 border border-[#b7bac0]/50 placeholder:text-[#b7bac0]/80 text-white text-xl lg:text-lg rounded-xl'
                            onChange={(e) => setService(e.target.value)}
                            value={service}
                            name="selectService"
                        >
                            <option value="" disabled className='select-none text-white text-sm bg-[#0F172A]'>Select Service Type *</option>
                            <option value="Custom Software" className='text-white text-sm bg-[#0F172A]'>Custom Software</option>
                            <option value="Landing Page" className='text-white text-sm bg-[#0F172A]'>Landing Page</option>
                            <option value="E-commerce" className='text-white text-sm bg-[#0F172A]'>E-commerce</option>
                            <option value="Other" className='text-white text-sm bg-[#0F172A]'>Other</option>
                        </select>

                        <div>
                            <textarea
                                className='w-full resize-none p-5 border border-[#b7bac0]/50 placeholder:text-[#b7bac0]/80 text-white text-xl rounded-xl'
                                maxLength={MAX}
                                rows={6}
                                placeholder='Tell us about your project *'
                                onChange={(e) => setMessage(e.target.value)}
                                value={message}
                            ></textarea>
                            <div className={`py-2 lg:text-sm ${counterColor}`}>{message.length}/{MAX} characters</div>
                        </div>

                        <div className='flex items-center space-x-2'>
                            <input
                                type="checkbox"
                                onChange={(e) => setCheck(e.target.checked)}
                                value={check}
                            />
                            <span className='text-[#b7bac0] text-md'>Aceito ser contatado por WhatsApp no telefone informado.</span>
                        </div>

                        <div className='pt-4'>
                            <button
                                className='bg-white p-4 text-xl lg:text-lg w-full rounded-lg hover:cursor-pointer transition duration-300 hover:scale-105'
                                type="submit"
                                disabled={sending}
                            >
                                <span className='font-bold'>
                                    {sending ? 'Sending...' : 'Request a Proposal'}
                                </span>
                            </button>
                        </div>
                    </form>

                </div>

                <div className='pt-4'>
                    <span className='flex justify-center text-[#b7bac0]/80 pt-3 lg:text-sm'>We respect your privacy. No spam, ever.</span>
                </div>

            </section >
        </>
    )
}

const data = [
    {
        icon: <HiOutlinePhone className='size-6' />,
        typeContact: `Phone`,
        contact: `+55 31 99247-9530`,
    },
    {
        icon: <HiOutlineMail className='size-6' />,
        typeContact: `Email`,
        contact: `cronx.oficial@gmail.com`,
    },
    {
        icon: <HiOutlineLocationMarker className='size-6' />,
        typeContact: `Location`,
        contact: `Belo Horizonte, MG, Brazil`,
    },
]

export default Contact
