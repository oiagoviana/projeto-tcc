import { con } from './connection.js'

export async function EnviarMensagem(idChat, mensagem, tipo) {
    const date = new Date();
    const comando =
        
        `insert into tb_mensagem(id_chat, ds_mensagem, tp_mensagem, dt_mensagem)
        values(?, ?, ?, ?)`
    
    const [resposta] = await con.query(comando, [idChat, mensagem, tipo, date]);
    return resposta.affectedRows;
}



export async function Mensagens(idChat) {
    const comando = 
    `   select 	id_mensagem		id,
                id_chat			chat,
                ds_mensagem		mensagem,
                tp_mensagem		tipo,
                dt_mensagem		hora
          from  tb_mensagem
         where  id_chat = ?
      order by  ds_mensagem desc`
    const [resposta] = await con.query(comando, [idChat]);
    return resposta;
}