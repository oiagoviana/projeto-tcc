import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export async function  listarConversa(psiId, userId) {
    let call = `/chat?psiId=${psiId}&userId=${userId}`;
    if (!psiId || psiId == undefined) {
        call = `/chat?psiId=&userId=${userId}`;
    }
    else if (!userId || userId == undefined) {
        call = `/chat?psiId=${psiId}&userId=`
    }
    const resposta = await api.get(call);
    return resposta.data;
}

export async function getChatInfoById(chatId) {
    const resposta = await api.get(`/chat/search?id=${Number(chatId)}`);
    return resposta.data;
}

export async function createChat(userId, psiId) {
    const resposta = await api.post(`/chat?userId=${userId}&psiId=${psiId}`);
    return resposta.data;
}

export async function aceitarChat(chatId) {
    const resposta = await api.put(`/chat/?chatId=${chatId}`);
    return resposta.data
}

export async function deletarChat(chatId) {
    const resposta = await api.delete(`/chat/?chatId=${chatId}`);
    return resposta.data;
}