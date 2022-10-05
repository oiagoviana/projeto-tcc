import axios from 'axios'

const api = axios.create({
    baseURL:  'http://localhost:5000'
})

export async function cadastroUser(email, nome, senha, termo) {
    const resposta = await api.post('/usuario/cadastro', {
        email: email,
        nome: nome,
        senha: senha,
        termo: termo
    });
    return resposta.data;
}

export async function loginUser(email, senha) {
    const resposta = await api.post('/usuario/login', {
        email: email,
        senha: senha
    });
    return resposta.data;
}