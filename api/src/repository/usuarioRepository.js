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