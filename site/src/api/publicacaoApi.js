import axios from 'axios'

const api = axios.create({
    baseURL:  'http://localhost:5000'
})


export async function listarPublicacaoUsuario() {
    const resposta = await api.get('/usuario/publicacao');
    return resposta.data;
}


export async function amostrarPublicacao(id) {
    const resposta = await api.get('/admin/publicacao/' + id);
    return resposta.data;
}



export async function listarPublicacaoId(id) {
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

export async function autorizarPublicacaoUsuario(id){
    const resposta = await api.put(`/admin/aprovar/publicacao/${id}`)
    return resposta.status;
    
}   

    
    

