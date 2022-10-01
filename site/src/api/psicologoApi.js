import axios from 'axios'

const api = axios.create({
    baseURL:  'http://localhost:5000'
})

export async function listarPsicologo() {
    const resposta = await api.get('/api/psicologo');
    return resposta.data;
}