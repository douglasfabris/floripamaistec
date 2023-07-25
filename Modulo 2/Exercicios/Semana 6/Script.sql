create table Projeto (
id int primary key,
nome varchar(30),
descricao varchar(60),
data_inicio date,
data_prazo date
);

create table Tarefa (
id int primary key,
nome varchar(30),
descricao varchar(60),
data_inicio date,
data_prazo date,
conclusao bool,
projeto_id int,
categoria_id int,
foreign key (projeto_id) references Projeto(id),
foreign key (categoria_id) references Categorias(id)
);

create table Categorias (
id int primary key,
nome varchar(30),
descricao varchar(60)
);

insert into Projeto(id, nome, descricao, data_inicio, data_prazo)
values(1, 'Projeto A', 'Descrição do Projeto A', '2023-01-01', '2023-02-28'),
(2, 'Projeto B', 'Descrição do Projeto B', '2023-03-01', '2023-04-30'),
(3, 'Projeto C', 'Descrição do Projeto C', '2023-05-01', '2023-06-30')

insert into Categorias(id, nome, descricao)
values(1, 'Tarefa pessoal', 'Tarefas relacionadas a assuntos pessoais'),
(2, 'Tarefa profissional', 'Tarefas relacionadas ao trabalho'),
(3, 'Tarefa acadêmica', 'Tarefas relacionadas a estudos')

insert into Tarefa (id, nome, descricao, projeto_id, categoria_id, data_inicio, data_prazo, conclusao)
values(1, 'Tarefa 1', 'Descrição da Tarefa 1', 1, 1, '2023-01-05', '2023-01-15', true),
(2, 'Tarefa 2', 'Descrição da Tarefa 2', 1, 2, '2023-01-10', '2023-01-20', false),
(3, 'Tarefa 3', 'Descrição da Tarefa 3', 2, 3, '2023-03-05', '2023-03-15', false),
(4, 'Tarefa 4', 'Descrição da Tarefa 4', 2, 1, '2023-03-10', '2023-03-20', false),
(5, 'Tarefa 5', 'Descrição da Tarefa 5', 3, 2, '2023-05-05', '2023-05-15', false);

select * from Tarefa where conclusao=true

select * from Tarefa where data_prazo < now() and conclusao=false

select count(id), projeto_id from Tarefa group by projeto_id 

