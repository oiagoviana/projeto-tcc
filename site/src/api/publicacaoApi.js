import axios from 'axios'

const api = axios.create({
    baseURL:  'http://localhost:5000'
})


export async function listarPublicacao() {
    const resposta = await api.get('/admin/publicacao');
    return resposta.data;
}

export async function fazerComentarioUsu() {
    const resposta = await api.post('/api/comentario', {
        id: id,
        comentario: comentario

    });

    return resposta.data;
    
}
