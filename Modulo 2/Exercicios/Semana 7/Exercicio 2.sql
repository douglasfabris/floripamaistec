create table Usuario (
id serial primary key,
nome varchar(255),
login varchar(255),
senha varchar(255),
email varchar(255),
dt_nascimento date check (dt_nascimento < (current_date - interval '18' year ))
);

create table Jogos (
id serial primary key,
nome varchar(255),
dt_lancamento date,
genero_id int
);

create table Plataformas (
id serial primary key,
nome varchar(255)
);

create table jogosPlataformaRel (
jogo_id int,
plataforma_id int,
foreign key (jogo_id) references Jogos(id),
foreign key (plataforma_id) references Plataformas(id)
);

create table Generos (
id serial primary key,
nome varchar(255)
);

alter table Jogos add foreign key (genero_id) references Generos(id);

insert into Plataformas(nome) values ('PS1'), ('PS2'), ('PS3'), ('PS4'), ('PS5'), ('X-BOX Serie S'), ('X-BOX Serie X'), ('PC')

insert into Generos(nome) values ('Simulação')

insert into Jogos(nome, genero_id) values ('The Sims 4 Base', 1)

insert into jogosPlataformaRel(jogo_id, plataforma_id) values (1,5), (1,6), (1,9)

insert into Usuario(nome, login, senha, email, dt_nascimento) values ('Derpson da Silva', 'derpinho', 'derpinho91', 'derpinho91@hotmail.com', '01/01/1991')

create table jogosUsuariosRel (
jogo_id int,
usuario_id int,
foreign key (jogo_id) references Jogos(id),
foreign key (usuario_id) references Usuario(id)
);

insert into jogosUsuariosRel(jogo_id, usuario_id) values (1,2)

select NomeDoFilme, Duracao from Filme where NomeDoFilme like '%Ação' order by Duracao