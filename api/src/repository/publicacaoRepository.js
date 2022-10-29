import { con } from './connection.js'


export async function listarPublicacaoCard() {
    const comando =
        `select id_publicacao 					as 'id',
        tb_publicacao.id_usuario		as 'idUsuario',
        tb_publicacao.id_psicologo		as 'idPsi',
        nm_usuario						as 'nome',
        nm_psicologo					as 'nomePsi',
        tb_usuario.ds_email				as 'email',
        tb_psicologo.ds_email			as 'emailPsi',
        ds_titulo						as 'titulo',
        ds_publicacao					as 'descricao',
        date_format(dt_publicacao, '%d/%m/%Y')					as 'data',
        img_publicacao					as 'imagem',
        pb_aprovado                     as 'aprovado' 
    from tb_publicacao
    left join tb_usuario on tb_publicacao.id_usuario = tb_usuario.id_usuario
    left join tb_psicologo on tb_publicacao.id_psicologo = tb_psicologo.id_psicologo
    where pb_aprovado = false;`

    const [resposta] = await con.query(comando);
    return resposta
}


export async function listarPublicacaoId(id) {
    const comando =
        `    select  id_publicacao 					            as 'id',
                tb_publicacao.id_usuario		            as 'idUsuario',
                tb_publicacao.id_psicologo		            as 'idPsi',
                nm_usuario						            as 'nome',
                nm_psicologo					            as 'nomePsi',
                tb_usuario.ds_email				            as 'email',
                tb_psicologo.ds_email			            as 'emailPsi',
                ds_titulo						            as 'titulo',
                ds_publicacao					            as 'descricao',
                date_format(dt_publicacao, '%d/%m/%Y')		as 'data',
                img_publicacao					            as 'imagem',
                pb_aprovado                                 as 'aprovado' 
          from  tb_publicacao
     left join  tb_usuario on tb_publicacao.id_usuario = tb_usuario.id_usuario
     left join  tb_psicologo on tb_publicacao.id_psicologo = tb_psicologo.id_psicologo
         where  pb_aprovado = false
           and  id_publicacao = ?`
    const [resposta] = await con.query(comando, [id]);
    return resposta[0];
}

export async function PublicarUsuario(publicar) {
    const comando =
        `insert into tb_publicacao(id_usuario, ds_titulo, ds_publicacao, dt_publicacao, pb_aprovado)
        values(?, ?, ?, curdate(), false)`
    const [resposta] = await con.query(comando, [publicar.usuario, publicar.titulo, publicar.descricao]);
    publicar.id = resposta.insertId;
    return publicar;
}

export async function PublicarPsi(publicar) {
    const comando =
        `insert into tb_publicacao(id_psicologo, ds_titulo, ds_publicacao, dt_publicacao, pb_aprovado)
        values(?, ?, ?, curdate(), false)`
    const [resposta] = await con.query(comando, [publicar.psicologo, publicar.titulo, publicar.descricao]);
    publicar.id = resposta.insertId;
    return publicar;

}


export async function autorizarPublicacao(id) {
    const comando =
        `update tb_publicacao
            set pb_aprovado = true
          where id_publicacao = ?`
    const [resposta] = await con.query(comando, [id]);
    return resposta.affectedRows

}

export async function alterarImagemUsuario(imagem, id) {
    const comando = `
    UPDATE tb_publicacao
    SET img_publicacao = ?
    WHERE id_publicacao = ?`
    const [resposta] = await con.query(comando, [imagem, id])
    return resposta.affectedRows;
}

export async function fazerComentario(comentario) {
    const comando = `
        insert into tb_comentario(id_usuario, id_psicologo, ds_comentario, dt_comentario)
            values (?, ?, ?, sysdate());`
    const [resposta] = await con.query(comando, [comentario.IDusuario, comentario.IDpsicologo, comentario.comentario, comentario.data]);
    comentario.id = resposta.insertId;
    return comentario;
}