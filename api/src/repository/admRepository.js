import { con } from './connection.js'

export async function Login(email, senha) {
    const comando =
        ` select id_admin       id,
             ds_email           email
      from   tb_admin
     where   ds_email        = ?
     and     ds_senha        = ? `

    const [linhas] = await con.query(comando, [email, senha]);
    return linhas[0];

}

export async function listarContasUsuarios() {
    const comando =
        `select count(id_usuario) as qtdContas
	from tb_usuario;`

    const [resposta] = await con.query(comando);
    return resposta.map(item => item.qtdContas);
}

export async function listarPublicaçõesFeitas() {
    const comando =
        `select count(id_publicacao) as qtdPublicacoes
        from tb_publicacao
        where pb_aprovado = true;`
    const [resposta] = await con.query(comando);
    return resposta.map(item => item.qtdPublicacoes);
}

export async function listarContasPsi() {
    const comando =
        `select count(id_psicologo) as qtdPsicologos
    from tb_psicologo;`
    const [resposta] = await con.query(comando);
    return resposta.map(item => item.qtdPsicologos);
}