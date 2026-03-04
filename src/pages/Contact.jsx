import React, { useState } from 'react'

import { HiOutlinePhone, HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";

const MAX = 500;

function formatPhone(value) {
    const digits = value.replace(/\D/g, '').slice(0, 11);
    if (digits.length <= 2) return `(${digits}`;
    if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

function Contact() {

    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [service, setService] = useState('selectService');
    const [message, setMessage] = useState('');
    const [whatsappConsent, setWhatsappConsent] = useState(false);
    const [sending, setSending] = useState(false);

    const counterColor =
        message.length >= MAX ? 'text-red-500' :
            message.length > MAX * 0.9 ? 'text-amber-500' :
                'text-[#b7bac0]';

    async function handleSubmit(e) {
        e.preventDefault();
        if (!name.trim() || !email.trim() || !message.trim() || service === 'selectService') {
            alert('Por favor preencha os campos obrigatórios.');
            return;
        }
        setSending(true);
        try {
            const payload = { name, company, email, phone, service, aboutProject: message, whatsappConsent };
            // SE você não configurou proxy no Vite, substitua por: 'http://localhost:4000/api/contact'
            const resp = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            const text = await resp.text();
            let json;
            try { json = JSON.parse(text); } catch { json = null; }

            console.log('POST /api/contact status', resp.status, json || text);

            if (resp.ok) {
                alert('Mensagem enviada com sucesso — entraremos em contato em breve.');
                setName(''); setCompany(''); setEmail(''); setPhone(''); setService('selectService'); setMessage(''); setWhatsappConsent(false);
            } else {
                alert('Erro: ' + (json?.error || text || resp.status));
            }
        } catch (err) {
            console.error('Fetch error:', err);
            alert('Erro ao enviar. Verifique a conexão.');
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
