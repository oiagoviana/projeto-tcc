import { response, Router } from 'express'
import {EnviarMensagem, Mensagens} from '../repository/chatRepository.js';

const server = Router();


server.get('/mensagem', async (req, res) => {
    try {
        const { idChat } = req.query;
        const resposta = await Mensagens(Number(idChat));
        res.send(r);


    } catch (err) {
        res.send({
            erro: err.message
        })
    }
})

server.post('/mensagem', async (req, res) => {
    try {
        const { idChat, tipo } = req.query;
        const { message } = req.body;

        if (message.message.trim())
            throw new Error('Não é possível enviar uma mensagem vazia');

        const resposta = await EnviarMensagem(tipo, idChat, message);
        res.sendStatus(200);
    } catch (err) {
        res.send({
            erro:err.message
        })
    }
})