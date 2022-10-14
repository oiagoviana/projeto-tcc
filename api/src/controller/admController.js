import { listarContasPsi, listarContasUsuarios, listarPublicaçõesFeitas, Login } from '../repository/admRepository.js'
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
            resp.status(201).send(resposta);
    } 
    
    catch(err) {
        resp.status(401).send({
            erro: err.message
        });
    }

})

server.get('/admin/listarInfos', async (req, resp) => {
    try{
        const usuario = await listarContasUsuarios();
        const publicacoes = await listarPublicaçõesFeitas();
        const profissionais = await listarContasPsi();
        resp.send({
            info:{
            contasCriadas: usuario, 
            publiFeitas: publicacoes, 
             psiCriados: profissionais
            }
            });


    } catch(err){
        resp.status(401).send({
            erro: err.message
        })
    }
})

export default server;