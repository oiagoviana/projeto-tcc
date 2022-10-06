import axios from 'axios'

const api = axios.create({
    baseURL:  'http://localhost:5000'
})

export async function loginPsicologo(email, senha) {
    const resposta = await api.post('/api/psicologo/login',{
        email: email,
        senha: senha
    });
    return resposta.data;

}

export async function listarPsicologo() {
    const resposta = await api.get('/api/psicologo');
    return resposta.data;
}

export async function formularioPsi(nome, telefone, nascimento, email, senha, crp, cpf){
    const resposta = await api.post('/api/formulario',{
        nome:nome,
        telefone: telefone,
        nascimento: nascimento,
        email: email,
        senha: senha,
        crp: crp,
        cpf: cpf
    });
    return resposta.data;
}