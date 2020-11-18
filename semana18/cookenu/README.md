# Cookenu

## ESTRUTURA DE DADOS  
  
* ## Usuários
  * id
  * name
  * password
  * email

* ## Tarefas 
  * id
  * title
  * description
  * create
  * user_id
   
---

## CRIAÇÃO DE TABELAS - MySql

```sql
CREATE TABLE cookenu_users (
		id VARCHAR(255) PRIMARY KEY,
		name VARCHAR(255) NOT NULL,
		email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL
        
    
);
```
```sql
CREATE TABLE cookenu_recipes (
id VARCHAR(255) PRIMARY KEY,
user_id VARCHAR(255) NOT NULL,
title VARCHAR(64) NOT NULL,
description TEXT NOT NULL,
created_at DATE NOT NULL,
FOREIGN KEY(user_id) REFERENCES cookenu_users(id)
);
```
```sql
CREATE TABLE to_do_list_assignees (
    task_id VARCHAR(64),
    assignee_id VARCHAR(64),
    PRIMARY KEY (task_id, assignee_id),
    FOREIGN KEY (task_id) REFERENCES to_do_list_tasks(id),
    FOREIGN KEY (assignee_id) REFERENCES to_do_list_users(id)
);
```
---

## ENDPOINTS 

* ## Criar usuário
  * Método: PUT
  * Path: `/user`
  * Body:
    * name (obrigatório)
    * email (obrigatório)
    * password 6 cararacteres  (obrigatório)

* ## Pegar usuário pelo id
  * Método: GET
  * Path: `/user/:id`
  * Body de Resposta: (retornar um erro se não encontrar)
    * id
    * nickname


* ## Editar usuário**
  * Método: POST
  * Path: `/user/edit/:id`
  * Body:
    * name (opcional; não pode ser vazio)
    * nickname (opcional; não pode ser vazio)
    * email (opcional; não pode ser vazio)


* ## Criar tarefa
  * Método: PUT
  * Path: `/task`
  * Body:
    * title (obrigatório)
    * description (obrigatório)
    * deadline (obrigatório; formato `YYYY-MM-DD`)
    * authorId

* ## Pegar tarefa pelo id
  * Método: GET
  * Path: `/task/:id`
  * Body de Resposta: (retornar um erro se não encontrar)
    * id
    * title 
    * description
    * deadline (formato `YYYY-MM-DD`)
    * status
    * authorId
    * authorNickname