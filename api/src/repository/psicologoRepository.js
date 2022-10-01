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