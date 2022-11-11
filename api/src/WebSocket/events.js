import { io } from './socket.js';
import { EnviarMensagem, Mensagens } from '../repository/chatRepository.js'

io.on("connection", async (socket) => {

    socket.on("enviarmensagem", async (data) => {
        const r = await EnviarMensagem(data.mensagem);
    })

    socket.on("listarmensagem", async (data) => {
        const r = await Mensagens(data.id)
        
    })







})