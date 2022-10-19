-- Carga Inicial LOGIN ADM

INSERT INTO tb_admin(ds_email, ds_senha)
     values ("admin@admin.com", "1234");



-- Carga Inicial INDICAÇÃO ADM
select * from tb_indicacao;
select * from tb_indicacao_categoria;
  
  select nm_clinica,
		 nm_categoria
  from tb_indicacao_categoria
  join tb_indicacao on tb_indicacao_categoria.id_indicacao_categoria = tb_indicacao.id_indicacao_categoria;

--Consultar todas as INDICAÇÕES ADM 

  select nm_clinica,
          nm_cidade,
          ds_cep,
          ds_endereco,
          ds_classificacao,
          img_clinica,
          nm_categoria
   from tb_indicacao_categoria
   join tb_indicacao on tb_indicacao_categoria.id_indicacao_categoria = tb_indicacao.id_indicacao_categoria;


INSERT INTO tb_indicacao (nm_clinica, nm_cidade, ds_cep, ds_endereco, ds_classificacao, ds_atendimento, id_indicacao_categoria)
     values ("Fleury" ,"São Paulo - SP","04814-075" ,"Grajaú" ,4.8 ,"Segunda a Sexta..." , 3);
     
     INSERT INTO tb_indicacao (nm_clinica, nm_cidade, ds_cep, ds_endereco, ds_classificacao, ds_atendimento, id_indicacao_categoria)
     values (?,?,?,?,?,?,?,?);

INSERT INTO tb_indicacao_categoria(nm_categoria)
     values ("Saúde");

INSERT INTO tb_indicacao_categoria(nm_categoria)
     values ("Diversão");

INSERT INTO tb_indicacao_categoria(nm_categoria)
     values ("Educação");     

      insert into tb_psicologo (nm_psicologo, dt_nascimento, ds_telefone, ds_email, ds_senha, nr_crp, ds_cpf)
				values ('Maria', '2005-04-06', '11986549698', 'iago.tangaraa5663@gmail.com', '1234', 'XX999999', '50383220858');
     
     
     
     select * from tb_psicologo;
     
     
     select  id_psicologo        as 'id',
            nm_psicologo		as  'nome',
			ds_email			as	'email',
            ds_telefone			as	'telefone',
            nr_crp				as	'crp'
	  from  tb_psicologo;
      
      select nm_clinica     nome,
    nm_cidade             cidade,
    ds_cep                cep,
    ds_endereco           endereco,
    ds_classificacao      classificacao,
    img_clinica           img,
    nm_categoria          categoria
    from tb_indicacao_categoria
    
   join tb_indicacao on tb_indicacao_categoria.id_indicacao_categoria = tb_indicacao.id_indicacao_categoria;
   
   
   select 	nm_clinica     nome,
			nm_cidade             cidade,
			ds_cep                cep,
			ds_endereco           endereco,
			ds_classificacao      classificacao,
			img_clinica           img,
			nm_categoria          categoria
	 from	tb_indicacao
     inner join tb_indicacao_categoria on tb_indicacao.id_indicacao_categoria = tb_indicacao_categoria.id_indicacao_categoria;
     
     
     select * from tb_indicacao_categoria;
     
     select * from tb_psicologo;
     
     
     delete from tb_psicologo
		where id_psicologo= 1;


     select count(id_psicologo) as qtdPsicologos
    from tb_psicologo;
    
    select count(id_publicacao) as qtdPublicacoes
    from tb_publicacao;
    
    select count(id_usuario) as qtdContas
	from tb_usuario;


