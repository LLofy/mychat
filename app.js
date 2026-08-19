const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Em vez de usar uma pasta separada, vamos mandar um HTML direto na resposta
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <title>Teste Simples</title>
            <style>
                body { font-family: Arial; padding: 40px; background: #111; color: #fff; text-align: center; }
                h1 { color: #44ff44; }
            </style>
        </head>
        <body>
            <h1>O servidor está funcionando!</h1>
            <p>Se você está vendo esta mensagem, o HTML carregou com sucesso através do Node.js.</p>
        </body>
        </html>
    `);
});

server.listen(3000, () => {
    console.log('Servidor rodando! Abra no navegador: http://localhost:3000');
});