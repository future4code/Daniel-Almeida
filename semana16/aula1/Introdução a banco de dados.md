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
UPDATE Actor
SET birth_date = "2000-00-00"
WHERE id = "003"
```
Query que atualize o nome e a data de nascimento do ator com o id 003

```sh
UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";
```
Query que atualize o nome da atriz Juliana Paes para JULIANA PÃES

```sh
UPDATE Actor
SET
  name = "Lázaro Ramos",
  salary = 10000,
  birth_date = "1980-11-01",
  gender = "male"
WHERE
  id = "005"
````
Query que atualize todas as informações do ator com o id 005

```sh
UPDATE Actor
SET name = "Moacyr Franco"
WHERE id = "123"
);
````
16:16:07	UPDATE Actor SET name = "Moacyr Franco" WHERE id = "123"	0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0	0.025 sec

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

