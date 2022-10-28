    import axios from 'axios'

const api = axios.create({
    baseURL:  'http://localhost:5000'
})

export async function addIndicacao(nome, cidade, cep, endereco, classificacao, atendimento, categoria) {
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

export function buscarImagem(imagem) {
    console.log(imagem);
	return `${api.getUri()}/${imagem}`;
}

export async function listarCategoria() {
    const resposta = await api.get('/api/categoria');
    return resposta.data;
}   

export async function alterarIndicacao (id, nome, cidade, cep, endereco, classificacao, atendimento, categoria) {
    const resposta = await api.put (`/api/indicacao/${id}`, {
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

export async function deletarIndicacao (id) {
    const resposta = await api.delete (`/api/indicacao/${id}`);
    return resposta.data;
}

export async function consultarIndicacoesPorId (id) {
    const resposta = await api.get (`/api/indicacao/consulta/${id}`);
    return resposta.data;
}

export async function consultarIndicacoes () {
    const resposta = await api.get ('/api/indicacao/consulta')
    return resposta.data;
}