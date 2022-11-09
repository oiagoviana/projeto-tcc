import axios from 'axios'

const api = axios.create({
    baseURL:  'http://localhost:5000'
})

export async function SendMessageU(id, mensagem) {
    const resposta = await api.post('/api/chatUsu', {
        id: id,
        mensagem:mensagem
    })

    return resposta.data;
}

export async function SendMessageP(id, mensagem) {
    const resposta = await api.post('/api/chatPsi', {
        id: id,
        mensagem:mensagem
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