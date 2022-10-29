import axios from 'axios'

const api = axios.create({
    baseURL:  'http://localhost:5000'
})


export async function mostrarPublicacaoCard() {
    const resposta = await api.get('/admin/publicacao');
    return resposta.data;
}

export async function mostrarPublicacaoId(id) {
    const resposta = await api.get(`/admin/publicacao/${id}`);
    return resposta.data;
}

export async function inserirPublicacaoUsuario(usuario, titulo, descricao){
    const resposta= await api.post('/usuario/publicacoes', {
        usuario:usuario,
        titulo:titulo,
        descricao:descricao
    });
    return resposta.data;
    
}
export async function AdicionarImagemUsuario (id, imagem){
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

export async function inserirComentario(usuario, comentario) {
    const resposta = await api.post('/api/comentario', {
        usuario: usuario,
        comentario: comentario
    });

    return resposta.data;
}