import { Router } from 'express'
import multer from 'multer';

import { alterarImagemUsuario, autorizarPublicacao, fazerComentario ,listarPublicacaoCard, listarPublicacaoId, PublicarPsi, PublicarUsuario } from '../repository/publicacaoRepository.js';


const server = Router();
const upload = multer({dest: 'storage/imagensPublicacao'})

server.get('/admin/publicacao', async (req, resp) => {
    try {
        const resposta = await listarPublicacaoCard();
        resp.send(resposta);


    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})

server.get('/admin/publicacao/:id', async (req, resp) => {
    try {
        const { id } = req.params;

        const publicacao = await listarPublicacaoId(id);

        resp.send(publicacao);


    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.post('/api/publicacaoUsu', async (req, resp) =>{

    try{
        const novaPublicacao = req.body;
       
        if(!novaPublicacao.usuario){
            throw new Error ('É necessário estar logado para publicar!')
        }    
        if(!novaPublicacao.titulo){
            throw new Error ('O título é obrigatório!!')
        }
        if(!novaPublicacao.descricao){
            throw new Error ('A descrição é obrigatória!!')
        }
        const resposta = await PublicarUsuario(novaPublicacao);
        console.log(resposta);
            resp.status(201).send(resposta);
        
    }
    catch(err) {
        resp.status(401).send({
            erro: err.message
        });
    }
})

server.post('/api/publicacaoPsi', async (req, resp) =>{

    try{
        const novaPublicacao = req.body;
       
        if(!novaPublicacao.psicologo){
            throw new Error ('É necessário estar logado para publicar!')
        }    
        if(!novaPublicacao.titulo){
            throw new Error ('O título é obrigatório!!')
        }
        if(!novaPublicacao.descricao){
            throw new Error ('A descrição é obrigatória!!')
        }
        const resposta = await PublicarPsi(novaPublicacao);
        console.log(resposta);
            resp.status(201).send(resposta);
        
    }
    catch(err) {
        resp.status(401).send({
            erro: err.message
        });
    }
})

server.put('/admin/publicacao/:id', async (req, resp) => {
    try {
        const id = Number(req.params.id)
        const resposta = await autorizarPublicacao(id);
        if(resposta != 1)
            throw new Error('Publicação não pôde ser aprovada')
        else
            resp.sendStatus(204)


    } catch(err) {
        resp.status(404).send({
            erro: err.message
        });
    }
})

server.put('/api/publicacao/:id/imagem', upload.single('imagem'), async (req,resp) => {
    try{
        if (!req.file)
            throw new Error('Escolha a imagem da publicação!')
        const { id } = req.params;
        const imagem = req.file.path;
		
        const resposta = await alterarImagemUsuario(imagem, id)
        if(resposta != 1) 
			throw new Error('A imagem não pôde ser salva.')
        resp.status(204).send();
    } catch(err){
		console.log(err)
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.post('/api/comentario', async (req, resp) =>{
    try{
        const novoComentario = req.body;
       
            console.log(novoComentario);
        if(!novoComentario.IDusuario && !novoComentario.IDpsicologo){
            throw new Error ('É necessário estar logado para comentar!!!')
        }
        if(!novoComentario.comentario){
            throw new Error ('É necessário comentar!!')
        }
          const resposta = await fazerComentario(novoComentario);
            resp.status(201).send(resposta);
        
    }
    catch(err) {
        resp.status(401).send({
            erro: err.message
        });
    }
})




export default server;