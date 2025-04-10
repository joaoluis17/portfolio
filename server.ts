require('dotenv').config();
import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: 'https://joao-luis-prado.netlify.app/' }));
app.use(express.json());

dotenv.config();

const transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

app.post('/send-email', async (req, res) => {
    const { name, email, phone, message } = req.body;

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'jluispprado@gmail.com',
        subject: `Novo contato de ${name}`,
        text: `Nome: ${name}\nE-mail: ${email}\nTelefone: ${phone || 'Não informado'}\nMensagem: ${message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: 'E-mail enviado com sucesso!' });
    } catch (error) {
        console.error('Erro ao enviar e-mail:', error);
        res.status(500).json({ success: false, message: 'Erro ao enviar e-mail' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
