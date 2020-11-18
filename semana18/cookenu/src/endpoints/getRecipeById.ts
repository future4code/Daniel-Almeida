import { Request, Response } from "express";
import selectRecipeById from "../data/selectRecipeById";
import { getTokenData} from "../services/authenticator";

export default async function getTaskById(
   req: Request,
   res: Response
) {

   const token = req.headers.authorization as string
   const auth = getTokenData(token)

   try {
      const result = await selectRecipeById(req.params.id)

      if (!auth) {
         throw new Error("Session expired")
      }

      if (!result) {
         throw new Error("Recipe not found")
      }

      res.status(200).send({
         id: result.id,
         title: result.title,
         description: result.description,
         created_at: result.created_at
      })

   } catch (error) {
      res.status(400).send({
         message: error.message || error.sqlMessage
      })
   }
}