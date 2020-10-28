import {connection} from "../index"
import { Actors } from "../types";

export async function getActors():Promise<Actors[]> {
   try {
      const result = await connection.raw("SELECT * FROM Actor")

      console.log(result[0])

      return result[0]
   } catch (error) {
      console.log(error)
      return []
   }
}