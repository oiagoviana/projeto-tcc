import { Cadastro, Login, SolicitadoUser } from '../repository/usuarioRepository.js'
import { Router } from 'express'

const server = Router();

server.post('/usuario/cadastro', async (req, resp) => {
    try {
        const usuario = req.body;
        
        

        /*if (!email.trim())
            throw new Error('Email é obrigatório!')

        if (!nome.trim())
            throw new Error('Nome é obrigatório!')

        if (!senha.trim())
            throw new Error('Senha é obrigatória!');

        if (!telefone.trim())
            throw new Error('Telefone é obrigatório!')

        if(!resposta) 
            throw new Error('Cadastro inválido!');*/

            const resposta = await Cadastro(usuario);
            resp.send(resposta);
    }
    catch(err) {
        resp.status(401).send({
            erro: err.message
        });
    }
})

server.post('/usuario/login', async (req, resp) => {
    try {
        const {email, senha} = req.body;
        const resposta = await Login(email, senha);

        if (!email.trim())
            throw new Error('Email é obrigatório!');

        else if (!senha.trim())
            throw new Error('Senha é obrigatória!');

        else if (!resposta)
            throw new Error('Usuário inválido!');

        else
            resp.send(resposta);
    }
    catch(err) {
        resp.status(401).send({
            erro: err.message
        });
    }
})

server.get('/usuario/solicitacoes', async (req, resp) => {
    try {
        const {id} = req.query;
        
        const resposta = await SolicitadoUser(id);
        console.log(id);
        resp.send(resposta);
    }
    catch(err) {
        resp.status(401).send({
            erro: err.message
        });
    }
})


export default server;