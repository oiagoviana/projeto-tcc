CREATE DATABASE colodb;
USE colodb;	


CREATE TABLE tb_usuario(
	id_usuario		int primary key auto_increment,
    nm_usuario		varchar(100) not null,
    ds_email		varchar(100) not null,
    ds_senha		varchar(100) not null,
    ds_telefone		varchar(20) not null,
    bt_termos			 boolean
);



CREATE TABLE tb_psicologo(
	id_psicologo		int primary key auto_increment,
    nm_psicologo		varchar(200) not null,
    dt_nascimento		date not null,
    ds_telefone			varchar(20) not null,
    ds_email			varchar(200) not null,
    ds_senha			varchar(200) not null,
    nr_crp				varchar(50) not null,
    ds_cpf				varchar(20) not null,
    bt_aprovado			boolean not null
);



CREATE TABLE tb_publicacao(
	id_publicacao		int primary key auto_increment,
    id_usuario			int,
    id_psicologo		int,
    ds_titulo			varchar(100) not null,
    ds_publicacao		varchar(900) not null,
    dt_publicacao		date not null,
    img_publicacao		varchar(400),
    pb_aprovado			boolean not null,
    foreign key (id_usuario) references tb_usuario(id_usuario),
    foreign key (id_psicologo) references tb_psicologo(id_psicologo)
);


CREATE TABLE tb_admin(
    id_admin                int primary key auto_increment,
    ds_email                varchar(40) not null,
    ds_senha                varchar(40) not null
);

CREATE TABLE tb_indicacao_categoria(
    id_indicacao_categoria    	int primary key auto_increment,
    nm_categoria            	varchar(200) not null

);


CREATE TABLE tb_indicacao(
    id_indicacao            	int primary key auto_increment,
    id_indicacao_categoria    	int not null,
    nm_clinica                	varchar(100) not null,
    nm_cidade                	varchar(100) not null,
    ds_cep                    	varchar(30) not null,
    ds_telefone					varchar(30) not null,
    ds_endereco                	varchar(200) not null,
	ds_classificacao        	decimal(5,1) not null,
    ds_atendimento            	varchar(200) not null,
    img_clinica                	varchar(400) not null,
    foreign key	(id_indicacao_categoria) references tb_indicacao_categoria(id_indicacao_categoria)
);

create table tb_comentario(
	id_comentario		int primary key auto_increment,
    id_usuario			int ,
    id_psicologo		int,
    id_publicacao		int not null,
    ds_comentario		varchar(500) not null,
    dt_comentario		date not null,
     foreign key    (id_publicacao) references tb_publicacao(id_publicacao),
     foreign key	(id_usuario) references tb_usuario (id_usuario),
	 foreign key	(id_psicologo) references tb_psicologo(id_psicologo)
);

create table tb_chat(
	id_chat				int primary key auto_increment,
    id_usuario			int not null,
    id_psicologo		int not null,
    dt_solicitacao		date not null,
    bt_autorizado		boolean not null,
	foreign key	(id_usuario) references tb_usuario (id_usuario),
	foreign key	(id_psicologo) references tb_psicologo(id_psicologo)
);

create table tb_mensagem(
	id_mensagem			int primary key auto_increment,
    id_chat				int not null,
    tp_mensagem         varchar(100) not null,
    ds_mensagem			varchar(500) not null,
    dt_mensagem			datetime not null,
    foreign key	(id_chat) references tb_chat(id_chat)
);