import { con } from './connection.js'

export async function EnviarMensagemU(mensagem) {
    const comando =
        `insert into tb_mensagem(id_chat, ds_mensagem, tp_mensagem, dt_mensagem)
        values(?, ?, 'u',sysdate())`
    
    const [resposta] = await con.query(comando, [mensagem.id, mensagem.mensagem]);
    mensagem.id = resposta.insertId;
    return mensagem;
}

export async function EnviarMensagemP(mensagem) {
    const comando = 
        `insert into tb_mensagem(id_chat, ds_mensagem, tp_mensagem, dt_mensagem)
        values(?, ?, 'p',sysdate())`

    const [resposta] = await con.query(comando, [mensagem.id, mensagem.mensagem]);
    mensagem.id = resposta.insertId;
    return mensagem;
}


export async function Mensagens(id) {
    const comando = 
    `   select 	id_mensagem		id,
                id_chat			chat,
                ds_mensagem		mensagem,
                tp_mensagem		tipo,
                dt_mensagem		hora
          from  tb_mensagem
         where  id_chat = ?
      order by  ds_mensagem`
    
    const [resposta] = await con.query(comando, [id]);
    return resposta;
}




export async function CriarChat(usuario, psicologo) {
    const comando = 
    `insert into tb_chat(id_usuario, id_psicologo, dt_solicitacao, bt_autorizado)
    values(?,?, sysdate(), false);`

    const [resposta] = await con.query(comando, [usuario, psicologo]);
    return resposta.insertId;
}

export async function selecionarChatU(id) {
    const comando =
    `select 	id_chat                 idChat,
                tb_chat.id_usuario      idUsuario, 
                tb_chat.id_psicologo    idPsi,
                nm_psicologo            nomePsi
       from	    tb_chat
 inner join     tb_psicologo on tb_psicologo.id_psicologo = tb_chat.id_psicologo
 inner join     tb_usuario on tb_usuario.id_usuario = tb_chat.id_usuario
      where     tb_usuario.id_usuario = ?
        and	    bt_autorizado = true`
    
    const [resposta] = await con.query(comando,[id]);
    return resposta;
}


export async function selecionarChatP(id) {
    const comando =
    `select 	id_chat			        idChat,
                tb_chat.id_usuario	    idUsuario,
                tb_chat.id_psicologo    idPsi,
                nm_usuario		        nome
       from	    tb_chat
 inner join     tb_psicologo on tb_psicologo.id_psicologo = tb_chat.id_psicologo
 inner join     tb_usuario on tb_usuario.id_usuario = tb_chat.id_usuario
      where     tb_psicologo.id_psicologo = ?
        and	    bt_autorizado = true`
    
    const [resposta] = await con.query(comando,[id]);
    return resposta;
}


