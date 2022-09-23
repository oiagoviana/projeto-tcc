import axios from 'axios'

const api = axios.create({
    baseURL:  'http://localhost:5000'
})

export async function addProduto(nome, cidade, cep, endereco, classificacao, atendimento, categoria) {
    const resposta = await api.post('/api/indicacao', {
        nome: nome,
        cidade: cidade,
        cep: cep,
        endereco: endereco,
        classificacao: classificacao,
        atendimento: atendimento,
        categoria: categoria
    });

    return resposta.data;
}

export async function alterarImagemIndicacao(id, imagem) {
    const formData = new FormData();
    formData.append('indicacao', imagem);
    const resposta = await api.put(`/api/indicacao/${id}/imagem`, formData, {
        headers: {
            "Content-Type":"multipart/form/data"
        },
    })
    return resposta.status; 
}

export async function listarCategoria() {
    const resposta = await api.get('/api/categoria');
    return resposta.data;
}   