import express from 'express'
import cors from 'cors'
import { connection } from './data/connection'

const app = express()
app.use(express.json())
app.use(cors())

app.get("/", async function(req,res){
   try{ 

      res.send(await connection.raw('show tables'))
   }
   catch(err){
      res.send(err.sqlMessage || err.message)
   }
})



app.listen(3003, () => {
   console.log('Servidor rodando na porta 3003')
})
