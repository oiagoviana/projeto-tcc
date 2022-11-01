CREATE DATABASE psicologosDB;
USE psicologosDB;


CREATE TABLE tb_usuario(
	id_usuario		int primary key auto_increment,
    nm_usuario		varchar(100),
    ds_email		varchar(100),
    ds_senha		varchar(100),
    ds_telefone		varchar(20),
    bt_termos			 boolean
);



CREATE TABLE tb_psicologo(
	id_psicologo		int primary key auto_increment,
    nm_psicologo		varchar(200),
    dt_nascimento		date,
    ds_telefone			varchar(20),
    ds_email			varchar(200),
    ds_senha			varchar(200),
    nr_crp				varchar(50),
    ds_cpf				varchar(20),
    bt_aprovado			boolean
);



CREATE TABLE tb_publicacao(
	id_publicacao		int primary key auto_increment,
    id_usuario			int,
    id_psicologo		int,
    ds_titulo			varchar(100),
    ds_publicacao		varchar(900),
    dt_publicacao		date,
    img_publicacao		varchar(400),
    pb_aprovado			boolean,
    foreign key (id_usuario) references tb_usuario(id_usuario),
    foreign key (id_psicologo) references tb_psicologo(id_psicologo)
);


CREATE TABLE tb_admin(
    id_admin                int primary key auto_increment,
    ds_email                varchar(40),
    ds_senha                varchar(40)
);

CREATE TABLE tb_indicacao_categoria(
    id_indicacao_categoria    	int primary key auto_increment,
    nm_categoria            	varchar(200)

);


CREATE TABLE tb_indicacao(
    id_indicacao            	int primary key auto_increment,
    id_indicacao_categoria    	int,
    nm_clinica                	varchar(100),
    nm_cidade                	varchar(100),
    ds_cep                    	varchar(30),
    ds_endereco                	varchar(200),
	ds_classificacao        	decimal(5,1),
    ds_atendimento            	varchar(200),
    img_clinica                	varchar(400),
    ds_telefone					varchar(20),
    foreign key	(id_indicacao_categoria) references tb_indicacao_categoria(id_indicacao_categoria)
);

create table tb_comentario(
	id_comentario		int primary key auto_increment,
    id_usuario			int,
    id_psicologo		int,
    id_publicacao		int,
    ds_comentario		varchar(500),
    dt_comentario		date,
     foreign key    (id_publicacao) references tb_publicacao(id_publicacao),
     foreign key	(id_usuario) references tb_usuario (id_usuario),
	 foreign key	(id_psicologo) references tb_psicologo(id_psicologo)
);

create table tb_chat(
	id_chat				int primary key auto_increment,
    id_usuario			int,
    id_psicologo		int,
    dt_solicitacao		date,
    bt_autorizado		boolean,
	foreign key	(id_usuario) references tb_usuario (id_usuario),
	foreign key	(id_psicologo) references tb_psicologo(id_psicologo)
);


create table tb_mensagem(
	id_mensagem			int primary key auto_increment,
    id_chat				int,
    tp_mensagem         varchar(100),
    ds_mensagem			varchar(500),
    dt_mensagem			time,
    foreign key	(id_chat) references tb_chat(id_chat)
);



show tables;
