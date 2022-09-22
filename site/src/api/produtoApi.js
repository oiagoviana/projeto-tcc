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