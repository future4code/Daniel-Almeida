CREATE TABLE User_Arq(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            role ENUM("ADMIN","NORMAL") DEFAULT "NORMAL"
            
         );