// /api/send-email.js
// Versão Node serverless que chama a API REST do EmailJS
// Não exponha estas variáveis no frontend.

const fetch = (...args) => import('node-fetch').then(({ default: f }) => f(...args));

export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

    try {
        const { name, company, email, phone, service, message, whatsappConsent } = req.body || {};

        // validação básica
        if (!name || !email || !service || !message) {
            return res.status(400).json({ error: 'Campos obrigatórios faltando' });
        }
        if (message.length > 500) {
            return res.status(400).json({ error: 'Mensagem excede 500 caracteres' });
        }

        // carregando variáveis do ambiente (SÓ no servidor)
        const SERVICE_ID = process.env.EMAILJS_SERVICE_ID;
        const TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID;
        const USER_ID = process.env.EMAILJS_USER_ID; // user_id / secret - fique à vontade para nomear como preferir

        if (!SERVICE_ID || !TEMPLATE_ID || !USER_ID) {
            console.error('Missing EMAILJS env vars');
            return res.status(500).json({ error: 'Configuração de email não encontrada' });
        }

        const template_params = {
            name,
            company,
            email,
            phone,
            service,
            message,
            whatsappConsent: whatsappConsent ? 'Sim' : 'Não',
            submittedAt: new Date().toLocaleString()
        };

        const payload = {
            service_id: SERVICE_ID,
            template_id: TEMPLATE_ID,
            user_id: USER_ID,
            template_params
        };

        const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            const text = await response.text();
            console.error('EmailJS API error', response.status, text);
            return res.status(502).json({ error: 'Erro ao enviar email (EmailJS)' });
        }

        return res.status(200).json({ ok: true });
    } catch (err) {
        console.error('Server error', err);
        return res.status(500).json({ error: 'Erro interno do servidor' });
    }
}