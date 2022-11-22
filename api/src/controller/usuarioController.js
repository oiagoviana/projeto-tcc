import { Cadastro, letraNomeUsuario, Login, SolicitadoUser } from '../repository/usuarioRepository.js'
import { Router } from 'express'

const server = Router();

server.post('/usuario/cadastro', async (req, resp) => {
    try {
        const usuario = req.body;
        
        

        if (!usuario.email.trim())
            throw new Error('Email é obrigatório!')

        if (!usuario.nome.trim())
            throw new Error('Nome é obrigatório!')

        if (!usuario.senha.trim())
            throw new Error('Senha é obrigatória!');

        if (!usuario.telefone.trim())
            throw new Error('Telefone é obrigatório!');

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
        resp.send(resposta);
    }
    catch(err) {
        resp.status(401).send({
            erro: err.message
        });
    }
})

server.get('/usuario/letra/nomeUser', async (req, resp) => {
    try {
        const { id } = req.query;
        const resposta = await letraNomeUsuario(id);

        resp.status(201).send(resposta);
    } catch(err) {
        resp.status(401).send({
            erro: err.message
        })
    }
})


export default server;