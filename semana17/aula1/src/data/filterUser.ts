import { connection } from "..";
import { inputData } from "../types/User";


// export const filterUser = async (name: string): Promise<any> => {
//   try {

    

//     const result = await connection.raw(`
//       SELECT * FROM aula48_exercicio
//       WHERE name LIKE "%${name}%"
      
//     `)

//     return result[0]

//   } catch(e) {
//     throw new Error(e.sqlMessage)
//   }
// }
export const filterUser = async (data: inputData): Promise<any> => {
  try {

    

    const result = await connection.raw(`
      SELECT * FROM aula48_exercicio
      WHERE name LIKE "%${data.name}%"
      WHERE type = "${data.type}"
      ORDER BY ${data.orderBy} 
    `)

    return result[0]

  } catch(e) {
    throw new Error(e.sqlMessage)
  }
}