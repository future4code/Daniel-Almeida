import { Request, Response } from "express";
import insertUser, { USER_ROLES } from "../data/user/insertUser";
import { generateToken, AuthenticationData, getTokenData } from "../services/authenticator";
import { hash } from "../services/hashManager";
import {generateId} from "../services/idGenerator";
import updateUser from "../data/user/updateUser";

export const userController = () =>{

      async function createUser(
        req: Request,
        res: Response
    ) {
        try {
    
            if (
                !req.body.name ||
                !req.body.nickname ||
                !req.body.email ||
                !req.body.password ||
                !req.body.role
            ) {
              throw new Error('Preencha os campos "name","nickname", "email" e "password"')
            }
    
            const id: string = generateId()
            
            const cypherPassword = await hash(req.body.password);
    
            await insertUser(
                id,
                req.body.name,
                req.body.nickname,
                req.body.email,
                cypherPassword,
                req.body.role
            )
    
             const token: string = generateToken({
                id,
                role: req.body.role
             })
    
            res
                .status(201)
                .send({
                   message:"Usuário criado!",
                   token
                })
    
        } catch (error) {
            res.status(400).send({
                message: error.message || error.sqlMessage
            })
        }
    }


    async function editUser(
        req: Request,
        res: Response
     ) {
        try {
     
           const token: string = req.headers.authorization as string
     
           const tokenData: AuthenticationData = getTokenData(token)
     
           console.log(tokenData.role !== USER_ROLES.ADMIN)
           if(tokenData.role !== USER_ROLES.ADMIN) {
              res.statusCode = 401
              throw new Error ('Não autorizado')
           }
     
           if (
              req.body.name === '' ||
              req.body.nickname === '' ||
              req.body.email === ''
           ) {
              throw new Error("Nenhum dos campos pode estar em branco")
           }
     
           if (!req.body.name && !req.body.nickname && !req.body.email) {
              throw new Error("Escolha ao menos um valor para alterar")
           }
     
           await updateUser(
              tokenData.id,
              req.body.name,
              req.body.nickname,
              req.body.email
           )
     
     
           res.status(200).send({
              message: "Usuário atualizado!"
           })
     
        } catch (error) {
           let { message } = error
     
           if (
              message === "jwt must be provided" ||
              message === "invalid signature" ||
              message === "jwt expired"
           ) {
              res.statusCode = 401
              message = "Não autorizado"
           }
     
           res.send({
              message
           })
        }
     }


}