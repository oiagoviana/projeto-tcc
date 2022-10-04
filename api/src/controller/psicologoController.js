import { inserirFormulario, listarPsicologos, atualizarFormulario, deletarFormulario } from '../repository/psicologoRepository.js'


import { Router } from 'express'
import multer from 'multer'

const server = Router();


server.get('/api/psicologo', async (req, resp) => {
    try {
        const resposta = await listarPsicologos();
        resp.send(resposta);
        
    } catch (err) {
        resp.status(404).send({
            erro:err.message
        })
        
    }
})

server.post('/psicologo/login', async (req, resp) =>{
    try{
        const {email, senha} = req.body;
        const resposta = Login(emial, senha);

        if (!email.trim())
            throw new Error ('Email é obrigatório!')
        else if (!senha.trim())
            throw new Error('Senha é onbrigatória!')
        else
            resp.status(201).send(resposta);
    }
    catch(err) {
        resp.status(401).send({
            erro: err.message
        });
    }
})

server.post('/api/formulario' , async (req, resp) => {
    try{
        const novoFormulario = req.body;
        if (!novoFormulario.nome)
            throw new Error('Nome é obrigatório!');
            
        if (!novoFormulario.telefone)
            throw new Error('Telefone obrigatório!');
        
        if (!novoFormulario.nascimento)
            throw new Error('Data de nascimento obrigatória!');
            
        if (!novoFormulario.email)
            throw new Error('Email obrigatório!');
            
        if (!novoFormulario.senha)
            throw new Error('Senha obrigatória!');
        
        if (!novaIndicacao.crp)
            throw new Error('CRP obrigatório!');
            
        if (!novoFormulario.cpf)
            throw new Error('CPF obrigatório');
            
        
        const indicacaoInserida = await inserirFormulario(novaIndicacao);
        resp.send(indicacaoInserida);

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }

        
})

server.delete('/api/formulario/:id', async (req, resp) => {
    try {
        const { id } = req.params;

        const resposta = await deletarFormulario(id);
        if (resposta != 1)
            throw new Error('Formulario não pode ser removido.');
        else
            resp.status(204).send();
    } catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})

export default server;