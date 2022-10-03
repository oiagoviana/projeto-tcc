import { con } from './connection.js'


export async function listarPsicologos() {
    const comando = `
    select nm_psicologo		as  'nome',
			ds_email			as	'email',
            ds_telefone			as	'telefone',
            nr_crp				as	'crp'
	  from tb_psicologo;`
    const [resposta] = await con.query(comando)
    return resposta;
}

export async function Login(email, senha) {
    const comando = `
        select id_login_psicologo   id,
        id_psicologo        id_fk,
        ds_email		email
       from tb_login
      where ds_email	= ?
     and	ds_senha	= ?`

    const [linhas] = await con.query(comando, [email, senha]);
    return linhas;
}

export async function Formulario(formulario) {
    const comando =
        ` INSERT INTO tb_psicologi (nm_psicologo, dt_nascimento, ds_telefone, ds_email, ds_senha, nr_crp, ds_cpf)
    values (?,?,?,?,?,?,?)`

    const [resposta] = await con.query(comando, [
        formulario.nome,
        formulario.nacimento,
        formulario.telefone,
        formulario.email,
        formulario.senha,
        formulario.crp,
        formulario.cpf])
    formulario.id = resposta.insertId;
    return formulario;
}

export async function atualizarFormulario(id, formulario) {
    const comado =
        ` update tb_psicologo
            set nm_psicologo			=?, 
                dt_nascimento		    =?, 
                ds_telefone		        =?, 
                ds_email		    	=?, 
                ds_senha	            =?, 
                nr_crp       		    =?,
                nr_cpf                  =?
         where id_psicologo		        =?
     
         `
    const [resposta] = await con.query (comando, [formulario.nome, formulario.nascimento, formulario.telefone, formulario.email, formulario.senha, formulario.crp, formulario.cpf, id])
    return resposta.affectedRows;   
}

export async function deletarFormulario(id) {
    const comando =
        `delete from tb_psicologo
		       where id_psicologi = ?
        `
    const [resposta] = await con.query(comando, [id])
    return resposta.affectedRows;
}



