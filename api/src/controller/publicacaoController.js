import { Router } from 'express'
import multer from 'multer';
import { autorizarPublicacao, listarPublicacoesAdm } from '../repository/publicacaoRepository.js';
import { publicarUsuario, alterarImagem } from '../repository/publicacaoRepository.js';


const server = Router();
const upload = multer({dest: 'storage/imagensPublicacao'})

server.get('/admin/publicacao', async (req, resp) => {
    try {
        const resposta = await listarPublicacoesAdm();
        resp.send(resposta);


    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})

server.post('/api/publicacoes', async (req, resp) =>{
    try{
        const novaPublicacao = req.body;
       

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

server.put('/admin/aprovar/publicacao/:id', async (req, resp) => {
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
		
        const resposta = await alterarImagem(imagem, id)
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



export default server;