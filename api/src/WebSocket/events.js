import { io } from './socket.js';
import { EnviarMensagem, Mensagens } from '../repository/chatRepository.js'

io.on("connection", async (socket) => {

    socket.on("enviar_mensagem", async (data) => {
        const r = await EnviarMensagem(data.mensagem);
    })

    socket.on("listar_mensagem", async (data) => {
        const r = await Mensagens(data.id)
        socket.emit("listar_mensagem", r)
    })
});