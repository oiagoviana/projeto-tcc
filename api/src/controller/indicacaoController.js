import { inserirIndicacao, atualizarIndicacao, deletarIndicacao, alterarImagem, listarCategoria } from '../repository/indicacaoRepository.js'
import { Router } from 'express'
import multer from 'multer'

const server = Router();
const upload = multer({dest: 'storage/imagensIndicacao'})

server.post('/api/indicacao', async (req, resp) => {
    try {
        const novaIndicacao = req.body;

        if (!novaIndicacao.nome)
            throw new Error('Nome da indicação é obrigatório!');
            
        if (!novaIndicacao.cidade)
            throw new Error('Nome da cidade da indicação é obrigatório!');
        
        if (!novaIndicacao.cep)
            throw new Error('CEP da Indicação é obrigatório!');
            
        if (!novaIndicacao.endereco)
            throw new Error('Endereço da Indicação é obrigatório!');
            
        if (novaIndicacao.classificacao == undefined || novaIndicacao.classificacao < 0)
            throw new Error('Classificação da Indicação é obrigatório!');
        
        if (novaIndicacao.classificacao > 5)
            throw new Error('Classificação até 5')
            
        if (!novaIndicacao.atendimento)
            throw new Error('Horario de atendimento da Indicação é obrigatório!');

        if (!novaIndicacao.categoria)
            throw new Error('Categoria da Indicação é obrigatória!');
            
        
        const indicacaoInserida = await inserirIndicacao(novaIndicacao);
        resp.send(indicacaoInserida);

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


server.put('/api/indicacao/:id', async (req, resp) => {
    try {
        const { id } = req.params;
        const indicacao = req.body;

        if (!indicacao.nome)
            throw new Error('Nome da indicação é obrigatório!');
            
        if (!indicacao.cidade)
            throw new Error('Nome da cidade da indicação é obrigatório!');
        
        if (!indicacao.cep)
            throw new Error('CEP da Indicação é obrigatório!');
            
        if (!indicacao.endereco)
            throw new Error('Endereço da Indicação é obrigatório!');
            
        if (indicacao.classificacao == undefined || indicacao.classificacao < 0)
            throw new Error('Classificação da Indicação é obrigatório!');
        
        if (indicacao.classificacao > 5)
            throw new Error('Classificação limite até 5')
            
        if (!indicacao.atendimento)
            throw new Error('Horario de atendimento da Indicação é obrigatório!');
        
        const resposta = await atualizarIndicacao(id, indicacao);
        if (resposta != 1)
            throw new Error("Indicação não pode ser alterada!")
        else
            resp.status(204).send();
        
    } catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})

server.delete('/api/indicacao/:id', async (req, resp) => {
    try {
        const { id } = req.params;

        const resposta = await deletarIndicacao(id);
        if (resposta != 1)
            throw new Error('Indicação não pode ser removida.');
        else
            resp.status(204).send();
    } catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})

server.put('/api/indicacao/:id/imagem', upload.single('indicacao'), async (req,resp) => {
    try{
        if (!req.file)
            throw new Error('Escolha a capa da indicação!')
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


server.get('/api/categoria', async (req, resp) => {
    try {
        const resposta = await listarCategoria();
        resp.send(resposta);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default server;