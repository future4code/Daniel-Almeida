# Relações SQL

## Exercício 1

a) É uma chave primária de outra tabela que serve para relacionar.

c)
```
12:48:53	INSERT INTO Rating (id, comment, rate, movie_id)  VALUES (   "003",     "Muito bom TB!",     7,   "007" )	Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`jackson-daniel-viana`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))	0.051 sec

``` 

## Exercício 2

a) Uma tabela que relaciona o filme com ator

c)
````
13:38:59	INSERT INTO MovieCast (movie_id, actor_id)  VALUES (   "001",     "010"    )	Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`jackson-daniel-viana`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))	0.073 sec
````
d)
````
13:41:30	DELETE FROM Actor WHERE id = "001"	Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`jackson-daniel-viana`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))	0.039 sec
````

## Exercício3

a) Operador condicional 

b) 
````
SELECT title, Movie.id, rate FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;
````

## Exercício4

a)
````
SELECT m.id as movie_id, m.title, r.rate as rating, r.comment as rating_comment FROM Movie m
LEFT JOIN Rating r ON m.id = r.movie_id;
````
b)
```
SELECT m.id as movie_id, m.title, mc.actor_id FROM Movie m
RIGHT JOIN MovieCast mc ON mc.movie_id = m.id;
```

c)
```
SELECT AVG(r.rate), m.id, m.title FROM Movie m
LEFT JOIN Rating r ON m.id = r.movie_id
GROUP BY (m.id);
```

## Exercício5

a) Porque está utilizando 3 tabelas

b)
````
SELECT m.id, title, a.name FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
````
c)Faltou um . no lugar da virgula em "m.title"
````
SELECT m.id as movie_id, m.title, a.id as actor_id, a.name FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
````

## Exercício6

a) relação de M:N

b)
```
CREATE TABLE Oscar (
		movie_id VARCHAR(255),
		oscar VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
   
```