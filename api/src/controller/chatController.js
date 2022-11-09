import { Router } from 'express'
import { CriarChat, EnviarMensagemP, EnviarMensagemU, MensagensP, MensagensU, selecionarChatP, selecionarChatP2, selecionarChatU, selecionarChatU2 } from '../repository/chatRepository.js';

const server = Router();


server.post('/api/chatUsu', async (req, resp) => {
    try {
        const mensagem = req.body;


        const resposta = await EnviarMensagemU(mensagem);
        resp.send(resposta);

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
})

server.post('/api/chatPsi', async (req, resp) => {
    try {
        const mensagem = req.body;


        const resposta = await EnviarMensagemP(mensagem);
        resp.send(resposta);

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
})

server.get('/api/chatU/:id', async (req, resp) => {
    try {
        const { id } = req.params

        const resposta = await MensagensU(id);
        resp.send(resposta);



    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
})

server.get('/api/chatP/:id', async (req, resp) => {
    try {
        const { id } = req.params

        const resposta = await MensagensP(id);
        resp.send(resposta);

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
})


server.post('/api/chat', async (req, resp) => {
    try {
        const { usuario, psicologo } = req.query;

        const resposta = await CriarChat(usuario, psicologo);
        resp.send(resposta);


    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/api/chatU', async (req, resp) => {
    try {
        const {id} = req.query
        const resposta = await selecionarChatU(id);
        resp.send(resposta);

    } catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})
server.get('/api/chatU2', async (req, resp) => {
    try {
        const {id} = req.query
        const resposta = await selecionarChatU2(id);
        resp.send(resposta);

    } catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})

server.get('/api/chatP', async (req, resp) => {
    try {
        const {id} = req.query
        const resposta = await selecionarChatP(id);
        resp.send(resposta);

    } catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})

server.get('/api/chatP2', async (req, resp) => {
    try {
        const {id} = req.query
        const resposta = await selecionarChatP2(id);
        resp.send(resposta);

    } catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})

export default server;