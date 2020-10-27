# Introdução a banco de dados

## Primeira query

_

```sh
ALTER TABLE Actor ADD favorite_ice_cream_flavor VARCHAR(255);

```
O comando abaixo adiciona uma coluna na tabela de Actor para representar o sabor de sorvete favorito da celebridade

```sh
ALTER TABLE Actor DROP COLUMN salary;

```
Remove a coluna salário

```sh
ALTER TABLE Actor CHANGE gender sex VARCHAR(6);

```
Troca gender por sex

```sh
ALTER TABLE Actor CHANGE gender gender VARCHAR(255);

```
Troca o tamanho do VARCHAR

```sh
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```
Altera a coluna gender da tabela ACTOR para que ele aceite strings com até 100 caracteres
## Segunda query

```sh
INSERT INTO Actor (id, name, salary, birth_date)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);
```

Tentar adicionar outro elemento com o mesmo id ocorre erro:
>	INSERT INTO Actor (id, name, salary, birth_date, gender) VALUES(   "001",    >"Glória Pires",   12000000,   "1963-08-23",    "female" )	Error Code: 1062. Duplicate >entry '001' for key 'PRIMARY'	0.024 sec

**A chave primaria é única**
```sh
INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```

>	INSERT INTO Actor (id, name, salary) VALUES(   "003",    "Fernanda Montenegro",   >300000,   "1929-10-19",    "female" )	Error Code: 1136. Column count doesn't match >value count at row 1	0.115 sec

**Os valores da colunas não combina com os valores das linhas**
```sh
INSERT INTO Actor (id, salary, birth_date, gender) VALUES(   "004",   400000,   "1949-04-18",    "male" )	Error Code: 1364. Field 'name' doesn't have a default value	0.083 sec
````
>	INSERT INTO Actor (id, salary, birth_date, gender) VALUES(   "004",   400000,   "1949-04-18",    "male" )	Error Code: 1364. Field 'name' doesn't have a default value	0.083 sec

**O campo "name" não possui valor padrão**
```sh
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);
````
>15:35:35	INSERT INTO Actor (id, name, salary, birth_date, gender) VALUES(   "005",    "Juliana Paes",   719333.33,   1979-03-26,    "female" )	Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1	0.020 sec

**O valor para data é incorreto**


## Terceira query
```sh
SELECT id, name from Actor WHERE gender = "female"
```

>Retorna todas as atrizes

```sh
SELECT salary from Actor WHERE name = "Tony Ramos"
````

```sh
SELECT salary from Actor WHERE gender = "invalid"
````
>Retorna vazio pq "invalid" não da match

```sh
SELECT id, name from Actor WHERE salary > 500000
```

## Quarta query

