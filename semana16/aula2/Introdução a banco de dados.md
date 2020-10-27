# Introdução a banco de dados

## Primeira query

_

```sh
CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
		gender VARCHAR(6) NOT NULL
);
```
VARCHAR(255) é utilizado pra dizer que a string tem o tamanho 255
FLOAT número não inteiro
NOT NULL o campo não pode estar vazio
PRIMARY KEY chave primária

O comando **SHOW** é utilizado para mostrar informações como a **DATABASE** que está em uso e mostrar as tabelas com **SHOW** **TABLES** 

O comando **DESCRIBE** retorna a tabela grid com as descrição 

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

