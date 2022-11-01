select * from tb_usuario;
select * from tb_admin;
select * from tb_indicacao;
select * from tb_indicacao_categoria;
select * from tb_publicacao;
select * from tb_psicologo;

select 	nm_clinica,
		nm_categoria
  from tb_indicacao_categoria
  join tb_indicacao on tb_indicacao_categoria.id_indicacao_categoria = tb_indicacao.id_indicacao_categoria;
     
     

     
     
     -- Carga Inicial LOGIN ADM

INSERT INTO tb_admin(ds_email, ds_senha)
     values ("admin@admin.com", "1234");
     
     INSERT INTO tb_usuario(ds_email, ds_senha)
     values ("admin@admin.com", "1234");
     
	

-- Carga Inicial INDICAÇÃO ADM
select * from tb_indicacao;
select * from tb_indicacao_categoria;

INSERT INTO tb_indicacao (nm_clinica, nm_cidade, ds_cep, ds_telefone, ds_endereco, ds_classificacao, ds_atendimento, id_indicacao_categoria)
     values ("Fleury" ,"São Paulo - SP","04814-075", '11-957194797' ,"Grajaú" ,4.8 ,"Segunda a Sexta..." , 1);

INSERT INTO tb_indicacao_categoria(nm_categoria)
     values ("Saúde");

INSERT INTO tb_indicacao_categoria(nm_categoria)
     values ("Diversão");

INSERT INTO tb_indicacao_categoria(nm_categoria)
     values ("Educação");     
     
     
insert into tb_psicologo (nm_psicologo, dt_nascimento, ds_telefone, ds_email, ds_senha, nr_crp, ds_cpf)
	values ('Maria', '2005-04-06', '11986549698', 'iago.tangaraa5663@gmail.com', '1234', 'XX999999', '50383220858');

insert into tb_publicacao (id_usuario, ds_titulo, ds_publicacao, dt_publicacao, img_publicacao, pb_aprovado)
     values (2, 'TITULOOOOOOOOOOO', 'descricacaodescricacaodescricacaodescricacaodescricacao', curdate(), null, false);
   
   
   select 	nm_clinica     nome,
			nm_cidade             cidade,
			ds_cep                cep,
			ds_endereco           endereco,
			ds_classificacao      classificacao,
			img_clinica           img,
			nm_categoria          categoria
	 from	tb_indicacao
     inner join tb_indicacao_categoria on tb_indicacao.id_indicacao_categoria = tb_indicacao_categoria.id_indicacao_categoria;
     
     
	select count(id_psicologo) as qtdPsicologos
    from tb_psicologo;
    
    select count(id_publicacao) as qtdPublicacoes
    from tb_publicacao;
    
    select count(id_usuario) as qtdContas
	from tb_usuario;
    
    insert into tb_publicacao(id_usuario, id_psicologo, ds_titulo, ds_publicacao, dt_publicacao, img_publicacao, pb_aprovado)
      values (null, 1 , 'TiTuLooooo2', 'Lorem lorem lorem', curdate(), null, false);
    
    select * from tb_psicologo;
    
    select 	id_psicologo 	id,
			nm_psicologo 	nome,
            dt_nascimento 	data,
            ds_telefone		telefone,
            ds_email		email,
            ds_senha		senha,
            nr_crp			crp,
            ds_cpf			cpf
	  from tb_psicologo;
      
         select id_publicacao 				          as 'id',
                tb_publicacao.id_usuario		          as 'idUsuario',
                tb_publicacao.id_psicologo		          as 'idPsi',
                nm_usuario						     as 'nome',
                nm_psicologo					          as 'nomePsi',
                tb_usuario.ds_email				     as 'email',
                tb_psicologo.ds_email			          as 'emailPsi',
                ds_titulo						     as 'titulo',
                ds_publicacao					          as 'descricao',
                date_format(dt_publicacao, '%d/%m/%Y')	     as 'data',
                img_publicacao					     as 'imagem',
                pb_aprovado                                 as 'aprovado' 
           from tb_publicacao
      left join tb_usuario on tb_publicacao.id_usuario = tb_usuario.id_usuario
      left join tb_psicologo on tb_publicacao.id_psicologo = tb_psicologo.id_psicologo;
    
         select id_publicacao 		                    as 'id',
                tb_publicacao.id_usuario		          as 'idUsuario',
                tb_publicacao.id_psicologo		          as 'idPsi',
                nm_usuario						     as 'nome',
                nm_psicologo					          as 'nomePsi',
                tb_usuario.ds_email				     as 'email',
                tb_psicologo.ds_email			          as 'emailPsi',
                ds_titulo						     as 'titulo',
                ds_publicacao					          as 'descricao',
                date_format(dt_publicacao, '%d/%m/%Y')	     as 'data',
                img_publicacao					     as 'imagem',
                pb_aprovado                                 as 'aprovado' 
           from tb_publicacao
      left join tb_usuario on tb_publicacao.id_usuario = tb_usuario.id_usuario
      left join tb_psicologo on tb_publicacao.id_psicologo = tb_psicologo.id_psicologo
          where pb_aprovado = false;
    
           
           select id_publicacao 					        as 'id',
                tb_publicacao.id_usuario		        as 'idUsuario',
                tb_publicacao.id_psicologo		        as 'idPsi',
                tb_usuario.nm_usuario						        as 'nome',
                tb_psicologo.nm_psicologo					        as 'nomePsi',
                tb_usuario.ds_email				        as 'email',
                tb_psicologo.ds_email			        as 'emailPsi',
                ds_titulo						        as 'titulo',
                ds_publicacao					        as 'descricao',
                date_format(dt_publicacao, '%d/%m/%Y')	as 'data',
                img_publicacao					        as 'imagem',
                pb_aprovado                             as 'aprovado' 
           from tb_publicacao
      left join tb_usuario on tb_publicacao.id_usuario = tb_usuario.id_usuario
      left join tb_psicologo on tb_publicacao.id_psicologo = tb_psicologo.id_psicologo
      where  pb_aprovado = false
           and  id_publicacao = ?;

           -- select para publicações da parte de usuário;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
           
           select id_publicacao 					as 'id',
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
    where pb_aprovado = true;
    