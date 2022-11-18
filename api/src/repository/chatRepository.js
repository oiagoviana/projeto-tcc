import { con } from './connection.js'

export async function CriarChat(usuario, psicologo) {
    const comando = 
    `insert into tb_chat(id_usuario, id_psicologo, dt_solicitacao, bt_autorizado)
    values(?,?, sysdate(), false)`

    const [resposta] = await con.query(comando, [usuario, psicologo]);
    return resposta.insertId;
}

export async function userConversations(userId) {
    const comando = `
    select		id_chat						idChat,
                tb_chat.id_psicologo		psiId,
                tb_psicologo.nm_psicologo	nomePsi,
                id_usuario					userId
      from		tb_chat
inner join      tb_psicologo on tb_psicologo.id_psicologo = tb_chat.id_psicologo
     where	    tb_chat.id_usuario = ?;`
    const [resposta] = await con.query(comando, [userId]);
    return resposta;
}
  
export async function psiConversation(psiId) {
    const comando = `
    select	id_chat						idChat,
            tb_chat.id_psicologo		psiId,
            tb_chat.id_usuario			userId,
            tb_usuario.nm_usuario		userName
      from	tb_chat
inner join  tb_usuario on tb_usuario.id_usuario = tb_chat.id_usuario 
     where	tb_chat.id_psicologo = ?;`
    const [resposta] = await con.query(comando, [psiId]);
    return resposta;
}
  
export async function searchConversationbyId(idChat) {
    const comando = `
    select 	tb_psicologo.id_psicologo	idPsi,
            nm_psicologo				nomePsi,
            tb_psicologo.ds_telefone					telefonePsi,
            nr_crp						crp,
            tb_usuario.id_usuario				userId,
            nm_usuario				userName
      from	tb_chat	
inner join 	tb_psicologo on tb_psicologo.id_psicologo = tb_chat.id_psicologo 
inner join 	tb_usuario on tb_usuario.id_usuario = tb_chat.id_usuario
     where 	id_chat = ?;`;
    const [resposta] = await con.query(comando, [idChat]);
    return resposta;
  }

export async function aceitarChat(chatId){
    const comando = 
    `update tb_chat
        set bt_autorizado = true
      where id_chat = ?`
    const [resposta] = await con.query(comando, [chatId]);
    return resposta.affectedRows;
}

export async function excluirChat(chatId){
    const comando =
    `delete 
       from tb_chat
      where id_chat = ?`;

    const [resposta] = await con.query(comando, [chatId]);
    return resposta.affectedRows;
}
