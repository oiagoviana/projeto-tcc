import { con } from './connection.js'


export async function listarPsicologos() {
    const comando = `
    select  id_psicologo        as 'id',
            nm_psicologo		as  'nome',
			ds_email			as	'email',
            ds_telefone			as	'telefone',
            nr_crp				as	'crp'
	  from  tb_psicologo;`
    const [resposta] = await con.query(comando)
    return resposta;
}

export async function loginPsicologo(email, senha) {
    const comando = `
        select  id_psicologo            id,
                ds_email		        email
          from  tb_psicologo
         where  ds_email	= ?
           and	ds_senha	= ?`

    const [linhas] = await con.query(comando, [email, senha]);
    return linhas[0];
}

export async function inserirFormulario(formulario) {
    const comando =
        ` INSERT INTO tb_psicologo (nm_psicologo, dt_nascimento, ds_telefone, ds_email, ds_senha, nr_crp, ds_cpf)
    values (?,?,?,?,?,?,?)`

    const [resposta] = await con.query(comando, [
        formulario.nome,
        formulario.nascimento,
        formulario.telefone,
        formulario.email,
        formulario.senha,
        formulario.crp,
        formulario.cpf])
    formulario.id = resposta.insertId;
    return formulario;
}

export async function atualizarFormulario(id, formulario) {
    const comando =
        ` update tb_psicologo
            set nm_psicologo			=?, 
                dt_nascimento		    =?, 
                ds_telefone		        =?, 
                ds_email		    	=?, 
                ds_senha	            =?, 
                nr_crp       		    =?,
                ds_cpf                  =?
         where id_psicologo		        =?
     
         `
    const [resposta] = await con.query (comando, [formulario.nome, formulario.nascimento, formulario.telefone, formulario.email, formulario.senha, formulario.crp, formulario.cpf, id])
    return resposta.affectedRows;   
}

export async function deletarFormulario(id) {
    const comando =
        `delete from tb_psicologo
		       where id_psicologo = ?
        `
    const [resposta] = await con.query(comando, [id])
    return resposta.affectedRows;
}

export async function autorizarPsi(id) {
    const comando =
    `select 	id_psicologo 	id,
                nm_psicologo 	nome,
                date_format(dt_nascimento, '%d/%m/%Y')					as 'data',
                ds_telefone		telefone,
                ds_email		email,
                ds_senha		senha,
                nr_crp			crp,
                ds_cpf			cpf
       from tb_psicologo
       where id_psicologo = ?;`
    
    const [resposta] = await con.query(comando, [id]);
    return resposta[0];
}



