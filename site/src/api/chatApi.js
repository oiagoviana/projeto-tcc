import axios from 'axios'

const api = axios.create({
    baseURL:  'http://localhost:5000'
})

export async function SendMessageU(id, mensagem, tipo) {
    const resposta = await api.post('/api/chatM', {
        id: id,
        mensagem:mensagem,
        tipo:tipo
    })

    return resposta.data;
}

export async function listarConversasU(id) {
    const resposta = await api.get(`/api/chatU?id=${Number(id)}`);
    return resposta.data;
}
export async function listarConversasP(id) {
    const resposta = await api.get(`/api/chatP?id=${Number(id)}`);
    return resposta.data;
}

export async function listarConversasU2(id) {
    const resposta = await api.get(`/api/chatU2?id=${Number(id)}`);
    return resposta.data;
}
export async function listarConversasP2(id) {
    const resposta = await api.get(`/api/chatP2?id=${Number(id)}`);
    return resposta.data;
}

export async function listarPorNome(id) {
    const resposta = await api.get(`/api/chat/nome?id=${Number(id)}`);
    return resposta.data;
}