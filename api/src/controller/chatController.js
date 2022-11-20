import { Router } from 'express'
import { CriarChat, psiConversation, searchConversationbyId, userConversations, aceitarChat, excluirChat, verificarChat } from '../repository/chatRepository.js';

const server = Router();

server.get('/chat/search', async (req, res) => {
    try {
        const { id } = req.query;
        const r = await searchConversationbyId(id);
        res.send(r);
    } catch (err) {
        res.status(401).send({
            erro: err.message
        })
    }
})

server.get('/chat', async (req, res) => {
    try {
        const { psiId, userId } = req.query;

        if (!psiId && !userId) {
            throw new Error('Você não passou nenhum parâmetro');
        }

        if (psiId && !userId) {
            const resposta = await psiConversation(Number(psiId));
            if (!resposta || resposta == undefined) {
                throw new Error("Nenhum usuário criou uma conversa ainda.")
            } else {
                res.send(resposta);
            }

        } else if (userId && !psiId) {
            const resposta = await userConversations(Number(userId));
            if (!resposta || resposta == undefined) {
                throw new Error("Você não tem nenhuma conversa.")
            }
            else {
                res.send(resposta);
            }
        }
        else if (userId && psiId) {
            throw new Error("Você não pode passar os 2 parâmetros ao mesmo tempo.")
        }
    } catch (err) {
        res.status(401).send({
            erro: err.message
        })
    }
})

server.post('/chat', async (req, res) => {
    try {
        const { userId, psiId } = req.query;
        const resposta = await CriarChat(Number(userId), Number(psiId));
        res.sendStatus(200);
    } catch (err) {
        res.status(401).send({
            erro: err.message
        })
    }
})

server.put('/chat', async (req, res) => {
    try {
        const { chatId } = req.query;

        if (!chatId || chatId === undefined)
            throw new Error("Você não passou nenhum parâmetro.");

        const resposta = await aceitarChat(Number(chatId));
        res.sendStatus(200);

    } catch (err) {
        res.status(401).send({
            erro: err.message
        })
    }
})

server.delete('/chat', async (req, res) => {
    try {
        const { chatId } = req.query;

        if (!chatId || chatId === undefined)
            throw new Error("Você não passou nenhum parâmetro.");

        const resposta = await excluirChat(Number(chatId));
        res.sendStatus(200);

    } catch (err) {
        res.status(401).send({
            erro: err.message
        })
    }
})

server.get('/chat/verificar', async (req, resp) => {
    try {
        const { psiId, userId } = req.query;

        const resposta = await verificarChat(psiId, userId);
        resp.send(resposta);
    } catch(err) {
        resp.status(401).send({
            erro: err.message
        })
    }
})

export default server;