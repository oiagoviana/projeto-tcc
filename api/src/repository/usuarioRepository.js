import { con } from './connection.js'

export async function Cadastro(usuario) {
    const comando = 
    `insert into tb_usuario(ds_email, nm_usuario, ds_senha, bt_termos, ds_telefone)
                     values(?, ?, ?, true, ?)`

    const[linhas] = await con.query(comando, [usuario.email, usuario.nome, usuario.senha, usuario.termo, usuario.telefone]);
    usuario.id = linhas.insertId
    return usuario;
}

export async function Login(email, senha) {
    const comando = 

    `select id_usuario	id,
            ds_email	email
       from tb_usuario
      where ds_email	= ?
        and	ds_senha	= ?`

     const[linhas] = await con.query(comando, [email, senha]);
     return linhas[0];
}

export async function SolicitadoUser(id) {
    const comando = 
        `select nm_psicologo        nome,
        tb_psicologo.id_psicologo   idpsi,
        tb_chat.id_usuario          iduser,
        bt_autorizado               autorizado
from    tb_chat
inner join tb_psicologo on tb_psicologo.id_psicologo = tb_chat.id_psicologo
  where tb_chat.id_usuario = ?`
    const[linhas] = await con.query(comando, [id]);
    return linhas;
}