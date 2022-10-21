import { Router } from 'express'
import { listarPublicacaoes } from '../repository/publicacaoRepository.js';


const server = Router();

server.get('/admin/publicacao', async (req, resp) => {
    try {
        const resposta = await listarPublicacaoes();
        resp.send(resposta);


    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})



export default server