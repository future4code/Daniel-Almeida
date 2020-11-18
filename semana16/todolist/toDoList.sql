CREATE TABLE TodoListUser ( 
id INT PRIMARY KEY AUTO_INCREMENT,
 name VARCHAR(255) NOT NULL,
 nickname VARCHAR(255) NOT NULL,
 email VARCHAR(255) UNIQUE NOT NULL );

INSERT INTO TodoListUser (name, nickname, email) 
VALUES ("JOao", "joao", "joao@gmail.com");

SELECT * FROM TodoListUser;

DELETE FROM TodoListUser WHERE id = "011";

CREATE TABLE TodoListTask ( id INT PRIMARY KEY AUTO_INCREMENT,
 title VARCHAR(255) NOT NULL, description TEXT NOT NULL,
 status VARCHAR(255) NOT NULL DEFAULT "to_do", limit_date DATE NOT NULL,
 creator_user_id INT NOT NULL, FOREIGN KEY (creator_user_id) REFERENCES TodoListUser(id) );
 
 
 INSERT INTO TodoListTask (title, description, limit_date, creator_user_id) VALUES ("Comprar comida", "Ir no supermercado", "2030/06/06", 001);
 
 SELECT * FROM TodoListTask;