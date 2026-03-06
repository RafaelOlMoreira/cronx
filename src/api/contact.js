// /api/contact.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

    const { name, company, email, phone, service, message, whatsappConsent } = req.body || {};

    // server-side validation
    if (!name || !email || !service || !message) {
        return res.status(400).json({ error: 'Missing required fields' });
    }
    if (message.length > 500) {
        return res.status(400).json({ error: 'Message too long' });
    }
    // basic phone validation (accepts formatted (XX) XXXXX-XXXX or empty)
    if (phone && !/^\(\d{2}\)\s?\d{4,5}-\d{4}$/.test(phone)) {
        // não é fatal, mas avisa
        console.warn('Phone format unexpected:', phone);
    }

    try {
        let transporter;
        if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
            transporter = nodemailer.createTransport({
                host: process.env.SMTP_HOST,
                port: Number(process.env.SMTP_PORT || 587),
                secure: process.env.SMTP_SECURE === 'true', // true for 465, false for others
                auth: {
                    user: process.env.SMTP_USER,
                    pass: process.env.SMTP_PASS,
                }
            });
        } else {
            // fallback: Ethereal for testing (no real emails sent)
            const testAccount = await nodemailer.createTestAccount();
            transporter = nodemailer.createTransport({
                host: 'smtp.ethereal.email',
                port: 587,
                auth: { user: testAccount.user, pass: testAccount.pass }
            });
        }

        const mailOptions = {
            from: `"Cronx Solutions" <${process.env.SMTP_USER || 'no-reply@example.com'}>`,
            to: process.env.TO_EMAIL || process.env.SMTP_USER,
            subject: `Novo contato: ${name} — ${service}`,
            text: `
Nome: ${name}
Empresa: ${company || '-'}
Email: ${email}
Telefone: ${phone || '-'}
Contato por WhatsApp: ${whatsappConsent ? 'Sim' : 'Não'}
Serviço: ${service}
Mensagem:
${message}
      `,
            html: `<h2>Novo contato</h2>
<ul>
<li><strong>Nome:</strong> ${name}</li>
<li><strong>Empresa:</strong> ${company || '-'}</li>
<li><strong>Email:</strong> ${email}</li>
<li><strong>Telefone:</strong> ${phone || '-'}</li>
<li><strong>Contato por WhatsApp:</strong> ${whatsappConsent ? 'Sim' : 'Não'}</li>
<li><strong>Serviço:</strong> ${service}</li>
</ul>
<p><strong>Mensagem:</strong></p><p>${message.replace(/\n/g, '<br/>')}</p>`
        };

        const info = await transporter.sendMail(mailOptions);

        // se usar Ethereal, devolve preview URL para debug
        const preview = nodemailer.getTestMessageUrl(info);

        return res.status(200).json({ message: 'Mensagem enviada com sucesso', preview });
    } catch (err) {
        console.error('Mail error:', err);
        return res.status(500).json({ error: 'Erro ao enviar email' });
    }
}