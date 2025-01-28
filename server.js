require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Rota para envio de e-mails
app.post('/send-email', async (req, res) => {
    const { name, email, phone, message } = req.body;

    const transporter = nodemailer.createTransport({
        host: 'smtp-mail.outlook.com',
        port: 587,
        secure: false, // Usa TLS (não SSL)
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD, // A senha de aplicativo gerada
        },
    });

    // Conteúdo do e-mail
    const mailOptions = {
        from: process.env.EMAIL, // Sempre o e-mail configurado
        replyTo: email, // E-mail do usuário como "responder para"
        to: 'jluispprado@hotmail.com', // Seu e-mail que receberá as mensagens
        subject: `Nova mensagem de ${name}`,
        text: `
          Nome: ${name}
          Email: ${email}
          Telefone: ${phone || 'Não informado'}
          Mensagem: ${message}
        `,
    };

    try {
        // Enviando o e-mail
        await transporter.sendMail(mailOptions);
        res.status(200).send('E-mail enviado com sucesso!');
    } catch (error) {
        console.error('Erro ao enviar e-mail:', error);
        res.status(500).send('Falha ao enviar o e-mail.');
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
