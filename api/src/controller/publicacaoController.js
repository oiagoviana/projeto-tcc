import { Router } from 'express'
import multer from 'multer';
import { alterarImagemPsicologo, listarPublicacoesPsicologoId, listarPublicacoesUsuarioId, autorizarPublicacaoUsuario, fazerComentario, listarPublicacoesUsuario, listarPublicacoesPsicologo, listarPublicacoesAdmId } from '../repository/publicacaoRepository.js';
import { publicarUsuario, alterarImagemUsuario } from '../repository/publicacaoRepository.js';


const server = Router();
const upload = multer({dest: 'storage/imagensPublicacao'})

server.get('/usuario/publicacao', async (req, resp) => {
    try {
        const resposta = await listarPublicacoesUsuario();
        resp.send(resposta);


    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})

server.get('/psicologo/publicacao', async (req, resp) => {
    try {
        const resposta = await listarPublicacoesPsicologo();
        resp.send(resposta);


    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})
server.get('/admin/publicacao/:id', async (req, resp) => {
    try {
        const id = Number(req.params.id)
        const resposta = await listarPublicacoesUsuarioId(id);
        resp.send(resposta);


    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})

server.get('/admin/psicologo/publicacao/:id', async (req, resp) => {
    try {
        const id = Number(req.params.id)
        const resposta = await listarPublicacoesPsicologoId(id);
        resp.send(resposta);


    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})

server.post('/usuario/publicacoes', async (req, resp) =>{
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
          const resposta = await publicarUsuario(novaPublicacao);
            resp.status(201).send(resposta);
        
    }
    catch(err) {
        resp.status(401).send({
            erro: err.message
        });
    }
})

server.post('/psicologo/publicacoes', async (req, resp) =>{
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
          const resposta = await publicarPsicologo(novaPublicacao);
            resp.status(201).send(resposta);
        
    }
    catch(err) {
        resp.status(401).send({
            erro: err.message
        });
    }
})

server.put('/admin/aprovar/publicacao/:id', async (req, resp) => {
    try {
        const id = Number(req.params.id)
        const resposta = await autorizarPublicacaoUsuario(id);
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

server.put('/psicologo/publicacao/:id/imagem', upload.single('imagem'), async (req,resp) => {
    try{
        if (!req.file)
            throw new Error('Escolha a imagem da publicação!')
        const { id } = req.params;
        const imagem = req.file.path;
		
        const resposta = await alterarImagemPsicologo(imagem, id)
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