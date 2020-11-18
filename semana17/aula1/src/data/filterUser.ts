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
    
    const resultPerPage = 5
    const offset:number = resultPerPage * (data.page - 1);

    

    const result = await connection.raw(`
    SELECT * from aula48_exercicio
    WHERE name LIKE "%${data.name}%"
    ORDER BY ${data.type} ${data.orderBy} 
    LIMIT ${resultPerPage}
    OFFSET ${offset}
    `)

    return result[0]

  } catch(e) {
    throw new Error(e.sqlMessage)
  }
}