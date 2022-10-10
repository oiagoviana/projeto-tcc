import { Cadastro, Login } from '../repository/usuarioRepository.js'
import { Router } from 'express'

const server = Router();

server.post('/usuario/cadastro', async (req, resp) => {
    try {
        const {email, nome, senha, termo} = req.body;
        
        const resposta = await Cadastro(email, nome, senha, termo);

        if (!email.trim())
            throw new Error('Email é obrigatório!')

        else if (!nome.trim())
            throw new Error('Nome é obrigatório!')

        else if (!senha.trim())
            throw new Error('Senha é obrigatória!')

        else if(!resposta) 
            throw new Error('Cadastro inválido!');

        else
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


export default server;