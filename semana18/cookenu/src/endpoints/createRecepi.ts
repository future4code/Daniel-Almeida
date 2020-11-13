import { Request, Response } from "express";
import insertRecepi from "../data/insertRecepi";
import { getTokenData } from "../services/authenticator";
import {generateId} from "../services/idGenerator";
import moment from "moment";


export default async function createRecipe(
   req: Request,
   res: Response
) {

   const token = req.headers.authorization as string
   const auth = getTokenData(token)
   const id: string = generateId()
   const created_at = moment().format("YYYY/MM/DD")

   try {

      if(!auth){
         throw new Error("Authorization invalid.")
      }

      if (
         !req.body.title ||
         !req.body.description
         
      ) {
         throw new Error('"title", "description", are oblige')
      }

      

      await insertRecepi(
         id,
         auth.id,
         req.body.title,
         req.body.description,
         created_at
         
      )

      res.status(200).send({
         message: "Recipe create!"
         
      })

   } catch (error) {
      let message = error.sqlMessage || error.message
      res.status(400).send({ message })
   }
}