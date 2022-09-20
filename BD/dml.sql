

-- Carga Inicial LOGIN ADM

INSERT INTO tb_admin(ds_email, ds_senha)
     values ("admin@admin.com", "1234");






-- Carga Inicial INDICAÇÃO ADM

INSERT INTO tb_indicacao (nm_clinica, nm_cidade, ds_cep, ds_endereco, ds_classificacao, ds_atendimento, id_indicacao_categoria)
     values ("Fleury" ,"São Paulo - SP","04814-075" ,"Grajaú" ,4.8 ,"Segunda a Sexta..." , 1);

INSERT INTO tb_indicacao_categoria(nm_categoria)
     values ("Saúde");

INSERT INTO tb_indicacao_categoria(nm_categoria)
     values ("Diversão");

INSERT INTO tb_indicacao_categoria(nm_categoria)
     values ("Educação");     


INSERT INTO tb_indicacao (nm_clinica, nm_cidade, ds_cep, ds_endereco, ds_classificacao, ds_atendimento, id_indicacao_categoria)
     values (?,?,?,?,?,?,?);

     