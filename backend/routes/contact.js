// backend/routes/contact.js
const express = require('express');
const { body, validationResult } = require('express-validator');
const nodemailer = require('nodemailer');

require('dotenv').config();

const router = express.Router();

/* Nodemailer transporter */
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL_USER || '',
    pass: process.env.MAIL_PASS || '',
  },
});

/* verifica credenciais no startup (loga problema se houver) */
transporter.verify((err, success) => {
  if (err) console.error('Nodemailer verify error:', err && (err.message || err));
  else console.log('Nodemailer OK');
});

/* helper: sanitize phone to digits only and ensure +55 if not provided
   returns digits string suitable for wa.me (no plus sign). */
function normalizePhoneForWa(phone) {
  if (!phone) return null;
  const digits = String(phone).replace(/\D/g, '');
  if (!digits) return null;
  // if already starts with country code 55, keep
  if (digits.startsWith('55')) return digits;
  // otherwise assume Brazil and prefix 55
  // (adjust logic if you expect other countries)
  return `55${digits}`;
}

/* build clean HTML e texto para o e-mail (mais profissional) */
function buildEmailContent(form) {
  const wantWhatsapp = form.whatsappConsent ? 'Sim' : 'Não';
  const phoneDisplay = form.phone || '-';
  const html = `
  <div style="font-family: Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; color:#0f172a;">
    <div style="background:#ffffff; padding:24px; border-radius:8px; max-width:720px;">
      <div style="display:flex; align-items:center; gap:16px;">
        <!-- logo (substitua URL se precisar) -->
        <img src="${process.env.COMPANY_LOGO_URL || ''}" alt="Company" style="height:48px; object-fit:contain;"/>
        <h2 style="margin:0; color:#0f172a;">Nova demanda recebida — CRONX</h2>
      </div>

      <p style="color:#475569; margin-top:12px;">Uma nova solicitação de contato foi enviada pelo site. Abaixo estão os detalhes:</p>

      <table style="width:100%; border-collapse:collapse; margin-top:8px;">
        <tbody>
          <tr>
            <td style="padding:8px 0; width:160px; color:#64748b;"><strong>Nome</strong></td>
            <td style="padding:8px 0;">${form.name}</td>
          </tr>
          <tr>
            <td style="padding:8px 0; color:#64748b;"><strong>Empresa</strong></td>
            <td style="padding:8px 0;">${form.company || '-'}</td>
          </tr>
          <tr>
            <td style="padding:8px 0; color:#64748b;"><strong>E-mail</strong></td>
            <td style="padding:8px 0;">${form.email}</td>
          </tr>
          <tr>
            <td style="padding:8px 0; color:#64748b;"><strong>Telefone</strong></td>
            <td style="padding:8px 0;">${phoneDisplay}</td>
          </tr>
          <tr>
            <td style="padding:8px 0; color:#64748b;"><strong>Serviço</strong></td>
            <td style="padding:8px 0;">${form.service}</td>
          </tr>
          <tr>
            <td style="padding:8px 0; color:#64748b;"><strong>Retorno por WhatsApp?</strong></td>
            <td style="padding:8px 0;">${wantWhatsapp}</td>
          </tr>
        </tbody>
      </table>

      <div style="margin-top:16px;">
        <h4 style="margin:0 0 8px 0; color:#0f172a;">Descrição do projeto</h4>
        <div style="background:#f8fafc; padding:12px; border-radius:6px; color:#0f172a; white-space:pre-wrap;">${form.aboutProject}</div>
      </div>

      ${form.whatsappConsent && form.phone ? `
      <div style="margin-top:18px;">
        <p style="margin:0 0 8px 0; color:#475569;">Responder via WhatsApp:</p>
        <a href="${form.waLink}" target="_blank" rel="noopener noreferrer" style="display:inline-block; background:#00B7FF; color:white; padding:10px 14px; border-radius:8px; text-decoration:none; font-weight:600;">
          Abrir WhatsApp (responder o cliente)
        </a>
      </div>
      ` : ''}

      <p style="color:#94a3b8; font-size:12px; margin-top:18px;">Recebido em ${new Date().toLocaleString()}</p>
    </div>
  </div>
  `;

  const text = `
Nova demanda recebida:

Nome: ${form.name}
Empresa: ${form.company || '-'}
Email: ${form.email}
Telefone: ${form.phone || '-'}
Serviço: ${form.service}
Deseja retorno por WhatsApp: ${wantWhatsapp}

Descrição:
${form.aboutProject}
  `.trim();

  return { html, text };
}

/* POST /api/contact */
router.post(
  '/contact',
  body('name').trim().notEmpty().withMessage('Nome é obrigatório'),
  body('email').isEmail().withMessage('E-mail inválido'),
  body('aboutProject').trim().notEmpty().withMessage('Descrição do projeto é obrigatória'),
  body('service').trim().notEmpty().withMessage('Serviço é obrigatório'),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    try {
      const { name, company, email, phone, service, aboutProject, whatsappConsent } = req.body;

      // prepara link wa.me apenas para uso interno (para que o destinatário consiga abrir o whatsapp e responder o cliente)
      let waLink = null;
      if (whatsappConsent && phone) {
        const normalized = normalizePhoneForWa(phone);
        if (normalized) {
          // mensagem pré-preenchida para o atendente iniciar o contato
          const prefill = encodeURIComponent(`Olá ${name}, aqui é da CRONX. Recebemos sua solicitação sobre "${service}". Podemos conversar sobre os detalhes?`);
          waLink = `https://wa.me/${normalized}?text=${prefill}`;
        }
      }

      const form = { name, company, email, phone, service, aboutProject, whatsappConsent, waLink };

      const { html, text } = buildEmailContent(form);

      const mailOptions = {
        from: process.env.MAIL_USER,
        to: process.env.TO_EMAIL || 'rafael150305@gmail.com',
        subject: `Nova demanda - ${name} (${service})`,
        text,
        html,
      };

      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent:', info && info.messageId);

      return res.json({ ok: true, message: 'Enviado e-mail com sucesso' });
    } catch (err) {
      console.error('contact send error:', err && (err.stack || err.message || err));
      return res.status(500).json({ ok: false, error: 'Erro ao enviar e-mail', details: err && (err.message || err) });
    }
  }
);

module.exports = router;