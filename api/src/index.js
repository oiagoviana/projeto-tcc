import 'dotenv/config'
import admController from './controller/admController.js';
import indicacaoController from './controller/indicacaoController.js'
import usuarioController from './controller/usuarioController.js'

import express from 'express'

import cors from 'cors'

const server = express();
server.use(cors());
server.use(express.json());

server.listen(process.env.PORT, () => 
  console.log(`API conectada na porta ${process.env.PORT}`));


server.use(admController);
server.use(indicacaoController);
server.use(usuarioController);
