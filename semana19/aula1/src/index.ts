import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import createUser from './controller/user/createUser'
import getUserById from './controller/user/getUserById'
import editUser from './controller/user/editUser'
import createTask from './controller/task/createTask'
import getTaskById from './controller/task/getTaskById'
import login from './controller/user/login'
import { connection } from './data/connection'


dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

app.get("/", async function(req,res){
   res.send(await connection.raw('show tables'))
})


app.post('/user/signup', createUser)
app.post("/user/login", login)
app.get('/user/:id', getUserById)
app.post('/user/edit', editUser)

app.put('/task', createTask)
app.get('/task/:id', getTaskById)

app.listen(3003, () => {
   console.log('Servidor rodando na porta 3003')
})

