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


