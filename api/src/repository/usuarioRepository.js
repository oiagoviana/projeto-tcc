import { con } from './connection.js'

export async function Cadastro(email, nome, senha, termo) {
    const comando = 
    `insert into tb_usuario(ds_email, nm_usuario, ds_senha, bt_termos)
                     values(?, ?, ?, ?)`

    const[linhas] = await con.query(comando, [email, nome, senha, termo]);
    return linhas;
}

export async function Login(email, senha) {
    const comando = 
    `select id_usuario	id_fk,
            ds_email	 email
       from tb_usuario
      where ds_email	= ?
     and	ds_senha	= ?`

     const[linhas] = await con.query(comando, [email, senha]);
     console.log(linhas);
     return linhas;
}