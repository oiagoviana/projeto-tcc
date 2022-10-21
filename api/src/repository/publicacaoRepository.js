import { con } from './connection.js'


export async function listarPublicacaoes() {
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
        dt_publicacao					as 'data',
        img_publicacao					as 'imagem' 
    from tb_publicacao
    left join tb_usuario on tb_publicacao.id_usuario = tb_usuario.id_usuario
    left join tb_psicologo on tb_publicacao.id_psicologo = tb_psicologo.id_psicologo;`
    
    const [resposta] = await con.query(comando);
    return resposta
}