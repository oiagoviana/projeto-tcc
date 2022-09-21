import { Login } from '../repository/admRepository.js'
import { Router } from 'express'

const server = Router();

server.post('/admin/login', async (req, resp) => {

    try {
        const { email, senha } = req.body;

        const resposta = await Login(email, senha);

        
        
        if (!email.trim())
            throw new Error('Email é obrigatório!')

        else if (!senha.trim())
            throw new Error('Senha é obrigatória!')

        else if(!resposta) 
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