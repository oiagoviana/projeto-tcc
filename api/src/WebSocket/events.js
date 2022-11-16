import { io } from './socket.js';
import { EnviarMensagem, Mensagens } from '../repository/mensagemRepository.js';

io.on("connection", async (socket) => {

    //recebendo mensagens e enviando para o banco
    socket.on("enviar_mensagem", async (data) => {
        const r = await EnviarMensagem(data.idChat, data.mensagem, data.tipo);
    })

    //listando todas as mensagens para os usuários da conversa
    socket.on("listar_mensagem", async (data) => {
        const r = await Mensagens(data.idChat)
        socket.emit("listar_mensagem", r)
    })
});