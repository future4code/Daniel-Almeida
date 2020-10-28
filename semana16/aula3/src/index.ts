import express, { Express } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { getAllActors } from "./endpoints/getAllActors";
import { searchActorByName} from "./data/searchActorByName"

import knex from 'knex'

import dotenv from "dotenv"
import { getActorFromName } from "./endpoints/searchActorsByName";


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

app.get("/actors/all", getAllActors);

app.get("/actors/:name", getActorFromName);





const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
});

