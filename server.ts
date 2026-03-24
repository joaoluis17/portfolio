import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ CORS corrigido (sem barra no final)
app.use(cors({
    origin: ['http://localhost:5173', 'https://joao-luis-prado.netlify.app'],
    methods: ['POST'],
}));

app.use(express.json());

// ✅ Configuração do transporter
const transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // ⚠️ use senha de aplicativo
    },
});

// ✅ Rota principal
app.post('/send-email', async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;

        if (!name || !email || !message) {
            res.status(400).json({
                success: false,
                message: 'Nome, e-mail e mensagem são obrigatórios',
            });
            return;
        }

        const mailOptions = {
            from: `"Portfolio - ${name}" <${process.env.EMAIL_USER}>`,
            to: 'jluispprado@hotmail.com',
            replyTo: email,
            subject: `Novo contato de ${name}`,
            text: `
Nome: ${name}
E-mail: ${email}
Telefone: ${phone || 'Não informado'}

Mensagem:
${message}
            `,
        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({
            success: true,
            message: 'E-mail enviado com sucesso!',
        });

    } catch (error: any) {
        console.error('🔥 Erro detalhado:', error);

        res.status(500).json({
            success: false,
            message: 'Erro ao enviar e-mail',
        });
    }
});

// ✅ Health check (importante pra deploy)
app.get('/', (req, res) => {
    res.send('API funcionando 🚀');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});