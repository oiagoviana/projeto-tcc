import axios from 'axios'

const api = axios.create({
    baseURL:  'http://localhost:5000'
})

export async function addProduto(produto) {
    const resposta = await api.post('/api/indicacao', {
        nome: produto.nome,
        cidade: produto.cidade,
        cep: produto.cep,
        endereco: produto.endereco,
        classificacao: produto.classificacao,
        atendimento: produto.atendimento,
        categoria: produto.categoria
    });

    return resposta.data;
}