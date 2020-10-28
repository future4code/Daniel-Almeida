import { connection} from "../index"
import { Actors } from "../types";

export async function searchActorByName(
   name: string
):Promise<Actors[]> {
   try {
      const result = await connection
         .select("*")
         .from("Actor")
         .where("name", "LIKE", `%${name}%`)

      console.log(result)

      return result
   } catch (error) {
      console.log(error)
      return []
   }
}
