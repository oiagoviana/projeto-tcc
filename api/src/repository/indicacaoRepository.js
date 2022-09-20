import { con } from './connection.js'

export async function inserirIndicacao(indicacao) {
    const comando = `
    INSERT INTO tb_indicacao (nm_clinica, nm_cidade, ds_cep, ds_endereco, ds_classificacao, ds_atendimento, id_indicacao_categoria)
                      values (?,?,?,?,?,?,?)`

    const [resposta] = await con.query(comando, [indicacao.nome, 
        indicacao.cidade, 
        indicacao.cep, 
        indicacao.endereco, 
        indicacao.classificacao, 
        indicacao.atendimento,
        indicacao.categoria])
    indicacao.id = resposta.insertId;
    return indicacao;
} 

export async function atualizarIndicacao(id, indicacao) {
    const comando =
        `update tb_indicacao
		    set	nm_clinica 			=?, 
			    nm_cidade			=?, 
			    ds_cep				=?, 
			    ds_endereco			=?, 
			    ds_classificacao 	=?, 
			    ds_atendimento 		=?
	      where id_indicacao		=?
        `
    const [resposta] = await con.query (comando, [indicacao.nome, indicacao.cidade, indicacao.cep, indicacao.endereco, indicacao.classificacao, indicacao.atendimento, id])
    return resposta.affectedRows;
}


export async function deletarIndicacao(id) {
    const comando =
        `delete from tb_indicacao
		       where id_indicacao = ?
        `
    const [resposta] = await con.query(comando, [id])
    return resposta.affectedRows;
}