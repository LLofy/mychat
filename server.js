const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Diz para o servidor usar os arquivos da pasta 'public'
app.use(express.static('public'));

// Quando alguém abre o navegador e se conecta ao servidor
io.on('connection', (socket) => {
    console.log('Um usuário se conectou com o ID:', socket.id);

    // Quando o servidor recebe uma mensagem de um usuário...
    socket.on('chat-message', (data) => {
        // ...ele envia essa mensagem para TODOS os outros usuários conectados (e para quem enviou também)
        io.emit('chat-message', data);
    });

    socket.on('disconnect', () => {
        console.log('Um usuário se desconectou.');
    });
});

// O servidor vai rodar na porta 3000
server.listen(3000, () => {
    console.log('Servidor rodando! Abra no navegador: http://localhost:3000');
});