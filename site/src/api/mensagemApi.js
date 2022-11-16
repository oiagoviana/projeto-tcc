import axios from 'axios'

const api = axios.create({
    baseURL:  'http://localhost:5000'
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
