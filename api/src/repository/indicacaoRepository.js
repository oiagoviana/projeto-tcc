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
		    set	id_indicacao_categoria  =?,
                nm_clinica 			    =?, 
			    nm_cidade			    =?, 
			    ds_cep				    =?, 
			    ds_endereco			    =?, 
			    ds_classificacao 	    =?, 
			    ds_atendimento 		    =?
	      where id_indicacao		    =?`
    const [resposta] = await con.query (comando, [indicacao.categoria, indicacao.nome, indicacao.cidade, indicacao.cep, indicacao.endereco, indicacao.classificacao, indicacao.atendimento, id])
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
    select 	id_indicacao            id,
            nm_clinica              nome,
			nm_cidade               cidade,
			ds_cep                  cep,
            ds_telefone             telefone,
			ds_endereco             endereco,
            ds_atendimento          atendimento,
			ds_classificacao        classificacao,
			img_clinica             imagem,
			nm_categoria            categoria
	  from	tb_indicacao
     left join tb_indicacao_categoria on tb_indicacao.id_indicacao_categoria = tb_indicacao_categoria.id_indicacao_categoria`
   const [resposta] = await con.query (comando);
   return resposta;
}

export async function listarPorId (id) {
    const comando = `
    select 	id_indicacao            id,
            nm_clinica              nome,
			nm_cidade               cidade,
			ds_cep                  cep,
			ds_endereco             endereco,
            ds_atendimento          atendimento,
			ds_classificacao        classificacao,
			img_clinica             imagem,
			nm_categoria            categoria
	  from	tb_indicacao
     left join tb_indicacao_categoria on tb_indicacao.id_indicacao_categoria = tb_indicacao_categoria.id_indicacao_categoria
     where id_indicacao = ?`
        
     const [linhas] = await con.query (comando, [id]);
   return linhas[0];
}



export async function listarPorNome(nome) {
    const comando = 
    `select id_indicacao            id,
            nm_clinica              nome,
            nm_cidade               cidade,
            ds_cep                  cep,
            ds_telefone             telefone,
            ds_endereco             endereco,
            ds_atendimento          atendimento,
            ds_classificacao        classificacao,
            img_clinica             imagem,
            nm_categoria            categoria
       from tb_indicacao
 left join tb_indicacao_categoria on tb_indicacao.id_indicacao_categoria = tb_indicacao_categoria.id_indicacao_categoria
      where nm_clinica              like ?`

      const [linhas] = await con.query(comando, [`%${nome}%`]);
      return linhas;
}