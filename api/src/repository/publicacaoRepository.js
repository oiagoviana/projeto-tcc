import { con } from './connection.js'


export async function listarPublicacoesUsuario() {
    const comando =
        `select id_publicacao 					as 'id',
        tb_publicacao_usuario.id_usuario		as 'idUsuario',
        nm_usuario						as 'nome',
        tb_usuario.ds_email				as 'email',
        ds_titulo						as 'titulo',
        ds_publicacao					as 'descricao',
        date_format(dt_publicacao, '%d/%m/%Y')					as 'data',
        img_publicacao					as 'imagem',
        pb_aprovado                     as 'aprovado' 
    from tb_publicacao_usuario
    left join tb_usuario on tb_publicacao_usuario.id_usuario = tb_usuario.id_usuario
    where pb_aprovado = false`
    
    const [resposta] = await con.query(comando);
    return resposta
}
export async function listarPublicacoesPsicologo() {
    const comando =
        `select id_publicacao 					as 'id',
        tb_publicacao_psicologo.id_psicologo		as 'idPsicologo',
        nm_psicologo						as 'nome',
        tb_psicologo.ds_email				as 'email',
        ds_titulo						as 'titulo',
        ds_publicacao					as 'descricao',
        date_format(dt_publicacao, '%d/%m/%Y')					as 'data',
        img_publicacao					as 'imagem',
        pb_aprovado                     as 'aprovado' 
    from tb_publicacao_psicologo
    left join tb_psicologo on tb_publicacao_psicologo.id_psicologo = tb_psicologo.id_psicologo
    where pb_aprovado = false`
    
    const [resposta] = await con.query(comando);
    return resposta
}

export async function listarPublicacoesUsuarioId(id) {
    const comando =
        `select id_publicacao 					as 'id',
        tb_publicacao_usuario.id_usuario		as 'idUsuario',
        nm_usuario						as 'nome',
        tb_usuario.ds_email				as 'email',
        ds_titulo						as 'titulo',
        ds_publicacao					as 'descricao',
        date_format(dt_publicacao, '%d/%m/%Y')					as 'data',
        img_publicacao					as 'imagem',
        pb_aprovado                     as 'aprovado' 
    from tb_publicacao_usuario
    left join tb_usuario on tb_publicacao_usuario.id_usuario = tb_usuario.id_usuario
    where id_publicacao = ?
    `
    
    const [resposta] = await con.query(comando, [id]);
    return resposta
}

export async function listarPublicacoesPsicologoId(id) {
    const comando =
        `select id_publicacao 					as 'id',
        tb_publicacao_psicologo.id_psicologo		as 'idPsicologo',
        nm_psicologo						as 'nome',
        tb_psicologo.ds_email				as 'email',
        ds_titulo						as 'titulo',
        ds_publicacao					as 'descricao',
        date_format(dt_publicacao, '%d/%m/%Y')					as 'data',
        img_publicacao					as 'imagem',
        pb_aprovado                     as 'aprovado' 
    from tb_publicacao_psicologo
    left join tb_psicologo on tb_publicacao_psicologo.id_psicologo = tb_psicologo.id_psicologo
    where id_publicacao = ?
    `
    
    const [resposta] = await con.query(comando, [id]);
    return resposta
}

export async function publicarUsuario (publicar){
    const comando =
        `insert into tb_publicacao_usuario(id_usuario,ds_titulo, ds_publicacao, dt_publicacao, pb_aprovado)
        values(?,?,?, curdate(), false)`
     const [resposta] = await con.query(comando, [publicar.usuario, publicar.titulo, publicar.descricao]);
     publicar.id=resposta.insertId
     return publicar  
}

export async function publicarPsicologo (publicar){
    const comando =
        `insert into tb_publicacao_psicologo(id_psicologo,ds_titulo, ds_publicacao, dt_publicacao, pb_aprovado)
        values(?,?,?, curdate(), false)`
     const [resposta] = await con.query(comando, [publicar.psicologo, publicar.titulo, publicar.descricao]);
     publicar.id=resposta.insertId
     return publicar  
}

export async function autorizarPublicacaoUsuario(id){
    const comando=
        `update tb_publicacao_usuario
        set pb_aprovado = true
        where id_publicacao = ?`
    const [resposta] = await con.query(comando, [id]);
    return resposta.affectedRows

}

export async function autorizarPublicacaoPsicologo(id){
    const comando=
        `update tb_publicacao_psicologi
        set pb_aprovado = true
        where id_publicacao = ?`
    const [resposta] = await con.query(comando, [id]);
    return resposta.affectedRows

}

export async function alterarImagemUsuario(imagem, id){
    const comando = `
    UPDATE tb_publicacao_usuario 
    SET img_publicacao = ?
    WHERE id_publicacao = ?`
    const [resposta] = await con.query(comando, [imagem, id])
    return resposta.affectedRows;
}

export async function alterarImagemPsicologo(imagem, id){
    const comando = `
    UPDATE tb_publicacao_psicologo
    SET img_publicacao = ?
    WHERE id_publicacao = ?`
    const [resposta] = await con.query(comando, [imagem, id])
    return resposta.affectedRows;
}

export async function fazerComentario(comentario){
    const comando = `
        insert into tb_comentario(id_usuario, id_psicologo, ds_comentario, dt_comentario)
            values (?, ?, ?, sysdate());
    `
    const [resposta] = await con.query(comando, [comentario.IDusuario, comentario.IDpsicologo,  comentario.comentario, comentario.data]);
    comentario.id = resposta.insertId;

    return comentario;
    

}

