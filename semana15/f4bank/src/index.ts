//importando express com Request e Response e cors
import express, {Request, Response} from 'express';
import cors from 'cors';
//extra: importando configuração de rede do node
import { AddressInfo } from "net";
//iniciando a aplicação web com express
const app = express();

//ativando os módulos de Bodyparser e cors
app.use(express.json());
app.use(cors());

type User = {
    cpf: number,
    name: string,
    yearBorn: number,
    balance: number,
    extract: number
}


let users: User[] = [
    {
        cpf: 12312312312,
        name: "Alice",
        yearBorn: 2000,
        balance: 0,
        extract: 0
    },
    
]

app.get("/users", (req: Request, res: Response): void =>{

    try{
        res.status(200).send(users);
    }catch(error){
        res.status(400).send({
            message: "Error searching for users"
        });
    }
});

app.get("/users/:cpf", (req: Request, res: Response): void =>{

    try{
        const usersByCpf = users.filter((user)=>user.cpf === Number(req.params.cpf)
        )
        res.status(200).send(usersByCpf);
    }catch(error){
        res.status(400).send({
            message: "Error searching for users"
        });
    }
});

app.post("/users", (req: Request, res: Response): void=>{
    try{
        const {cpf, name, yearBorn, balance, extract} = req.body;
        const user = {
            cpf,
            name,
            yearBorn,
            balance,
            extract            
        }
        
        if (user.yearBorn <= 2002){
        users.push(user);
            res.status(200).send({message: "User created successfully"})
        }
        else {
            res.status(404).send({message: "The user must be of legal age"})
        }
        
    }catch(error){
        res.status(400).send({
            message: "Error inserting for users"
        });
    }
})

app.put("/users/:cpf/:plus", (req: Request, res: Response): void=>{
    try{
        const usersByCpf: User[]= users.filter((user)=>user.cpf === Number(req.params.cpf)
        )
        console.log(usersByCpf)

        usersByCpf.map(item => {
            const newBalance = item.balance
            const newExtract = []
            newExtract.push(newBalance)
        })
        
        
            res.status(200).send({message: "Deposit successfully"})
        
        
    }
    
    catch(error){
        res.status(400).send({
            message: "Error deposit"
        });
    }
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});
  
