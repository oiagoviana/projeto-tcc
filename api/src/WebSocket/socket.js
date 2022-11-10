import express from 'express';
import cors from 'cors';
import http, { get } from 'http';
import { Server } from 'socket.io';

//criando o servidor com express e usando o json e o CORS
const server = express();
server.use(express.json());
server.use(cors());


//criando o httpServer passando como parâmetro o server express
const serverHttp = http.createServer(server);


//definindo propriedades do cors para funcionamento correto
const io = new Server(serverHttp, {
    cors: {
        origin: ["http://localhost:3000", "http://localhost:3000"],
        methods: ["GET", "POST"],
    },
});


export {serverHttp, io, server};