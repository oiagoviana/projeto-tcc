import { con } from './connection.js'

export async function inserirIndicacao(indicacao) {
    const comando = `
    INSERT INTO tb_indicacao (nm_clinica, nm_cidade, ds_cep, ds_endereco, ds_classificacao, ds_atendimento, id_indicacao_categoria)
                      values (?,?,?,?,?,?,?)`

    const [resposta] = await con.query(comando, [
        indicacao.nome, 
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

export async function alterarImagem(imagem, id){
    const comando = `
    UPDATE tb_indicacao 
    SET img_clinica = ?
    WHERE id_indicacao = ?`
    const [resposta] = await con.query(comando, [imagem, id])
    return resposta.affectedRows;
}

export async function listarCategoria() {
    const comando =`
    select  id_indicacao_categoria      as  id,
            nm_categoria                as  categoria
      from  tb_indicacao_categoria
        `
    const [resposta] = await con.query(comando);
    return resposta;
}

export async function consultarIndicacoes () {
    const comando = `
    select 	nm_clinica              nome,
			nm_cidade               cidade,
			ds_cep                  cep,
			ds_endereco             endereco,
			ds_classificacao        classificacao,
			img_clinica             img,
			nm_categoria            categoria
	  from	tb_indicacao
     inner join tb_indicacao_categoria on tb_indicacao.id_indicacao_categoria = tb_indicacao_categoria.id_indicacao_categoria`
   const [resposta] = await con.query (comando);
   return resposta;
}