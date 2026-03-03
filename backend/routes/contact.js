// backend/routes/contact.js
const express = require('express');
const { body, validationResult } = require('express-validator');
const nodemailer = require('nodemailer');
const Twilio = require('twilio');

require('dotenv').config();

const router = express.Router();

/* Configure Nodemailer (Gmail SMTP) */
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL_USER, // cronx.oficial@gmail.com
    pass: process.env.MAIL_PASS, // app password
  },
});

/* Configure Twilio */
const twilioClient = Twilio(process.env.TWILIO_ACCOUNT_SID || '', process.env.TWILIO_AUTH_TOKEN || '');

function buildPlainText(form) {
  const yesNo = form.whatsappConsent ? 'Sim' : 'Não';
  return `
Nova demanda recebida:

Nome: ${form.name}
Empresa: ${form.company || '-'}
Email: ${form.email}
Telefone: ${form.phone || '-'}
Serviço: ${form.service}
Deseja retorno via WhatsApp: ${yesNo}

Descrição do projeto:
${form.aboutProject}
  `.trim();
}

function buildHTML(form) {
  const yesNo = form.whatsappConsent ? 'Sim' : 'Não';
  return `
    <h2>Nova demanda recebida</h2>
    <ul>
      <li><strong>Nome:</strong> ${form.name}</li>
      <li><strong>Empresa:</strong> ${form.company || '-'}</li>
      <li><strong>Email:</strong> ${form.email}</li>
      <li><strong>Telefone:</strong> ${form.phone || '-'}</li>
      <li><strong>Serviço:</strong> ${form.service}</li>
      <li><strong>Deseja retorno via WhatsApp:</strong> ${yesNo}</li>
    </ul>
    <h3>Descrição do projeto</h3>
    <p style="white-space:pre-wrap;">${form.aboutProject}</p>
  `;
}

/* POST /api/contact */
router.post(
  '/contact',
  // validações básicas
  body('name').trim().notEmpty().withMessage('Nome é obrigatório'),
  body('email').isEmail().withMessage('E-mail inválido'),
  body('aboutProject').trim().notEmpty().withMessage('Descrição obrigatória'),
  body('service').trim().notEmpty().withMessage('Selecione um serviço'),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    const { name, company, email, phone, service, aboutProject, whatsappConsent } = req.body;

    const form = { name, company, email, phone, service, aboutProject, whatsappConsent };

    const plain = buildPlainText(form);
    const html = buildHTML(form);

    try {
      // 1) Envia e-mail para rafael150305@gmail.com
      await transporter.sendMail({
        from: process.env.MAIL_USER, // cronx.oficial@gmail.com
        to: process.env.TO_EMAIL || 'rafael150305@gmail.com',
        subject: `Nova demanda - ${name} (${service})`,
        text: plain,
        html,
      });

      // 2) Envia WhatsApp via Twilio (mensagem de texto)
      // Twilio espera 'from' e 'to' com prefixo 'whatsapp:'
      if (process.env.TWILIO_WHATSAPP_FROM && process.env.TWILIO_WHATSAPP_TO) {
        const waBody = plain; // já formatado
        await twilioClient.messages.create({
          from: process.env.TWILIO_WHATSAPP_FROM, // ex: 'whatsapp:+1415...'
          to: process.env.TWILIO_WHATSAPP_TO,     // ex: 'whatsapp:+5531992479530'
          body: waBody,
        });
      }

      return res.json({ ok: true, message: 'Enviado com sucesso' });
    } catch (err) {
      console.error('contact send error', err);
      return res.status(500).json({ ok: false, error: 'Erro ao enviar', details: err.message || err });
    }
  }
);

module.exports = router;