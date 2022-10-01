import { listarPsicologos } from '../repository/psicologoRepository.js'

import { Router } from 'express'

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


export default server