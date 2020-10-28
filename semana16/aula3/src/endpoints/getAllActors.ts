import { Request, Response } from "express"
import { getActors } from "../data/getActors"
import { Actors } from "../types"

export const getAllActors = async (req: Request, res: Response) => {
   try {

      const actors: Actors[] = await getActors()

      if (!actors.length) {
         res.statusCode = 404
         throw new Error("Nofound")
      }

      res.status(200).send(actors)

   } catch (error) {
      console.log(error)
      res.send(error.message)
   }
}