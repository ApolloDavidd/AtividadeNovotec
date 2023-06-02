create database varejo;

create table funcionarios(

id_funcionario int primary key auto_increment,
nome_funcionario varchar (100),
data_nasc_func date

);



create table clientes(

id_cliente int primary key auto_increment,
nome_cliente varchar(45),
data_nasc_cliente date

);

create table celulares_vendido(

fk_funcionario int,
fk_cliente int,
marca varchar(45),
modelo varchar(100),
primary key (fk_cliente, fk_funcionario),
constraint fk_cliente foreign key (fk_cliente) references clientes(id_cliente),
constraint fk_funcionario foreign key (fk_funcionario) references funcionarios(id_funcionario)

);

insert into funcionarios (nome_funcionario,data_nasc_func)
VALUES ("Apollo","2004-08-15"),
       ("Robson","1980-06-23"),
       ("Miguel","2005-11-27"),
       ("Pedro","2005-05-01"),
       ("Raissa","2000-09-07");
       
insert into clientes (nome_cliente,data_nasc_cliente)
VALUES  ("José","1980-06-25"),
        ("Juscelino","2004-03-04"),
        ("Cláudia","1975-11-05"),
        ("Mônica","1990-09-20"),
        ("Psirico","1987-05-02");
        
insert celulares_vendido(marca,modelo,fk_funcionario,fk_cliente)
VALUES  ("Nokia","XT-9870",2,1),
        ("Samsung","Galaxy m53",3,2),
        ("Samsung","Galaxy s23",1,2),
        ("Apple","Iphone 200",1,3),
        ("Apple","Iphone 200s",4,3),
        ("Asus","zenfone 3",1,4),
        ("Samsung","Galaxy m100",5,5),
        ("Samsung","Galaxy a100",1,5),
        ("Apple","iphone 41",4,5),
        ("Apple","Iphone 59",3,5);
        
        
Select * from celulares_vendido join funcionarios on funcionarios.id_funcionario = celulares_vendido.fk_funcionario join clientes on clientes.id_cliente = celulares_vendido.fk_cliente  
        
