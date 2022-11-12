import 'dotenv/config'
import { serverHttp, server } from "./WebSocket/socket.js";
import "./WebSocket/events.js"
import express from 'express'


import admController from './controller/admController.js';
import indicacaoController from './controller/indicacaoController.js'
import psicologoController from './controller/psicologoController.js'
import usuarioController from './controller/usuarioController.js'
import publicacaoController from './controller/publicacaoController.js'
import chatController from './controller/chatController.js'




serverHttp.listen(process.env.PORT, () => 
  console.log(`API conectada na porta ${process.env.PORT}`));

server.use(publicacaoController);
server.use(admController);
server.use(indicacaoController);
server.use(psicologoController);
server.use(usuarioController);
server.use(chatController);
server.use("/storage/imagensIndicacao", express.static("storage/imagensIndicacao"))
server.use("/storage/imagensPublicacao", express.static("storage/imagensPublicacao"))
