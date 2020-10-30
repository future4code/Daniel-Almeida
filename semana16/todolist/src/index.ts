import express, { Express, Request, Response} from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { create } from "../src/endpoints/createUser"
import knex from 'knex'
import dotenv from "dotenv"



dotenv.config()

console.log(process.env.teste)

export const connection = knex({	// Estabelece conexão com o banco
   client: "mysql",
   connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
   }
})

const app: Express = express();

app.use(express.json());
app.use(cors())

app.put("/user", create)




const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
});

