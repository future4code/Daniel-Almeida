import { Request, Response } from "express";
import insertUser from "../data/insertUser";
import { generateToken } from "../services/authenticator";
import { hash } from "../services/hashManager";
import {generateId} from "../services/idGenerator";

export default async function createUser(
    req: Request,
    res: Response
) {
    try {

        const {
            name, email, password 
          } = req.body;
          
          if(!name ){
            throw new Error("Invalid name");
          }


          if(!email || email.indexOf("@") === -1){
            throw new Error("Invalid email");
          }
      
          if(!password || password.length < 6){
            throw new Error("Invalid password, minimal 6 characters");
          }

        const id: string = generateId()
        
        const cypherPassword = await hash(req.body.password);

        await insertUser(
            id,
            req.body.name,
            req.body.email,
            cypherPassword
                   )

         const token: string = generateToken({
            id
            
         })

        res
            .status(201)
            .send({
               message:"Create user",
               token
            })

    } catch (error) {
        res.status(400).send({
            message: error
        })
    }
}