CREATE DATABASE psicologosDB;
USE psicologosDB;


CREATE TABLE tb_usuario(
	id_usuario		int primary key auto_increment,
    nm_usuario		varchar(100),
    ds_email		varchar(100),
    ds_senha		varchar(100),
    bt_termos			 boolean
);




CREATE TABLE tb_login(
	id_login		int primary key auto_increment,
    id_usuario		int,
    ds_email		varchar(100),
    ds_senha		varchar(100),
    
    foreign key (id_usuario) references tb_usuario(id_usuario)
);


CREATE TABLE tb_psicologo(
	id_psicologo		int primary key auto_increment,
    nm_psicologo		varchar(200),
    dt_nascimento		date,
    ds_telefone			varchar(20),
    ds_email			varchar(200),
    ds_senha			varchar(200),
    nr_crp				varchar(50),
    ds_cpf				varchar(20)
);



CREATE TABLE tb_publicacao(
	id_publicacao		int primary key auto_increment,
    id_usuario			int,
    id_psicologo		int,
    ds_titulo			varchar(100),
    ds_publicacao		varchar(500),
    dt_publicacao		date,
    img_publicacao		varchar(400),
    
    foreign key (id_usuario) references tb_usuario(id_usuario),
    foreign key (id_psicologo) references tb_psicologo(id_psicologo)
);


CREATE TABLE tb_login_psicologo(
	id_login_psicologo		int primary key auto_increment,
    id_psicologo			int,
    ds_email				varchar(100),
    ds_senha				varchar(100),
    
    foreign key (id_psicologo) references tb_psicologo(id_psicologo)
);


CREATE TABLE tb_admin(
    id_admin                int primary key auto_increment,
    ds_email                varchar(40),
    ds_senha                varchar(40)
);