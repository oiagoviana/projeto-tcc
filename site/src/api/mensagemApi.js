import { API_URL } from './config';

import axios from 'axios'
const api = axios.create({
    baseURL: API_URL
})

export async function SendMessage(chatId, mensagem,tipo) {
    const resposta = await api.post(`/mensagem?idChat=${chatId}&tipo=${tipo}`, {
        mensagem: mensagem,
    })
    return resposta.data;
}

export async function listarMensagem(chatId) {
    const resposta = await api.get(`/mensagem?id=${chatId}`);
    return resposta.data;
}
