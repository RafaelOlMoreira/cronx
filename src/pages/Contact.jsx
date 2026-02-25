import React, { useState } from 'react'

import { HiOutlinePhone, HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";

function Contact() {

    const MAX = 500;
    const [text, setText] = useState("");

    function handleChange(e) {
        const v = e.target.value.slice(0, MAX); // limite
        setText(v);
    }

    function handlePaste(e) {
        const paste = (e.clipboardData || window.clipboardData).getData("text");
        const allowed = MAX - text.length;
        if (paste.length > allowed) {
            e.preventDefault();
            const ta = e.target;
            const start = ta.selectionStart;
            const end = ta.selectionEnd;
            const newVal = text.slice(0, start) + paste.slice(0, allowed) + text.slice(end);
            setText(newVal);
        }
    }

    const remaining = MAX - text.length;
    const color =
        remaining === 0 ? "text-red-500" : remaining <= 50 ? "text-amber-500" : "text-[#b7bac0]";

    return (
        <>
            <section className='min-h-min bg-[#0F172A] py-20 px-7'>
                <div className='space-y-2 mb-20 text-center'>
                    <h1 className='text-4xl text-white font-bold'>Let's Build Something Great</h1>
                    <p className='text-[#b7bac0] text-lg px-5'>Tell us about your project and we'll get back within 24 hours.</p>
                </div>
                <div className='space-y-5'>

                    <div className='flex items-center space-x-5 text-white'>
                        <HiOutlinePhone className='size-6' />
                        <div className=''>
                            <p className='text-[#b7bac0] text-md'>Phone</p>
                            <span className='font-semibold text-lg'>+55 31 99247-9530</span>
                        </div>
                    </div>

                    <div className='flex items-center space-x-5 text-white'>
                        <HiOutlineMail className='size-6' />
                        <div className=''>
                            <p className='text-[#b7bac0] text-md'>Email</p>
                            <span className='font-semibold text-lg'>cronx.oficial@gmail.com</span>
                        </div>
                    </div>

                    <div className='flex items-center space-x-5 text-white'>
                        <HiOutlineLocationMarker className='size-6' />
                        <div className=''>
                            <p className='text-[#b7bac0] text-md'>Location</p>
                            <span className='font-semibold text-[#b7bac0] text-lg'>Belo Horizonte, MG, Brazil</span>
                        </div>
                    </div>

                </div>

                <form action="" className='mt-10 space-y-5'>
                    
                    <input type="text" placeholder='Your Name *' className='w-full p-5 border border-[#b7bac0]/50 placeholder:text-[#b7bac0]/80 text-white text-xl rounded-xl' />
                    <input type="text" placeholder='Company Name *' className='w-full p-5 border border-[#b7bac0]/50 placeholder:text-[#b7bac0]/80 text-white text-xl rounded-xl' />
                    <input type="email" placeholder='Email Address *' className='w-full p-5 border border-[#b7bac0]/50 placeholder:text-[#b7bac0]/80 text-white text-xl rounded-xl' />
                    <input type="tel" placeholder='Phone (Optional)' className='w-full p-5 border border-[#b7bac0]/50 placeholder:text-[#b7bac0]/80 text-white text-xl rounded-xl' />
                    
                    <select name="selectService" className='w-full p-5 border border-[#b7bac0]/50 placeholder:text-[#b7bac0]/80 text-white text-xl rounded-xl'>
                        <option disabled className='select-none text-white text-sm bg-[#0F172A]'>Select Service Type *</option>
                        <option className='text-white text-sm bg-[#0F172A]'>Custom Software</option>
                        <option className='text-white text-sm bg-[#0F172A]'>Landing Page</option>
                        <option className='text-white text-sm bg-[#0F172A]'>E-commerce</option>
                        <option className='text-white text-sm bg-[#0F172A]'>Other</option>
                    </select>

                    <div>
                        <textarea
                            value={text}
                            onChange={handleChange}
                            onPaste={handlePaste}
                            maxLength={MAX}
                            rows={6}
                            placeholder='Tell us about your project *'
                            name="aboutProject" className='w-full resize-none p-5 border border-[#b7bac0]/50 placeholder:text-[#b7bac0]/80 text-white text-xl rounded-xl'></textarea>
                        <div className={`py-3 ${color}`}>
                            {text.length}/{MAX} characters
                        </div>
                    </div>
                </form>

                <button className='bg-white p-4 text-xl w-full rounded-lg hover:cursor-pointer transition duration-300 hover:scale-105'>
                    <span className='font-bold'>Request a Proposal</span>
                </button>
                
                <span className='flex justify-center text-[#b7bac0]/80 pt-5'>We respect your privacy. No spam, ever.</span>
            
            </section>
        </>
    )
}

export default Contact
