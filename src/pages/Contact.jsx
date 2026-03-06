import React, { useState } from 'react'
import emailjs from '@emailjs/browser';

import { HiOutlinePhone, HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";

const MAX = 500;

function formatPhone(value) {
    const digits = value.replace(/\D/g, '').slice(0, 11);
    if (digits.length <= 2) return `(${digits}`;
    if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

function Contact() {

    async function handleSubmit(e) {
        e.preventDefault();
        setFeedback(null);

        // validação frontend
        if (!name.trim() || !email.trim() || !service || service === 'selectService' || !message.trim()) {
            setFeedback({ type: 'error', text: 'Preencha todos os campos obrigatórios.' });
            return;
        }
        if (message.length > MAX) {
            setFeedback({ type: 'error', text: `Mensagem deve ter no máximo ${MAX} caracteres.` });
            return;
        }
        if (phone.trim() && phone.replace(/\D/g, '').length !== 11) {
            setFeedback({ type: 'error', text: 'Telefone inválido. Use o formato (XX) XXXXX-XXXX.' });
            return;
        }

        setSending(true);
        try {
            const res = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, company, email, phone, service, message, whatsappConsent })
            });

            const data = await res.json();
            if (res.ok) {
                setFeedback({ type: 'success', text: 'Mensagem enviada com sucesso. Obrigado!' });
                setName(''); setCompany(''); setEmail(''); setPhone(''); setService('selectService'); setMessage(''); setWhatsappConsent(false);
            } else {
                setFeedback({ type: 'error', text: data.error || 'Erro ao enviar a mensagem.' });
            }
        } catch (err) {
            console.error(err);
            setFeedback({ type: 'error', text: 'Erro na conexão. Tente novamente.' });
        } finally {
            setSending(false);
        }
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

                    <form onSubmit={handleSubmit} className='mt-10 lg:mt-0 space-y-5'>

                        <div className='space-y-5 lg:space-y-0 lg:flex lg:gap-5'>
                            <input required value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Your Name *' className='w-full p-5 lg:px-5 lg:p-3 border border-[#b7bac0]/50 placeholder:text-[#b7bac0]/80 text-white text-xl lg:text-lg rounded-xl' />
                            <input value={company} onChange={(e) => setCompany(e.target.value)} type="text" placeholder='Company Name' className='w-full p-5 lg:px-5 lg:p-3 border border-[#b7bac0]/50 placeholder:text-[#b7bac0]/80 text-white text-xl lg:text-lg rounded-xl' />
                        </div>

                        <div className='space-y-5 lg:space-y-0 lg:flex lg:gap-5'>
                            <input required value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email Address *' className='w-full p-5 lg:px-5 lg:p-3 border border-[#b7bac0]/50 placeholder:text-[#b7bac0]/80 text-white text-xl lg:text-lg rounded-xl' />
                            <input value={phone} onChange={(e) => setPhone(formatPhone(e.target.value))} type="tel" placeholder='Phone (Optional)' className='w-full p-5 lg:px-5 lg:p-3 border border-[#b7bac0]/50 placeholder:text-[#b7bac0]/80 text-white text-xl lg:text-lg rounded-xl' />
                        </div>

                        <select value={service} onChange={(e) => setService(e.target.value)} required name="selectService" className='w-full p-5 lg:px-5 lg:p-4 border border-[#b7bac0]/50 placeholder:text-[#b7bac0]/80 text-white text-xl lg:text-lg rounded-xl'>
                            <option value="selectService" disabled className='select-none text-white text-sm bg-[#0F172A]'>Select Service Type *</option>
                            <option value="Custom Software" className='text-white text-sm bg-[#0F172A]'>Custom Software</option>
                            <option value="Landing Page" className='text-white text-sm bg-[#0F172A]'>Landing Page</option>
                            <option value="E-commerce" className='text-white text-sm bg-[#0F172A]'>E-commerce</option>
                            <option value="Other" className='text-white text-sm bg-[#0F172A]'>Other</option>
                        </select>

                        <div>
                            <textarea required value={message} onChange={(e) => setMessage(e.target.value.slice(0, MAX))} maxLength={MAX} rows={6} name="aboutProject" placeholder='Tell us about your project *' className='w-full resize-none p-5 border border-[#b7bac0]/50 placeholder:text-[#b7bac0]/80 text-white text-xl rounded-xl'></textarea>
                            <div className={`py-2 lg:text-sm ${counterColor}`}>{message.length}/{MAX} characters</div>
                        </div>

                        <div className='flex items-center space-x-2'>
                            <input type="checkbox" checked={whatsappConsent} onChange={e => setWhatsappConsent(e.target.checked)} />
                            <span className='text-[#b7bac0] text-md'>Aceito ser contatado por WhatsApp no telefone informado.</span>
                        </div>

                        {feedback && (
                            <div className={`pt-2 ${feedback.type === 'error' ? 'text-red-400' : 'text-green-400'}`}>
                                {feedback.text}
                            </div>
                        )}

                        <div className='pt-4'>
                            <button type="submit" disabled={sending} className='bg-white p-4 text-xl lg:text-lg w-full rounded-lg hover:cursor-pointer transition duration-300 hover:scale-105'>
                                <span className='font-bold'>{sending ? 'Enviando...' : 'Request a Proposal'}</span>
                            </button>
                        </div>
                    </form>

                    <div className='pt-4'>
                        <span className='flex justify-center text-[#b7bac0]/80 pt-3 lg:text-sm'>We respect your privacy. No spam, ever.</span>
                    </div>
                </div>

            </section>
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
