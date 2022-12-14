import { API_URL } from './config';

import axios from 'axios'
const api = axios.create({
    baseURL: API_URL
})

export async function mostrarPublicacaoCard() {
    const resposta = await api.get('/admin/publicacao');
    return resposta.data;
}

export async function mostrarPublicacaoId(id) {
    const resposta = await api.get(`/admin/publicacao/${id}`);
    return resposta.data;
}
export async function mostrarPublicacaoUsuId(id) {
    const resposta = await api.get(`/usuario/publicacao/${id}`);
    return resposta.data;
}

export async function inserirPublicacaoUsu(usuario, titulo, descricao){
    const resposta= await api.post('/api/publicacaoUsu', {
        usuario: usuario,
        titulo:titulo,
        descricao:descricao
    });
    return resposta.data;

}

export async function inserirPublicacaoPsi(psicologo, titulo, descricao){
    const resposta= await api.post('/api/publicacaoPsi', {
        psicologo: psicologo,
        titulo:titulo,
        descricao:descricao
    });
    return resposta.data;
    
}


export async function AdicionarImagem(id, imagem){
    const formData= new FormData();
    formData.append('imagem', imagem);
    const r = await api.put(`/api/publicacao/${id}/imagem`, 
    formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        },
    });
    return r.status;
}

export function buscarImagem(imagem){
    return `${api.getUri()}/${imagem}`
}

export async function autorizarPublicacao(id){
    const resposta = await api.put(`/admin/publicacao/${id}`)
    return resposta.status;
    
}
export async function listarComentarioUsu(id){
    const resposta = await api.get(`/usuario/publicacao/comentario/${id}`)
    return resposta.data;
    
}

export async function inserirComentarioUsu(id,usuario, comentario) {
    const resposta = await api.post(`/api/comentarioUsu/${id}`, {
        IDusuario: usuario,
        comentario: comentario
    });

    return resposta.data;
}
export async function inserirComentarioPsi(id, psicologo, comentario) {
    const resposta = await api.post(`/api/comentarioPsi/${id}`, {
        IDpsicologo: psicologo,
        comentario: comentario
    });

    return resposta.data;
}

export async function mostrarPublicacaoFeed() {
    const resposta = await api.get('/usuario/feedpublicacao');
    return resposta.data;
}

export async function listarPublicacaoUsu(id) {
    const resposta = await api.get(`/api/publicacoesUser?id=${id}`);
    return resposta.data;
}

export async function deletarPublicacao(id) {
    const resposta = await api.delete(`/api/publicacao?id=${id}`);
    return resposta.data;
}

export async function atualizarPublicacao(id, titulo, descricao) {
    const resposta = await api.put(`/api/publicacao/${id}`, {
        titulo:titulo,
        descricao:descricao
    });
    return resposta.data;
}