import React, { useState } from 'react'
import emailjs from 'emailjs-com';

import { HiOutlinePhone, HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";

const MAX = 500;

function formatPhone(value) {
    const digits = value.replace(/\D/g, '').slice(0, 11);
    if (digits.length === 0) return '';
    if (digits.length <= 2) return `(${digits}`;
    if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

function validateEmail(email) {
    // validação simples
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function onlyDigits(value = '') {
    return value.replace(/\D/g, '');
}

function Contact() {

    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [service, setService] = useState('');
    const [message, setMessage] = useState('');
    const [whatsappConsent, setWhatsappConsent] = useState(false);
    const [sending, setSending] = useState(false);

    const counterColor =
        message.length >= MAX ? 'text-red-500' :
            message.length > MAX * 0.9 ? 'text-amber-500' :
                'text-[#b7bac0]';

    async function handleSubmit(e) {
        e.preventDefault();

        // validações
        if (!name.trim()) return alert('Por favor preencha o seu nome.');
        if (!validateEmail(email)) return alert('Por favor insira um e-mail válido.');
        if (!service) return alert('Por favor selecione um serviço.');
        if (!message.trim()) return alert('Por favor descreva seu projeto.');

        const phoneDigits = onlyDigits(phone);
        if (whatsappConsent && phoneDigits.length < 10) {
            return alert('Se deseja contato por WhatsApp, informe um telefone válido.');
        }

        setSending(true);

        try {
            const templateParams = {
                name,
                company,
                email,
                phone,
                service,
                message,
                whatsappConsent: whatsappConsent ? 'Sim' : 'Não',
            };

            // Substitua pelos seus IDs do EmailJS
            // Crie as variáveis de ambiente EMAILJS_USER_ID etc ou cole direto (menos seguro)
            const SERVICE_ID = process.env.EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
            const TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
            const USER_ID = process.env.EMAILJS_USER_ID || 'YOUR_USER_ID';

            await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID);

            alert('Mensagem enviada com sucesso! Entraremos em contato em até 24 horas.');
            // limpa formulário
            setName(''); setCompany(''); setEmail(''); setPhone(''); setService(''); setMessage(''); setWhatsappConsent(false);
        } catch (err) {
            console.error(err);
            alert('Erro ao enviar a mensagem. Tente novamente mais tarde.');
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
                            <option value="" disabled className='select-none text-white text-sm bg-[#0F172A]'>Select Service Type *</option>
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

                        <div className='pt-4'>
                            <button type="submit" disabled={sending} className='bg-white p-4 text-xl lg:text-lg w-full rounded-lg hover:cursor-pointer transition duration-300 hover:scale-105'>
                                <span className='font-bold'>{sending ? 'Enviando...' : 'Request a Proposal'}</span>
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
