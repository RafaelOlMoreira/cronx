// backend/index.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const contactRoutes = require('./routes/contact');

const app = express();

// CORS: permite a origem definida em CLIENT_URL (ou localhost para dev)
const clientUrl = process.env.CLIENT_URL || 'http://localhost:5173';
app.use(cors({ origin: clientUrl, credentials: true }));

app.use(express.json());

// health route (útil para Render e testes)
app.get('/api/health', (req, res) => res.json({ ok: true, ts: Date.now() }));

// suas rotas
app.use('/api', contactRoutes);

// porta via env (Render define PORT automaticamente)
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Backend running on ${PORT}`));