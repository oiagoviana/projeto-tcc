import { Router } from 'express'
import multer from 'multer';

import { alterarImagemUsuario, autorizarPublicacao,excluirPublicacao,fazerComentarioPsi,fazerComentarioUsu,listarComentarioUsu,listarPublicacaoCard, listarPublicacaoFeed, listarPublicacaoId, listarPublicacaoUser, listarPublicacaoUsuId, PublicarPsi, PublicarUsuario, editarPublicacaoPsi } from '../repository/publicacaoRepository.js';



const server = Router();
const upload = multer({ dest: 'storage/imagensPublicacao' })

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

server.get('/usuario/publicacao/:id', async (req, resp) => {
    try {
        const { id } = req.params;

        const publicacao = await listarPublicacaoUsuId(id);

        resp.send(publicacao);


    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})
server.get('/usuario/publicacao/comentario/:id', async (req, resp) => {
    try {
        const { id } = req.params;

        const publicacao = await listarComentarioUsu(id);

        resp.send(publicacao);


    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.post('/api/publicacaoUsu', async (req, resp) => {

    try {
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
        resp.status(201).send(resposta);

    }
    catch (err) {
        resp.status(401).send({
            erro: err.message
        });
    }
})

server.post('/api/publicacaoPsi', async (req, resp) => {

    try {
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
        resp.status(201).send(resposta);

    }
    catch (err) {
        resp.status(401).send({
            erro: err.message
        });
    }
})

server.put('/admin/publicacao/:id', async (req, resp) => {
    try {
        const id = Number(req.params.id)
        const resposta = await autorizarPublicacao(id);
        if (resposta != 1)
            throw new Error('Publicação não pôde ser aprovada')
        else
            resp.sendStatus(204)


    } catch (err) {
        resp.status(404).send({
            erro: err.message
        });
    }
})

server.put('/api/publicacao/:id/imagem', upload.single('imagem'), async (req, resp) => {
    try {
        if (!req.file)
            throw new Error('Escolha a imagem da publicação!')
        const { id } = req.params;
        const imagem = req.file.path;

        const resposta = await alterarImagemUsuario(imagem, id)
        if (resposta != 1)
            throw new Error('A imagem não pôde ser salva.')
        resp.status(204).send();
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.post('/api/comentarioUsu/:id', async (req, resp) => {
    try {
        const { id } = req.params;
        const novoComentario = req.body;

        if (!novoComentario.IDusuario) {
            throw new Error('É necessário estar logado para comentar!!!')
        }
        if (!novoComentario.comentario) {
            throw new Error('É necessário comentar!!')
        }
        const resposta = await fazerComentarioUsu(id, novoComentario);
        resp.status(201).send(resposta);

    }
    catch (err) {
        resp.status(401).send({
            erro: err.message
        });
    }
})

server.post('/api/comentarioPsi/:id', async (req, resp) => {
    try {
        const { id } = req.params;
        const novoComentario = req.body;

        if (!novoComentario.IDpsicologo) {
            throw new Error('É necessário estar logado para comentar!!!')
        }
        if (!novoComentario.comentario) {
            throw new Error('É necessário comentar!!')
        }
        const resposta = await fazerComentarioPsi(id,novoComentario);
        resp.status(201).send(resposta);

    }
    catch (err) {
        resp.status(401).send({
            erro: err.message
        });
    }
})

server.get('/usuario/feedpublicacao', async (req, resp) => {
    try {
        const resposta = await listarPublicacaoFeed();
        resp.send(resposta);


    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})

server.get('/api/publicacoesUser', async (req, resp) => {
    try {
        const { id } = req.query;
        const listandoPub = await listarPublicacaoUser(id);

        resp.status(201).send(listandoPub);
    } catch(err) {
        resp.status(401).send({
            erro: err.message
        });
    }
})

server.delete('/api/publicacao', async (req, res) => {
    try {
        const { id } = req.query;

        if (!id || id === undefined)
            throw new Error("Você não passou nenhum parâmetro.");

        const resposta = await excluirPublicacao(Number(id));
        res.sendStatus(200);

    } catch (err) {
        res.status(401).send({
            erro: err.message
        })
    }
})

server.put('/api/publicacao/:id', async (req, resp) => {
    try {
        const { id } = req.params;
        const informacoes = req.body;
        const informacoesAlteradas = await editarPublicacaoPsi(Number(id), informacoes);

        resp.status(204).send();
    } catch(err) {
        resp.status(401).send({
            erro: err.message
        })
    }
})






export default server;